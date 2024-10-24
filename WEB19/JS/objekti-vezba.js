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

//4.zadatak

function createRecipe(
  name,
  cuisine,
  complexity,
  ingredients,
  time,
  instruction
) {
  var obj2 = {};
  obj2.name = name;
  obj2.cuisine = cuisine;
  obj2.complexity = complexity;
  obj2.ingredients = ingredients;
  obj2.time = time;
  obj2.instruction = instruction;

  obj2.printIngredients = function () {
    console.log(obj2.ingredients);
  };

  obj2.checkTime = function () {
    if (obj2.time < 15) {
      return console.log("Can be prepared in under 15 minutes");
    } else console.log("Can't be prepared in under 15 minutes");
  };

  obj2.changeCuisine = function (changedCuisine) {
    obj2.cuisine = changedCuisine;
  };

  obj2.deleteIngredient = function (n) {
    for (var i = 0; i < obj2.ingredients.length; i++) {
      console.log(recipe.ingredients.slice(n));
      break;
    }
  };

  return obj2;
}

var recipe = createRecipe(
  "pizza",
  "italian",
  2,
  ["dough", "tomato", "cheese"],
  30,
  "Put the sauce on the dough, add cheese, and bake in the oven at 200 degrees"
);
recipe.printIngredients();
recipe.checkTime();
recipe.changeCuisine("French");
console.log(recipe.cuisine);
recipe.deleteIngredient(1);

//1.zadatak sa Slack-a

var proizvod = [
  {
    naziv: "Plazma",
    cena: 150,
    opis: "Plazma je keks",
    kolicina: 50,
  },
  {
    naziv: "Hleb",
    cena: 60,
    opis: "Hleb od belog brasna",
    kolicina: 20,
  },
  {
    naziv: "Mleko",
    cena: 130,
    opis: "Mleko sa 20% mm",
    kolicina: 65,
  },
];

var korisnik = {
  ime: "Djordje",
  prezime: "Stojilkovic",
  adresa: "Vlajkova 191",
  korpa: [],
};
