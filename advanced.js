"use strict";
// --------- Một số kiểu dữ liệu nâng cao trong Typescript ------------
const info = {
    name: "sda",
    age: 20,
    city: "San Francisco",
    country: "United States",
};
console.log(info);
// type guards
// instanceof
class Numberz {
    isNumber() {
        console.log("Đây là số これが番号です");
    }
}
class Stringz {
    isString() {
        console.log("Đây là chữ これが言葉です");
    }
}
const v1 = new Numberz();
const v2 = new Stringz();
function check(checkType) {
    if (checkType instanceof Numberz) {
        // checkType sẽ kiểm tra v1 có phải là đối tượng thuộc class Numberz hay Stringz hay không
        checkType.isNumber();
    }
    else if (checkType instanceof Stringz) {
        checkType.isString();
    }
}
check(v1);
// check(v2);
// Type Casting
