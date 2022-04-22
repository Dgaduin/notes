---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-03-04T15:38:46.000
---

# Indices

 #tech/language/dotnet/collections

`[a..b]` is an index range operator, where `a` is the start from and `b` is the end The default values are `[0..length-1]`.  Both a and b can use the new from-end index syntax.
`[^b]` is a from-end index meaning it's equivalent to `[length-b]` so `[^2]` would be the same as `[^length-3]` .

Range and Index are both new types that can be instantiated beforehand for reuse.
