---
---
var allMomisms = [
{% for each in site.data.mom-csv %} {momism: "{{ each.momism }}",{% if each.definition %} definition: "{{ each.definition }}",{% endif %}{% if each.example %} example: "{{ each.example }}",{% endif %}{% if each.mommentary %} mommentary: "{{ each.mommentary }}",{% endif %} momism_id: "{{ each.order }}"},{% endfor %}
];

var randomNum = [
{% for each in site.data.randday %}{day: {{ each.day }}, rand: "{% comment %}Random momisms aren't yet stored as integers, so this makes the string an integer. Then, if the momism ID for the day is greater than the number of momisms, it assigns the alternate{% endcomment %}{% assign randy = each.rand | plus: 0 %}{% if randy > site.data.mom-csv.size %}{{ each.alt }}{% else %}{{ each.rand }}{% endif %}"}, {% endfor %}
];

var today=new Date();

// Testing, run through all momisms
//
// var i = 1;
// var x = 0;
// var randforToday = 1;
// setInterval(increase, 1000);
// 
// function increase() {
//     if (i < {{ site.data.mom-csv.size }}) {
//       i++;
//       x = i;
//     }

// var x = 5;

function daysIntoYear(date){
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

// var testdate = new Date(2020, 5, 1);
// console.log(daysIntoYear(testdate));

var x = daysIntoYear(today) - 1;

var randforToday = randomNum[x];
//
// var randforToday = {day: 1, rand: 1,}; // Definition & example
// var randforToday = {day: 1, rand: 16,}; // Definition & mommentary
// var randforToday = {day: 1, rand: 18,}; // Definition, example, & mommentary
var today_date = (today).toString().split(' ').splice(1,3).join(' ');

var arrayFinal = allMomisms.find( ({ momism_id }) => momism_id == randforToday.rand);

// Making these all into variables to be easier to handle:
// var modFinal = allMomisms[randforToday.rand - 1].momism;
var modFinal = arrayFinal.momism;
var defFinal =  arrayFinal.definition;
var exFinal = arrayFinal.example;
var mommFinal = arrayFinal.mommentary;
var idFinal = arrayFinal.momism_id;
var idFinalInteger = parseInt(idFinal, 10);
var linkFinal = '/list.html#momism_id' + idFinal;

document.getElementById("randomMom").innerHTML = modFinal;
if (typeof defFinal === 'undefined') {
  // document.getElementById("randomDefinition").style.display = "none";
  // document.getElementById("defLabel").style.display = "none";
  defFinal = 'Definition unknown';
  document.getElementById("randomDefinition").innerHTML = defFinal;
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
document.getElementById("randomID").innerHTML = idFinalInteger;
document.getElementById("today").innerHTML = today_date;
document.getElementById("linkFinal2").href = linkFinal;
// document.getElementById("linkFinal").setAttribute("href", linkFinal)
// document.getElementById("linkFinal2").setAttribute("href", linkFinal)




// }
