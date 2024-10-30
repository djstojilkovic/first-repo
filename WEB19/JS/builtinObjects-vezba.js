//1. zadatak (built in objects)
function duplicateArray(array) {
  var result = [];
  array.forEach((element) => {
    result.push(element);
    result.push(element);
  });
  return result;
}
console.log(duplicateArray([1, 2, 3, 4]));

//2.zadatak
function removeDuplicates(array) {
  var result1 = [];
  array.forEach((element) => {
    if (result1.indexOf(element) < 0) {
      result1.push(element);
    }
  });
  return result1;
}
console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 4, 5, 6, 7]));

//3.a. zadatak
function oddNumOfElements(array) {
  if (array.length % 2 != 0) {
    return true;
  }
  return false;
}
console.log(oddNumOfElements([1, 2, 3, 4, 5, 6, 7]));
//3.b. zadatak
function numOfElementsLessThanMid(array) {
  var middleNum;
  var counter = 0;
  var isEven = oddNumOfElements(array);

  if (!isEven) {
    return "Error";
  }

  middleNum = array[array.length / 2 - 0.5];

  array.forEach((element) => {
    if (element <= middleNum) {
      counter++;
    }
  });
  return counter;
}
console.log(numOfElementsLessThanMid([1, 2, 3, 4, 5, 6, 7, 8]));

//4. zadatak
function findSmallestElement(array) {
  var minValue = Math.min.apply(Math, array);
  var minIndex = array.lastIndexOf(minValue);

  return { minValue, minIndex };
}
console.log(findSmallestElement([1, 2, 3, 4, -1]));

//5.a.zadatak
function findElements(array, n) {
  var res2 = [];
  array.forEach((element) => {
    if (element < n) {
      res2.push(element);
    }
  });
  return res2;
}
console.log(findElements([1, 2, 3, 4, 5, 6], 3));
//5.b zadatak
function findProString(array) {
  var res3 = [];
  array.forEach((element) => {
    if (element.includes("pro") || element.includes("Pro")) {
      res3.push(element);
    }
  });
  return res3;
}
console.log(
  findProString(["programming", "fun", "javascript", "product", "Proffessor"])
);
//5.c zadatak
function callbackFunction(array) {}

//6.a  zadatak
function Groceries(name, price) {
  this.name = name;
  this.price = price;
}
var grocery1 = new Groceries("apples", 100);
var grocery2 = new Groceries("milk", 200);
var grocery3 = new Groceries("bananas", 150);
//6.b zadatak
function totalPrice(array) {
  var total = 0;
  array.forEach((element) => {
    total += element.price;
  });
  return total;
}
//6.c zadatak
function findAvg(array) {
  var avg = totalPrice(array) / array.length;
  return avg;
}
//6.d zadatak
function mostExpensive(array) {
  var max = -Infinity;
  var name = "";
  array.forEach((element) => {
    if (element.price > max) {
      max = element.price;
      name = element.name;
    }
  });
  return name.toUpperCase();
}
console.log(mostExpensive([grocery1, grocery2, grocery3]));
console.log(findAvg([grocery1, grocery2, grocery3]));
console.log(totalPrice([grocery1, grocery2, grocery3]));
//7.a zadatak
function isUpperCase(str) {
  return str === str.toUpperCase();
}
// console.log(isUpperCase("dsa"));
// console.log(isUpperCase("Dsa"));
// console.log(isUpperCase("DSA"));
//7.b zadatak
function containsDigits(str) {
  return /[0-9]/.test(str);
}
// console.log(containsDigits("dsa23dsa"));
//7.c zadatak
function validHexColor(hexdec) {
  return /^#[0-9A-F]{6}$/i.test(hexdec);
}
// console.log(validHexColor("#72c444"));
//7.d zadatak
function numRange(num) {
  if (num >= 1800 && num <= 2018) return true;
  else return false;
}
console.log(numRange(1799));
//7.e zadatak
function validate() {
  var obj = [
    { stringValidator: isUpperCase("DSADASD") },
    { passwordValidator: containsDigits("dsa123das") },
    { colorValidator: validHexColor("#72c444") },
    { yearValidator: numRange(1600) },
  ];
  return obj;
}
console.log(validate());
//8.zadatak
function daysToBirthday(birthday) {
  var todaysDate = new Date();
  console.log(birthday);
  return Math.round(
    Math.abs(birthday.getTime() - todaysDate.getTime()) / 8.64e7
  );
}
console.log(daysToBirthday(new Date(2025, 5, 23)));
