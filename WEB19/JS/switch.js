var uslov = 2;
var finalResult = ""; //Ako ne znamo vrednost, najbolje je staviti prazan string

switch (uslov) {
  case 1:
    finalResult = "Rezultat je 1";
    console.log(finalResult);
    break;

  case 2:
    finalResult = "Rezultat je 2";
    console.log(finalResult);

  case "martin":
    finalResult = "Rezultat je martin?";
    console.log(finalResult);

  default:
    finalResult = "Nema rezultata";
    console.log(finalResult);
}

var a = "1";
var result = "";

switch (a) {
  case 1:
    result = "Number 1";
    console.log(result);
    break;

  case "1":
    result = "String 1";
    console.log(result);
    break;

  case 2:
    result = "Nesto";
    console.log(result);
}
