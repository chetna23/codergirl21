// Define three variables for the LaunchCode shuttle---one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

// Construct while loops to do the following:
// Prompt the user to enter the starting fuel level. 
//The loop should continue until the user enters a positive value greater than 5000 but less than 30000.

let startingFuelLevel;
let numAstronauts;
let shuttleAltitude = 0;

// const input = require('readline-sync');

// let num= input.question('Please enter a starting fuel level:');
//     startingFuelLevel = Number(num);

// while (startingFuelLevel >= 30000 || startingFuelLevel <= 5000) {
//     num= input.question('Please enter a starting fuel level:');
//     startingFuelLevel = Number(num);
// }
startingFuelLevel = 29999;
numAstronauts = 4;
// console.log('startingFuelLevel is ', startingFuelLevel);

// Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry by having the loop continue until the user enters an integer from 1 - 7.

// numAstronauts = Number(input.question('Please enter the number of astronauts aboard: '));
// console.log(numAstronauts);
// while(numAstronauts > 7 || numAstronauts <1) {
//     numAstronauts = Number(input.question('Please enter the number of astronauts aboard: '));
// }

// Use a final loop to monitor the fuel status and the altitude of the shuttle. 
//Each iteration, decrease the fuel level by 100 units for each astronaut aboard. 
//Also, increase the altitude by 50 kilometers. (Hint: The loop should end when there is not enough fuel to boost the crew another 50 km, 
// so the fuel level might not reach 0).

while(startingFuelLevel > 100*numAstronauts) {
    startingFuelLevel-=100*numAstronauts;
    shuttleAltitude+=50;
}

// After the loops complete, output the result with the phrase, The shuttle gained an altitude of ___ km.
// If the altitude is 2000 km or higher, add "Orbit achieved!"
// Otherwise add, "Failed to reach orbit."

// console.log(`The shuttle gained an altitude of ${shuttleAltitude} km`);
if(shuttleAltitude >= 2000) {
    console.log('Orbit achieved');
} else {
    console.log('Failed to reach orbit.');
}