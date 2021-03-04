# Configure Kestrel for certificates

#tech/language/dotnet/aspcore

Kestrel ignores hostnames, and needs to be bound to a network interface.

It also has its own configuration section in `appsettings.json`

```json
{
  "Kestrel": {
    "EndPoints": {
      "Http": {
        "Url": "http://localhost:5000"
      },
      "HttpsInlineCertFile": {
        "Url": "https://192.168.3.3:22224",
        "Certificate": {
          "Path": "./certificate.pfx",
          "Password": "NotReally",
          "AllowInvalid": "true"
        }
      }
    }
  }
}
```

---

[Source](https://stackoverflow.com/questions/53430278/problems-running-configure-self-hosted-console-application-asp-net-core-2-1-ke/53435289#53435289)
