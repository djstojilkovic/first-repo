var dasdas = "Danas se osecam dobro";
console.log(dasdas);

var racunanje = 3 * 5 - 15 + 10;
console.log(racunanje);

var dasdas = 2;
console.log(dasdas);

var banana = 1.2;
var gr = banana * 1000 + "g";
console.log(gr);

var sec = 60;
var ana = 5 * sec;
var tom = 30 * sec;
console.log(
  "Ana is " + ana + " seconds late." + "Tom is " + tom + " seconds late."
);

var gb = 4;
var mb = 1024 * gb;
var numOfArticles = 1024 * mb;
var newsArticle = numOfArticles / 98;
console.log(
  "We can store additional " +
    mb +
    " megabyte of memory." +
    " It can fit " +
    newsArticle +
    " news articles in it."
);

var ime = "Djordje";
var godine = 27 + "";
var macka = false;
console.log(ime.length);
console.log(godine.length);
console.log(typeof macka);

var broj = "number";
var istinito = true;
var provera = null;
var neistinito = false;
var _broj = 56;

console.log(typeof broj);
console.log(typeof istinito);
console.log(typeof provera);
console.log(typeof neistinito);
console.log(typeof _broj);

var a = 5;
console.log((a += 5));

var p = true;
var q = false;
console.log(Boolean(p && p));
console.log(Boolean(p && q));
console.log(Boolean(q && p));
console.log(Boolean(q && q));

console.log(Boolean(p || p));
console.log(Boolean(p || q));
console.log(Boolean(q || p));
console.log(Boolean(q || q));

var brGodina = 50;
console.log(brGodina >= 0 && brGodina < 120);

var minSpeed = 60;
var maxSpeed = 120;
var speed = 70;
console.log(speed >= minSpeed && speed <= maxSpeed);
