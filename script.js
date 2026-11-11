const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

// Ouvre ou ferme le menu quand on clique sur le burger
menuButton.addEventListener("click", function (event) {
  event.preventDefault();
  navLinks.classList.toggle("open");
});

// Ferme le menu quand on clique sur un lien
const liens = document.querySelectorAll(
  "#nav-links .nav-link:not(#menu-button)",
);
liens.forEach(function (lien) {
  lien.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});
