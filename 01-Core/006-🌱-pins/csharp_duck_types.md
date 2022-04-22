---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-12-08T14:23:09.000
---

# C# Duck Types

#tech/language/dotnet/linq #self/todo/to-expand

Some C# features don’t depend on specific type abstractions, but can be implemented via duck typing(presence of specific methods or properties)

## LINQ

You can make types support LINQ SQL syntax by providing methods that match specific conventions

| Keyword | Method                                  |
| ------- |:--------------------------------------- |
| from    | After 1st one: `.SelectMany`            |
| where   | `.Where`                                |
| select  | `.Select`                               |
| group   | `.GroupBy`                              |
| orderby | `.OrderBy` and more arguments `.ThenBy` |
| join    | `.Join`                                 |
| let     | No method, just names variables         |

## Foreach

Foreach actually doesn't depend on an interface but needs a `GetEnumerator` which returns an object with `.Current` property and a `.MoveNext()` method. You can also have a very specific `GetEnumerator` call returning a concrete type/struct on top of the one from IEnumerable, to avoid the virtual interface call.

If the collection in `foreach` implements `IDisposable` then `foreach` acts as a `using` statement

## Await

You can await your own objects without going for tasks by having a`GetAwaiter` method which returns an object having an `IsComplete` and `GetResult()` method and implementing the `INotifyCompletion` interface.

[Source](https://www.gamlor.info/posts-output/2019-12-11-csharp-structural-pattern/en/)
