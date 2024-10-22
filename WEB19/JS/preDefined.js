console.log(parseInt("asdasd 123")); //Pretvara u integer

console.log(parseInt("08")); //Pretvara u integer

console.log(parseFloat("242.54")); //Pretvara u integer sa decimalnim ostatkom

console.log(Math.round(23.55)); // Zaokruzuje na celobrojnu vrednost

console.log(isNaN("asdasd")); //Proveriti da li je NaN (Not a number)

console.log("7".toString(2)); //Convertuje u string

console.log((7).toString(2));

var a = "asda";
var b = "sdasdsad";
console.log(`${a} ${b}`);
console.log(a + " " + b);
console.log(a.concat(" " + b));

console.log(isFinite(Infinity)); // Da li je broj predefinisan

let x = 10;
let y = 3;
let text = "x*y";
let result = eval(text);
console.log(result);

console.log(Number("5.65")); //Pretvara u broj

console.log(Number.isInteger("34534")); //Proverava da li je integer (celobrojne vrednosti)
