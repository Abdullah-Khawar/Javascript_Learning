let x; // Variable to hold the interval ID

// Event listener for the "Start" button
document.querySelector("#start").addEventListener('click', function() {
    // Function to output the current date and time with a custom message
    const sayDate = function(str) {
        console.log(str, new Date().toLocaleString()); // Logs the message and current time
    };

    // Set an interval to call `sayDate` every second
    x = setInterval(sayDate, 1000, "Hi"); // The third argument is passed to `sayDate`
});

// Event listener for the "Stop" button
document.querySelector("#stop").addEventListener('click', function() {
    clearInterval(x); // Stops the interval
});
