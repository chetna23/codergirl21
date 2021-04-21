// let giraffe = {
//     species: "Reticulated Giraffe",
//     name: "Cynthia",
//     weight: 1500,
//     age: 15,
//     diet: "leaves"
// };

// for (item in giraffe) {
//  console.log(item + ", " + giraffe[item]);
// }

// let tortoiseTwo = {
//     species: "Galapagos Tortoise",
//     name: "Patricia",
//     weight: 800,
//     age: 85,
//     diet: ["pumpkins", "lettuce", "cabbage"],
//     sign: function() {
//        return this.name + " is a " + this.species;
//     }
//   };

//   for (item in tortoiseTwo) {
//       console.log(item, tortoiseTwo[item]);
//   }

//   let tortoiseOne = {
//     age: 150,
//     species: "Galapagos Tortoise",
//     diet: ["pumpkins", "lettuce", "cabbage"]
//  };
 
//  let tortoiseTwo = {
//     age: 150,
//     species: "Galapagos Tortoise",
//     diet: ["pumpkins", "lettuce", "cabbage"]
//  };

//  console.log(tortoiseTwo.age == tortoiseOne.age);

// console.log(Math.PI);

// Math.PI = 1234;

// console.log(Math.PI);

// console.log(Math.trunc(-3.87));

// let num = Math.floor(Math.random()*10);

// console.log(num);

function randomSelection(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
 }
 
 let happiness = [1, 2, 3, 4];

 let words = ['blah', 'test', 'what'];
 
 for (i=0; i < 8; i++){
    console.log(randomSelection(happiness));
 }

 let num = Math.round(Math.random()*10);

console.log(num);