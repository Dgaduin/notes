---
title: ASP Lazy commands
---

# ASP Lazy commands

#pin

Clipped from: https://rehansaeed.com/asp-net-core-lazy-command-pattern/
Why so Lazy?
Why do we use Lazy<T>? Well the answer is that if we have multiple action methods on our controller, we don’t want to instantiate the dependencies for every action method if we are only planning on using one action method. Registering our Lazy commands requires a bit of extra work in out Startup.cs. We can register lazy dependencies like so:
C#
1    public void ConfigureServices(IServiceCollection services)
2    {
3        // ...Omitted
4        services
5            .AddScoped<IGetRocketCommand, GetRocketCommand>()
6            .AddScoped(x => new Lazy<IGetRocketCommand>(
7                () => x.GetRequiredService<IGetRocketCommand>()));
8
