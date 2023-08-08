class Student {
  id: number;
  name: string;
  sex: boolean;
  className: string;
  age: number;
  address: string;
  constructor(
    id: number,
    name: string,
    sex: boolean,
    className: string,
    age: number,
    address: string
  ) {
    this.id = id;
    this.name = name;
    this.sex = sex;
    this.className = className;
    this.age = age;
    this.address = address;
  }
}

class StudentManager extends Student {
  constructor(
    id: number,
    name: string,
    sex: boolean,
    className: string,
    age: number,
    address: string
  ) {
    super(id, name, sex, className, age, address);
  }
}
const managerStudent = new StudentManager(0, "", true, "", 0, "");
console.log(managerStudent);
