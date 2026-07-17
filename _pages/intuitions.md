---
layout: default
permalink: /intuitions/
title: intuitions-study
description: A study of philosophical intuitions
nav: true
nav_order: 2
---

<script src="https://d3js.org/d3.v7.min.js"></script>
<!--  comment the live files and use local files for development -->
<script src="https://moralsciencelab.com/assets/js/intuition_raw_data-v2.js"></script>
<script src="https://moralsciencelab.com/assets/js/intuitions-helper-v2.js"></script>
<script src="/assets/js/intuition_raw_data.js"></script>
<script src="/assets/js/intuitions-helper.js"></script>
<script src="/assets/js/figuredata.js"></script>
<link rel="stylesheet" type="text/css" href="/assets/css/intuitions.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js"></script>

<style>
  /* Styles for the philosophers' dumbbell chart, scoped under #card so they
     can't collide with existing rules in intuitions.css */
  #card {
    max-width: 900px;
    margin: 30px auto 0;
  }
  #survey-results {
    max-width: 900px;
    margin: 20px auto 0;
    background: #fafaf9;
    border: 1px solid #e6e4e0;
    border-radius: 14px;
    padding: 28px 32px 32px;
  }
  #card #chartTitle {
    margin: 0 0 8px 0;
  }
  #card #intro {
    max-width: 800px;
    margin-bottom: 22px;
  }
  #card #wrap {
    display: flex;
    align-items: flex-start;
    gap: 32px;
    max-width: 1100px;
  }
  #card .axis path, #card .axis line { stroke: #d8d5d0; }
  #card .axis text { fill: #555; font-size: 12px; }
  #card .axis-title { fill: #000; font-size: 16px; font-weight: 400; }
  #card .gridline line { stroke: #eeece8; }
  #card .gridline path { stroke: none; }
  #card .quadrant-line { stroke: #ddd9d2; stroke-dasharray: 3 3; }
  #card .quadrant-label { font-size: 10px; letter-spacing: 0.03em; font-style: italic; fill: #555; }
  #card .connector { fill: none; stroke-width: 1px; opacity: 0.8; transition: opacity 0.15s; }
  #card .node-halo { fill: #fafaf9; stroke: none; }
  #card .node {
    fill-opacity: 0.16;
    stroke-width: 2px;
    cursor: pointer;
    transition: opacity 0.15s, r 0.15s, filter 0.15s;
  }
  #card .node:hover { filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.28)); }
  #card .dimmed { opacity: 0.1 !important; }
  #card #legend { font-size: 12px; user-select: none; min-width: 250px; }
  #card .legend-category {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #000;
    margin: 16px 0 6px 0;
  }
  #card .legend-category:first-child { margin-top: 0; }
  #card .legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 3px 4px;
    border-radius: 4px;
    cursor: pointer;
  }
  #card .legend-item:hover { background: #f0efec; }
  #card .legend-item.legend-inactive { opacity: 0.3; }
  #card .legend-swatch { width: 12px; height: 12px; border-radius: 50%; flex: none; }
  #phil-tooltip {
    position: absolute;
    pointer-events: none;
    background: white;
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    line-height: 1.5;
    max-width: 300px;
    opacity: 0;
    transition: opacity 0.1s;
    z-index: 10;
    font-size: 13px;
  }
</style>

