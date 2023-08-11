"use strict";
// ==================================== Generics <Type>  ====================================
const t2 = [1, 2, 3, 4]; // [1, 2, 3, 4];
// II.Generic Function
function myFnGeneric(ar1, ar2) {
    //phải extends kế thừa mới được
    let result = ar1 + ar2;
    console.log("function generic first: " + result); // function generic first: 4
    return result;
}
myFnGeneric(2, 2); // myFnGeneric<number>(2, 2) or myFnGeneric<T>(2, 2)
function myCity(newCity) {
    console.log(newCity);
    return newCity;
}
const newYork = { name: "New York", km: 1000 };
myCity(newYork); // truyền vào 1 đối tượng thay vì 2,3 tham số
// {name: 'New York', km: 1000}
// II._____________________________
const array = { name: "Daniel", address: "San fransico" };
const array2 = { name: "Daniel2", age: 2, phone: 12002020330 };
const newww = Object.assign(array, array2); // {name: 'Daniel2', address: 'San fransico', age: 2, phone: 12002020330}
function merge(obj1, obj2) {
    let newObject = Object.assign(obj1, obj2);
    return newObject;
}
const newCity = merge({ name: "New City" }, { age: 20 }); //hàm này là để gộp 2 object lại với nhau
console.log("newCity", newCity); //{name: 'New City', age: 20}
// III. Class
// Tạo 1 class có kiểu dữ liệu chưa biết trước
class Boss {
    constructor(name) {
        this.name = name;
    }
}
const daniel = new Boss("Vương Đình Duệ"); // Boss("Vương Đình Duệ") ==  Boss <string>
console.log(daniel.name); // Vương Đình Duệ
const wantTo = {
    skill: "sadasd",
    salary: 324232121,
};
console.log(wantTo);
const justin1 = { name: "justin", age: 20 };
const justin2 = { name: "justin", age: 20 };
function person(person1, person2) {
    // khi dùng extends thì tham số truyền vào là object
    console.log(person1, person2);
    return person1;
}
person(justin1, justin2);
