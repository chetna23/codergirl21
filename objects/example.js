//     let person = {
//         name: "Tintin",
//         age: 22,
//         id: 1234,
//         country: "Belgium",
//         email: "tintinthereporter@gmail.com",
//         hobbies: ["solving mysteries", "playing with Snowy", "meeting Captain Haddock"],
//         signature: function() {
//             return `id: ${this.id} name: ${this.name}`;
//         }
//     }
// console.log(person.name);
// console.log(person["age"]);
// console.log(person.signature())

// person["sex"] = 'M';


// console.log(person);

// const array1 = [1, 2, 3];

// const firstElement = array1.shift();

// console.log(array1);
//expected output: Array [2, 3]

// console.log(firstElement);
//expected output: 1

let arr1 = [1];
let arr2 = [2, 3, 4];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
