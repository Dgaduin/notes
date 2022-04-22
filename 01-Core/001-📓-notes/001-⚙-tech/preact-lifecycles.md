---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-09-21T17:46:57.000
---

# Preact Lifecycles

#tech/language/js #tech/language/js/lib/preact #tech/platform/web

| Lifecycle method            | When it gets called                            |
| --------------------------- | ---------------------------------------------- |
| `componentWillMount`        | before the component gets mounted to the DOM   |
| `componentDidMount`         | after the component gets mounted to the DOM    |
| `componentWillUnmount`      | prior to removal from the DOM                  |
| `componentWillReceiveProps` | before new props get accepted                  |
| `shouldComponentUpdate`     | before `render()`. Return false to skip render |
| `componentWillUpdate`       | before `render()`                              |
| `componentDidUpdate`        | after `render()`                               |

Most of these can be marked as async to allow for API calls based on props/state

Most take `(nextProps,nextState)` as params.

---

[[preact|Preact]]
