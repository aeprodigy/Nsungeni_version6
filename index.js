const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

//


//The line above deals with the hamburger.
humburger = document.querySelector(".humburger");
humburger.onclick = function () {
  navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active");
};

//THIS LINES BELOW DEALS WITH THE STICKY NAVBAR
