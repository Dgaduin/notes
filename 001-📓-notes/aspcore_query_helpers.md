---
aliases:[QueryHelpers]
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
