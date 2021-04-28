// function b() {
//     let myVar;   
//     console.log(myVar);
// }

function b() {
    console.log(myVar);
}

function a() {
    let myVar = 2;
    console.log(myVar);
    b();
}
let myVar = 1;
console.log(myVar);
a();
console.log(myVar);
//Global execution context is created and executed.
//myvar = 1

//invocation of a
//new execution context is created for a.
//variable environment is created for a.
//myVar = 2

//invocation of b
//new execution context is created for b.
//variable environment is created for b.
//myVar = undefined

//scope is where a variable is available in your code. 
//where we can see each variable. 

//ES6 has block scoping in that it 
//restricts the usage of variable to inside the block.