//Objects & Math Studio Exercises #1 & 2

// Code your orbitCircumference function here:
function orbitCircumference(radius){
    return Math.round(2*Math.PI*radius);
  }
  
  // Code your missionDuration function here:
  function missionDuration(numOrbits, orbRad=2000, speed=28000){
    let time = (numOrbits*orbitCircumference(orbRad))/speed;
    return Math.round(time*100)/100;
  }
  
  // Copy/paste your selectRandomEntry function here:
  function selectRandomEntry(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
  }
  
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
  
  //Randomly select one crew member to perform a spacewalk.
  // let walker = crew[Math.floor(Math.random()*crew.length)];
    
  //Bonus code: Uncomment to activate.
  walker = crew[0];
  for (i=1; i<crew.length; i++){
    if (crew[i].o2Used < walker.o2Used){
      walker = crew[i];
    }
  }
  
  // Use the animal’s o2Used method to calculate how much oxygen it consumes during the spacewalk. Round the answer to 3 decimal places.
  console.log(oxygenExpended(walker));
  
  // BONUS MISSION: Instead of randomly selecting a crew member for the spacewalk, have your program select the animal with the smallest oxygen consumption rate.
    
    