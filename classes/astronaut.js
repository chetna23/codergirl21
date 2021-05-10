class Astronaut {
    constructor(mass = 50, name, age){
       this.name = name;
       this.age = age;
       this.mass = mass;
    }
 }
 
 let fox = new Astronaut(12, 'Fox', 7);
 let hippo = new Astronaut(1500, 'Hippo', 25);
 
 console.log(typeof hippo, typeof fox);
 
 console.log(hippo, fox);

 //missing values
 let tortoise = new Astronaut('Speedy', age=120);

console.log(tortoise);

//can add default values.
