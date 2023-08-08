"use strict";
// Tính đa hình Polymorphism
// Lớp cha (Base class)
class Animals {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
// Lớp con (Derived class) kế thừa từ lớp Animal
class Dogs extends Animals {
    constructor(newName) {
        super(newName, "chó đen");
    }
    // Đa hình - triển khai lại phương thức makeSound() cho chó
    makeSound() {
        console.log(`${this.name} said : chó đen nè.`);
    }
}
class Cat extends Animals {
    constructor(name) {
        super(name, "mèo moon");
    }
    // Đa hình - triển khai lại phương thức makeSound() cho mèo
    makeSound() {
        console.log(`${this.name} said : mèo moon nè.`);
    }
}
// Tạo các đối tượng từ các lớp con và gọi phương thức makeSound() của lớp cha
const dog = new Dogs("DOG");
const cat = new Cat("CAT");
console.log(dog);
console.log(cat);
dog.makeSound(); // Output: Buddy barks.
cat.makeSound(); // Output: Whiskers meows.
