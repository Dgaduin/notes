# Order of Precedence when Configuring ASP.NET Core
#aspcore #csharp 

In order of loading:

1. `appsettings.json` file
2. `appsettings.{env.EnvironmentName}.json` file
3. The local User Secrets File - Only in local development environment
4. Environment Variables
5. Command Line Arguments

---

[Source](https://devblogs.microsoft.com/premier-developer/order-of-precedence-when-configuring-asp-net-core/)