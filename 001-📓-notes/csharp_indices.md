# Indices
#csharp 

`[a..b]` is an index range operator, where `a` is the start from  and `b` is the end  The default values are `[0..length-1]`.  Both a and b can use the new from-end index syntax.
`[^b]` is a from-end index meaning it's equivelent to `[length-b]` so `[^3]` would be the same as `[^length-3]` .

Range and Index are both new types that can be instanciated beforehand for reuse.