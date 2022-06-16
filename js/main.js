var elButton = document.querySelector(".burger__button");
var elMenu = document.querySelector(".menu");

elButton.addEventListener("click", function() {
 elMenu.classList.toggle("menu--open");
});