---
title: Full List
id: old_list
---
# All momisms ({{ site.data.momisms.size }}+)
### And their definitions (where known...)

The older version of this page is [here](old_old_list.html)

<dl>
{% for each in site.data.momisms %}
<dt>{{ each.momism }}</dt><dd>{% if each.definition %}{{ each.definition }}{% endif %}</dd>{% if each.example %}<dd><em>{{ each.example }}</em></dd>{% endif %} {% if each.mommentary %}<dd><strong>Mommentary: {{ each.mommentary }}</strong></dd>{% endif %}<dd>Momism ID #{{ each.order }}</dd>
{% endfor %}
