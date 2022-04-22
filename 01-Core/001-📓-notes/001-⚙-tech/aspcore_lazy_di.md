---
date_created: +002021-03-04T15:38:46.000
date_modified: +002021-12-29T17:49:48.000
---

# ASP Lazy DI

#tech/language/dotnet/aspcore #tech/language/dotnet/lazy

Sometimes it bight be better to resolve the runtime dependencies in [[aspcore_framework|ASP Core]] lazily, e.g. in multi-dependent controllers where we might not need all dependencies for all calls.

	

To achieve that we can use the DI factory overloads with the [[csharp_lazy|Lazy<T>]] delegate constructor.

	

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

[[../../006-🌱-pins/csharp_lazy-proxy|LazyProxy as an alternative]]
