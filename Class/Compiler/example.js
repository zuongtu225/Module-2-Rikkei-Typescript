"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Bài tập 1: Stack Generic
class Stack {
    push(value) {
        return ` Hello i am push ${value}`;
    }
    pop(value) {
        ` Hello i am pop ${value}`;
    }
}
const stack = new Stack();
console.log("stack generic", stack.push(1), stack.pop(2));
const products = [
    { name: "gucci", price: 100 },
    { name: "chanel", price: 20 },
];
function stacks(products, param) {
    console.log(products);
    return products;
}
const stako = stacks(products, { year: 2020 });
console.log("stako", stako); //stako [{...} , {...}]
// Bài 4: Custom Map Generic
class CustomMap {
    constructor() {
        this.map = new Map(); // trường map kiểu Map<number, T> được khởi tạo bằng một đối tượng Map
    }
    set(key, value) {
        this.map.set(key, value);
    }
    get(key) {
        return this.map.get(key);
    }
}
const customMap = new CustomMap();
customMap.set(1, "one");
customMap.set(2, "two");
console.log(customMap.get(1)); // Output: "one"
console.log(customMap.get(2)); // Output: "two"
// Exercise 04
function delay(number) {
    const delayTime = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, number);
    });
    return delayTime;
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Start");
        let setTime = 5000;
        yield delay(setTime);
        console.log(`After ${setTime} seconds`);
    });
}
run();
