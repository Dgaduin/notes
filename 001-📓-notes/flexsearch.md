# FlexSearch
#js #search #lib 

FlexSearch is a JS-based search index, supporting extendable architecture, pre-built static indexes and deep configuration.

```js
const FlexSearch = require("flexsearch");

// The index can be extended as the app/script runs
index.add(data.id, data.text);

// This generates a JSON object that can be written to a file
const exportedIndex = index.export();

newIndex.import(exportedIndex);

await index.search({ query: "SearchTerm", sugest: true });
```

---

[Official Docs](https://github.com/nextapps-de/flexsearch)
