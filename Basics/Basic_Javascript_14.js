// *************************** SCOPE *********************************

if (true) {
    let a = 3; // Block-scoped
    const b = 6; // Block-scoped
    var c = 9; // Function-scoped
}

// `a` and `b` are block-scoped, so they are not accessible outside the `if` block
// console.log(a); // Throws error
// console.log(b); // Throws error

// `c` is function-scoped, meaning it's accessible outside the `if` block
console.log(c); // Outputs 9 - `var` doesn't follow block scope, it's function-scoped

// ******************** NESTED SCOPE *******************************

function one() {
    const name = "Abdullah"; // Scoped to the `one` function
    function two() { // Inner function, has access to outer scope
        const age = 18.5; // Scoped to the `two` function
        console.log(name); // Can access `name` from outer scope
    }
    // console.log(age); // Error: `age` is not accessible in `one`
    two(); // Call the inner function
}

one(); // Outputs "Abdullah"

// Scope within nested `if` statements
if (true) {
    const name = "Abdullah"; // Scoped to the outer `if`
    if (name === "Abdullah") { // Nested `if` scope
        const age = 18.5; // Scoped to this inner block
        console.log(`Name is ${name} and age is ${age}`); // Outputs "Name is Abdullah and age is 18.5"
    }
    // console.log(age); // Error: `age` is not accessible here
}
// console.log(name); // Error: `name` is not accessible outside the `if` block

// ******************** HOISTING *********************************
// Hoisting allows function declarations to be called before they are defined in code

// This works due to hoisting
addOne(7); // Outputs 8

function addOne(num) {
    return num + 1; // Function declarations are hoisted
}

// This does NOT work because function expressions are not hoisted
// addTwo(5); // Throws error: `addTwo` is not defined yet
const addTwo = function (num) { // Function expression
    return num + 2; // Function expressions are not hoisted
};

// Interview Considerations
// - Understand the differences between `var`, `let`, and `const` in terms of scope
// - Know what hoisting is and why function declarations behave differently from function expressions
