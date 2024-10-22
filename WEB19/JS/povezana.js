// console.log("zdravo svete");

// var body = document.body;

// console.log(body);

var button = document.getElementById("dog-button");
var dogImage = document.getElementById("dog-image");

var API_URL = "https://dog.ceo/api/breeds/image/random";

// var button2 = document.querySelector("#dog-button");
// console.log(button);

// button.onclick = function () {
//   console.log("Kliknuto je dugme");
// };

button.addEventListener("click", function () {
  console.log("Kliknuto je dugme!");
  var fetchReturn = fetch(API_URL);
  console.log(fetchReturn);

  var response = fetchReturn.then(function (value) {
    return value.json();
  });

  response.then(function (data) {
    console.log(data.message);
    dogImage.src = data.message;
  });
});
