// ==================================== Generics <Type>  ====================================

/* generic type" là một tính năng cho phép bạn tạo ra các thành phần linh hoạt
 có thể làm việc với nhiều loại dữ liệu khác nhau mà không cần phải viết lại mã lặp đi lặp lại.
            
      function genericFn<Type>(arg: Type): Type {
              return arg;
            }

*/
// I. Generic type <T>
type T = number;
const t2: Array<T> = [1, 2, 3, 4]; // [1, 2, 3, 4];

// II.Generic Function
function myFnGeneric<N extends T>(ar1: N, ar2: N): number {
  //phải extends kế thừa mới được
  let result: T = ar1 + ar2;
  console.log("function generic first: " + result); // function generic first: 4
  return result;
}
myFnGeneric(2, 2); // myFnGeneric<number>(2, 2) or myFnGeneric<T>(2, 2)

// III.Generic Interface
interface City {
  name: string;
  km: number;
}
function myCity<T>(newCity: T) {
  console.log(newCity);
  return newCity;
}
const newYork: City = { name: "New York", km: 1000 };
myCity(newYork); // truyền vào 1 đối tượng thay vì 2,3 tham số
// {name: 'New York', km: 1000}

// II._____________________________
const array = { name: "Daniel", address: "San fransico" };
const array2 = { name: "Daniel2", age: 2, phone: 12002020330 };

const newww = Object.assign(array, array2); // {name: 'Daniel2', address: 'San fransico', age: 2, phone: 12002020330}

function merge(obj1: object, obj2: object): object {
  let newObject = Object.assign(obj1, obj2);
  return newObject;
}
const newCity = merge({ name: "New City" }, { age: 20 }); //hàm này là để gộp 2 object lại với nhau
console.log("newCity", newCity); //{name: 'New City', age: 20}

// III. Class
// Tạo 1 class có kiểu dữ liệu chưa biết trước
class Boss<S, K> {
  // kiểu K có thể ko dùng tới
  name: S;
  constructor(name: S) {
    this.name = name;
  }
}
const daniel = new Boss("Vương Đình Duệ"); // Boss("Vương Đình Duệ") ==  Boss <string>
console.log(daniel.name); // Vương Đình Duệ

// IV. Interface and Object
interface Advanced<S, N> {
  skill: S;
  salary: N;
}
const wantTo: Advanced<string, number> = {
  skill: "sadasd",
  salary: 324232121,
};
console.log(wantTo);

// V. Biến Generic

interface Person {
  name: string;
  age: number;
}
const justin1: Person = { name: "justin", age: 20 };
const justin2: Person = { name: "justin", age: 20 };

function person<P extends Person>(person1: P, person2: P): P {
  // khi dùng extends thì tham số truyền vào là object
  console.log(person1, person2);
  return person1;
}
person(justin1, justin2);
