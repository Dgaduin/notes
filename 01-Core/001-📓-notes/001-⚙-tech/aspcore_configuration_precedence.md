---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-12-29T17:49:48.000
---

# Order of Precedence When Configuring [[aspcore_framework|ASP Core]]

#tech/language/dotnet/aspcore

In order of loading:

1. `appsettings.json` file
2. `appsettings.{env.EnvironmentName}.json` file
3. The local User Secrets File - Only in local development environment
4. Environment Variables
5. Command Line Arguments

---

[Source](https://devblogs.microsoft.com/premier-developer/order-of-precedence-when-configuring-asp-net-core/)
