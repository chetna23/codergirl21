// function coolFunction() {
//     newVariable = 5;
//     return newVariable;
// }

// console.log(coolFunction());

// function print() {
//     for(i=0 ; i < 10 ; i++) {
//         console.log(i);
//     }
// }
// i=2;
// print();

// let a = 0;

// function coolFunction() {
//    let b = 2;
//    return a + b;
// }

// function coolerFunction() {
//    let c = 5;
//    c += coolFunction();
//    return c;
// }

// console.log(coolFunction());
// console.log(coolerFunction());

const input = require('readline-sync');

function hello(name) {
   console.log('Hello,', name);
   name = 'Ruth';
   return doubleName(name);
}

function doubleName(name){
   console.log(name+name);
   return name+name;
}

let name = input.question("Please enter your name: ");

hello(name);
doubleName(name);
console.log(name);