<script>
  const dev_mode = false; // Set to true to enable mock data and bypass survey for testing
  // Listen for messages from the iframe
  window.addEventListener('message', function (event) {
    const responses = event.data;
   // console.log("event:", event);
    // console.log("actual message:", responses);
    if (!responses || responses.source !== "intuitionSurvey") return;
    // If the iframe signals completion and sends the result
    if (responses.complete) {
      let scenarioStr = responses.score; // raw string
      // message with scenario responses
      //console.log("Survey completed! Received responses:", responses.score);
      let scenarioObj = parseScenarioResponses(scenarioStr);
      //console.log("scenarioObj: ", scenarioObj);
      displayResponses2(responses, scenarioObj);
      // console.table(scenarioObj);
      // renderScenarioTable(scenarioObj);
    }
  });

  function displayResponses2(responses, scenarioObj) {
    toggleMode(); // Switch to light mode for better visibility of results
    document.getElementById('survey').classList.add('hidden');
    const responsesDiv = document.getElementById('survey-responses');
    responsesDiv.classList.remove('hidden');
    responsesDiv.innerHTML = `
    <h3><b>Thank you for completing the study!</b></h3>
    <br>
    <p style="text-align: left;">
    Below you'll find a display of your responses to four thought experiments alongside aggregate results from a large sample of laypeople. For each thought experiment, we provide a short summary of the philosophical issue, your answer, and the distribution of laypeople's answers. Hovering over the bars reveals the percentage of laypeople who chose each answer.</p>
    <p style="text-align: left;">
    At the bottom of the page, you'll see preliminary results from our ongoing study of philosophers' intuitions. These results are based on a smaller sample of philosophers, and we are still recruiting participants. </p>
    <div id="d3-chart"></div>`;
    displaySurveyResults(scenarioObj);
    document.getElementById('feedback-container').classList.remove('hidden');
    document.getElementById('share-menu').classList.remove('hidden');
  }

  function displaySurveyResults(scenarioObj) {
    // Show results container
    const container = d3.select("#survey-results");
    container.classed("hidden", false);
    container.selectAll("\*").remove(); // Clear previous content

    // The "broader project" section (title + philosophers chart) is part of
    // the post-survey feedback, so reveal it alongside the results.
    document.getElementById("broader-project-heading").classList.remove("hidden");
    document.getElementById("card").classList.remove("hidden");

    const shownIssues = new Set(Object.keys(scenarioObj));

    const allData = prepareData(intuitionRawData);

    const data = allData.filter(d => shownIssues.has(d.issue));

    // Tooltip
    const tooltip = d3.select("body")
      .append("div")
      .attr("id", "tooltip")
      .style("position", "absolute")
      .style("background", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    // Use your prepared raw data
    // const data = prepareData(intuitionRawData);

    console.table(data);

    // Loop over each issue
    data.forEach(d => {
      const issueDiv = container.append("div")
        .attr("class", "issue-container")
        .style("margin-bottom", "50px")
        .style("display", "flex")           // flex layout
        .style("flex-direction", "column")  // stack description + chart vertically
        .style("align-items", "center");

      // Add optional description
      issueDiv.append("div")
        .attr("class", "issue-title")
        .html(`<h3>${d.full_issue}</h3>`);

      // Add optional description
      issueDiv.append("div")
        .attr("class", "issue-description")
        .html(`<p style = "max-width: 700px; text-align: left;">${d.description}</p>`);

      // Look up participant's answer and conflicting intuitions flag for this issue
      const participantAnswer = scenarioObj[d.issue] ? scenarioObj[d.issue].A[0] : null;
      const properNouns = ["Bill", "Amanda", "Charles", "Daphne", "George", "Juliet", "Peter", "Jack", "Sarah"];
      const firstWord = participantAnswer.split(" ")[0];
      const answerLower = properNouns.includes(firstWord)
        ? participantAnswer
        : participantAnswer.replace(/^./, c => c.toLowerCase());
      const conflicting = scenarioObj[d.issue] ? scenarioObj[d.issue].B[0] : null;

      if (participantAnswer) {
        // Match against raw data to get color and the other option text
        const entries = intuitionRawData.filter(e => e.issue === d.issue);
        const chosenIndex = entries.findIndex(e => e.resp === participantAnswer);
        const answerColor = chosenIndex === 0 ? "#c44e52" : "#4c72b0";
        const otherAnswer = entries.find(e => e.resp !== participantAnswer)?.resp;
        const otherfirstWord = otherAnswer.split(" ")[0];
        const otherLower = properNouns.includes(otherfirstWord)
          ? otherAnswer
          : otherAnswer.replace(/^./, c => c.toLowerCase());

        // Build the conflict sentence
        // TODO: replace d.description with a per-option view_description field
        //       once added to intuitionRawData (e.g. entries[chosenIndex].view_description)
        const conflictSentence = conflicting === "I did"
          ? `Yet, you recognized that you also felt pulled in the opposite direction.`
          : `You told us that you did not feel the opposite intuition at all, i.e., that ${otherLower}`;

        issueDiv.append("div")
          .attr("class", "participant-answer")
          .style("max-width", "700px")
          .style("text-align", "left")
          .style("margin-bottom", "8px")
          .html(`
            <p style="margin: 0;">
              You answered that <strong style="color: ${answerColor};">${answerLower}</strong>
              ${conflictSentence}
            </p>
          `);
      }

      // Chart container
      const chartDiv = issueDiv.append("div")
        .attr("class", "d3-chart")
        .style("width", "700px")
        .style("height", "70px");

      const margin = { top: 20, right: 20, bottom: 20, left: 20 };
      const width = 700 - margin.left - margin.right;
      const height = 70 - margin.top - margin.bottom;

      const svg = d3.select(chartDiv.node())
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // X scale (proportion)
      const x = d3.scaleLinear()
        .domain([0, 1])
        .range([0, width]);

      // Prepare segments using your precomputed props
      const segments = [
        { label: d.option1_label, prop: d.option1_prop, color: "#c44e52" },
        { label: d.option2_label, prop: d.option2_prop, color: "#4c72b0" }
      ];

      // Draw segments horizontally
      let xOffset = 0;
      svg.selectAll("rect")
        .data(segments)
        .join("rect")
        .attr("x", (s) => { const x0 = xOffset; xOffset += x(s.prop); return x0; })
        .attr("y", 0)
        .attr("width", s => x(s.prop))
        .attr("height", height)
        .attr("fill", s => s.color)
        .attr("stroke-width", 2)
        .on("mouseover", (event, s) => {
          tooltip
            .style("opacity", 1)
            .html(`<strong>${s.label}</strong><br>${(s.prop * 100).toFixed(1)}%`);
        })
        .on("mousemove", (event) => {
          tooltip
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 20) + "px");
        })
        .on("mouseout", () => tooltip.style("opacity", 0));

      // Optional X axis (percentages)
      const xAxis = svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).ticks(2).tickFormat(d3.format(".0%")))

      xAxis.selectAll("text")  // only text, not line
        .style("font-size", "15px")
        .style("fill", "#333");

      // optional: style the line separately if needed
      xAxis.selectAll("path, line")
        .style("stroke", "#333")  // color of axis and tick lines
        .style("stroke-width", 2); // thickness of lines
    });

  };

  window.addEventListener("load", () => {
    const feedbackquestion = document.getElementById("feedback-question");
    const feedbackform = document.getElementById("feedback-form");
    const feedbacksubmit = document.getElementById("feedback-submit");

    console.log("Feedback elements:", { feedbackquestion, feedbackform });

    feedbackquestion.addEventListener("click", () => {
      console.log("Feedback question clicked");
      feedbackform.style.display = "block";
      // feedbackquestion.style.display = "none";
      document.getElementById("feedback-text").focus();
    });

    feedbacksubmit.addEventListener("click", () => {
      const container = document.getElementById("feedback-container");
      const text = document.getElementById("feedback-text").value;

      console.log("Feedback:", text);
      fetch("https://script.google.com/macros/s/AKfycbxkz7EBY6WW6I3KlHNke-4iDGhs2O94sgY_YG3Fhv46_avzVVKGtblSqXjVINloZGHcIg/exec", 
      { method: "POST", 
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ text }) 
      }).catch(err => console.log("Feedback save failed:", err));

      container.classList.add("fade-out");

      setTimeout(() => {
        container.style.display = "none";
      }, 1500);
    });

  });
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("share-x").onclick = () => openShare("x");
    document.getElementById("share-facebook").onclick = () => openShare("facebook");
    document.getElementById("share-linkedin").onclick = () => openShare("linkedin");
    document.getElementById("share-bluesky").addEventListener("click", async () => {
      const text = `${shareText} ${shareUrl}`;
      await navigator.clipboard.writeText(text);
      const composeUrl =
        `https://bsky.app/intent/compose?text=${encodeURIComponent(text)}`;
      window.open(composeUrl, "\_blank");
      showToast("Post copied — paste it into Bluesky");
    });
    document.getElementById("share-email").onclick = () => window.location.href = platforms.email;
    document.getElementById("copy-link").onclick = () => {
      navigator.clipboard.writeText(shareUrl);
      const toast = document.getElementById("copy-toast");
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2000);
    };
    if (dev_mode) {
      // Mock structured scenario responses
      const mockResponses = {
        source: "intuitionSurvey",
        complete: true,
        //score: "robots=A:The robot can experience love.,B:I did|theseus=A:The ship repaired with new parts is Theseus.,B:I did|phineas=A:The person after the accident is still Phineas.,B:I did|trolley=A:Throwing the person overboard is the morally right thing to do.,B:I did",
        score: generateMockScore() // Generate mock responses based on the raw data
      };
      console.log("Mock responses:", mockResponses);
      document.querySelectorAll(".initial-content").forEach(el => el.classList.add("hidden"));
      // Simulate the postMessage event
      window.dispatchEvent(new MessageEvent("message", { data: mockResponses }));
    }
  });
  function openShare(platform) {
    window.open(platforms[platform], "\_blank");
  }
