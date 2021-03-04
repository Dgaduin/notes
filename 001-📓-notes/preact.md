# Preact
#tech/language/js #tech/language/js/lib/preact #tech/platform/web

Preact is a minimal functional renderer, similar to React, but smaller and more concise.

The core imports are `import { h, render, Component } from 'preact';`

- `h` is the JSX parser
- `render` is the initial render function, which builds the VDOM tree
- `Component` is the class-type component

E.g.

```JSX
class Clock extends Component {
 render() {
  let time = new Date();
  return <time datetime={time.toISOString()}>{ time.toLocaleTimeString() }</time>;
 }
}

// render an instance of Clock into <body>:
render(<Clock />, document.body);
```

---

[Official Docs](https://github.com/preactjs/preact)
