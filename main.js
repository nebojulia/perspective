"use strict"

window.onload = function() {

const menu = document.querySelector(".nav");
const hamburger= document.querySelector(".header__burger");
const closeIcon= document.querySelector(".header__closed-img");
const menuIcon = document.querySelector(".header__burger-img");

function toggleMenu() {
    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
        menu.style.opacity = 0;
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("show-menu");
        menu.style.opacity = 1;
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

    hamburger.addEventListener("click", toggleMenu);
}
