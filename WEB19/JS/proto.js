// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     sayName() {
//         return this.name;
//     }
// }

// class Employee extends Person {
//     constructor(name, surname, job, salary) {
//         super(name, surname);
//         this.job = job;
//         this.salary = salary;
//     }
// }
// var martin = new Person("martin", "potkonjak");
// var zaposleni = new Employee(martin.name, martin.surname, "programmer", 100);
// console.log(zaposleni.sayName())
// // console.log(martin instanceof Person)

// function Person(name, surname){
//     this.name = name;
//     this.surname = surname;
//     // this.sayName = function(){
//     //     return this.name + 1;
//     // }
// }

// Person.prototype.sayName = function(){
//     return this.name;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// // Object.setPrototypeOf(Employee.prototype, Person.prototype)

// function Employee(name, surname, job, salary){
//     Person.call(this, name, surname)
//     this.job = job;
//     this.salary = salary;
// }

// var martin = new Person("m", "p")
// console.log(martin.sayName())

// var zaposleni = new Employee("m", "p", "pro", 100)
// console.log(zaposleni.sayName())

// zadatak
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

// 1. nasledjivanje -> povezujemo prototipe (Employee -> Person)
Employee.prototype = Object.create(Person.prototype);
// 2. moram da povratim pokazivac na Employee constructor
Employee.prototype.constructor = Employee;

function Employee(name, surname, job, salary) {
  // 3. pozivanje konstruktora od Person (super)
  Person.call(this, name, surname);
  this.job = job;
  this.salary = salary;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

function Developer(name, surname, job, salary, specialization) {
  Employee.call(this, name, surname, job, salary);
  this.specialization = specialization;
}
// Person methods
Person.prototype.getFullName = function () {
  return this.name + this.surname;
};
// Employee methods
Employee.prototype.getData = function () {
  return this.name + this.surname + this.salary;
};
Employee.prototype.increaseSalary = function () {
  this.salary *= 1.1;
  return this.salary;
};
// Developer methods
Developer.prototype.getSpecialization = function () {
  return this.specialization;
};

var osoba = new Person("martin", "potkonjak");
var zaposleni = new Employee("petar", "petrovic", "programmer", 2000);
var developer = new Developer("mitar", "mitrovic", "dev", 5000, "JS");

// console.log(osoba.getFullName())
// console.log(zaposleni.getFullName())
// console.log(developer.getFullName())

console.log(zaposleni.getData());
console.log(developer.getData());

// console.log(zaposleni.increaseSalary())
// console.log(developer.increaseSalary())
