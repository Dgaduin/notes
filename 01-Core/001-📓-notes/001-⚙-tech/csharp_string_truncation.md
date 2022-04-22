---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-03-04T15:38:46.000
---

# String Truncation

 #tech/language/dotnet/string

This is a oneliner to truncate a non-null string to a desired length, without padding

```csharp
source.Substring(0, Math.Min(length, source.Length));
```
