---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-03-04T15:38:46.000
---

# DebuggerBrowsable

 #tech/language/dotnet/debug

`DebuggerBrowsable` - Attribute to dictate member visibility in the debug windows

Possible values:

1. `DebuggerBrowsableState.Never` - not shown at all
2. `DebuggerBrowsableState.Collapsed` - show, but not expanded, default behaviour
3. `DebuggerBrowsableState.RootHidden` - not shown, but if it's an array or collection, the children are shown

---

[Docs](https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.debuggerbrowsableattribute?view=netcore-3.1)

[Source](https://devblogs.microsoft.com/visualstudio/7-hidden-gems-in-visual-studio-2017/)
