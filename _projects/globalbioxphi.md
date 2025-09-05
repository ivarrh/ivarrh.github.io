---
layout: page
title: global bioxphi
description: How does culture shape our responses to bioethical issues?
permalink: /projects/globalbioxphi/
redirect_from:
  - /globalbioxphi/
img: assets/img/glri.png
importance: 4
category: current
---

  <div class="workshop-description">
  <p>
    The <strong>Global BioXPhi Research Initiative</strong> seeks to expand <a href="https://www.researchgate.net/publication/337196406_Experimental_Philosophical_Bioethics">experimental bioethics</a> research across diverse cultural contexts around the world. How does culture shape our responses to bioethical issues? We are assembling a team of collaborators to conduct studies internationally, with the aim of understanding the degree to which bioethical intuitions vary across cultures. </p>
    <p>
    So far, we have received expressions of interest from over 20 countries!
  </p>
<!-- INLINE MAP START -->
<style>
  .countries {
      fill: none;
      stroke: #fff;
      stroke-linejoin: round;
  }
  .legendThreshold {
      font-size: 11px;
      font-family: sans-serif;
      fill: var(--card-color);
  }
  .tooltip {
      position: absolute;
      background: var(--card-bg);
      color: var(--card-color);
      border: 1px solid var(--input-border);
      padding: 5px 10px;
      border-radius: 4px;
      box-shadow: 0 2px 4px var(--card-shadow);
      pointer-events: none;
      opacity: 0;
  }
  #bioxphi-map {
      width: 100%;       /* full width on mobile */
      max-width: 900px;  /* cap at desktop size */
      height: auto;
      display: block;
      margin: 0 auto;
  }
</style>

<svg id="bioxphi-map" viewBox="0 0 900 500" preserveAspectRatio="xMidYMid meet"></svg>

