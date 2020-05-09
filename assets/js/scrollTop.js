


// When the user scrolls down 400px from the top of the document, show the button
// now this is above
window.onscroll = function() {buttonAppear()};

// Return to top button: 
//Get the button 
var topbutton = document.getElementById("topbtn");

function buttonAppear() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

