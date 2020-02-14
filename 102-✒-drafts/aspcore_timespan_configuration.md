# TimeSpan configuration values in .NET Core

#pin

Clipped from: https://blog.ploeh.dk/2019/11/25/timespan-configuration-values-in-net-core/
You can use a standard string format for TimeSpan values in configuration files. 
Sometimes you need to make TimeSpan values configurable. I often see configuration files that look like this: 
{
  "SeatingDurationInSeconds": "9000"
} 
Code can read such values from configuration files like this: 
var seatingDuration = TimeSpan.FromSeconds(Configuration.GetValue<int>("SeatingDurationInSeconds")); 
This works, but is abstruse. How long is 9000 seconds? 
The idiomatic configuration file format for .NET Core is JSON, which even prevents you from adding comments. Had the configuration been in XML, at least you could have added a comment: 

<!--9000 seconds = 2½ hours-->

<SeatingDurationInSeconds>9000</SeatingDurationInSeconds> 
In this case, however, it doesn't matter. Use the standard TimeSpan string representation instead: 
{
  "SeatingDuration": "2:30:00"
} 
Code can read the value like this: 
var seatingDuration = Configuration.GetValue<TimeSpan>("SeatingDuration"); 
I find a configuration value like "2:30:00" much easier to understand than 9000, and the end result is the same. 
I haven't found this documented anywhere, but from experience I know that this capability is present in the .NET Framework, so I wondered if it was also available in .NET Core. It is. 
