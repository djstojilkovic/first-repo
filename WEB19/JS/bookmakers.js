"use strict";

(function () {
  var Continent = {
    ASIA: "AS",
    EUROPE: "EU",
    AFRICA: "AF",
    NORTH_AMERICA: "NA",
    SOUTH_AMERICA: "SA",
    AUSTRALIA: "AU",
  };
  function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
  }
  function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.getInfo = function () {
      return (
        this.name + ", " + this.surname + ", " + formattedDate(this.dateOfBirth)
      );
    };
  }
  function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
    this.getData = function () {
      return `${this.country.name.substring(0, 2).toUpperCase()}, ${
        this.country.odds * this.betAmount.toFixed(2)
      } eur, ${this.person.name} ${this.person.surname}, ${calculateAge(
        this.person.dateOfBirth
      )}`;
      // SR, 1050.00 eur, Pera Peric, 29 years
    };
  }
  function Address(country, city, postalCode, street, streetNumber) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.streetNumber = streetNumber;
    this.formattedAddress = function () {
      return `${this.street} ${this.streetNumber}, ${this.postalCode} ${
        this.city
      }, ${this.country.substring(0, 2).toUpperCase()} `;
      //Nemanjina 4, 11000 Beograd, SR
    };
  }
  function BettingPlace(address) {
    this.address = address;
    this.players = [];
    this.formattedBets = function () {
      var sum = 0;
      this.players.forEach(function (player) {
        sum += player.betAmount;
      });
      return `${this.address.street}, ${this.address.postalCode} ${this.address.city}, sum of all bets: ${sum}eur`;
    };
    this.addPlayer = function (player) {
      this.players.push(player);
    };
    // Nemanjina, 11000 Belgrade, sum of all bets: 50000eur
  }
  function BettingHouse(competition) {
    this.competition = competition;
    this.bettingPlaces = [];
    this.numberOfPlayers = function () {
      var sum = 0;
      this.bettingPlaces.forEach(function (bp) {
        sum += bp.players.length;
      });
      return sum;
    };
    this.addBettingPlace = function (bp) {
      this.bettingPlaces.push(bp);
    };
    this.getData = function () {
      var numberOfBets = 0;
      this.bettingPlaces.forEach(function (bettingPlace) {
        numberOfBets += bettingPlace.players.length;
      });
      return `${competition}, ${
        this.bettingPlaces.length
      } betting places, ${numberOfBets} bets
            ${this.bettingPlaces.map(function (bp) {
              return (
                "\n\t\t" +
                bp.formattedBets() +
                bp.players.map(function (player) {
                  return "\n\t\t\t\t" + player.getData();
                })
              );
            })}
            `;
    };
  }
  var adresa = new Address("Srbija", "Beograd", 11000, "Kneza Milosa", 82);
  console.log(adresa.formattedAddress());
  var country = new Country("Srbija", 0.3, Continent.EUROPE);
  function createPlayer(name, surname, DoB, betAmount, country) {
    var person = new Person(name, surname, DoB);
    return new Player(person, betAmount, country);
  }
  function createBettingPlace(country, city, postalCode, street, streetNumber) {
    return new BettingPlace(
      new Address(country, city, postalCode, street, streetNumber)
    );
  }
  //Create four players with random data. Create two betting places. Add created players as you wish
  //to Betting places. Add betting places to the betting house.
  var p1 = createPlayer(
    "Stefan",
    "Milovanovic",
    new Date("4.5.1999."),
    1000,
    country
  );
  var p2 = createPlayer(
    "Stefan",
    "Suvakovic",
    new Date("4.5.1995."),
    2000,
    country
  );
  var p3 = createPlayer(
    "Stefan",
    "Jakovic",
    new Date("4.5.1994."),
    2000,
    country
  );
  var p4 = createPlayer(
    "Stefan",
    "Dailoski",
    new Date("8.24.1992."),
    5000,
    country
  );
  var bp1 = createBettingPlace(country, "Beograd", 11000, "Kneza Milosa", 82);
  var bp2 = createBettingPlace(
    country,
    "Novi Sad",
    11000,
    "Bulevar Oslobodjenja",
    82
  );
  bp1.addPlayer(p1);
  bp1.addPlayer(p2);
  bp1.addPlayer(p3);
  bp2.addPlayer(p4);
  bp2.addPlayer(p2);
  bp2.addPlayer(p3);
  var bettingHouse = new BettingHouse("Football World Cup Winner");
  bettingHouse.addBettingPlace(bp1);
  bettingHouse.addBettingPlace(bp2);
  console.log(bettingHouse.getData());
})();

function formattedDate(date) {
  var fullYear = date.getFullYear();
  var str = fullYear.toString().substring(2, 4);
  var day = date.getDate();
  var dayStr = "";
  if (day <= 9) {
    dayStr = dayStr + "0" + day;
  } else {
    dayStr = day;
  }
  return `${dayStr}.${date.getMonth() + 1}.${str}`;
}

function calculateAge(date) {
  console.log(date);

  var currentYear = new Date().getFullYear();
  var yearOfBirth = date.getFullYear();
  return currentYear - yearOfBirth + " years";
}
