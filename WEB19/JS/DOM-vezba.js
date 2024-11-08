// console.log(window.navigator.appCodeName);
// console.log(window.navigator.appVersion);
// console.log(window.navigator.vendor);

// function isOnline() {
//   if (window.navigator.onLine === true) {
//     console.log("online");
//   } else {
//     console.log("not online");
//   }
// }
// isOnline();
// console.log(window.screen.availWidth + " X " + window.screen.availHeight);
// console.log(window.screen.height);
// function getUrlInfo() {
//   console.log(window.location.href);
//   console.log(window.location.hostname);
//   console.log(window.location.protocol);
//   console.log(window.location.search);
// }
// getUrlInfo();
// function reloadPage() {
//   window.location.reload();
// }
// // reloadPage();
// function goToPage() {
//   window.location.href = "https://www.google.co.uk/";
// }
// // goToPage();
// function da() {
//   let a = window.open(
//     "https://www.pinterest.com/sredop/",
//     "_blank",
//     "width=500,height=400"
//   );
// }

// //local storage
// addLocalData = (key, value) => {
//   window.localStorage.setItem(key, value);
// };

// getLocalStorage = () => {
//   let a = window.localStorage;
//   if (a.length === 0) {
//     console.log("No data");
//     return;
//   }
//   console.log(a);
// };

// removeLocalData = () => {
//   window.localStorage.clear();
// };

// //session storage
// addSessionData = (key, value) => {
//   window.sessionStorage.setItem(key, value);
// };
// getSessionStorage = () => {
//   let a = window.sessionStorage;
//   if (a.length === 0) {
//     console.log("No data");
//     return;
//   }
//   console.log(a);
// };
// removeSessionData = () => {
//   window.sessionStorage.clear();
// };

// if (window.localStorage.getItem("reload")) {
//   if (window.localStorage.getItem("redirect")) {
//   } else {
//     addLocalData("redirect", true);
//     goToPage();
//   }
// } else {
//   addLocalData("reload", true);

//   window.location.reload();
// }

//1)Menjanje bg-colora klikom na dugme; 2)clear interval na dugme
// const button1 = document.querySelector(".btn1");
// const button2 = document.querySelector(".btn2");
// const body = document.body;
// let a;

// function changeBackground() {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);

//   // using inline variable
//   body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
// }
// button1.addEventListener("click", function () {
//   //setTimeout(changeBackground, 1000);
//   a = setInterval(changeBackground, 1000);
// });
// button2.addEventListener("click", function () {
//   clearInterval(a);
// });
const minusFive = document.querySelector(".minus5");
const minus = document.querySelector(".minus");
const plusFive = document.querySelector(".plus5");
const plus = document.querySelector(".plus");
const count = document.querySelector("h1");

minusFive.addEventListener("click", function () {
  let newCount = parseInt(count.textContent);
  count.textContent = newCount - 5;
});

plusFive.addEventListener("click", function () {
  let newCount = parseInt(count.textContent);
  count.textContent = newCount + 5;
});

minus.addEventListener("click", function () {
  let newCount = parseInt(count.textContent);
  count.textContent = newCount - 1;
});

plus.addEventListener("click", function () {
  let newCount = parseInt(count.textContent);
  count.textContent = newCount + 1;
});
