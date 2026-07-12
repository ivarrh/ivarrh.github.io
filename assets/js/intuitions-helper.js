// editable file for intuition survey page

const shareText =
  "I just contributed to the Philosophical Intuitions Survey!<br>Share your own intuitions and help advance our understanding of philosophers' and the public's intuitions:";

const shareUrl = "https://moralsciencelab.com/intuitions/";

const shareSubject = "Intuitions and Philosophical Expertise Survey";

const platforms = {
  x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
  email: `mailto:?subject=${encodeURIComponent(shareSubject)}&body=${encodeURIComponent(shareText + " " + shareUrl)}`,
};

// helper functions

function toggleMode() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = "light";
  htmlElement.setAttribute("data-theme", newTheme);
}

function startSurvey() {
  document
    .querySelectorAll(".initial-content")
    .forEach((el) => el.classList.add("hidden"));

  document.getElementById("survey").classList.remove("hidden");

  toggleMode();
}

// FIX: was called in Bluesky share handler but never defined — caused ReferenceError
function showToast(message) {
  const toast = document.getElementById("copy-toast");
  const toastText = toast.querySelector("p");
  if (toastText) toastText.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

function prepareData(data) {
  const grouped = d3.group(data, (d) => d.issue);

  const result = [];

  grouped.forEach((values, key) => {
    result.push({
      issue: key,
      full_issue: values[0].full_issue,

      description: values[0].description,

      option1_label: values[0].resp,
      option1_prop: values[0].proportion,
      option1_freq: values[0].frequency,

      option2_label: values[1].resp,
      option2_prop: values[1].proportion,
      option2_freq: values[1].frequency,
    });
  });

  return result;
}

// Parsing function for participant responses from Qualtrics plain text
function parseScenarioResponses(str) {
  let scenarios = str.split("|").filter((s) => s.trim() !== "");
  let obj = {};
  scenarios.forEach((s) => {
    let [id, respStr] = s.split("=");
    let responses = {};
    if (respStr) {
      respStr.split(";").forEach((r) => {
        let [key, val] = r.split(":");
        responses[key] = val ? val.split(";") : [];
      });
    }
    const rawEntry = intuitionRawData.find((d) => d.issue === id);
    const fullIssue = rawEntry ? rawEntry.full_issue : id;

    responses.full_issue = fullIssue;

    obj[id] = responses;
  });

  return obj;
}

function renderScenarioTable(scenarioObj) {
  const container = document.getElementById("survey-responses");
  if (!container) return;

  // Create table element
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "95%";
  table.style.maxWidth = "1000px";
  table.style.margin = "20px auto";

  // Add header row
  const header = table.insertRow();
  ["Thought experiment", "Your answer", "Conflicting intuitions?"].forEach(
    (text) => {
      const th = document.createElement("th");
      th.style.border = "1px solid #333";
      th.style.padding = "4px";
      th.style.background = "#f0f0f0";

      const p = document.createElement("h4");
      p.textContent = text;
      p.style.margin = "0"; // important to avoid extra spacing

      th.appendChild(p);
      header.appendChild(th);
    },
  );
  // Add data rows
  Object.keys(scenarioObj).forEach((issue) => {
    const row = table.insertRow();

    // Issue name (full issue)
    const cellIssue = row.insertCell();
    cellIssue.style.border = "1px solid #333";
    cellIssue.style.padding = "4px";

    const pIssue = document.createElement("p");
    pIssue.style.font = "inherit";
    pIssue.style.fontSize = "1.3rem";
    pIssue.style.lineHeight = "1.5";
    pIssue.style.textAlign = "left";
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
    // cellB.style.textAlign = "left";

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
  document.getElementById("survey").classList.add("hidden");

  // Show results div
  const responsesDiv = document.getElementById("survey-responses");
  responsesDiv.classList.remove("hidden");

  // Display the result content
  responsesDiv.innerHTML = `
        <h3>Thank you very much for completing the study!</h3>
        <br>
        <h4>Below is a breakdown of the survey results we obtained with laypeople, showing how they answered each thought experiment. Hover over the bars to see the exact proportions.</h4>
    `;

  displaySurveyResults();

  const feedbackDiv = document.getElementById("feedback-container");
  feedbackDiv.classList.remove("hidden");

  const shareDiv = document.getElementById("share-menu");
  shareDiv.classList.remove("hidden");
}

function generateMockScore(numIssues = 4) {
  const grouped = d3.group(intuitionRawData, (d) => d.issue);
  const issueKeys = Array.from(grouped.keys());

  // Shuffle and pick numIssues
  const sampled = issueKeys.sort(() => Math.random() - 0.5).slice(0, numIssues);

  return sampled
    .map((issue) => {
      const options = grouped.get(issue);
      const chosen = options[Math.floor(Math.random() * options.length)];
      const conflicting = Math.random() > 0.5 ? "I did" : "I did not";
      return `${issue}=A:${chosen.resp};B:${conflicting}`;
    })
    .join("|");
}
