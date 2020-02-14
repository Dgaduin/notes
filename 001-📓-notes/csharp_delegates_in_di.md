# Delegates instead of static methods
#csharp #DI

Since delegates are typed reference types in C# with variable implementations, we can use them instead of interfaces for achieving no-side-effect functions in IOC/DI enviroments. They can even be mocked since they are just a contract. 