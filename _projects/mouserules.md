---
layout: page
title: mouse-tracking rules
description: we use process-tracing methods to examine how people enforce rules
img: assets/img/mousecover.png
permalink: /projects/mouserules/
importance: 3
category: current
---

Stemming from the philosophical debate on how to interpret laws, this study aims at investigating the temporal unfolding of rules’ interpretation by taking advantage of knowledge and methodologies coming from different fields of research.

In detail, the project will adopt the tracking of mouse movements as a proxy of cognitive processes, coupled with an online approach to data collection and the use of innovative techniques of data analysis, to disentangle the different weight of a rule’s literal text and of its moral purpose in determining laypeople’s judgments of whether it has been infringed or not. Hence, the questions that we will address have the potential of informing everyday legal practices as well as our general understanding of dynamics taking place in the court, with fundamental implications for society at large, bridging what happens in the lab and what occurs in everyday life by in turn narrowing the divide between experimental philosophy and cognitive sciences.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/IncongruentMT.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Mouse trajectories of conviction and acquittal judgments.
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
