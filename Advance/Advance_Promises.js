// ******************************** PROMISES ********************************
/*
-> A promise can be created with => new Promise((resolve, reject) => ...). 
-> It represents an asynchronous operation that can be resolved or rejected.

-> Use .then() to define what should happen when a promise is resolved.
-> Use .catch() to handle errors if the promise is rejected.
-> Use .finally() to perform cleanup or final actions regardless of the promise's outcome.

-> The async keyword allows functions to use await, enabling a synchronous style of handling asynchronous code.
-> await waits for a promise to resolve or reject before continuing.
-> try/catch blocks handle errors in asynchronous code.
*/

// This is how a Promise is created, but we have to consume it later
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(); // Resolve the promise after a 1-second delay
    }, 1000);
});

// Consuming the Promise with `.then()`
promiseOne.then(() => {
    console.log("Inside Consumption of promise #1"); // This runs when the promise is resolved
});

// Short-hand Notation for the same code
new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Hello SetTimeOut 1");
        resolve(); // Resolving the promise
    }, 1000);
}).then(() => {
    console.log("Inside Consumption of promise #1"); // Runs after promise is resolved
});

// Using Promises to Resolve with Data
const promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve({ name: "Abdullah", age: 20 }); // Resolving with an object
    }, 1000);
});

promiseTwo.then((user) => {
    console.log(user); // Output the object passed with the resolved promise
});

// Handling a Promise with Possible Rejection
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false; // Change to `true` to trigger rejection
        
        if (!error) {
            resolve({ name: "Uzair", age: 20 }); // Resolve with data
        } 
        else {
            reject("Could not find info"); // Reject the promise with an error message
        }
      
    }, 1000);
});

promiseThree
    .then((user) => {
        return user.name; // Chain to another `.then()` to pass this name
    })
    .then((username) => {
        console.log(username); // Output the user's name after chaining (Received from above .then())
    })
    .catch((err) => {
        console.log(`ERROR: ${err}`); // Error handling if the promise is rejected
    })
    .finally(() => {
        console.log("Completed: Either Rejected or Success"); // Executes after the promise is settled, regardless of the outcome
    });



// ==== Using `async/await` with Error Handling ====
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true; // Change to `false` to trigger resolution
        
        if (!error) {
            resolve({ name: "Athar", age: 19 }); // Resolving with data
        } 
        else {
            reject("Could not find info"); // Rejecting with an error message
        }
    }, 1000);
});

async function consume() {
    try {
        const response = await promiseFour; // Wait for the promise to resolve or reject
        console.log(response); // Output the response if resolved
    } 
    catch (error) {
        console.log(`Error: ${error}`); // Error handling for rejected promise
    }
}

consume(); // Call the async function to execute the promise
