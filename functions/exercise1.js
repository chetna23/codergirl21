// 11.10.1.1. Complete the Map
// Not THAT kinda map, ye rat! Fold that up and do the following:

// Create an anonymous function and set it equal to a variable. Yer function should:
// If passed a number, return the tripled value.
// If passed a string, return the string "ARRR!"
// If NOT passed a number or string, return the data unchanged.
// Build yer function here, and be sure to test it.
// Add to yer code! Use yer function and the map method to change the array ['Elocution', 21, 'Clean teeth', 100] as follows:
// Triple all the numbers.
// Replace the strings with "ARRR!"
// Print the new array to confirm yer work.

let transform = function(original) {
    if(typeof(original) === 'number') {
        return original*3;
    } else if(typeof(original) === 'string') {
        return 'ARRR!';
    } else return original;
}

console.log(transform(2));

console.log(transform('ABcd'));

let orgArray = ['Elocution', 21, 'Clean teeth', 100];
let modifiedArr = orgArray.map(transform);
console.log(modifiedArr);
