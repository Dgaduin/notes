# EF Core debug generated SQL
 #tech/language/dotnet/aspcore/efcore #tech/language/sql

Inspecting the generated SQL is usually a though exercise in DB Admin, but in [[efcore|EF Core]] it can be done with 2 simple changes.

In `Configure Services`

```csharp
services.AddDbContext<Context>(
                c => c.UseSqlServer(_config.GetConnectionString("path")).EnableSensitiveDataLogging();
                );
```

In `appsettings.json`

```json
{
	"Logging":{
		"LogLevel":{
			"Microsoft.EntityFrameworkCore.Database.Command": "Information"
		}
	}
}
```