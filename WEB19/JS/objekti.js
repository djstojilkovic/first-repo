// var person = {
//   name: "Djordje", //property -> (key: value)
//   surname: "Stojilkovic",
//   age: 27,
//   height: 191,
//   siblings: ["Veljko"],
//   married: false,
//   hobbies: ["padel", "chess", "snowboarding"],
//   sayName: function () {
//     //get metoda
//     console.log(person.name); //moze i this umesto person
//   },
//   changeName: function (changedName) {
//     //set metoda
//     person.name = changedName;
//   },
// };
// // console.log(person.hobbies);

// person.sayName();
// person.changeName("Stefan");
// person.sayName();
// console.log(person.name);

// person.name = "Legolas";
// person.sayName();

// person.newProperty = "Novi property";
// console.log(person);

// var a = 0;
// var b = a;
// // console.log(a, b);
// a = 1;
// // console.log(a, b);

// var c = { name: "Ivo Andric" };
// var d = c;
// // console.log(c, d);

// c.name = "Mesa Selimovic";
// // console.log(d);

// d = { name: "Mesa Selimovic" };
// // console.log(c, d);
// console.log(d === c); //vraca false iako su iste vrednosti (Mesa Selimovic) jer imaju druge ref vrednosti u memoriji
// console.log(JSON.stringify(c) === JSON.stringify(d)); // proverava string vrednosti od c i d i vratice true

// function changeName(inputObject, nameValue) {
//   inputObject.name = nameValue;
// }

// changeName(c, "Ahmed Nurudin");
// // console.log(c);

// function changeNumber(inputParam) {
//   inputParam = 3;
//   return inputParam;
// }
// a = changeNumber(); //bez "a=" vraca 1, jer je primitivan tip podatka i definisan je gore "a=1"
// // console.log(a);

var hero = {
  name: "Leonardo",
  kind: "Turtle",
  occupation: "Ninja",
};

// // console.log(hero.name);
// // console.log(hero["name"]);

// function getPropertyValue(inputObject, propertyName) {
//   return inputObject[propertyName];
// }
// // console.log(getPropertyValue(hero, "occupation"));
// // console.log(getPropertyValue(c, "name"));

// var writer = {
//   name: "Ivo Andric",
//   status: "Nobelovac",
//   book: {
//     name: "Na Drini cuprija", //agregacija: objekat "book" u objektu writer
//     releaseYear: 1948,
//   },
//   getBook: function () {
//     return {
//       name: "Na Drini cuprija",
//       releaseYear: 1948,
//     };
//   },
// };

// writer.yearOfBirth = 1892; //dodaje novi property, moze i writer["yearOfBirth"] = 1892, mozemo i metode(fje) da ubacujemo ovako writer.getBook = function()
// // console.log(writer);
// // console.log(writer.getBook());

// delete writer.status;
// console.log(writer);

//Konstruktori

function Hero(name, occupation = "Ninja") {
  //occupation - ninja je defaultna vrednost ako je ovako upisemo
  this.name = name;
  this.occupation = occupation;
  this.whoAreYou = function () {
    return `I am ${this.name} and my occupation is ${this.occupation}`;
  };
  // this.occupation = "Ninja";
}

var hero1 = new Hero("Leonardo");
var hero2 = new Hero("Donatello");
console.log(hero1.whoAreYou());
console.log(hero2.whoAreYou());

console.log(hero1 instanceof Hero);
console.log(hero1 instanceof Object);

console.log(hero instanceof Hero); // hero iz prethodnog primera, gde nije kreiran objekat kao konstruktor
console.log(hero instanceof Object); // printa true jer je deo objekta

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  this.sayName = function () {
    return this.name;
  };
  this.changeName = function (changedName) {
    this.name = changedName;
  };
}
var martin = new Person("m", "p");
console.log(martin);
console.log(martin.sayName());
martin.changeName("martin");
console.log(martin.name);
console.log(martin);

// var niz = new Array(2, 4, 12, 2, "s");
// console.log(niz);

// var obj = new Object("martin");
// console.log(obj);

// console.log(Number("2"));
// console.log(String(123));
// console.log(Boolean(0));

//kalkulator zadatak

function Calculator(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.add = function () {
    return this.x + this.y + this.z;
  };
  this.subtract = function () {
    return Math.abs(this.x - this.y - this.z);
  };
  this.multiply = function () {
    return this.x * this.y * this.z;
  };
  this.divide = function () {
    if (this.x && this.y && this.z) {
      return this.x / this.y / this.z;
    }
    return "Division with 0 is not possible!";
  };
}

var calculator = new Calculator(1, 2, 3);
console.log(calculator);
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());

//built in objects

var obj = new Object();
Object.defineProperty(obj, "x", { value: 1, writable: true, enumerable: true });
console.log(obj);
console.log(obj.hasOwnProperty("x")); //da li postoji odredjeni property
console.log(Object.isExtensible(obj)); //da li moze obj da se prosiruje

Object.preventExtensions(obj); //sprecava dodavanje u objekat
console.log(Object.isExtensible(obj)); // printa false jer smo preventovali extensions
obj.a = "adfa"; //pokusavamo da dodamo property a sa value "adfa"
console.log(obj); //kada isprinta, vidimo da nije dodao nista jer smo preventovali extensions

//built in nizovi
var array = [1, 2, 3, 4, 5, 6, 7]; //2 nacina za pravljenje niza
var array2 = new Array(1, 3, 2, 4);
var array3 = new Array(5); //pravi prazan niz sa 5 elemenata

array2.sort();
console.log(array2);

array.push(12); //dodaje na kraj
console.log(array);
array.pop(); //brise s kraja
console.log(array);

console.log(array.join(",")); //vraca string sa value od elemenata niza
console.log(array.slice(1, 4)); //od indexa 1 do 4 vraca elemente

var array4 = array.splice(1, 4, 15, 10, 20); //sve nakon indexa "4", dodajemo u niz umesto izbacenih elemenata
console.log(array);
console.log(array4);

//stringovi
var potatoString = "Potato";
console.log(potatoString[1]);
console.log(potatoString.charAt(1));
console.log(potatoString.indexOf("a")); //vraca na kom indexu je "a"
console.log(potatoString.indexOf("b")); //vraca -1 kad karakter ne postoji

var subString = potatoString.substring(1, 4); //vraca ono sto je skinuto
console.log(subString);
console.log(potatoString.slice(1, 4)); //skida prvi i poslednji i vraca ono sto je iseceno
potatoString = "Potato head dsadas";

var splitString = potatoString.split(" ");
console.log(splitString);

var now = new Date("");
console.log(now);
console.log(now.getUTCHours());
