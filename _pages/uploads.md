---
title: Uploads
---
{% for image in site.static_files  %}
    {% if image.path contains 'assets/upload'  %}
        <img src="{{ site.baseurl  }}{{ image.path  }}" alt="image" />
        ![]({{ site.baseurl  }}{{ image.path  }})
    {% endif  %}
{% endfor  %}
![](/assets/upload/unnamed1.jpg)
![](/assets/upload/unnamed2.jpg)

{{ site.static_files.baseurl }}
