---
layout: default
title: leonardo
permalink: workshop/
nav: true
nav_order: 8
---

<style>
.talk {
  display: flex;
  gap: 1.75rem;
  align-items: center;   /* was: flex-start */
  margin-bottom: 2.25rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid #eaeaea;
}
 
.talk-photo {
  flex: 0 0 180px;
  display: flex;
  flex-direction: column;
  align-items: center;      /* centers img + time horizontally */
}

.talk-photo img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

.talk-time {
  margin-top: 0.55rem;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  text-align: center;
}

  .talk-body { flex: 1; min-width: 0; }

  .talk-title {
    margin: 0.25rem 0 0.4rem 0;
    font-size: 1.2rem;
    line-height: 1.35;
  }
.talk-speaker {
  font-style: italic;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;      /* ← smaller than the title */
}
.talk-speaker a {
  font-style: normal;
  font-size: 0.85rem;     /* ← website link even smaller */
}
  .talk-abstract {
    padding: 0.9rem 1.15rem;
    border-radius: 4px;
    font-size: 0.96rem;
  }
  .talk-abstract {
  padding: 0.9rem 1.15rem;
  font-size: 0.96rem;
  font-style: normal;      /* kills inherited/italic */
  text-align: justify;     /* justify the abstract */
  hyphens: auto;           /* nicer justified lines */
}
.talk-abstract p,
.talk-abstract em,
.talk-abstract i {
  font-style: normal;      /* in case any child is italic */
}
.talk-abstract p:last-child { margin-bottom: 0; }

  @media (max-width: 768px) {
    .talk-photo { flex: 0 0 150px; }
    .talk-photo img { width: 150px; height: 150px; }
  }
  @media (max-width: 576px) {
    .talk { flex-direction: column; }
    .talk-photo { flex: none; }
    .talk-photo img { width: 140px; height: 140px; }
  }

  .funding-block {
  max-width: 750px;
  margin: 3rem auto 2rem auto;
  text-align: center;
}
.funding-block p {
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
}
.funding-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}
.funding-logos img {
  display: block;
}

.registration-block {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem 1.25rem;
  border-radius: 2px;
  font-size: 0.99rem;
  line-height: 2;
}
.registration-block p:last-child { margin-bottom: 0; }
</style>

<h1 style="text-align: center;">The <strong>Philosophical Intuition and Conceptual Structure</strong> Workshop</h1>
<hr>

<div class="workshop-meta">
  <p style="text-align: center;"><strong>Dates:</strong> Thursday 26<sup>th</sup> and Friday 27<sup>th</sup> of November 2026</p>
  <p style="text-align: center;"><strong>Location:</strong> TBD <a href="https://carmendelavictoria.ugr.es/" target="_blank">Location</a>, University of Granada, Spain.
    <span style="margin-left: 1em;"><small>
      <a href="https://maps.app.goo.gl/rXzx385aCBZv5hmt5" target="_blank">
        <i class="fas fa-map-marker-alt"></i> [How to get there]</a>
    </small></span>
  </p>
</div>

{% comment %}

