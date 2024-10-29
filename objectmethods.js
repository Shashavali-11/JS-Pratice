// assign(target, ...sources) 
var target = {a : 1}
var source = {b : 2}
Object.assign(target,source)
// console.log(target)
// ------------------------------------------------------------------>

//Objects => keys, values, entries
var obj = {
    name: 'shasha',
    age: 21,
    gender:'Male'
}
console.log(Object.keys(obj)) // [ 'name', 'age', 'gender' ]
console.log(Object.values(obj)) // [ 'shasha', 21, 'Male' ]
console.log(Object.entries(obj)) // [ [ 'name', 'shasha' ], [ 'age', 21 ], [ 'gender', 'Male' ] ]
// ------------------------------------------------------------------>



