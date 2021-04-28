function launchOutput(entry) {
    let output = "";
    
    if (entry%2 === 0){
        output += "Launch";
    } 
    if (entry%3 === 0){
        output += "Code";
    } 
    if (entry%5 === 0){
        if(output === "") {
            output += "Rocks";
        }
        else {
            output += " Rocks";
        }
    }

    if (entry%2 !== 0 && entry%3 !== 0 && entry%5 !== 0){
        output += "Rutabagas! That doesn't work.";
    }
    else {
        output+= "!";
    }

    if (output === "Launch Rocks!"){
        output += "(Crash!!!)";
    }
    
    return output;
}

module.exports = launchOutput;