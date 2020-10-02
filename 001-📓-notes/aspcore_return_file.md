# Returning a file from ASP Core
#aspcore #csharp 

The default ASP Core controllers support returning file streams. 

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