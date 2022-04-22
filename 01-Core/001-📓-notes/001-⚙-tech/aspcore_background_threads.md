---
date_created: +002021-03-04T15:38:46.000
date_modified: +002021-12-29T17:49:48.000
---

# ASP Background Threads Crash

#tech/language/dotnet

Asp under IIS blows if you start a thread under application_start event because it's missing a context and throws an exception.

Also since you can't unload DLLs one by one, when unloading or loading the app you risk the thread not to be shutdown as expected.

A potential work around is to use [[../../006-🌱-pins/csharp_thread-pool_queue-user-work-item|ThredPool.QueueUserWorkItem]]

---

[Source](https://techcommunity.microsoft.com/t5/iis-support-blog/background-threads-in-asp-net-applications-part-2-threading-side/ba-p/826929)
