---
layout: default
title: <i class="fas fa-list-ul"></i>&nbsp;The Full List 
id: list
---
### All momisms ({{ site.data.momisms.size }}) and their definitions (where known...)
{: class="center"}

(The old version of this page is [here](/old_list.html)).

Click to see definition, example, and Mommentary where available. If something's missing, [contribute or correct a momism here](https://docs.google.com/forms/d/e/1FAIpQLSdfmzsR2Z4hB9AG-CfEiPwZClB78tSY3SPVOWi4XbDCeGZQog/viewform){: target="_blank"}.

Or click <button class="randombtn color-triad-2 w3-round-large w3-border w3-ripple" onclick="randomMomism()">here</button> to view a random momism.
<br>

{% assign counter = 0 %}
<div id="myDropdown" class="dropdown-content">
      <input class="w3-input w3-border w3-round" type="text" placeholder="Filter by momism..." id="myInput" onkeyup="filterFunction()">
{% for each in site.data.momisms %}
{% assign counter = counter | plus: 1 %}
<button id="momism_id{{ each.order }}" onclick="openAccordion('momism{{ counter }}')" class="w3-button w3-block smiley turquoise w3-left-align ">{{ each.momism }}</button>
<div id="momism{{ counter }}" class="w3-hide w3-container">
    <p>{% if each.definition %}{{ each.definition }}{% else %}<em>Definition unknown</em>{% endif %}</p>
    {% if each.example %}<p><em>{{ each.example }}</em></p>{% endif %}
    {% if each.mommentary %}<p>Mommentary: {{ each.mommentary }}</p>{% endif %}
    <p>Momism ID #{{ each.order }}</p>
</div>
{% endfor %}
<script src="/assets/js/filter.js"></script>
