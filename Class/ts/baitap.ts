class Person {
  name: string;
  age: number;
  constructor(name2: string, age2: number) {
    this.name = name2;
    this.age = age2;
  }
  sayHello() {
    return `Helo everyone I am ${this.name} and I am ${this.age} years old !`;
  }
}
class Employee extends Person {
  id: number;
  department: string;
  constructor(name: string, age: number, id: number) {
    super(name, age);
    super.sayHello();
    this.id = id;
    this.department = "Dev";
  }
  displayEmployeeInfo() {
    return `EmployeeID: ${this.id} ; Department: ${this.department}`;
  }
}
const person1 = new Person("Daniel", 20);
console.log("New Person ==>", person1);
const employee = new Employee("John", 20, 199);
console.log("New Employee ==>", employee.id); //New Employee ==> 199
console.log("New Employee ==>", employee.department); //New Employee ==> default string infomation
console.log("New Employee ==>", employee.sayHello()); // New Employee ==> Helo everyone I am John and I am 20 years old !
console.log("New Employee display ==>", employee.displayEmployeeInfo()); // New Employee ==> Helo everyone I am John and I am 20 years old !
