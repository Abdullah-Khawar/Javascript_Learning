// ************************** CALL **************************

// Function to set a username
function setUserName(username) {
    this.username = username;
}

// Function to register user details
function regDetails(username, email, password) {
    // If you call `setUserName` without context, it might not set the username correctly
    // setUserName(username) // will not set name as this func will popped out of func-call stack and info lost
    // `this` might not refer to the expected object without `call()`
    setUserName.call(this, username); 
    
    this.email = email; // Set email
    this.password = password; // Set password
}

// Create a new object with `regDetails` using `new`
const obj = new regDetails("Abdullah", "abdullah@example.com", "123"); 

// Output the created object to verify the properties
console.log(obj); // Outputs: { username: "Abdullah", email: "abdullah@example.com", password: "123" }
