// the menu movement
let categoriesList = document.querySelectorAll(".nav .categoriesList");
let navBar = document.querySelectorAll(".nav");
let menuIcon = document.querySelectorAll(" .nav .container .logo .fa-bars");
let xIcon = document.querySelectorAll(".categoriesList .container .nav .fa-x");
menuIcon[0].addEventListener("click", () => {
  categoriesList[0].classList.add("moveRight");
  navBar[0].classList.add("clicked");
});

xIcon[0].addEventListener("click", () => {
  categoriesList[0].classList.remove("moveRight");
  navBar[0].classList.remove("clicked");
});
// clicking everywhere
document.addEventListener("click", (e) => {
  if (e.target.id !== "categoriesList" && e.target.id !== "fa-bars") {
    categoriesList[0].classList.remove("moveRight");
    navBar[0].classList.remove("clicked");
  }
});
// search
let searchInput = document.querySelectorAll(".nav .container .search input");
let recomendation = document.querySelectorAll(".nav .recomendation ");
let searchIcon = document.querySelectorAll(
  ".nav .left-Icons .fa-magnifying-glass"
);
let categorySearch = document.querySelectorAll(".nav .probCon .prob .search");
searchInput[0].addEventListener("click", () => {
  recomendation[0].classList.add("delete");
});
categorySearch[0].addEventListener("click", () => {
  recomendation[0].classList.add("delete");
});
searchIcon[0].addEventListener("click", () => {
  recomendation[0].classList.add("delete");
});
// clicking everywhere
document.addEventListener("click", (e) => {
  if (
    e.target.id !== "recomendation" &&
    e.target.id !== "Search" &&
    e.target.id !== "fa-magnifying-glass" &&
    e.target.id !== "fa-bars"
  ) {
    recomendation[0].classList.remove("delete");
  }
});
// hide navBar on scroll
var lastScrollTop;
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (!recomendation[0].classList.contains("delete")) {
    if (scrollTop > lastScrollTop) {
      navBar[0].style.top = "-80px";
    } else {
      navBar[0].style.top = "0";
    }
  }
  lastScrollTop = scrollTop;
});
// slider
let boxes = document.querySelectorAll(".mainPage .card .box");
let cards = document.querySelectorAll(".mainPage .card");
let leftIcon = document.querySelectorAll(".mainPage .left");
let rightIcon = document.querySelectorAll(".mainPage .right");

cards.forEach((box, i) => {
  let dimentions = box.getBoundingClientRect();
  let width = dimentions.width;
  leftIcon[i].addEventListener("click", () => {
    box.scrollLeft -= width;
  });
});

cards.forEach((box, i) => {
  let dimentions = box.getBoundingClientRect();
  let width = dimentions.width;
  rightIcon[i].addEventListener("click", () => {
    box.scrollLeft += width;
  });
});
// heart coloring and card saving
let emptyHeart = document.querySelectorAll(
  ".mainPage .card .box .footer .empty"
);
let fullyHeart = document.querySelectorAll(
  ".mainPage .card .box .footer .fully"
);
let emptySave = document.querySelectorAll(
  ".mainPage .card .box .footer .emptySave"
);
let fullSave = document.querySelectorAll(
  ".mainPage .card .box .footer .fullSave"
);
emptyHeart.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("fa-regular");
    i.classList.toggle("fa-solid");
  });
});
emptySave.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("fa-regular");
    i.classList.toggle("fa-solid");
  });
});

// // boxes animation
// let serBox = document.querySelectorAll(".recycleRight .container .box");
// window.addEventListener("scroll", animate);
// function animate() {
//   let trigger = (window.innerHeight / 5) * 4;
//   serBox.forEach((e) => {
//     let boxTop = e.getBoundingClientRect().top;
//     if (boxTop < trigger - 100) {
//       e.classList.add("animate");
//     }
//   });
// }
// product description slider
let rightBtn = document.querySelectorAll(".product .parent .right");
let leftBtn = document.querySelectorAll(".product .parent .left");
let productImgs = document.querySelectorAll(".product .parent .images img");
let productImgsContainer = document.querySelectorAll(
  ".product .parent .images"
);
productImgsContainer.forEach((box, i) => {
  let dimentions = box.getBoundingClientRect();
  let width = dimentions.width;
  leftBtn[i].addEventListener("click", () => {
    box.scrollLeft -= width;
  });
});

productImgsContainer.forEach((box, i) => {
  let dimentions = box.getBoundingClientRect();
  let width = dimentions.width;
  rightBtn[i].addEventListener("click", () => {
    box.scrollLeft += width;
    console.log("s");
  });
});
//loeder
let loeder = document.querySelectorAll(".parentLoeder");
window.addEventListener("load", function () {
  loeder[0].classList.add("hide-loader");
});
