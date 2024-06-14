const burgerClick = document.querySelector(".header__burger");
const scrollLock = document.querySelector(".page");

/***открытие бургера***/
burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  scrollLock.classList.toggle("lock");
});