</script>

<div class="header-bar">
  <h2 style="text-align: center;"><strong>Intuitions and Philosophical Expertise</strong></h2>
  <h3>Are you a philosopher? Take our 5-minute study.</h3>
</div>
<!-- Initial content and survey button -->
<div id="survey-responses" class="hidden" style="margin: 0 auto;"></div>
<div id="survey-results" class="hidden"></div>
<!-- D3.js chart and text will go here -->
<div id="d3-chart"></div>
<div class="initial-content row justify-content-center" style="max-width: 700px; margin: 0 auto;">
  <p><br><br>We are conducting a research study to examine academic philosophers' intuitions.
    <br><br>
    This study is carried out within the framework of a research project in the Departments of Philosophy at Yale
    University and the University of Granada.
    Our goal is to understand the factors that shape philosophers' intuitions about classic thought experiments.
    <br><br>
    The study consists of a survey that will take approximately <strong>5 minutes</strong> to complete.
    The study was approved by the Ethics Committee for Human Research at the University of Granada, with protocol number 5766/CEIH/2026.
    <br><br>
    If you are interested in participating, please click the button below.
    Thank you for your time and contribution to our research!
  </p>
  <br>
</div>

<div class="initial-content row justify-content-center">
  <div class="col-sm" style="width: 100%; text-align: center;">
    <button class="form-submit" style="max-width: 400px; text-align: center;" onclick="startSurvey();">
      <h3>Take me to the survey!</h3>
    </button>
  </div>
