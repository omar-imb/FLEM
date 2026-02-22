const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");
const links = document.querySelectorAll(".nav-menu a");


function toggleMenu(){

hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
overlay.classList.toggle("active");

}


hamburger.addEventListener("click", toggleMenu);

overlay.addEventListener("click", toggleMenu);


links.forEach(link => {

link.addEventListener("click", toggleMenu);

});