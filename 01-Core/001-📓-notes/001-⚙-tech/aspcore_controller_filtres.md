---
date_created: +002021-03-04T15:38:46.000
date_modified: +002021-12-29T17:49:48.000
---

# [[aspcore_framework|ASP Core]] Controllers Implement Filtering Interfaces

#tech/language/dotnet/aspcore

[[aspcore_framework|ASP Core]] controllers implement [`IAsyncActionFilter`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.filters.iasyncactionfilter?view=aspnetcore-5.0) and [`IActionFilter`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.filters.iactionfilter?view=aspnetcore-5.0), which allows them to act as their own filters by having by implementing any of:
- `OnActionExecuted`
- `OnActionExecuting`
- `OnActionExecutionAsync` - this behaves like the middleware pipeline

>NB It executes first if you have other filters

---

[[aspcore_filters|ASP Requests Filter Pipeline]]
