function divide(num, den) {
    if(den === 0) {
        throw Error('Attempted to divide by zero.');
    } else {
        return num/den;
    }
}
console.log(divide(10,2));
console.log(divide(10,5));
try{
    console.log(divide(10,0));
} catch(e) {
    console.log('Caught Error', e)
}

