---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-10-05T11:17:39.000
---

# js_destructuring

JS destructuring

```js
const test = {
        data:{
            someNestedDataField:"This is a string"
        },
    data2:"Test",
    data3:"Test"
    };
const {data} = test;
const {data2 = "Default value if the key doesn't exist"}
const {data:{someNestedDataField}}=test;
const {data:{someNestedDataField:shortName}}=test;
const {data, ...otherData} = test;
// otherData={data2:"Test",data3:"test"};

const [d1,d2,d3,d4] = someArray; 
// We can provide default values for this one, simillar
// to what we can do for the objects
const [,,d3,d4] = someArray;
// , can be used to skip array elements 
const [d1, ...tempArray,d4]=someArray;
// ... acts as a rest operator in this scenario
// tempArray = [d2,d3]
```

#self/todo/pin
