// Define a variable to hold the random number
let rn = 0;

// Function to create bubbles
function makeBubble() {
  let clutter = '';

  // Create 184 bubbles with random numbers
  for (var i = 1; i <= 184; i++) {
    rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  // Display the bubbles in the bottom panel
  document.querySelector('.pbtm').innerHTML = clutter;
}

// Define the initial timer value
let time = 60;

// Function to run the timer
function runTimer() {
  // Set an interval to decrement the timer value every second
  let timeInt = setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector('.timerValue').textContent = time;
    } 
    else {
      // When time is up, display "Game Over" and show the restart button
      document.querySelector('.pbtm').textContent = 'Game Over';
      clearInterval(timeInt);
      document.querySelector('.restart').style.display = 'block';
    }
  }, 1000);
}

// Define the initial score value
let score = 0;

// Function to increase the score when a bubble is clicked
function increaseScore() {
  score += 10;
  document.querySelector('.scoreValue').textContent = score;
}

// Define the initial hit value
let newHit = 0;

// Function to get a new hit value
function getNewHit() {
  newHit = Math.floor(Math.random() * 10);
  document.querySelector('.hitValue').textContent = newHit;
}

// Event listener for clicking on bubbles
document.querySelector('.pbtm').addEventListener('click', function (details) {
  let clickNumber = Number(details.target.textContent);
  if (clickNumber === newHit) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

// Function to reset the game
function resetGame() {
  // Reset timer and score values, create new bubbles and hit value
  time = 60;
  score = 0;
  makeBubble();
  getNewHit();
  document.querySelector('.timerValue').textContent = time;
  document.querySelector('.scoreValue').textContent = score;
  // Hide the restart button when the game resets
  document.querySelector('.restart').style.display = 'none';
}

// Function to start the game
function startGame() {
  makeBubble();
  getNewHit();
  runTimer();
}

// Call the startGame function to begin the game
startGame();

// Call the resetGame function when the restart button is clicked
const restartBtn = document.querySelector('.restart')
restartBtn.addEventListener('click', function(){
  resetGame();
  runTimer();
});

