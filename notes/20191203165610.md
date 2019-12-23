# Phoenix servers

#pin

Clipped from: https://www.leadingagile.com/2018/04/immutable-servers-why/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+LeadingAgile+%28LeadingAgile%29
Phoenix Servers
Thanks to that functionality, it’s feasible to replace VM instances rather than keeping them alive for the long term and applying updates. This has led to the so-called phoenix server strategy. Named for the mythical bird that rises from its own ashes, phoenix servers are routinely destroyed and rebuilt on a schedule even when there are no updates or patches to be applied.
An immutable instance can’t be modified, so servers managed in this way are not subject to configuration drift. The problem is solved by virtue of the fact it doesn’t exist.
Malware may be injected into running instances, but it will not live long before the phoenix burns itself up and arises again, reborn with nothing installed except what is in the virus-scanned template under version control.