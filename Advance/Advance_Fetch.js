// ************************* FETCH *************************

// The fetch API is used to make HTTP requests

// Asynchronous function to make an API request
async function apiRequest() {
    
    try {
        // Fetch data from the GitHub API
        const response = await fetch("https://api.github.com/users/Abdullah-Khawar");
        // Convert the response to JSON
        const data = await response.json();
        // Output the fetched data
        console.log(data); // Logs the JSON data
    } 
    catch (err) {
        // Error handling if the fetch fails
        console.log("Fetch error:", err); // Log the error message
    }
  
}

// Call the async function to fetch data
apiRequest();

// Using `fetch` with Promises (traditional approach)
fetch("https://api.github.com/users/Abdullah-Khawar")
    .then((response) => response.json()) // Convert the response to JSON
    .then((data) => {
        console.log(data); // Output the JSON data
    })
    .catch((err) => {
        console.log("Fetch error:", err); // Error handling for fetch errors
    });
