---
layout: page
title: the experimental philosophy of migration
description: how do people morally judge foreign and migrant individuals?
img: assets/img/migration.png
permalink: /projects/migration/
importance: 2
category: current
giscus_comments: true
---

Traditionally, migration studies have focused on either the normative debates about the legitimacy of various migration policies or empirical studies about the impact of these policies and migration flows on the well-being of immigrants and host societies. Recently, philosophers, sociologists, and political psychologists have begun to explore the potential of experimental methods to gain a deeper understanding of the phenomena and situations that arise in migration contexts.

For example, Gerver et al. (2023) introduced the concept of “Experimental Immigration Ethics.” This term refers to studies that address different normative and practical issues in migratory contexts from an experimental perspective. These studies examine how laypeople perceive different aspects of migration policies—such as their legitimacy, efficacy, and intentionality—and identify various biases and cognitive processes that occur when individuals are exposed to migrants or multicultural environments.
Our project builds on this emerging literature to further investigate how experimental philosophy can provide robust evidence on the effects that are crucial to normative debates about the justification of migration policies and the potential discrimination that immigrants may face in host countries.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/migration.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
![alt text](image.png)

Throughout our project, we have uncovered new evidence regarding the efficacy—and ultimately, the legitimacy—of civic integration policies. In a forthcoming study by Suárez, it has been demonstrated that immigrants’ adoption of host societal values plays a limited role in their integration processes in other domains (occupational and social integration), with only moderate effects on political participation. This evidence provides an opportunity to revisit normative debates about the morality of enforcing civic integration policies, given their limited impact on overall immigrant integration.

Our ongoing research explores the differential judgments people make when inferring the values of speakers based on their national background. Specifically, we are investigating whether native versus immigrant speakers expressing opinions elicit different value inferences among listeners. This evidence will contribute to the discussion on the use of values as indicators of integration or markers of immigrants’ ideological positions. You can find a preview of our study here [LINK a estudio].

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
