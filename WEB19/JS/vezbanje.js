//1.zadatak
// var a = 10;
// var b = 12;
// var c = 14;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }
// var niz = [10, 12, 14];
// var max = -Infinity; //moze i ---> var max=niz[0]
// for (var i = 0; i < niz.length; i++) {
//   var element = niz[i];
//   if (element > max) {
//     max = element;
//   }
// }
// console.log(max);

//2.zadatak
// var niz2 = [
//   1,
//   "pera peric",
//   2,
//   "martin",
//   3,
//   "",
//   4,
//   "false",
//   undefined,
//   NaN,
//   0,
//   null,
// ];
// var kucicaZaStringove = [];

// for (var i = 0; i < niz2.length; i++) {
//   var element = niz2[i];
//   if (typeof element == "string") {
//     kucicaZaStringove[kucicaZaStringove.length] = element;
//   }
// }
// console.log(kucicaZaStringove);

//3.zadatak
// var a = [1, 2, 3];
// var b = [6, 7, 8];
// var c = [];

// for (var i = 0; i < b.length; i++) {
//   c[c.length] = a[i];
//   c[c.length] = b[i];
// }
// console.log(c);

//4.zadatak

// function najveciUnizu(array) {
//   var i = 1;
//   var max = array[0];
//   while (i < array.length) {
//     var element = array[i];
//     if (element > max) {
//       max = element;
//     }
//     i++;
//   }
//   return max; //isto sto i : console.log(max);
// }
// console.log(najveciUnizu([1, 2, 3, 4, 5, 6, "66", "7", 13, undefined]));

//5.zadatak

// function findMaxOf2(x, y) {
//   //   return x > y ? x : y; //ako je x vece od y, vrati x, else vrati y (ako su jednaki brojevi moramo sa if/elseif)
//   if (x > y) {
//     return x;
//   } else if (y > x) {
//     return y;
//   }
//   return "brojevi su jednaki";
// }
// console.log(findMaxOf2(10, 10));

//6.zadatak

// function isOdd(x) {
//   return x % 2 !== 0 ? true : false;
// }
// console.log(isOdd(-117));

//7.zadatak

// function is3DigitNumber(x) {
//   var stringNumber = x + "";
//   //   var stringNumber = x.toString()
//   if (stringNumber.length === 3) {
//     return true;
//   }
//   return false;
// }
// console.log(is3DigitNumber(444));

//drugi nacin
// function is3DigitNumber(x) {
//   if ((x > 99 && x < 1000) || (x < -99 && x > -1000)) {
//     return true;
//   }
//   return false;
// }
// console.log(is3DigitNumber(-999));

//8.zadatak
// function calculateMean() {
//   var mean;
//   var zbir = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     var element = arguments[i];
//     zbir += element; //sabiramo svaki element
//   }
//   mean = zbir / arguments.length;
//   return mean;
// }
// console.log(calculateMean(1, 2, 3, 4, 5, 6));

//9.zadatak
// function calculateNumDigits(x) {
//   var stringNumber = x + "";
//   return stringNumber.length; //moze i : return (x + "").length
// }

//drugi nacin
// function calculateNumDigits(x) {
//   //765
//   var i = 1;
//   while (x > 10) {
//     var cj = x % 10; //5
//     x -= cj; //765-5=760
//     x /= 10; //76
//     i++;
//   }
//   return i;
// }

// console.log(calculateNumDigits(765));

//10.zadatak
// var a = [2, 4, 7, 8, 7, 7, 1],
//   e = 7;
// function findOccurence(array, broj) {
//   var brojac = 0;
//   for (var i = 0; i < array.length; i++) {
//     var element = array[i];
//     if (element === broj) {
//       brojac++;
//     }
//   }
//   return brojac;
// }
// console.log(findOccurence(a, e));

//11. zadatak
// function sumOfOdd(array) {
//   var suma = 0;
//   for (var i = 0; i < array.length; i++) {
//     var element = array[i];
//     //isOdd -> fja iz prethodnih zadataka

//     if (isOdd(element)) {
//       suma += element;
//     }
//   }

//   //   return suma;
//   console.log(suma);
// }
// sumOfOdd([1, 2, 4, 6, 8, 3, -3, -5]);

//12.zadatak
// function calculateAppearance(str) {
//   var brojac = 0;
//   for (var i = 0; i < str.length; i++) {
//     var element = str[i];
//     if (element === "a" || element === "A") {
//       //ili .toUpperCase() === "A" ili .toLowerCase() === "a"
//       brojac++;
//     }
//   }
//   return brojac;
// }
// console.log(calculateAppearance("mAartinaaA"));

