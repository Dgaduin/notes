# String Truncation
#csharp 

This is a oneliner to truncate a non-null string desired length, without padding

```csharp
source.Substring(0, Math.Min(length, source.Length));
```
