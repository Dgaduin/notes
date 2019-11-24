const fs = require('fs');
const { promisify } = require('util');
const child = require('child_process');
const replace = require('replace-in-file');
const copyfiles = require('copyfiles');
const rimraf = require("rimraf");
const FlexSearch = require("flexsearch");

const readDir = promisify(fs.readdir);
const createDir = promisify(fs.mkdir);
const deleteDir = promisify(rimraf);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const copy = promisify(copyfiles);
const exec = promisify(child.exec);

const notes = './notes';
const staging = './staging';
const assets = './assets';
const template = './template';
const dist = './dist';

const replaceOptions = {
    files: `${staging}/*.md`,
    from: [
        /\[\[(.+)\]\] (.+)/g, // match zettle links and converts them to static local links
        /[^/]#([^\s#]+)/g], // finds tags and points them to a search url for tags
    to: ['[$2](./#/note/$1)', '[$&](./#/search/$1)'],
}

const headerRegex = /^#+ (.+)/;
const findFirstHeader = (fileContent, filename) => {
    let found = fileContent.match(headerRegex);
    return found ? found[1] : filename;
};

const clearAll = async () => Promise.all([
    deleteDir(dist),
    deleteDir(staging)
]);

const stage = () => Promise.all([
    createDir(staging),
    createDir(dist),
    copy([`${notes}/*.md`, staging,], true),
]);

const extractMetadata = async () => {
    const files = await readDir(staging);

    const notes = await Promise.all(
        files
            .reverse()
            .map(async file => {
                const filePath = `${staging}/${file}`;
                return data = readFile(filePath, 'utf8')
                    .then(data => ({
                        header: findFirstHeader(data, file.slice(0, -3)),
                        name: file.slice(0, -3),
                        link: `/#/note/${file.slice(0, -3)}`,
                        author: "Atanas Pashkov"
                    }));
            }));
    await writeFile(`${dist}/metadata.json`, JSON.stringify({ notes }));
    return { notes };
};

const generateNotes = async (data) => {
    const commands = data.notes.map(async (note) => {
        const command = `pandoc ${staging}/${note.name}.md -o ${dist}/${note.name}.html --metadata pagetitle="${note.header}" --metadata author="${note.author}"`;
        return exec(command);
    });

    return await Promise.all(commands);
}

const copyAssets = () => copy([`${assets}/*`, dist,], true);

const clearStaging = () => deleteDir(staging);

const generateSeachIndex = async () => {
    const index = new FlexSearch();
    const files = fs.readdirSync(notes);
    files
        .filter(file => file[0] != '.')
        .forEach(file => {
            const filePath = `${staging}/${file}`;
            const text = fs.readFileSync(filePath, 'utf8');
            index.add(file.slice(0, -3), text);
        });
    await writeFile(`${dist}/searchIndex.json`, index.export());
}


clearAll()
    .then(stage)
    .then(() => replace(replaceOptions))
    .then(extractMetadata)
    .then(generateNotes)
    .then(generateSeachIndex)
    .then(copyAssets)
    .then(clearStaging);
