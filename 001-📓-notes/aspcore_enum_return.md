# Use enum string values on API return
#csharp #aspcore #ioc 

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
