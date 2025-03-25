document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".nav-burger");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav__link");
    
    burger.addEventListener("click", function () {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            nav.classList.remove("nav-active");
            burger.classList.remove("toggle");
        });
    });
});

