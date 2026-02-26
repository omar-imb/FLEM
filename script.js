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
const translations = {

es: {

proyectos: "Proyectos",

servicios: "Servicios",

nosotros: "Nosotros",

contacto: "Contacto",

animacion: "Animación Digital",

contactar: "Contactar",

demo: "Demo Reel",

footer: "© 2026 FLEM STUDIO"

},

en: {

proyectos: "Projects",

servicios: "Services",

nosotros: "About",

contacto: "Contact",

animacion: "Digital Animation",

contactar: "Contact",

demo: "Demo Reel",

footer: "© 2026 FLEM STUDIO"

}

};


function setLanguage(lang){

document.documentElement.lang = lang;

document.querySelectorAll("[data-lang]").forEach(element => {

const key = element.getAttribute("data-lang");

element.textContent = translations[lang][key];

});

}
