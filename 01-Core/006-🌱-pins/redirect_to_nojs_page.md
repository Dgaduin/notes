---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-10-05T11:36:50.000
---

# Redirect From Noscript Tag to Friendlier Page

#tech/language/js #tech/language/html #self/todo/pin

This HTML hack allows users with JavaScript disabled or without JavaScript support to still view web content, just without the convenience of JavaScript. Add this tag to the HTML head (best after the `<meta charset="utf-8" />` tag) and it will create an automatic redirect to the no-JS-friendly site.

```html
<noscript>
	<meta http-equiv="refresh" content="0; url=www.example.com/no-js-version" />
</noscript>
```
