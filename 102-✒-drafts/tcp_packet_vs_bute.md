 TCP provides a bidirectional stream of bytes on the application level. It does NOT provide a stream of packets.
That means whatever you pass to a send() call is not necessarily the same amount of data the receiver will observe in a single read() call. You might get more or less bytes, since the transport layer is free to buffer and to fragment data.
https://news.ycombinator.com/item?id=23194020
#pin 