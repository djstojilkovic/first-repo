// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// var c = sum(3, 2);
// console.log(c);

// function findMinimum(input) {
//   var minimum = Infinity;
//   for (var i = 0; i < input.length; i++) {
//     if (input[i] < minimum) {
//       minimum = input[i];
//     }
//   }
//   return minimum;
// }
// console.log(findMinimum([4, 2, 2, -1, 6]));

// function findSecondMinimum(array) {
//   var minimum = findMinimum(array);
//   var secondMin = Infinity;
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] < secondMin && array[i] > minimum) {
//       secondMin = array[i];
//     }
//   }
//   return secondMin;
// }
// var result = findSecondMinimum([4, 2, 2, -1, 6]);
// console.log(result);
//1. zadatak
// function findMax(input) {
//   var maximum = -Infinity;
//   for (var i = 0; i < input.length; i++) {
//     if (input[i] > maximum) {
//       maximum = input[i];
//     }
//   }
//   return maximum;
// }
// console.log(findMax([3, 5]));

//2. zadatak
// function jeNeparan(input) {
//   if (input % 2 !== 0) {
//     console.log("Broj je neparan");
//   } else {
//     console.log("Broj je paran");
//   }
// }
// jeNeparan(7);
//2.zadatak ---> drugi nacin
// function checkIfNumberIsOdd(a) {
//   return a % 2 !== 0;
// }
// console.log(checkIfNumberIsOdd(54));
//3.zadatak
// function threeDigitNumber(input) {
//   if (input >= 100) {
//     console.log("Number has 3 or more digits");
//   } else {
//     console.log("This is not a 3 digit number");
//   }
// }
// threeDigitNumber(101);
//3.zadatak ---> drugi nacin
// function getNumberLength(a) {
//   if (typeof a == "number") {
//     return (a + "").length;
//   }
//   return 0;
// }
//4.zadatak
// function arithMean(input1, input2, input3, input4) {
//   var mean = (input1 + input2 + input3 + input4) / 4;
//   console.log(mean);
// }
// arithMean(1, 2, 3, 4);
//7.zadatak
// function numOfDigits(input) {
//   if (input >= 0 && input < 10) {
//     console.log("Number has 1 digit");
//   } else if (input >= 10 && input < 100) {
//     console.log("Number has 2 digits");
//   } else if (input >= 100 && input < 1000) {
//     console.log("Number has 3 digits");
//   } else if (input >= 1000 && input < 10000) {
//     console.log("Number has 4 digits");
//   } else if (input >= 10000 && input < 100000) {
//     console.log("Number has 5 digits");
//   } else if (input >= 100000 && input < 1000000) {
//     console.log("Number has 6 digits");
//   }
// }
// numOfDigits(15000);
//8.zadatak
// function numOfAppearances(array, input) {
//   var n = 0;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] == input) {
//       n++;
//     }
//   }
//   return n;
// }
// console.log(numOfAppearances([1, 1, 1, 3, 6, 7, 1, 11], 1));
//9. zadatak
// function sumOfOdd(array) {
//   var suma = 0;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       suma += array[i];
//     }
//   }
//   return suma;
// }
// console.log("Suma neparnih clanova niza je: " + sumOfOdd([1, 2, 3, 4, 5, 11]));
//10.zadatak
// function proveraStringa(string) {
//   var n = 0;
//   for (i = 0; i < string.length; i++) {
//     if (string[i] === "a" || string[i] === "A") {
//       n++;
//     }
//   }
//   return n;
// }
// console.log(proveraStringa("Ovaj tekst sluzi za proveru ove funkcije"));
//11.zadatak
// function concatenateString(inputString, numberOfIterations) {
//   var result = "";
//   for (var i = 0; i < numberOfIterations; i++) {
//     result += inputString;
//   }
//   return result;
// }
// console.log(concatenateString("abc", 4));
