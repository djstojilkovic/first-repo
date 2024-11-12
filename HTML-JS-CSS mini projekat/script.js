const data = [
  {
    name: "Ana",
    age: 30,
    email: "a.marelja178@gmail.com",
    city: "Belgrade",
  },
  {
    name: "Milan",
    age: 35,
    email: "milance@gmail.com",
    city: "Krusevac",
  },
  {
    name: "Milica",
    age: 19,
    email: "milica19@gmail.com",
    city: "Novi Sad",
  },
  {
    name: "Aleksandar",
    age: 35,
    email: "aleksandar@gmail.com",
    city: "Beograd",
  },
];

const caruselImgs = [
  "https://media.istockphoto.com/id/1480246301/vector/vector-illustration-of-high-school-building-vector-school-building.jpg?s=612x612&w=0&k=20&c=vR6dixHuh8Ypw1c3pjR-7ahN2V1vhCKxxTzDd7HlVbY=",
  "https://static.vecteezy.com/system/resources/previews/007/343/251/non_2x/school-building-in-flat-style-modern-school-college-building-illustration-vector.jpg",
  "https://www.shutterstock.com/image-vector/back-school-cartoon-vector-kids-260nw-2493305457.jpg",
  'https://i.dawn.com/primary/2023/07/64b05ddd5bcec.jpg'
];

// CARDS
const wrapper = document.querySelector(".wrapper");

if (data.length === 0) {
  wrapper.innerHTML = "<h2>Sorry, no results</h2>";
} else {
  data.forEach((elem) => {
    // 1. createElements()
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const subTitle = document.createElement("h5");
    const profilePic = document.createElement("img");

    // 2. add content
    title.innerHTML = elem.name;
    subTitle.innerHTML = `Age: ${elem.age}`;
    card.className = "card";
    profilePic.src =
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541";

    // 3. append elements
    wrapper.append(card);
    card.append(profilePic, title, subTitle);
  });
}

// CARUSEL
const btnPrev = document.querySelector('.prev')
const btnNext = document.querySelector('.next')
const carusel = document.querySelector('img')

let currentIndex = 0;

carusel.src = caruselImgs[currentIndex];

btnNext.addEventListener('click', () => {
    currentIndex += 1;
    if (currentIndex === caruselImgs.length) {
        currentIndex = 0;
    }
    carusel.src = caruselImgs[currentIndex];
})

btnPrev.addEventListener('click', () => {
    currentIndex -= 1;
    if(currentIndex <= 0) {
        currentIndex = caruselImgs.length - 1;
    }
    carusel.src = caruselImgs[currentIndex];
});


