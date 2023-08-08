"use strict";
// Parent
class Animal {
    constructor(colorAnimal, type11, type22) {
        this.color = colorAnimal;
        this.type1 = type11; //this.type1 tức là Animal.type1
        this.type2 = type22; // gán value nhập vào cho biến type2
    }
    // "bắt cầu" mới lấy type1 ra ngoài dùng được vì private
    getType1() {
        return this.type1;
    }
    getType2() {
        return this.type2;
    }
    sound() {
        return "Đây là tiếng kêu của các loài động vật";
    }
}
const animal = new Animal("", "", "");
console.log("Animal Parent ==>", animal); // Animal parent ==> Animal {color : "", type1: "", type2: ""}
console.log("Animal parent sound =>>", animal.sound()); // Animal parent sound => Đây là tiếng kêu của các loài động vật
// console.log("Animal parent ==>", animal.type1); // ERROR lỗi ko lấy được type1 vì có private !!!!!
//Child
class Dog extends Animal {
    // phát triển thêm property cho new instance
    constructor(color, name, gender) {
        // nhận value color
        super(color, "ĐỘNG VẬT ĂN CHAY", "ĐỘNG VẬT ĂN CHAY"); // super => kế thừa tất cả các property and method của thằng Cha
        // 1. super(color,..) =>  chỉ kế thừa " kiểu dữ liệu của color" thôi
        this.name = name;
        this.gender = gender;
        super.sound();
        // 2. super => kết thừa phương thức
    }
    introduce() {
        return `This is ${this.name}. I am a ${this.gender} dog.`;
    }
}
const husky = new Dog("Red", "Husky", "Boy"); // tạo 1 đối tượng là con  chó husky truyền vào tên và giới tính
console.log("Dog Child =>>", husky);
//Dog children =>> Dog { color: 'Red', type1: 'ĐỘNG VẬT ĂN CHAY', type2: 'ĐỘNG VẬT ĂN CHAY', name: 'Husky', gender: 'Boy'}
console.log("Dog Child color =>>", husky.color); // Dog children =>> Red
console.log("Dog Child gender =>>", husky.introduce()); // Dog children gender =>> This is Husky. I am a Boy dog.
console.log("Dog Child sound =>>", husky.sound()); // Dog Child sound =>> Đây là tiếng kêu của các loài động vật   (phần này ở thằng cha)
