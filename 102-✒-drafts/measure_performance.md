# Measure Performance
#js 

Secondly, we could use document.hidden and the visibilitychange event . This event fires when the user switches to or from the tab, when the browser is minimized or restored, and when the machine awakes from sleep. In other words, it does exactly what we need. And while the tab is in the background, document.hidden is true.
Here’s a simple implementation:
let lastVisibilityChange = 0window.addEventListener('visibilitychange', () => {
lastVisibilityChange = performance.now()
})// don’t log any metrics started before the last visibility change
// or if the page is hiddenif (metric.start < lastVisibilityChange || document.hidden) return
We are discarding data, but that is a good thing. We are discarding the data from when the machine was not running our app at full speed.
While this is data we don’t care about, there are plenty of other interactions we do care about. Let’s see how we can measure those.

From <https://blog.superhuman.com/performance-metrics-for-blazingly-fast-web-apps-ec12efa26bcb> 

Fortunately, there is an easy solution. If there is a current event, instead of using performance.now() (the time we see the event), we use window.event.timeStamp (the time the system logged the event).

From <https://blog.superhuman.com/performance-metrics-for-blazingly-fast-web-apps-ec12efa26bcb> 

To measure this extra time, we use requestAnimationFrame() to end our timer only when the browser is ready to flush the frame:
requestAnimationFrame(() => { metric.finish(performance.now()) })

From <https://blog.superhuman.com/performance-metrics-for-blazingly-fast-web-apps-ec12efa26bcb> 

We found a solution to this problem: measure the % of events under 100ms. This approach has three big advantages:
    1. The metric is framed around the user. It can tell us what percentage of time our app is fast, and what percentage of users experience speed.
    2. The metric lets us re-introduce the accuracy lost from not measuring to the very end of the frame (section 5). By setting a target that is a multiple of the frame rate, metrics that are close to the target will fall into slower or faster buckets.
    3. The metric is easier to calculate. Simply count the number of events that are under target and divide it by the total number of events. Percentiles are much harder to calculate. There are somewhat efficient approximations, but to do it properly you need to compute every measurement.
This approach has only one downside: if you are slower than your target, it can be hard to see improvements.

From <https://blog.superhuman.com/performance-metrics-for-blazingly-fast-web-apps-ec12efa26bcb> 

In order to visualize the impact of performance optimization, we add additional thresholds above and below 100ms. We group latencies into <50ms (fast), <100ms (ok), <1000ms (slow) and “terrible”. The terrible bucket lets us see where we are severely missing the mark, which is why we color it bright red

From <https://blog.superhuman.com/performance-metrics-for-blazingly-fast-web-apps-ec12efa26bcb> 
