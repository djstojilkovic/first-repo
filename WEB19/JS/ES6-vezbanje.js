//1. zadatak (ES6-Practicals)
function capitalizeLetter(array) {
  array.forEach((el) => {
    array = array.map((el) => el[0].toUpperCase() + el.slice(1));
  });

  return array;
}
console.log(capitalizeLetter(["hello", "there", "ES"]));
//2.zadatak
class Fruit {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
const calculateTax = (obj) => {
  let a = [];
  obj.forEach((element) => {
    a[a.length] = element.price * 1.2 - element.price;
    element.price = element.price * 1.2;
  });
  console.log(obj);
  console.log(a);
};
let x = [new Fruit("Banana", 120), new Fruit("Orange", 100)];
console.log(x);
calculateTax(x);
//3.zadatak
const increaseElement = (arguments, n) =>
  arguments.map((element) => element + n);
console.log(increaseElement([4, 6, 11, -9, 2.1], 2));
//4.zadatak
const filterEven = (arguments) =>
  arguments.filter((element) => element % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));
//5.zadatak
const filterJS = (args) =>
  args.filter((element) => element.includes("JS") || element.includes("js"));
console.log(
  filterJS(["compiler", "transpiler", " babel.js", "JS standard", "linter"])
);
//6.zadatak
const filterIntegers = (arr) => arr.filter((el) => el == parseInt(el));
console.log(filterIntegers([1.6, 11.34, 9.23, 7, 3.11, 8]));
//7.zadatak
const filterIntegersFive = (input) =>
  input.filter((el) => {
    if (el == parseInt(el)) return el.toString().includes(5);
  });
console.log(
  filterIntegersFive([1.1, 2, 45, 13.15, 553, 7.31, 16.2, 205.1, 17.15, 255])
);
//8.zadatak
const greaterThanTen = (arr) => {
  let arr2 = [];
  arr.forEach((el, index) => {
    if (el > 10) arr2.push(index);
  });
  return arr2;
};
console.log(greaterThanTen([11, 20, 5, 7, 2]));
//9.zadatak
class Persons {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const printNames = (objj) => {
  objj.forEach((element) => {
    if (element.age > 25) console.log(element.name);
  });
};
const olderThan40 = (objj) => {
  let result = false;
  objj.forEach((element) => {
    if (element.age > 40) result = true;
  });
  return result;
};
const allOver20 = (objj) => {
  let result = true;
  objj.forEach((element) => {
    if (element.age < 20) {
      result = false;
    }
  });
  return result;
};

let a = [
  new Persons("Mika Mikic", 27),
  new Persons("Laza Lazic", 25),
  new Persons("Pera Peric", 22),
  new Persons("Zika Ilic", 68),
];
printNames(a);
console.log(olderThan40(a));
console.log(allOver20(a));
//10.zadatak
const allPositive = (arr) => {
  let isPositive = "yes";
  arr.forEach((element) => {
    if (element < 0) isPositive = "no";
  });
  return isPositive;
};

console.log(allPositive([3, 11, 9, 5, -6]));
//11.zadatak
const productOfElements = (arr) => {
  let result = 1;
  arr.forEach((element) => {
    result *= element;
  });
  return result;
};
console.log(productOfElements([2, 8, 3]));
//12.zadatak
const findMax = (arr) => {
  return Math.max(...arr);
};
console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8]));
