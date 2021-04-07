const input = require('readline-sync');

//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

// let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
// let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
// let veggies = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
// let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
// let desserts = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
// for (let i = 0; i < 6; i++) {
//     let meal = [protein[i], grains[i], veggies[i], beverages[i], desserts[i]];
//     console.log(meal);
// }

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.

// let numMeals = input.question("How many meals would you like to make?");

// while (numMeals < 1 || numMeals > 6 || isNaN(numMeals)) {
//     numMeals = input.question("Invalid entry. How many meals would you like to make?");
// }

// Part B: Self-destruct system.
let string1 = '12345'; // Use strings of the same length.
let string2 = '67890';
let code = '';

//code = string1[0]+string2[0]+string1[1]+string2[1]+string1[2]+string2[2]+string1[3]+string2[3]+string1[4]+string2[4];

for (let i = 0; i < string1.length; i++) {
  code+=string1[i]+string2[i];
}

console.log(code);

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.

// for (let i = 0; i < numMeals; i = i + 1) {
//     console.log("This meal includes: "+protein[i]+", "+grains[i]+", "+veggies[i]+", "+beverages[i]+", and "+desserts[i]);
//     if (veggies[i] === "kale" || desserts[i] === "more kale") {
//         console.log("Don't worry! You can have double chocolate tomorrow!");
//     }
// }

// b. Use an “array of arrays” to store the food options in a ‘pantry’.

// let pantry = [protein, grains, veggies, beverages, desserts];
// for (let i = 0; i < numMeals; i++) {
//   meal = [];
//   for (let j = 0; j < pantry.length; j++)
//     meal.push(pantry[j][i]);
//     console.log(meal);
//     if (meal.includes('kale') || meal.includes('more kale')) {
//         console.log("Don't worry! You can have double chocolate tomorrow!");
//     }
// }

// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”

