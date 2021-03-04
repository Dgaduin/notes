# Delegates instead of static methods
 #tech/language/dotnet/functional #tech/paradigm/ioc

Since delegates are typed reference types in C# with variable implementations, we can use them instead of interfaces for achieving no-side-effect functions in IOC/DI environments. They can even be mocked since they are just a contract. 
