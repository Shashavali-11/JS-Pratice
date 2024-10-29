let people = {
    Riya:'Daughter',
    Domini : 'Mother'
}
var a = Object.keys(people)[0]
var b = Object.keys(people)[1]

// console.log(a)
// console.log(b)
var a1 =[0,1,2,3,4,5,6]



for(person of a1){
    if(person==0){
        console.log(`${a} is Daughter of ${b}.`)
        console.log(`${b} is Mother of ${a}.`)
        console.log(`${a} & ${b} are Mother & Daughter.`)
    }


}

