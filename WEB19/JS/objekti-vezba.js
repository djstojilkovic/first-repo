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

//1.zadatak (Objects.docx)

function getTotalPrice(proizvodi) {
  var result = 0;
  for (var i = 0; i < proizvodi.length; i++) {
    result += proizvodi[i]["kolicina"] * proizvodi[i]["cena"];
  }
  return result;
}

console.log(
  "Ukupna cena je: " +
    getTotalPrice([
      { proizvod: "Mleko", kolicina: 1, cena: 150 },
      { proizvod: "Jaja", kolicina: 10, cena: 11 },
      { proizvod: "Hleb", kolicina: 3, cena: 60 },
      { proizvod: "Jogurt", kolicina: 1, cena: 120 },
    ]) +
    "RSD"
);

console.log(
  "Ukupna cena je: " +
    getTotalPrice([{ proizvod: "Mleko", kolicina: 10, cena: 150 }]) +
    "RSD"
);

//2.zadatak

var jewelry = [
  { name: "Diamond Earrings", price: 980 },
  { name: "Gold watch", price: 250 },
  { name: "Diamond necklace", price: 2500 },
];

function mostExpensive() {
  var max = -Infinity;
  var name;
  for (var i = 0; i < jewelry.length; i++) {
    if (jewelry[i].price > max) {
      max = jewelry[i].price;
      name = jewelry[i].name;
    }
  }
  return name;
}

console.log("The most expensive one is " + mostExpensive());

//3.zadatak
function mapLetters(word) {
  var letterMap = {};
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    if (!letterMap[letter]) {
      letterMap[letter] = [];
    }
    letterMap[letter].push(i);
  }
  return letterMap;
}
console.log(mapLetters("dodo"));
console.log(mapLetters("froggy"));
console.log(mapLetters("djordje"));

//4.zadatak
