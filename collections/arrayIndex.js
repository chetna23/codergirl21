let programmingLanguages = [
    "JavaScript", // index 0
    "Python",     // index 1
    "Java",       // index 2
    "C#"          // index 3
 ];
 console.log(programmingLanguages[0]);
 console.log(programmingLanguages[3]);
 
 // What will happen when index 4 is requested?
 console.log(programmingLanguages[4]);

console.log(programmingLanguages[-1]);
console.log(programmingLanguages[100]);

let javaScriptFrameworks = ["React", "Angular", "Ember"];
console.log(javaScriptFrameworks);

// Set the value of index 2 to be "Vue"
javaScriptFrameworks[2] = "Vue";

// Notice the value at index 2 is now "Vue"
console.log(javaScriptFrameworks);