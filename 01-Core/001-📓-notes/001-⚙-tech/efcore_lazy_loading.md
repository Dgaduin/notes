---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-03-19T16:13:36.000
---

# Lazy Loading for EF Core

 #tech/language/dotnet/aspcore/efcore

Lazy loading means that navigational properties access will be delayed as much as possible to reduce overfetching. It can be setup either from the `OnConfiguring` call like so:

```csharp
protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    => optionsBuilder
        .UseLazyLoadingProxies()
        .UseSqlServer(myConnectionString);
```

or from the DI `AddDbContext`

```csharp
services.AddDbContext<BloggingContext>(
    b => b.UseLazyLoadingProxies()
          .UseSqlServer(myConnectionString));
```

It works for any virtual, inheritable property.

---

[Source](https://docs.microsoft.com/en-us/ef/core/querying/related-data/lazy)
