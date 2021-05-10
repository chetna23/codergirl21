//Declare a class called CrewCandidate with a constructor 
// that takes three parameters—name, mass, and scores. 
// Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    
    addScore(score) {
        this.scores.push(score);
    }

    addScores(scoresToAdd) {
        this.scores.push(...scoresToAdd);
    }

    average() {
        // return (this.scores.reduce((accumulator, currentValue) => accumulator + currentValue))/this.scores.length;
        return Math.round(((this.scores.reduce((accumulator, currentValue) => accumulator + currentValue))/this.scores.length)*10)/10;
    }

    status() {
        let average = this.average();
        let status;
        if(average >= 90) {
            status = 'Accepted';
        } else if(average >= 80) {
            status = 'Reserve';
        } else if(average >= 70) {
            status = 'Probationary';
        } else status = 'Rejected';
        return status;
    }

    printStatus() {
        return `${this.name} earned an average test score of ${this.average()} and has a 
        status of ${this.status()}.`
    }
}

let bubba = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merry = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let glad = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);
let sad = new CrewCandidate('Sad Frog', 1, [45, 58, 32]);

console.log(bubba);
console.log(merry);
console.log(glad);

bubba.addScore(83);
bubba.addScores([100, 100]);
console.log(bubba.scores);
//Add methods for adding scores, averaging scores and 
//determining candidate status as described in the 
//studio activity.
console.log(bubba.average());
console.log(merry.average());
console.log(glad.average());

console.log(bubba.printStatus());
console.log(merry.printStatus());
console.log(glad.printStatus());
console.log(sad.printStatus());

//Part 4 - Use the methods to boost Glad Gator’s status 
//to Reserve or higher. How many tests will it take to 
//reach Reserve status? How many to reach Accepted? 
// Remember, scores cannot exceed 100%.
let scoresAdded = 0;

while(glad.average() < 80){
    glad.addScore(85);
    scoresAdded++;
}
console.log('new average', glad.average());
console.log('scored added:', scoresAdded);