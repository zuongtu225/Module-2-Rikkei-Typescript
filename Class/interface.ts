// interface là bộ khung mẫu chứa các thuộc tính và phương thức  để class có thể implement [ thừa kế]
// Không thể khởi tạo 1 đối tượng từ interface
// interface có thể extends (kế thừa) từ nhiều interface
interface Boss {
  name: string;
  price: number;
  accounting(): void;
}
class Department implements Boss {
  // Property 'name' in type 'Department' is not assignable to the same property in base type 'Accounting'.
  // Property and Method kế thừa trong class phải giống Property and Method ở interface.
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  accounting(): string {
    return "haahs";
  } // bắt buộc phải khai báo lại
}
class Sale extends Department {
  year: number;
  constructor(name: string, price: number, year: number) {
    super(name, price);
    this.year = year;
  }
}

const saleCar = new Sale("MC Laren 720s", 1000, 2024);
console.log(saleCar);

//example -  Interface 1
abstract class Shapes {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  abstract getArea(): void;
  abstract display(): void;
}
class Circle extends Shapes {
  radius: number;
  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }
  getArea(): number {
    return this.radius * 2 * 3.14;
  }
  display(): string {
    return this.color;
  }
}
class Rectangle extends Shapes {
  width: number;
  height: number;
  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
  display(): string {
    return this.color;
  }
}
class Main {
  main(): void {
    const circle = new Circle("Black", 100);
    const rectangle = new Rectangle("Pink", 100, 2);
    console.log("Diện tích hình tròn => :", circle.getArea());
    console.log("Diện tích hình chữ nhật => :", rectangle.getArea());
  }
}
const main = new Main();
main.main();

//example -  Interface 2
