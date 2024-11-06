class Person {
  //isto sto i konstruktorske fje
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  //pisanje metoda
  sayHi() {
    console.log("Hi");
  }
  getInfo() {
    return "Hi, my name is " + this.name;
  }
}

class Programmer extends Person {
  constructor(name, surname, age, experience, language) {
    super(name, surname, age);
    this.experience = experience;
    this.language = language;
  }
  getInfo() {
    var info = super.getInfo();
    return `${info} ${this.language}`;
  }

  writeCode() {
    return `Typing in ${this.language}`;
  }
}

class Tester extends Person {
  constructor(name, surname, age, position, experience) {
    super(name, surname, age);
    this.position = position;
    this.experience = experience;
  }

  test() {
    return `Bug detected by ${this.name} ${this.surname}`;
  }
}

var programmer = new Programmer("Pera", "Peric", 25, 3, "Javascript");
var tester = new Tester("Laza", "Lazic", 26, "QA", 2);

console.log(programmer.getInfo());
console.log(tester.getInfo());

class BackendProgrammer extends Programmer {
  constructor(name, surname, age, experience, language) {
    super(name, surname, age, experience, language);
  }
}

var bEProgrammer = new BackendProgrammer("Pera", "Peric", 30, 5, "C#");
console.log(bEProgrammer.getInfo()); //nasledjuje getInfo metodu iz klase Programmer, cak iako je nismo naveli u klasi BackendProgrammer
