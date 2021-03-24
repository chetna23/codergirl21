
// Remove the first three characters from a string and add them to the end. Ex: 'LaunchCode' becomes 'nchCodeLau'. Use a template literal to print the original and modified string in a descriptive phrase.
let person = 'Arianna';
// let modified = person.slice(3,7) + person.slice(0,3);
let modified = person.slice(3,person.length) + person.slice(0,3);
console.log(`name is ${person} and modified name is ${modified}`);

// Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
// Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
// input = require('readline-sync');

// let num = input.question('how many letters do we replace in the name? ');
// let errorMessage;
// if(num > person.length || num < 0) {
//     num = 3;
//     errorMessage = '(defaulted to 3.) '
// }
// modified = person.slice(num,person.length) + person.slice(0,num);
// if(errorMessage) {
//     console.log(`name is ${person} and modified name is ${modified}${errorMessage}`);
// } else {
//     console.log(`name is ${person} and modified name is ${modified}`);
// }

// The split and join methods convert back and forth between strings and arrays. 
// Use delimiters as reference points to split a string into an array, 
// then modify the array and convert it back to a printable string.

// For a given string, use the includes method to check to see if the words are separated by 
//commas (,), semicolons (;) or just spaces.
// let demo = 'Gym,Art,Television,Walks';
// let demo = 'Gym;Art;Television;Walks';
// let demo = 'Gym Art Television Walks';
// let demo = 'Gym, Art, Television, Walks';
let demo = 'up,to,code,fun'
// If the string uses commas to separate the words, split it into an array, 
// reverse the entries, and then join the array into a new comma separated string.
let demoArray;
let demoModified;

if(demo.includes(', ')) {
    demoArray = demo.split(', ');
    demoModified = demoArray.reverse().join(',');
}
 else if(demo.includes(',')) {
    demoArray = demo.split(',');
    console.log(demoArray);
    demoModified = demoArray.reverse();
    console.log(demoModified.join(','));
}
// If the string uses semicolons to separate the words, split it into an array, 
// alphabetize the entries, and then join the array into a new comma separated string.

else if(demo.includes(';')) {
    demoArray = demo.split(';');
    demoModified = demoArray.sort().join(',')
}

// If the string uses spaces to separate the words, split it into an array, 
// reverse alphabetize the entries, and then join the array into a new space separated string.
else if(demo.includes(' ')) {
    demoArray = demo.split(' ');
    demoModified = demoArray.sort().reverse().join(' ');
}
console.log(demoModified);
// Consider: What if the string uses 'comma spaces' (, ) to separate the list? 
// Modify your code to produce the same result as part "b", making sure that the extra spaces are 
// NOT part of the final string.