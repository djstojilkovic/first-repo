const URL = "https://api.chucknorris.io/jokes/random";
const dugme = document.querySelector("button");
const joke = document.querySelector("h1");

//uvek se ovako dolazi do response na ovaj nacin (fetch->then(resavamo promise)->then(resavamo promise))
//1.pravimo request preko fetch()
//2. .then sluzi da razresimo promise koji ce fetch da vrati
// promise ce se razresiti tek kada dobijemo pravu informaciju(npr objekat, niz, niz objekata...)
//u prvom then-u, dobijamo informaciju u json formatu
//da bismo razresili i preveli iz json u js, koristimo metodu .json(), .json()nam takodje vraca promise
//u poslednjem .then, dohvatamo pravu informaciju sa kojom mozemo da radimo
//catch sluzi da uhvati gresku koja se u medjuvremenu dogodila
function getChuckJoke() {
  fetch(URL) //ne mora const response = fetch...
    .then((res) => res.json()) //razresvanje json formata
    .then((data) => showJoke(data)) //razresen json, vraca neki value preveden u js (u ovom slucaju vic), prikaz podataka iz jsona u jsu
    .catch((error) => console.log(error));
  //   console.log(response);
}

function showJoke(data) {
  console.log(data);
  joke.textContent = data.value;
}

dugme.addEventListener("click", getChuckJoke);
