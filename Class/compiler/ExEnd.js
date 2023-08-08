"use strict";
class Student {
    constructor(id, name, sex, className, age, address) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.className = className;
        this.age = age;
        this.address = address;
    }
}
class StudentManager extends Student {
    constructor(id, name, sex, className, age, address) {
        super(id, name, sex, className, age, address);
    }
}
const managerStudent = new StudentManager(0, "", true, "", 0, "");
console.log(managerStudent);
