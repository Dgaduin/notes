# String Truncation
 #tech/language/dotnet/string

This is a oneliner to truncate a non-null string to a desired length, without padding

```csharp
source.Substring(0, Math.Min(length, source.Length));
```
