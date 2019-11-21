const FlexSearch = require("flexsearch");
const { promisify } = require('util');
const fs = require('fs');

const readDir = promisify(fs.readdir);

const readFile = promisify(fs.readFile);

const staging = './notes';

const index = new FlexSearch();

const files = fs.readdirSync(staging);

const t = files.map((file) => {
    const filePath = `${staging}/${file}`;
    const text = fs.readFileSync(filePath, 'utf8');
    index.add(file.slice(0, -3), text);
});

console.log(index.search("content", {
    limit: 1000,
    threshold: 5,
    depth: 3
}));