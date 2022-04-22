---
date_created: +002020-10-20T22:15:52.000
date_modified: +002021-10-10T15:37:18.000
---

# Windows Terminal

#tech/app #self/todo/to-expand

This is a Microsoft provided, multi-shell native terminal for Windows

## Tips

- Create a custom command to send terminal input  

```json
{
	"actions":[
		{
			"command": { 
				"action": "sendInput", 
				"input": "cls\u000d" 
			},
			"keys": "alt+k"
		}
	]
}
```
