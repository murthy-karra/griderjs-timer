class Car {
  constructor(make, model, year) {
    this.make = make;
    this.year = year;
    this.model = model;
  }

  get age() {
    return 2023 - this.year;
  }

  set age(value) {
    this.year = 2023 - value;
  }
}
const car1 = new Car('Ford', 'Explorer', 1923);

console.log(car1.age);
car1.age = 200;
console.log(car1.year);
car1.age--;
console.log(car1.year);
