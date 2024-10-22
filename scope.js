//1.zadatak (exercise 6)
// function countVowels(str) {
//   var Vowels = "aAeEiIoOuU";
//   var vowelsCount = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (Vowels.indexOf(str[i]) !== -1) {
//       vowelsCount += 1;
//     }
//   }
//   return vowelsCount;
// }
// console.log(
//   "There are " +
//     countVowels("Danas je lep i suncan dan") +
//     " vowels in this sentence."
// );

//2.zadatak (exercise 6)
// function combineArrays(array1, array2) {
//   var newArray = [];
//   for (var i = 0; i < array1.length + array2.length; i++) {
//     if (i % 2 === 0) {
//       newArray.push(array1[i / 2]);
//     } else {
//       newArray.push(array2[(i - 1) / 2]);
//     }
//   }
//   return newArray;
// }
// console.log(combineArrays(["a", "b", "c", "d"], [1, 2, 3, 4]));

//3.zadatak (exercise 6)
// function rotateElements(array, k) {
//   k = k % array.length;
//   for (var i = 0; i < k; i++) {
//     var lastElement = array.pop();
//     array.unshift(lastElement);
//   }
//   return array;
// }
// console.log(rotateElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

//4.zadatak (exercise 6)
// function digitIntoArray(num) {
//   var digitArray = [];
//   var numString = String(num); //pretvaramo broj u string (String)
//   for (var i = 0; i < numString.length; i++) {
//     digitArray.push(Number(numString[i])); //pushujemo u niz i pretvaramo string u broj (Number)
//   }
//   return digitArray;
// }
// console.log(digitIntoArray(123));

//5. zadatak (exercise 6)
// function multiplicationTable(n) {
//   var table = "";
//   for (var i = 1; i <= n; i++) {
//     for (var j = 1; j <= n; j++) {
//       table += `${i} x ${j} = ${i * j}\n`;
//     }
//   }

//   return table;
// }
// console.log(multiplicationTable(12));

//6. zadatak (exercise 6)
// function celsiusToFahrenheit(celsius) {
//   var celsiusInF = (celsius * 9) / 5 + 32;
//   console.log(celsius + "°C is " + celsiusInF + "°F");
// }

// function fahrenheitToCelsius(fahrenheit) {
//   var fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
//   console.log(fahrenheit + "°F is " + fahrenheitInC + "°C");
// }
// celsiusToFahrenheit(35);
// fahrenheitToCelsius(50);

//7.zadatak (exercise 6)
// function findMax(array) {
//   var max = -Infinity;
//   var filter = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     } else if (typeof array[i] !== "number") {
//       filter.push(array[i]);
//     }
//   }

//   return { max, filter };
// }
// console.log(
//   findMax([33, 2, "dasdas ", 3, 32, "dasd ", 5, 6, 7, undefined, 250, ""])
// );

//8.zadatak (exercise 6)
// function findMaxAndMin(array) {
//   var max = array[0];
//   var min = array[0];
//   for (var i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   return { max, min };
// }
// console.log(findMaxAndMin([1, 2, 3, 4, 5, 6, 7, 8, 9]).max); //.max ili .min ispisuje samo tu vrednost

//9.zadatak (exercise 6)
// function findMedian(array) {
//   var median;
//   for (var i = 0; i < array.length; i++) {
//     if (array.length % 2 != 0) {
//       var middleNumber = Math.floor(array.length / 2);
//       median = array[middleNumber];
//     } else {
//       var middleNumber = Math.floor(array.length / 2);
//       median = (array[middleNumber] + array[middleNumber - 1]) / 2;
//     }
//   }
//   console.log(median);
// }

// findMedian([1, 2, 3, 4]);

