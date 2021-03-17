let shuttleCrews = [
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
 ];
 
 console.log(shuttleCrews[0][2]);
 console.log(shuttleCrews[1][1]);
 console.log(shuttleCrews[2][1]);

 let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// Add a new crew array to the end of shuttleCrews
shuttleCrews.push(newCrew);
console.log(shuttleCrews[3][2]);

// Reverse the order of the crew at index 1
shuttleCrews[1].reverse();
console.log(shuttleCrews[1]);

let school = [
    ["science", "computer", "art"],
    ["Jones", "Willoughby", "Rhodes"]
 ];
 //How would you add "dance" to the array at school[0]?
 school[0].push('dance');
 school[1].push('Holmes');

 console.log(school);
 //How would you add "Holmes" to the array at school[1]?