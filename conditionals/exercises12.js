let engineIndicatorLight = 'green';
// let engineIndicatorLight = 'green blinking';
// let engineIndicatorLight = 'red blinking';
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus	= spaceSuitsOn && shuttleCabinReady;
let computerStatusCode	= 200;
let shuttleSpeed = 15000;

if (engineIndicatorLight === "green") {
    console.log("engines have started");
 } else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
 } else {
    console.log("engines are off");
 }