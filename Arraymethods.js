var arr = ["Shashavali", "Charan", "Rajesh", 1, 2, 3]

var arr2 = [ "Shamsheer", "Madhan", "Kaladhar", 4, 5, 6 ]
 
var arr1 = [1, 2, 3, 4, 5]

// Concat two arrays.....
var a = arr1.concat(arr2)
// console.log(a)
// ------------------------------------------------------------------>


// convert array to a string (toString(), join(),)--------->
// toString() -> is used to convert array to string
var str = a.toString()
// console.log(str)
// join() -> is used to convert array to string
var join = a.join(",")
// console.log(join)
// ------------------------------------------------------------------>


// filter(callback) 
var filter1 = arr1.filter(str => str.length > 2) // Gives the numbers which is greater than 2
// console.log(filter1) // [ 'Shashavali', 'Charan', 'Rajesh' ]
// ------------------------------------------------------------------>


//find(callback)
var find1 = arr1.find(str => str > 3)  // returns only 1st value where the condition is satisfied
// console.log(find1) // 4
// ------------------------------------------------------------------>


//map(callback)
var map1 = arr1.map(num => num > 2) 
// console.log(map1) // [ false, false, true, true, true ]
var map2 = arr1.map(num => num * 2) 
// console.log(map2)  // [ 2, 4, 6, 8, 10 ]
// ------------------------------------------------------------------>

// push(element)
arr1.push(6,7,8)
// console.log(arr1)

// pop()
arr1.pop()
console.log(arr1)
// ------------------------------------------------------------------>














