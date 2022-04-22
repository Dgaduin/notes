---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-10-05T11:36:09.000
---

# Prototyping

#self/todo/pin

Clipped from: https://news.ycombinator.com/item?id=21481487

I've become a big fan of not worrying about architecture until the rewrite. The first version is always an exploration of the problem domain, and treating it as that has always made my projects go quicker.

This is going to trigger some people, so here's some caveats:

- there's always a rewrite. Even with perfect architecture. Usually because nobody understands the problem domain until there's been an exploration of it with a first attempt (occasionally for other reasons). A few have two rewrites. And that's not a bad thing. Starting again with better knowledge can make the whole project go quicker, because there's less chance of ending up in the situation TFA talks about ("we have to refactor because tech debt").
- architecture needs to be shaped by the problem domain. There isn't a "best" architecture, so picking one requires knowledge of what the code needs to do. And that needs an understanding of the problem. No-one understands the problem from a technical point of view until/unless they've tried writing a program to solve it.
- a lot of features of architecture (like choosing to DI the database engine, instead of picking an engine because it's clearly the right choice) are made because the devs don't have enough knowledge to make an architectural decision when they write the code. It's interesting to see how many of these disappear on the rewrite. It's always more efficient (both performance and development time) to make these decisions, but making them is difficult without enough problem information.
- never underestimate the power of a monolith with good file structure.
