// **************************** Prototypes ****************************
// Almost everything in JS is Object. Every object has a prototype.
// The prototype is another object from which it inherits properties and methods.
// This chain extends up to Object.prototype.

// Creating an object with a custom method
const user = {
    name: "Abdullah",
    age: 20,
    greetings: function() {
        console.log("Hello", this.name); // Uses `this` to refer to the current object
    }
};

// === Adding a custom method to `Object.prototype`=== 
// This method will be accessible to arrays, strings as well
// Since Tree is like Object --> Arays, Strings, Function
Object.prototype.myMethod = function() {
    console.log("This is a user-defined method"); // Custom method on `Object`
};

// Calling the custom method on an object
user.myMethod(); // Outputs: "This is a user-defined method"

// === Adding a custom method to `String.prototype` === 
// This is only accessible to Strings not the arrays, or objects.
// As in the tree, Top level things will be accessible to down, and reverse is false
String.prototype.truelength = function() {
    return this.trim().length; // Trims the string and returns the length
};

const str = "    Abdullah  ";
console.log(str.truelength()); // Outputs: 8 (after trimming)
