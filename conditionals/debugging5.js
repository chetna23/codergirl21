let launchReady = false;
// let fuelLevel = 17000;
let fuelLevel = 27000;
let crewStatus = true;
let computerStatus = 'green';

let fuelReady = false;
let crewReady = false;
if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelReady = true
   // launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   // launchReady = false;
}
// console.log(launchReady)

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crewReady = true;
   // launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   // launchReady = false;
}

launchReady = fuelReady && crewReady;
console.log('launchReady: ', launchReady)
//Add diff variable to check for fuelStatus and/or Crew Status.
if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}