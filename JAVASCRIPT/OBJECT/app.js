// int object we use curly brace{} and in array we use [] brackets
const person={
    name:"ishi",
    age:22,
    hobby:"coding",
    12:7,
}
// we can also write method ->function inside object
console.log(person)
// u can access object using 2 methods [dot and bracket]
// dot accesing
console.log(person.name)
// bracket accesing
console.log(person["name"])
// console.log(person.12)   //error

// right 
console.log(person['12'])