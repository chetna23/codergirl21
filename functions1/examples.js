//Defining and Calling
function sayHello() {
    console.log("Hello, World!");
 }
 
 sayHello();

//An Example
let names = ["Lena", "James", "Julio"];

for (let i = 0; i < names.length; i++) {
   console.log(names[i]);
}

function printNames(names) {
    for (let i = 0; i < names.length; i++) {
       console.log(names[i]);
    }
 }

 function printArray(names) {
    for (let i = 0; i < names.length; i++) {
       console.log(names[i]);
    }
 }
 
 printArray(["Lena", "James", "Julio"]);
 console.log("---");
 printArray(["orange", "apple", "pear"]);

 function sumToN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
       sum += i;
    }
    return sum;
 }
 
 console.log(sumToN(3));

 //Boolean functions
 function isEven(n) {
    if (n % 2 === 0) {
       return true;
    } else {
       return false;
    }
 }
 
 console.log(isEven(4));
 console.log(isEven(7));

//  function isEven(n) {
//     return n % 2 === 0;
//  }

function hello(name) {
    return `Hello, ${name}!`;
 }
 
 console.log(hello("Lamar"));

 function calculateAreaOfCircle(radius) {
    let area = Math.PI * radius**2;
    return area;
  }