
// Creating a class of car using typescipt

// Definig the Interface

interface Vehicle {
    make: string;
    model: string;
    year: number;
    start: () => void;
}

// Implementing the Interface
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
    

    constructor(make:string, model:string, year:number) {
        this.make = make,
        this.model = model,
        this.year = year;
    }


    start() {
        console.log('Car engine started');
    }
}

// creating the car instance
let myCar = new Car('Toyota', 'Corolla', 2020);

console.log(myCar.start());