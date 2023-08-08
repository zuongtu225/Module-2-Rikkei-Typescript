"use strict";
class Department {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    accounting() {
        return "haahs";
    } // bắt buộc phải khai báo lại
}
class Sale extends Department {
    constructor(name, price, year) {
        super(name, price);
        this.year = year;
    }
}
const saleCar = new Sale("MC Laren 720s", 1000, 2024);
console.log(saleCar);
//example -  Interface 1
class Shapes {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shapes {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getArea() {
        return this.radius * 2 * 3.14;
    }
    display() {
        return this.color;
    }
}
class Rectangle extends Shapes {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    display() {
        return this.color;
    }
}
class Main {
    main() {
        const circle = new Circle("Black", 100);
        const rectangle = new Rectangle("Pink", 100, 2);
        console.log("Diện tích hình tròn => :", circle.getArea());
        console.log("Diện tích hình chữ nhật => :", rectangle.getArea());
    }
}
const main = new Main();
main.main();
//example -  Interface 2
