---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-10-05T11:10:50.000
---

# css_stuff

```
.some-element {
  background-color: hsla(
    var(--h, 120),
    var(--s, 50),
    var(--l, 50),
    var(--a, 1)
  );
}

.some-element.darker {
  --l: 20;
}
```

```
.some-element {
  animation: var(--animationName, pulse) var(--duration, 2000ms) ease-in-out
    infinite;
}

.some-element.faster {
  --duration: 500ms;
}

.some-element.shaking {
  --animationName: shake;
}
```

```
:root {
  --pad: 20px;
}

@media (min-width: 50em) {
  :root {
    --pad: 60px;
  }
}

.some-element {
  padding: 150px var(--pad) var(--pad) var(--pad);
}
```

```
.element {
  --delay: calc(var(--i, 0) * 500ms);
  animation: fadeIn 1000ms var(--delay, 0ms);
}

.element:nth-child(2) {
  --i: 2;
}

.element:nth-child(3) {
  --i: 3;
}
```

https://css-irl.info/7-uses-for-css-custom-properties/

#self/todo/pin
