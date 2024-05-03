// ******************* LOOPS/iterations******************

// For loop with break and continue

// Print numbers from 1 to 10 that are divisible by 3
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(i); // Outputs 3, 6, 9
    }
}

// Using break to exit the loop early
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break; // Loop exits when `i` is 5
    }
    console.log(i); // Outputs 0, 1, 2, 3, 4
}

// Using continue to skip an iteration
for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip this iteration
    }
    console.log(i); // Outputs 0, 1, 2, 4, 5
}

// While loop example
let score = 0;
while (score <= 10) {
    console.log(score); // Outputs 0, 2, 4, 6, 8, 10
    score += 2;
}

// Do-While loop example
let scores = 1;
do {
    console.log(scores); // Outputs 1, 2, 3, 4, 5
    scores++;
} while (scores <= 5);

// Interview Considerations
// - Break and continue control flow within loops
// - Do-While loop guarantees at least one execution, while While loop may not run at all if condition is not met