<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>
<script src="https://d3js.org/d3-geo-projection.v2.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3-legend/2.24.0/d3-legend.js"></script>
<script>
  var svg = d3.select("#bioxphi-map");
  var projection = d3.geoNaturalEarth1();
  var path = d3.geoPath().projection(projection);
  var data = d3.map();

  // CSS variables → JS
  function getCssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function getColorScale() {
    return d3.scaleThreshold()
      .domain([1, 2, 3])
      .range([
        "#eee",
        getCssVar("--map-light"),
        getCssVar("--map-mid"),
        getCssVar("--map-dark")
      ]);
  }

  var colorScale = getColorScale();

  // Legend group
  var g = svg.append("g").attr("class", "legendThreshold");

  var labels = ['0', '1', '2', '3+'];

  function drawLegend() {
    g.selectAll("*").remove(); // clear old legend
    var legend = d3.legendColor()
        .labels(d => labels[d.i])
        .shapeWidth(18)
        .shapeHeight(12)
        .shapePadding(4)
        .orient("vertical")
        .scale(colorScale);
    g.call(legend);
  }

  function resizeProjection() {
    var bbox = svg.node().getBoundingClientRect();
    var width = bbox.width;
    var height = width * 0.55; // keep ~16:9 ratio (900/500)

    projection
      .scale(width / 1.6 / Math.PI)
      .translate([width / 2, height / 2]);

    svg.attr("viewBox", `0 0 ${width} ${height}`);

    svg.selectAll(".Country").attr("d", path);

    g.attr("transform", `translate(20, ${height - 120})`);
    drawLegend();
  }

  // Update on theme change
  const observer = new MutationObserver(() => {
    colorScale = getColorScale();
    svg.selectAll(".Country").attr("fill", d => colorScale(d.total));
    drawLegend();
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  d3.queue()
    .defer(d3.json, "/assets/html/world-110m.geojson")
    .defer(d3.csv, "/assets/html/mooc-countries.csv", d => data.set(d.code, +d.total))
    .await(ready);

  function ready(error, topo) {
    if (error) throw error;

    let tooltip = d3.select("body").append("div").attr("class", "tooltip");

    svg.append("g").attr("class", "countries")
      .selectAll("path")
      .data(topo.features)
      .enter().append("path")
      .attr("class", "Country")
      .attr("fill", function(d){ d.total = data.get(d.id) || 0; return colorScale(d.total); })
      .attr("d", path)
      .style("stroke","none")
      .style("stroke-width","1px")
      .style("opacity",0.7)
      .on("mouseover", function(d) {
        d3.selectAll(".Country").style("opacity",0.5);
        d3.select(this).style("opacity",1).style("stroke","white");
        if(d.total>0){
          tooltip.transition().duration(200).style("opacity",1);
          tooltip.html(`<b>${d.properties.name}</b> (${d.total})`)
                 .style("left",(d3.event.pageX+10)+"px")
                 .style("top",(d3.event.pageY-20)+"px");
        }
      })
      .on("mousemove", function(d) {
        if(d.total>0){
          tooltip.style("left",(d3.event.pageX+10)+"px")
                 .style("top",(d3.event.pageY-20)+"px");
        }
      })
      .on("mouseleave", function(d) {
        d3.selectAll(".Country").transition().duration(200).style("opacity",0.7).style("stroke","none");
        tooltip.transition().duration(200).style("opacity",0);
      });

    // Initial fit
    resizeProjection();
  }

  // Responsive resizing
  window.addEventListener("resize", resizeProjection);
</script>
<!-- INLINE MAP END -->

  <p>
    The Global BioXPhi Research Initiative draws inspiration from the previous <a href = "https://osf.io/sk7r3/">cross-cultural study swap in experimental jurisprudence</a>, which replicated published findings in multiple countries and yielded valuable insights into the degree of cultural variation on questions of jurisprudential interest (see Exhibits <a href = "http://dx.doi.org/10.2139/ssrn.5185137">1</a> and <a href = "https://www.pnas.org/doi/full/10.1073/pnas.2206531119">2</a>). This new initiative will take similar steps: from selecting a set of studies, to translating the materials, pre-registering our hypotheses and analysis plans, and collecting data across all participating study sites. </p>
  <p style="text-align:center; font-size:1.2em;">
    <strong>Would you like to take part in cross-cultural research in BioXPhi?</strong><br>We are currently gathering expressions of interest.
  </p>
  <p>
  The initiative aims to publish a series of co-authored papers. To qualify for co-authorship, collaborators are expected to contribute at all stages of the research process: planning and design, translation of study materials, data collection, drafting and/or critical revision of the manuscript, and approval of the final version for submission.
  </p>
<br>
  <h3><strong>Expressions of Interest</strong><h3>
<p><small>
  The coordinating committee will discuss all the proposals and send invitations by October 2025.<br>We aim at maximizing global coverage, linguistically and culturally, which means that we may not be able to accommodate multiple proposals from the same cultural and linguistic region. 
  </small></p>
<form 
  action="https://mscilab.com/forms/submit.php" 
  method="POST" 
  class="full-width-form"
  data-theme="light">
<!-- Checkbox for data collection -->
<label class="form-checkbox-container">
    <input type="checkbox" name="collect_data" class="form-checkbox"> 
    <span class="form-checkbox-label">I want to collect data for the Global BioXPhi Research Initiative.</span>
  </label>
  <!-- Location dropdown -->
  <label class="form-field" style="max-width: 400px;">
    <span class="form-label">The country/territory I would collect data in is:</span>
   <select name="country" class="form-select" id="country">
        <option value="0" label="Select a country/territory... " selected="selected">Select a country/territory... </option>
        <optgroup id="country-optgroup-Africa" label="Africa">
            <option value="DZ" label="Algeria">Algeria</option>
            <option value="AO" label="Angola">Angola</option>
            <option value="BJ" label="Benin">Benin</option>
            <option value="BW" label="Botswana">Botswana</option>
            <option value="BF" label="Burkina Faso">Burkina Faso</option>
            <option value="BI" label="Burundi">Burundi</option>
            <option value="CM" label="Cameroon">Cameroon</option>
            <option value="CV" label="Cape Verde">Cape Verde</option>
            <option value="CF" label="Central African Republic">Central African Republic</option>
            <option value="TD" label="Chad">Chad</option>
            <option value="KM" label="Comoros">Comoros</option>
            <option value="CG" label="Congo - Brazzaville">Congo - Brazzaville</option>
            <option value="CD" label="Congo - Kinshasa">Congo - Kinshasa</option>
            <option value="CI" label="Côte d’Ivoire">Côte d’Ivoire</option>
            <option value="DJ" label="Djibouti">Djibouti</option>
            <option value="EG" label="Egypt">Egypt</option>
            <option value="GQ" label="Equatorial Guinea">Equatorial Guinea</option>
            <option value="ER" label="Eritrea">Eritrea</option>
            <option value="SZ" label="Eswatini">Eswatini</option>
            <option value="ET" label="Ethiopia">Ethiopia</option>
            <option value="GA" label="Gabon">Gabon</option>
            <option value="GM" label="Gambia">Gambia</option>
            <option value="GH" label="Ghana">Ghana</option>
            <option value="GN" label="Guinea">Guinea</option>
            <option value="GW" label="Guinea-Bissau">Guinea-Bissau</option>
            <option value="KE" label="Kenya">Kenya</option>
            <option value="LS" label="Lesotho">Lesotho</option>
            <option value="LR" label="Liberia">Liberia</option>
            <option value="LY" label="Libya">Libya</option>
            <option value="MG" label="Madagascar">Madagascar</option>
            <option value="MW" label="Malawi">Malawi</option>
            <option value="ML" label="Mali">Mali</option>
            <option value="MR" label="Mauritania">Mauritania</option>
            <option value="MU" label="Mauritius">Mauritius</option>
            <option value="YT" label="Mayotte">Mayotte</option>
            <option value="MA" label="Morocco">Morocco</option>
            <option value="MZ" label="Mozambique">Mozambique</option>
            <option value="NA" label="Namibia">Namibia</option>
            <option value="NE" label="Niger">Niger</option>
            <option value="NG" label="Nigeria">Nigeria</option>
            <option value="RW" label="Rwanda">Rwanda</option>
            <option value="RE" label="Réunion">Réunion</option>
            <option value="SH" label="Saint Helena">Saint Helena</option>
            <option value="SN" label="Senegal">Senegal</option>
            <option value="SC" label="Seychelles">Seychelles</option>
            <option value="SL" label="Sierra Leone">Sierra Leone</option>
            <option value="SO" label="Somalia">Somalia</option>
            <option value="ZA" label="South Africa">South Africa</option>
            <option value="SD" label="Sudan">Sudan</option>
            <option value="ST" label="São Tomé and Príncipe">São Tomé and Príncipe</option>
            <option value="TZ" label="Tanzania">Tanzania</option>
            <option value="TG" label="Togo">Togo</option>
            <option value="TN" label="Tunisia">Tunisia</option>
            <option value="UG" label="Uganda">Uganda</option>
            <option value="EH" label="Western Sahara">Western Sahara</option>
            <option value="ZM" label="Zambia">Zambia</option>
            <option value="ZW" label="Zimbabwe">Zimbabwe</option>
        </optgroup>
        <optgroup id="country-optgroup-Americas" label="Americas">
            <option value="AI" label="Anguilla">Anguilla</option>
            <option value="AG" label="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="AR" label="Argentina">Argentina</option>
            <option value="AW" label="Aruba">Aruba</option>
            <option value="BS" label="Bahamas">Bahamas</option>
            <option value="BB" label="Barbados">Barbados</option>
            <option value="BZ" label="Belize">Belize</option>
            <option value="BM" label="Bermuda">Bermuda</option>
            <option value="BO" label="Bolivia">Bolivia</option>
            <option value="BQ" label="Bonaire">Bonaire</option>
            <option value="BR" label="Brazil">Brazil</option>
            <option value="VG" label="British Virgin Islands">British Virgin Islands</option>
            <option value="CA" label="Canada">Canada</option>
            <option value="KY" label="Cayman Islands">Cayman Islands</option>
            <option value="CL" label="Chile">Chile</option>
            <option value="CO" label="Colombia">Colombia</option>
            <option value="CR" label="Costa Rica">Costa Rica</option>
            <option value="CU" label="Cuba">Cuba</option>
            <option value="CW" label="Curaçao">Curaçao</option>
            <option value="DM" label="Dominica">Dominica</option>
            <option value="DO" label="Dominican Republic">Dominican Republic</option>
            <option value="EC" label="Ecuador">Ecuador</option>
            <option value="SV" label="El Salvador">El Salvador</option>
            <option value="FK" label="Falkland Islands">Falkland Islands</option>
            <option value="GF" label="French Guiana">French Guiana</option>
            <option value="GL" label="Greenland">Greenland</option>
            <option value="GD" label="Grenada">Grenada</option>
            <option value="GP" label="Guadeloupe">Guadeloupe</option>
            <option value="GT" label="Guatemala">Guatemala</option>
            <option value="GY" label="Guyana">Guyana</option>
            <option value="HT" label="Haiti">Haiti</option>
            <option value="HN" label="Honduras">Honduras</option>
            <option value="JM" label="Jamaica">Jamaica</option>
            <option value="MQ" label="Martinique">Martinique</option>
            <option value="MX" label="Mexico">Mexico</option>
            <option value="MS" label="Montserrat">Montserrat</option>
            <option value="NI" label="Nicaragua">Nicaragua</option>
            <option value="PA" label="Panama">Panama</option>
            <option value="PY" label="Paraguay">Paraguay</option>
            <option value="PE" label="Peru">Peru</option>
            <option value="PR" label="Puerto Rico">Puerto Rico</option>
            <option value="BL" label="Saint Barthélemy">Saint Barthélemy</option>
            <option value="KN" label="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="LC" label="Saint Lucia">Saint Lucia</option>
            <option value="MF" label="Saint Martin">Saint Martin</option>
            <option value="PM" label="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
            <option value="VC" label="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
            <option value="SX" label="Sint Maarten">Sint Maarten</option>
            <option value="SR" label="Suriname">Suriname</option>
            <option value="TT" label="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="TC" label="Turks and Caicos Islands">Turks and Caicos Islands</option>
            <option value="VI" label="U.S. Virgin Islands">U.S. Virgin Islands</option>
            <option value="US" label="United States">United States</option>
            <option value="UY" label="Uruguay">Uruguay</option>
            <option value="VE" label="Venezuela">Venezuela</option>
        </optgroup>
        <optgroup id="country-optgroup-Asia" label="Asia">
            <option value="AF" label="Afghanistan">Afghanistan</option>
            <option value="AM" label="Armenia">Armenia</option>
            <option value="AZ" label="Azerbaijan">Azerbaijan</option>
            <option value="BH" label="Bahrain">Bahrain</option>
            <option value="BD" label="Bangladesh">Bangladesh</option>
            <option value="BT" label="Bhutan">Bhutan</option>
            <option value="BN" label="Brunei">Brunei</option>
            <option value="KH" label="Cambodia">Cambodia</option>
            <option value="CN" label="China">China</option>
            <option value="GE" label="Georgia">Georgia</option>
            <option value="HK" label="Hong Kong SAR China">Hong Kong SAR China</option>
            <option value="IN" label="India">India</option>
            <option value="ID" label="Indonesia">Indonesia</option>
            <option value="IR" label="Iran">Iran</option>
            <option value="IQ" label="Iraq">Iraq</option>
            <option value="IL" label="Israel">Israel</option>
            <option value="JP" label="Japan">Japan</option>
            <option value="JO" label="Jordan">Jordan</option>
            <option value="KZ" label="Kazakhstan">Kazakhstan</option>
            <option value="KW" label="Kuwait">Kuwait</option>
            <option value="KG" label="Kyrgyzstan">Kyrgyzstan</option>
            <option value="LA" label="Laos">Laos</option>
            <option value="LB" label="Lebanon">Lebanon</option>
            <option value="MO" label="Macau SAR China">Macau SAR China</option>
            <option value="MY" label="Malaysia">Malaysia</option>
            <option value="MV" label="Maldives">Maldives</option>
            <option value="MN" label="Mongolia">Mongolia</option>
            <option value="MM" label="Myanmar [Burma]">Myanmar [Burma]</option>
            <option value="NP" label="Nepal">Nepal</option>
            <option value="KP" label="North Korea">North Korea</option>
            <option value="OM" label="Oman">Oman</option>
            <option value="PK" label="Pakistan">Pakistan</option>
            <option value="PS" label="Palestinian Territories">Palestinian Territories</option>
            <option value="PH" label="Philippines">Philippines</option>
            <option value="QA" label="Qatar">Qatar</option>
            <option value="SA" label="Saudi Arabia">Saudi Arabia</option>
            <option value="SG" label="Singapore">Singapore</option>
            <option value="KR" label="South Korea">South Korea</option>
            <option value="LK" label="Sri Lanka">Sri Lanka</option>
            <option value="SY" label="Syria">Syria</option>
            <option value="TW" label="Taiwan">Taiwan</option>
            <option value="TJ" label="Tajikistan">Tajikistan</option>
            <option value="TH" label="Thailand">Thailand</option>
            <option value="TL" label="Timor-Leste">Timor-Leste</option>
            <option value="TR" label="Turkey">Turkey</option>
            <option value="TM" label="Turkmenistan">Turkmenistan</option>
            <option value="AE" label="United Arab Emirates">United Arab Emirates</option>
            <option value="UZ" label="Uzbekistan">Uzbekistan</option>
            <option value="VN" label="Vietnam">Vietnam</option>
            <option value="YE" label="Yemen">Yemen</option>
        </optgroup>
        <optgroup id="country-optgroup-Europe" label="Europe">
            <option value="AL" label="Albania">Albania</option>
            <option value="AD" label="Andorra">Andorra</option>
            <option value="AT" label="Austria">Austria</option>
            <option value="BY" label="Belarus">Belarus</option>
            <option value="BE" label="Belgium">Belgium</option>
            <option value="BA" label="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="BG" label="Bulgaria">Bulgaria</option>
            <option value="HR" label="Croatia">Croatia</option>
            <option value="CY" label="Cyprus">Cyprus</option>
            <option value="CZ" label="Czechia">Czechia</option>
            <option value="DK" label="Denmark">Denmark</option>
            <option value="EE" label="Estonia">Estonia</option>
            <option value="FO" label="Faroe Islands">Faroe Islands</option>
            <option value="FI" label="Finland">Finland</option>
            <option value="FR" label="France">France</option>
            <option value="DE" label="Germany">Germany</option>
            <option value="GI" label="Gibraltar">Gibraltar</option>
            <option value="GR" label="Greece">Greece</option>
            <option value="GG" label="Guernsey">Guernsey</option>
            <option value="HU" label="Hungary">Hungary</option>
            <option value="IS" label="Iceland">Iceland</option>
            <option value="IE" label="Ireland">Ireland</option>
            <option value="IM" label="Isle of Man">Isle of Man</option>
            <option value="IT" label="Italy">Italy</option>
            <option value="JE" label="Jersey">Jersey</option>
            <option value="LV" label="Latvia">Latvia</option>
            <option value="LI" label="Liechtenstein">Liechtenstein</option>
            <option value="LT" label="Lithuania">Lithuania</option>
            <option value="LU" label="Luxembourg">Luxembourg</option>
            <option value="MT" label="Malta">Malta</option>
            <option value="MD" label="Moldova">Moldova</option>
            <option value="MC" label="Monaco">Monaco</option>
            <option value="ME" label="Montenegro">Montenegro</option>
            <option value="NL" label="Netherlands">Netherlands</option>
            <option value="MK" label="North Macedonia">North Macedonia</option>
            <option value="NO" label="Norway">Norway</option>
            <option value="PL" label="Poland">Poland</option>
            <option value="PT" label="Portugal">Portugal</option>
            <option value="RO" label="Romania">Romania</option>
            <option value="RU" label="Russia">Russia</option>
            <option value="SM" label="San Marino">San Marino</option>
            <option value="RS" label="Serbia">Serbia</option>
            <option value="SK" label="Slovakia">Slovakia</option>
            <option value="SI" label="Slovenia">Slovenia</option>
            <option value="ES" label="Spain">Spain</option>
            <option value="SE" label="Sweden">Sweden</option>
            <option value="CH" label="Switzerland">Switzerland</option>
            <option value="UA" label="Ukraine">Ukraine</option>
            <option value="GB" label="United Kingdom">United Kingdom</option>
            <option value="AX" label="Åland Islands">Åland Islands</option>
        </optgroup>
        <optgroup id="country-optgroup-Oceania" label="Oceania">
            <option value="AS" label="American Samoa">American Samoa</option>
            <option value="AU" label="Australia">Australia</option>
            <option value="CX" label="Christmas Island">Christmas Island</option>
            <option value="CC" label="Cocos [Keeling] Islands">Cocos [Keeling] Islands</option>
            <option value="CK" label="Cook Islands">Cook Islands</option>
            <option value="FJ" label="Fiji">Fiji</option>
            <option value="PF" label="French Polynesia">French Polynesia</option>
            <option value="TF" label="French Southern Territories">French Southern Territories</option>
            <option value="GU" label="Guam">Guam</option>
            <option value="KI" label="Kiribati">Kiribati</option>
            <option value="MH" label="Marshall Islands">Marshall Islands</option>
            <option value="FM" label="Micronesia">Micronesia</option>
            <option value="NR" label="Nauru">Nauru</option>
            <option value="NC" label="New Caledonia">New Caledonia</option>
            <option value="NZ" label="New Zealand">New Zealand</option>
            <option value="NU" label="Niue">Niue</option>
            <option value="NF" label="Norfolk Island">Norfolk Island</option>
            <option value="MP" label="Northern Mariana Islands">Northern Mariana Islands</option>
            <option value="PW" label="Palau">Palau</option>
            <option value="PG" label="Papua New Guinea">Papua New Guinea</option>
            <option value="WS" label="Samoa">Samoa</option>
            <option value="SB" label="Solomon Islands">Solomon Islands</option>
            <option value="TK" label="Tokelau">Tokelau</option>
            <option value="TO" label="Tonga">Tonga</option>
            <option value="TV" label="Tuvalu">Tuvalu</option>
            <option value="VU" label="Vanuatu">Vanuatu</option>
            <option value="WF" label="Wallis and Futuna">Wallis and Futuna</option>
        </optgroup>
    </select>
  </label>

  <label class="form-field"  style="max-width: 400px;">
    <span class="form-label">What language would you translate the materials into?</span>
    <input type="text" name="language" class="form-input"
    placeholder="(e.g, German, Swahili, ...)">
  </label>

  <label class="form-field">
    <span class="form-label">Briefly describe the sample you plan to recruit.</span>
    <input type="text" name="sample" class="form-input"
    placeholder="(e.g, convenience online sample, university medical students, ...)">
  </label>

<label class="form-checkbox-container">
  <input type="checkbox" name="propose_study" class="form-checkbox">
  <span class="form-checkbox-label">I also want to propose a study for the Global BioXPhi Research Initiative.</span>
</label>

  <!-- Study link input -->
<label class="form-field">
  <span class="form-label">The study I would like to propose can be found here:</span>
  <input 
    type="url" 
    name="study_link" 
    class="form-input" 
    placeholder="Provide a preprint or publication URL."
    id="study_link"
  >
</label>

<script>
  const input = document.getElementById('study_link');

  input.addEventListener('blur', function () {
    const val = input.value.trim();
    if (val && !/^https?:\/\//i.test(val)) {
      input.value = 'https://' + val;
    }
  });
</script>

  <!-- Hypothesis & design textarea -->
  <label class="form-field">
    <span class="form-label">Briefly describe the study design, the main finding, and its relevance for bioethics.</span>
    <textarea name="study_description" class="form-textarea"></textarea>
  </label>

  <!-- Name input -->
  <label class="form-field"  style="max-width: 400px;">
    <span class="form-label">Your name:</span>
    <input type="text" name="name" class="form-input">
  </label>

  <!-- Institution input -->
  <label class="form-field"  style="max-width: 400px;"> 
    <span class="form-label">Your affiliation:</span>
    <input type="text" name="affiliation" class="form-input">
  </label>

  <!-- Email input -->
  <label class="form-field"  style="max-width: 400px;">
    <span class="form-label">Your email address:</span>
    <input type="email" name="email" class="form-input">
  </label>

  <!-- Additional comments -->
  <label class="form-field">
    <span class="form-label">Any additional comments?</span>
    <textarea name="comments" class="form-textarea"></textarea>
  </label>

<button type="submit" class="form-submit">Submit</button>
