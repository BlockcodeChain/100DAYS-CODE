console.log("Inferring")
const mvar='container'
const fname='ishi'
let teacher=15
// teacher='sudha'  error

// regular function 
function addone(num:number ,num2:number){
 console.log( num+num2)

}
addone(4,8);

const sum=(x:number,y:string)=>{
console.log(x+y);
}
sum(4,'ishi')

    
// default parameter
const greet=(fullname:string='ishi sahu')=>{
    console.log(fullname)
}
greet()

// Annotations
function random(s:number):number{
    return s;
}
console.log(random(5))