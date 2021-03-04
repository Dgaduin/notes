# [[aspcore_framework|ASP Core]] controllers implement filtering interfaces

#tech/language/dotnet/aspcore

[[aspcore_framework|ASP Core]] controllers implement [`IAsyncActionFilter`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.filters.iasyncactionfilter?view=aspnetcore-5.0) and [`IActionFilter`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.filters.iactionfilter?view=aspnetcore-5.0), which allows them to act as their own filters by having by implementing any of:
- `OnActionExecuted`
- `OnActionExecuting`
- `OnActionExecutionAsync` - this behaves like the middleware pipeline

>NB it executes first if you have other filters

---

[[aspcore_filters|ASP Requests Filter Pipeline]]