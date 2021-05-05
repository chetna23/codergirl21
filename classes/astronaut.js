class Astronaut {
    constructor(name, age, mass){
       this.name = name;
       this.age = age;
       this.mass = mass;
    }
 }
 
 let fox = new Astronaut('Fox', 7, 12);
 let hippo = new Astronaut('Hippo', 25, 1500);
 
 console.log(typeof hippo, typeof fox);
 
 console.log(hippo, fox);

 //missing values
 let tortoise = new Astronaut('Speedy', 120);

console.log(tortoise.name, tortoise.age, tortoise.mass);

//can add default values.
