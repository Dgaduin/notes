# Returning a file from [[aspcore_framework|ASP Core]]

#tech/language/dotnet/aspcore

The default [[aspcore_framework|ASP Core]] controllers support returning file streams.

```csharp
[HttpGet]
public IActionResult GetWorkbook()
{
	var stream = new FileStream(@"pathToFile", FileMode.Open);
    return File(stream, "image/png", "image.png");
}
```

---

[Source](https://stackoverflow.com/questions/40486431/return-pdf-to-the-browser-using-asp-net-core)
