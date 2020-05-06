function openNav() {
  document.getElementById("myNav").style.width = "250px";
  document.getElementById("content").style.marginLeft = "250px";
  document.getElementById("closeBtn").style.visibility = "visible";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
  document.getElementById("content").style.marginLeft= "0";
  document.getElementById("closeBtn").style.visibility = "hidden";
}

