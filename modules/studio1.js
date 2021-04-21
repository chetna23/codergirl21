// Code your orbitCircumference function here:
function orbitCircumference(radius = 2000) {
    return Math.round(2 * Math.PI * radius);
}


// Code your missionDuration function here:
function missionDuration(numOrbits, radius = 2000, speed = 28000) {
    let time = numOrbits*orbitCircumference(radius)/speed;
    return Math.round(time*100)/100
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
  }

console.log(`The mission will travel ${orbitCircumference()} km around the planet, and it will take ${missionDuration(5)} hours to complete.`);

// Code your oxygenExpended function here:
function oxygenExpended(astronaut, orbRad, speed){
  let duration = missionDuration(3, orbRad, speed);
  let oxUsed = Math.round(astronaut.o2Used(duration)*1000)/1000;
  return `${astronaut.name} will perform the spacewalk, which will last ${duration} hours and require ${oxUsed} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
    'name':'Gordon Shumway',
    'species':'alf',
    'mass':90,
    'o2Used':function(hrs){return 0.035*hrs},
    'astronautID':414
  };
  let candidateB = {
    'name':'Lassie',
    'species':'dog',
    'mass':19.1,
    'o2Used':function(hrs){return 0.030*hrs},
    'astronautID':503
  };
  let candidateC = {
    'name':'Jonsey',
    'species':'cat',
    'mass':3.6,
    'o2Used':function(hrs){return 0.022*hrs},
    'astronautID':796
  };
  let candidateD = {
    'name':'Paddington',
    'species':'bear',
    'mass':31.8,
    'o2Used':function(hrs){return 0.047*hrs},
    'astronautID':291
  };
  let candidateE = {
    'name':'Pete',
    'species':'tortoise',
    'mass':417,
    'o2Used':function(hrs){return 0.010*hrs},
    'astronautID':599
  };
  let candidateF = {
    'name':'Hugs',
    'species':'ball python',
    'mass':2.3,
    'o2Used':function(hrs){return 0.018*hrs},
    'astronautID':890
  };
  
  let crew = [candidateA,candidateC,candidateE];

  let walker = crew[Math.floor(Math.random()*crew.length)];

  // Use the animal’s o2Used method to calculate how much oxygen it consumes during the spacewalk. Round the answer to 3 decimal places.
  console.log(oxygenExpended(walker));
  