</div>

<div class="row justify-content-center" style="width: 100%; margin: 0 auto;">
  <div id="survey" class="hidden" style="margin-top:20px;">
    <iframe src="https://harvardgreene.az1.qualtrics.com/jfe/form/SV_b2yd26dhrCy608S" height="900" width="100%"
      frameborder="0" marginheight="0" marginwidth="0">
    </iframe>
  </div>
</div>

<br>

<h3 style="text-align: center;" id="broader-project-heading" class="hidden"><strong>The broader project</strong></h3>
<div id="card" class="row justify-content-center hidden" style="width: 100%; margin: 0 auto; max-width: 1000px;">
  <div id="intro">
    <p style="text-align: left;">
      Research on philosophical thought experiments consistently finds that people disagree about the
      correct answer&mdash;some say it's A, others say it's B. One explanation is that individual people actually
      hold conflicting intuitions: Many people who ultimately choose B may still feel pulled toward A, and
      <i>vice versa</i>. 
    </p>
    <p style="text-align: left;">
      In recent work, we tested this hypothesis, asking whether laypeople have conflicting intuitions about a series of fifteen different thought experiments drawn from the philosophical literature.
      (You can check out the preprint <a href="https://www.researchgate.net/publication/400394526_Philosophical_thought_experiments_elicit_conflicting_intuitions" target="_blank" rel="noopener">here</a>).</p>
     <p style="text-align: left;">Our next step is to understand whether <i>philosophers'</i> responses show the same patterns or differ as a result of philosophical training.
    </p>
    <h4 style="text-align: left;"><b>Conflicting intuitions among philosophers: Preliminary results</b></h4>
    <p style="text-align: left;">The figure below displays the preliminary results with philosophers.
      Each thought experiment is represented by a pair of circles, one for each answer. The <i>x</i>-axis shows the percentage of philosophers who gave that answer, and the <i>y</i>-axis shows the percentage of those philosophers
      who reported feeling conflicted.</p>
    <p style="text-align: left;">
      Click on a legend entry to highlight a thought experiment and hover over the circles to see more information about each answer.</p>
      <div class="share-callout">
      <p style="font-size: 1.1em; text-align: center;">
      <strong>We still need more philosophers to participate to reach our target sample size.</strong><br>Please consider sharing this study with other philosophers. We greatly appreciate it. 
      </p>
      </div>
  </div>

  <div id="wrap">
    <div style="position: relative;">
        <svg id="chart"></svg>
        <div id="phil-tooltip"></div>
    </div>
    <div id="legend">
        <div id="legend-items"></div>
    </div>
  </div>
