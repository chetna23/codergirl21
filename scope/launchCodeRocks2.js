function launchOutput1(entry) {
    output = "";
    if (entry%2 === 0){
        output += "Launch";
    } if (entry%3 === 0){
        output += "Code";
    } if (entry%5 === 0){
        if(output !== "") {
            output += " "
        }
        output += "Rocks";
    }

    if (entry%2 !== 0 && entry%3 !== 0 && entry%5 !== 0){
        output += "Rutabagas! That doesn't work.";
    } else output += "!"

    return output;
}

module.exports = launchOutput1;