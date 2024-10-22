// 1. Zadatak

// function convert(array){
//     var numbers = []
//     for(i = 0; i < array.length; i++){
//         value = array[i]
//         numbers(numbers.length) = parseFloat(value)
//     }
//     return numbers

// }console.log(convert(['1', '2']));

// 2. Zadatak

// function toString(array) {
//   var together = "";
//   for (i = 0; i < array.length; i++) {
//     var element = array[i];
//     if (element == false) {
//       together += element;
//       continue;
//     }
//     if (!element || element == Infinity) {
//       continue;
//     }
//     together += element;
//   }
//   return together;
// }
// console.log(toString([NaN, 0, 15, false, -22, "", undefined, 47, null]));

// 3. Zadatak

// function filterFalsyValues(array) {
//   var result = [];
//   for (i = 0; i < array.length; i++) {
//     var element = array[i];
//     if (!element || !isFinite(element)) {
//       continue;
//     }

//     result[result.length] = element;
//   }

//   return result;
// }
// console.log(
//   filterFalsyValues([NaN, 0, 15, false, -22, "", undefined, 47, null])
// );

// 4. Zadatak

// function calculateNumber(array){
//     var result = ''
//     for(i=0; i < array.length; i++){
//         element = array[i]

//     }
// }
// 4. Zadatak
// function calculateInteger(array) {
//   var result = 0;
//   for (i = 0; i < array.length; i++) {
//     element = array[i];
//     if (Number.isInteger(element)) {
//       result++;
//     }
//   }
//   return result;
// }
// var niz = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];
// console.log(calculateInteger(niz));

// 5. Zadatak

// function calculateFloat(array) {
//   var result = "";
//   for (i = 0; i < array.length; i++) {
//     element = array[i];
//     if (Number(element) === element && element % 1 !== 0) {
//       result++;
//     }
//   }
//   return result;
// }
// var niz = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];
// console.log(calculateFloat(niz));

var x = 10;
var y = 5;
console.log(x + "y= " + x + y);
