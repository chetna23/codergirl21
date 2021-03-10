console.log(7 > 5 && 5 > 3);
console.log(7 > 5 && 2 > 3);
console.log(2 > 3 && 'dog' === 'cat');

console.log(7 > 5 || 5 > 3);
console.log(7 > 5 || 2 > 3);
console.log(2 > 3 || 'dog' === 'cat');

console.log(! true);
console.log(! false);

console.log( !(5 > 7) );
console.log( !('dog' === 'cat') );

// JavaScript will always apply the logical NOT operator
//, !, first. Next, it applies the arithmetic operators, 
//followed by the comparison operators. 
//The logical AND and OR are applied last.

// ((x * 5) >= 10) && ((y - 6) <= 20)

//5*3 > 10 && 4 + 6 === 11

//4 < 3 || 2 < 3