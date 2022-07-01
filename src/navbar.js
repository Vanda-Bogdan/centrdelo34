// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var back_nav = document.getElementById("back-nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")

    back_nav.classList.add("sticky")
    back_nav.classList.add("flex")
    back_nav.classList.remove("hidden");
    //back_nav.classList.replace(" hidden"," flex")

  } else {
    navbar.classList.remove("sticky");

    back_nav.classList.remove("sticky");
    back_nav.classList.add("hidden")
    back_nav.classList.remove("flex");
    //back_nav.classList.replace(" flex", " hidden")
  }
}