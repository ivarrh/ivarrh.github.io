---
layout: default
permalink: /intuitions/
title: intuitions
description: <h3>A study of philosophical intuitions</h3>
nav: false
nav_order: 2
---

<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://moralsciencelab.com/assets/js/intuition_raw_data.js"></script>
<script src="https://moralsciencelab.com/assets/js/intuitions-helper.js"></script>
<script>
  // Dev mode flag 
  const dev_mode = false; // Set to true to enable mock data and bypass survey for testing

  // Listen for messages from the iframe
  window.addEventListener('message', function (event) {
    const responses = event.data;
    console.log("event:", event);
    console.log("actual message:", responses);

    // Check the origin of the message 
    //   if (event.origin !== 'https://harvardgreene.az1.qualtrics.com') return;
    // Only respond to OUR message
    if (!responses || responses.source !== "intuitionSurvey") return;

    // If the iframe signals completion and sends the result
    if (responses.complete) {
      let scenarioStr = responses.score; // raw string

      // message with scenario responses
      //console.log("Survey completed! Received responses:", responses.score);

      // structured responses
      let scenarioObj = parseScenarioResponses(scenarioStr);
      //console.log("scenarioObj: ", scenarioObj);

      displayResponses2(responses, scenarioObj);

      // console.table(scenarioObj);

      renderScenarioTable(scenarioObj);
    }
  });

  function renderScenarioTable(scenarioObj) {
    const container = document.getElementById('survey-responses');
    if (!container) return;

    // Create table element
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.width = "95%";
    table.style.maxWidth = "1200px";
    table.style.margin = "20px auto";

    // Add header row
    const header = table.insertRow();
    ["Thought experiment", "Your answer", "Conflicting intuitions?"].forEach(text => {
      const th = document.createElement("th");
      th.style.border = "1px solid #333";
      th.style.padding = "4px";
      th.style.background = "#f0f0f0";

      const p = document.createElement("h4");
      p.textContent = text;
      p.style.margin = "0"; // important to avoid extra spacing

      th.appendChild(p);
      header.appendChild(th);
    });
    // Add data rows
    Object.keys(scenarioObj).forEach(issue => {
      const row = table.insertRow();

      // Issue name (full issue)
      const cellIssue = row.insertCell();
      cellIssue.style.border = "1px solid #333";
      cellIssue.style.padding = "4px";

      const pIssue = document.createElement("p");
      pIssue.style.font = "inherit";
      pIssue.style.fontSize = "1.3rem";
      pIssue.style.lineHeight = "1.5";
      pIssue.innerHTML = scenarioObj[issue].full_issue; // allows <b>
      pIssue.style.margin = "0";
      cellIssue.appendChild(pIssue);

      // Response A
      const cellA = row.insertCell();
      cellA.style.border = "1px solid #333";
      cellA.style.padding = "4px";

      const pA = document.createElement("p");
      pA.style.font = "inherit";
      pA.style.fontSize = "1.3rem";
      pA.style.lineHeight = "1.5";
      pA.textContent = scenarioObj[issue].A.join(", ");
      pA.style.margin = "0";
      cellA.appendChild(pA);

      // Response B
      const cellB = row.insertCell();
      cellB.style.border = "1px solid #333";
      cellB.style.padding = "4px";

      const pB = document.createElement("p");
      pB.style.font = "inherit";
      pB.style.fontSize = "1.3rem";
      pB.style.lineHeight = "1.5";
      pB.textContent = scenarioObj[issue].B.join(", ");
      pB.style.margin = "0";
      cellB.appendChild(pB);
    });

    // Clear previous content and append table
    // container.innerHTML = "";
    container.appendChild(table);
  }

  // Function to handle displaying survey results
  function displayResponses(responses) {
    // Hide the survey iframe
    document.getElementById('survey').classList.add('hidden');

    // Show results div
    const responsesDiv = document.getElementById('survey-responses');
    responsesDiv.classList.remove('hidden');

    // Display the result content
    responsesDiv.innerHTML = `
        <h3>Thank you for completing the study!</h3>
        <br>
        <h4>Below is a breakdown of the survey results we obtained with laypeople, showing how they answered each thought experiment. Hover over the bars to see the exact proportions.</h4>
        <div id="d3-chart"></div>
    `;

    displaySurveyResults();

    const feedbackDiv = document.getElementById('feedback-container');
    feedbackDiv.classList.remove('hidden');

    const shareDiv = document.getElementById('share-menu');
    shareDiv.classList.remove('hidden');

  }

  function displayResponses2(responses, scenarioObj) {
    document.getElementById('survey').classList.add('hidden');

    const responsesDiv = document.getElementById('survey-responses');
    responsesDiv.classList.remove('hidden');

    responsesDiv.innerHTML = `
    <h3>Thank you for completing the study!</h3>
    <br>
    <h4>Below is a breakdown of the survey results we obtained with laypeople, showing how they answered each thought experiment. Hover over the bars to see the exact proportions.</h4>
    <div id="d3-chart"></div>
  `;

    displaySurveyResults(scenarioObj);

    document.getElementById('feedback-container').classList.remove('hidden');
    document.getElementById('share-menu').classList.remove('hidden');
  }


  function displaySurveyResults(scenarioObj) {

    // Show results container
    const container = d3.select("#survey-results");
    container.classed("hidden", false);
    container.selectAll("*").remove(); // Clear previous content

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
      // fetch("/save-feedback", { method: "POST", body: JSON.stringify({ text }) })

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
      window.open(composeUrl, "_blank");
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
        score: "twinearth=A:No,B:I did|phineas=A:Yes,B:I did not|trolley=A:Yes,B:I did",
      };

      // Simulate the postMessage event
      window.dispatchEvent(new MessageEvent("message", { data: mockResponses }));
    }
  });

  function openShare(platform) {
    window.open(platforms[platform], "_blank");
  }

