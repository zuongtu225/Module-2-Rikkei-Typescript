// --------- Một số kiểu dữ liệu nâng cao trong Typescript ------------

// I. Intersection type
// - Sử dụng ký hiệu " & " để kết hợp interface và type (dạng object)
interface User {
  name: string;
  age: number;
}
interface Address {
  city: string;
  country: string;
}
type UserAndAddress = User & Address;
const info: UserAndAddress = {
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
type check = Numberz | Stringz;
const v1 = new Numberz();
const v2 = new Stringz();
function check(checkType: check) {
  if (checkType instanceof Numberz) {
    // checkType sẽ kiểm tra v1 có phải là đối tượng thuộc class Numberz hay Stringz hay không
    checkType.isNumber();
  } else if (checkType instanceof Stringz) {
    checkType.isString();
  }
}
check(v1);
// check(v2);

// Type Casting
let myVariable: string | number = "Hello";

if (typeof myVariable === "string") {
  let stringLength: number = (myVariable as string).length;
  console.log(stringLength); // Output: 5
} else {
  console.log("Not a string");
}
