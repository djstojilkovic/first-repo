const URL = "https://dog.ceo/api/breed/african/images"; //"by breed" sa dog api-a site-a
const button = document.querySelector("button");
const dogContainer = document.querySelector(".dogs");

function getDogImages() {
  fetch(URL)
    .then((reponse) => reponse.json())
    .then((data) => showDogs(data));
}

function showDogs(data) {
  console.log(data.message);
  const newDogArray = data.message.slice(0, 6); //prvih 6 slika

  newDogArray.forEach((e) => {
    const dogImage = document.createElement("img");
    dogImage.setAttribute("src", e);
    dogContainer.append(dogImage);
  });

  //   dogContainer.innerHTML = newDogArray.map((e) => `<img src="${e}">`).join(""); //drugi nacin zapisivanja(bolje je sa foreach)
}

button.addEventListener("click", getDogImages);