//13.zadatak
// function concatenateString(str, broj) {
//   var konkateniranString = "";

//   for (var i = 0; i < broj; i++) {
//     konkateniranString += str;
//   }

//   return konkateniranString;
// }
// console.log(concatenateString("abc", 4));

//14.zadatak (kvadrat sa zvezdicama)
// function printPattern(n) {
//   var pattern = "";
//   for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; j++) {
//       if (
//         i === 0 ||
//         j === 0 ||
//         i === n - 1 ||
//         j === n - 1 ||
//         i === j || //dijagonala
//         i === n - j - 1 //suprotna dijagonala
//       ) {
//         pattern += "*\t"; // \t ---> escape character, odvaja u redu jedno od drugog (razmak prakticno) ili "* " zvezdica sa space-om
//       } else {
//         pattern += "\t";
//       }
//     }
//     pattern += "\n"; // novi red
//   }
//   return pattern;
// }
// console.log(printPattern(5));

//15.zadatak
// function printPattern(x, y, z) {
//   var pattern = "";

//   for (var i = 0; i < x; i++) {
//     pattern += "*\t";
//   }
//   pattern += "\n";
//   for (var i = 0; i < y; i++) {
//     pattern += "*\t";
//   }
//   pattern += "\n";
//   for (var i = 0; i < z; i++) {
//     pattern += "*\t";
//   }

//   return pattern;
// }
// console.log(printPattern(3, 5, 7)); //moze da se uradi i na drugi nacin

//zadatak 1 (exercise-5)
// var niz = [3, 500, 12, 149, 53, 414, 1, 19];
// var min = niz[0];
// var max = niz[0];
// var indexMin = 0;
// var indexMax = 0;

// for (var j = 0; j < niz.length; j++) {
//   if (niz[j] > max) {
//     max = niz[j];
//     indexMax = j;
//   }
//   if (niz[j] < min) {
//     min = niz[j];
//     indexMin = j;
//   }
// }

//2. zadatak (exercise-5)
// var a = [3, 500, -10, 149, 53, 414, 1, 19];
// var noviNiz = [];

// for (var i = 0; i < a.length; i++) {
//   var element = a[i];
//   noviNiz[i] = element / 2 + 5;

//   if (noviNiz[i] == 0) {
//     noviNiz[i] = 20;
//   }
// }
// console.log(noviNiz);

//obrnut string zadatak
// var reversed = "";
// var a = "Belgrade Institute of Technology";
// for (var i = a.length - 1; i >= 0; i--) {
//   reversed += a[i];
// }
// console.log(reversed);

//1.zadatak(exercise-3)
// function insertString(inputString, inputWord, position) {
//   if (typeof position == "undefined") {
//     position = 0;
//   }
//   if (typeof inputWord == "undefined") {
//     inputWord = "";
//   }
//   return (
//     inputString.slice(0, position) + inputWord + inputString.slice(position)
//   );
// }

// console.log(insertString("My random string", "JS ", 10));

//1.zadatak(exercise-3)bez slice-a
// function UbaciString(string, ubaciString, pozicija) {
//   var novStringArray = [];
//   var finalString = "";
//   for (var i = 0; i < string.length; i++) {
//     novStringArray[i] = string[i];
//   }
//   for (var i = 0; i < novStringArray.length; i++) {
//     if (i === pozicija) {
//       finalString += ubaciString;
//     }
//     finalString += novStringArray[i];
//   }
//   return finalString;
// }
// console.log(UbaciString("Ovo je string", "Ubacen string ", 7));
//2.zadatak(exercise-3)
// function arrayIntoString(array) {
//   var result = "";
//moze i u if-u samo (array[i]) ---> result+=array[i]
//   for (var i = 0; i < array.length; i++) {
//     if (
//       array[i] === undefined ||
//       array[i] === null ||
//       array[i] !== array[i] ||
//       array[i] === Infinity
//     ) {
//     } else {
//       result += array[i];
//     }
//   }
//   return result;
// }
// console.log(arrayIntoString([NaN, 0, 15, false, 14, 13, undefined, 11]));

//3.zadatak(exercise-3)
// function falsyFilter(array) {
//   var result = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i]) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }
// console.log(falsyFilter([1, 2, NaN, "", 5, 6, undefined, 7]));

//4.zadatak (exercise-3)
// function reverseNumber(input) {
//   var reversed = "";

//   for (var i = input.length - 1; i >= 0; i--) {
//     reversed += input[i];
//   }
//   return reversed;
// }
// console.log(reverseNumber("0123456789"));

