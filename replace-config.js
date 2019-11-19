module.exports = {
    files: 'staging/*.md',
    from: [
        /\[\[(.+)\]\]/g, // match zettle links and converts them to static local links
        /#([^\s]+)/g], // finds tags and points them to a search url for tags
    to: ['[$1](./$1)', '[$&](tag-search/$1)'],
}