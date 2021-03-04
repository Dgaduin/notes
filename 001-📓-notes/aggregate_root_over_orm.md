# Aggregate Root in repo over ORM

#tech/paradigm/oop/ddd #tech/language/dotnet/aspcore/efcore

We can expose a `Get(id)` and a `Save(root)` on a `IRepo` interface and allow fetching the [[ddd_aggregate_root|root object]], which can directly expose the methods to manipulate the root state.

In [[efcore|EF Core]] this can be achieved using [[efcore_lazy_loading|lazy loading]] and management of [[efcore_include|Include]] calls.

---

[Source](https://codeopinion.com/avoiding-the-repository-pattern-with-an-orm/)
