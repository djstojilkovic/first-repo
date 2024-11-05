"use strict";
(function () {
  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function () {
      return this.name + " " + this.surname;
    };
  }
  function Seat(number, category = "e") {
    if (number == undefined) {
      this.number = Math.floor(Math.random() * (100 - 10 + 1) + 10);
    } else {
      this.number = number;
    }
    this.category = category;
    this.getData = function () {
      return this.number + ", " + this.category;
    };
  }
  function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
    this.getData = function () {
      return this.seat.getData().toUpperCase() + ", " + this.person.getData();
    };
  }
  function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.passengerList = [];
    this.getData = function () {
      var flightData = this.date + ", " + this.relation + "\t";
      this.passengerList.forEach((passenger) => {
        flightData += "\n" + "\t" + "\t" + "\t" + passenger.getData();
      });
      return flightData;
    };
    this.addPassenger = function (passenger) {
      this.passengerList.push(passenger);
    };
  }
  function Airport() {
    this.name = "Nikola Tesla";
    this.flightList = [];
    this.totalPassengers = 0;
    this.addFlight = function (flight) {
      this.flightList.push(flight);
      this.totalPassengers += flight.passengerList.length;
    };
    this.getData = function () {
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
    };
  }

  //Funkcija za dodavanje Flight-a (isto sto i var flight1=new Flight("Belgrade-Paris","2017-10-25"))

  //   function createFlight(relation, date) {
  //     return new Flight(relation, date);
  //   }

  //Funkcija za dodavanje Passengera

  //   function createPassenger(name, surname, seatNumber, category) {
  //     var person = new Person(name, surname);
  //     var seat = new Seat(seatNumber, category);
  //     return new Passenger(person, seat);
  //   }

  //Adding properties to Person
  var person1 = new Person("John", "Snow");
  var person2 = new Person("Djordje", "Stojilkovic");
  var person3 = new Person("Pera", "Peric");
  var person4 = new Person("Laza", "Lazic");
  //Adding properties to Seat
  var seat1 = new Seat(12, "b");
  var seat2 = new Seat(15, "e");
  var seat3 = new Seat(27, "e");
  var seat4 = new Seat(35, "b");
  //Adding properties to Passenger
  var passenger1 = new Passenger(person1, seat1);
  var passenger2 = new Passenger(person2, seat2);
  var passenger3 = new Passenger(person3, seat3);
  var passenger4 = new Passenger(person4, seat4);
  //Adding properties to Flight
  var flight1 = new Flight("Belgrade-Paris", "2017-10-25");
  var flight2 = new Flight("Barcelona-Belgrade", "2017-11-11");
  //Adding properties to Airport
  var airport1 = new Airport();
  //Adding items to Flight
  flight1.addPassenger(passenger1);
  flight1.addPassenger(passenger2);
  flight2.addPassenger(passenger3);
  flight2.addPassenger(passenger4);
  //Adding items to Airport
  airport1.addFlight(flight1);
  airport1.addFlight(flight2);
  //Console logging
  console.log(airport1.getData());
})();
