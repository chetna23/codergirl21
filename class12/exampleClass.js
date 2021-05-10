class Car {
    constructor(make, model, year, color, mpg){
       this.make = make;
       this.model = model;
       this.year = year;
       this.color = color;
       this.mpg = mpg;
    }
 }

 let myCar = new Car('Tesla', 'Model S', 2019);
 console.log(myCar);

 class Item {
    constructor(params) {
        
    }
    constructor(name, priceinDollars = 5) {
        this.name = name;
        this.priceinDollars = priceinDollars;
    }
}

let paint = new Item('watercolor');