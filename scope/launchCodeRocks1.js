function launchOutput(num){
    let returnString = '';
    if(num % 2 === 0) {
        returnString += 'Launch';
    } if(num % 3 === 0) {
        returnString += 'Code';
    } if(num % 5 === 0) {
        returnString += (returnString === '' ? 'Rocks' : ' Rocks');
    } else if (num % 2 !== 0 && num % 3 !== 0 && num & 5 !== 0) {
        return 'Rutabagas! That doesn\'t work.';
    }
    returnString += '!';
    return returnString;
}
module.exports = launchOutput;