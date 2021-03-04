# Function chains
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
