let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
console.log(cargoHold);

let indexOfMatch = cargoHold.indexOf('slinky');

cargoHold[indexOfMatch] = 'space tether';
console.log(cargoHold);

cargoHold.pop();
console.log(cargoHold);

console.log(cargoHold.shift());

console.log(cargoHold);

cargoHold.unshift(1138)

console.log(cargoHold);

cargoHold.push('20 meters');

console.log(cargoHold);

console.log(`Array is ${cargoHold} and its length is ${cargoHold.length}`)
