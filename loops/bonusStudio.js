// Arrays can store other arrays!

// The cargo hold in our shuttle contains several smaller storage spaces. 
//Use split to convert the following strings into four cabinet arrays. 
//Alphabetize the contents of each cabinet.

let food = 'water bottles, meal packs, snacks, chocolate';
let foodCabinet = food.split(', ').sort();
console.log(foodCabinet);

let equipment = 'space suits, jet packs, tool belts, thermal detonators';
let equipmentCabinet = equipment.split(', ').sort();
console.log(equipmentCabinet);

let animals = 'parrots, cats, moose, alien eggs';
let animalsCabinet = animals.split(', ').sort();
console.log(animalsCabinet);

let gear = 'blankets, pillows, eyepatches, alarm clocks';
let gearCabinet = gear.split(', ').sort();
console.log(gearCabinet);

// Initialize a cargoHold array and add the cabinet arrays to it. 
//Print cargoHold to verify its structure.

let cargoHold = [];
cargoHold.push(foodCabinet, equipmentCabinet,animalsCabinet, gearCabinet);

console.log(cargoHold);

// Query the user to select a cabinet (0-3) in the cargoHold.
// Use bracket notation and a template literal to display the contents of the selected cabinet. 
//If the user entered an invalid number, print an error message instead.

input = require('readline-sync');
let num = input.question('Which cabinet number would u like to see the contents of (0-3)? ');
if(num < 0 || num > 3) {
    console.log('Not a valid cabinet number');
}
// else console.log(`Contents of cabinet are ${cargoHold[num]}`);

// Bonus to the Bonus: Modify the code to query the user for BOTH a cabinet in 
//cargoHold AND a particular item. Use the includes method to check if the cabinet contains 
//the selected item, then print "Cabinet ____ DOES/DOES NOT contain ____."
let item = input.question('What item in the cabinet are you looking for? ');
if(num < 0 || num > 3) {
    console.log('Not a valid cabinet number');
}
else if(cargoHold[num].includes(item)) {
    console.log(`Cabinet ${num} DOES contain ${item}`);
} else {
    console.log(`Cabinet ${num} DOES NOT contain ${item}`);
}