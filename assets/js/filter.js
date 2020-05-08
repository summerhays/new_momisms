---
---
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  button = div.getElementsByTagName("button");
  for (i = 0; i < button.length; i++) {
    txtValue = button[i].textContent || button[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      button[i].style.display = "";
    } else {
      button[i].style.display = "none";
    button[i].className = button[i].className.replace("color-triad-2", "smiley");
	    var z = button[i].nextElementSibling;
    z.className = z.className.replace(" w3-show", "");
	    }
    }
  }


function openAccordion(id) {
  var x = document.getElementById(id);
  var y = document.getElementById(id).parentElement;
  if (x.className.indexOf("w3-show") == -1/* && y.style.display == ""*/) {
    x.className += " w3-show";
    x.previousElementSibling.className =
    x.previousElementSibling.className.replace("smiley", "color-triad-2");
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className =
    x.previousElementSibling.className.replace("color-triad-2", "smiley");
  }
}

function randomMomism() {
  var num = Math.floor(Math.random() * ({{ site.data.momisms.size }} - 1 + 1) + 1);
	var randLink = '/list.html#momism_id' + num;
	  window.open(randLink,"_self");
	console.log(num);
}

