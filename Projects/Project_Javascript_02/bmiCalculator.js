// Select the form element
const form = document.querySelector('form');

console.log(form); // Outputs the form to the console

// Add an event listener to handle form submission
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevents the default form submission behavior

  // Parse height and weight from form inputs
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results"); // Element to display results

  // Validate height input
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please provide a valid height: ${height}`; // Error message for invalid height
  }

  // Validate weight input
  else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please provide a valid weight: ${weight}`; // Error message for invalid weight
  }

  // If inputs are valid, calculate BMI
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); // BMI formula and rounding to 2 decimal places

    // Determine BMI category
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span> => Underweight`; // BMI below 18.6 is underweight
    }
    else if (bmi > 24.9) {
      results.innerHTML = `<span>${bmi}</span> => Overweight`; // BMI above 24.9 is overweight
    }
    else {
      results.innerHTML = `<span>${bmi}</span> => Normal weight`; // BMI between 18.6 and 24.9 is normal weight
    }
  }
});
