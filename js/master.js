/* -------------------------------------------------------------------------- */
/*                                  init var                                  */
/* -------------------------------------------------------------------------- */
const menuIcon = document.querySelector("#menu-bar");
const navLinks = document.querySelector(".links");
const navLinksLi = document.querySelectorAll(".links li ");
const closeMenu = document.querySelector("#closeMenu");
const top_nav = document.querySelector(".top_nav");
const Cursor = document.querySelector(".cursor");
const allSections = document.querySelectorAll("section");

/**--------------------------------------------
 **     show and hide menu on toggle
 *---------------------------------------------**/
menuIcon.addEventListener("click", () => {
  if (!navLinks.classList.contains("show")) {
    navLinks.classList.toggle("show");
  } else {
    navLinks.classList.toggle("show");
  }
});
closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("show");
});

/**--------------------------------------------
 **     set Header fixed at top when Scrolling
 *---------------------------------------------**/

window.onscroll = () => {
  let top = window.scrollY;


  if (top >= 100) {
   
    top_nav.classList.add("fixed");
  } else {
    top_nav.classList.remove("fixed");
  }
};

/**--------------------------------------------
 **     create Custom Cursor
 *---------------------------------------------**/

//* this function for let the Cursor follow the mouse everywhere
window.addEventListener("mousemove", (e) => {
  Cursor.setAttribute(
    "style",
    "top:" + (e.pageY - 15) + "px;left:" + (e.pageX - 15) + "px;"
  );
});

//* observer to add some animation when target specific section
navLinksLi.forEach(item=>{
  item.addEventListener('click',(e)=>{
    const ele = document.getElementById(item.getAttribute("data-nav"))
    ele.scrollIntoView({
      "behavior":"smooth",
      "block":"start"
    })
  })
})