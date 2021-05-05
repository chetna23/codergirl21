'use strict';
var foo = "foo1";
var foo = "foo2"; // No problem, 'foo1' is replaced with 'foo2'.

console.log(foo);
let bar = "bar1"; 
console.log(bar);
// let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared