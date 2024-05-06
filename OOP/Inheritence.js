// Parent class representing a user
class User {
    constructor(username) {
        this.username = username; // Initialize the username
    }

    // Method to log the username
    logMe() {
        console.log(`USERNAME is ${this.username}`); // Outputs the username
    }
}

// Subclass that extends the User class
class Teacher extends User {
    constructor(username, email, password) {
        super(username); // Call the parent class constructor to set the username
        this.email = email; // Initialize the email
        this.password = password; // Initialize the password
    }

    // Method specific to the Teacher class
    addCourse() {
        console.log(`A new course was added by ${this.username}`); // Outputs the course addition message
    }
}

// Create an instance of the Teacher class
const abd = new Teacher("Abdullah", "abdullah@example.com", "123");

// Call the inherited method from the User class
abd.logMe(); // Outputs: "USERNAME is Abdulah"

// Create an instance of the User class
const uzair = new User("Uzair");

// Call the method on the User class
uzair.logMe(); // Outputs: "USERNAME is Uzair"

// Check if an object is an instance of a class
console.log(abd instanceof User); // Outputs: true (because Teacher inherits from User)
