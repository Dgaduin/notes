# Buffer.BlockCopy
#csharp 

`Buffer.BlockCopy(t, 0, x, 0, 30 * sizeof(int))` - can be used to remap datatypes, very quickly, including between different multi dimensional arrays, e.g. int to char conversion on big multidimensonal arrays. It also usefull when you need primitive to byte conversion for I/O. 