// Creating a class of car using typescipt
// Implementing the Interface
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make,
            this.model = model,
            this.year = year;
    }
    Car.prototype.start = function () {
        console.log('Car engine started');
    };
    return Car;
}());
// creating the car instance
var myCar = new Car('Toyota', 'Corolla', 2020);
console.log(myCar.start());
