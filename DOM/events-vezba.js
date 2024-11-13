let a;
function changeBgColor() {
  var el = document.body;
  el.classList.toggle("toggle");
  a = setTimeout(changeBgColor, 1000);
}
function turnOff() {
  clearTimeout(a);
}
