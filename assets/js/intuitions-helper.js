// editable file for intuition survey page

const shareText =
  "I just explored my philosophical intuitions — see how yours compare 🧠";

const shareUrl = "https://moralsciencelab.com/intuitions/";

const shareSubject = "My Philosophical Intuitions";

const platforms = {
  x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
  email: `mailto:?subject=${encodeURIComponent(shareSubject)}&body=${encodeURIComponent(shareText + " " + shareUrl)}`,
};

// helper functions

function toggleMode() {
  const htmlElement = document.documentElement; // <html> element
  const currentTheme = htmlElement.getAttribute("data-theme");

  // Toggle between light and dark themes
  const newTheme = currentTheme === "dark" ? "light" : "light";
  htmlElement.setAttribute("data-theme", newTheme);
}

function startSurvey() {
  // Hide all initial content
  document
    .querySelectorAll(".initial-content")
    .forEach((el) => el.classList.add("hidden"));

  // Show the survey iframe
  document.getElementById("survey").classList.remove("hidden");

  // Optionally, toggle the theme (light/dark) based on current mode
  toggleMode();
}

function prepareData(data) {
  // issues actually shown to the participant
  // const shownIssues = new Set(Object.keys(scenarioObj));

  // keep only rows whose issue is in scenarioObj
  // const filtered = data.filter((d) => shownIssues.has(d.issue));

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

// parsing function for participant responses from Qualtrics plain text

// Parsing function
function parseScenarioResponses(str) {
  let scenarios = str.split("|").filter((s) => s.trim() !== "");
  let obj = {};
  scenarios.forEach((s) => {
    let [id, respStr] = s.split("=");
    let responses = {};
    if (respStr) {
      respStr.split(",").forEach((r) => {
        let [key, val] = r.split(":");
        responses[key] = val ? val.split(";") : [];
      });
    }
    // Lookup full_issue from intuitionRawData
    const rawEntry = intuitionRawData.find((d) => d.issue === id);
    const fullIssue = rawEntry ? rawEntry.full_issue : id;

    // Attach full_issue to the scenario
    responses.full_issue = fullIssue;

    obj[id] = responses;
  });

  return obj;
}
