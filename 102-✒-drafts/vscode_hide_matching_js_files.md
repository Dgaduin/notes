# VSCode - Hide js transplied ts files

#tools 

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
