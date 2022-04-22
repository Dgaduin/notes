---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-03-04T15:38:46.000
---

# Delegates Instead of Static Methods

 #tech/language/dotnet/functional #tech/paradigm/ioc

Since delegates are typed reference types in C# with variable implementations, we can use them instead of interfaces for achieving no-side-effect functions in IOC/DI environments. They can even be mocked since they are just a contract.
