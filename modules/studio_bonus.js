//Objects & Math Studio Bonus Mission

//5) Assume that it takes 9.5 kg of rocket fuel to lift 1 kg of mass into low-earth orbit (LEO).

//This exercise uses a pre-selected crew. Feel free to change the crew members, or copy-paste your random selection code.

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
    
  let crew = [candidateB,candidateD,candidateF];
    
  // Write a function that returns the total mass of the selected crew members.
  function crewMass(arr){
      let mass = 0;
      for (i=0;i<arr.length;i++){
        mass += arr[i].mass;
      }
      return mass;
  }
    
  // The mass of the uncrewed rocket plus the food and other supplies is 75,000 kg. Combine the rocket and crew masses, then calculate and store the amount of fuel required to reach LEO.
  // Add an extra 200 kg of fuel for each dog or cat on board, but only an extra 100 kg for the other species. Round the final amount of fuel UP to the nearest integer.
  function fuelRequired(crewArray){
      let massOfCrew = crewMass(crewArray);
      let fuel = (75000+massOfCrew)*9.5;
      for (i=0; i<crewArray.length; i++){
          if (crewArray[i].species === 'dog' || crewArray[i].species === 'cat'){
            fuel += 200;
          } else {
            fuel += 100;
          }
      }
      return Math.ceil(fuel);
  }
    
  // Print “The mission has a launch mass of ____ kg and requires ____ kg of fuel.”
  console.log(`The mission has a launch mass of ${75000+crewMass(crew)} kg and requires ${fuelRequired(crew)} kg of fuel.`);