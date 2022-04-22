---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-09-21T17:44:26.000
---

# Htm

#tech/language/js/lib #tech/platform/web

`htm` is a render wrapper to allow for client-side JSX-like templating.

It needs to be passed a supported render function, e.g. React's `render` or Preact's `h`, like this `const html = htm.bind(h);`

Supports:

- Props spread like `<article id="main" ...${internalProps}></article>`
- Self closing tags `<component />`
- Closing components with `<//>`

This is a good addition if you are aiming for a static only frontend.

---

[Official Docs](https://github.com/developit/htm)
[[htm|Good integration with Preact, including pre-built module with both included]]