//10.zadatak (exercise 6)
// function findFrequentItem(inputArr) {
//   var mostFrequent = 1;
//   var m = 0;
//   var item;
//   for (var i = 0; i < inputArr.length; i++) {
//     for (var j = i; j < inputArr.length; j++) {
//       if (inputArr[i] == inputArr[j]) {
//         m++;
//       }
//       if (mostFrequent < m) {
//         mostFrequent = m;
//         item = inputArr[i];
//       }
//     }
//     m = 0;
//   }

//   // output: item (number of times)
//   return item + " ( " + mostFrequent + " times ) ";
// }

// var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3, 3, 3, 3, 3];
// console.log(findFrequentItem(arr1));

//11.zadatak (exercise 6)
// function findAndReturn(array) {
//   for (var i = 0; i < array.length; i++) {
//     if (array.length % 2 != 0) {
//       var first = array[0];
//       var middle = array[Math.floor(array.length / 2)];
//       var last = array[array.length - 1];
//     } else if (array.length % 2 == 0) {
//       first = array[0];
//       middle = "There is no middle element";
//       last = array[array.length - 1];
//     }
//   }
//   return { first, middle, last };
// }
// console.log(findAndReturn([1, 2, 3, 4, 5, 6, 7]));

//12.zadatak (exercise 6)
// function findAverage() {
//   var sum = 0;
//   var args = arguments;
//   for (i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum / args.length;
// }
// console.log(findAverage(1, 2, 3));

//13. zadatak (exercise 6)
// function getAverage(array) {
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum / array.length;
// }

// function getGreaterThanAverage(array) {
//   var average = getAverage(array);
//   var numbersArray = [];

//   for (var i = 0; i < array.length; i++) {
//     if (array[i] > average) numbersArray.push(array[i]);
//   }
//   return numbersArray;
// }
// console.log(getGreaterThanAverage([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//14.zadatak (exercise 6)
// function getBMI(weight, heigth) {
//   var bmi = weight / (heigth * heigth);
//   console.log("Your weight is: " + weight + "kg");
//   console.log("Your height is: " + heigth + "m");
//   if (bmi < 15) {
//     return "Starvation";
//   } else if (bmi < 17.5) return "Anorexic";
//   else if (bmi < 18.5) return "Underweight";
//   else if (bmi >= 18.5 && bmi < 25) return "Ideal";
//   else if (bmi >= 25 && bmi < 30) return "Overweight";
//   else if (bmi >= 30 && bmi < 40) return "Obese";
//   else if (bmi >= 40) return "Morbidly obese";
// }

// console.log("You are: " + getBMI(113, 1.91));

//1.zadatak (exercise 7)

// function tellFortune(jobTitle, geoLocation, partnerName, numOfChildren) {
//   var future =
//     "You will be a " +
//     jobTitle +
//     " in " +
//     geoLocation +
//     ", and married to " +
//     partnerName +
//     " with " +
//     numOfChildren +
//     " kids";
//   console.log(future);
// }
// tellFortune("plumber", "Canada", "Nancy", 4);
// tellFortune("real-estate agent", "Mexico", "Maria", 2);
// tellFortune("president", "Bulgaria", "Svetlana", 3);

//2.zadatak (exercise 7)
// function calculateDogAge(ageDog, ageHuman) {
//   var dogYears = 7 * ageDog;
//   console.log("Your dog is " + dogYears + " years old in dog years!");
//   var humanYears = ageHuman / 7;
//   console.log("Your human is " + humanYears + " years old in human years!");
// }

// calculateDogAge(1, 20);
// calculateDogAge(0.5, 81);
// calculateDogAge(12, 47);

//3.zadatak (exercise 7)
// function calculateSupply(age, numPerDay) {
//   var maxAge = 100;
//   var totalNeeded = numPerDay * 365 * (maxAge - age);
//   var message =
//     "You will need " +
//     totalNeeded +
//     " Kit-Kat cholocate bars to last you until the ripe old age of " +
//     maxAge;
//   console.log(message);
// }

// calculateSupply(45, 2);
// calculateSupply(27, 1);
// calculateSupply(70, 5);
