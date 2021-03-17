// let weeklyPay = 600;

// let dailyEarnings = weeklyPay / 6;
// console.log(dailyEarnings);

const input = require('readline-sync');

let degreesC = Number(input.question('Temp in degrees C:'));
let degreesK = degreesC + 273.15;

console.log('Degrees K:', degreesK);