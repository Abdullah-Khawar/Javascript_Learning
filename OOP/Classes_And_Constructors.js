// *********************** CLASSES ***********************

// Define a class to represent a user
class User {
    constructor(username, email, password) {
        this.username = username; // Set username
        this.email = email; // Set email
        this.password = password; // Set password
    }

    // Class method to return modified password
    pass() {
        return `${this.password}123`; // Append "123" to the password
    }

    // Class method to return the uppercase version of the username
    name() {
        return `${this.username.toUpperCase()}`; // Convert username to uppercase
    }
}

// Create an instance of the `User` class
const newUser = new User("Abdullah", "abdullah@example.co", "sdr");

// Call the class methods
console.log(newUser.pass()); // Outputs: "sdr123"
console.log(newUser.name()); // Outputs: "Abdullah"


// *********************** Same functionality using Constructor Functions ***********************

// Define a constructor function to represent a user
function User1(username, email, password) {
    this.username = username; // Set username
    this.email = email; // Set email
    this.password = password; // Set password
}

// Define prototype methods for the constructor function
User1.prototype.pass = function() {
    return `${this.password}123`; // Append "123" to the password
};

User1.prototype.name = function() {
    return `${this.username.toUpperCase()}`; // Convert username to uppercase
};

// Create an instance using the constructor function
const user = new User1("Abdullah", "abdullah@example.com", "sdr");

// Call the prototype methods
console.log(user.pass()); // Outputs: "sdr123"
console.log(user.name()); // Outputs: "Abdullah"

