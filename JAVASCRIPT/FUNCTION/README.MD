

## 1️⃣ What is a Function?

A function is a **block of code** designed to perform a **repeatable task**.

**Syntax:**
```js
function name(parameters){
    // code
}

function greet(name){
    return "Hello " + name;
}

console.log(greet("Samridhi")); // Hello Samridhi

2️⃣ Types of Functions
2.1 Named Function

Function has a name

Can be hoisted

function add(a, b){
    return a + b;
}

2.2 Anonymous Function

No name, stored in variable

const multiply = function(a, b){
    return a * b;
}

2.3 Arrow Function (ES6)

Short syntax, lexical this

const divide = (a, b) => a / b;

2.4 IIFE (Immediately Invoked Function Expression)

Runs immediately after declaration

(function(){
    console.log("IIFE running");
})();

2.5 Recursive Function

Function calling itself

function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n-1);
}

2.6 Callback Function

Function passed as parameter

function greet(name, callback){
    console.log("Hello " + name);
    callback();
}

2.7 Function Constructor

Create function dynamically

const sum = new Function('a', 'b', 'return a + b');

3️⃣ Function Features

Parameters: Input values for function

Arguments: Actual values passed

Return: Value returned by function

Hoisting: Named functions can be called before declaration

Scope: Local & global variables

Default Parameters: ES6 feature

4️⃣ Function Declaration vs Expression
Feature	Declaration	Expression
Name	Required	Optional
Hoisting	Yes	No
Example	function f(){}	const f = function(){}


Notes

push() = append element in array

concat() = merge arrays

splice() = add/remove element at specific index