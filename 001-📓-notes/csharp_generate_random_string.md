# Generate a true random string
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
