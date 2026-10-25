---
layout: page
title: studies
permalink: /studies/
description: Take part in our research. Each study runs in your browser and takes just a few minutes.
nav: true
nav_order: 4
---

{% assign open_studies = site.data.studies | where: "active", true %}

{% if open_studies.size > 0 %}

<div class="row studies">
  {% for study in open_studies %}
  <div class="col-md-6 mb-4">
    <a class="card study-card h-100" href="{{ study.url }}" target="_blank" rel="noopener">
      {% if study.img %}
      <img class="card-img-top{% if study.img_fit == "contain" %} fit-contain{% endif %}" src="{{ study.img | relative_url }}" alt="" loading="lazy">
      {% endif %}
      <div class="card-body d-flex flex-column">
        <h3 class="card-title">{{ study.title }}</h3>
        {% if study.language or study.duration %}
        <p class="study-meta">
          {% for lang in study.language %}<span class="study-badge">{{ lang }}</span>{% endfor %}
          {% if study.duration %}<span class="study-duration">{{ study.duration }}</span>{% endif %}
        </p>
        {% endif %}
        <p class="card-text">{{ study.description }}</p>
        <span class="study-cta mt-auto">Take part &rarr;</span>
      </div>
    </a>
  </div>
  {% endfor %}
</div>
{% else %}
<p>There are no open studies right now. Please check back soon!</p>
{% endif %}

<p class="studies-note">
  Our studies run on the lab's study platform, <a href="https://www.mscilab.com/">mscilab.com</a>.
  Participation is voluntary and anonymous.
</p>

<style>
  .studies .study-card {
    display: block;
    overflow: hidden;
    color: var(--global-text-color);
    text-decoration: none;
    border-radius: 6px;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .studies .study-card:hover {
    color: var(--global-text-color);
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .studies .card-img-top {
    height: 180px;
    object-fit: cover;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .studies .card-img-top.fit-contain {
    object-fit: contain;
    padding: 12px;
    background-color: var(--global-bg-color);
  }
  .studies .card-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
  }
  .studies .study-card:hover .card-title { color: var(--global-theme-color); }
  .studies .study-meta { margin-bottom: 0.5rem; font-size: 0.8rem; }
  .studies .study-badge {
    display: inline-block;
    margin-right: 6px;
    padding: 1px 7px;
    border-radius: 3px;
    background-color: var(--global-theme-color);
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.03em;
  }
  .studies .study-duration { color: var(--global-text-color-light); }
  .studies .study-cta {
    color: var(--global-theme-color);
    font-size: 1rem;
    font-weight: 500;
  }
  .studies-note {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: var(--global-text-color-light);
  }
</style>
