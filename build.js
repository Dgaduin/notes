const fs = require('fs');
const { promisify } = require('util');
const child = require('child_process');
const replace = require('replace-in-file');
const copyfiles = require('copyfiles');
const rimraf = require('rimraf');
const FlexSearch = require('flexsearch');
const fm = require('front-matter');

const readDir = promisify(fs.readdir);
const createDir = promisify(fs.mkdir);
const deleteDir = promisify(rimraf);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const copy = promisify(copyfiles);
const exec = promisify(child.exec);

const notes = './notes';
const staging = './staging';
const dist = './dist';

const replaceOptions = {
  files: `${staging}/*.md`,
  from: [
    /\[\[(.+)\]\] (.+)/g, // match zettle links and converts them to static local links
    /[^/]#([^\s#]+)/g], // finds tags and points them to a search url for tags
  to: ['[$2](./#/note/$1)', '[$&](./#/search/$1)'],
};

const clearAll = async () => Promise.all([
  (console.log('Clearing directories'), console.log('\tClearing distribution folder'), deleteDir(dist)),
  (console.log('\tClearing staging folder\n'), deleteDir(staging)),
]);

const stage = () => Promise.all([
  (console.log('Creating directories'), console.log('\tCreating staging folder'), createDir(staging)),
  (console.log('\tCreating distribution folder'), createDir(dist)),
  (console.log('\tCreating distribution/notes folder'), createDir(`${dist}/notes`)),
  (console.log('\tCreating distribution/images folder'), createDir(`${dist}/images`)),
  (console.log('\tCopying notes to staging folder\n'), copy([`${notes}/*.md`, staging], true)),
  (console.log('\tCopying images to distribution folder\n'), copy([`${notes}/images/*.*`, `${dist}/images`], true)),
]);

const readAndExtractMetadata = async () => {
  console.log('Extracting metadata');

  const files = await readDir(staging);
  console.log(`\tFound ${files.length} files`);
  console.log('\tReading Files');

  const notesCollection = await Promise.all(
    files
      .reverse()
      .map(async (file, i) => {
        console.log(`\t\tProcessing file ${i + 1} of ${files.length} : ${file}`);
        const filePath = `${staging}/${file}`;

        return readFile(filePath, 'utf8')
          .then((data) => {
            const frontMatter = fm(data);
            const fileName = file.split('.')[0];

            return {
              data: {
                title: fileName,
                author: 'Atanas Pashkov',
                fileName,
                filePath,
                link: `/#/note/${fileName}`,

                ...frontMatter.attributes,
              },
              body: frontMatter.body,
            };
          });
      }),
  );
  console.log('\tRead all files');
  console.log('\tCreating metadata.json file\n');
  await writeFile(`${dist}/metadata.json`, JSON.stringify(notesCollection.map((x) => x.data)));
  return notesCollection;
};

const generateNotes = async (notesCollection) => {
  console.log('Generating html files from markdown');
  const commands = notesCollection.map(async (note) => {
    const command = `pandoc ${note.data.filePath} -o ${dist}/notes/${note.data.fileName}.html --metadata pagetitle="${note.data.title}" --metadata author="${note.data.author}"`;
    return exec(command);
  });

  await Promise.all(commands);
  console.log('Finished generating html\n');
  return notesCollection;
};

const clearStaging = () => (console.log('Clearing staging folder\n'), deleteDir(staging));

const generateSearchIndex = async (notesCollection) => {
  console.log('Generating search index');
  const index = new FlexSearch();
  notesCollection
    .forEach((note) => {
      index.add(note.data.fileName, note.body);
    });
  await writeFile(`${dist}/searchIndex.json`, index.export());
  console.log('Finished generating search index\n');
};


clearAll()
  .then(stage)
  .then(() => replace(replaceOptions))
  .then(readAndExtractMetadata)
  .then(generateNotes)
  .then(generateSearchIndex)
  .then(clearStaging);
