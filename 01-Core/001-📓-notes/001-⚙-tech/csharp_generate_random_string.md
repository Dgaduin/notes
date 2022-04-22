---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-03-04T15:38:46.000
---

# Generate a True Random String

 #tech/language/dotnet/snippets

```csharp
using System.Security.Cryptography;
{
  public static string GenerateBearerToken()
        {
            using RandomNumberGenerator rng = new RNGCryptoServiceProvider();
            var tokenData = new byte[33];
            rng.GetBytes(tokenData);

            return Convert.ToBase64String(tokenData);
        }
}
```
