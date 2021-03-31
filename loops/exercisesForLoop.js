// for (let i = 0; i < 100; i++){
//     console.log("Repetition is a good thing.");
// }

// Construct for loops that accomplish the following tasks:
// Print the numbers 0 - 20, one number per line.

// for (let i = 0; i <= 20; i++ ) {
//     console.log(i);
// }
// Print only the ODD values from 3 - 29, one number per line.
// for (let i = 3; i < 30 ; i=i+2) {
//     console.log(i);
// }
// Print the EVEN numbers 12 down to -14 in descending order, one number per line.
// for (let i = 12; i >= -15 ; i=i-2) {
//     console.log(i);
// }
// Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
// for (let i = 50; i >= 20; i--) {
//     if(i % 3 === 0) console.log(i);
// } 
// for (let i = 50; i > 19 ; i--) {
//     if(i % 3 === 0) console.log(i);
// }   
// Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101', 'blue', 42], then construct for loops to accomplish the following tasks:
let course = 'LaunchCode';
let myArray = [1, 5, 'LC101', 'blue', 42];
// Print each element of the array to a new line.
for (let i = 0; i < myArray.length ; i++) {
    console.log(myArray[i]);
}
// Print each character of the string---in reverse order---to a new line.
for (let i = course.length -1 ; i >= 0 ; i--) {
    console.log(course[i]);
}
// Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
// Define an empty evens array to hold the even numbers and an odds array for the odd numbers.
// In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate.
// Print the arrays to confirm the results. Print evens first. Example: console.log(evens);
let original = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evens = [];
let odds = [];

for (let i = 0; i < original.length ; i++) {
    console.log('i is ', i + 'value is ', original[i]);
    if(original[i] % 2 === 0) {
        evens.push(original[i]);
    } else {
        odds.push(original[i]);
    }
}
console.log(evens);
console.log(odds);