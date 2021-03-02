let shuttleName = 'Determination';
let speed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
let milesPerKm = 0.621;

console.log(typeof shuttleName);
console.log(typeof speed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKm);

let milesToMars = distanceToMars * milesPerKm;
let hoursToMars = milesToMars/speed;
let daysToMars = hoursToMars/24;

console.log(shuttleName, ' will take ', daysToMars, 'days to reach mars');

let milesToMoon = distanceToMoon * milesPerKm;
let hoursToMoon = milesToMoon/speed;
let daysToMoon = hoursToMoon/24;

console.log(shuttleName, ' will take ', daysToMoon, 'days to reach the moon');