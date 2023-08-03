// =========== LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG =========
// OOP là gì ?
// - Là một MÔ HÌNH lập trình dựa trên những đối tượng thực tế (User, Product, car, ..)
// - Đối Tượng là chứa thuộc tính và phương thức

const user1: object = {
  id: 1,
  name: "Daniel",
  age: 20,
};
getUser(user1);
function getUser(user1: any): any {
  const result = `Username: ${user1.username} Email: ${user1.email} Age:  ${user1.age} `;
}
const user2 = {
  id: 1,
  name: "Rosé",
  age: 20,
};

//4 tính chất của OOP
// 1. Tính TRỪU TƯỢNG____________________________________________________
class User {
  username: string;
  email: string;
  age: number;

  constructor(username: string, email: string, age: number) {
    this.username = username;
    this.email = email;
    this.age = age;
  }

  getUser() {
    const result = `Username: ${this.username} Email: ${this.email} Age:  ${this.age}`;
    return result;
  }
}
const daniel = new User("Daniel", "dvtu225@gmail.com", 24);
console.log("user1", daniel.getUser());

// 2. Tính ĐÓNG GÓI ____________________________________________________
// - Khi dùng private để ngăn chặn bên ngoài tránh bị sửa thông tin
// - Muốn sửa thì phải bắt cầu
class User2 {
  username: string;
  email: string;
  age: number;

  constructor(username: string, email: string, age: number) {
    this.username = username;
    this.email = email;
    this.age = age;
  }

  private getUser2() {
    const result = ` = Username: ${this.username} - Email: ${this.email} -  Age:  ${this.age}`;
    return result;
  }
  getOnlyUser2() {
    const getUser = this.getUser2();
    return getUser;
  }
}
const daniel2 = new User2("Daniel Private Đóng Gói ", "dvtu225@gmail.com", 24);
console.log("user2", daniel2.getOnlyUser2());

// 3. Tính KẾ THỪA ____________________________________________________
// - ChildClass sẽ kế thừa lại toàn bộ thuộc tính và phương thức từ ParentClass
//    và có thể phát triển thêm các thuộc tính và phương thức mới
class Admin extends User2 {
  isAdmin: boolean;
  constructor(name: string, email: string, age: number, admin: boolean) {
    super(name, email, age); // kế thừa thuộc tính
    super.getOnlyUser2(); // kế thừa phương thức
    this.isAdmin = admin;
  }
  getOnlyAdmin() {
    return super.getOnlyUser2();
  }
  // đây là vd kế thừa thèn User2 ở trên
}
const admin = new Admin("Admin", "adminZtu@gmail.com", 20, true);
console.log("admin", admin.getOnlyUser2());

class User4 {
  username4: string;
  email4: string;
  age4: number;

  constructor(username: string, email: string, age: number) {
    this.username4 = username;
    this.email4 = email;
    this.age4 = age;
  }

  getUser4() {
    const result = `Username: ${this.username4} Email: ${this.email4} Age:  ${this.age4}`;
    return result;
  }
}
const daniel4 = new User4("Daniel ĐA HÌNH NONE ", "dvtu225@gmail.com", 24);
console.log("user4", "Đa hình none:", daniel4);

const danielDahinh = new User4("Daniel ĐA HÌNH ", "dvtu225@gmail.com", 40);
console.log("user4", "Đa hình:", danielDahinh);

// ex bài tập
class Calculator {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  plus() {
    const total1 = this.width + this.height;
    return total1;
  }
  minus() {
    const total2 = this.width - this.height;
    return total2;
  }
  multi() {
    const total3 = this.width * this.height;
    return total3;
  }
  divide() {
    const total4 = this.width / this.height;
    return total4;
  }
}
const calculator = new Calculator(10, 10);
console.log(calculator.plus());
console.log(calculator.minus());
console.log(calculator.multi());
console.log(calculator.divide());
