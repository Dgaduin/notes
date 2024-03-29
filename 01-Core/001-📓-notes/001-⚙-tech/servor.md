---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-06-28T11:25:37.000
---

# Servor

#tech/language/js #tool

Servor is dependency free local HTTP server with file watcher

Add Servor as a dev dependency using `npm i servor -D` or run directly from the terminal:

```bash
npx servor <directory> <fallback> <port> <reloadPort>
```

- `<directory>` path to serve static files from (defaults to current directory `.`)
- `<fallback>` the file served for all non-file requests (defaults to `index.html`)
- `<port>` what port you want to serve the files from (defaults to `8080`)
- `<reloadPort>` what port you want the reload script to listen on (defaults to `5000`)

There are also optional flags you can pass as arguments:

- `--no-browser`prevents the browser from opening when the server starts
- `--no-reload` prevents the browser from reloading when files change

---

[Official Docs](https://github.com/lukejacksonn/servor)
