const replace = require('replace-in-file');
const options = {
    files: '*.md',
    from: /\[\[(.+)\]\]/g,
    to: '[$1](./$1)',
    dry: true,
};

try {
    const results = replace.sync(options);
    console.log('Replacement results:', results);
}
catch (error) {
    console.error('Error occurred:', error);
}