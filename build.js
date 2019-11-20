const fs = require('fs');
const Mustache = require('Mustache');
const { promisify } = require('util');
const child = require('child_process');
const replace = require('replace-in-file');
const copyfiles = require('copyfiles');
const rimraf = require("rimraf");

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
        /\[\[(.+)\]\]/g, // match zettle links and converts them to static local links
        /#([^\s#]+)/g], // finds tags and points them to a search url for tags
    to: ['[$1](./$1.html)', '[$&](tag-search/$1)'],
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

    const notes = await Promise.all(files.map(async file => {
        const filePath = `${staging}/${file}`;
        return data = readFile(filePath, 'utf8')
            .then(data => ({
                header: findFirstHeader(data, file.slice(0, -3)),
                name: file.slice(0, -3),
                author: "Atanas Pashkov"
            }));
    }));
    await writeFile(`${dist}/metdata.json`, JSON.stringify({ notes }));
    return { notes };
};

const renderSidebar = async (data) => {
    const output = Mustache.render(await readFile(`${template}/sidebar.mustache`, 'utf8'), data);
    await writeFile(`${staging}/sidebar.html`, output);
    return data;
}

const generateNotes = async (data) => {
    const commands = data.notes.map(async (note) => {
        const command = `pandoc -c ./style.css --template ${template}/pandoc.html -s ${staging}/${note.name}.md -o ${dist}/${note.name}.html -A ${staging}/sidebar.html --metadata pagetitle="${note.header}" --metadata author="${note.author}"`;
        return exec(command);
    });

    return await Promise.all(commands);
}

const generateIndex = async () => {
    const command = `pandoc -c ./style.css --template ${template}/pandoc.html -s ${template}/index.html -o ${dist}/index.html -A ${staging}/sidebar.html --metadata pagetitle="Notes"`;
    return exec(command);
}

const copyAssets = () => copy([`${assets}/*`, dist,], true);

const clearStaging = () => deleteDir(staging);

clearAll()
    .then(stage)
    .then(() => replace(replaceOptions))
    .then(extractMetadata)
    .then(renderSidebar)
    .then(generateNotes)
    .then(generateIndex)
    .then(copyAssets)
    .then(clearStaging);
