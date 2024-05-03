// ************************* OBJECTS USING Literals **********************************
// There are two common ways to create objects in JavaScript: object literals and constructors.
// Object literals are non-singleton, while constructors are typically used for singletons.


//Interview Question: Using Symbols as Object Keys
const mySymbol = Symbol("uniqueKey");

const myObject = {
    name: "Abdullah",
    lastName: "Khawar",
    age: 19,
    [mySymbol]: "Symbol Key", // Using a Symbol as a key in an object (Using brackets)
    email: "abdullahkhawar@gmail.com",
    address: "Lahore",
};

// Accessing properties in an object
console.log(myObject.name); // Direct property access
console.log(myObject["age"]); // Access using square brackets (useful when keys have special characters or spaces)
console.log(myObject[mySymbol]); // Accessing with a Symbol key

// Changing values and freezing objects
myObject[mySymbol] = "New Symbol Key"; // Modifying a symbol-based property
console.log(myObject[mySymbol]); // Outputs "New Symbol Key"

// Freezing the object to prevent further changes
Object.freeze(myObject); // Now the object is immutable
myObject[mySymbol] = "Another Change"; // This won't change the value
console.log(myObject[mySymbol]); // Still "New Symbol Key"

// Adding methods to objects
myObject.greeting = function () {
    return `Hello, ${this.name}`; // Using `this` to reference the current object
};

console.log(myObject.greeting()); // Outputs "Hello, Abdullah"

// Interview Considerations
// - Understand object literals and how to create and access object properties
// - Learn about Symbols and their unique use cases, especially when used as object keys
