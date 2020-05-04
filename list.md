---
layout: default
title: Full List 
id: list
---
### All momisms ({{ site.data.momisms.size }}) and their definitions (where known...)
{: class="center"}

(The old version of this page is [here](/old_list.html))

Click to see definition, example, and Mommentary where available. If something's missing, [contribute or correct a momism here](https://docs.google.com/forms/d/e/1FAIpQLSdfmzsR2Z4hB9AG-CfEiPwZClB78tSY3SPVOWi4XbDCeGZQog/viewform){: target="_blank"}

{% assign counter = 0 %}
  <div id="myDropdown" class="dropdown-content">
    <input class="w3-input" type="text" placeholder="Search..." id="myInput" onkeyup="filterFunction()">
{% for each in site.data.momisms %}
{% assign counter = counter | plus: 1 %}
<button onclick="openAccordion('momism{{ counter }}')" class="w3-button w3-block w3-black w3-left-align">{{ counter }}. {{ each.momism }}</button>
<div id="momism{{ counter }}" class="w3-hide w3-container">
    {% if each.definition %}<p>Definition: {{ each.definition }}</p>{% endif %}
    {% if each.example %}<p>Example: <em>{{ each.example }}</em></p>{% endif %}
    {% if each.mommentary %}<p>Mommentary: {{ each.mommentary }}</p>{% endif %}
</div>
{% endfor %}
<script src="/assets/js/filter.js"></script>
