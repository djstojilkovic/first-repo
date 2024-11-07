//1.zadatak
// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   getFullName() {
//     return this.name + " " + this.surname;
//   }
// }

// class Employee extends Person {
//   constructor(name, surname, job, salary) {
//     super(name, surname);
//     this.job = job;
//     this.salary = salary;
//   }
//   getData() {
//     return this.name + ", " + this.surname + ", " + this.salary;
//   }
//   getSalary() {
//     return this.salary;
//   }
//   increaseSalary() {
//     var increasedSalary = this.salary * (10 / 100) + this.salary;
//     return increasedSalary;
//   }
// }

// class Developer extends Employee {
//   constructor(name, surname, job, salary, specialization) {
//     super(name, surname, job, salary);
//     this.specialization = specialization;
//   }
//   getSpecialization() {
//     return this.specialization;
//   }
// }

// class Manager extends Employee {
//   constructor(name, surname, job, salary, department) {
//     super(name, surname, job, salary);
//     this.department = department;
//   }
//   getDepartment() {
//     return this.department;
//   }
//   changeDepartment(changedDepartment) {
//     this.department = changedDepartment;
//     return changedDepartment;
//   }
// }

// var person1 = new Person("Djordje", "Stojilkovic");
// var employee1 = new Employee("Djordje", "Stojilkovic", "Developer", 1000);
// var developer1 = new Developer(
//   "Djordje",
//   "Stojilkovic",
//   "Developer",
//   1000,
//   "Frontend"
// );
// var manager1 = new Manager("Djordje", "Stojilkovic", "Developer", 1000, "IT");
// console.log(person1.getFullName());
// console.log(employee1.getData());
// console.log(employee1.getSalary());
// console.log(employee1.increaseSalary());
// console.log(developer1.getSpecialization());
// console.log(manager1.getDepartment());
// console.log(manager1.changeDepartment("HR"));

// //2.zadatak (potrebna klasa Application, koju nasledjuju WebApp i MobileApp (ne mogu da se nasledjuju medjusobno))
// class Application {
//   constructor(name, licence, stars) {
//     this.name = name;
//     this.licence = licence;
//     this.stars = stars;
//   }
//   isCCLicence() {
//     if (this.licence == "CC") {
//       return "It is CC";
//     } else return "It is not CC";
//   }
//   like() {
//     var increasedStars = (this.stars += "*");
//     return `${this.name}, ${this.url}, ${this.technologies}, ${this.licence}, ${increasedStars}`;
//   }
//   showStars() {
//     var counter = 0;
//     for (var i = 0; i < this.stars.length; i++) {
//       counter++;
//     }
//     return "Number of stars: " + counter;
//   }
// }

// class WebApp extends Application {
//   constructor(name, url, technologies, licence, stars) {
//     super(name, licence, stars);
//     this.name = name;
//     this.url = url;
//     this.technologies = technologies;
//     this.licence = licence;
//     this.stars = stars;
//   }
//   getData() {
//     return `${this.name}, ${this.url}, ${this.technologies}, ${this.licence}, ${this.stars}`;
//   }
//   reactBased() {
//     if (this.technologies == "React") {
//       return "Uses React";
//     } else {
//       return "Does not use React";
//     }
//   }
// }

// class MobileApp extends Application {
//   constructor(name, platforms, licence, stars) {
//     super(name, licence, stars);
//     this.name = name;
//     this.platforms = platforms;
//     this.licence = licence;
//     this.stars = stars;
//   }
//   getData() {
//     return `${this.name}, ${this.platforms}, ${this.licence}, ${this.stars}`;
//   }
//   forAndroid() {
//     if (this.platforms == "Android") {
//       return "It is Android";
//     } else return "It is not Android";
//   }
//   like() {
//     var increasedStars = (this.stars += "*");
//     return `${this.name}, ${this.platforms}, ${this.licence}, ${increasedStars}`;
//   }
// }

// var webApp1 = new WebApp("Facebook", "www.facebook.com", "React", "CC", "****");
// var mobileApp1 = new MobileApp("Instagram", "IOS", "BB", "***");
// console.log(webApp1.getData());
// console.log(webApp1.reactBased());
// console.log(mobileApp1.getData());
// console.log(mobileApp1.forAndroid());
// console.log("===============================");
// //Checking methods for WebApp
// console.log(webApp1.isCCLicence());
// console.log(webApp1.like());
// console.log(webApp1.showStars());
// console.log("===============================");
// //Checking inherited methods from WebApp for MobileApp
// console.log(mobileApp1.isCCLicence());
// console.log(mobileApp1.like());
// console.log(mobileApp1.showStars());

//airport zadatak sa klasama

class Person {
  constructor(name, surname, seatNumber, seatCategory = "e") {
    this.name = name;
    this.surname = surname;
    if (seatNumber == undefined) {
      this.seatNumber = Math.floor(Math.random() * (100 - 10 + 1) + 10);
    } else {
      this.seatNumber = seatNumber;
    }
    this.seatCategory = seatCategory;
  }
  getData() {
    return this.name + " " + this.surname;
  }
  getSeat() {
    return this.seatNumber + ", " + this.seatCategory;
  }
}
// class Seat {
//   constructor(number, category) {
//     this.number = number;
//     this.category = category;
//   }
// }
class Passenger extends Person {
  constructor(name, surname, seatNumber, seatCategory) {
    super(name, surname, seatNumber, seatCategory);
    this.name = name;
    this.surname = surname;
    this.seatNumber = seatNumber;
    this.seatCategory = seatCategory;
  }
  getData() {
    return (
      this.seatNumber +
      ", " +
      this.seatCategory.toUpperCase() +
      ", " +
      this.name +
      " " +
      this.surname
    );
  }
}
class Flight {
  constructor(relation, date) {
    this.relation = relation;
    this.date = date;
    this.passengerList = [];
  }
  getData() {
    var flightData = this.date + ", " + this.relation + "\t";
    this.passengerList.forEach((passenger) => {
      flightData += "\n" + "\t" + "\t" + "\t" + passenger.getData();
    });
    return flightData;
  }
  addPassenger(passenger) {
    this.passengerList.push(passenger);
  }
}
class Airport {
  constructor() {
    this.name = "Nikola Tesla";
    this.flightList = [];
    this.totalPassengers = 0;
  }
  addFlight(flight) {
    this.flightList.push(flight);
    this.totalPassengers += flight.passengerList.length;
  }
  getData() {
    var airportData =
      "Airport: " +
      this.name +
      ", " +
      "total passengers: " +
      this.totalPassengers;
    this.flightList.forEach((flight) => {
      airportData += "\n" + "\t" + flight.getData();
    });
    return airportData;
  }
}
var person1 = new Person("Djordje", "Stojilkovic", 14, "b");
var passenger1 = new Passenger("Blagoje", "Bozic", 20, "e");
var passenger2 = new Passenger("Djordje", "Stojilkovic", 37, "b");
var passenger3 = new Passenger("Veljko", "Stojilkovic", 11, "e");
var passenger4 = new Passenger("Mirko", "Mirkic", 22, "b");
var passenger5 = new Passenger("Laza", "Lazic", 50, "e");
var flight1 = new Flight("Belgrade-Bangkok", "2025-01-15");
var flight2 = new Flight("Belgrade-Paris", "2024-10-11");
var airport = new Airport();
flight1.addPassenger(passenger1);
flight1.addPassenger(passenger2);
flight1.addPassenger(passenger3);
flight2.addPassenger(passenger4);
flight2.addPassenger(passenger5);
airport.addFlight(flight1);
airport.addFlight(flight2);
console.log(airport.getData());
