/*
=> Constructor Function: A function designed to create new instances of an object. It typically initializes properties and provides a blueprint for creating new objects.
=> new Keyword: When used with a constructor function, it creates a new instance of the object defined by the constructor, setting "this" to refer to the new object.
*/

// Constructor function to create a new user object
function createUser(username, score) {
    this.username = username; // `this` refers to the new object created
    this.score = score; // Initializing the score
}

// Adding a method to the constructor's prototype
createUser.prototype.increment = function() {
    ++this.score; // Increments the user's score
};

// Adding another method to the prototype to print the score
createUser.prototype.printMe = function() {
    console.log(`Score: ${this.score}`); // Output the user's score
};

// Creating a new instance of `createUser`
const x = new createUser('abdullah', 10); // Using `new` to create a new object

// Using the `increment` method to increase the score
x.increment(); // Increment the score by 1

// Using the `printMe` method to print the score
x.printMe(); // Output "Score: 11"
