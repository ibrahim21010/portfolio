const menuIcon = document.querySelector("#menu-bar");
const navLinks = document.querySelector(".links");



menuIcon.addEventListener("click", () => {

    if (!navLinks.classList.contains("show")) {
        navLinks.classList.toggle("show");
    } else {
        navLinks.classList.toggle("show");
    }



});