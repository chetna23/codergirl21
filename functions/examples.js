//Normal function
// function hello(name) {
//     console.log(`hello ${name}! Are you a CoderGirl?`);
// }
// // hello("Genius!");

// //Anonymous functions
// // let hello1 = function(name) {
// //     return `hello ${name}! Are you a CoderGirl?`;
// // }

// // console.log(hello1());

// //Fn as Argument

// let names = ['Kuntal', 'Vikram', 'Betaal', 'Jangali', 'Jen'];
// // for(let i = 0; i < names.length; i++) {
// //     console.log(names[i][0]);
// // }
// let nickNames = function(name) {
//     if(name.length > 3) return name.slice(0,3); else return name[0];
// }

// let nickNameArray = names.map(nickNames);
// console.log(nickNameArray);
// console.log(names);

//set timeout
function printMessage() {
    console.log("The future is now!");
 }
 
 printMessage();
 setTimeout(printMessage, 5000);
