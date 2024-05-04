// Select the body element
const body = document.querySelector('body');

// Select all elements with the class 'button'
const buttons = document.querySelectorAll('.button');

// Iterate over each button and attach event listeners
buttons.forEach(function (button) {
  console.log(button); // Logs the current button being processed

  // Add a click event listener to each button
  button.addEventListener('click', function (e) {
    // Check the ID of the clicked button to determine which background color to apply
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey'; // Set the background color to grey
    } 
    else if (e.target.id === 'white') {
      body.style.backgroundColor = 'white'; // Set the background color to white
    } 
    else if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue'; // Set the background color to blue
    } 
    else if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow'; // Set the background color to yellow
    }
    
  });
});
