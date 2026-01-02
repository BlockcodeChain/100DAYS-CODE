const arr1=[1,2,3];
const arr2=[4,5,6];
const user={
    name:"Ishi",
    color:"wheatish",
    age:21
}
const bio={
    city:"UP",
    country:"India"
}

console.log(...arr1,...arr2);
console.log({...user,...bio})