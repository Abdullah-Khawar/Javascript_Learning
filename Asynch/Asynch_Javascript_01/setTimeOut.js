// ************** setTimeout and clearTimeout **************

// Function to change text content of an `<h1>` element
const changeText = function() {
    document.querySelector('h1').innerHTML = "ABDULLAH KHAWAR"; // Change the `<h1>` text
};

// Set a timeout to change the text after 2 seconds
const x = setTimeout(changeText, 2000); // Timeout ID is stored in `x`

// Event listener to stop the timeout before it executes
document.querySelector('#stop').addEventListener('click', function() {
    clearTimeout(x); // Clears the timeout, preventing `changeText` from executing
    console.log("Stopped"); // Logs "Stopped" to indicate the timeout was cleared
});