</div>

<script>
  // ==== Philosophers' dumbbell chart: issue -> long title ====
  const philIssueTitles = {
    lying: "Lying and deceiving",
    robots: "Phenomenal consciousness",
    phineas: "Personal identity",
    theseus: "Identity persistence",
    truetemp: "Reliabilism",
    trolley: "Utilitarianism",
    individuation: "Individuation of persons",
    freewill: "Compatibilism",
    prevention: "Double prevention",
    death: "The brain death criterion",
    rules: "Letter vs. spirit",
    brainvat: "Skepticism",
    twinearth: "Meaning",
    happiness: "Happiness",
    knowledge: "Knowledge and belief"
  };
  function philLabelFor(issue) {
    return philIssueTitles[issue] || issue;
  }

  // Group thought experiments by area of philosophy, each with a base hue
  const philCategories = [
    { name: "Epistemology", base: "#59a14f", issues: ["truetemp", "knowledge", "brainvat"] },
    { name: "Ethics", base: "#f28e2b", issues: ["trolley", "rules", "happiness"] },
    { name: "Identity", base: "#4e79a7", issues: ["phineas", "theseus", "individuation"] },
    { name: "Language", base: "#b07aa1", issues: ["twinearth", "lying"] },
    { name: "Metaphysics", base: "#76b7b2", issues: ["freewill", "death", "prevention"] },
    { name: "Mind", base: "#e15759", issues: ["robots"] }
  ];

  const philColorMap = {};
  philCategories.forEach(cat => {
    const base = d3.color(cat.base);
    const dark = base.darker(0.9);
    const light = base.brighter(0.9);
    const k = cat.issues.length;
    cat.issues.forEach((issue, i) => {
      const t = k === 1 ? 0.5 : i / (k - 1);
      philColorMap[issue] = d3.interpolateLab(dark, light)(t);
    });
  });
  function philColorFor(issue) {
    return philColorMap[issue] || "#999";
  }

  // ==== Layout ====
  const philMargin = { top: 20, right: 20, bottom: 50, left: 60 };
  const philWidth = 660 - philMargin.left - philMargin.right;
  const philHeight = 700 - philMargin.top - philMargin.bottom;

  const philSvg = d3.select("#chart")
    .attr("width", philWidth + philMargin.left + philMargin.right)
    .attr("height", philHeight + philMargin.top + philMargin.bottom);

  const philDefs = philSvg.append("defs");

  const philG = philSvg.append("g")
    .attr("transform", `translate(${philMargin.left},${philMargin.top})`);

  const philX = d3.scaleLinear().domain([0, 1]).nice().range([0, philWidth]);
  const philY = d3.scaleLinear().domain([0, 1]).nice().range([philHeight, 0]);

  philG.append("g")
    .attr("class", "gridline")
    .call(d3.axisLeft(philY).tickSize(-philWidth).tickFormat("").tickValues([0, 0.25, 0.5, 0.75, 1]));

  philG.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0,${philHeight})`)
    .call(d3.axisBottom(philX).tickValues([0, 0.25, 0.5, 0.75, 1]).tickFormat(d3.format(".0%")));

  philG.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(philY).tickValues([0, 0.25, 0.5, 0.75, 1]).tickFormat(d3.format(".0%")));

  philG.append("text")
    .attr("class", "axis-title")
    .attr("x", philWidth / 2).attr("y", philHeight + 40)
    .attr("text-anchor", "middle")
    .text("Answer (%)");

  philG.append("text")
    .attr("class", "axis-title")
    .attr("transform", "rotate(-90)")
    .attr("x", -philHeight / 2).attr("y", -44)
    .attr("text-anchor", "middle")
    .text("Conflicting intuitions (%)");

  // ---- Quadrant guide lines + labels ----
  philG.append("line")
    .attr("class", "quadrant-line")
    .attr("x1", philX(0.5)).attr("x2", philX(0.5))
    .attr("y1", 0).attr("y2", philHeight);

  philG.append("line")
    .attr("class", "quadrant-line")
    .attr("x1", 0).attr("x2", philWidth)
    .attr("y1", philY(0.5)).attr("y2", philY(0.5));

  const philQuadrantLabels = [
    { text: "Conflicted, minority answer", x: 8, y: 16, anchor: "start" },
    { text: "Conflicted, majority answer", x: philWidth - 8, y: 16, anchor: "end" },
    { text: "Unconflicted, minority answer", x: 8, y: philHeight - 10, anchor: "start" },
    { text: "Unconflicted, majority answer", x: philWidth - 8, y: philHeight - 10, anchor: "end" }
  ];
  philG.selectAll(".quadrant-label")
    .data(philQuadrantLabels)
    .join("text")
    .attr("class", "quadrant-label")
    .attr("x", d => d.x)
    .attr("y", d => d.y)
    .attr("text-anchor", d => d.anchor)
    .text(d => d.text);

  // ---- Tooltip (uses #phil-tooltip, distinct from the layperson bar chart's #tooltip) ----
  const philTooltip = d3.select("#phil-tooltip");
  function philShowTooltip(event, d) {
    philTooltip.style("opacity", 1).html(
      `<strong>${philLabelFor(d.issue)}</strong><br/>
       "${d.answer}"<br/>
       Answer: ${d3.format(".0%")(d.prob)}<br/> Conflicting intuitions: ${d3.format(".0%")(d.both_prop)}`
    );
    philMoveTooltip(event);
  }
  function philMoveTooltip(event) {
    const [mx, my] = d3.pointer(event, document.getElementById("wrap"));
    philTooltip.style("left", (mx + 16) + "px").style("top", (my - 10) + "px");
  }
  function philHideTooltip() { philTooltip.style("opacity", 0); }

  let philActiveIssue = null;
  function philApplyHighlight(hoverIssue) {
    const target = hoverIssue || philActiveIssue;
    philG.selectAll(".connector, .node, .node-halo")
      .classed("dimmed", function () {
        if (!target) return false;
        return d3.select(this).attr("data-issue") !== target;
      });
    d3.select("#legend-items").selectAll(".legend-item")
      .classed("legend-inactive", d => target ? d.issue !== target : false);
  }

  // ==== Render ====
  function philRender(rows) {
    philActiveIssue = null;

    const grouped = Array.from(
      d3.group(rows, d => d.issue),
      ([issue, values]) => ({ issue, longName: philLabelFor(issue), points: values })
    );

    const r = d3.scaleSqrt().domain([0, d3.max(rows, d => d.n)]).range([1, 20]);

    philG.selectAll(".pair").remove();
    philDefs.selectAll("*").remove();
    d3.select("#legend-items").selectAll("*").remove();

    const groupsSel = philG.selectAll(".pair")
      .data(grouped)
      .join("g")
      .attr("class", "pair")
      .on("mouseenter", (event, d) => philApplyHighlight(d.issue))
      .on("mouseleave", () => philApplyHighlight(null))
      .on("click", (event, d) => {
        philActiveIssue = philActiveIssue === d.issue ? null : d.issue;
        philApplyHighlight(null);
      });

    groupsSel.each(function (d) {
      const gradId = "grad-" + d.issue;
      const c = philColorFor(d.issue);
      const grad = philDefs.append("linearGradient")
        .attr("id", gradId)
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", philX(d.points[0].prob)).attr("y1", philY(d.points[0].both_prop))
        .attr("x2", philX(d.points[1].prob)).attr("y2", philY(d.points[1].both_prop));
      grad.append("stop").attr("offset", "0%").attr("stop-color", d3.color(c).darker(0.3));
      grad.append("stop").attr("offset", "100%").attr("stop-color", d3.color(c).brighter(0.3));
    });

    groupsSel.append("line")
      .attr("class", "connector")
      .attr("data-issue", d => d.issue)
      .attr("x1", d => philX(d.points[0].prob))
      .attr("y1", d => philY(d.points[0].both_prop))
      .attr("x2", d => philX(d.points[1].prob))
      .attr("y2", d => philY(d.points[1].both_prop))
      .attr("stroke", d => `url(#grad-${d.issue})`);

    groupsSel.each(function (d) {
      const sel = d3.select(this);
      const c = philColorFor(d.issue);

      sel.selectAll(".node-halo")
        .data(d.points.map(p => ({ ...p })))
        .join("circle")
        .attr("class", "node-halo")
        .attr("data-issue", d.issue)
        .attr("cx", p => philX(p.prob))
        .attr("cy", p => philY(p.both_prop))
        .attr("r", p => r(p.n));

      sel.selectAll(".node")
        .data(d.points.map(p => ({ ...p })))
        .join("circle")
        .attr("class", "node")
        .attr("data-issue", d.issue)
        .attr("cx", p => philX(p.prob))
        .attr("cy", p => philY(p.both_prop))
        .attr("r", p => r(p.n))
        .attr("stroke", c)
        .attr("fill", c)
        .on("mouseenter", (event, p) => philShowTooltip(event, p))
        .on("mousemove", philMoveTooltip)
        .on("mouseleave", philHideTooltip);
    });

    // ---- Grouped legend ----
    const legendRoot = d3.select("#legend-items");
    philCategories.forEach(cat => {
      const present = cat.issues.filter(issue => grouped.some(g => g.issue === issue));
      if (present.length === 0) return;

      legendRoot.append("div")
        .attr("class", "legend-category")
        .text(cat.name);

      const items = legendRoot.selectAll(null)
        .data(present.map(issue => ({ issue, longName: philLabelFor(issue) })))
        .enter()
        .append("div")
        .attr("class", "legend-item")
        .on("mouseenter", (event, d) => philApplyHighlight(d.issue))
        .on("mouseleave", () => philApplyHighlight(null))
        .on("click", (event, d) => {
          philActiveIssue = philActiveIssue === d.issue ? null : d.issue;
          philApplyHighlight(null);
        });

      items.append("div")
        .attr("class", "legend-swatch")
        .style("background", d => philColorFor(d.issue))
        .style("border", d => `2px solid ${philColorFor(d.issue)}`);

      items.append("span").text(d => d.longName);
    });
  }

  // ==== Data normalization (figureData comes from /assets/js/figuredata.js) ====
  function philNormalizeRows(parsed) {
    return parsed.map(d => ({
      issue: d.scenario ?? d.issue,
      answer: d.answer,
      n: +d.n,
      prob: +d.prob,
      both_prop: +d.both_prop
    }));
  }

  philRender(philNormalizeRows(figureData));
