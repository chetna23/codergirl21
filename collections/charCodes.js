// let nonprofit = "LaunchCode";

// console.log(nonprofit.charCodeAt(0));
// console.log(nonprofit.charCodeAt(1));
// console.log(nonprofit.charCodeAt(2));
// console.log(nonprofit.charCodeAt(3));
// console.log(nonprofit.charCodeAt(4));
// console.log(nonprofit.charCodeAt(5));
// console.log(nonprofit.charCodeAt(6));
// console.log(nonprofit.charCodeAt(7));
// console.log(nonprofit.charCodeAt(8));
// console.log(nonprofit.charCodeAt(9));

let codes = [76, 97, 117, 110, 99, 104, 67, 111, 100, 101];

let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1])
               + String.fromCharCode(codes[2]) + String.fromCharCode(codes[3])
               + String.fromCharCode(codes[4]) + String.fromCharCode(codes[5])
               + String.fromCharCode(codes[6]) + String.fromCharCode(codes[7])
               + String.fromCharCode(codes[8]) + String.fromCharCode(codes[9]);

console.log(characters);