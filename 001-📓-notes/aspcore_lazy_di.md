# ASP Lazy DI
#tech/language/dotnet/aspcore #tech/language/dotnet/lazy 

Sometimes it bight be better to resolve the runtime dependencies in [[aspcore_framework|ASP Core]] lazily, e.g. in multi-dependent controllers where we might not need all dependencies for all calls.
	
To achieve that we can use the DI factory overloads with the `Lazy<T>` delegate constructor.
	
```csharp
public void ConfigureServices(IServiceCollection services)
{
	services
    	.AddScoped<IRepo, Repo>()
        .AddScoped(x => 
			new Lazy<IRepo>(() => 
				x.GetRequiredService<IRepo>()));
}
```

---

[[../102-✒-drafts/csharp_lazy-proxy|LazyProxy as an alternative]]