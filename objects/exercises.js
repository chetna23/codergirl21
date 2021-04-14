
// After you have created the other object literals, 
//add the astronautID property to each one.
let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    astronautID: 1,
    move: function() {
        return Math.round(Math.random()*10);
    }
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    astronautID: 2,
    move: function() {
        return Math.round(Math.random()*10);
    }
};

let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 5,
    astronautID: 3,
    move: function() {
        return Math.round(Math.random()*10);
    }
};

let beagle = {
    name: "Leroy",
    species: "Beagle",
    mass: 14, 
    age: 1,
    astronautID: 4,
    move: function() {
        return Math.round(Math.random()*10);
    }
};

let tardigrade = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001, 
    age: 1,
    astronautID: 5,
    move: function() {
        return Math.round(Math.random()*10);
    }
}
// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade];

function crewReports(animal) {
    return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`
}

// for (let item in crew) {
//     console.log(crewReports(crew[item]));
// }

for (let i=0; i < crew.length; i++) {
    // console.log(crewReports(crew[i]));
}


// Print out the relevant information about each animal.

// Start an animal race!
function fitnessTest(crew) {
    let results = [];
    for (item in crew) {
        // console.log(crew[item]);
        let steps = 0;
        let numMoves = 0;
        while(steps < 20){
            steps += crew[item].move();
            numMoves++;
        }
        results.push(numMoves);
    }
    return results;
}

let results = fitnessTest(crew);
console.log(results);
let turns = Math.min(...results);
let winner = crew[results.indexOf(turns)];
console.log(`${winner.name} took ${turns} turns to take 20 steps`);