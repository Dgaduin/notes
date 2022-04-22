---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-03-04T15:38:46.000
---

# ParseQueryString

 #tech/language/dotnet/system/web

```csharp
NameValueCollection queryString = System.Web.HttpUtility.ParseQueryString(string.Empty);

queryString.Add("key1", "value1");
queryString.Add("key2", "value2");

return queryString.ToString(); 
```
