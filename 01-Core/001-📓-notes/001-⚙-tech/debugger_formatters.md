---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-09-21T17:46:57.000
---

# Debugger Formatters

 #tech/language/dotnet/debug

These formatters can be applied like `{expression},formatter` to any [[debugger_display|DebuggerDisplay]] attribute or debug expression in a data window like Watch, Locals and Autos.

|  Value                                                            | Description |
|------|------------------------------------------------------------------|
| ac      | Always calculate - expressions will always be forced to evaluate |
| d       | Decimal                                                          |
| dynamic | Display using the dynamic view                                   |  
| h       | Hexidecimal                                                      |
| nq      | String with no quotes                                            |
| nse     | Evaluates only if there are no side effects                      |
| hidden  | Displays all members                                             |
| raw     | Displays as in the raw-only mode                                 |
| results | Displays as in result-only mode                                  |

---

[Docs](https://docs.microsoft.com/en-us/visualstudio/debugger/using-the-debuggerdisplay-attribute?view=vs-2019)

[Source](https://devblogs.microsoft.com/visualstudio/7-hidden-gems-in-visual-studio-2017/)
