let lang = 'JavaScript';

console.log(lang.slice(0,1) + lang.slice(4, 5));

//Without using slice(), use method chaining to accomplish the same thing.

console.log(`The abbreviation for JavaScript is ${lang[0]}${lang[4]}`);

//Just for fun, try chaining 3 or more methods together, and then print the result.