</script>
<style>
  .initial-content {
    display: block;
  }

  .hidden {
    display: none;
  }

  .invisible {
    visibility: hidden;
  }

  #survey {
    margin-top: 45px;
    position: absolute;
    /* Fullscreen mode */
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    /* Optional background overlay */
    z-index: 999;
  }

  .result-message {
    text-align: center;
    margin-top: 20px;
  }

  #survey-responses {
    margin: 40px auto;
    padding: 30px;
    text-align: center;
  }

  /* Optional: space for D3 chart */
  #survey-responses svg {
    margin-top: 20px;
  }

  #share-native {
    margin: 6px;
    padding: 10px 14px;
    border-radius: 8px;
    border: 1px solid #ddd;
    background: #fff;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
  }

  #share-native:hover {
    background: #f3f3f3;
  }

  .fade-out {
    opacity: 0;
    transition: opacity 1.5s ease;
  }

  #copy-toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background: #2e7d32;
    color: white;
    padding: 10px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 9999;
  }

  #copy-toast.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
</style>

<div class="header-bar">
  <h2><strong>💭 Intuitions in Philosophy 🧩</strong></h2>
  <h3>Are you a philosopher? Take our 5-minute study.</h3>
</div>
<!-- Initial content and survey button -->
<div id="survey-responses" class="hidden" style="width: 100%; margin: 0;"></div>
<div id="survey-results" class="hidden" style="width: 100%; margin: 0;"></div>
<!-- D3.js chart and text will go here -->
<div id="d3-chart"></div>
<div class="initial-content row justify-content-center" style="max-width: 1000px; margin: 0 auto;">
  <p><br><br>We are conducting a research study to examine academic philosophers' intuitions.
    <br><br>
    This study is carried out within the framework of a research project in the Departments of Philosophy at Yale
    University and the University of Granada.
    Our goal is to understand the factors that shape philosophers' intuitions about classic thought experiments.
    <br><br>
    The study consists of a survey that will take approximately <strong>5 minutes</strong> to complete.
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

<div class="row justify-content-center hidden" id="feedback-container"
  style="margin:30px; text-align:center; padding: 20px; max-width: 1000px; margin-left: auto; margin-right: auto;">
  <div id="feedback-question" style="cursor:pointer; width:90%; margin: 0 auto;">
    <h4>Any feedback on the study? Click here to share your thoughts!</h4>
  </div>
  <div id="feedback-form"
    style="display:none; margin-top:15px; max-width: 1000px; width: 800px; margin-left: auto; margin-right: auto;">
    <textarea id="feedback-text" rows="4" style="width:90%; max-width:900px;"
      placeholder="Optional — anything confusing, surprising, or interesting?"></textarea>
    <br><br>
    <button class="form-submit" id="feedback-submit">Send feedback</button>
  </div>
</div>

<div id="share-menu" class="hidden"
  style="text-align:center; margin:30px; padding: 20px; border-radius: 8px; border: 1px solid #ddd; max-width: 700px; margin-left: auto; margin-right: auto;">
  <h4 style="margin-bottom: 10px;">Share the study with other philosophers!</h4>
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
    <p>✅ Link copied to clipboard</p>
  </div>
</div>