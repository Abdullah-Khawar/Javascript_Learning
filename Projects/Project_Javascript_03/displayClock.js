// Select the HTML element where the clock will be displayed
const clock = document.querySelector("#clock");

// console.log(clock); // Outputs the selected clock element to ensure it's correct

// Define a function to update the clock
function updateClock() {
    const date = new Date(); // Get the current date and time
    const formattedDate = date.toLocaleString(); // Format the date/time in a locale-specific way
    clock.innerHTML = formattedDate; // Update the clock element's inner content with the formatted date/time
}

// Set an interval to update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000); // Calls `updateClock` every second
