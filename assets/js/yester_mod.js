---
---
{% assign year = "now" | date: "%Y" %}
// {% assign year = 2024 %}

{% assign year_mod4 = year | modulo: 4 %}
{% assign year_mod100 = year | modulo: 100 %}
{% assign year_mod400 = year | modulo: 400 %}



{% if year_mod4 == 0 %}
  {% if year_mod100 == 0 %}
    {% if year_mod400 == 0 %}
      {% assign is_leap_year = true %}
    {% else %}
      {% assign is_leap_year = false %}
    {% endif %}

    {% else %}
    {% assign is_leap_year = true %}
    {% endif %}
  {% else %}
    {% assign is_leap_year = false %}
  {% endif %}

// console.log("Year: " + " {{ is_leap_year }}" + " 4: {{ year_mod4 }}" + " 100: {{ year_mod100 }}" + " 400: {{ year_mod100 }}" {% if is_leap_year %}+ "hi" {% endif %});

var allMomisms = [
{% for each in site.data.mom-csv %} {momism: `{{ each.momism | strip | smartify }}`,{% if each.definition %} definition: `{{ each.definition | strip | smartify }}`,{% endif %}{% if each.example %} example: `{{ each.example | strip | smartify }}`,{% endif %}{% if each.mommentary %} mommentary: `{{ each.mommentary | strip | smartify }}`,{% endif %}{% if each.filename %} filename: `{{ each.filename | strip | smartify }}`,{% endif %}{% if each.alt %} alt: `{{ each.alt | strip | smartify }}`,{% endif %}{% if each.links %} links: `{{ each.links | strip | smartify }}`,{% endif %} momism_id: `{{ each.order }}`},{% endfor %}
];

{% for each in site.data.randday %}{% if each.day == 366 %}{% assign last_rand = each.rand %}{% endif %}{% endfor %}

var randomNum = [
{% for each in site.data.randday %}{day: {% if each.day == 60 and is_leap_year %}366, rand: `{{ last_rand }}`}, {day: 60 {% else %}{{ each.day }}{% endif %}, rand: `{{ each.rand }}`}, {% endfor %}
];

//{% for each in site.data.randday %}console.log("Test: " + {{ each.day.last }});{% endfor %}

var today=new Date();
var yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() -1);

const month = yesterday.toLocaleString('default', { month: 'long' });

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

const isLeap = year => new Date(year, 1, 29).getDate() === 29;

function periodatEnd(str) {
  if (typeof str !== 'undefined') {
    const result = str.search(/[\.!?;"]$/i);
    if (result === -1) {
            return str + ".";
    } else {
            return str;
    }
  }
}

// var testdate = new Date(2020, 5, 1);
// console.log(daysIntoYear(testdate));

var x = daysIntoYear(today) - 2;

var randforToday = randomNum[x];
//
// var randforToday = {day: 1, rand: 1,}; // Definition & example
// var randforToday = {day: 1, rand: 16,}; // Definition & mommentary
// var randforToday = {day: 1, rand: 18,}; // Definition, example, & mommentary
var yesterday_date1 = (yesterday).toString().split(' ').splice(1,3).join(' ');
var yesterday_date = month + " " + yesterday.getDate() + ", " + yesterday.getFullYear();

var arrayFinal = allMomisms.find( ({ momism_id }) => momism_id == randforToday.rand);

// Making these all into variables to be easier to handle:
// var modFinal = allMomisms[randforToday.rand - 1].momism;
var modFinal = arrayFinal.momism;
var defFinal = periodatEnd(arrayFinal.definition);
var exFinal = periodatEnd(arrayFinal.example);
var mommFinal = periodatEnd(arrayFinal.mommentary);
var idFinal = arrayFinal.momism_id;
var idFinalInteger = parseInt(idFinal, 10);
var linkFinal = 'https://m.smrh.xyz/' + idFinal;
var imgFinal = arrayFinal.links;
var imgSimpleFinal = '/assets/images/' + arrayFinal.filename;
var altFinal = arrayFinal.alt;

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

if (typeof arrayFinal.filename === 'undefined') {
  document.getElementById("imgs").style.display = "none";
  document.getElementById("mommLabel").style.display = "none";
} else {
  document.getElementById("randomImage").src = imgSimpleFinal;
  document.getElementById("randomImage").alt = altFinal;
  //document.getElementById("caption").innerHTML = altFinal;
}

document.getElementById("randomID").innerHTML = idFinalInteger;
document.getElementById("yesterday").innerHTML = yesterday_date;
document.getElementById("linkFinal2").href = linkFinal;
// document.getElementById("linkFinal").setAttribute("href", linkFinal)
// document.getElementById("linkFinal2").setAttribute("href", linkFinal)

// }
