"use strict";
class Vehicle {
    constructor(name) {
        this.name = name;
    }
    go() {
        console.log("Im driving");
    }
}
// const Vinfast = new Vehicle("vinfast"); // ERROR: => ko thể tạo 1 instance từ 1 abstract class
class Vinfast extends Vehicle {
    constructor(name) {
        super(name);
    }
    flying() {
        // nếu không khai báo lại abstract method sẽ báo lỗi biên dịch
        return "Đây là abstract kế thừa ";
    }
}
const myCar = new Vinfast("myCar");
console.log(myCar.flying()); //  Đây là abstract kế thừa
// ** example abstract class
class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class Square extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    calculate() {
        return this.width * this.height;
    }
}
const square = new Square(100, 200);
console.log(square.calculate());
// ** example 2 abstract class
class Shape2 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class Square2 extends Shape2 {
    constructor(name, width, height) {
        super(width, height);
        this.name = name;
    }
    // Triển khai lại phương thức calculate() cho hình chữ nhật
    calculate() {
        return this.width * this.height;
    }
}
class Rectangle2 extends Shape2 {
    constructor(name, width, height) {
        super(width, height);
        this.name = name;
    }
    // Triển khai lại phương thức calculate() cho hình chữ nhật
    calculate() {
        return (this.width + this.height) / 2;
    }
}
const arrayShape = [
    new Rectangle2("square", 10, 20),
    new Square2("rectangle", 5, 5),
    // arrayShape là một mảng (array) chứa các phần tử thuộc kiểu Shape2.
];
console.log("Mảng các hình Shape", arrayShape); // Mảng các hình Shape (2) [Rectangle2, Square2]
function ab(a, b) {
    const x = a;
    const y = b;
}
const uuuu = ab(10, 2);
