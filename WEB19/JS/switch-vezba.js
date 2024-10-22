// // 1. Zadatak
// var number = 10;
// var dayinWeek = "";

// switch (number) {
//   case 1:
//     dayinWeek = "Monday";
//     console.log(dayinWeek);
//     break;
//   case 2:
//     dayinWeek = "Tuesday";
//     console.log(dayinWeek);
//     break;
//   case 3:
//     dayinWeek = "Wednesday";
//     console.log(dayinWeek);
//     break;
//   case 4:
//     dayinWeek = "Thursday";
//     console.log(dayinWeek);
//     break;
//   case 5:
//     dayinWeek = "Friday";
//     console.log(dayinWeek);
//     break;
//   case 6:
//     dayinWeek = "Saturday";
//     console.log(dayinWeek);
//     break;
//   case 7:
//     dayinWeek = "Sunday";
//     console.log(dayinWeek);
//     break;
//   default:
//     console.log("nema resenja");
// }

//4. Zadatak

// var number = 8;
// var month = "";

// switch (number) {
//   case 1:
//     month = "january";
//     console.log(month);
//     break;
//   case 2:
//     month = "february";
//     console.log(month);
//     break;
//   case 3:
//     month = "march";
//     console.log(month);
//     break;
//   case 4:
//     month = "april";
//     console.log(month);
//     break;
//   case 5:
//     month = "may";
//     console.log(month);
//     break;
//   case 6:
//     month = "june";
//     console.log(month);
//     break;
//   case 7:
//     month = "july";
//     console.log(month);
//     break;
//   case 8:
//     month = "august";
//     console.log(month);
//     break;
//   case 9:
//     month = "september";
//     console.log(month);
//     break;
//   case 10:
//     month = "october";
//     console.log(month);
//     break;
//   case 11:
//     month = "november";
//     console.log(month);
//     break;
//   case 12:
//     month = "december";
//     console.log(month);
//     break;
//   default:
//     console.log("input should be a number between 1-12");
// }

// var input = "Nis";
// var output = "";

// switch (input) {
//   case "Belgrade":
//   case "Leskovac":
//   case "Krusevac":
//     output = "Serbia";
//     console.log("This is " + output);
//     break;

//   case "Kotor":
//   case "Podgorica":
//     output = "Montenegro";
//     console.log("This is " + output);
//     break;

//   case "Paris":
//     output = "France";
//     console.log("This is " + output);
//     break;

//   case "Barcelona":
//   case "Madrid":
//   case "Sevilla":
//   case "Valencia":
//     output = "Spain";
//     console.log("This is " + output);
//     break;
//   case "Rome":
//   case "Milano":
//   case "Genova":
//   case "Padova":
//     output = "Italy";
//     console.log("This is " + output);
//     break;

//   default:
//     console.log("Please choose a different city");
// }

var a = 2;
var b = 0;
var operacija = "/";
var result = "";

switch (operacija) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    if (b !== 0) {
      result = a / b;
    } else {
      console.log("Broj ne sme biti 0");
    }
}
console.log(result);
