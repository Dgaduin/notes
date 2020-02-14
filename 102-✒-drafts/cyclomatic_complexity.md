---
title: Cyclomatic Complexity
---

# Cyclomatic Complexity

> I think of cyclomatic as a measure of the number of pathways through a piece of code. Even the simplest body of code affords a single pathway, so the minimum cyclomatic complexity is *1*. You can easily 'calculate' the cyclomatic complexity of a method for function. You start at one, and then you count how many times `if` and `for` occurs. For each of these keywords you find, you increment the number (which started at *1*).The specifics are language-dependent. The idea is to count branching and looping instructions. In C#, for example, you'd also have to include `foreach`, `while`, `do`, and each `case` in a `switch` block. In other languages, the keywords to count will differ.

https://blog.ploeh.dk/2019/12/09/put-cyclomatic-complexity-to-good-use/