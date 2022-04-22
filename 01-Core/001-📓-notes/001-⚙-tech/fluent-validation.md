---
date_created: +002020-10-01T14:10:51.000
date_modified: +002021-09-21T17:46:57.000
---

# FluentValdiation

 #tech/language/dotnet/aspcore #tech/paradigm/ioc #tech/paradigm/validation

[Source](https://github.com/FluentValidation/FluentValidation)

FluentValidation is an expression-tree based validation system.

## Usage in [[aspcore_framework|ASP Core]]

This snippet replaces the builtin data annotations validation with the `FluentValidations`

```csharp
public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers()
				.AddFluentValidation(s => 
                { 
					// Where to load from
                    s.RegisterValidatorsFromAssemblyContaining<Startup>(); 
					// Should we run DataAnnotations as welll
                    s.RunDefaultMvcValidationAfterFluentValidationExecutes = false; 
                });
}
```
