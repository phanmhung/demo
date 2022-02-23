window.onscroll = function() {myFunction()};
var header = document.getElementById('header-context-bottom');
var scrollup = document.getElementById('ScrollUp');
// Get the offset position of the navbar
var sticky = header.offsetTop;
function myFunction() {
    
    if (window.pageYOffset > sticky) {
      header.classList.add("fixed-top");
      scrollup.style.display="block";
    } else {
      header.classList.remove("fixed-top");
      scrollup.style.display="none";
    }
  }