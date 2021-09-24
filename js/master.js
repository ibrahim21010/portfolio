/* -------------------------------------------------------------------------- */
/*                                  init var                                  */
/* -------------------------------------------------------------------------- */
const menuIcon = document.querySelector("#menu-bar");
const navLinks = document.querySelector(".links");
const closeMenu = document.querySelector("#closeMenu");
const top_nav = document.querySelector(".top_nav");


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
closeMenu.addEventListener('click',()=>{
    navLinks.classList.remove("show")
})

/**--------------------------------------------
 **     set Header fixed at top when Scrolling
 *---------------------------------------------**/

 window.onscroll = ()=>{
     let top = window.scrollY 
     console.log(top)

     if(top >= 100){
         console.log("set the fixed bar")

         top_nav.classList.add("fixed")
     }else{
        top_nav.classList.remove("fixed")
     }
 }
