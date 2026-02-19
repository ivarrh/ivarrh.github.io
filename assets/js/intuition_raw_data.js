const intuitionRawData = [
  // Deceptive implicature
  {
    resp: "Amanda lied.",
    frequency: 56,
    full_issue: "<b>Lying and deceiving</b>: Is a deceptive implicature a lie?",
    description:
      "A deceptive implicature is a statement that is technically true but is intended to mislead. For example, if Amanda says 'I did not lie,' but she intentionally leaves out important information that would reveal the truth, is she lying?",
    issue: "lying",
    proportion: 0.495575221,
  },
  {
    resp: "Amanda did not lie.",
    frequency: 57,
    full_issue: "<b>Lying and deceiving</b>: Is a deceptive implicature a lie?",
    description:
      "A deceptive implicature is a statement that is technically true but is intended to mislead. For example, if Amanda says 'I did not lie,' but she intentionally leaves out important information that would reveal the truth, is she lying?",
    issue: "lying",
    proportion: 0.504424779,
  },

  // Double prevention
  {
    resp: "It was Peter knocking against Jack that caused the beer to spill.",
    frequency: 34,
    full_issue:
      "<b>Double prevention</b>: If A prevents B from preventing C, is A the cause of C?",
    description:
      "In a scenario where Peter knocks against Jack, stopping Jack from preventing the beer from spilling, is Peter's action the direct cause of the spill?",
    issue: "prevention",
    proportion: 0.3366337,
  },
  {
    resp: "It was not Peter knocking against Jack that caused the beer to spill.",
    frequency: 67,
    full_issue:
      "<b>Double prevention</b>:If A prevents B from preventing C, is A the cause of C?",
    description:
      "In a scenario where Peter knocks against Jack, stopping Jack from preventing the beer from spilling, is Peter's action the direct cause of the spill?",
    issue: "prevention",
    proportion: 0.6633663,
  },

  // Phenomenal consciousness (robots)
  {
    resp: "The robot can experience love.",
    frequency: 55,
    full_issue: "<b>Phenomenal consciousness</b>: Can robots experience love?",
    description:
      "Robots are artificial beings that can be programmed to simulate emotions. But can they actually experience love, or is it just a simulation?",
    issue: "robots",
    proportion: 0.47826087,
  },
  {
    resp: "The robot cannot experience love.",
    frequency: 60,
    full_issue: "<b>Phenomenal consciousness</b>: Can robots experience love?",
    description:
      "Robots are artificial beings that can be programmed to simulate emotions. But can they actually experience love, or is it just a simulation?",
    issue: "robots",
    proportion: 0.52173913,
  },

  // Phineas Gage
  {
    resp: "The person after the accident is not Phineas anymore.",
    frequency: 50,
    full_issue:
      "<b>Identity</b>: Is the person after the accident still Phineas Gage?",
    description:
      "Phineas Gage was a railroad worker who survived a severe brain injury in 1848. The injury changed his personality and behavior significantly. Is the person after the accident still Phineas Gage?",
    issue: "phineas",
    proportion: 0.438596491,
  },
  {
    resp: "The person after the accident is still Phineas.",
    frequency: 64,
    full_issue:
      "<b>Identity</b>: Is the person after the accident still Phineas Gage?",
    description:
      "Phineas Gage was a railroad worker who survived a severe brain injury in 1848. The injury changed his personality and behavior significantly. Is the person after the accident still Phineas Gage?",
    issue: "phineas",
    proportion: 0.561403509,
  },

  // Identity (Ship of Theseus)
  {
    resp: "The ship repaired with new parts is Theseus.",
    frequency: 42,
    full_issue: "<b>Identity</b>: Which of the two ships is Theseus?",
    description:
      "The Ship of Theseus is a thought experiment that raises questions about identity and change. If a ship has all of its parts replaced over time, is it still the same ship? Which of the two ships is Theseus?",
    issue: "theseus",
    proportion: 0.432989691,
  },
  {
    resp: "The ship built from old parts is Theseus.",
    frequency: 55,
    full_issue: "<b>Identity</b>: Which of the two ships is Theseus?",
    description:
      "The Ship of Theseus is a thought experiment that raises questions about identity and change. If a ship has all of its parts replaced over time, is it still the same ship? Which of the two ships is Theseus?",
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
      "Truetemp is a thought experiment that raises questions about the nature of knowledge and reliability. Charles has a device implanted in his brain that gives him accurate temperature readings. He reliably believes that it is 22 degrees in his room, but does he actually know it?",
    issue: "truetemp",
    proportion: 0.429824561,
  },
  {
    resp: "Charles knows that it is 22 degrees in his room.",
    frequency: 65,
    full_issue:
      "<b>Epistemology</b>: Is reliability a sufficient condition for knowledge?",
    description:
      "Truetemp is a thought experiment that raises questions about the nature of knowledge and reliability. Charles has a device implanted in his brain that gives him accurate temperature readings. He reliably believes that it is 22 degrees in his room, but does he actually know it?",
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
      "The trolley problem is a thought experiment that raises questions about morality and ethical decision-making. If you are on a trolley track and see five people tied up ahead, but you can pull a lever to divert the trolley onto another track where there is one person tied up, what should you do? Is it morally right to sacrifice one person in order to save five?",
    issue: "trolley",
    proportion: 0.376146789,
  },
  {
    resp: "Throwing the person overboard is not the morally right thing to do.",
    frequency: 68,
    full_issue:
      "<b>Utilitarianism</b>: Is it morally right to sacrifice one person in order to save five?",
    description:
      "The trolley problem is a thought experiment that raises questions about morality and ethical decision-making. If you are on a trolley track and see five people tied up ahead, but you can pull a lever to divert the trolley onto another track where there is one person tied up, what should you do? Is it morally right to sacrifice one person in order to save five?",
    issue: "trolley",
    proportion: 0.623853211,
  },

  // Individuation of conjoined twins
  {
    resp: "This is a picture of a two-headed person.",
    frequency: 39,
    full_issue: "<b>Individuation</b>: Are conjoined twins one person or two?",
    description:
      "Conjoined twins are two individuals who are born with their bodies physically connected. Are conjoined twins one person or two? This question raises issues about individuation and identity.",
    issue: "individuation",
    proportion: 0.361111111,
  },
  {
    resp: "This is a picture of two persons sharing one body.",
    frequency: 69,
    full_issue: "<b>Individuation</b>: Are conjoined twins one person or two?",
    description:
      "Conjoined twins are two individuals who are born with their bodies physically connected. Are conjoined twins one person or two? This question raises issues about individuation and identity.",
    issue: "individuation",
    proportion: 0.638888889,
  },

  // Free will and determinism
  {
    resp: "Bill did not act freely when he decided to kill his wife and children.",
    frequency: 39,
    full_issue: "<b>Free will</b>: Is free will compatible with determinism?",
    description:
      "The free will and determinism debate is a long-standing philosophical issue that questions whether our actions are determined by prior causes or if we have the ability to choose freely. In this scenario, Bill decides to kill his wife and children. Did he act freely, or was his action determined by factors beyond his control?",
    issue: "freewill",
    proportion: 0.357798165,
  },
  {
    resp: "Bill acted freely when he decided to kill his wife and children.",
    frequency: 70,
    full_issue: "<b>Free will</b>: Is free will compatible with determinism?",
    description:
      "The free will and determinism debate is a long-standing philosophical issue that questions whether our actions are determined by prior causes or if we have the ability to choose freely. In this scenario, Bill decides to kill his wife and children. Did he act freely, or was his action determined by factors beyond his control?",
    issue: "freewill",
    proportion: 0.642201835,
  },

  // The brain death criterion
  {
    resp: "In this situation, you are dead.",
    frequency: 30,
    full_issue:
      "<b>The brain death criterion</b>: Are you dead when your brain ceases to function?",
    description:
      "The brain death criterion is a philosophical and medical concept that defines death as the irreversible cessation of all brain activity. If your brain ceases to function, are you considered dead? This question raises issues about the nature of death and what it means to be alive.",
    issue: "death",
    proportion: 0.280373832,
  },
  {
    resp: "In this situation, you are not dead.",
    frequency: 77,
    full_issue:
      "<b>The brain death criterion</b>: Are you dead when your brain ceases to function?",
    description:
      "The brain death criterion is a philosophical and medical concept that defines death as the irreversible cessation of all brain activity. If your brain ceases to function, are you considered dead? This question raises issues about the nature of death and what it means to be alive.",
    issue: "death",
    proportion: 0.719626168,
  },

  // Letter vs. spirit (overinclusion)
  {
    resp: "Daphne did not break the rule.",
    frequency: 32,
    full_issue: "<b>Letter vs. spirit</b>: What does it mean to break a rule?",
    description:
      "The letter vs. spirit debate is a philosophical issue that questions whether we should follow the literal wording of a rule or the intended purpose behind it. If Daphne technically follows the rule but does so in a way that goes against its intended purpose, did she break the rule?",
    issue: "rules",
    proportion: 0.275862069,
  },
  {
    resp: "Daphne broke the rule.",
    frequency: 84,
    full_issue: "<b>Letter vs. spirit</b>: What does it mean to break a rule?",
    description:
      "The letter vs. spirit debate is a philosophical issue that questions whether we should follow the literal wording of a rule or the intended purpose behind it. If Daphne technically follows the rule but does so in a way that goes against its intended purpose, did she break the rule?",
    issue: "rules",
    proportion: 0.724137931,
  },

  // Skepticism (brain-in-a-vat)
  {
    resp: "George doesn't know that he is not a virtual-reality brain.",
    frequency: 21,
    full_issue:
      "<b>Skepticism</b>: Can George know he is not a brain in a vat?",
    description:
      "The brain-in-a-vat thought experiment is a skeptical scenario that questions our knowledge of the external world. If George is a brain in a vat, can he know that he is not a virtual-reality brain? This question raises issues about skepticism and our ability to know anything about the world around us.",
    issue: "brainvat",
    proportion: 0.201923077,
  },
  {
    resp: "George knows that he is not a virtual-reality brain.",
    frequency: 83,
    full_issue:
      "<b>Skepticism</b>: Can George know he is not a brain in a vat?",
    description:
      "The letter vs. spirit debate is a philosophical issue that questions whether we should follow the literal wording of a rule or the intended purpose behind it. If Daphne technically follows the rule but does so in a way that goes against its intended purpose, did she break the rule?",
    issue: "brainvat",
    proportion: 0.798076923,
  },

  // Meaning (Twin Earth)
  {
    resp: "The liquid on Twin Earth is water.",
    frequency: 21,
    full_issue: "<b>Meaning</b>: Is the liquid on Twin Earth water?",
    description:
      "The Twin Earth thought experiment is a philosophical scenario that questions the nature of meaning and reference. If the liquid on Twin Earth is chemically identical to water but is called 'GNOB' instead of 'water', is it still water? This question raises issues about the relationship between language, meaning, and reality.",
    issue: "twinearth",
    proportion: 0.189189189,
  },
  {
    resp: "The liquid on Twin Earth is not water.",
    frequency: 90,
    full_issue: "<b>Meaning</b>: Is the liquid on Twin Earth water?",
    description:
      "The Twin Earth thought experiment is a philosophical scenario that questions the nature of meaning and reference. If the liquid on Twin Earth is chemically identical to water but is called 'GNOB' instead of 'water', is it still water? This question raises issues about the relationship between language, meaning, and reality.",
    issue: "twinearth",
    proportion: 0.810810811,
  },

  // Happiness and immorality
  {
    resp: "Sarah is not happy.",
    frequency: 13,
    full_issue: "<b>Happiness</b>: Can an immoral person be happy?",
    description:
      "The question of whether an immoral person can be happy is a philosophical issue that raises questions about the nature of happiness and morality. If Sarah engages in immoral behavior, can she still experience happiness, or is happiness incompatible with immorality?",
    issue: "happiness",
    proportion: 0.131313131,
  },
  {
    resp: "Sarah is happy.",
    frequency: 86,
    full_issue: "<b>Happiness</b>:Can an immoral person be happy?",
    description:
      "The question of whether an immoral person can be happy is a philosophical issue that raises questions about the nature of happiness and morality. If Sarah engages in immoral behavior, can she still experience happiness, or is happiness incompatible with immorality?",
    issue: "happiness",
    proportion: 0.868686869,
  },

  // Knowledge without belief
  {
    resp: "Juliet does not know that her athletic students are as capable as her other students.",
    frequency: 9,
    full_issue: "<b>Knowledge</b>: Can there be knowledge without belief?",
    description:
      "The question of whether there can be knowledge without belief is a philosophical issue that raises questions about the nature of knowledge and belief. If Juliet has evidence that her athletic students are as capable as her other students, but she does not believe it, does she still have knowledge?",
    issue: "knowledge",
    proportion: 0.09,
  },
  {
    resp: "Juliet knows that her athletic students are as capable as her other students.",
    frequency: 91,
    full_issue: "<b>Knowledge</b>: Can there be knowledge without belief?",
    description:
      "The question of whether there can be knowledge without belief is a philosophical issue that raises questions about the nature of knowledge and belief. If Juliet has evidence that her athletic students are as capable as her other students, but she does not believe it, does she still have knowledge?",
    issue: "knowledge",
    proportion: 0.91,
  },
];
