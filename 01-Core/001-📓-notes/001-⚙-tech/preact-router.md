---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-09-21T17:46:57.000
---

# Preact Router

#tech/language/js #tech/language/js/lib/preact #tech/platform/web

A simple URL-based router for Preact.[^1] The baseline is a simple import `import Router from 'preact-router';`

Usage:

```JSX
const Main = () => (
    <Router>
        <Home path="/" />
        <About path="/about" />
        <Search path="/search/:query/:advanced?" />
    </Router>
    );
```

Query parameters marked with `:` are added as props to the component.

There is an option for lazy loading with `AsyncRoute`.

It supports hash history using:

```JSX
import { createHashHistory } from 'history';

const Main = () => (
    <Router history={createHashHistory()}>
    );
```

This gives us `url/#path` styled links, which helps with cases, where the browser would navigate to a resource, instead of leaving the handling to us.

---

[[preact|Preact]]

[Official Docs](https://github.com/preactjs/preact-router)
