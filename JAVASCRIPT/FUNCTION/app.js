// function is a block of code used to perform a particular task
// function makes code reusable, you can declare it once and use it many times
// DRY - DON'T REPEAT YOURSELF


// .................................
// FUNCTION DECLARATION
function greet() {
    console.log("Hello Ishi Sahu");
}
greet();


// FUNCTION WITH PARAMETERS
function add(x, y) {
    return x + y;
}
const result = add(10, 20);
console.log(result);


// FUNCTION EXPRESSION
const user = function (username) {
    console.log(username);
};
user("ishiEglionfox");


// ARROW FUNCTION (ES6)
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 4));


// SHORT ARROW FUNCTION
const square = n => n * n;
console.log(square(6));


// CALLBACK FUNCTION
// passing a function as an argument to another function
function showCallFn(fn) {
    const value = 10;
    fn(value);
}

showCallFn(function (value) {
    console.log(value);
});


// CALLBACK WITH ARROW FUNCTION
showCallFn((value) => {
    console.log(value * 2);
});


// DEFAULT PARAMETERS
function greetUser(name = "Guest") {
    console.log(`Hello ${name}`);
}
greetUser();
greetUser("Samridhi");


// RETURNING FUNCTION
function outerFunction() {
    return function innerFunction() {
        console.log("I am inner function");
    };
}
const inner = outerFunction();
inner();


// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("IIFE executed immediately");
})();


// PURE FUNCTION
function pureAdd(a, b) {
    return a + b;
}
console.log(pureAdd(2, 3));


// IMPURE FUNCTION
let total = 0;
function impureAdd(num) {
    total += num;
}
impureAdd(5);
console.log(total);
