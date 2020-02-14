# EF Core debug generated SQL
#csharp #efcore  #SQL

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