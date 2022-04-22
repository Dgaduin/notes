---
type: Journal
modified: 2020-10-02T22:00:13+01:00
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-10-05T11:13:05.000
---

# di_scope_validation

#self/todo/pin

https://andrewlock.net/new-in-asp-net-core-3-service-provider-validation/

We can validate controller DI dependecies in [[../001-⚙-tech/aspcore_framework|ASP Core]] by adding

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers()
        .AddControllersAsServices(); // Add the controllers to DI

    // services.AddSingleton<WeatherForecastService>();
    services.AddSingleton<DataService>();
}
```

By default this only runs on dev build, if we want to use it in general we can use

```csharp
public class Program
{
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseStartup<Startup>();
            })
            // Add a new service provider configuration
            .UseDefaultServiceProvider((context, options) =>
            {
                options.ValidateScopes = context.HostingEnvironment.IsDevelopment();
                options.ValidateOnBuild = true;
            });
```
