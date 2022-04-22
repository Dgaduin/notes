---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-05-24T11:28:55.000
---

# Use Enum String Values on API Return

#tech/language/dotnet/aspcore #tech/paradigm/ioc

This snippet sets the JSON parser to return enum string values instead of the backing value.

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers().AddJsonOptions(o =>
    {
        o.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });
}
```
