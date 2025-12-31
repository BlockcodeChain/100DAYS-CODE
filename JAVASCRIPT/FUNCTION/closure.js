function outer(x) {
    // outer function gets 'x'

    function inner(y) {
        // inner function uses 'y'
        // BUT it can also use 'x' from outer()
        return x + y;
    }

    // outer is NOT calling inner
    // it is RETURNING the inner function
    return inner;
}

const outerReturn = outer(10);
// outer(10) runs
// x = 10
// outer returns the inner function
// outerReturn now HOLDS inner function with x = 10 saved inside it

console.log(outerReturn);
// prints the inner function itself (not executed)

console.log(outerReturn(8));
// calling inner function
// y = 8
// x is still 10 (remembered)
// result = 10 + 8 = 18

console.log(outer(10)(9));
// outer(10) → returns inner function
// (9) → immediately calls inner with y = 9
// result = 10 + 9 = 19
