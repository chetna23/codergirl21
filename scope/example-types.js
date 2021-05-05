//theme is halloween
//something that's alphanumeric and symbols is type string
let name = 'Wonderwoman';
console.log(typeof(name));

//only two states - on or off
let trickOrTreating = false;
console.log('typeof(trickOrTreating) is' , typeof(trickOrTreating));

// //numbers are integers and decimals. used to perform math operations
let numberOfIceCreamFlavors = 99;
console.log(typeof(numberOfIceCreamFlavors));

let scoreInExam = 99.5;
console.log(typeof(scoreInExam));

// //undefined is something that has been created but isn't given a value.
let num
console.log(typeof(num));

// //null has to be set intentionally, signifies empty or nothing
let mealIdea = 'sandwich'
mealIdea = null;
console.log(typeof(mealIdea));

// //objects
let student = {
    name: 'Robinhood',
    id: 10,
    active: true,
    score: null
}
console.log(typeof(student));

// //array
let hobbies = ['eat', 'sleep', 'watch tv', 'read'];
console.log(typeof(hobbies));
console.log(Array.isArray(hobbies));