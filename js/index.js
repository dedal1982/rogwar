const burgerClick = document.querySelector(".header__burger");
const scrollLock = document.querySelector(".page");

/***открытие бургера***/
burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  scrollLock.classList.toggle("lock");
});

/***открытие правил***/
const rentButton = document.querySelector(".rent__button");
const overlay = document.getElementById("overlay");

rentButton.addEventListener("click", () => {
  overlay.style.display = "flex";
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});
