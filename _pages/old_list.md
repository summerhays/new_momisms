---
title: Full List
id: old_list
permalink: /old_list.html
---
# All momisms (250+)
### And their definitions (where known...)

The older version of this page is [here](old_old_list.html)

<dl>
{% for each in site.data.momisms %}
<dt>{{ each.momism }}</dt><dd>{% if each.definition %}{{ each.definition }}{% endif %}</dd>{% if each.example %}<dd><em>{{ each.example }}</em></dd>{% endif %} {% if each.mommentary %}<dd><strong>Mommentary: {{ each.mommentary }}</strong></dd>{% endif %}<dd>Momism ID #{{ each.order }}</dd>
{% endfor %}
</dl>

<p>Updated: 2020-05-05</p>
