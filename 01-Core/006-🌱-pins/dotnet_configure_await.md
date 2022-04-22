---
date_created: +002020-09-15T11:24:57.000
date_modified: +002022-03-16T13:27:34.000
---

# .Net ConfigureAwait

#tech/language/dotnet/system/threading  

## SynchronizationContext

The `SynchronizationContext` is top level dispatcher that puts a delegate to be executed in the appropriate context, which includes a collection of threads and values potentially shared across the threads.  In addition there can be multiple contexts present in a single app - a dedicated UI context, an HTTP context, background worker context etc.

The current one can be accessed via `SynchronizationContext.Current` and set via `SynchronizationContext.SetSynchronizationContext`.

## TaskScheduler

The `TaskScheduler` is similar to the `SynchronizationContext` abstraction specifically for scheduling task execution with specific constraints.

The current `TaskScheduler` can be accessed via `TaskScheduler.Current`, but it can't be set globally. Instead it can be set when the task is created. There is also `TaskScheduler.FromCurrentSynchronizationContext())` which backs the `TaskScheduler` with the current `SynchronizationContext`.

## ConfigureAwait

`ConfigureAwait(false)` makes it so that the code doesn't capture the context for the execution continuation - once a we resume from await we won't be looking for the same context we left when starting. Considering there might be different implementations of `SynchronizationContext`, which can come with constraints, this prevents us from waiting on a potentially blocked context and prevents getting deadlocked.

In classic ASP the context is limited to only a single thread at a time while [[../001-⚙-tech/aspcore_framework|ASP Core]] doesn't currently use a `SynchronizationContext`.

---

[ConfigureAwait FAQ](https://devblogs.microsoft.com/dotnet/configureawait-faq/)
