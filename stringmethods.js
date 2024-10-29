// All String Methods in JavaScript

// CharAt(index)
let str1 = 'Shashavali'
console.log(str1.charAt(5)) // a
// ------------------------------------------------------->

// includes(searchString)
let str2 = 'Hello, World!'
console.log(str2.includes("World")) // true
// ------------------------------------------------------->

// replace(searchValue, newValue)
let str3 = 'Hello, World!'
console.log(str3.replace('World', 'Green')) // Hello, Green!
// ------------------------------------------------------->

// slice(startindex, endindex)
let str4 = 'Hello, World!'
console.log(str4.slice(0,8)) // Hello, W
// ------------------------------------------------------->

// toUpperCase()
var str5 =[{
    name: 'Shasha',
    gender: 'Male',
}]
console.log(str5[0].gender.toUpperCase() + " " + str5[0].name.toUpperCase() ) // MALE SHASHA
// for(i in str5){
//     console.log(`${i} : ${str5[i].toUpperCase()}`)
// }
// ------------------------------------------------------->

// toLowerCase()
console.log(str5[0].gender.toLowerCase() + " " + str5[0].name.toLowerCase() ) // male shasha
// ------------------------------------------------------->

// split(separrator)
let str6 = "a b c d"
for(i in str6){
    if(i == 0){
        console.log(str6.split())
    }
}














