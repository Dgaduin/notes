# Redirect from noscript tag to friendlier page
#tech/language/js #tech/language/html

This HTML hack allows users with JavaScript disabled or without JavaScript support to still view web content, just without the convenience of JavaScript. Add this tag to the HTML head (best after the `<meta charset="utf-8" />` tag) and it will create an automatic redirect to the no-JS-friendly site.

```html
<noscript>
	<meta http-equiv="refresh" content="0; url=www.example.com/no-js-version" />
</noscript>
```
