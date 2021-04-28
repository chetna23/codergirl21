//Wraps the currently executing code in an execution context.
//base execution context is global execution context
//gloabl object and this created by javascrip engine

//js in browser

//hoisting - done by javascript engine. prsent things for when code is ready to be executed.
//everything is given undefined in beginning.

b();

let a = 'Hello World';

function b() {
    let a = 'Something else'
    console.log('Called b!');   
}
console.log(a);
//better to do this
b();
console.log(a);
