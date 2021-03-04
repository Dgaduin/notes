# ParseQueryString
 #tech/language/dotnet/system/web

```csharp
NameValueCollection queryString = System.Web.HttpUtility.ParseQueryString(string.Empty);

queryString.Add("key1", "value1");
queryString.Add("key2", "value2");

return queryString.ToString(); 
```
