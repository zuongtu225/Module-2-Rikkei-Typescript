// Bài tập 1: Stack Generic
class Stack<T> {
  push(value: T) {
    return ` Hello i am push ${value}`;
  }
  pop(value: T): void {
    ` Hello i am pop ${value}`;
  }
}
const stack = new Stack<number>();
console.log("stack generic", stack.push(1), stack.pop(2));

// Bài tập 2: Array Utility Function
interface typeNum {
  year: number;
}
interface Products {
  name: string;
  price: number;
}

const products: Products[] = [
  { name: "gucci", price: 100 },
  { name: "chanel", price: 20 },
];

function stacks<T extends typeNum>(products: Products[], param: T): Products[] {
  console.log(products);
  return products;
}
const stako = stacks<typeNum>(products, { year: 2020 });
console.log("stako", stako); //stako [{...} , {...}]

// Bài 4: Custom Map Generic
class CustomMap<T> {
  map: Map<number, T> = new Map(); // trường map kiểu Map<number, T> được khởi tạo bằng một đối tượng Map
  set(key: number, value: T) {
    this.map.set(key, value);
  }

  get(key: number): T | undefined {
    return this.map.get(key);
  }
}

const customMap = new CustomMap<string>();
customMap.set(1, "one");
customMap.set(2, "two");

console.log(customMap.get(1)); // Output: "one"
console.log(customMap.get(2)); // Output: "two"

// Exercise 04
function delay(number: number): any {
  const delayTime: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, number);
  });
  return delayTime;
}

async function run() {
  console.log("Start");
  let setTime = 5000;
  await delay(setTime);
  console.log(`After ${setTime} seconds`);
}
run();