<div class="row justify-content-center">
  <div class="col-sm" style="max-width: 800px; width: 100%;">
    {% include figure.liquid loading="eager" path="/assets/img/workshop/banner.jpg" title="group image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
{% endcomment %}

<div class="workshop-description" style="text-align: justify;">
  <p>Within analytic philosophy, there is a long tradition of appealing to intuitions about thought experiments to probe the structure of core philosophical concepts, such as morality, knowledge or identity. The role of such thought experiments is to elucidate these concepts by testing proposed necessity and sufficiency criteria against our intuitive judgments. <br>
  More recently, a growing empirical literature in cognitive science has shown that many natural and social concepts do not exhibit a classical structure, and proposed various alternatives. Might philosophical concepts (e.g., morality, free will or identity) exhibit a non-classical structure? <br>
  Thanks to a 2025 Leonardo Grant for Scientific Research and Cultural Creation on <i>Philosophical Intuition and Non-Classical Conceptual Structure</i>, awarded by the <b>BBVA Foundation</b>, the present workshop brings together 6 speakers from philosophy and cognitive science to explore these and other related questions about the structure of philosophical concepts. <br>
  – What is the relationship between philosophical intuition and concepts?<br>
  – How is this relationship influenced by expertise?</p>
  <hr style="margin: 3rem 0;">
    <p>
    <strong>Registration:</strong> Attendance is free, but please let us know if you plan to come
    so we can plan accordingly. Just send a short email to
    <a href="mailto:damartin@ugr.es?subject=Workshop%20Registration">damartin@ugr.es</a>
    with your name and affiliation.

  </p>
</div>

<hr>

<!-- ============ PROGRAM (with integrated speakers + abstracts) ============ -->
<section id="program" class="workshop-section">
  <h2><b>Workshop Program</b></h2>
  <p>The workshop will take place in the <a href="https://www.google.com/maps/place/Facultad+de+Psicolog%C3%ADa+.+Universidad+de+Granada+(UGR)/@37.1944643,-3.5969308,794m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd71fcdbc5871c09:0x310142868f5decc9!8m2!3d37.1944643!4d-3.5943505!16s%2Fg%2F12q4_5_g8?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D">Psychology Faculty</a>, in Campus Cartuja, the concrete location is to be determined.

  <h3>Thursday 26<sup>th</sup></h3>

  <!-- Talk 1 -->
<div class="talk">
  <div class="talk-photo">
    <img src="/assets/img/workshop/almeida.jpeg" alt="Guilherme Almeida">
    <div class="talk-time">10:00h</div>
  </div>
  <div class="talk-body">
    <h4 class="talk-title">Dual character concepts and metalinguistic negotiations in legal philosophy</h4>
    <div class="talk-speaker">
      Guilherme Almeida · INSPER ·
      <a href="https://www.insper.edu.br/en/docentes/guilherme-da-franca-couto-fernandes-de-almeida" target="_blank"><i class="fas fa-globe"></i> Website</a>
    </div>
    <div class="talk-abstract">
      <!-- PASTE ABSTRACT HERE -->
      <p><strong>Abstract:</strong> When faced with immoral statutes, people are often drawn to statements such as: “There is one sense in which this statute is a law, but ultimately, it is no law at all”. What best explains this contradictory-sounding linguistic intuition and what are its implications for the study of legal argumentation? According to one influential theory, saying that an unjust statute is not a law reflects a proposal to change the meaning of the word “law” so that it no longer picks out grossly unjust statutes. Thus, although the statement employs descriptive language (about what the law “is” and “isn’t”), what it really expresses is a normative proposal in a negotiation about language. According to an alternative account, the acceptance of the contradictory-sounding statement tells us something important about our shared concept of law. In particular, it tells us that the concept of law has a dual character, meaning that there are two different and relatively independent criteria for something to be a law. One of the criteria is descriptive in nature, while the other is normative. Thus, whenever a statute fulfills one criterion, but not the other, we are drawn to statements that express this conflict. The present talk compares the explanatory merits of the two alternatives.</p>
    </div>
  </div>
</div>

  <!-- Talk 2 -->
<div class="talk">
  <div class="talk-photo">
    <img src="/assets/img/workshop/izabela.jpeg" alt="Izabela Skoczen">
    <div class="talk-time">11:00h</div>
  </div>
  <div class="talk-body">
    <h4 class="talk-title">What is reasonable for artificial intelligence?</h4>
    <div class="talk-speaker">
      Izabela Skoczen · Jagiellonian University ·
      <a href="https://izabelaskoczen.wordpress.com/" target="_blank"><i class="fas fa-globe"></i> Website</a>
    </div>
    <div class="talk-abstract">
        <!-- PASTE ABSTRACT HERE -->
        <p><strong>Abstract:</strong> <em>The reasonable person standard is central to ethics and law, particularly in assessing negligence and responsibility. Previous research shows that judgments of what is reasonable typically fall between what is average and what is ideal (Bear & Knobe, 2017; Tobia, 2018; Tobia et al., 2024). We examine whether the same pattern applies to AI, particularly large language models. Given evidence on algorithm aversion and automation bias, we hypothesized that people set stricter standards for AI than for humans. Specifically, we predicted that (H1) reasonable judgments would lie between average and ideal for both agents, and (H2) AI reasonableness would be judged closer to the ideal. In a 2 (agent: AI vs. human) × 3 (average, reasonable, ideal) between-subjects experiment, participants evaluated assertion and non-assertion scenarios. Results supported the first hypothesis: reasonableness consistently fell between average and ideal, but was not significantly closer to the ideal for AI than for humans (only numerically).
</em></p>
      </div>
    </div>
  </div>

  <!-- Talk 3 -->
  <div class="talk">
    <div class="talk-photo">
      <img src="/assets/img/workshop/vilius.png" alt="Vilius Dranseika">
      <div class="talk-time">12:00h</div>
    </div>
    <div class="talk-body">
      <h4 class="talk-title">How is the concept of death structured?</h4>
      <div class="talk-speaker">
        Vilius Dranseika · Jagiellonian University ·
        <a href="https://www.dranseika.lt" target="_blank"><i class="fas fa-globe"></i> Website</a>
      </div>
      <div class="talk-abstract">
        <!-- PASTE ABSTRACT HERE -->
        <p><strong>Abstract:</strong> <em>Ordinary judgments about whether someone is dead may not depend on a fixed set of necessary and sufficient conditions. Across a series of studies, I test whether cases of death vary in typicality and whether judgments reflect the combined influence of consciousness, vital functioning, and bodily integration. These studies aim to clarify whether the ordinary concept of death has a graded, multidimensional structure rather than a simple rule-based one.</em></p>
      </div>
    </div>
  </div>

  <h4 style="text-align:center; margin: 1.5rem 0;"><i>~ Lunch ~</i></h4>

  <!-- Talk 4 -->
  <div class="talk">
    <div class="talk-photo">
      <img src="/assets/img/workshop/reuter2.jpg" alt="Kevin Reuter">
      <div class="talk-time">15:00h</div>
    </div>
    <div class="talk-body">
      <h4 class="talk-title">Truth intuitions and the structure of truth concepts</h4>
      <div class="talk-speaker">
        Kevin Reuter · Gothenburg University ·
        <a href="http://www.kevinreuter.com/" target="_blank"><i class="fas fa-globe"></i> Website</a>
      </div>
      <div class="talk-abstract">
        <!-- PASTE ABSTRACT HERE -->
        <p><strong>Abstract:</strong> <em>Truth is frequently assumed to be conceptually straightforward. However, empirical research reveals substantial variation in truth judgments across contexts, experimental tasks, and individuals. In this talk, I examine the factors that pull truth intuitions in different directions and argue that understanding the structure of our concepts of truth is essential for making progress on these questions.</em></p>
      </div>
    </div>
  </div>

  <!-- Talk 5 -->
  <div class="talk">
    <div class="talk-photo">
      <img src="/assets/img/carme.png" alt="Carme Isern Mas">
      <div class="talk-time">16:00h</div>
    </div>
    <div class="talk-body">
      <h4 class="talk-title">Testing the prototype structure of philosophical concepts</h4>
      <div class="talk-speaker">
        Carme Isern-Mas & Sandra Sasikumar (Universidad de las Islas Baleares & Universidad de Granada)
        <a href="https://www.uib.es/es/personal/ABjIyMjIzNg/" target="_blank"><i class="fas fa-globe"></i> Website</a>
      </div>
      <div class="talk-abstract">
        <!-- PASTE ABSTRACT HERE -->
        <p><strong>Abstract:</strong> <em>The method of cases assumes that philosophical intuitions track classically structured concepts –i.e., categories with necessary and sufficient conditions. Yet many everyday concepts instead show a prototype structure (e.g., Zaki et al., 2003). We ask whether this holds for core philosophical concepts, such as free will, moral responsibility, knowledge or personal identity.  In a pre-registered study, we combine three methods: (1) typicality ratings, testing whether paradigmatic instances of a concept are judged more central than atypical ones; (2) reaction time, testing whether reaction times are slower for low-similarity cases, as prototype models predict; and (3) individual-level, non-nested model comparison, to classify participants’ concepts as criterion-based or similarity-based. In this talk, we will present the results and discuss their implications for the method of cases.</em></p>
      </div>
    </div>
  </div>

  <!-- Talk 6 -->
  <div class="talk">
    <div class="talk-photo">
      <img src="/assets/img/workshop/knobe.jpg" alt="Joshua Knobe">
      <div class="talk-time">17:00h</div>
    </div>
    <div class="talk-body">
      <h4 class="talk-title">Conflicting intuitions</h4>
      <div class="talk-speaker">
        Joshua Knobe · Yale University ·
        <a href="https://campuspress.yale.edu/joshuaknobe/" target="_blank"><i class="fas fa-globe"></i> Website</a>
      </div>
      <div class="talk-abstract">
        <!-- PASTE ABSTRACT HERE -->
        <p><strong>Abstract:</strong> <em>TBA</em></p>
      </div>
    </div>
  </div>

  <h4 style="text-align:center; margin: 1.5rem 0;"><i>~ Workshop Dinner ~</i></h4>

  <div class="simple-item">
    <strong>20:00h</strong> Restaurant <i>(to be announced soon)</i>
    <span style="margin-left: 1em;"><small>
      <a href="https://maps.app.goo.gl/ZU3ww3CSYCZ1JzwC6" target="_blank">
        <i class="fas fa-map-marker-alt"></i> [How to get there]</a>
    </small></span>
    <p style="margin: 0.5rem 0 0 0; font-size: 0.92rem; color: #555;">
      The venue will be announced closer to the date. Join us for an informal dinner to continue the conversations of the day.
    </p>
  </div>

 <!-- ============ FRIDAY ============ -->

{% comment %}

  <hr style="margin: 2rem 0;">

  <h3>Friday 27<sup>th</sup></h3>
  <div class="simple-item">
    <strong>10:00h Morning Working Group Meeting</strong>
    <p style="margin: 0.5rem 0 0 0; font-size: 0.92rem; color: #555;">
      An open session for the speakers to discuss ongoing projects. We have reserved space for
      informal talking, feedback, and potential collaborations, bring whatever you are currently
      working on, or ideas you would like to develop with others.
    </p>
  </div>

  <h4 style="text-align:center; margin: 1.5rem 0;"><i>~ Lunch ~</i></h4>

  <div class="simple-item">
    <strong>15:00h Afternoon Working Group Meeting</strong>
    <p style="margin: 0.5rem 0 0 0; font-size: 0.92rem; color: #555;">
      A continuation of the morning session, with further room for discussion of current and future
      projects, emerging collaborations, and next steps arising from the workshop.
    </p>
  </div>

  <h4 style="text-align:center; margin: 1.5rem 0;"><i>~ Closing Reception &amp; Farewell ~</i></h4>

  <div class="simple-item">
    <strong>20:00h</strong>
<p style="margin: 0.5rem 0 0 0; font-size: 0.92rem; color: #555;">
  The workshop will conclude at the
  <a href="https://carmendelavictoria.ugr.es/" target="_blank">Carmen de la Victoria</a>
  with a closing reception. We look forward to marking the end of two days of talks and
  discussion together.

<hr style="margin: 3rem 0;">

{% endcomment %}

  <hr style="margin: 2rem 0;">

<div class="registration-block">
  <h2><i class="fas fa-user-plus"></i> Registration</h2>
  <p>
    Attendance is free, but please let us know if you plan to come so we can plan accordingly.
    Just send a short email to
    <a href="mailto:damartin@ugr.es?subject=Workshop%20Registration">damartin@ugr.es</a>
    with your name and affiliation.
  </p>
</div>

<!-- ============ ORGANIZERS ============ -->
<section class="organizers-section">
  <h2>Organizers</h2>
  <div class="profile-grid-workshop">
    <div class="profile-card">
      <div class="profile-img-container">
        <img src="/assets/img/dani.png" alt="Daniel Martín">
      </div>
      <div class="profile-content">
        <h3>Daniel Martín</h3>
        <p class="affiliation">University of Granada</p>
        <div class="profile-links">
          <a href="/people/" target="_blank"><i class="fas fa-globe"></i> Website</a>
          <a href="mailto:damartin@ugr.es"><i class="fas fa-envelope"></i> Contact</a>
        </div>
      </div>
    </div>
    <div class="profile-card">
      <div class="profile-img-container">
        <img src="/assets/img/sandra2.jpg" alt="Sandra Sasikumar">
      </div>
      <div class="profile-content">
        <h3>Sandra Sasikumar</h3>
        <p class="affiliation">University of Granada</p>
        <div class="profile-links">
          <a href="/people/" target="_blank"><i class="fas fa-globe"></i> Website</a>
          <a href="mailto:sandras@ugr.es"><i class="fas fa-envelope"></i> Contact</a>
        </div>
      </div>
    </div>
    <div class="profile-card">
      <div class="profile-img-container">
        <img src="/assets/img/esperanza.png" alt="Esperanza Aguilar">
      </div>
      <div class="profile-content">
        <h3>Esperanza Aguilar</h3>
        <p class="affiliation">University of Granada</p>
        <div class="profile-links">
          <a href="/people/" target="_blank"><i class="fas fa-globe"></i> Website</a>
          <a href="mailto:esperanza@ugr.es"><i class="fas fa-envelope"></i> Contact</a>
        </div>
      </div>
    </div>
  </div>
<div class="funding-block">
  <p>
    The workshop is generously funded by a 2025 Leonardo Grant for Scientific Research and
    Cultural Creation (<i>Philosophical Intuition and Non-Classical Conceptual Structure</i>),
    awarded by the <b>BBVA Foundation</b>.
  </p>
  <div class="funding-logos">
    <img src="/assets/html/bbva.svg" alt="BBVA Foundation" style="max-height: 70px;">
    <img src="/assets/html/leonardo.svg" alt="Leonardo Grant" style="max-height: 80px;">
  </div>
</div>
</section>

<hr>

<h2><i class="fas fa-envelope"></i> Contact Us</h2>
<p>For any queries, feel free to contact <a href="mailto:damartin@ugr.es?subject=Workshop%20Inquiry">Daniel Martín</a>.</p>
