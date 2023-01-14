humburger = document.getElementById(".humburger");
//The line above deals with the hamburger.
humburger.onclick= function(){
    navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");

}

//THIS LINES BELOW DEALS WITH THE STICKY NAVBAR
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

//Navbar Toggle
function toggleMobileMenu(menu){

    menu.classList.toggle('open');
    
}