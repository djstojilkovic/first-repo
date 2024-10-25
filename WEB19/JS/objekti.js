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

var c = { name: "Ivo Andric" };
var d = c;
// console.log(c, d);

c.name = "Mesa Selimovic";
// console.log(d);

d = { name: "Mesa Selimovic" };
// console.log(c, d);
console.log(d === c); //vraca false iako su iste vrednosti (Mesa Selimovic) jer imaju druge ref vrednosti u memoriji
console.log(JSON.stringify(c) === JSON.stringify(d)); // proverava string vrednosti od c i d i vratice true

function changeName(inputObject, nameValue) {
  inputObject.name = nameValue;
}

changeName(c, "Ahmed Nurudin");
// console.log(c);

function changeNumber(inputParam) {
  inputParam = 3;
  return inputParam;
}
a = changeNumber(); //bez "a=" vraca 1, jer je primitivan tip podatka i definisan je gore "a=1"
// console.log(a);

var hero = {
  name: "Leonardo",
  kind: "Turtle",
  occupation: "Ninja",
};

// console.log(hero.name);
// console.log(hero["name"]);

function getPropertyValue(inputObject, propertyName) {
  return inputObject[propertyName];
}
// console.log(getPropertyValue(hero, "occupation"));
// console.log(getPropertyValue(c, "name"));

var writer = {
  name: "Ivo Andric",
  status: "Nobelovac",
  book: {
    name: "Na Drini cuprija", //agregacija: objekat "book" u objektu writer
    releaseYear: 1948,
  },
  getBook: function () {
    return {
      name: "Na Drini cuprija",
      releaseYear: 1948,
    };
  },
};

writer.yearOfBirth = 1892; //dodaje novi property, moze i writer["yearOfBirth"] = 1892, mozemo i metode(fje) da ubacujemo ovako writer.getBook = function()
// console.log(writer);
// console.log(writer.getBook());

delete writer.status;
// console.log(writer);
