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

//Anini zadaci
const data = [
  {
    id: 1,
    name: "Ana",
    location: {
      city: "Belgrade",
      country: "Serbia",
      postalCode: 11070,
    },
  },
  {
    id: 2,
    name: "John",
    location: {
      city: "New York",
      country: "US",
      postalCode: 10001,
    },
  },
  {
    id: 3,
    name: "Stefan",
    location: {
      city: "Krusevac",
      country: "Serbia",
      postalCode: 37000,
    },
  },
  {
    id: 4,
    name: "Ana",
    location: {
      city: "Novi Sad",
      country: "Serbia",
      postalCode: 21000,
    },
  },
];

const userPhoneNumbers = [
  { id: 1, phoneNumber: "06038127392" },
  { id: 2, phoneNumber: "06038156792" },
  { id: 3, phoneNumber: "06038122392" },
  { id: 4, phoneNumber: "06038133092" },
];

//1. zadatak
const res1 = data.filter((element) => element.location.country == "Serbia");
// console.log(res1);
//2.zadatak
const res2 = data.find((element) => element.location.country == "US");
// console.log(res2);
//3.zadatak
const res3 = data.every((element) => element.location.postalCode >= 10000);
console.log(res3);
//4.zadatak
const res4 = data.forEach((element) => {
  console.log(
    element.name +
      " - " +
      element.location.city +
      ", " +
      element.location.country
  );
});
//5.zadatak
const res5 = data.map((user) => {
  return { name: user.name, id: user.id };
});
console.log(res5);
//6.zadatak
const res6 = data.map((user) => {
  const userPhoneNumber = userPhoneNumbers.find((phoneNumber) => {
    return user.id === phoneNumber.id;
  });
  return {
    ...user,
    phoneNumber: userPhoneNumber
      ? userPhoneNumber.phoneNumber
      : "No phone number",
  };
});
console.log(res6);

//7.zadatak
const inventory = [
  {
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    quantity: 5,
  },
  {
    name: "Phone",
    category: "Electronics",
    price: 800,
    quantity: 0,
  },
  {
    name: "Headphones",
    category: "Accessories",
    price: 150,
    quantity: 10,
  },
  {
    name: "Keyboard",
    category: "Accessories",
    price: 75,
    quantity: 3,
  },
  {
    name: "Mouse",
    category: "Accessories",
    price: 50,
    quantity: 20,
  },
];
const inventoryNew = inventory.map((elem) => {
  return {
    ...elem,
    totalPrice: elem.price * elem.quantity,
  };
});
console.log(inventoryNew);

//reduce
const arr = [2, 9, 0, 199, 23, 23, 123, 1111];
const reduceSum = arr.reduce((acc, elem) => {
  return acc + elem;
}, 0);
console.log(reduceSum);
// 1. iteracija ---> acc=0, elem=2, callback=>2+0=2(nova vrednost acc-a za sledecu iteaciju)
// 2. iteracija ---> acc=2, elem=9, callback=>2+9=11(nova vrednost acc-a za sledecu iteaciju)
// 3. iteracija ---> acc=11, elem=0, callback=>11+0=11(nova vrednost acc-a za sledecu iteaciju)
//...

//zadatak sa aninog intervjua
const input = ["banana", "banana", "cherry", "apple", "apple", "banana"];
// const output = {
//   banana: 3,
//   cherry: 1,
//   apple: 2,
// };
var countFruits = input.reduce(function (acc, currentFruit) {
  //currentFruit je element niza
  acc[currentFruit] = (acc[currentFruit] || 0) + 1;
  return acc;
}, {});
console.log(countFruits);
