function makeLine(size) {
    let display = '';
    for(let i = 0; i < size; i++) {
        display += '#';
    }
    return display;
}

// console.log(makeLine(5));

// function makeSquare(size) {
//     let display = '';
//     for(let i = 0; i < size; i++) {
        
//         display += makeLine(size);
//         if( i < size -1) {
//             display += '\n';
//         }
//     }
//     return display;
// }

// console.log(makeSquare(5));

function makeRectangle(length, breadth) {
    let display = '';
    for(let i = 0; i < length; i++) {
        display += makeLine(breadth);
        if( i < length -1) {
            display += '\n';
        }
    }
    return display;
}

// console.log(makeRectangle(5,3));

function makeSquare(size) {
    return makeRectangle(size, size);
}

console.log(makeSquare(5));