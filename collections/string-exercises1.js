console.log("JavaScript"[8]);
console.log("Strings are sequences of characters."[5]);
console.log("Wonderful".length);
console.log("Do spaces count?".length);

// let num = 1000;
// console.log(num.length);

let num = 1001.23;
let numString = String(num);
let numLength = numString.length;
if(numString.indexOf('.') !== -1) {
    console.log('Number contains decimal');
    numLength--;
}
console.log(numLength);