---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-09-21T17:46:57.000
---

# DebuggerDisplay

 #tech/language/dotnet/debug

`DebuggerDisplay` - Attribute to decorate how to format specific values in debug windows like Watch, Locals and Autos

```csharp
[DebuggerDisplay("Name: {FullName,nq}")]
```

This can be used with [[debugger_formatters|theese formatters]].

In addition we can dictate visibility using the [[debugger_browsable|DebuggerBrowsable]]

---

[Docs](https://docs.microsoft.com/en-us/visualstudio/debugger/using-the-debuggerdisplay-attribute?view=vs-2019)

[Source](https://devblogs.microsoft.com/visualstudio/7-hidden-gems-in-visual-studio-2017/)
