#self/todo/pin
https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.taskscheduler.unobservedtaskexception?view=netframework-4.7.2

https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.valuetask?view=netcore-3.1

💡 NOTE:Task.Factory.StartNew has an option TaskCreationOptions.LongRunning that under the covers creates a new thread and returns a Task that represents the execution. Using this properly requires several non-obvious parameters to be passed in to get the right behavior on all platforms.

💡 NOTE: Don't use TaskCreationOptions.LongRunning with async code as this will create a new thread which will be destroyed after first await.

https://github.com/davidfowl/AspNetCoreDiagnosticScenarios/blob/master/AsyncGuidance.md