# Use enum string values on API return

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
