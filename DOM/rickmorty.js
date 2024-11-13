const URL = "https://rickandmortyapi.com/api/character";
const charContainer = document.querySelector(".characters");

function getCharacters() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => showCharacters(data));
}

function showCharacters(data) {
  console.log(data.results);
  const newCharsArray = data.results.slice(0, 8);

  newCharsArray.forEach((e) => {
    const charImg = document.createElement("img");
    charImg.setAttribute("src", e.image);
    const charDiv = document.createElement("div");
    charDiv.append(charImg);
    const charTxt = document.createElement("p");
    charTxt.innerHTML = e.name;
    charDiv.append(charTxt);
    const charBtn = document.createElement("button");
    charBtn.innerHTML = "Like";
    charDiv.append(charBtn);

    charContainer.append(charDiv);
    charBtn.addEventListener("click", function () {
      if (charBtn.style.backgroundColor === "green") {
        charBtn.style.backgroundColor = "";
      } else {
        charBtn.style.backgroundColor = "green";
      }
    });
  });
}

window.addEventListener("load", getCharacters);
