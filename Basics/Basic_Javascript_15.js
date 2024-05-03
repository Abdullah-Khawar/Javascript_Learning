// ********************** ARROW FUNCTIONS *************************

// Example of an object with a regular function and using `this`
const myObject = {
    name: "Abdullah",
    age: 18.5,
    welcomeMessage: function () { // Regular function in object
        console.log(`${this.name}, Welcome to my Website!`); // `this` refers to current object context
        console.log(this); // Outputs the current object context
    },
};

myObject.welcomeMessage(); // Outputs "Abdullah, Welcome to my Website!"
myObject.name = "Abdullah Noor";
myObject.welcomeMessage(); // Outputs "Abdullah Noor, Welcome to my Website!"

console.log(this); 
// In Node.js, this will output an empty object
// In a browser environment, `this` will refer to the global `window` object

function regularFunction() {
    console.log(this); // In strict mode, `this` will be `undefined`; otherwise, it's the global object
}
regularFunction();

// Arrow functions and `this` behavior
const useThisInArrow = () => { 
    console.log(this); // Arrow functions don't create their own `this`; they inherit from their outer scope
};
useThisInArrow(); // In a global context, this will refer to the global object (or empty object in Node.js)

// Arrow functions with implicit return (explicit return must be used with {})
const add = (num) => num + num; // Single-line arrow functions can implicitly return a value
console.log(add(7)); // Outputs 14

// Multi-line arrow functions with explicit return
const multiply = (num) => {
    return num * num;    // Explicit return
};
console.log(multiply(7)); // Outputs 49

// Immediately Invoked Function Expressions (IIFE)
// An IIFE is a function that is executed immediately upon creation

(function () {
    console.log("Hello, IIFE!"); // Outputs "Hello, IIFE!"
})();

// Named IIFE
(function greeting() {
    console.log("Hello, named IIFE!");
})();        // Must place ; to stop/end context

// IIFE with parameters
((number) => {
    console.log(`The number is ${number}`);
})(7); // Outputs "The number is 7"

// Interview Considerations
// - Understand the difference between regular functions and arrow functions, especially in terms of `this` behavior
// - Know how to use IIFE to avoid polluting the global scope
// - Recognize the implicit return in single-line arrow functions
// - Understand when and how to use arrow functions for simpler syntax and concise code
