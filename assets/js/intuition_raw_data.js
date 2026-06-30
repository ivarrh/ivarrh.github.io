const intuitionRawData = [
  // Deceptive implicature
  {
    resp: "Amanda lied.",
    frequency: 56,
    full_issue: "<b>Lying and deceiving</b>: Is a deceptive implicature a lie?",
    description:
      "A deceptive implicature is a statement that is technically true but implies something false and misleading. For example, when Amanda replies that her ex has been sick for weeks, she implies that she has not met him recently. Is Amanda lying?",
    issue: "lying",
    proportion: 0.495575221,
  },
  {
    resp: "Amanda did not lie.",
    frequency: 57,
    full_issue: "<b>Lying and deceiving</b>: Is a deceptive implicature a lie?",
    description:
      "A deceptive implicature is a statement that is technically true but implies something false and misleading. For example, when Amanda replies that her ex has been sick for weeks, she implies that she has not met him recently. Is Amanda lying?",
    issue: "lying",
    proportion: 0.504424779,
  },

  // Phenomenal consciousness (robots)
  {
    resp: "The robot can experience love.",
    frequency: 55,
    full_issue: "<b>Phenomenal consciousness</b>: Can robots experience love?",
    description:
      "In principle, a robot could have an electronic replica of a human brain. Would such a robot be able to experience love, or not?",
    issue: "robots",
    proportion: 0.47826087,
  },
  {
    resp: "The robot cannot experience love.",
    frequency: 60,
    full_issue: "<b>Phenomenal consciousness</b>: Can robots experience love?",
    description:
      "In principle, a robot could have an electronic replica of a human brain. Would such a robot be able to experience love, or not?",
    issue: "robots",
    proportion: 0.52173913,
  },

  // Phineas Gage
  {
    resp: "The person after the accident is not Phineas anymore.",
    frequency: 50,
    full_issue:
      "<b>Personal identity</b>: Is the person after the accident still Phineas Gage?",
    description:
      "Phineas Gage was a railroad worker who survived an unusual accident. The severe brain injury he suffered changed his personality and behavior, making him a cruel and callous person. Is the person after the accident still Phineas Gage?",
    issue: "phineas",
    proportion: 0.438596491,
  },
  {
    resp: "The person after the accident is still Phineas.",
    frequency: 64,
    full_issue:
      "<b>Personal identity</b>: Is the person after theint accident still Phineas Gage?",
    description:
      "Phineas Gage was a railroad worker who survived an unusual accident. The severe brain injury he suffered changed his personality and behavior, making him a cruel and callous person. Is the person after the accident still Phineas Gage?",
    issue: "phineas",
    proportion: 0.561403509,
  },

  // Identity (Ship of Theseus)
  {
    resp: "The ship repaired with new parts is Theseus.",
    frequency: 42,
    full_issue:
      "<b>Identity persistence</b>: Which of the two ships is the Ship of Theseus?",
    description:
      "The Ship of Theseus is a thought experiment that raises questions about identity and change. If a ship named Theseus has all of its parts replaced over time, is it still the same ship? To answer this question, we can compare the ship that has been repaired with new parts to the ship that has been rebuilt from the old parts. Which of the two ships is Theseus?",
    issue: "theseus",
    proportion: 0.432989691,
  },
  {
    resp: "The ship built from old parts is Theseus.",
    frequency: 55,
    full_issue:
      "<b>Identity persistence</b>: Which of the two ships is the Ship of Theseus?",
    description:
      "The Ship of Theseus is a thought experiment that raises questions about identity and change. If a ship named Theseus has all of its parts replaced over time, is it still the same ship? To answer this question, we can compare the ship that has been repaired with new parts to the ship that has been rebuilt from the old parts. Which of the two ships is Theseus?",
    issue: "theseus",
    proportion: 0.567010309,
  },

  // Reliabilism (Truetemp)
  {
    resp: "Charles does not know that it is 22 degrees in his room.",
    frequency: 49,
    full_issue:
      "<b>Epistemology</b>: Is reliability a sufficient condition for knowledge?",
    description:
      "Truetemp is a thought experiment that raises questions about the nature of knowledge and reliability. Charles has a device implanted in his brain that gives him accurate temperature readings. He reliably believes that it is 22 degrees in his room. Is that enough to constitute knowledge?",
    issue: "truetemp",
    proportion: 0.429824561,
  },
  {
    resp: "Charles knows that it is 22 degrees in his room.",
    frequency: 65,
    full_issue:
      "<b>Epistemology</b>: Is reliability a sufficient condition for knowledge?",
    description:
      "Truetemp is a thought experiment that raises questions about the nature of knowledge and reliability. Charles has a device implanted in his brain that gives him accurate temperature readings. He reliably believes that it is 22 degrees in his room. Is that enough to constitute knowledge?",
    issue: "truetemp",
    proportion: 0.570175439,
  },

  // Morality (trolley problem)
  {
    resp: "Throwing the person overboard is the morally right thing to do.",
    frequency: 41,
    full_issue:
      "<b>Utilitarianism</b>: Is it morally right to sacrifice one person in order to save five?",
    description:
      "The trolley problem is a thought experiment that raises questions about utilitarian moral theory. If you are on a bridge overlooking a train track and see five people tied up ahead, but you can push a large person onto the track to stop the train and save the five people, what should you do? Is it morally right to sacrifice one person in order to save five?",
    issue: "trolley",
    proportion: 0.376146789,
  },
  {
    resp: "Throwing the person overboard is not the morally right thing to do.",
    frequency: 68,
    full_issue:
      "<b>Utilitarianism</b>: Is it morally right to sacrifice one person in order to save five?",
    description:
      "The trolley problem is a thought experiment that raises questions about utilitarian moral theory. If you are on a bridge overlooking a train track and see five people tied up ahead, but you can push a large person onto the track to stop the train and save the five people, what should you do? Is it morally right to sacrifice one person in order to save five?",
    issue: "trolley",
    proportion: 0.623853211,
  },

  // Individuation of conjoined twins
  {
    resp: "This is a picture of a two-headed person.",
    frequency: 39,
    full_issue:
      "<b>Individuation of persons</b>: Are conjoined twins one person or two?",
    description:
      "In a rare medical condition, conjoined twins (dicephalic parapagus) are born with two heads and a single body. This phenomenon raises questions about individuation and identity. Are conjoined twins one person or two persons?",
    issue: "individuation",
    proportion: 0.361111111,
  },
  {
    resp: "This is a picture of two persons sharing one body.",
    frequency: 69,
    full_issue:
      "<b>Individuation of persons</b>: Are conjoined twins one person or two?",
    description:
      "In a rare medical condition, conjoined twins (dicephalic parapagus) are born with two heads and a single body. This phenomenon raises questions about individuation and identity. Are conjoined twins one person or two persons?",
    issue: "individuation",
    proportion: 0.638888889,
  },

  // Free will and determinism
  {
    resp: "Bill did not act freely when he decided to kill his wife and children.",
    frequency: 39,
    full_issue:
      "<b>Compatibilism</b>: Is free will compatible with determinism?",
    description:
      "The free will and determinism debate is a long-standing philosophical issue that questions whether free will is compatible with determinism. In the thought experiment you saw, in a deterministic universe, Bill decides to kill his wife and children. Did he act freely even though his actions were causally determined?",
    issue: "freewill",
    proportion: 0.357798165,
  },
  {
    resp: "Bill acted freely when he decided to kill his wife and children.",
    frequency: 70,
    full_issue:
      "<b>Compatibilism</b>: Is free will compatible with determinism?",
    description:
      "The free will and determinism debate is a long-standing philosophical issue that questions whether free will is compatible with determinism. In the thought experiment you saw, in a deterministic universe, Bill decides to kill his wife and children. Did he act freely even though his actions were causally determined?",
    issue: "freewill",
    proportion: 0.642201835,
  },

  // Double prevention
  {
    resp: "It was Peter knocking against Jack that caused the beer to spill.",
    frequency: 34,
    full_issue:
      "<b>Double prevention</b>: If A prevents B from preventing C, is A the cause of C?",
    description:
      "In a scenario where Peter knocks against Jack, stopping Jack from preventing the beer from spilling, did Peter cause the beer to spill?",
    issue: "prevention",
    proportion: 0.3366337,
  },
  {
    resp: "It was not Peter knocking against Jack that caused the beer to spill.",
    frequency: 67,
    // FIX: added missing space after colon in original
    full_issue:
      "<b>Double prevention</b>: If A prevents B from preventing C, is A the cause of C?",
    description:
      "In a scenario where Peter knocks against Jack, stopping Jack from preventing the beer from spilling, did Peter cause the beer to spill?",
    issue: "prevention",
    proportion: 0.6633663,
  },

  // The brain death criterion
  {
    resp: "In this situation, you are dead.",
    frequency: 30,
    full_issue:
      "<b>The brain death criterion</b>: Are you dead when your brain ceases to function?",
    description:
      "The brain death criterion is a philosophical and medical concept that defines death as the irreversible cessation of all brain activity. If your brain ceases to function, are you considered dead even if your heart is still beating?",
    issue: "death",
    proportion: 0.280373832,
  },
  {
    resp: "In this situation, you are not dead.",
    frequency: 77,
    full_issue:
      "<b>The brain death criterion</b>: Are you dead when your brain ceases to function?",
    description:
      "The brain death criterion is a philosophical and medical concept that defines death as the irreversible cessation of all brain activity. If your brain ceases to function, are you considered dead even if your heart is still beating?",
    issue: "death",
    proportion: 0.719626168,
  },

  // Letter vs. spirit (overinclusion)
  {
    resp: "Daphne did not break the rule.",
    frequency: 32,
    full_issue: "<b>Letter vs. spirit</b>: What does it mean to break a rule?",
    description:
      "The letter vs. spirit debate is a philosophical issue that concerns whether we should follow the literal wording of a rule or the intended purpose behind it. If Daphne violates the letter of the law but does so in a way that abides by its intended purpose, did she break the rule?",
    issue: "rules",
    proportion: 0.275862069,
  },
  {
    resp: "Daphne broke the rule.",
    frequency: 84,
    full_issue: "<b>Letter vs. spirit</b>: What does it mean to break a rule?",
    description:
      "The letter vs. spirit debate is a philosophical issue that concerns whether we should follow the literal wording of a rule or the intended purpose behind it. If Daphne violates the letter of the law but does so in a way that abides by its intended purpose, did she break the rule?",
    issue: "rules",
    proportion: 0.724137931,
  },

  // Skepticism (brain-in-a-vat)
  {
    resp: "George doesn't know that he is not a virtual-reality brain.",
    frequency: 21,
    full_issue:
      "<b>Skepticism</b>: Can we know that we are not brains in a vat?",
    description:
      "The brain-in-a-vat thought experiment is a skeptical thought experiment that questions our knowledge of the external world. Is there any way that people like you and I can know that we are not virtual reality brains?",
    issue: "brainvat",
    proportion: 0.201923077,
  },
  {
    resp: "George knows that he is not a virtual-reality brain.",
    frequency: 83,
    full_issue:
      "<b>Skepticism</b>: Can we know that we are not brains in a vat?",
    // FIX: was copy-pasted from the "rules" entry — corrected to brain-in-a-vat description
    description:
      "The brain-in-a-vat thought experiment is a skeptical thought experiment that questions our knowledge of the external world. Is there any way that people like you and I can know that we are not virtual reality brains?",
    issue: "brainvat",
    proportion: 0.798076923,
  },

  // Meaning (Twin Earth)
  {
    resp: "The liquid on Twin Earth is water.",
    frequency: 21,
    full_issue: "<b>Meaning</b>: Is the liquid on Twin Earth water?",
    description:
      "The Twin Earth thought experiment is a philosophical scenario that questions the nature of meaning and reference. If the liquid on Twin Earth is the same as water to the senses, but has different chemical properties, is it still water?",
    issue: "twinearth",
    proportion: 0.189189189,
  },
  {
    resp: "The liquid on Twin Earth is not water.",
    frequency: 90,
    full_issue: "<b>Meaning</b>: Is the liquid on Twin Earth water?",
    description:
      "The Twin Earth thought experiment is a philosophical scenario that questions the nature of meaning and reference. If the liquid on Twin Earth is the same as water to the senses, but has different chemical properties, is it still water?",
    issue: "twinearth",
    proportion: 0.810810811,
  },

  // Happiness and immorality
  {
    resp: "Sarah is not happy.",
    frequency: 13,
    full_issue: "<b>Happiness</b>: Can an immoral person be happy?",
    description:
      "This thought experiment concerns the relationship between happiness and morality. Specifically, if Sarah engages in immoral behavior, and thinking about her immoral past brings her satisfaction, is Sarah happy?",
    issue: "happiness",
    proportion: 0.131313131,
  },
  {
    resp: "Sarah is happy.",
    frequency: 86,
    // FIX: added missing space after colon in original
    full_issue: "<b>Happiness</b>: Can an immoral person be happy?",
    description:
      "This thought experiment concerns the relationship between happiness and morality. Specifically, if Sarah engages in immoral behavior, and thinking about her immoral past brings her satisfaction, is Sarah happy?",
    issue: "happiness",
    proportion: 0.868686869,
  },

  // Knowledge without belief
  {
    resp: "Juliet does not know that her athletic students are as capable as her other students.",
    frequency: 9,
    full_issue: "<b>Knowledge</b>: Can there be knowledge without belief?",
    description:
      "This thought experiment concerns the nature of knowledge and its relationship to belief. If Juliet has evidence that her athletic students are as capable as her other students, but she does not act accordingly, does she still know they are as capable?",
    issue: "knowledge",
    proportion: 0.09,
  },
  {
    resp: "Juliet knows that her athletic students are as capable as her other students.",
    frequency: 91,
    full_issue: "<b>Knowledge</b>: Can there be knowledge without belief?",
    description:
      "This thought experiment concerns the nature of knowledge and its relationship to belief. If Juliet has evidence that her athletic students are as capable as her other students, but she does not act accordingly, does she still know they are as capable?",
    issue: "knowledge",
    proportion: 0.91,
  },
];
