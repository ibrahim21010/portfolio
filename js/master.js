const menuIcon = document.querySelector("#menu-bar");
const navLinks = document.querySelector(".links");
const closeMenu = document.querySelector("#closeMenu");



menuIcon.addEventListener("click", () => {

    if (!navLinks.classList.contains("show")) {
        navLinks.classList.toggle("show");
    } else {
        navLinks.classList.toggle("show");
    }



});
closeMenu.addEventListener('click',()=>{
    navLinks.classList.remove("show")
})