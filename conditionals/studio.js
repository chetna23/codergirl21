// Declare and initialize the 12 variables here:
let input = require('readline-sync');
let test = input.prompt();
console.log('test: ', test);
// let astronautCount = Number(input.question('How many astronauts?: '));
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus	= 'ready';
let averageAstronautMassKg	= 80.7;
let crewMassKg	= astronautCount * averageAstronautMassKg;
let fuelMassKg	= 760000;
let shuttleMassKg = 74842.31;
let totalMassKg	= crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius	= -225;
let fuelLevel = 100;
let weatherStatus = 'clear';
let clearForTakeoff; 
if(weatherStatus === 'clear') {
    clearForTakeoff = 'YES';
} else clearForTakeoff = 'NO';

// Write code to generate the LC04 report here:
console.log('----------------------------------------');
console.log('> LC04 - LAUNCH CHECKLIST');
console.log('----------------------------------------');
console.log('Date:', date);
console.log('Time:', time, '\n');
console.log('----------------------------------------');
console.log('> ASTRONAUT INFO');
console.log('----------------------------------------');
console.log('* count:', astronautCount);
console.log('* status:', astronautStatus, '\n');
console.log('----------------------------------------');
console.log('> FUEL DATA');
console.log('----------------------------------------');
console.log('* Fuel temp celsius:', fuelTempCelsius);
console.log('* Fuel level:', fuelLevel, '% \n');
console.log('----------------------------------------');
console.log('> MASS DATA');
console.log('----------------------------------------');
console.log('* Crew mass:', crewMassKg, 'kg');
console.log('* Fuel mass:', fuelMassKg, 'kg');
console.log('* Shuttle mass:', shuttleMassKg, 'kg');
console.log('* Total mass:', totalMassKg, 'kg \n');
console.log('----------------------------------------');
console.log('> FLIGHT PLAN');
console.log('----------------------------------------');
console.log('* weather:', weatherStatus, '\n');
console.log('----------------------------------------');
console.log('> OVERALL STATUS');
console.log('----------------------------------------');
console.log('* Clear for takeoff:', clearForTakeoff);
console.log('----------------------------------------');
// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.