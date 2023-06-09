---
title: Uploads
---
{% for image in site.static_files  %}
  {% if image.path contains 'assets/upload'  %}
[# {% increment count_me %}]({{ site.baseurl | replace_first: "/","" }}{{ image.path  }})  
![# {{ count_me }}]({{ site.baseurl | replace_first: "/","" }}{{ image.path  }})
  {% endif  %}
{% endfor  %}
