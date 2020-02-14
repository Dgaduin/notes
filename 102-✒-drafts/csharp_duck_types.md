You can make types support LINQ sql syntax by providing methods that match specific conventions

| Keyword | Method                                  |
| ------- | --------------------------------------- |
| from    | After 1st one: `.SelectMany`            |
| where   | `.Where`                                |
| select  | `.Select`                               |
| group   | `.GroupBy`                              |
| orderby | `.OrderBy` and more arguments `.ThenBy` |
| join    | `.Join`                                 |
| let     | No method, just names variables         |

Foreach actually doesn't depend on an interface but needs a `GetEnumerator` which returns an object with `.Current` property and a `.MoveNext()` method. You can also have a very specific `GetEnumerator` call returning a concrete type/struct on top of the one from IEnumerable, to avoid the virtual interface call. 

If the collection in `foreach` implements `IDisposable` then `foreach` acts as a `using` statement

You can await your own objects without going for tasks by  having a`GetAwaiter` method which returns an object having an \`IsComplete' and 'GetResult()' method and implementing the INotifyCompletion interface.

Interesting comment at the bottom of the link, double check before publishing 

[Source](https://www.gamlor.info/posts-output/2019-12-11-csharp-structural-pattern/en/)