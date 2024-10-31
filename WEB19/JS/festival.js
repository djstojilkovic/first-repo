"use strict";
function Genre(name) {
  this.name = name;
  this.getData = function () {
    return name.charAt(0) + name.toUpperCase().charAt(name.length - 1);
  };
}

function Movie(title, genre, lengthOfMovie) {
  this.title = title;
  this.genre = genre;
  this.lengthOfMovie = lengthOfMovie;
  this.getData = function () {
    return this.title + ", " + this.lengthOfMovie + ", " + this.genre;
  };
}

function Program(date) {
  this.date = date;
  this.movies = [];
  this.totalLength = 0;
  this.addMovie = function (movie) {
    this.movies.push(movie);
    this.totalLength += movie.lengthOfMovie;
  };
  this.getData = function () {
    var programData =
      this.date +
      ", " +
      "program duration" +
      " " +
      this.totalLength +
      "min" +
      "\t";
    this.movies.forEach((movie) => {
      programData += "\n" + "\t" + movie.getData();
    });
    return programData;
  };
}

function Festival(name, numOfMoviesAllPrograms) {
  this.name = name;
  this.arrayOfPrograms = [];
  this.numOfMoviesAllPrograms = numOfMoviesAllPrograms;
  this.addProgram = function (program) {
    this.arrayOfPrograms.push(program);
  };
}
//Adding properties to Genre
var genre = new Genre("Action");
var genre2 = new Genre("Drama");
var genre3 = new Genre("Comedy");

//Adding properties to Movie
var movie = new Movie("The Shawshank Redemption", genre.getData(), 130);
var movie2 = new Movie("The Godfather", genre2.getData(), 180);
var movie3 = new Movie("The Godfather 2", genre2.getData(), 160);
var movie4 = new Movie("The Hangover", genre3.getData(), 100);

//Adding properties to Program and adding movies to Program
var program1 = new Program("31.10.2024.");
var program2 = new Program("01.11.2024.");
program1.addMovie(movie);
program1.addMovie(movie2);
program1.addMovie(movie3);
program1.addMovie(movie4);
program2.addMovie(movie);
program2.addMovie(movie3);

//Main execution IIFE function
(function mainExecution(inputArray) {
  //   console.log("Hi");
  inputArray.forEach((element) => {
    console.log(element.getData());
  });
})([program1, program2]);
