# Fluent Valdiations
#csharp #aspcore #DI #validation

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
