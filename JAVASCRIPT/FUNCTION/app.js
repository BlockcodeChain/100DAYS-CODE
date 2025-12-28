// function is a block of code used to perform particular task 
// fucntion make code reusable , u can declare at ones and use it many times
// DRY-DON'T REPEAT YOURSELF

// ..............................
// FUNCTION DECLARATION
function Greet(){
    console.log("hello ishi sahu");
}
Greet();
// function  expression
function add(x,y){
    return x+y;
}
const result=add(10,20);
console.log(result)
// function expression
const result1=function user(username){
console.log(`${username}`)
}
result1("ishieglionfox")

// callback function
// provide fn as an argument to other fn is known as call back fn
function showcallfn(fn){
    const value=10;
    fn(value);
}
showcallfn(function(value){
    console.log(value);
})