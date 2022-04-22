---
date_created: +002020-09-15T11:20:24.000
date_modified: +002021-10-05T11:40:30.000
---

# VSCode - Hide Js Transplied Ts Files

#tech/tools/vscode #self/todo/pin

In the workspace or global settings add:

```json
"files.exclude": {
	"**/*.js": {"when": "$(basename).ts"} 
	// for hiding .js.map files works 
	"**/*.js.map": {"when": "$(basename)"}
	}
```

---

[Source](http://stackoverflow.com/questions/31587949/hide-js-map-files-in-visual-studio-code)