//4. zadatak (exercise-3) drugi nacin
// function reverseNum(number) {
//   var strNumber = number + "";
//   var reverseStrNumber = "";
//   for (var i = strNumber.length - 1; i >= 0; i--) {
//     reverseStrNumber += strNumber[i];
//   }
//   return reverseStrNumber * 1;
// }
// console.log(reverseNum(1234));

//10. zadatak (exercise-3)
// function numOfAppearances(array, input) {
//   var n = 0;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] == input) {
//       n++;
//     }
//   }
//   return n;
// }
// console.log(numOfAppearances([3, "a", "a", "a", 7, 5, 4, 4, 3, "a"], "a"));

//5.zadatak(exercise-3)
// function lastElement(array, numOfLastElements) {
//   if (numOfLastElements == null) {
//     return array[array.length - 1];
//   }
//   return array.slice(array.length - numOfLastElements);
// }
// console.log(lastElement([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

//1.zadatak(exercise-4)
// function arrayCheck(array, n) {
//   var found = false;
//   for (var i = 0; i < array.length; i++) {
//     var element = array[i];

//     if (element === n) {
//       found = true;
//       console.log("yes");
//       break;
//     }
//   }
//   //   found ? console.log("yes") : console.log("no");
//   if (found == false) {
//     console.log("no");
//   }
//   //   } else {
//   //     console.log("no");
//   //   }
// }
// arrayCheck([1, 2, 3, 4, 5], 10);

//1.zadatak(exercise-4)drugi nacin
// function isMember(array, x) {
//   var result;
//   for (i = 0; i < array.length; i++) {
//     if (x === array[i]) {
//       result = "yes";
//       return result;
//     } else {
//       result = "no";
//     }
//   }
//   return result;
// }
// console.log(isMember([1, 2, 3], 5));

//2.zadatak (exercise-4)
// function posElement(array) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       array[i] = array[i] * 2;
//     }
//   }
//   return array;
// }
// console.log(posElement([1, 2, -1, 3, -2, 5]));

//6.zadatak (exercise-4)
// function isSymmetric(niz) {
//   var numSymmetric = 0;
//   var noviNiz = [];
//   for (var i = niz.length - 1; i >= 0; i--) {
//     noviNiz[niz.length] = niz[i];
//   }
//   for (i = 0; i < niz.length; i++) {
//     element = niz[i];
//     if (noviNiz[i] !== element) return "niz nije simetrican";
//     numSymmetric++;
//   }

//   if (numSymmetric === niz.length) return "niz je simetrican";
// }
// console.log(isSymmetric([2, 4, -2, 7, -2, 4, 2]));

//6.zadatak (exercise-4) drugi nacin
// function symmetric(array) {
//   var j = array.length - 1;
//   var result = "Symmetric";
//   var brojIzvrsavanja;
//   if (array.length % 2 === 0) {
//     brojIzvrsavanja = array.length / 2;
//   } else {
//     brojIzvrsavanja = array.length / 2 - 0.5;
//   }

//   for (var i = 0; i < array.length / 2; i++) {
//     console.log(i);
//     if (array[i] !== array[j]) {
//       result = "Not Symmetric";
//       break;
//     }
//     j--;
//   }
//   return result;
// }
// var niz = [3, 2, 1, 0, 1, 2, 3];
// console.log(symmetric(niz));

//malo tezi zadaci sa slack-a
// var arr = [1, 2, 3, 4, 2, 2];

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr));

//7.zadatak(exercise-4)

// var niz = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];

// function spojSlova(array) {
//   var str = "";
//   for (var i = 0; i < array.length; i++) {
//     if (typeof array[i] !== "string") {
//       continue;
//     }
//     var rec = array[i];
//     if (rec.length > 1) {
//       str = str + rec[0] + rec[1];
//     }
//   }
//   return str;
// }
// console.log(spojSlova(niz));

//11.zadatak
// function jePalindrom(str) {
//   var j = str.length - 1;
//   for (var i = 0; i < str.length / 2; i++) {
//     if (str[i] != str[j]) {
//       return false;
//     }
//     j--;
//   }
//   return true;
// }

// var str1 = "eye";
// var str2 = "Geek";
// var str3 = "a nut for a jar of tuna";

// console.log(jePalindrom(str1));
// console.log(jePalindrom(str2));
// console.log(jePalindrom(str3));

//simetrican zadatak
// var a = [2, 4, -2, 7, 5, -2, 4, 2];
// var isSymmetric = true;
// for (
//   var i = 0, j = a.length - 1;
//   i < a.length / 2, j > a.length / 2 - 1;
//   i++, j--
// ) {
//   if (a[i] !== a[j]) {
//     isSymmetric = false;
//     break;
//   }
// }
// console.log(isSymmetric);
