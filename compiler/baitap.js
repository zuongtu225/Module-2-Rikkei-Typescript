"use strict";
// Bài 1
class Studentt {
    // friends: number[] => friends: Student[] cấu trúc thuộc tính của Student
    constructor(name, id = Date.now(), friends = []) {
        this.id = id;
        this.name = name;
        this.friends = friends;
    }
    addFriend(newFriend) {
        this.friends.push(newFriend);
    }
    deleteFriend(id) {
        this.friends = this.friends.filter((friend) => friend.id !== id);
    }
}
let userOne = new Studentt("User One 2222");
let userTwo = new Studentt("User Two");
let userThree = new Studentt("User 3");
let userFor = new Studentt("User 4");
let userFive = new Studentt("User 5", 9);
userOne.addFriend(userTwo);
userOne.addFriend(userThree);
userOne.addFriend(userFor);
userOne.addFriend(userFive);
userOne.deleteFriend(9); // xóa thằng có id là 9
console.log("userOne", userOne);
//bai 4
class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    perimeter() {
        const C = 2 * 3.14 * this.radius;
        return C;
    }
    acreage() {
        const C = (3.14 * this.radius) ** 2;
        return C;
    }
    inputData() {
        let radio = prompt("Nhap ban kinh hinh tron inputData");
        let color = prompt("Nhap màu sắc inputData");
        if (radio && color) {
            this.radius = Number(radio);
            this.color = color;
            return this.radius + " " + this.color;
        }
    }
}
const circle = new Circle(21, "red");
// console.log(circle.inputData());
//Exercise 03
class QuadraticEquation {
    //   Phương thức khởi tạo với 3 tham số để khởi tạo các giá trị cho a, b và c.
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminant() {
        let delta = this.b ** 2 - 4 * this.a * this.c;
        if (delta > 0) {
            console.log(this.getRoot1());
            console.log(this.getRoot2());
        }
        else if (delta === 0) {
            console.log(this.getRoot1());
        }
        else {
            console.log("“The equation has no roots”");
        }
    }
    getRoot1() {
        let r1 = (-this.b + Math.sqrt(this.b ** 2 - 4 * this.a * this.c)) / (2 * this.a);
        return r1;
    }
    getRoot2() {
        let r2 = (-this.b - Math.sqrt(this.b ** 2 - 4 * this.a * this.c)) / (2 * this.a);
        return r2;
    }
}
const newX = new QuadraticEquation(1, -1, 1);
newX.getDiscriminant();
//Exercise 04
class Student {
    constructor(code, name, age, gender, address, phoneNumber) {
        this.code = code;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
    inputData() {
        this.code = prompt("Enter student code");
        this.name = prompt("Enter student name");
        this.age = Number(prompt("Enter student age"));
        this.gender = prompt("Enter student gender");
        this.address = prompt("Enter student address");
        this.phoneNumber = prompt("Enter student phone number");
    }
    displayData() {
        console.log(`Code: ${this.code}`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Address: ${this.address}`);
        console.log(`Phone Number: ${this.phoneNumber}`);
    }
}
class Main {
    constructor() {
        this.students = new Array(100); // đã tạo mảng nhưng chỉ xác định độ dài 100 thôi
        this.count = 0;
    }
    main() {
        console.log(this.students, "students");
        let choice;
        //do thực hiện trước while
        do {
            console.log("========== MENU ==========");
            console.log("R. Display all students");
            console.log("C. Add new student");
            console.log("U. Update student information");
            console.log("D. Delete student");
            console.log("E. Exit");
            choice = prompt("Enter your choice");
            switch (choice) {
                case "R":
                    this.displayAllStudents();
                    break;
                case "C":
                    this.createStudent();
                    break;
                case "U":
                    this.updateStudent();
                    break;
                case "D":
                    break;
                case "E":
                    console.log("Exiting...");
                    break;
                default:
                    console.log("Invalid choice");
                    break;
            }
        } while (choice !== "E");
    }
    displayAllStudents() {
        console.log("========== STUDENT LIST ==========");
        for (let i = 0; i < this.count; i++) {
            console.log(`Student ${i + 1}:`);
            this.students[i].displayData();
            console.log("==============================");
        }
    }
    createStudent() {
        if (this.count < this.students.length) {
            const student = new Student("", "", 0, "", "", "");
            student.inputData();
            this.students[this.count] = student;
            this.count++;
            console.log("New student added successfully!");
        }
        else {
            console.log("Cannot add more students. Student list is full.");
        }
    }
    updateStudent() {
        const code = prompt("Enter student code to update");
        let found = false;
        for (let i = 0; i < this.count; i++) {
            if (this.students[i].code === code) {
                this.students[i].inputData();
                console.log("Student information updated successfully!");
                found = true;
                break;
            }
        }
        if (!found) {
            console.log("Student not found.");
        }
    }
}
const main = new Main();
console.log(main.main());
