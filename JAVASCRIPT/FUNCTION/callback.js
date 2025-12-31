function foo(bar) {
    // foo function start hua
    console.log("foo started");

    // bar ek CALLBACK function hai
    // yahan bar ko CALL kiya ja raha hai
    bar();

    // foo function end hua
    console.log("foo ended");
}

foo(function () {
    // yeh CALLBACK FUNCTION hai
    console.log("I am callback function");
});
