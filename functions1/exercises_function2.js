function makeLine(size) {
    let display = '';
    for(let i = 0; i < size; i++) {
        display += '#';
    }
    return display;
}

// console.log(makeLine(5));

// function makeDownwardStairs(height) {
// let display = '';
//  for( let i = 1; i <= height; i++) {
//     display += makeLine(i);
//     if( i < height) {
//         display += '\n';
//     }
//  }
//  return display;
// }

// console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let display = '';
    for (let i = 1; i <= numSpaces; i++) {
        display += ' ';
    }
    for (let i = 1; i <= numChars; i++) {
        display += '#';
    }
    for (let i = 1; i <= numSpaces; i++) {
        display += ' ';
    }
    return display;
}

// console.log(makeSpaceLine(4, 5));

function makeIsoscelesTriangle(height) {
    let display = '';
    for (let i = 0; i < height; i++) {
        display += makeSpaceLine(height - i -1, 2 * i + 1);
        if(i < height -1) {
            display += '\n';
        }
    }
    return display;
}

// console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let display = '';
    display += makeIsoscelesTriangle(height);
    display += '\n' + makeIsoscelesTriangle(height).split('\n').reverse().join('\n');
    return display;
}

// console.log(makeDiamond(5));

// //Bonus
function makeLine(size = 5) {
    console.log('inital value of alpha is', alpha);
    // if (!alpha) {
    //     alpha = '#';
    // }
    let display = '';
    for(let i = 0; i < size; i++) {
        display += '#';
    }
    return display;
}

console.log(makeLine());