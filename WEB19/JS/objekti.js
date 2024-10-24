var person = {
  name: "Djordje", //property -> (key: value)
  surname: "Stojilkovic",
  age: 27,
  height: 191,
  siblings: ["Veljko"],
  married: false,
  hobbies: ["padel", "chess", "snowboarding"],
  sayName: function () {
    //get metoda
    console.log(person.name); //moze i this umesto person
  },
  changeName: function (changedName) {
    //set metoda
    person.name = changedName;
  },
};
// console.log(person.hobbies);

person.sayName();
person.changeName("Stefan");
person.sayName();
console.log(person.name);

person.name = "Legolas";
person.sayName();

person.newProperty = "Novi property";
console.log(person);
