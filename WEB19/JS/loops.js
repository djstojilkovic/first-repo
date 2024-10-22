//while loop
// for (var d = 10; d > 0; d--) {
//   console.log("Variable d is " + d);
// }

// var a = [2, -4, 5, -2, -11];
// for (var i = 0; i < a.length; i++) {
//   if (a[i] < 0) {
//     console.log(a[i]);
//   }
// }
// var array2 = [5, 15, -5, 20, 12, 18, 72, 14, 9];
// for (var index = 0; index < array2.length; index++) {
//   var element = array2[index];
//   if (index % 3 == 0) {
//     console.log("Element value " + element + " at position " + index);
//   }
// }
//1. zad
// for (var x = 0; x <= 15; x++) {
//   if (x === 0) {
//     console.log(x + " is even");
//   } else if (x % 2 === 0) {
//     console.log(x + " is even");
//   } else {
//     console.log(x + " is odd");
//   }
// }
//2.zad
// var suma = 0;
// for (var i = 0; i < 1000; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     suma = suma + i;
//   }
// }
// console.log(suma);
//3.zad
// var niz = [1, 3, 5, 6, 10, 20, 25, 35];
// var suma = 0;
// var proizvod = 1;
// for (var i = 0; i < niz.length; i++) {
//   var elementNiza = niz[i];
//   suma = suma + elementNiza;
//   proizvod = proizvod * elementNiza;
// }
// console.log("Suma je: " + suma);
// console.log("Proizvod je: " + proizvod);
// 4.zad
// var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
// var singleString = "";
// for (var i = 0; i < x.length; i++) {
//   var element = x[i];
//   singleString = singleString + element;
// }
// console.log(singleString);
//5.zad
// var a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
// ];

// for (var i = 0; i < a.length; i++) {
//   for (var j = 0; j < a[i].length; j++) {
//     console.log(a[i][j]);
//   }
// }
//6.zad
// var suma = 0;
// for (var i = 0; i <= 20; i++) {
//   suma = suma + i * i;
// }
// console.log(suma);
//7. zad
// var ocene = [
//   ["David", 80],
//   ["Marko", 77],
//   ["Dany", 88],
//   ["John", 95],
//   ["Thomas", 68],
// ];
// var suma = 0;
// var average = 81.6;
// for (i = 0; i < ocene.length; i++) {
//   for (j = 0; j < ocene[i].length; j++) {
//     var element = ocene[i][j];
//     if (typeof element == "number") {
//       suma = suma + element;
//       average = suma / 5;
//     }
//   }
// }

// console.log(average + "%");

// if (average < 60) {
//   console.log("Ocena je F");
// } else if (average < 70) {
//   console.log("Ocena je D");
// } else if (average < 80) {
//   console.log("Ocena je C");
// } else if (average < 90) {
//   console.log("Ocena je B");
// } else {
//   console.log("Ocena je A");
// }
//8.zad
// for (var i = 1; i < 101; i++) {
//   if (i % 15 == 0) console.log("FizzBuzz");
//   else if (i % 3 == 0) console.log("Fizz");
//   else if (i % 5 == 0) console.log("Buzz");
//   else console.log(i);
// }
//2.1 zad
// var input = 3;
// var a = [5, -4, 2, 3, 7];
// for (i = 0; i < a.length; i++) {
//   var element = a[i];
//   if (input === element) {
//     console.log("yes");
//   }
// }
//2.2 zad
