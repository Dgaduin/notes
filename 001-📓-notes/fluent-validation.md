# FluentValdiation
#csharp #aspcore #ioc #validation

[Source](https://github.com/FluentValidation/FluentValidation) 

FluentValidation is an expression-tree based validation system.

## Usage in ASP Core 
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
