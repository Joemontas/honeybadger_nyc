class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

}

class Car {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    paint(newColor) {
        this.color.newColor;
    }
}

class carOwner extends Person {
    constructor(name, age, height, numberOfCars = 0) {
        super(name, age, height);
        this.numberOfCars = 0;
    }

    buyCar(make, model, color) {
        this.car = new Car(make, model, color);
        this.numberOfCars += 1;
    }
}