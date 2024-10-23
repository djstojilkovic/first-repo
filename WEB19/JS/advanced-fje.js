// var a = (function () {
//   return 1;
// })();
// console.log(a);

// var sum = function (a, b) {
//   return a + b;
// };
// console.log(sum);
// console.log(sum(3, 2));

// function outer() {
//   function inner() {
//     return 2;
//   }
//   return 1 + inner();
// }
// console.log(outer());
// // console.log(inner()); //baca error jer je inner fja unutar outer, i ne vidi se

// /////////////////////////////
// function sumNumbers() {
//   function inner() {
//     return 1;
//   }
//   return 1 + externalSum(inner);
// }

// function externalSum(b) {
//   return 1 + b();
// }
// console.log(sumNumbers());

// ////////////////////////////
// function testA() {
//   console.log("test a");
//   return function () {
//     console.log("test b");
//     return function () {
//       console.log("test c");
//     };
//   };
// }
// testA()()();

// ////////////////////////////
// function invokeAdd(a, b) {
//   return a() + b();
// }

// var aFunction = function () {
//   return 1;
// };
// var bFunction = function () {
//   return 2;
// };

// console.log(invokeAdd(aFunction, bFunction));

// ///////////////////////////
// function recursionExample(a) {
//   if (a < 1) return 1;
//   return 1 + recursionExample(a - 1);
// }
// console.log(recursionExample(2));

//1. zadatak (exercise 8)
// function replaceElements(array) {
//   var firstElement = array.shift();
//   var lastElement = array.pop();
//   array.unshift(lastElement);
//   array.push(firstElement);
//   console.log(array);
// }
// replaceElements([1, 2, 3, 4, 5]);

//2. nacin
// function replaceElements(array) {
//   for (var i = 0; i < array.length; i++) {
//     if (i === 0) {
//       var element = array[i];
//       array[i] = array[array.length - 1];
//       array[array.length - 1] = element;
//       break;
//     }
//   }
//   return array;
// }
// console.log(replaceElements([1, 2, 3, 4, 5]));

//2.zadatak (exercise 8)
// var rectangle = function (a, b) {
//   return a * b;
// };
// console.log(rectangle(4, 5));

//3.zadatak (exercise 8)
// var replaceM = (function (str) {
//   var counter = 0;
//   var result = "";
//   for (var i = 0; i < str.length; i++) {
//     var element = str[i];
//     if (element == "M" || element == "m") {
//       element = "*";
//       counter++;
//     }
//     result += element;
//   }

//   return [result, counter];
// })("das das daM dam prograMming");
// console.log(replaceM);

//4.zadatak (exercise 8)
// function mail(name, surname) {
//   return function () {
//     return name + "." + surname + "@gmail.com";
//   };
// }
// console.log(mail("djordje", "stojilkovic")());

//5.zadatak (exercise 8)
// function decimalOfOctal(decimal) {
//   return function () {
//     return parseInt(decimal, 8);
//   };
// }
// console.log(decimalOfOctal("034")());

//6.zadatak (exercise 8)
// function successCallback() {
//   return console.log("Your password is valid");
// }
// function errorCallback() {
//   return console.log("Your password is invalid");
// }

// var validPassword = (function (password) {
//   var counter = 0;
//   for (var i = 0; i < password.length; i++) {
//     if ((password[i] *= 1)) {
//       //proveravanje da li je element "passworda" broj tako sto mnozi sa 1
//       counter++;
//     }
//   }
//   if (password.length >= 6 && counter >= 1) {
//     return successCallback();
//   } else {
//     return errorCallback();
//   }
// })("JSGuru123");
// validPassword;

//7.zadatak (exercise 8)
// function oddCallback(num) {
//   return num % 2 != 0;
// }

// function filterElements(array) {
//   var oddNum = [];
//   for (var i = 0; i < array.length; i++) {
//     if (oddCallback(array[i])) {
//       oddNum.push(array[i]);
//     }
//   }
//   return oddNum;
// }
// console.log(filterElements([1, 2, 3, 4, 5]));

//7. zadatak 2. resenje
var niz = [2, 8, 11, 4, 9, 3];
function isOdd(x) {
  return x % 2 !== 0;
}

function filterOdd(array, callback) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(filterOdd(niz, isOdd));
console.log(niz.filter(isOdd));
