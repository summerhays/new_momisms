Today's Momism of the Day is:
<strong><span id="randomMom"></span></strong>

<span id="defLabel">Definition: </span>
<span id="randomDefinition"></span>
<span id="exLabel">Example: : </span>
<em><span id="randomExample"></span></em>
<br><br>
<span id="mommLabel">Mommentary: </span>
<span id="randomMommentary"></span>

<span id="IDLabel">(Momism ID #: </span>
<span id="randomID"></span><span>)</span>

<p></p>
<script> 
var allMomisms = [
{% for each in site.data.momisms %}
 {
  momism: "{{ each.momism }}",
 {% if each.definition %} definition: "{{ each.definition }}", {% endif %}
 {% if each.example %} example: "{{ each.example }}",{% endif %}
 {% if each.mommentary %} mommentary: "{{ each.mommentary }}",{% endif %}
  momism_id: "{{ each.order }}"
},
        {% endfor %} 
];

var randomNum = [
  {% for each in site.data.randday %}
 {
  day: {{ each.day }},
  rand: {{ each.rand }},
},
  {% endfor %}
];

today=new Date()
var randforToday = randomNum[daysIntoYear(today) - 1];

// Making these all into variables to be easier to handle:
var modFinal = allMomisms[randforToday.rand].momism;
var defFinal =  allMomisms[randforToday.rand].definition;
var exFinal = allMomisms[randforToday.rand].example;
var mommFinal = allMomisms[randforToday.rand].mommentary;
var idFinal = allMomisms[randforToday.rand].momism_id;


function daysIntoYear(date){
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

document.getElementById("randomMom").innerHTML = modFinal;

if (typeof defFinal === 'undefined') {
  document.getElementById("randomDefinition").style.display = "none";
  document.getElementById("defLabel").style.display = "none";
} else {
  document.getElementById("randomDefinition").innerHTML = defFinal;
}

if (typeof exFinal === 'undefined') {
  document.getElementById("randomExample").style.display = "none";
  document.getElementById("exLabel").style.display = "none";
} else {
  document.getElementById("randomExample").innerHTML = exFinal;
}

if (typeof mommFinal === 'undefined') {
  document.getElementById("randomMommentary").style.display = "none";
  document.getElementById("mommLabel").style.display = "none";
} else {
  document.getElementById("randomMommentary").innerHTML = mommFinal;
}

document.getElementById("randomID").innerHTML = idFinal;

</script>
