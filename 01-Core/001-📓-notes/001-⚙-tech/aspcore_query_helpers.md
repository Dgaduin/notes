---
aliases:[QueryHelpers]
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-06-01T14:08:55.000
---

# Query Helpers

#tech/language/dotnet/aspcore

`QueryHelpers` is a static class for building relative, parameter-safe URIs.

```csharp
var queryArguments = new Dictionary<string, string>()
{
    { "static-argument", "foo" },
};

if (someFlagIsEnabled)
{
    queryArguments.Add("dynamic-argument", "bar");
}

string url = QueryHelpers.AddQueryString("/example/path", queryArguments);
```

The .Net alternative is the [[csharp_uri_builder|UriBuilder]] class.
