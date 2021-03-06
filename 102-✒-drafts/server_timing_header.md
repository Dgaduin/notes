---
title: Server timing
---

# Server timing

#self/todo/pin
The Server-Timing header communicates one or more metrics and descriptions for a given request-response cycle. It is used to surface any backend server timing metrics (e.g. database read/write, CPU time, file system access, etc.) in the developer tools in the user's browser or in the PerformanceServerTiming interface.

From <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing> 

```httpheader
Server-Timing: 
        lb=18; "Load Balancer",
        server-3=104; "Server #3 Startup",
        db-read=187; "Database Read",
        aws-download=317; "AWS Content Download",
        db-write=218; "Database Write",
        templating=48; "Templating plugin"
```

From <https://umaar.com/dev-tips/136-server-timing/> 
