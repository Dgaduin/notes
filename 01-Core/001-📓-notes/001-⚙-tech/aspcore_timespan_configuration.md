---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-08-23T17:34:33.000
---

# TimeSpan Configuration Values in .NET Core

#tech/language/dotnet #tech/language/dotnet/aspcore  

Time value configurations can be defined in the JSON file as:

```json
{
  "SeatingDuration": "2:30:00",
  "SeatingDuration": "P9000S",
  "SeatingDuration": "P2H30M"
}
```

And after that read from the code like this:

```csharp
var seatingDuration = Configuration.GetValue<TimeSpan>("SeatingDuration");
```

---
[Source](https://blog.ploeh.dk/2019/11/25/timespan-configuration-values-in-net-core/)
