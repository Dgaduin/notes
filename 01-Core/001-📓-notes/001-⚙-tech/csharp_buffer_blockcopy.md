---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-03-04T15:38:46.000
---

# Buffer.BlockCopy

 #tech/language/dotnet/buffer

`Buffer.BlockCopy(t, 0, x, 0, 30 * sizeof(int))` - can be used to remap data types, very quickly, including between different multi dimensional arrays, e.g. int to char conversion on big multidimensional arrays. It also useful when you need primitive to byte conversion for I/O.

E.g.

`Buffer.BlockCopy(shortSamples, 0, packetBytes, 0, shortSamples.Length * sizeof(short)). `

---

[Source]([Comparison between Array.Copy() and Buffer.BlockCopy()](https://stackoverflow.com/questions/1389821/array-copy-vs-buffer-blockcopy))
