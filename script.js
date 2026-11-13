
/* =================================
   MINI GAMES BD - JAVASCRIPT
================================= */

// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");

  menuBtn.textContent =
    navLinks.classList.contains("show") ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
    menuBtn.textContent = "☰";
  });
});

// DYNAMIC COPYRIGHT YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();

// GAME SEARCH

const gameSearch = document.getElementById("gameSearch");
const gameCards = document.querySelectorAll(".game-card");
const noResults = document.getElementById("noResults");

let selectedCategory = "all";

function filterGames() {

  const searchValue = gameSearch.value
    .toLowerCase()
    .trim();

  let visibleCount = 0;

  gameCards.forEach(card => {

    const gameName = card.dataset.name.toLowerCase();
    const category = card.dataset.category;

    const matchesSearch =
      gameName.includes(searchValue);

    const matchesCategory =
      selectedCategory === "all" ||
      category === selectedCategory;

    if (matchesSearch && matchesCategory) {

      card.style.display = "block";
      visibleCount++;

    } else {

      card.style.display = "none";

    }

  });

  noResults.hidden = visibleCount !== 0;
}

// SEARCH INPUT EVENT

gameSearch.addEventListener("input", filterGames);

// CATEGORY FILTER

const categoryButtons =
  document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

  button.addEventListener("click", function () {

    categoryButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    this.classList.add("active");

    selectedCategory = this.dataset.category;

    filterGames();

  });

});

// PAGE LOAD ANIMATION

document.addEventListener("DOMContentLoaded", function () {

  document.body.classList.add("loaded");

});

// CONSOLE MESSAGE

console.log(
  "🎮 Welcome to Mini Games BD!"
);
console.log(
  "Play More. Enjoy More. Have Fun!"
);
