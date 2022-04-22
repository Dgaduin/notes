---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-03-04T15:38:46.000
---

# Function Chains

 #tech/language/dotnet/functional

```csharp
Action Hello;

Hello = () =>  Console.WriteLine("Hello");
Hello += () => Console.WriteLine("World");
Hello += () => Console.WriteLine(".NET & Khalid\n");

Hello();
```

Executing this code yields the following results.

```bash
HelloWorld.NET & Khalid
```
