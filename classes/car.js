class Car {
    constructor(make, model, year, color, mpg){
       this.make = make;
       this.model = model;
       this.year = year;
       this.color = color;
       this.mpg = mpg;
    }
 }

 let myCar = new Car('Chevy', 'Astro', 1985, 'gray', 20);
 //what is output by 
 console.log(typeof myCar.year)

 let myCar1 = new Car('Tesla', 'Model S', 2019)
console.log(myCar1)