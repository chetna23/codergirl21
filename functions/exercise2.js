// First, steal some fuel from the shuttle:
// Define an anonymous function and set it equal ter a variable with a normal, non-suspicious name. The function needs one parameter, which will be the fuel level on the shuttle.
// Ye must siphon off fuel without alerting the TAs. Inside yer function, ye want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.
// Once ye figure out how much fuel ter pump out, return that value.
// Decide where to best place yer function call to gather our new fuel.
// Be sure to test yer function! Those bilge rat TAs will notice if they lose too much fuel.

// Next, liberate some of that glorious cargo.
// Define another anonymous function with an array as a parametarrrrr, and set it equal to another innocent variable.
// Ye need to swipe two items from the cargo hold. Choose well. Stealing water ain't gonna get us rich. Put the swag into a new array and return it from the function.
// The cargo hold has better security than the fuel tanks. It counts how many things are in storage. Ye need to replace what ye steal with something worthless. The count MUST stay the same, or ye'll get caught and thrown into the LaunchCode brig.
// Don't get hasty, swabbie! Remember to test yer function.
// Finally, ye need to print a receipt for the accountant. Don't laugh! That genius knows MATH and saves us more gold than ye can imagine.
// Define a function called irs that takes fuelLevel and cargoHold as parametarrrrrs.
// Call yer anonymous fuel and cargo functions from within irs.
// Use a template literal to return, "Raided _____ kg of fuel from the tanks, and stole ____ and ____ from the cargo hold."

function checkFuel(level) {
    if (level > 100000){
       return 'green';
    } else if (level > 50000){
       return 'yellow';
    } else {
       return 'red';
    }
 }
 
 function holdStatus(arr){
    if (arr.length < 7) {
       return `Spaces available: ${7 - arr.length}`;
    } else if (arr.length > 7){
       return `Over capacity by ${arr.length - 7} items.`
    } else {
       return "Full";
    }
 }
 
 let fuelLevel = 200000;
 let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];
 
 console.log("Fuel level: "+ checkFuel(fuelLevel));
 console.log("Hold status: "+ holdStatus(cargoHold));

 let sumFuel = function(level) {
    if (level > 100000){
        return level - 100001;
     } else if (level > 50000){
        return level - 50001;
     } else {
        return level
     }
 }
 console.log(sumFuel(2400));

 let sumCargo = function(cargoArray) {
    console.log(cargoArray);
     let modifiedArray = [];
     let numberItemsSwapped = 0;
        for(let i=0; i < cargoArray.length; i++) {
            if(cargoArray[i] !== 'water') {
                if(numberItemsSwapped >= 2) break;
                modifiedArray.push(cargoArray[i]);
                numberItemsSwapped++;
            }
     }
     return modifiedArray;
 }

 console.log(sumCargo(cargoHold));

 function irs(fuelLevel, cargoHold) {
    //  let sum = sumFuel(fuelLevel);
     let modifiedArray = sumCargo(cargoHold);
     console.log(`Raided ${sumFuel(fuelLevel)} kg of fuel from the tanks, and stole ${modifiedArray[0]} and ${modifiedArray[1]} from the cargo hold.`);
 }

 irs(fuelLevel, cargoHold);

 let deckMops = function(array) {
    let swagArr = [];
    let lootList = ['dilithium', 'gold', 'AE-35 unit', 'Legos', 'TI-89 calculator'];
    for (let i = 0; i < lootList.length; i++) {
      let lootIndex = array.indexOf(lootList[i]);
      if (lootIndex >= 0) {
        swagArr.push(array[lootIndex]);
        array[lootIndex] = 'junk';
      }
    }
    return swagArr;
  };
