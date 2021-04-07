// Define a function with one parameter, which will be a string. The function must do the following:
// Have a clear, descriptive name like funPhrase.
// Retrieve only the last character from strings with lengths of 3 or less.
// Retrieve only the first 3 characters from strings with lengths larger than 3.
// Use a template literal to return the phrase We put the '___' in '___'. Fill the first blank with the modified string, and fill the second blank with the original string.
// Build your function at repl.it.
// Now test your function:
// Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
// Call your function and print the returned phrase.

function funPhrase(phrase) {
    let val;
    if(phrase.length <= 3) {
        val = phrase[phrase.length-1]
    } else val = phrase.slice(0,3); 
    return `We put the ${val} in the ${phrase}`;
}
console.log(funPhrase('microwave'));
console.log(funPhrase('you'));
console.log(funPhrase('Functions rock!'));

// The area of a rectangle is equal to its length x width.
// Define a function with the required parameters to calculate the area of a rectangle.
// The function should return the area, NOT print it.
// Call your area function by passing in two arguments - the length and width.
// If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.
// Use a template literal to print, "The area is ____ cm^2."

function area(length, breadth) {
    
    if (breadth === undefined) return length*length;
    else return length * breadth;
}

// length = 2, width = 4 (area = 8)
// length = 14, width = 7 (area = 98)
// length = 20 (area = 400)

console.log(`The area is ${area(2, 4)} cm^2.`);
console.log(`The area is ${area(14, 7)} cm^2.`);
console.log(`The area is ${area(20)} cm^2.`);