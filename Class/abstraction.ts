abstract class Vehicle {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  private go() {
    console.log("Im driving");
  }
  abstract flying(): void;
  // abstract method được khai báo nhưng ko có logic the same Strategy
  //abstract method nó phải được khai báo lại ở thằng con chứ không sẽ lỗi biên dịch
}
// const Vinfast = new Vehicle("vinfast"); // ERROR: => ko thể tạo 1 instance từ 1 abstract class
class Vinfast extends Vehicle {
  constructor(name: string) {
    super(name);
  }
  flying(): string {
    // nếu không khai báo lại abstract method sẽ báo lỗi biên dịch
    return "Đây là abstract kế thừa ";
  }
}
const myCar = new Vinfast("myCar");
console.log(myCar.flying()); //  Đây là abstract kế thừa

// ** example abstract class
abstract class Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  abstract calculate(): number;
}

class Square extends Shape {
  constructor(width: number, height: number) {
    super(width, height);
  }
  calculate(): number {
    return this.width * this.height;
  }
}

const square = new Square(100, 200);
console.log(square.calculate());

// ** example 2 abstract class
abstract class Shape2 {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  abstract calculate(): number;
}
class Square2 extends Shape2 {
  name: string;
  constructor(name: string, width: number, height: number) {
    super(width, height);
    this.name = name;
  }
  // Triển khai lại phương thức calculate() cho hình chữ nhật
  calculate(): number {
    return this.width * this.height;
  }
}
class Rectangle2 extends Shape2 {
  name: string;
  constructor(name: string, width: number, height: number) {
    super(width, height);
    this.name = name;
  }
  // Triển khai lại phương thức calculate() cho hình chữ nhật
  calculate(): number {
    return (this.width + this.height) / 2;
  }
}
const arrayShape: Shape2[] = [
  new Rectangle2("square", 10, 20),
  new Square2("rectangle", 5, 5),
  // arrayShape là một mảng (array) chứa các phần tử thuộc kiểu Shape2.
];

console.log("Mảng các hình Shape", arrayShape); // Mảng các hình Shape (2) [Rectangle2, Square2]

function ab(a: number, b: number) {
  const x: number = a;
  const y: number = b;
}
const uuuu = ab(10, 2);
