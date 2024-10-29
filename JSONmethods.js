//  parse(text)
var jsonString1 = '{"name": "Jhon", "age": 30}'
var obj1 = JSON.parse(jsonString1)
console.log(obj1)  // { name: 'Jhon', age: 30 }
// ------------------------------------------------------------------>


// stringify(value)
let obj2 = {name: "John", age: 30}
let jsonString2 = JSON.stringify(obj2)
console.log(jsonString2)  // {"name":"John","age":30}
// ------------------------------------------------------------------>

