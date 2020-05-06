const mq = window.matchMedia( "(min-width: 800px)" );

if (mq.matches) {

function openNav() {
  var openn = document.getElementById("myNav").style.width;
  if (openn === "250px") {
  document.getElementById("myNav").style.width = "0";
  document.getElementById("content").style.marginLeft= "0";
  document.getElementById("closeBtn").style.visibility = "hidden";
  } else {
  document.getElementById("myNav").style.width = "250px";
  document.getElementById("content").style.marginLeft = "250px";
  document.getElementById("closeBtn").style.visibility = "visible";
}
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
  document.getElementById("content").style.marginLeft= "0";
  document.getElementById("closeBtn").style.visibility = "hidden";
}
} else {
function openNav() {
	var elems = document.getElementsByClassName("navLinks");
	var first = document.getElementsByClassName("navLinks")[0].style.display;
  if (first === "block") {
	  for (var i=0;i<elems.length;i+=1){
  elems[i].style.display = 'none';
   }
  } else {
	  for (var i=0;i<elems.length;i+=1){
  elems[i].style.display = 'block';
   }
  }
}
}
