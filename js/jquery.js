

function outside() {
    let x = 5;
    return function inside(y) {
        return x + y;
    }
}

// returns the inside function's declaration
// This is the same effect you get when you just
// call a function without the ().
// console.log(outside());
/*
    Returns this:
    ƒ iniside(y) {
        return x + y;
    }
*/

// To call the inner function, we have to put in a
// second ()
// console.log(outside()(2));
// OR
let outer = outside();
let inner = outer;

// console.log(inner(2));

// A better approach is to declare the outside function
// Immediately Invoked Function Expression (IIFE)
// which invokes the function once immediately

let coolerFunc = (function() {
    let x = 5;
    return function inside(y) {
        return x + y;
    }
})();

// console.log(coolerFunc(2));

// This is a module pattern implemented with
// IIFE. The methods in the returned objects are closures. 
// This shows the concept of having private variables 
// that can be manipulated/accessed by public methods/properties.
const Counter = (function() {
    let counter = 0;
    return {
        increment: () => ++counter,
        decrement: () => --counter,
        getCounter: () => counter
    }
})();

Counter.increment();
console.log(Counter.getCounter());
Counter.increment();
console.log(Counter.getCounter());
console.log(Counter.counter); // Would return undefined
