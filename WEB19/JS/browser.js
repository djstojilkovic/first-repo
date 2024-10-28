console.log("hello world");

console.log(document.body);

// var vrednost = window.prompt("Zdravo Bom-e");
// console.log(vrednost);

console.log(window.location);
// window.location.href = "https://google.com";

console.log(window.screen);

// console.log(window.history.forward());

var ime = "Martin";
console.log(window);

console.log(window.screen.height);
console.log(window.screen.availHeight);

console.log(window.localStorage);
// localStorage.setItem("theme", "light");
// localStorage.setItem("theme", "light");
console.log(localStorage.getItem("theme"));

// if (localStorage.getItem("theme") === "light") {
//   document.body.className = "light";
// } else {
//   document.body.className = "dark";
// }

var body = document.body;
var dugme = document.createElement("button");
dugme.textContent = "Promeni temu";

function whenButtonClicked() {
  console.log("Button is clicked");
  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
    body.className = "dark";
  } else {
    localStorage.setItem("theme", "light");
    body.className = "light";
  }
}

dugme.addEventListener("click", whenButtonClicked);

body.prepend(dugme); //append -> vise tagova odjednom, prepend->dodaje na pocetak dokumenta (da bi script bio na dnu bodyja)
