"use strict";
const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click", function () {
  navItems.classList.toggle("show-links");
});
