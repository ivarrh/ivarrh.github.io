---
layout: page
title: animal dilemmas
description: how do we resolve moral dilemmas involving different animal and plant species?
img: assets/img/ad1.jpg
permalink: /projects/animaldilemmas/
importance: 2
category: current
---

Who do we consider when making everyday moral decisions: family, friends, strangers? What if there is more to the story? Some philosophers have conceptualised these moral boundaries under the term the 'moral circle', understood as distinct moral domains that reflect the separation between those beings that are morally important to us and those that are not.

This research seeks to understand how personal characteristics (such as dietary preferences or which charity to donate to) influence the way people prioritise and value different entities, both human and non-human. In a first experiment, we analysed how people made decisions in a hypothetical critical situation where they had to decide whether to save one of two entities. Both the participants' choices and their reaction times were recorded. This experiment focused on individual, dilemmatic decisions, i.e. each person had to choose between two options without considering previous decisions or the context of other choices. The idea was to understand how people prioritise different entities in an isolated scenario.

<div class="row">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 600px; width: 100%;">
        {% include figure.liquid loading="eager" path="assets/img/moralcircle.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The moral circle of participants according to their preferred charity.
</div>

In a second experiment, we plan to contrast the individual decision with a situation in which people have to take previous decisions into account. This means that they will not only be asked to choose between two entities, but they will also have to consider which entities have been saved before. This will allow us to analyse whether there is a marginal or relative value in prioritising entities when the context of other decisions is taken into account. For example, does a person's choice change if they know that certain entities have been saved before?
In short, this research seeks to understand not only how we prioritise individually, but also how our decisions may be influenced by the context of previous choices, which may reveal more complex patterns in the way we value different entities.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/moralcircle.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

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
