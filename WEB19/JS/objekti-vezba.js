//1.zadatak (exercises-objects intro)

// var favCoffee = {
//   coffeeName: "Macchiato",
//   strength: "Strong",
//   flavour: "Latte",
//   milk: true,
//   sugar: false,
// };
// console.log(favCoffee);
// console.log(favCoffee.coffeeName);

//2. zadatak (exercises-objects intro)

// var favMovie = {
//   title: "Paris, Texas",
//   actors: ["Harry Dean Stanton", "Nastassja Kinski"],
//   director: "Wim Wenders",
//   genre: "Drama",
//   popularity: "Popular",
// };
// console.log(favMovie);
// console.log(favMovie.director);
// console.log(favMovie.actors);

//3.zadatak (exercises-objects intro)

function createProject(description, language, git, status) {
  var obj = {};
  obj.description = description;
  obj.language = language;
  obj.git = git;
  obj.status = status;

  obj.printGit = function () {
    console.log(obj.git);
  };
  obj.checkLanguage = function () {
    if (obj.language.toLowerCase === "javascript" || obj.language === "js") {
      return true;
    }
    return false;
  };
  obj.checkStatus = function () {
    if (obj.status) {
      return true;
    }
    return false;
  };

  return obj;
}

var project = createProject("neki opis", "js", "https://gitneki.com", false);
project.printGit();
project.checkLanguage();
