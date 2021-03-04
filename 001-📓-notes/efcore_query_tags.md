# Query Tags
 #tech/language/dotnet/aspcore/efcore

EF Core 2.2 adds a new extension to the `IQueriable` interface called `TagWith("String tag")`, which in the context of EF will add it to the top of the generated query for testing purposes. This requires the use of static strings, and doesn't allow interpolation. 

---

[[efcore| EF Core]]