</script>

<div id="share-menu" class="hidden"
  style="text-align:center; margin:30px; padding: 20px; max-width: 700px; margin-left: auto; margin-right: auto;">
  <h4 style="margin-bottom: 10px;">Feel free to share the study with other philosophers!</h4>
  <div style="display:flex; justify-content:center; gap:18px; flex-wrap:wrap;">
    <button class="form-submit" type="button" id="share-x">
      X.com<br><img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" width="40"
        style="cursor:pointer;">
    </button>
    <button class="form-submit" id="share-facebook">
      Facebook<br><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
        height="40" style="cursor:pointer;">
    </button>
    <button class="form-submit" id="share-linkedin">
      LinkedIn<br><img id="share-linkedin"
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" height="40"
        style="cursor:pointer;">
    </button>
    <button class="form-submit" id="share-bluesky">
      Bluesky<br>
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg" height="40" alt="Bluesky">
    </button>
    <button class="form-submit" id="share-email">
      Email<br><img id="share-email" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg"
        height="40" style="cursor:pointer;">
    </button>
    <button class="form-submit" id="copy-link">
      Copy Link<br><img id="copy-link"
        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Font_Awesome_5_solid_link.svg" height="40"
        alt="Copy link to clipboard" style="cursor:pointer;">
    </button>
  </div>

  <div id="copy-toast" aria-live="polite">
    <p>Link copied to clipboard</p>
  </div>

<div class="row justify-content-center hidden" id="feedback-container"
  style="margin:20px; text-align:center; padding: 20px; max-width: 1000px; margin-left: auto; margin-right: auto;">
  <div id="feedback-question" style="cursor:pointer; width:90%; margin: 0 auto;">
    <h4>Any feedback on the study? Click here to provide your thoughts.</h4>
  </div>
  <div id="feedback-form"
    style="display:none; margin-top:15px; max-width: 1000px; width: 800px; margin-left: auto; margin-right: auto;">
    <textarea id="feedback-text" rows="4" style="width:90%; max-width:900px;"></textarea>
    <br><br>
    <button class="form-submit" id="feedback-submit">Send feedback</button>
  </div>
</div>

</div>
