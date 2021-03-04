# Enums
 #tech/language/dotnet/enums

Enums can have different internal type `public enum Types:long`
Enums can have combined values if they use flag structure e.g.

```csharp
[Flags]
enum ProductType{
	A1=1,
	A2=2,
	B1=4,
	B2=8,
	ATypes=A1|A2,
	1Types=A1|B1
}

/// Later we can use it as a normal flag

productType.HasFlag(ATypes);
```
