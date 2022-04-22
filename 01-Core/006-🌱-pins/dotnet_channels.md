---
date_created: +002020-09-15T11:24:57.000
date_modified: +002022-03-16T12:28:53.000
---

# .Net Channels

#tech/language/dotnet/system/threading

Channels in C# allow for thread-safe internal queues, which comply with the Task async approach. They support multiple writers and multiple readers, and can fit nicely in a [[reactive_programming|reactive]] design.

> [!nb]
> 
> Messages in the channels will only be consumed by a single a single reader, for broadcast capabilities look at [[csharp_broadcast-block|BroadcastBlock<T>]]
> 

A more advanced version can be found at [[csharp_dataflow|System.Threading.Tasks.Dataflow]]

---
[Introduction to Channels](https://devblogs.microsoft.com/dotnet/an-introduction-to-system-threading-channels/)
[Documentation](https://docs.microsoft.com/en-us/dotnet/api/system.threading.channels)
