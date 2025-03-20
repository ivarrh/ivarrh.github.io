---
layout: page
title: aRoW Validation
description: validating animated stimuli for use in cross-cultural research
permalink: /projects/arow/
img: /assets/img/storyboard.jpg
importance: 3
category: current
---

Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format. To give your project a background in the portfolio page, just add the img tag to the front matter like so.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/storyboard.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
![alt text](image.png)

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/arow-figure.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
![alt text](image.png)

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image"
    class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image"
    class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
