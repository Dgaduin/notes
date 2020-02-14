https://techcommunity.microsoft.com/t5/iis-support-blog/background-threads-in-asp-net-applications-part-2-threading-side/ba-p/826929

asp under iis blows if you start a thread under application_start event because it's missing a context and throws an exception 

also since you can't unload dlls one by one, when ubnloading or loading the app you risk the thread not to be shutdown as expected

https://docs.microsoft.com/en-us/dotnet/api/system.threading.threadpool.queueuserworkitem?redirectedfrom=MSDN&view=netframework-4.8#overloads

#pin