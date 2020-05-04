---
---
var tipuesearch = {"pages": [
{% for each in site.data.momisms %}
  {"title": "{{ each.momism }}", "text": "{% if each.definition %}{{ each.definition }}. {% endif %}{% if each.example %}<em>{{ each.example }}. </em>{% endif %}{% if each.mommentary %}<strong>Mom: {{ each.mommentary }}. </strong>{% endif %}", "tags": "jQuery HTML5 CSS", "url": "http://www.dictionary.com/browse/{{ each.momism }}"},
	{% endfor %}  
]};
