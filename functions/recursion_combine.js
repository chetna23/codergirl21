function combineEntries(arrayName){
    if (arrayName.length <= 1){
       return arrayName[0];
    } else {
       return arrayName[0]+combineEntries(arrayName.slice(1));
    }
 }

 console.log(combineEntries(['L', 'C', '1', '0', '1']));

//  console.log(combineEntries([1, 2, 3, 4]));


// What if we wanted to take a number (n) and add it to all of the positive integers below it? 
// For example, if n = 5, the function returns 5 + 4 + 3 + 2 + 1 = 15.
// Consider the code sample below, which declares the decreasingSum function.

function decreasingSum(integer) {
    if (integer === 1){
       return integer;
    } else {
        return integer + decreasingSum(integer-1);
    }
 }

 console.log(decreasingSum(4));