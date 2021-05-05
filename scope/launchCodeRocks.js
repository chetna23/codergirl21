function launchOutput(num) {
    let returnString = '';
    if(num % 2 === 0) {
        returnString += 'Launch'
    } if(num % 3 === 0) {
        returnString += 'Code'
    } if(num % 5 === 0) {
        if(returnString === '') {
            returnString += 'Rocks'
        }
        else returnString += ' Rocks'
    } 
    if(num % 5 !== 0 && num % 2 !== 0 && num % 3 !== 0){
        return 'Rutabagas! That doesn\'t work.'
    }
    return returnString + '!';
}

module.exports = launchOutput;