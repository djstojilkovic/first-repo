const container = document.querySelector("#container");
const display = document.createElement("h1");
display.innerHTML = "0";
console.log(display);
container.append(display);

const button1 = document.createElement("button");
const button2 = document.createElement("button");

button1.innerHTML = "+";
button2.innerHTML = "-";

container.append(button1);
container.append(button2);

button1.addEventListener("click", () => {
  currentValue = Number(display.innerHTML);
  const newValue = addOrSub("+", currentValue);
  display.innerHTML = newValue;
});

button2.addEventListener("click", () => {
  currentValue = Number(display.innerHTML);
  const newValue = addOrSub("-", currentValue);
  if (newValue >= 0) return (display.innerHTML = newValue);
});

const addOrSub = (operation, currentValue) => {
  if (operation === "+") {
    return ++currentValue;
  } else if (operation === "-") {
    return --currentValue;
  } else {
    return currentValue;
  }
};

//2.zadatak
const h2 = document.createElement("h2");
const lista = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const img = document.createElement("img");
img.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4aboWqO_RZ6PdiioaItQw4bjRt7D52SaB9Q&s";
const checkBox1 = document.createElement("input");
const checkBox2 = document.createElement("input");
const checkBox3 = document.createElement("input");
const checkBox4 = document.createElement("input");

h2.innerHTML = "Pica: ";
li1.innerHTML = "Testo";
li2.innerHTML = "Paradajz sos";
li3.innerHTML = "Kackavalj";
li4.innerHTML = "Sunka";
//peske kreirani checkboxovi
// checkBox1.type = "checkbox";
// checkBox2.type = "checkbox";
// checkBox3.type = "checkbox";
// checkBox4.type = "checkbox";

//kreiranje checkboxova preko forEacha (ne peske)
const checkBoxovi = [checkBox1, checkBox2, checkBox3, checkBox4];
checkBoxovi.forEach((element) => (element.type = "checkbox"));

container.append(h2);
container.append(lista);
container.append(li1);
container.append(li2);
container.append(li3);
container.append(li4);
container.append(img);
li1.append(checkBox1);
li2.append(checkBox2);
li3.append(checkBox3);
li4.append(checkBox4);
