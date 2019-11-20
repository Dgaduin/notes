const fs = require('fs');
const Mustache = require('Mustache');
const { promisify } = require('util');
const child = require('child_process');
const replace = require('replace-in-file');
const copyfiles = require('copyfiles');
const rimraf = require("rimraf");
rimraf("/some/directory", function () { console.log("done"); });

const readDir = promisify(fs.readdir);
const createDir = promisify(fs.mkdir);
const deleteDir = promisify(rimraf);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const copy = promisify(copyfiles);
const exec = promisify(child.exec);

const testFolder = './staging/';

const replaceOptions = {
    files: './staging/*.md',
    from: [
        /\[\[(.+)\]\]/g, // match zettle links and converts them to static local links
        /#([^\s]+)/g], // finds tags and points them to a search url for tags
    to: ['[$1](./$1)', '[$&](tag-search/$1)'],
}


const headerRegex = /^#+ (.+)/;
const findFirstHeader = (fileContent, filename) => {
    let found = fileContent.match(headerRegex);
    return found ? found[1] : filename;
};

const clearAll = async () => Promise.all([
    deleteDir('./static'),
    deleteDir('./staging')
]);

const clearStaging = () => deleteDir('./staging');

const stage = () => Promise.all([
    copy(['./docs/*.md', './staging',], true),
    createDir('staging'),
    createDir('static')
]);

const extractMetadata = async () => {
    const files = await readDir(testFolder);

    const notes = await Promise.all(files.map(async file => {
        const filePath = `${testFolder}${file}`;
        return data = readFile(filePath, 'utf8')
            .then(data => ({
                header: findFirstHeader(data, file.slice(0, -3)),
                name: file.slice(0, -3)
            }));
    }));
    return { notes };
};

const renderSidebar = async (data) => {
    const output = Mustache.render(await readFile('./assets/sidebar.mustache', 'utf8'), data);
    await writeFile('./staging/sidebar.html', output);
    return data;
}

const generateHtml = async (data) => {
    const commands = data.notes.map(async (note) => {
        const command = `pandoc -c ./pandoc.css --template ./assets/pandoc.html  -s ./staging/${note.name}.md -o ./static/${note.name}.html -A ./staging/sidebar.html --metadata pagetitle="${note.header}"`;
        console.log(command);
        return exec(command)
            .then(({ stdout, stderr }) => {
                stdout || console.log('stdout:', stdout);
                stderr || console.log('stderr:', stderr);
            });
    });
    return await Promise.all(commands);
}

const copyAssets = () => copy(['./assets/pandoc.css', './static',], true);

clearAll()
    .then(stage)
    .then(() => replace(replaceOptions))
    .then(extractMetadata)
    .then(renderSidebar)
    .then(generateHtml)
    .then(copyAssets)
    .then(clearStaging);
