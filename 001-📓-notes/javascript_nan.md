# Number.isNan() vs isNan()

#tech/language/js

`NaN` compares unequal (via `==`, `!=`, `===`, and `!==`) to any other value -- including to another NaN value.

`isNaN()` checks against converted values while `Number.isNaN()` only against primitive number, a bit like `==` and `===` Returns `false` on `null`/`undefined` - catch it ahead of time

---

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
