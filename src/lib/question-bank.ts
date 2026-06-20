export interface BankQuestion {
  subject: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  type: "radio" | "checkbox" | "text";
  label: string;
  options?: { label: string; value: string }[];
  correctAnswer: any;
  explanation: string;
  marks: number;
}

export const questionBank: BankQuestion[] = [
  // ================= MATHEMATICS (20 Questions) =================
  {
    subject: "mathematics",
    topic: "Arithmetic",
    difficulty: "easy",
    type: "radio",
    label: "What is the value of 15 * 8 - 40 / 5?",
    options: [
      { label: "112", value: "112" },
      { label: "116", value: "116" },
      { label: "120", value: "120" },
      { label: "108", value: "108" }
    ],
    correctAnswer: "112",
    explanation: "Using order of operations (PEMDAS): 15 * 8 = 120 and 40 / 5 = 8. Then, 120 - 8 = 112.",
    marks: 1
  },
  {
    subject: "mathematics",
    topic: "Fractions",
    difficulty: "easy",
    type: "radio",
    label: "Which fraction is equivalent to 0.625?",
    options: [
      { label: "5/8", value: "5_8" },
      { label: "3/5", value: "3_5" },
      { label: "7/12", value: "7_12" },
      { label: "5/6", value: "5_6" }
    ],
    correctAnswer: "5_8",
    explanation: "0.625 is equal to 625/1000. Dividing both the numerator and denominator by 125 gives 5/8.",
    marks: 1
  },
  {
    subject: "mathematics",
    topic: "Pre-Algebra",
    difficulty: "easy",
    type: "radio",
    label: "Solve for x in the simple equation: 4x + 12 = 36",
    options: [
      { label: "x = 6", value: "6" },
      { label: "x = 8", value: "8" },
      { label: "x = 10", value: "10" },
      { label: "x = 12", value: "12" }
    ],
    correctAnswer: "6",
    explanation: "Subtract 12 from both sides: 4x = 24. Dividing by 4 gives x = 6.",
    marks: 1
  },
  {
    subject: "mathematics",
    topic: "Geometry",
    difficulty: "easy",
    type: "radio",
    label: "What is the sum of the interior angles of a quadrilateral?",
    options: [
      { label: "180 degrees", value: "180" },
      { label: "270 degrees", value: "270" },
      { label: "360 degrees", value: "360" },
      { label: "540 degrees", value: "540" }
    ],
    correctAnswer: "360",
    explanation: "The formula is (n-2)*180. For a quadrilateral (n=4): (4-2)*180 = 2*180 = 360 degrees.",
    marks: 1
  },
  {
    subject: "mathematics",
    topic: "Averages",
    difficulty: "easy",
    type: "radio",
    label: "What is the average of 12, 16, 20, and 32?",
    options: [
      { label: "18", value: "18" },
      { label: "20", value: "20" },
      { label: "22", value: "22" },
      { label: "25", value: "25" }
    ],
    correctAnswer: "20",
    explanation: "Sum = 12 + 16 + 20 + 32 = 80. Average = 80 / 4 = 20.",
    marks: 1
  },
  {
    subject: "mathematics",
    topic: "Percentages",
    difficulty: "easy",
    type: "text",
    label: "What is 15% of 80?",
    correctAnswer: "12",
    explanation: "15% of 80 = (15/100) * 80 = 0.15 * 80 = 12.",
    marks: 1
  },
  {
    subject: "mathematics",
    topic: "Number Properties",
    difficulty: "easy",
    type: "checkbox",
    label: "Which of the following numbers are prime numbers? (Select all that apply)",
    options: [
      { label: "2", value: "2" },
      { label: "9", value: "9" },
      { label: "13", value: "13" },
      { label: "15", value: "15" }
    ],
    correctAnswer: ["2", "13"],
    explanation: "2 and 13 are only divisible by 1 and themselves. 9 is divisible by 3, and 15 by 3 and 5.",
    marks: 1
  },
  {
    subject: "mathematics",
    topic: "Algebra",
    difficulty: "medium",
    type: "radio",
    label: "Solve for x in the equation: 3x + 7 = 5x - 9",
    options: [
      { label: "x = 8", value: "8" },
      { label: "x = 4", value: "4" },
      { label: "x = -8", value: "-8" },
      { label: "x = 1", value: "1" }
    ],
    correctAnswer: "8",
    explanation: "Subtract 3x from both sides: 7 = 2x - 9. Add 9 to both sides: 16 = 2x. Divide by 2: x = 8.",
    marks: 2
  },
  {
    subject: "mathematics",
    topic: "Geometry",
    difficulty: "medium",
    type: "radio",
    label: "What is the area of a right-angled triangle with a base of 6 cm and a hypotenuse of 10 cm?",
    options: [
      { label: "24 sq cm", value: "24" },
      { label: "30 sq cm", value: "30" },
      { label: "48 sq cm", value: "48" },
      { label: "60 sq cm", value: "60" }
    ],
    correctAnswer: "24",
    explanation: "Height = sqrt(10^2 - 6^2) = sqrt(64) = 8 cm. Area = 0.5 * base * height = 0.5 * 6 * 8 = 24 sq cm.",
    marks: 2
  },
  {
    subject: "mathematics",
    topic: "Logarithms",
    difficulty: "medium",
    type: "radio",
    label: "What is the value of log2(64)?",
    options: [
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
      { label: "8", value: "8" }
    ],
    correctAnswer: "6",
    explanation: "2 raised to the power of 6 equals 64. Hence, log2(64) = 6.",
    marks: 2
  },
  {
    subject: "mathematics",
    topic: "Matrices",
    difficulty: "medium",
    type: "radio",
    label: "What is the determinant of the matrix [[3, 5], [2, 4]]?",
    options: [
      { label: "2", value: "2" },
      { label: "-2", value: "-2" },
      { label: "22", value: "22" },
      { label: "12", value: "12" }
    ],
    correctAnswer: "2",
    explanation: "Determinant = (3*4) - (5*2) = 12 - 10 = 2.",
    marks: 2
  },
  {
    subject: "mathematics",
    topic: "Probability",
    difficulty: "medium",
    type: "radio",
    label: "If a card is drawn at random from a standard 52-card deck, what is the probability of drawing a Queen?",
    options: [
      { label: "1/13", value: "1_13" },
      { label: "1/4", value: "1_4" },
      { label: "4/13", value: "4_13" },
      { label: "1/52", value: "1_52" }
    ],
    correctAnswer: "1_13",
    explanation: "There are 4 Queens in a 52-card deck. Probability = 4/52 = 1/13.",
    marks: 2
  },
  {
    subject: "mathematics",
    topic: "Polynomials",
    difficulty: "medium",
    type: "checkbox",
    label: "What are the roots of the quadratic equation: x^2 - 5x + 6 = 0? (Select all that apply)",
    options: [
      { label: "x = 2", value: "2" },
      { label: "x = 3", value: "3" },
      { label: "x = -2", value: "-2" },
      { label: "x = -3", value: "-3" }
    ],
    correctAnswer: ["2", "3"],
    explanation: "Factoring the quadratic gives: (x - 2)(x - 3) = 0. Therefore, the roots are x = 2 and x = 3.",
    marks: 2
  },
  {
    subject: "mathematics",
    topic: "Linear Systems",
    difficulty: "medium",
    type: "text",
    label: "Solve the system for y: x + y = 10, x - y = 4. What is the value of y?",
    correctAnswer: "3",
    explanation: "Subtracting the second equation from the first: 2y = 6, which gives y = 3.",
    marks: 2
  },
  {
    subject: "mathematics",
    topic: "Calculus",
    difficulty: "hard",
    type: "radio",
    label: "What is the derivative of f(x) = x^2 * ln(x) with respect to x?",
    options: [
      { label: "2x * ln(x) + x", value: "opt_a" },
      { label: "2x * ln(x) + 1", value: "opt_b" },
      { label: "x * ln(x) + x", value: "opt_c" },
      { label: "2x + 1/x", value: "opt_d" }
    ],
    correctAnswer: "opt_a",
    explanation: "By the product rule: d/dx[x^2]*ln(x) + x^2*d/dx[ln(x)] = 2x*ln(x) + x^2*(1/x) = 2x*ln(x) + x.",
    marks: 3
  },
  {
    subject: "mathematics",
    topic: "Probability",
    difficulty: "hard",
    type: "text",
    label: "A box contains 5 red balls and 3 blue balls. If two balls are drawn at random without replacement, what is the probability that both are red? (Write as a fraction like a/b)",
    correctAnswer: "5/14",
    explanation: "Probability of first red ball = 5/8. Probability of second red = 4/7. Overall probability = (5/8) * (4/7) = 20/56 = 5/14.",
    marks: 3
  },
  {
    subject: "mathematics",
    topic: "Trigonometry",
    difficulty: "hard",
    type: "radio",
    label: "What is the exact value of cos(75 degrees) using sum identities?",
    options: [
      { label: "(sqrt(6) - sqrt(2)) / 4", value: "val_a" },
      { label: "(sqrt(6) + sqrt(2)) / 4", value: "val_b" },
      { label: "(sqrt(3) - 1) / 2", value: "val_c" },
      { label: "(sqrt(2) - sqrt(6)) / 4", value: "val_d" }
    ],
    correctAnswer: "val_a",
    explanation: "cos(75) = cos(45 + 30) = cos(45)cos(30) - sin(45)sin(30) = (sqrt(2)/2)*(sqrt(3)/2) - (sqrt(2)/2)*(1/2) = (sqrt(6) - sqrt(2))/4.",
    marks: 3
  },
  {
    subject: "mathematics",
    topic: "Complex Numbers",
    difficulty: "hard",
    type: "radio",
    label: "Evaluate the complex number expression: (1 + i)^4.",
    options: [
      { label: "4", value: "4" },
      { label: "-4", value: "-4" },
      { label: "4i", value: "4i" },
      { label: "-4i", value: "-4i" }
    ],
    correctAnswer: "-4",
    explanation: "(1 + i)^2 = 1 + 2i - 1 = 2i. Then (2i)^2 = 4(i^2) = -4.",
    marks: 3
  },
  {
    subject: "mathematics",
    topic: "Limits",
    difficulty: "hard",
    type: "radio",
    label: "Evaluate the limit as x approaches 0 of: (sin(3x)) / x.",
    options: [
      { label: "0", value: "0" },
      { label: "1", value: "1" },
      { label: "3", value: "3" },
      { label: "Does not exist", value: "dne" }
    ],
    correctAnswer: "3",
    explanation: "Using L'Hopital's rule or basic limit identity: limit as u approaches 0 of sin(u)/u is 1, so sin(3x)/3x * 3 approaches 3.",
    marks: 3
  },
  {
    subject: "mathematics",
    topic: "Integration",
    difficulty: "hard",
    type: "checkbox",
    label: "Which of the following functions are antiderivatives of f(x) = sin(x)*cos(x)? (Select all that apply)",
    options: [
      { label: "(1/2) * sin^2(x) + C", value: "ant_a" },
      { label: "-(1/2) * cos^2(x) + C", value: "ant_b" },
      { label: "-(1/4) * cos(2x) + C", value: "ant_c" },
      { label: "-(1/2) * sin^2(x) + C", value: "ant_d" }
    ],
    correctAnswer: ["ant_a", "ant_b", "ant_c"],
    explanation: "All three integrate to sin(x)cos(x) up to a constant difference because sin^2(x) + cos^2(x) = 1 and cos(2x) = cos^2(x) - sin^2(x).",
    marks: 3
  },

  // ================= SCIENCE (20 Questions) =================
  {
    subject: "science",
    topic: "Chemistry",
    difficulty: "easy",
    type: "radio",
    label: "Which element has the chemical symbol 'Na'?",
    options: [
      { label: "Nickel", value: "nickel" },
      { label: "Nitrogen", value: "nitrogen" },
      { label: "Sodium", value: "sodium" },
      { label: "Neon", value: "neon" }
    ],
    correctAnswer: "sodium",
    explanation: "The chemical symbol 'Na' comes from Natrium, the Latin word for sodium.",
    marks: 1
  },
  {
    subject: "science",
    topic: "Biology",
    difficulty: "easy",
    type: "radio",
    label: "Which pigment gives leaves their green color?",
    options: [
      { label: "Carotene", value: "carotene" },
      { label: "Chlorophyll", value: "chlorophyll" },
      { label: "Hemoglobin", value: "hemoglobin" },
      { label: "Melanin", value: "melanin" }
    ],
    correctAnswer: "chlorophyll",
    explanation: "Chlorophyll absorbs red and blue light and reflects green light, giving plants their green appearance.",
    marks: 1
  },
  {
    subject: "science",
    topic: "Physics",
    difficulty: "easy",
    type: "radio",
    label: "What is the SI unit of electric force / power?",
    options: [
      { label: "Joule", value: "joule" },
      { label: "Watt", value: "watt" },
      { label: "Volt", value: "volt" },
      { label: "Ampere", value: "ampere" }
    ],
    correctAnswer: "watt",
    explanation: "The Watt (W) is the SI unit of power, equivalent to 1 Joule per second.",
    marks: 1
  },
  {
    subject: "science",
    topic: "Earth Science",
    difficulty: "easy",
    type: "radio",
    label: "Which layer of the Earth is composed primarily of liquid iron and nickel?",
    options: [
      { label: "Crust", value: "crust" },
      { label: "Mantle", value: "mantle" },
      { label: "Outer Core", value: "outer_core" },
      { label: "Inner Core", value: "inner_core" }
    ],
    correctAnswer: "outer_core" ,
    explanation: "The Earth's outer core is a fluid layer about 2,400 km thick, made of liquid iron and nickel.",
    marks: 1
  },
  {
    subject: "science",
    topic: "Biology",
    difficulty: "easy",
    type: "text",
    label: "What is the powerhouse of the cell called?",
    correctAnswer: "mitochondria",
    explanation: "Mitochondria are the powerhouses of cells, generating most of the cell's ATP.",
    marks: 1
  },
  {
    subject: "science",
    topic: "Physics",
    difficulty: "easy",
    type: "checkbox",
    label: "Which of the following are states of matter? (Select all that apply)",
    options: [
      { label: "Solid", value: "solid" },
      { label: "Liquid", value: "liquid" },
      { label: "Gas", value: "gas" },
      { label: "Friction", value: "friction" }
    ],
    correctAnswer: ["solid", "liquid", "gas"],
    explanation: "Solid, Liquid, and Gas are states of matter. Friction is a resistive force.",
    marks: 1
  },
  {
    subject: "science",
    topic: "Astronomy",
    difficulty: "easy",
    type: "radio",
    label: "Which planet is known as the Red Planet?",
    options: [
      { label: "Venus", value: "venus" },
      { label: "Mars", value: "mars" },
      { label: "Jupiter", value: "jupiter" },
      { label: "Saturn", value: "saturn" }
    ],
    correctAnswer: "mars",
    explanation: "Mars is called the Red Planet because iron minerals in its soil oxidise, or rust, making it look red.",
    marks: 1
  },
  {
    subject: "science",
    topic: "Physics",
    difficulty: "medium",
    type: "radio",
    label: "What is the speed of sound in dry air at room temperature (approx. 20°C)?",
    options: [
      { label: "343 m/s", value: "343" },
      { label: "300,000 km/s", value: "light" },
      { label: "150 m/s", value: "150" },
      { label: "1230 m/s", value: "1230" }
    ],
    correctAnswer: "343",
    explanation: "At 20°C, the speed of sound in air is approximately 343 meters per second.",
    marks: 2
  },
  {
    subject: "science",
    topic: "Astronomy",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following are categorized as terrestrial/rocky planets in our solar system?",
    options: [
      { label: "Mercury", value: "mercury" },
      { label: "Venus", value: "venus" },
      { label: "Jupiter", value: "jupiter" },
      { label: "Mars", value: "mars" }
    ],
    correctAnswer: ["mercury", "venus", "mars"],
    explanation: "Mercury, Venus, Earth, and Mars are the terrestrial (rocky) planets. Jupiter is a gas giant.",
    marks: 2
  },
  {
    subject: "science",
    topic: "Chemistry",
    difficulty: "medium",
    type: "radio",
    label: "What is the pH level of pure water at 25°C?",
    options: [
      { label: "5", value: "5" },
      { label: "7", value: "7" },
      { label: "9", value: "9" },
      { label: "14", value: "14" }
    ],
    correctAnswer: "7",
    explanation: "Pure water is neutral and has a pH of 7 at standard temperatures.",
    marks: 2
  },
  {
    subject: "science",
    topic: "Biology",
    difficulty: "medium",
    type: "radio",
    label: "How many chromosomes are contained in a standard human somatic cell?",
    options: [
      { label: "23", value: "23" },
      { label: "46", value: "46" },
      { label: "48", value: "48" },
      { label: "92", value: "92" }
    ],
    correctAnswer: "46",
    explanation: "Human somatic cells have 46 chromosomes, arranged in 23 pairs.",
    marks: 2
  },
  {
    subject: "science",
    topic: "Physics",
    difficulty: "medium",
    type: "radio",
    label: "Who formulated the three laws of motion?",
    options: [
      { label: "Albert Einstein", value: "einstein" },
      { label: "Isaac Newton", value: "newton" },
      { label: "Galileo Galilei", value: "galileo" },
      { label: "Nikola Tesla", value: "tesla" }
    ],
    correctAnswer: "newton",
    explanation: "Sir Isaac Newton formulated the three laws of motion in his Philosophiæ Naturalis Principia Mathematica.",
    marks: 2
  },
  {
    subject: "science",
    topic: "Chemistry",
    difficulty: "medium",
    type: "text",
    label: "What is the chemical formula for table salt?",
    correctAnswer: "NaCl",
    explanation: "Sodium chloride is NaCl, a compound of sodium and chlorine.",
    marks: 2
  },
  {
    subject: "science",
    topic: "Biology",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following are components of human blood? (Select all that apply)",
    options: [
      { label: "Red Blood Cells", value: "rbc" },
      { label: "White Blood Cells", value: "wbc" },
      { label: "Platelets", value: "platelets" },
      { label: "Glial Cells", value: "glial" }
    ],
    correctAnswer: ["rbc", "wbc", "platelets"],
    explanation: "RBCs, WBCs, and Platelets are blood cells. Glial cells are support cells of the nervous system.",
    marks: 2
  },
  {
    subject: "science",
    topic: "Physics",
    difficulty: "hard",
    type: "radio",
    label: "What type of thermodynamic cycle is executed by a standard internal combustion gasoline engine?",
    options: [
      { label: "Carnot Cycle", value: "carnot" },
      { label: "Otto Cycle", value: "otto" },
      { label: "Diesel Cycle", value: "diesel" },
      { label: "Rankine Cycle", value: "rankine" }
    ],
    correctAnswer: "otto",
    explanation: "The Otto Cycle is the idealized thermodynamic cycle that describes the functioning of a typical spark-ignition piston engine.",
    marks: 3
  },
  {
    subject: "science",
    topic: "Biology",
    difficulty: "hard",
    type: "radio",
    label: "Which metabolic pathway produces the most ATP molecules per glucose molecule?",
    options: [
      { label: "Glycolysis", value: "glycolysis" },
      { label: "Krebs Cycle", value: "krebs" },
      { label: "Electron Transport Chain", value: "etc" },
      { label: "Fermentation", value: "fermentation" }
    ],
    correctAnswer: "etc",
    explanation: "The Electron Transport Chain / Oxidative Phosphorylation produces roughly 32-34 ATP per glucose, compared to 2 for glycolysis and 2 for the Krebs cycle.",
    marks: 3
  },
  {
    subject: "science",
    topic: "Chemistry",
    difficulty: "hard",
    type: "radio",
    label: "What is the molecular geometry of sulfur hexafluoride (SF6)?",
    options: [
      { label: "Tetrahedral", value: "tetra" },
      { label: "Trigonal Bipyramidal", value: "trigonal" },
      { label: "Octahedral", value: "octa" },
      { label: "Square Planar", value: "square" }
    ],
    correctAnswer: "octa",
    explanation: "SF6 has 6 bonding pairs around the central sulfur atom with no lone pairs, producing an octahedral geometry under VSEPR theory.",
    marks: 3
  },
  {
    subject: "science",
    topic: "Physics",
    difficulty: "hard",
    type: "text",
    label: "What constant relates the energy of a photon to its frequency? (Write name, e.g., 'Planck's Constant')",
    correctAnswer: "Planck's Constant",
    explanation: "E = h*f, where h is Planck's constant.",
    marks: 3
  },
  {
    subject: "science",
    topic: "Chemistry",
    difficulty: "hard",
    type: "checkbox",
    label: "Which of the following elements are noble gases? (Select all that apply)",
    options: [
      { label: "Helium", value: "he" },
      { label: "Chlorine", value: "cl" },
      { label: "Argon", value: "ar" },
      { label: "Radon", value: "rn" }
    ],
    correctAnswer: ["he", "ar", "rn"],
    explanation: "Helium, Argon, and Radon are noble gases in Group 18. Chlorine is a halogen in Group 17.",
    marks: 3
  },
  {
    subject: "science",
    topic: "Physics",
    difficulty: "hard",
    type: "radio",
    label: "What is the name of the effect where light waves are shifted in frequency due to relative motion of source and observer?",
    options: [
      { label: "Photoelectric Effect", value: "photo" },
      { label: "Doppler Effect", value: "doppler" },
      { label: "Compton Effect", value: "compton" },
      { label: "Raman Effect", value: "raman" }
    ],
    correctAnswer: "doppler",
    explanation: "The Doppler Effect causes the frequency of waves to change for an observer moving relative to the wave source.",
    marks: 3
  },

  // ================= ENGLISH (20 Questions) =================
  {
    subject: "english",
    topic: "Grammar",
    difficulty: "easy",
    type: "radio",
    label: "Choose the correct sentence:",
    options: [
      { label: "They're going to their house over there.", value: "correct" },
      { label: "Their going to they're house over there.", value: "wrong_a" },
      { label: "There going to their house over they're.", value: "wrong_b" },
      { label: "They're going to there house over their.", value: "wrong_c" }
    ],
    correctAnswer: "correct",
    explanation: "They're = They are; their = possessive pronoun; there = location placeholder.",
    marks: 1
  },
  {
    subject: "english",
    topic: "Grammar",
    difficulty: "easy",
    type: "radio",
    label: "Identify the pronoun in the sentence: 'She walked quickly to the park.'",
    options: [
      { label: "She", value: "she" },
      { label: "walked", value: "walked" },
      { label: "quickly", value: "quickly" },
      { label: "park", value: "park" }
    ],
    correctAnswer: "she",
    explanation: "'She' is a third-person singular personal pronoun.",
    marks: 1
  },
  {
    subject: "english",
    topic: "Vocabulary",
    difficulty: "easy",
    type: "radio",
    label: "What is the antonym of the word 'Generous'?",
    options: [
      { label: "Kind", value: "kind" },
      { label: "Selfish", value: "selfish" },
      { label: "Patient", value: "patient" },
      { label: "Brave", value: "brave" }
    ],
    correctAnswer: "selfish",
    explanation: "Selfish is the direct antonym of generous (willing to give).",
    marks: 1
  },
  {
    subject: "english",
    topic: "Punctuation",
    difficulty: "easy",
    type: "radio",
    label: "Which punctuation mark is used to indicate a question?",
    options: [
      { label: "Period", value: "period" },
      { label: "Exclamation mark", value: "exclamation" },
      { label: "Question mark", value: "question" },
      { label: "Comma", value: "comma" }
    ],
    correctAnswer: "question",
    explanation: "Question marks (?) are placed at the end of direct questions.",
    marks: 1
  },
  {
    subject: "english",
    topic: "Spelling",
    difficulty: "easy",
    type: "text",
    label: "Spell the word that means a device used to view distant objects (starts with 't'):",
    correctAnswer: "telescope",
    explanation: "The correct spelling is telescope.",
    marks: 1
  },
  {
    subject: "english",
    topic: "Grammar",
    difficulty: "easy",
    type: "checkbox",
    label: "Which of the following are nouns? (Select all that apply)",
    options: [
      { label: "Happiness", value: "happiness" },
      { label: "London", value: "london" },
      { label: "Run", value: "run" },
      { label: "Beautifully", value: "beautifully" }
    ],
    correctAnswer: ["happiness", "london"],
    explanation: "Happiness is an abstract noun, and London is a proper noun. Run is a verb; beautifully is an adverb.",
    marks: 1
  },
  {
    subject: "english",
    topic: "Grammar",
    difficulty: "easy",
    type: "radio",
    label: "Choose the correct past tense of 'sing':",
    options: [
      { label: "Singed", value: "singed" },
      { label: "Sang", value: "sang" },
      { label: "Sung", value: "sung" },
      { label: "Sings", value: "sings" }
    ],
    correctAnswer: "sang",
    explanation: "The past tense of sing is sang. Sung is the past participle.",
    marks: 1
  },
  {
    subject: "english",
    topic: "Vocabulary",
    difficulty: "medium",
    type: "radio",
    label: "What is the synonym of the word 'Ephemeral'?",
    options: [
      { label: "Permanent", value: "permanent" },
      { label: "Short-lived", value: "short_lived" },
      { label: "Beautiful", value: "beautiful" },
      { label: "Mysterious", value: "mysterious" }
    ],
    correctAnswer: "short_lived",
    explanation: "Ephemeral refers to something that lasts for a very short time.",
    marks: 2
  },
  {
    subject: "english",
    topic: "Idioms",
    difficulty: "medium",
    type: "radio",
    label: "What does the idiom 'Bite the bullet' mean?",
    options: [
      { label: "To get injured in battle", value: "injured" },
      { label: "To face a difficult situation with courage", value: "courage" },
      { label: "To express anger aggressively", value: "anger" },
      { label: "To stop working early", value: "stop" }
    ],
    correctAnswer: "courage",
    explanation: "'Bite the bullet' means to endure a painful or difficult situation that is unavoidable.",
    marks: 2
  },
  {
    subject: "english",
    topic: "Grammar",
    difficulty: "medium",
    type: "radio",
    label: "Identify the voice of the sentence: 'The letter was written by James.'",
    options: [
      { label: "Active Voice", value: "active" },
      { label: "Passive Voice", value: "passive" },
      { label: "Subjective Voice", value: "subjective" },
      { label: "Objective Voice", value: "objective" }
    ],
    correctAnswer: "passive",
    explanation: "The sentence is passive because the subject (the letter) is being acted upon by the verb.",
    marks: 2
  },
  {
    subject: "english",
    topic: "Vocabulary",
    difficulty: "medium",
    type: "text",
    label: "What is the adjective form of the noun 'industry'?",
    correctAnswer: "industrial",
    explanation: "The adjective form of industry is industrial (or industrious, but industrial is standard).",
    marks: 2
  },
  {
    subject: "english",
    topic: "Grammar",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following sentences contain coordinating conjunctions (FANBOYS)? (Select all that apply)",
    options: [
      { label: "I wanted to go, but it was raining.", value: "sentence_a" },
      { label: "Although he was tired, he kept walking.", value: "sentence_b" },
      { label: "She bought apples and oranges.", value: "sentence_c" },
      { label: "Because she was hungry, she ate.", value: "sentence_d" }
    ],
    correctAnswer: ["sentence_a", "sentence_c"],
    explanation: "'But' and 'And' are coordinating conjunctions. 'Although' and 'Because' are subordinating conjunctions.",
    marks: 2
  },
  {
    subject: "english",
    topic: "Literary Devices",
    difficulty: "medium",
    type: "radio",
    label: "What literary device is used in the phrase: 'The wind whispered secrets in the night'?",
    options: [
      { label: "Metaphor", value: "metaphor" },
      { label: "Simile", value: "simile" },
      { label: "Personification", value: "personification" },
      { label: "Alliteration", value: "alliteration" }
    ],
    correctAnswer: "personification",
    explanation: "Giving human qualities (whispering secrets) to a non-human entity (the wind) is personification.",
    marks: 2
  },
  {
    subject: "english",
    topic: "Grammar",
    difficulty: "medium",
    type: "radio",
    label: "Complete the sentence: 'Neither of the options ________ acceptable.'",
    options: [
      { label: "is", value: "is" },
      { label: "are", value: "are" },
      { label: "were", value: "were" },
      { label: "have been", value: "have" }
    ],
    correctAnswer: "is",
    explanation: "Singular pronouns like 'neither' take singular verbs: 'Neither is acceptable.'",
    marks: 2
  },
  {
    subject: "english",
    topic: "Grammar",
    difficulty: "hard",
    type: "radio",
    label: "In the sentence 'Having finished his studies, the book was finally closed', what grammar error is present?",
    options: [
      { label: "Dangling Modifier", value: "dangling" },
      { label: "Split Infinitive", value: "split" },
      { label: "Subject-Verb Agreement", value: "agreement" },
      { label: "Run-on Sentence", value: "runon" }
    ],
    correctAnswer: "dangling",
    explanation: "'Having finished his studies' is a dangling modifier because it suggests the book finished the studies, rather than the student.",
    marks: 3
  },
  {
    subject: "english",
    topic: "Grammar",
    difficulty: "hard",
    type: "radio",
    label: "Choose the correct subjunctive sentence:",
    options: [
      { label: "If I was you, I would accept the job.", value: "was" },
      { label: "If I were you, I would accept the job.", value: "were" },
      { label: "If I am you, I will accept the job.", value: "am" },
      { label: "If I be you, I would accept the job.", value: "be" }
    ],
    correctAnswer: "were",
    explanation: "The subjunctive mood uses 'were' for hypothetical statements: 'If I were you.'",
    marks: 3
  },
  {
    subject: "english",
    topic: "Vocabulary",
    difficulty: "hard",
    type: "radio",
    label: "What is the meaning of the word 'Pernicious'?",
    options: [
      { label: "Highly beneficial", value: "beneficial" },
      { label: "Having a harmful effect, especially in a gradual way", value: "harmful" },
      { label: "Extremely clean and tidy", value: "clean" },
      { label: "Showing deep logical intelligence", value: "logical" }
    ],
    correctAnswer: "harmful",
    explanation: "Pernicious means causing great harm or ruin, often in a subtle or gradual manner.",
    marks: 3
  },
  {
    subject: "english",
    topic: "Punctuation",
    difficulty: "hard",
    type: "text",
    label: "What punctuation mark is used to link independent clauses without using a coordinating conjunction?",
    correctAnswer: "semicolon",
    explanation: "A semicolon is used to join independent clauses that are closely related in thought.",
    marks: 3
  },
  {
    subject: "english",
    topic: "Grammar",
    difficulty: "hard",
    type: "checkbox",
    label: "Which of the following contains a split infinitive? (Select all that apply)",
    options: [
      { label: "To boldly go where no one has gone before.", value: "split_a" },
      { label: "She wanted to quickly finish her report.", value: "split_b" },
      { label: "To run fast is his main goal.", value: "split_c" },
      { label: "He decided to study hard for the test.", value: "split_d" }
    ],
    correctAnswer: ["split_a", "split_b"],
    explanation: "In 'to boldly go' and 'to quickly finish', an adverb is placed between 'to' and the verb.",
    marks: 3
  },
  {
    subject: "english",
    topic: "Vocabulary",
    difficulty: "hard",
    type: "radio",
    label: "What is the meaning of the word 'Obfuscate'?",
    options: [
      { label: "To clarify an issue", value: "clarify" },
      { label: "To render obscure, unclear, or unintelligible", value: "obscure" },
      { label: "To praise someone publicly", value: "praise" },
      { label: "To verify database variables", value: "verify" }
    ],
    correctAnswer: "obscure",
    explanation: "To obfuscate means to make something obscure, dark, or difficult to understand.",
    marks: 3
  },

  // ================= HISTORY (20 Questions) =================
  {
    subject: "history",
    topic: "World War I",
    difficulty: "easy",
    type: "radio",
    label: "Which event is widely regarded as the spark that triggered World War I?",
    options: [
      { label: "The invasion of Poland", value: "poland" },
      { label: "The assassination of Archduke Franz Ferdinand", value: "assassination" },
      { label: "The signing of the Treaty of Versailles", value: "treaty" },
      { label: "The sinking of the Lusitania", value: "sinking" }
    ],
    correctAnswer: "assassination",
    explanation: "The assassination of Archduke Franz Ferdinand of Austria in June 1914 led directly to the outbreak of WWI.",
    marks: 1
  },
  {
    subject: "history",
    topic: "Ancient Civilizations",
    difficulty: "easy",
    type: "radio",
    label: "Which river was central to the development of the ancient Egyptian civilization?",
    options: [
      { label: "Tigris", value: "tigris" },
      { label: "Euphrates", value: "euphrates" },
      { label: "Nile", value: "nile" },
      { label: "Indus", value: "indus" }
    ],
    correctAnswer: "nile",
    explanation: "The Nile River provided fertile soil and water, which supported the rise of ancient Egypt.",
    marks: 1
  },
  {
    subject: "history",
    topic: "American History",
    difficulty: "easy",
    type: "radio",
    label: "Who was the first President of the United States?",
    options: [
      { label: "Thomas Jefferson", value: "jefferson" },
      { label: "George Washington", value: "washington" },
      { label: "Abraham Lincoln", value: "lincoln" },
      { label: "John Adams", value: "adams" }
    ],
    correctAnswer: "washington",
    explanation: "George Washington served as the first US President from 1789 to 1797.",
    marks: 1
  },
  {
    subject: "history",
    topic: "Exploration",
    difficulty: "easy",
    type: "radio",
    label: "In which year did Christopher Columbus first reach the Americas?",
    options: [
      { label: "1066", value: "1066" },
      { label: "1492", value: "1492" },
      { label: "1620", value: "1620" },
      { label: "1776", value: "1776" }
    ],
    correctAnswer: "1492",
    explanation: "Columbus landed in the Caribbean islands in October 1492.",
    marks: 1
  },
  {
    subject: "history",
    topic: "Ancient Rome",
    difficulty: "easy",
    type: "text",
    label: "Who was the famous Roman general assassinated on the Ides of March in 44 BC?",
    correctAnswer: "Julius Caesar",
    explanation: "Julius Caesar was assassinated by senators led by Brutus and Cassius in 44 BC.",
    marks: 1
  },
  {
    subject: "history",
    topic: "World War II",
    difficulty: "easy",
    type: "checkbox",
    label: "Which countries were part of the Axis powers during World War II? (Select all that apply)",
    options: [
      { label: "Germany", value: "germany" },
      { label: "Japan", value: "japan" },
      { label: "Great Britain", value: "uk" },
      { label: "Italy", value: "italy" }
    ],
    correctAnswer: ["germany", "japan", "italy"],
    explanation: "Germany, Italy, and Japan formed the Axis Alliance.",
    marks: 1
  },
  {
    subject: "history",
    topic: "Space Age",
    difficulty: "easy",
    type: "radio",
    label: "Which country launched the first artificial satellite, Sputnik 1, into space?",
    options: [
      { label: "United States", value: "usa" },
      { label: "Soviet Union", value: "ussr" },
      { label: "United Kingdom", value: "uk" },
      { label: "China", value: "china" }
    ],
    correctAnswer: "ussr",
    explanation: "The Soviet Union launched Sputnik 1 in October 1957, beginning the Space Race.",
    marks: 1
  },
  {
    subject: "history",
    topic: "Ancient Civilizations",
    difficulty: "medium",
    type: "radio",
    label: "The Code of Hammurabi is associated with which ancient civilization?",
    options: [
      { label: "Ancient Egypt", value: "egypt" },
      { label: "Babylonian Empire", value: "babylon" },
      { label: "Roman Empire", value: "rome" },
      { label: "Ancient Greece", value: "greece" }
    ],
    correctAnswer: "babylon",
    explanation: "The Code of Hammurabi is a Babylonian code of law enacted by King Hammurabi.",
    marks: 2
  },
  {
    subject: "history",
    topic: "French Revolution",
    difficulty: "medium",
    type: "radio",
    label: "Which prison fortress in Paris was stormed on July 14, 1789, marking a turning point in the French Revolution?",
    options: [
      { label: "The Bastille", value: "bastille" },
      { label: "Versailles", value: "versailles" },
      { label: "The Louvre", value: "louvre" },
      { label: "Tuileries", value: "tuileries" }
    ],
    correctAnswer: "bastille",
    explanation: "The storming of the Bastille symbolised the fall of absolute monarchy in France.",
    marks: 2
  },
  {
    subject: "history",
    topic: "Cold War",
    difficulty: "medium",
    type: "radio",
    label: "In which year did the Berlin Wall fall, leading to the reunification of Germany?",
    options: [
      { label: "1985", value: "1985" },
      { label: "1989", value: "1989" },
      { label: "1991", value: "1991" },
      { label: "1995", value: "1995" }
    ],
    correctAnswer: "1989",
    explanation: "The Berlin Wall was opened in November 1989, leading to the collapse of East German communism.",
    marks: 2
  },
  {
    subject: "history",
    topic: "British History",
    difficulty: "medium",
    type: "radio",
    label: "Which document was signed by King John at Runnymede in 1215, establishing the principle that everyone is subject to the law?",
    options: [
      { label: "The Bill of Rights", value: "bill" },
      { label: "The Magna Carta", value: "magna" },
      { label: "The Petition of Right", value: "petition" },
      { label: "The Declaration of Rights", value: "declaration" }
    ],
    correctAnswer: "magna",
    explanation: "The Magna Carta (Great Charter) limited royal power and protected barons' rights.",
    marks: 2
  },
  {
    subject: "history",
    topic: "Renaissance",
    difficulty: "medium",
    type: "text",
    label: "Which German goldsmith invented the movable type printing press around 1440?",
    correctAnswer: "Johannes Gutenberg",
    explanation: "Gutenberg's printing press triggered the Printing Revolution in Europe.",
    marks: 2
  },
  {
    subject: "history",
    topic: "Mongol Empire",
    difficulty: "medium",
    type: "radio",
    label: "Who was the founder and first Great Khan of the Mongol Empire?",
    options: [
      { label: "Kublai Khan", value: "kublai" },
      { label: "Genghis Khan", value: "genghis" },
      { label: "Ogedei Khan", value: "ogedei" },
      { label: "Hulagu Khan", value: "hulagu" }
    ],
    correctAnswer: "genghis",
    explanation: "Genghis Khan unified the nomadic tribes of Northeast Asia and founded the empire in 1206.",
    marks: 2
  },
  {
    subject: "history",
    topic: "American Civil War",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following were major battles of the American Civil War? (Select all that apply)",
    options: [
      { label: "Battle of Gettysburg", value: "gettysburg" },
      { label: "Battle of Waterloo", value: "waterloo" },
      { label: "Battle of Antietam", value: "antietam" },
      { label: "Battle of Yorktown", value: "yorktown" }
    ],
    correctAnswer: ["gettysburg", "antietam"],
    explanation: "Gettysburg and Antietam were key Civil War battles. Waterloo was in Belgium (Napoleonic wars); Yorktown was in the Revolutionary War.",
    marks: 2
  },
  {
    subject: "history",
    topic: "American History",
    difficulty: "hard",
    type: "checkbox",
    label: "Who among the following were authors of the Federalist Papers?",
    options: [
      { label: "Alexander Hamilton", value: "hamilton" },
      { label: "James Madison", value: "madison" },
      { label: "John Jay", value: "jay" },
      { label: "Thomas Jefferson", value: "jefferson" }
    ],
    correctAnswer: ["hamilton", "madison", "jay"],
    explanation: "The Federalist Papers were written by Alexander Hamilton, James Madison, and John Jay under the pseudonym Publius.",
    marks: 3
  },
  {
    subject: "history",
    topic: "Russian Revolution",
    difficulty: "hard",
    type: "radio",
    label: "Which group, led by Vladimir Lenin, seized power in Russia during the October Revolution of 1917?",
    options: [
      { label: "Mensheviks", value: "mensheviks" },
      { label: "Bolsheviks", value: "bolsheviks" },
      { label: "Socialist Revolutionaries", value: "socialists" },
      { label: "Tsarists", value: "tsarists" }
    ],
    correctAnswer: "bolsheviks",
    explanation: "The Bolsheviks overthrew the Russian Provisional Government in 1917 to establish the Soviet regime.",
    marks: 3
  },
  {
    subject: "history",
    topic: "Byzantine Empire",
    difficulty: "hard",
    type: "radio",
    label: "In which year did the Ottoman Empire capture Constantinople, bringing the Byzantine Empire to an end?",
    options: [
      { label: "1453", value: "1453" },
      { label: "1492", value: "1492" },
      { label: "1517", value: "1517" },
      { label: "1529", value: "1529" }
    ],
    correctAnswer: "1453",
    explanation: "Constantinople fell to Sultan Mehmed II of the Ottoman Empire in May 1453.",
    marks: 3
  },
  {
    subject: "history",
    topic: "Ancient Civilizations",
    difficulty: "hard",
    type: "text",
    label: "Which treaty ended the First Punic War between Rome and Carthage in 241 BC?",
    correctAnswer: "Treaty of Lutatius",
    explanation: "The Treaty of Lutatius forced Carthage to evacuate Sicily and pay war indemnities.",
    marks: 3
  },
  {
    subject: "history",
    topic: "Chinese History",
    difficulty: "hard",
    type: "radio",
    label: "Which Chinese dynasty was ruled by the Mongols and founded by Kublai Khan?",
    options: [
      { label: "Song Dynasty", value: "song" },
      { label: "Yuan Dynasty", value: "yuan" },
      { label: "Ming Dynasty", value: "ming" },
      { label: "Tang Dynasty", value: "tang" }
    ],
    correctAnswer: "yuan",
    explanation: "The Yuan Dynasty (1271-1368) was established by Kublai Khan, grandson of Genghis Khan.",
    marks: 3
  },
  {
    subject: "history",
    topic: "Medieval Europe",
    difficulty: "hard",
    type: "checkbox",
    label: "Which of the following were military orders active during the Crusades? (Select all that apply)",
    options: [
      { label: "Knights Templar", value: "templars" },
      { label: "Hospitallers", value: "hospitallers" },
      { label: "Teutonic Knights", value: "teutonic" },
      { label: "Knights of the Round Table", value: "round_table" }
    ],
    correctAnswer: ["templars", "hospitallers", "teutonic"],
    explanation: "Templars, Hospitallers, and Teutonic Knights were religious-military orders. Round Table is Arthurian legend.",
    marks: 3
  },

  // ================= GEOGRAPHY (20 Questions) =================
  {
    subject: "geography",
    topic: "Lakes",
    difficulty: "easy",
    type: "radio",
    label: "Which lake is the deepest freshwater lake in the world?",
    options: [
      { label: "Lake Superior", value: "superior" },
      { label: "Lake Victoria", value: "victoria" },
      { label: "Lake Baikal", value: "baikal" },
      { label: "Lake Tanganyika", value: "tanganyika" }
    ],
    correctAnswer: "baikal",
    explanation: "Lake Baikal in Russia is the world's deepest and oldest freshwater lake, reaching 1,642 meters.",
    marks: 1
  },
  {
    subject: "geography",
    topic: "Rivers",
    difficulty: "easy",
    type: "radio",
    label: "Which is the longest river in the world?",
    options: [
      { label: "Amazon River", value: "amazon" },
      { label: "Nile River", value: "nile" },
      { label: "Yangtze River", value: "yangtze" },
      { label: "Mississippi River", value: "mississippi" }
    ],
    correctAnswer: "nile",
    explanation: "The Nile is traditionally considered the longest river in the world, stretching 6,650 kilometers.",
    marks: 1
  },
  {
    subject: "geography",
    topic: "Mountains",
    difficulty: "easy",
    type: "radio",
    label: "Which mountain is the tallest above sea level in the world?",
    options: [
      { label: "K2", value: "k2" },
      { label: "Mount Everest", value: "everest" },
      { label: "Kangchenjunga", value: "kangchen" },
      { label: "Lhotse", value: "lhotse" }
    ],
    correctAnswer: "everest",
    explanation: "Mount Everest is Earth's highest mountain above sea level, located in the Himalayas.",
    marks: 1
  },
  {
    subject: "geography",
    topic: "Continents",
    difficulty: "easy",
    type: "radio",
    label: "Which is the smallest continent by land area?",
    options: [
      { label: "Europe", value: "europe" },
      { label: "Australia", value: "australia" },
      { label: "Antarctica", value: "antarctica" },
      { label: "South America", value: "south_america" }
    ],
    correctAnswer: "australia",
    explanation: "Australia is the smallest continent by land area, often called Oceania.",
    marks: 1
  },
  {
    subject: "geography",
    topic: "Deserts",
    difficulty: "easy",
    type: "text",
    label: "What is the largest hot desert in the world?",
    correctAnswer: "Sahara",
    explanation: "The Sahara is the largest hot desert, covering much of North Africa.",
    marks: 1
  },
  {
    subject: "geography",
    topic: "Political Geography",
    difficulty: "easy",
    type: "checkbox",
    label: "Which of the following countries share a border with Canada? (Select all that apply)",
    options: [
      { label: "United States", value: "usa" },
      { label: "Mexico", value: "mexico" },
      { label: "Greenland", value: "greenland" },
      { label: "Russia", value: "russia" }
    ],
    correctAnswer: ["usa"],
    explanation: "The US is the only country sharing a land border with Canada. (Greenland shares a tiny boundary over Hans Island, but traditionally only US is land-bordered).",
    marks: 1
  },
  {
    subject: "geography",
    topic: "Oceans",
    difficulty: "easy",
    type: "radio",
    label: "Which ocean is the largest and deepest on Earth?",
    options: [
      { label: "Atlantic Ocean", value: "atlantic" },
      { label: "Indian Ocean", value: "indian" },
      { label: "Pacific Ocean", value: "pacific" },
      { label: "Arctic Ocean", value: "arctic" }
    ],
    correctAnswer: "pacific",
    explanation: "The Pacific Ocean covers more than 30% of the Earth's surface and contains the Mariana Trench.",
    marks: 1
  },
  {
    subject: "geography",
    topic: "Countries",
    difficulty: "medium",
    type: "radio",
    label: "Which landlocked country is completely surrounded by South Africa?",
    options: [
      { label: "Swaziland (Eswatini)", value: "eswatini" },
      { label: "Lesotho", value: "lesotho" },
      { label: "Botswana", value: "botswana" },
      { label: "Namibia", value: "namibia" }
    ],
    correctAnswer: "lesotho",
    explanation: "Lesotho is an enclaved landlocked country entirely surrounded by South Africa.",
    marks: 2
  },
  {
    subject: "geography",
    topic: "Capitals",
    difficulty: "medium",
    type: "radio",
    label: "What is the capital city of Australia?",
    options: [
      { label: "Sydney", value: "sydney" },
      { label: "Melbourne", value: "melbourne" },
      { label: "Canberra", value: "canberra" },
      { label: "Brisbane", value: "brisbane" }
    ],
    correctAnswer: "canberra",
    explanation: "Canberra was chosen as the capital in 1908 as a compromise between Sydney and Melbourne.",
    marks: 2
  },
  {
    subject: "geography",
    topic: "Islands",
    difficulty: "medium",
    type: "radio",
    label: "Which is the largest island in the world (excluding continents)?",
    options: [
      { label: "Greenland", value: "greenland" },
      { label: "New Guinea", value: "new_guinea" },
      { label: "Borneo", value: "borneo" },
      { label: "Madagascar", value: "madagascar" }
    ],
    correctAnswer: "greenland",
    explanation: "Greenland is the largest island by area, covering over 2.1 million square kilometers.",
    marks: 2
  },
  {
    subject: "geography",
    topic: "Volcanoes",
    difficulty: "medium",
    type: "radio",
    label: "Which active volcano is known as the 'Lighthouse of the Mediterranean'?",
    options: [
      { label: "Mount Vesuvius", value: "vesuvius" },
      { label: "Mount Etna", value: "etna" },
      { label: "Stromboli", value: "stromboli" },
      { label: "Krakatoa", value: "krakatoa" }
    ],
    correctAnswer: "stromboli",
    explanation: "Stromboli has been in near-continuous eruption for the past 2,000 years, glowing at night.",
    marks: 2
  },
  {
    subject: "geography",
    topic: "Straits",
    difficulty: "medium",
    type: "radio",
    label: "Which strait connects the Mediterranean Sea to the Atlantic Ocean?",
    options: [
      { label: "Strait of Malacca", value: "malacca" },
      { label: "Strait of Gibraltar", value: "gibraltar" },
      { label: "Strait of Hormuz", value: "hormuz" },
      { label: "Bosphorus Strait", value: "bosphorus" }
    ],
    correctAnswer: "gibraltar",
    explanation: "The Strait of Gibraltar connects the Atlantic Ocean to the Mediterranean Sea.",
    marks: 2
  },
  {
    subject: "geography",
    topic: "Capitals",
    difficulty: "medium",
    type: "text",
    label: "What is the capital of Japan?",
    correctAnswer: "Tokyo",
    explanation: "Tokyo is the capital and most populous metropolitan area in Japan.",
    marks: 2
  },
  {
    subject: "geography",
    topic: "US States",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following US states share a border with Mexico? (Select all that apply)",
    options: [
      { label: "California", value: "california" },
      { label: "Texas", value: "texas" },
      { label: "Florida", value: "florida" },
      { label: "Arizona", value: "arizona" }
    ],
    correctAnswer: ["california", "texas", "arizona"],
    explanation: "California, Arizona, New Mexico, and Texas border Mexico. Florida is isolated by the Gulf.",
    marks: 2
  },
  {
    subject: "geography",
    topic: "Atmosphere",
    difficulty: "hard",
    type: "radio",
    label: "Which atmospheric layer contains the ozone layer that absorbs harmful UV radiation?",
    options: [
      { label: "Troposphere", value: "troposphere" },
      { label: "Stratosphere", value: "stratosphere" },
      { label: "Mesosphere", value: "mesosphere" },
      { label: "Thermosphere", value: "thermosphere" }
    ],
    correctAnswer: "stratosphere",
    explanation: "The ozone layer is located in the lower stratosphere, about 15 to 35 km above Earth.",
    marks: 3
  },
  {
    subject: "geography",
    topic: "Earth Systems",
    difficulty: "hard",
    type: "radio",
    label: "What is the name of the ocean current that warms the coast of Western Europe?",
    options: [
      { label: "Gulf Stream", value: "gulf" },
      { label: "California Current", value: "california" },
      { label: "Benguela Current", value: "benguela" },
      { label: "Kuroshio Current", value: "kuroshio" }
    ],
    correctAnswer: "gulf",
    explanation: "The Gulf Stream / North Atlantic Drift carries warm water from the Gulf of Mexico to Western Europe.",
    marks: 3
  },
  {
    subject: "geography",
    topic: "Geology",
    difficulty: "hard",
    type: "radio",
    label: "Which plate boundary is formed when two plates slide past each other horizontally?",
    options: [
      { label: "Convergent Boundary", value: "convergent" },
      { label: "Divergent Boundary", value: "divergent" },
      { label: "Transform Boundary", value: "transform" },
      { label: "Subduction Boundary", value: "subduction" }
    ],
    correctAnswer: "transform",
    explanation: "Transform boundaries (like the San Andreas Fault) occur where plates slide past one another.",
    marks: 3
  },
  {
    subject: "geography",
    topic: "Demographics",
    difficulty: "hard",
    type: "text",
    label: "What is the capital of Canada?",
    correctAnswer: "Ottawa",
    explanation: "Ottawa was selected as the capital of Canada by Queen Victoria in 1857.",
    marks: 3
  },
  {
    subject: "geography",
    topic: "Lakes",
    difficulty: "hard",
    type: "checkbox",
    label: "Which of the following lakes are part of the African Great Lakes? (Select all that apply)",
    options: [
      { label: "Lake Victoria", value: "victoria" },
      { label: "Lake Tanganyika", value: "tanganyika" },
      { label: "Lake Baikal", value: "baikal" },
      { label: "Lake Malawi", value: "malawi" }
    ],
    correctAnswer: ["victoria", "tanganyika", "malawi"],
    explanation: "Victoria, Tanganyika, and Malawi are African Great Lakes. Baikal is in Russian Siberia.",
    marks: 3
  },
  {
    subject: "geography",
    topic: "Cartography",
    difficulty: "hard",
    type: "radio",
    label: "Which map projection is notorious for extreme size distortion near the poles but preserves direction?",
    options: [
      { label: "Robinson Projection", value: "robinson" },
      { label: "Mercator Projection", value: "mercator" },
      { label: "Winkel Tripel Projection", value: "winkel" },
      { label: "Gall-Peters Projection", value: "peters" }
    ],
    correctAnswer: "mercator",
    explanation: "The Mercator projection distorts the size of landmasses near the poles (like Greenland) to preserve navigation lines.",
    marks: 3
  },

  // ================= COMPUTER SCIENCE (20 Questions) =================
  {
    subject: "computer science",
    topic: "Number Systems",
    difficulty: "easy",
    type: "radio",
    label: "What is the binary representation of the decimal number 25?",
    options: [
      { label: "11001", value: "11001" },
      { label: "10101", value: "10101" },
      { label: "11100", value: "11100" },
      { label: "10011", value: "10011" }
    ],
    correctAnswer: "11001",
    explanation: "25 = 16 + 8 + 1, which translates to binary 11001.",
    marks: 1
  },
  {
    subject: "computer science",
    topic: "Hardware",
    difficulty: "easy",
    type: "radio",
    label: "What does CPU stand for?",
    options: [
      { label: "Computer Processing Unit", value: "comp_process" },
      { label: "Central Processing Unit", value: "central_process" },
      { label: "Central Program Utility", value: "central_prog" },
      { label: "Core Performance Unit", value: "core_perf" }
    ],
    correctAnswer: "central_process",
    explanation: "CPU stands for Central Processing Unit, the main chip executing instructions.",
    marks: 1
  },
  {
    subject: "computer science",
    topic: "Logic Gates",
    difficulty: "easy",
    type: "radio",
    label: "Which logic gate returns true only if both of its inputs are true?",
    options: [
      { label: "OR Gate", value: "or" },
      { label: "AND Gate", value: "and" },
      { label: "XOR Gate", value: "xor" },
      { label: "NAND Gate", value: "nand" }
    ],
    correctAnswer: "and",
    explanation: "An AND gate gives a high output (1) only if all its inputs are high (1).",
    marks: 1
  },
  {
    subject: "computer science",
    topic: "Memory",
    difficulty: "easy",
    type: "radio",
    label: "Which type of memory is volatile and loses its data when the system is powered off?",
    options: [
      { label: "ROM", value: "rom" },
      { label: "SSD", value: "ssd" },
      { label: "RAM", value: "ram" },
      { label: "HDD", value: "hdd" }
    ],
    correctAnswer: "ram",
    explanation: "RAM is volatile memory used for active process storage, losing contents when powered down.",
    marks: 1
  },
  {
    subject: "computer science",
    topic: "Programming",
    difficulty: "easy",
    type: "text",
    label: "What is the common term for a mistake or flaw in a computer program that causes it to behave incorrectly?",
    correctAnswer: "bug",
    explanation: "A bug is an error, flaw, or fault in software that causes it to produce an incorrect or unexpected result.",
    marks: 1
  },
  {
    subject: "computer science",
    topic: "Programming",
    difficulty: "easy",
    type: "checkbox",
    label: "Which of the following are high-level programming languages? (Select all that apply)",
    options: [
      { label: "Assembly", value: "assembly" },
      { label: "Python", value: "python" },
      { label: "Java", value: "java" },
      { label: "Machine Code", value: "machine" }
    ],
    correctAnswer: ["python", "java"],
    explanation: "Python and Java are high-level languages. Assembly and Machine Code are low-level.",
    marks: 1
  },
  {
    subject: "computer science",
    topic: "Software",
    difficulty: "easy",
    type: "radio",
    label: "What is the main function of an operating system kernel?",
    options: [
      { label: "To render user interface graphics", value: "gui" },
      { label: "To compile code applications", value: "compiler" },
      { label: "To manage system resources and hardware communications", value: "manage" },
      { label: "To verify search engines", value: "search" }
    ],
    correctAnswer: "manage",
    explanation: "The kernel manages hardware access, memory allocations, and CPU schedules.",
    marks: 1
  },
  {
    subject: "computer science",
    topic: "Programming Paradigm",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following are primary pillars of Object-Oriented Programming (OOP)?",
    options: [
      { label: "Encapsulation", value: "encapsulation" },
      { label: "Inheritance", value: "inheritance" },
      { label: "Compilation", value: "compilation" },
      { label: "Polymorphism", value: "polymorphism" }
    ],
    correctAnswer: ["encapsulation", "inheritance", "polymorphism"],
    explanation: "The four pillars of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction.",
    marks: 2
  },
  {
    subject: "computer science",
    topic: "Logic Gates",
    difficulty: "medium",
    type: "radio",
    label: "Which gate is universal, meaning any logic circuit can be built using only this gate type?",
    options: [
      { label: "AND Gate", value: "and" },
      { label: "OR Gate", value: "or" },
      { label: "NAND Gate", value: "nand" },
      { label: "XOR Gate", value: "xor" }
    ],
    correctAnswer: "nand",
    explanation: "NAND and NOR gates are universal gates because any boolean function can be implemented with them.",
    marks: 2
  },
  {
    subject: "computer science",
    topic: "Theory",
    difficulty: "medium",
    type: "radio",
    label: "Who is known as the father of modern computer science and artificial intelligence?",
    options: [
      { label: "Bill Gates", value: "gates" },
      { label: "Alan Turing", value: "turing" },
      { label: "Ada Lovelace", value: "lovelace" },
      { label: "Charles Babbage", value: "babbage" }
    ],
    correctAnswer: "turing",
    explanation: "Alan Turing formalised the concepts of algorithm and computation with the Turing machine.",
    marks: 2
  },
  {
    subject: "computer science",
    topic: "Information Theory",
    difficulty: "medium",
    type: "radio",
    label: "How many bits are in a single byte?",
    options: [
      { label: "4", value: "4" },
      { label: "8", value: "8" },
      { label: "16", value: "16" },
      { label: "32", value: "32" }
    ],
    correctAnswer: "8",
    explanation: "By definition, a byte contains 8 bits.",
    marks: 2
  },
  {
    subject: "computer science",
    topic: "Software Engineering",
    difficulty: "medium",
    type: "radio",
    label: "What does the 'S' stand for in the SOLID design principles?",
    options: [
      { label: "System Dependency", value: "system" },
      { label: "Single Responsibility Principle", value: "single" },
      { label: "State Isolation", value: "state" },
      { label: "Superclass Definition", value: "superclass" }
    ],
    correctAnswer: "single",
    explanation: "The Single Responsibility Principle states that a class should have only one reason to change.",
    marks: 2
  },
  {
    subject: "computer science",
    topic: "Compilers",
    difficulty: "medium",
    type: "text",
    label: "What is the process of translating source code into machine code called?",
    correctAnswer: "compilation",
    explanation: "Compilation is the translation of high-level code into executable binaries by a compiler.",
    marks: 2
  },
  {
    subject: "computer science",
    topic: "Databases",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following are NoSQL databases? (Select all that apply)",
    options: [
      { label: "MongoDB", value: "mongo" },
      { label: "PostgreSQL", value: "postgres" },
      { label: "Cassandra", value: "cassandra" },
      { label: "SQLite", value: "sqlite" }
    ],
    correctAnswer: ["mongo", "cassandra"],
    explanation: "MongoDB and Cassandra are NoSQL. PostgreSQL and SQLite are relational databases.",
    marks: 2
  },
  {
    subject: "computer science",
    topic: "Complexity",
    difficulty: "hard",
    type: "radio",
    label: "What is the worst-case time complexity of searching for an element in a Balanced Binary Search Tree (AVL tree)?",
    options: [
      { label: "O(1)", value: "o_1" },
      { label: "O(n)", value: "o_n" },
      { label: "O(log n)", value: "o_logn" },
      { label: "O(n log n)", value: "o_nlogn" }
    ],
    correctAnswer: "o_logn",
    explanation: "Since the tree remains balanced, search complexity is guaranteed to be O(log n) in the worst case.",
    marks: 3
  },
  {
    subject: "computer science",
    topic: "Computability",
    difficulty: "hard",
    type: "radio",
    label: "Which of the following problems is known to be undecidable?",
    options: [
      { label: "Traveling Salesperson Problem", value: "tsp" },
      { label: "Halting Problem", value: "halting" },
      { label: "Primality Testing", value: "prime" },
      { label: "Sorting an array", value: "sorting" }
    ],
    correctAnswer: "halting",
    explanation: "Alan Turing proved in 1936 that the Halting Problem is undecidable on Turing machines.",
    marks: 3
  },
  {
    subject: "computer science",
    topic: "Graphics",
    difficulty: "hard",
    type: "radio",
    label: "Which color model is additive and primarily used in computer displays?",
    options: [
      { label: "CMYK", value: "cmyk" },
      { label: "RGB", value: "rgb" },
      { label: "HSL", value: "hsl" },
      { label: "YUV", value: "yuv" }
    ],
    correctAnswer: "rgb",
    explanation: "RGB is additive color mixing where red, green, and blue light are combined to make colors.",
    marks: 3
  },
  {
    subject: "computer science",
    topic: "State Machines",
    difficulty: "hard",
    type: "text",
    label: "What is a finite automaton that has output values associated with its states called?",
    correctAnswer: "Moore machine",
    explanation: "A Moore machine is a finite-state machine whose output values are determined solely by its current state.",
    marks: 3
  },
  {
    subject: "computer science",
    topic: "Algorithms",
    difficulty: "hard",
    type: "checkbox",
    label: "Which of the following are NP-Complete problems? (Select all that apply)",
    options: [
      { label: "Boolean Satisfiability (SAT)", value: "sat" },
      { label: "Shortest Path in graph", value: "shortest" },
      { label: "Knapsack Problem", value: "knapsack" },
      { label: "Matrix Multiplication", value: "matrix" }
    ],
    correctAnswer: ["sat", "knapsack"],
    explanation: "SAT and Knapsack are NP-Complete. Shortest path (Dijkstra) and Matrix multiplication are in P.",
    marks: 3
  },
  {
    subject: "computer science",
    topic: "Theory",
    difficulty: "hard",
    type: "radio",
    label: "Which class of languages is recognized by Pushdown Automata (PDA)?",
    options: [
      { label: "Regular Languages", value: "regular" },
      { label: "Context-Free Languages", value: "cfl" },
      { label: "Context-Sensitive Languages", value: "csl" },
      { label: "Recursively Enumerable Languages", value: "re" }
    ],
    correctAnswer: "cfl",
    explanation: "Pushdown automata, which contain a stack, recognize Context-Free Languages.",
    marks: 3
  },

  // ================= DBMS (20 Questions) =================
  {
    subject: "dbms",
    topic: "SQL",
    difficulty: "easy",
    type: "radio",
    label: "Which SQL constraint prevents null values in a column?",
    options: [
      { label: "UNIQUE", value: "unique" },
      { label: "PRIMARY KEY", value: "primary" },
      { label: "NOT NULL", value: "not_null" },
      { label: "FOREIGN KEY", value: "foreign" }
    ],
    correctAnswer: "not_null",
    explanation: "The NOT NULL constraint enforces a column to not accept NULL values.",
    marks: 1
  },
  {
    subject: "dbms",
    topic: "SQL",
    difficulty: "easy",
    type: "radio",
    label: "Which SQL keyword is used to retrieve unique records?",
    options: [
      { label: "UNIQUE", value: "unique" },
      { label: "DISTINCT", value: "distinct" },
      { label: "GROUP BY", value: "group" },
      { label: "ORDER BY", value: "order" }
    ],
    correctAnswer: "distinct",
    explanation: "The DISTINCT clause is used to return only distinct (different) values.",
    marks: 1
  },
  {
    subject: "dbms",
    topic: "Concepts",
    difficulty: "easy",
    type: "radio",
    label: "What does the acronym DBMS stand for?",
    options: [
      { label: "Database Management System", value: "dbms" },
      { label: "Data Backup Management System", value: "dbms_backup" },
      { label: "Digital Base Memory Storage", value: "dbms_base" },
      { label: "Database Metadata Standard", value: "dbms_meta" }
    ],
    correctAnswer: "dbms",
    explanation: "DBMS stands for Database Management System, software for managing databases.",
    marks: 1
  },
  {
    subject: "dbms",
    topic: "SQL",
    difficulty: "easy",
    type: "radio",
    label: "Which SQL command is used to delete all rows from a table without logging individual row deletions?",
    options: [
      { label: "DELETE", value: "delete" },
      { label: "DROP", value: "drop" },
      { label: "TRUNCATE", value: "truncate" },
      { label: "REMOVE", value: "remove" }
    ],
    correctAnswer: "truncate",
    explanation: "TRUNCATE TABLE empties a table completely, running faster than DELETE because it bypasses row-level transaction logging.",
    marks: 1
  },
  {
    subject: "dbms",
    topic: "SQL",
    difficulty: "easy",
    type: "text",
    label: "What SQL command is used to add new rows to a table? (Write query statement keyword, e.g., 'INSERT INTO')",
    correctAnswer: "INSERT INTO",
    explanation: "The INSERT INTO statement is used to insert new records in a table.",
    marks: 1
  },
  {
    subject: "dbms",
    topic: "SQL",
    difficulty: "easy",
    type: "checkbox",
    label: "Which of the following are DDL (Data Definition Language) commands in SQL? (Select all that apply)",
    options: [
      { label: "CREATE", value: "create" },
      { label: "SELECT", value: "select" },
      { label: "ALTER", value: "alter" },
      { label: "UPDATE", value: "update" }
    ],
    correctAnswer: ["create", "alter"],
    explanation: "CREATE and ALTER define structure (DDL). SELECT queries (DQL); UPDATE modifies data (DML).",
    marks: 1
  },
  {
    subject: "dbms",
    topic: "Key Concepts",
    difficulty: "easy",
    type: "radio",
    label: "What type of key uniquely identifies a record in a table?",
    options: [
      { label: "Foreign Key", value: "foreign" },
      { label: "Candidate Key", value: "candidate" },
      { label: "Primary Key", value: "primary" },
      { label: "Composite Key", value: "composite" }
    ],
    correctAnswer: "primary",
    explanation: "A primary key is a field or combination of fields that uniquely identifies each record.",
    marks: 1
  },
  {
    subject: "dbms",
    topic: "Relational Algebra",
    difficulty: "medium",
    type: "radio",
    label: "Which normal form deals with multivalued dependencies?",
    options: [
      { label: "3NF", value: "3nf" },
      { label: "BCNF", value: "bcnf" },
      { label: "4NF", value: "4nf" },
      { label: "5NF", value: "5nf" }
    ],
    correctAnswer: "4nf",
    explanation: "A table is in Fourth Normal Form (4NF) if it is in BCNF and contains no multi-valued dependencies.",
    marks: 2
  },
  {
    subject: "dbms",
    topic: "Transactions",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following properties are guaranteed by database transactions (ACID)?",
    options: [
      { label: "Atomicity", value: "atomicity" },
      { label: "Consistency", value: "consistency" },
      { label: "Isolation", value: "isolation" },
      { label: "Distribution", value: "distribution" }
    ],
    correctAnswer: ["atomicity", "consistency", "isolation"],
    explanation: "ACID properties stand for Atomicity, Consistency, Isolation, and Durability.",
    marks: 2
  },
  {
    subject: "dbms",
    topic: "Keys",
    difficulty: "medium",
    type: "radio",
    label: "What is a field in one table that links to a primary key in another table?",
    options: [
      { label: "Composite Key", value: "composite" },
      { label: "Foreign Key", value: "foreign" },
      { label: "Candidate Key", value: "candidate" },
      { label: "Alternate Key", value: "alternate" }
    ],
    correctAnswer: "foreign",
    explanation: "A foreign key creates a link/relationship between two tables by pointing to a primary key.",
    marks: 2
  },
  {
    subject: "dbms",
    topic: "SQL Joins",
    difficulty: "medium",
    type: "radio",
    label: "Which join returns all rows from the left table, and matching rows from the right table?",
    options: [
      { label: "INNER JOIN", value: "inner" },
      { label: "LEFT JOIN", value: "left" },
      { label: "RIGHT JOIN", value: "right" },
      { label: "FULL JOIN", value: "full" }
    ],
    correctAnswer: "left",
    explanation: "A LEFT OUTER JOIN returns all rows from the left side, even if no matches exist on the right.",
    marks: 2
  },
  {
    subject: "dbms",
    topic: "Architecture",
    difficulty: "medium",
    type: "radio",
    label: "Which level of database abstraction describes how the data is actually stored on storage media?",
    options: [
      { label: "Physical Level", value: "physical" },
      { label: "Conceptual Level", value: "conceptual" },
      { label: "Logical Level", value: "logical" },
      { label: "View Level", value: "view" }
    ],
    correctAnswer: "physical",
    explanation: "The physical level is the lowest level of data abstraction, describing physical storage layouts.",
    marks: 2
  },
  {
    subject: "dbms",
    topic: "Normalization",
    difficulty: "medium",
    type: "text",
    label: "What normal form requires all non-key attributes to be fully functionally dependent on the primary key (no partial dependencies)?",
    correctAnswer: "2NF",
    explanation: "A table is in 2NF if it is in 1NF and contains no partial dependencies on composite keys.",
    marks: 2
  },
  {
    subject: "dbms",
    topic: "SQL",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following are aggregate functions in SQL? (Select all that apply)",
    options: [
      { label: "SUM", value: "sum" },
      { label: "AVG", value: "avg" },
      { label: "CONCAT", value: "concat" },
      { label: "COUNT", value: "count" }
    ],
    correctAnswer: ["sum", "avg", "count"],
    explanation: "SUM, AVG, and COUNT aggregate rows. CONCAT is a string manipulation function.",
    marks: 2
  },
  {
    subject: "dbms",
    topic: "Transactions",
    difficulty: "hard",
    type: "radio",
    label: "Which transaction isolation level prevents dirty reads and non-repeatable reads, but allows phantom reads?",
    options: [
      { label: "Read Uncommitted", value: "uncommitted" },
      { label: "Read Committed", value: "committed" },
      { label: "Repeatable Read", value: "repeatable" },
      { label: "Serializable", value: "serializable" }
    ],
    correctAnswer: "repeatable",
    explanation: "Repeatable Read locks read rows, avoiding dirty and non-repeatable reads, but doesn't prevent range insertion phantoms.",
    marks: 3
  },
  {
    subject: "dbms",
    topic: "Concurrency",
    difficulty: "hard",
    type: "radio",
    label: "What lock type allows multiple transactions to read a database item simultaneously but prevents modifications?",
    options: [
      { label: "Exclusive Lock (X)", value: "exclusive" },
      { label: "Shared Lock (S)", value: "shared" },
      { label: "Intent Lock (I)", value: "intent" },
      { label: "Update Lock (U)", value: "update" }
    ],
    correctAnswer: "shared",
    explanation: "Shared locks (S) permit read sharing, while exclusive locks (X) restrict all sharing to allow write operations.",
    marks: 3
  },
  {
    subject: "dbms",
    topic: "Indexing",
    difficulty: "hard",
    type: "radio",
    label: "Which indexing structure is commonly used in relational databases for efficient range queries?",
    options: [
      { label: "Hash Index", value: "hash" },
      { label: "B+ Tree Index", value: "bplus" },
      { label: "Binary Tree Index", value: "binary" },
      { label: "Inverted Index", value: "inverted" }
    ],
    correctAnswer: "bplus",
    explanation: "B+ Trees store index entries in leaf nodes linked sequentially, facilitating fast range searches.",
    marks: 3
  },
  {
    subject: "dbms",
    topic: "Normal Forms",
    difficulty: "hard",
    type: "text",
    label: "What normal form requires that for every non-trivial functional dependency X -> Y, X must be a superkey?",
    correctAnswer: "BCNF",
    explanation: "Boyce-Codd Normal Form (BCNF) is a stricter version of 3NF focusing on superkeys.",
    marks: 3
  },
  {
    subject: "dbms",
    topic: "Concurrency",
    difficulty: "hard",
    type: "checkbox",
    label: "Which of the following protocols guarantee serializability in concurrent transactions? (Select all that apply)",
    options: [
      { label: "Two-Phase Locking (2PL)", value: "2pl" },
      { label: "Timestamp Ordering Protocol", value: "timestamp" },
      { label: "Write-Ahead Logging (WAL)", value: "wal" },
      { label: "Strict Two-Phase Locking (Strict 2PL)", value: "strict_2pl" }
    ],
    correctAnswer: ["2pl", "timestamp", "strict_2pl"],
    explanation: "2PL, Strict 2PL, and Timestamp ordering guarantee serializability. WAL guarantees durability (not serialization concurrency).",
    marks: 3
  },
  {
    subject: "dbms",
    topic: "Relational Algebra",
    difficulty: "hard",
    type: "radio",
    label: "Which operator in Relational Algebra corresponds to filtering rows based on a condition?",
    options: [
      { label: "Projection (pi)", value: "projection" },
      { label: "Selection (sigma)", value: "selection" },
      { label: "Join (theta)", value: "join" },
      { label: "Rename (rho)", value: "rename" }
    ],
    correctAnswer: "selection",
    explanation: "The selection operator (sigma) filters rows satisfying a predicate.",
    marks: 3
  },

  // ================= JAVA (20 Questions) =================
  {
    subject: "java",
    topic: "Variables",
    difficulty: "easy",
    type: "radio",
    label: "What is the default value of an uninitialized boolean instance variable in Java?",
    options: [
      { label: "true", value: "true" },
      { label: "false", value: "false" },
      { label: "null", value: "null" },
      { label: "0", value: "0" }
    ],
    correctAnswer: "false",
    explanation: "Boolean instance variables are automatically initialized to false in Java.",
    marks: 1
  },
  {
    subject: "java",
    topic: "Keywords",
    difficulty: "easy",
    type: "radio",
    label: "Which keyword is used to inherit a class in Java?",
    options: [
      { label: "implements", value: "implements" },
      { label: "extends", value: "extends" },
      { label: "inherits", value: "inherits" },
      { label: "parent", value: "parent" }
    ],
    correctAnswer: "extends",
    explanation: "The extends keyword is used in a class declaration to establish inheritance.",
    marks: 1
  },
  {
    subject: "java",
    topic: "Syntax",
    difficulty: "easy",
    type: "radio",
    label: "Which method is the starting execution point of any standard Java console application?",
    options: [
      { label: "start()", value: "start" },
      { label: "main()", value: "main" },
      { label: "execute()", value: "execute" },
      { label: "init()", value: "init" }
    ],
    correctAnswer: "main",
    explanation: "Java applications execute starting from: public static void main(String[] args).",
    marks: 1
  },
  {
    subject: "java",
    topic: "Variables",
    difficulty: "easy",
    type: "radio",
    label: "Which of the following is NOT a primitive data type in Java?",
    options: [
      { label: "int", value: "int" },
      { label: "double", value: "double" },
      { label: "String", value: "string" },
      { label: "char", value: "char" }
    ],
    correctAnswer: "string",
    explanation: "String is a class / reference type, whereas int, double, and char are primitive types.",
    marks: 1
  },
  {
    subject: "java",
    topic: "Syntax",
    difficulty: "easy",
    type: "text",
    label: "Which operator is used to instantiate / create an object in Java?",
    correctAnswer: "new",
    explanation: "The 'new' operator allocates memory on the heap for a new object.",
    marks: 1
  },
  {
    subject: "java",
    topic: "Syntax",
    difficulty: "easy",
    type: "checkbox",
    label: "Which of the following are valid access modifiers in Java? (Select all that apply)",
    options: [
      { label: "private", value: "private" },
      { label: "protected", value: "protected" },
      { label: "internal", value: "internal" },
      { label: "public", value: "public" }
    ],
    correctAnswer: ["private", "protected", "public"],
    explanation: "Java modifiers are public, private, protected, and default (package-private). 'internal' is C#.",
    marks: 1
  },
  {
    subject: "java",
    topic: "Strings",
    difficulty: "easy",
    type: "radio",
    label: "Is a String object mutable or immutable in Java?",
    options: [
      { label: "Mutable", value: "mutable" },
      { label: "Immutable", value: "immutable" }
    ],
    correctAnswer: "immutable",
    explanation: "String values cannot be changed once created; operations create new String objects instead.",
    marks: 1
  },
  {
    subject: "java",
    topic: "Memory",
    difficulty: "medium",
    type: "radio",
    label: "Where are object instances stored in Java memory allocation?",
    options: [
      { label: "Stack memory", value: "stack" },
      { label: "Heap memory", value: "heap" },
      { label: "Method area", value: "method" },
      { label: "PC Register", value: "pc" }
    ],
    correctAnswer: "heap",
    explanation: "All object instances are allocated memory space on the Heap in Java JVM.",
    marks: 2
  },
  {
    subject: "java",
    topic: "Polymorphism",
    difficulty: "medium",
    type: "radio",
    label: "What is it called when two methods in the same class have the same name but different parameters?",
    options: [
      { label: "Method Overriding", value: "overriding" },
      { label: "Method Overloading", value: "overloading" },
      { label: "Method Hiding", value: "hiding" },
      { label: "Encapsulation", value: "encapsulation" }
    ],
    correctAnswer: "overloading",
    explanation: "Method Overloading is compile-time polymorphism where signatures differ.",
    marks: 2
  },
  {
    subject: "java",
    topic: "Keywords",
    difficulty: "medium",
    type: "radio",
    label: "Which keyword makes a variable's value unchangeable (constant) after initialization?",
    options: [
      { label: "static", value: "static" },
      { label: "final", value: "final" },
      { label: "const", value: "const" },
      { label: "volatile", value: "volatile" }
    ],
    correctAnswer: "final",
    explanation: "A final variable value cannot be reassigned once defined.",
    marks: 2
  },
  {
    subject: "java",
    topic: "Interfaces",
    difficulty: "medium",
    type: "radio",
    label: "Can a Java class inherit/extend from multiple classes directly?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" }
    ],
    correctAnswer: "no",
    explanation: "Java does not support multiple inheritance of classes to prevent ambiguity (diamond problem). Multiple interface implementation is supported.",
    marks: 2
  },
  {
    subject: "java",
    topic: "Collections",
    difficulty: "medium",
    type: "radio",
    label: "Which Collection interface class does NOT allow duplicate elements?",
    options: [
      { label: "ArrayList", value: "arraylist" },
      { label: "LinkedList", value: "linkedlist" },
      { label: "HashSet", value: "hashset" },
      { label: "Vector", value: "vector" }
    ],
    correctAnswer: "hashset",
    explanation: "Set implementations like HashSet guarantee uniqueness of elements.",
    marks: 2
  },
  {
    subject: "java",
    topic: "Memory",
    difficulty: "medium",
    type: "text",
    label: "What automatic mechanism in Java reclaims unused heap memory? (Write full term, e.g. 'Garbage Collection')",
    correctAnswer: "Garbage Collection",
    explanation: "Garbage Collection automatically frees objects that are no longer referenced.",
    marks: 2
  },
  {
    subject: "java",
    topic: "Exceptions",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following exceptions are checked exceptions in Java? (Select all that apply)",
    options: [
      { label: "IOException", value: "io" },
      { label: "NullPointerException", value: "npe" },
      { label: "FileNotFoundException", value: "fnf" },
      { label: "ArithmeticException", value: "arithmetic" }
    ],
    correctAnswer: ["io", "fnf"],
    explanation: "IOException and FileNotFoundException require try-catch or throws clauses. NPE and ArithmeticException are unchecked RuntimeExceptions.",
    marks: 2
  },
  {
    subject: "java",
    topic: "Exceptions",
    difficulty: "hard",
    type: "radio",
    label: "Which exception is thrown when a thread is interrupted while waiting or sleeping?",
    options: [
      { label: "NullPointerException", value: "npe" },
      { label: "IllegalStateException", value: "ise" },
      { label: "InterruptedException", value: "ie" },
      { label: "RuntimeException", value: "re" }
    ],
    correctAnswer: "ie",
    explanation: "InterruptedException is thrown when a sleeping thread is interrupted by another thread.",
    marks: 3
  },
  {
    subject: "java",
    topic: "Multithreading",
    difficulty: "hard",
    type: "radio",
    label: "Which keyword is used to restrict access to a method or block to only one thread at a time?",
    options: [
      { label: "volatile", value: "volatile" },
      { label: "synchronized", value: "synchronized" },
      { label: "transient", value: "transient" },
      { label: "static", value: "static" }
    ],
    correctAnswer: "synchronized",
    explanation: "Synchronized methods acquire a lock, ensuring exclusive access by a single thread.",
    marks: 3
  },
  {
    subject: "java",
    topic: "JVM",
    difficulty: "hard",
    type: "radio",
    label: "Which area of JVM memory is shared among all threads?",
    options: [
      { label: "JVM Stack", value: "stack" },
      { label: "Program Counter (PC) Register", value: "pc" },
      { label: "Heap Area", value: "heap" },
      { label: "Native Method Stack", value: "native" }
    ],
    correctAnswer: "heap",
    explanation: "The Heap and Method Area are shared. Stacks and PC registers are private per thread.",
    marks: 3
  },
  {
    subject: "java",
    topic: "Keywords",
    difficulty: "hard",
    type: "text",
    label: "Which keyword prevents a variable from being serialized? (Write word in lowercase)",
    correctAnswer: "transient",
    explanation: "Variables marked transient are ignored during object serialization.",
    marks: 3
  },
  {
    subject: "java",
    topic: "Generics",
    difficulty: "hard",
    type: "checkbox",
    label: "Which of the following are valid wildcard declarations in Java Generics? (Select all that apply)",
    options: [
      { label: "List<?>", value: "unbounded" },
      { label: "List<? extends Number>", value: "upper_bounded" },
      { label: "List<? super Integer>", value: "lower_bounded" },
      { label: "List<? implements Runnable>", value: "invalid" }
    ],
    correctAnswer: ["unbounded", "upper_bounded", "lower_bounded"],
    explanation: "Java wildcard syntax uses 'extends' or 'super'. 'implements' is invalid in wildcards.",
    marks: 3
  },
  {
    subject: "java",
    topic: "Classloaders",
    difficulty: "hard",
    type: "radio",
    label: "Which classloader is responsible for loading the core Java API classes (rt.jar)?",
    options: [
      { label: "System Classloader", value: "system" },
      { label: "Extension Classloader", value: "extension" },
      { label: "Bootstrap Classloader", value: "bootstrap" },
      { label: "Application Classloader", value: "app" }
    ],
    correctAnswer: "bootstrap",
    explanation: "The Bootstrap classloader is the parent loader, loading standard classes from the JDK.",
    marks: 3
  },

  // ================= PYTHON (20 Questions) =================
  {
    subject: "python",
    topic: "Syntax",
    difficulty: "easy",
    type: "radio",
    label: "Which keyword is used to define a function in Python?",
    options: [
      { label: "func", value: "func" },
      { label: "define", value: "define" },
      { label: "def", value: "def" },
      { label: "function", value: "function" }
    ],
    correctAnswer: "def",
    explanation: "Functions in Python are defined using the 'def' keyword.",
    marks: 1
  },
  {
    subject: "python",
    topic: "Variables",
    difficulty: "easy",
    type: "radio",
    label: "What is the output of the expression: print(type(3.14))?",
    options: [
      { label: "<class 'int'>", value: "int" },
      { label: "<class 'float'>", value: "float" },
      { label: "<class 'str'>", value: "str" },
      { label: "<class 'double'>", value: "double" }
    ],
    correctAnswer: "float",
    explanation: "Decimal numbers are float types in Python; double doesn't exist.",
    marks: 1
  },
  {
    subject: "python",
    topic: "Syntax",
    difficulty: "easy",
    type: "radio",
    label: "Which character is used to comment out code in Python?",
    options: [
      { label: "//", value: "slash" },
      { label: "/*", value: "block" },
      { label: "#", value: "hash" },
      { label: "--", value: "dash" }
    ],
    correctAnswer: "hash",
    explanation: "Python uses the hash character (#) to write single-line comments.",
    marks: 1
  },
  {
    subject: "python",
    topic: "Data Types",
    difficulty: "easy",
    type: "radio",
    label: "Which of the following is an immutable sequence data type in Python?",
    options: [
      { label: "List", value: "list" },
      { label: "Dictionary", value: "dict" },
      { label: "Tuple", value: "tuple" },
      { label: "Set", value: "set" }
    ],
    correctAnswer: "tuple",
    explanation: "Tuples cannot be altered after creation, making them immutable.",
    marks: 1
  },
  {
    subject: "python",
    topic: "Syntax",
    difficulty: "easy",
    type: "text",
    label: "Which function is used to output text to the console in Python?",
    correctAnswer: "print",
    explanation: "The print() function outputs text to the screen.",
    marks: 1
  },
  {
    subject: "python",
    topic: "Data Types",
    difficulty: "easy",
    type: "checkbox",
    label: "Which of the following expressions yield a boolean value (True or False)? (Select all that apply)",
    options: [
      { label: "5 > 3", value: "comparison" },
      { label: "bool('hello')", value: "cast" },
      { label: "len([1, 2])", value: "length" },
      { label: "3 + 4", value: "math" }
    ],
    correctAnswer: ["comparison", "cast"],
    explanation: "5 > 3 is True. bool('hello') is True. len() returns 2, and 3+4 returns 7.",
    marks: 1
  },
  {
    subject: "python",
    topic: "Syntax",
    difficulty: "easy",
    type: "radio",
    label: "How do you start a loop in Python that executes 5 times?",
    options: [
      { label: "for i in range(5):", value: "range" },
      { label: "for i in 5:", value: "in_5" },
      { label: "while i < 5:", value: "while" },
      { label: "loop 5 times:", value: "loop" }
    ],
    correctAnswer: "range",
    explanation: "for i in range(5) runs from 0 to 4 (5 times).",
    marks: 1
  },
  {
    subject: "python",
    topic: "Data Types",
    difficulty: "medium",
    type: "radio",
    label: "What is the output of the expression: {x for x in [1, 2, 2, 3] if x > 1}?",
    options: [
      { label: "{2, 3}", value: "set_2_3" },
      { label: "[2, 2, 3]", value: "list_2_2_3" },
      { label: "{2, 2, 3}", value: "set_2_2_3" },
      { label: "(2, 3)", value: "tuple_2_3" }
    ],
    correctAnswer: "set_2_3",
    explanation: "Braces specify a set comprehension, which automatically removes duplicates, yielding {2, 3}.",
    marks: 2
  },
  {
    subject: "python",
    topic: "Methods",
    difficulty: "medium",
    type: "radio",
    label: "Which list method adds an element to the end of a list in Python?",
    options: [
      { label: "add()", value: "add" },
      { label: "insert()", value: "insert" },
      { label: "append()", value: "append" },
      { label: "extend()", value: "extend" }
    ],
    correctAnswer: "append",
    explanation: "append() inserts an item at the absolute end of the list.",
    marks: 2
  },
  {
    subject: "python",
    topic: "Data Structures",
    difficulty: "medium",
    type: "radio",
    label: "What is the result of dict.get('key', 'default') if 'key' is NOT in the dictionary?",
    options: [
      { label: "None", value: "none" },
      { label: "'default'", value: "default" },
      { label: "Raises KeyError", value: "keyerror" },
      { label: "Raises ValueError", value: "valueerror" }
    ],
    correctAnswer: "default",
    explanation: "dict.get() returns the default value parameter if the key doesn't exist.",
    marks: 2
  },
  {
    subject: "python",
    topic: "Operators",
    difficulty: "medium",
    type: "radio",
    label: "Which operator is used for exponentiation (raising to a power) in Python?",
    options: [
      { label: "^", value: "caret" },
      { label: "**", value: "double_star" },
      { label: "*", value: "star" },
      { label: "exp()", value: "exp" }
    ],
    correctAnswer: "double_star",
    explanation: "2**3 calculates 2 cubed (8). Caret (^) is bitwise XOR.",
    marks: 2
  },
  {
    subject: "python",
    topic: "Files",
    difficulty: "medium",
    type: "radio",
    label: "What is the recommended statement structure to ensure files are closed automatically after processing?",
    options: [
      { label: "try/except block", value: "try" },
      { label: "with statement context manager", value: "with" },
      { label: "open/close sequence", value: "open_close" },
      { label: "import fileinput", value: "import" }
    ],
    correctAnswer: "with",
    explanation: "The 'with' statement handles resource closing automatically.",
    marks: 2
  },
  {
    subject: "python",
    topic: "Functions",
    difficulty: "medium",
    type: "text",
    label: "What keyword is used inside a function to yield values one-by-one, converting it into a generator? (Write in lowercase)",
    correctAnswer: "yield",
    explanation: "The yield keyword pauses execution and returns a value, making it a generator function.",
    marks: 2
  },
  {
    subject: "python",
    topic: "Data Types",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following operations are valid on Python strings? (Select all that apply)",
    options: [
      { label: "'a' + 'b'", value: "concat" },
      { label: "'a' * 3", value: "multiply" },
      { label: "'a' - 'b'", value: "sub" },
      { label: "'a'[0]", value: "index" }
    ],
    correctAnswer: ["concat", "multiply", "index"],
    explanation: "Strings can be concatenated (+), repeated (*), and indexed. Subtraction (-) is invalid.",
    marks: 2
  },
  {
    subject: "python",
    topic: "Advanced",
    difficulty: "hard",
    type: "radio",
    label: "What parameter does a Python class method decorator (@classmethod) pass as its first argument by convention?",
    options: [
      { label: "self", value: "self" },
      { label: "cls", value: "cls" },
      { label: "class", value: "class" },
      { label: "args", value: "args" }
    ],
    correctAnswer: "cls",
    explanation: "Class methods receive the class object itself as the first argument, conventionally named 'cls'.",
    marks: 3
  },
  {
    subject: "python",
    topic: "Decorators",
    difficulty: "hard",
    type: "radio",
    label: "What is the main purpose of the functools.wraps decorator?",
    options: [
      { label: "To run a function in a separate thread", value: "thread" },
      { label: "To preserve metadata (like docstrings and name) of the original function", value: "preserve" },
      { label: "To cache function results", value: "cache" },
      { label: "To restrict variable scope", value: "scope" }
    ],
    correctAnswer: "preserve",
    explanation: "functools.wraps copies the docstring, name, etc. of the wrapped function to the wrapper.",
    marks: 3
  },
  {
    subject: "python",
    topic: "Memory Management",
    difficulty: "hard",
    type: "radio",
    label: "What mechanism is primarily used by CPython to track and deallocate memory objects?",
    options: [
      { label: "Reference Counting", value: "ref" },
      { label: "Mark-and-Sweep", value: "mark" },
      { label: "Stop-the-World", value: "stop" },
      { label: "Generational Tracking", value: "gen" }
    ],
    correctAnswer: "ref",
    explanation: "CPython primarily uses reference counting, supplemented by a cyclic garbage collector.",
    marks: 3
  },
  {
    subject: "python",
    topic: "Global Interpreter Lock",
    difficulty: "hard",
    type: "text",
    label: "What is the acronym for Python's global lock preventing multiple threads from executing Python bytecodes at once? (Write in uppercase)",
    correctAnswer: "GIL",
    explanation: "The GIL (Global Interpreter Lock) ensures only one thread executes Python bytecode at a time in CPython.",
    marks: 3
  },
  {
    subject: "python",
    topic: "Variables",
    difficulty: "hard",
    type: "checkbox",
    label: "Which of the following statements about local vs global variables are true? (Select all that apply)",
    options: [
      { label: "Modifying a global variable inside a function requires the 'global' keyword.", value: "global_req" },
      { label: "Local variables are stored in the function's stack frame.", value: "stack" },
      { label: "Locals are accessed faster than globals in Python bytecode.", value: "fast_locals" },
      { label: "Globals can be deleted inside a local function without any keyword.", value: "del" }
    ],
    correctAnswer: ["global_req", "stack", "fast_locals"],
    explanation: "Writing to globals requires 'global'. Locals are stack-bound and load faster via LOAD_FAST bytecode instruction. Deleting globals locally requires 'global'.",
    marks: 3
  },
  {
    subject: "python",
    topic: "Metaclasses",
    difficulty: "hard",
    type: "radio",
    label: "By default, what is the base metaclass of all classes in Python 3?",
    options: [
      { label: "object", value: "object" },
      { label: "type", value: "type" },
      { label: "meta", value: "meta" },
      { label: "Class", value: "class" }
    ],
    correctAnswer: "type",
    explanation: "In Python, the class 'type' is the default metaclass that constructs other classes.",
    marks: 3
  },

  // ================= DATA STRUCTURES (20 Questions) =================
  {
    subject: "data structures",
    topic: "Linear DS",
    difficulty: "easy",
    type: "radio",
    label: "Which data structure operates on a Last-In, First-Out (LIFO) basis?",
    options: [
      { label: "Queue", value: "queue" },
      { label: "Stack", value: "stack" },
      { label: "Linked List", value: "linked_list" },
      { label: "Array", value: "array" }
    ],
    correctAnswer: "stack",
    explanation: "A stack is a LIFO structure where insertions and deletions happen on the same end.",
    marks: 1
  },
  {
    subject: "data structures",
    topic: "Linear DS",
    difficulty: "easy",
    type: "radio",
    label: "Which data structure operates on a First-In, First-Out (FIFO) basis?",
    options: [
      { label: "Stack", value: "stack" },
      { label: "Queue", value: "queue" },
      { label: "Binary Tree", value: "tree" },
      { label: "Graph", value: "graph" }
    ],
    correctAnswer: "queue",
    explanation: "A queue is a FIFO structure where items enter at the rear and exit at the front.",
    marks: 1
  },
  {
    subject: "data structures",
    topic: "Linked Lists",
    difficulty: "easy",
    type: "radio",
    label: "What pointer does the last node in a singly linked list point to?",
    options: [
      { label: "Head node", value: "head" },
      { label: "NULL / None", value: "null" },
      { label: "Itself", value: "self" },
      { label: "Previous node", value: "prev" }
    ],
    correctAnswer: "null",
    explanation: "The tail node of a singly linked list has its next pointer set to null to mark the end.",
    marks: 1
  },
  {
    subject: "data structures",
    topic: "Arrays",
    difficulty: "easy",
    type: "radio",
    label: "What is the index of the first element in a standard array in languages like C, Java, or Python?",
    options: [
      { label: "-1", value: "-1" },
      { label: "0", value: "0" },
      { label: "1", value: "1" },
      { label: "It varies", value: "varies" }
    ],
    correctAnswer: "0",
    explanation: "Most modern programming languages use 0-based indexing for arrays.",
    marks: 1
  },
  {
    subject: "data structures",
    topic: "Binary Trees",
    difficulty: "easy",
    type: "text",
    label: "What is a tree node that has no children called?",
    correctAnswer: "leaf",
    explanation: "A leaf node is a node at the very bottom of a tree that has no child nodes.",
    marks: 1
  },
  {
    subject: "data structures",
    topic: "Linear DS",
    difficulty: "easy",
    type: "checkbox",
    label: "Which of the following are linear data structures? (Select all that apply)",
    options: [
      { label: "Array", value: "array" },
      { label: "Linked List", value: "linked" },
      { label: "Binary Tree", value: "tree" },
      { label: "Queue", value: "queue" }
    ],
    correctAnswer: ["array", "linked", "queue"],
    explanation: "Arrays, Linked lists, and Queues arrange elements sequentially. Trees are hierarchical (non-linear).",
    marks: 1
  },
  {
    subject: "data structures",
    topic: "Hashing",
    difficulty: "easy",
    type: "radio",
    label: "What is it called when two keys hash to the same index in a Hash Table?",
    options: [
      { label: "Collision", value: "collision" },
      { label: "Overrun", value: "overrun" },
      { label: "Overflow", value: "overflow" },
      { label: "Redundancy", value: "redundancy" }
    ],
    correctAnswer: "collision",
    explanation: "A hash collision happens when distinct keys yield the identical index via a hash function.",
    marks: 1
  },
  {
    subject: "data structures",
    topic: "Hashing",
    difficulty: "medium",
    type: "radio",
    label: "What is the average-case time complexity of retrieval in a Hash Table?",
    options: [
      { label: "O(1)", value: "o_1" },
      { label: "O(log n)", value: "o_logn" },
      { label: "O(n)", value: "o_n" },
      { label: "O(n^2)", value: "o_n2" }
    ],
    correctAnswer: "o_1",
    explanation: "Retrieval from hash tables operates in O(1) constant average time via key hashing.",
    marks: 2
  },
  {
    subject: "data structures",
    topic: "Binary Trees",
    difficulty: "medium",
    type: "radio",
    label: "What is the time complexity of searching for a value in a balanced Binary Search Tree of size n?",
    options: [
      { label: "O(1)", value: "o_1" },
      { label: "O(log n)", value: "o_logn" },
      { label: "O(n)", value: "o_n" },
      { label: "O(n log n)", value: "o_nlogn" }
    ],
    correctAnswer: "o_logn",
    explanation: "Balanced search trees divide the remaining search space in half at each step, yielding O(log n).",
    marks: 2
  },
  {
    subject: "data structures",
    topic: "Heap",
    difficulty: "medium",
    type: "radio",
    label: "What is the time complexity to extract the minimum element from a Min-Heap of size n?",
    options: [
      { label: "O(1)", value: "o_1" },
      { label: "O(log n)", value: "o_logn" },
      { label: "O(n)", value: "o_n" },
      { label: "O(n log n)", value: "o_nlogn" }
    ],
    correctAnswer: "o_logn",
    explanation: "Finding min is O(1), but removing it and restoring heap structure takes O(log n) time.",
    marks: 2
  },
  {
    subject: "data structures",
    topic: "Sorting",
    difficulty: "medium",
    type: "radio",
    label: "Which sorting algorithm is typically stable and has a guaranteed worst-case time complexity of O(n log n)?",
    options: [
      { label: "Quick Sort", value: "quick" },
      { label: "Bubble Sort", value: "bubble" },
      { label: "Merge Sort", value: "merge" },
      { label: "Selection Sort", value: "selection" }
    ],
    correctAnswer: "merge",
    explanation: "Merge Sort is stable and guarantees O(n log n) by dividing/merging. Quick Sort is unstable and can hit O(n^2) worst case.",
    marks: 2
  },
  {
    subject: "data structures",
    topic: "Stacks",
    difficulty: "medium",
    type: "radio",
    label: "What is the postfix representation of the infix expression: a + b * c?",
    options: [
      { label: "a b c * +", value: "post_a" },
      { label: "+ a * b c", value: "post_b" },
      { label: "a b + c *", value: "post_c" },
      { label: "a b c + *", value: "post_d" }
    ],
    correctAnswer: "post_a",
    explanation: "Multiplication (*) takes precedence: b*c becomes 'b c *'. Then add to 'a': 'a b c * +'.",
    marks: 2
  },
  {
    subject: "data structures",
    topic: "Trees",
    difficulty: "medium",
    type: "text",
    label: "What traversal method visits a binary tree in the order: Left child, Root, Right child?",
    correctAnswer: "inorder",
    explanation: "Inorder traversal visits left subtree, then the root node, and then the right subtree.",
    marks: 2
  },
  {
    subject: "data structures",
    topic: "Graphs",
    difficulty: "medium",
    type: "checkbox",
    label: "Which data structures can be used to represent a graph in a program? (Select all that apply)",
    options: [
      { label: "Adjacency Matrix", value: "matrix" },
      { label: "Adjacency List", value: "list" },
      { label: "Priority Queue", value: "queue" },
      { label: "Stack", value: "stack" }
    ],
    correctAnswer: ["matrix", "list"],
    explanation: "Adjacency matrices and adjacency lists are standard models for graph edges. Stacks/Queues navigate graphs, not store them.",
    marks: 2
  },
  {
    subject: "data structures",
    topic: "Graphs",
    difficulty: "hard",
    type: "radio",
    label: "Which algorithm finds the shortest path in a weighted graph with negative edge weights (provided there are no negative cycles)?",
    options: [
      { label: "Dijkstra's Algorithm", value: "dijkstra" },
      { label: "Bellman-Ford Algorithm", value: "bellman_ford" },
      { label: "Kruskal's Algorithm", value: "kruskal" },
      { label: "Prim's Algorithm", value: "prim" }
    ],
    correctAnswer: "bellman_ford",
    explanation: "Dijkstra may fail on negative weights. Bellman-Ford correctly handles them and identifies negative loops.",
    marks: 3
  },
  {
    subject: "data structures",
    topic: "Balanced Trees",
    difficulty: "hard",
    type: "radio",
    label: "What is the maximum height difference allowed between the left and right subtrees of any node in an AVL tree?",
    options: [
      { label: "0", value: "0" },
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "Log n", value: "log" }
    ],
    correctAnswer: "1",
    explanation: "AVL trees enforce a strict balance factor where left/right subtree heights differ by at most 1.",
    marks: 3
  },
  {
    subject: "data structures",
    topic: "Trees",
    difficulty: "hard",
    type: "radio",
    label: "Which data structure is most efficient for prefix matching queries (like auto-complete dictionaries)?",
    options: [
      { label: "Hash Table", value: "hash" },
      { label: "Trie (Prefix Tree)", value: "trie" },
      { label: "Binary Search Tree", value: "bst" },
      { label: "Red-Black Tree", value: "rbt" }
    ],
    correctAnswer: "trie",
    explanation: "Tries index strings character-by-character, enabling fast prefix match lookups.",
    marks: 3
  },
  {
    subject: "data structures",
    topic: "Algorithmic Paradigms",
    difficulty: "hard",
    type: "text",
    label: "What is the technique called that solves subproblems, stores the results in a table, and references them later? (Write in lowercase)",
    correctAnswer: "dynamic programming",
    explanation: "Dynamic programming caches subproblem solutions to prevent recalculation.",
    marks: 3
  },
  {
    subject: "data structures",
    topic: "Graphs",
    difficulty: "hard",
    type: "checkbox",
    label: "Which of the following algorithms are used to find Minimum Spanning Trees (MST) in a graph? (Select all that apply)",
    options: [
      { label: "Dijkstra's Algorithm", value: "dijkstra" },
      { label: "Kruskal's Algorithm", value: "kruskal" },
      { label: "Prim's Algorithm", value: "prim" },
      { label: "Floyd-Warshall Algorithm", value: "floyd" }
    ],
    correctAnswer: ["kruskal", "prim"],
    explanation: "Kruskal's and Prim's are greedy MST algorithms. Dijkstra/Floyd find shortest paths.",
    marks: 3
  },
  {
    subject: "data structures",
    topic: "Priority Queues",
    difficulty: "hard",
    type: "radio",
    label: "What is the amortized time complexity of inserting a node into a Fibonacci Heap?",
    options: [
      { label: "O(1)", value: "o_1" },
      { label: "O(log n)", value: "o_logn" },
      { label: "O(n)", value: "o_n" },
      { label: "O(log log n)", value: "o_loglogn" }
    ],
    correctAnswer: "o_1",
    explanation: "Fibonacci heaps delay structural consolidation, achieving O(1) amortized insertion.",
    marks: 3
  },

  // ================= OPERATING SYSTEMS (20 Questions) =================
  {
    subject: "operating systems",
    topic: "CPU Scheduling",
    difficulty: "easy",
    type: "radio",
    label: "What CPU scheduling algorithm assigns processes to the CPU in the order they arrive?",
    options: [
      { label: "Round Robin", value: "rr" },
      { label: "Shortest Job First", value: "sjf" },
      { label: "First-Come, First-Served", value: "fcfs" },
      { label: "Priority Scheduling", value: "priority" }
    ],
    correctAnswer: "fcfs",
    explanation: "FCFS is a non-preemptive scheduling algorithm that services jobs based on arrival time.",
    marks: 1
  },
  {
    subject: "operating systems",
    topic: "Threads",
    difficulty: "easy",
    type: "radio",
    label: "What is a thread often called in modern operating systems?",
    options: [
      { label: "Heavyweight Process", value: "heavy" },
      { label: "Lightweight Process (LWP)", value: "light" },
      { label: "System Service", value: "service" },
      { label: "Sub-routine", value: "sub" }
    ],
    correctAnswer: "light",
    explanation: "Threads are called lightweight processes because they share the parent process's memory space.",
    marks: 1
  },
  {
    subject: "operating systems",
    topic: "Virtual Memory",
    difficulty: "easy",
    type: "radio",
    label: "What happens when a program attempts to access memory not loaded in physical RAM?",
    options: [
      { label: "Buffer Overflow", value: "overflow" },
      { label: "System Crash", value: "crash" },
      { label: "Page Fault", value: "page_fault" },
      { label: "Segment Violation", value: "segment" }
    ],
    correctAnswer: "page_fault",
    explanation: "A page fault triggers the OS to fetch the missing memory page from swap space on disk.",
    marks: 1
  },
  {
    subject: "operating systems",
    topic: "File Systems",
    difficulty: "easy",
    type: "radio",
    label: "Which file system is the default for modern Windows operating systems?",
    options: [
      { label: "FAT32", value: "fat32" },
      { label: "NTFS", value: "ntfs" },
      { label: "ext4", value: "ext4" },
      { label: "HFS+", value: "hfs" }
    ],
    correctAnswer: "ntfs",
    explanation: "NTFS is the primary file system on Windows since Windows NT.",
    marks: 1
  },
  {
    subject: "operating systems",
    topic: "Storage",
    difficulty: "easy",
    type: "text",
    label: "What partition type on disk is used by the OS as overflow memory when RAM is full? (starts with 's')",
    correctAnswer: "swap",
    explanation: "Swap space on disk acts as virtual memory overflow space.",
    marks: 1
  },
  {
    subject: "operating systems",
    topic: "Concepts",
    difficulty: "easy",
    type: "checkbox",
    label: "Which of the following are components of an Operating System? (Select all that apply)",
    options: [
      { label: "Kernel", value: "kernel" },
      { label: "File System Manager", value: "fs" },
      { label: "Web Server", value: "web" },
      { label: "Device Drivers", value: "drivers" }
    ],
    correctAnswer: ["kernel", "fs", "drivers"],
    explanation: "Kernel, FS, and drivers are OS core components. Web servers are user-space applications.",
    marks: 1
  },
  {
    subject: "operating systems",
    topic: "Processes",
    difficulty: "easy",
    type: "radio",
    label: "Which system call is used to create a new child process in Unix-like systems?",
    options: [
      { label: "exec()", value: "exec" },
      { label: "fork()", value: "fork" },
      { label: "spawn()", value: "spawn" },
      { label: "clone()", value: "clone" }
    ],
    correctAnswer: "fork",
    explanation: "fork() duplicates the calling process to create a child process.",
    marks: 1
  },
  {
    subject: "operating systems",
    topic: "Concurrency",
    difficulty: "medium",
    type: "radio",
    label: "What is the term for a state where two or more processes are blocked, each waiting for a resource held by the other?",
    options: [
      { label: "Starvation", value: "starvation" },
      { label: "Deadlock", value: "deadlock" },
      { label: "Race Condition", value: "race_condition" },
      { label: "Context Switch", value: "context_switch" }
    ],
    correctAnswer: "deadlock",
    explanation: "Deadlock occurs when processes wait indefinitely on locked resources held by each other.",
    marks: 2
  },
  {
    subject: "operating systems",
    topic: "Deadlocks",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following conditions must hold simultaneously for a deadlock to occur (Coffman conditions)?",
    options: [
      { label: "Mutual Exclusion", value: "mutual" },
      { label: "Hold and Wait", value: "hold" },
      { label: "No Preemption", value: "nopreempt" },
      { label: "Safe State", value: "safe" }
    ],
    correctAnswer: ["mutual", "hold", "nopreempt"],
    explanation: "Mutual exclusion, Hold-and-wait, No preemption, and Circular wait are the four Coffman conditions.",
    marks: 2
  },
  {
    subject: "operating systems",
    topic: "Scheduling",
    difficulty: "medium",
    type: "radio",
    label: "Which scheduling algorithm gives each process a small fixed time slice (quantum) in cyclic order?",
    options: [
      { label: "Shortest Remaining Time First", value: "srtf" },
      { label: "Priority Preemptive", value: "priority" },
      { label: "Round Robin (RR)", value: "rr" },
      { label: "Multilevel Queue", value: "multilevel" }
    ],
    correctAnswer: "rr",
    explanation: "Round Robin uses time slices to share the CPU among active threads.",
    marks: 2
  },
  {
    subject: "operating systems",
    topic: "Memory Management",
    difficulty: "medium",
    type: "radio",
    label: "What is the problem called when memory is split into small, unusable blocks, preventing allocation of a contiguous segment?",
    options: [
      { label: "Segmentation", value: "segmentation" },
      { label: "Fragmentation", value: "fragmentation" },
      { label: "Paging", value: "paging" },
      { label: "Thrashing", value: "thrashing" }
    ],
    correctAnswer: "fragmentation",
    explanation: "Fragmentation wastes address space by leaving non-contiguous small gaps in memory.",
    marks: 2
  },
  {
    subject: "operating systems",
    topic: "Thrashing",
    difficulty: "medium",
    type: "radio",
    label: "What state occurs when an OS spends more time swapping pages in and out of disk than executing instructions?",
    options: [
      { label: "Paging", value: "paging" },
      { label: "Swapping", value: "swapping" },
      { label: "Thrashing", value: "thrashing" },
      { label: "Deadlock", value: "deadlock" }
    ],
    correctAnswer: "thrashing",
    explanation: "Thrashing happens when physical memory is over-committed, causing constant page swaps.",
    marks: 2
  },
  {
    subject: "operating systems",
    topic: "Context Switch",
    difficulty: "medium",
    type: "text",
    label: "What is the mechanism called where the CPU state is saved to switch execution to another process?",
    correctAnswer: "context switch",
    explanation: "A context switch saves process registers so the CPU can run another task.",
    marks: 2
  },
  {
    subject: "operating systems",
    topic: "System Calls",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following are system calls related to file management in Unix? (Select all that apply)",
    options: [
      { label: "open()", value: "open" },
      { label: "read()", value: "read" },
      { label: "kill()", value: "kill" },
      { label: "write()", value: "write" }
    ],
    correctAnswer: ["open", "read", "write"],
    explanation: "open, read, and write handle file streams. 'kill' is a process signal system call.",
    marks: 2
  },
  {
    subject: "operating systems",
    topic: "Concurrency",
    difficulty: "hard",
    type: "radio",
    label: "What is an integer variable used for signaling and solving critical section problems in concurrent systems?",
    options: [
      { label: "Mutex", value: "mutex" },
      { label: "Semaphore", value: "semaphore" },
      { label: "Spinlock", value: "spinlock" },
      { label: "Condition Variable", value: "condition" }
    ],
    correctAnswer: "semaphore",
    explanation: "Semaphores use wait/signal operations on an integer value to control thread access.",
    marks: 3
  },
  {
    subject: "operating systems",
    topic: "Deadlocks",
    difficulty: "hard",
    type: "radio",
    label: "Which algorithm is used by operating systems to avoid deadlocks by analyzing resource requests beforehand?",
    options: [
      { label: "Dijkstra's Algorithm", value: "dijkstra" },
      { label: "Banker's Algorithm", value: "banker" },
      { label: "Round Robin Algorithm", value: "rr" },
      { label: "LRU Page Replacement", value: "lru" }
    ],
    correctAnswer: "banker",
    explanation: "The Banker's Algorithm tests for safety by simulating resource allocations before granting requests.",
    marks: 3
  },
  {
    subject: "operating systems",
    topic: "Memory Management",
    difficulty: "hard",
    type: "radio",
    label: "What page replacement algorithm replaces the page that will not be used for the longest period of time?",
    options: [
      { label: "First-In, First-Out (FIFO)", value: "fifo" },
      { label: "Least Recently Used (LRU)", value: "lru" },
      { label: "Optimal Page Replacement (OPT)", value: "opt" },
      { label: "Least Frequently Used (LFU)", value: "lfu" }
    ],
    correctAnswer: "opt",
    explanation: "Optimal Page Replacement replaces the page needed furthest in the future, serving as a theoretical baseline.",
    marks: 3
  },
  {
    subject: "operating systems",
    topic: "Disk Scheduling",
    difficulty: "hard",
    type: "text",
    label: "What disk scheduling algorithm is also known as the elevator algorithm?",
    correctAnswer: "SCAN",
    explanation: "SCAN moves the disk arm across tracks in one direction, servicing requests, then reverses direction.",
    marks: 3
  },
  {
    subject: "operating systems",
    topic: "Synchronization",
    difficulty: "hard",
    type: "checkbox",
    label: "Which of the following are classic synchronization problems in concurrent systems? (Select all that apply)",
    options: [
      { label: "Bounded-Buffer (Producer-Consumer) Problem", value: "bounded" },
      { label: "Dining Philosophers Problem", value: "dining" },
      { label: "Readers-Writers Problem", value: "readers" },
      { label: "Knapsack Synchronization Problem", value: "invalid" }
    ],
    correctAnswer: ["bounded", "dining", "readers"],
    explanation: "Bounded-buffer, Dining philosophers, and Readers-writers are classic IPC exercises. Knapsack is an optimization problem.",
    marks: 3
  },
  {
    subject: "operating systems",
    topic: "Virtualization",
    difficulty: "hard",
    type: "radio",
    label: "What is the CPU hardware feature that allows efficient virtualization by avoiding double-paging in software?",
    options: [
      { label: "TLB Flush", value: "tlb" },
      { label: "Extended Page Tables (EPT) / Nested Paging", value: "ept" },
      { label: "DMA Transfer", value: "dma" },
      { label: "Segment Registers", value: "segment" }
    ],
    correctAnswer: "ept",
    explanation: "EPT / Nested Paging translates guest virtual addresses to host physical addresses at the hardware level.",
    marks: 3
  },

  // ================= COMPUTER NETWORKS (20 Questions) =================
  {
    subject: "computer networks",
    topic: "OSI Model",
    difficulty: "easy",
    type: "radio",
    label: "Which OSI model layer is responsible for routing data packets across different networks?",
    options: [
      { label: "Data Link Layer", value: "datalink" },
      { label: "Network Layer", value: "network" },
      { label: "Transport Layer", value: "transport" },
      { label: "Physical Layer", value: "physical" }
    ],
    correctAnswer: "network",
    explanation: "The Network Layer manages packet routing and IP logical addressing.",
    marks: 1
  },
  {
    subject: "computer networks",
    topic: "OSI Model",
    difficulty: "easy",
    type: "radio",
    label: "Which OSI layer is responsible for translating data formats, compression, and encryption?",
    options: [
      { label: "Application Layer", value: "app" },
      { label: "Presentation Layer", value: "presentation" },
      { label: "Session Layer", value: "session" },
      { label: "Transport Layer", value: "transport" }
    ],
    correctAnswer: "presentation",
    explanation: "The Presentation Layer acts as a translator, formatting data for application layer view.",
    marks: 1
  },
  {
    subject: "computer networks",
    topic: "Hardware",
    difficulty: "easy",
    type: "radio",
    label: "Which device operates at the Physical layer (Layer 1) to replicate signals to all connected ports?",
    options: [
      { label: "Switch", value: "switch" },
      { label: "Router", value: "router" },
      { label: "Hub", value: "hub" },
      { label: "Bridge", value: "bridge" }
    ],
    correctAnswer: "hub",
    explanation: "Hubs are non-intelligent Layer 1 repeaters, broadcasting input to all ports.",
    marks: 1
  },
  {
    subject: "computer networks",
    topic: "IP Addresses",
    difficulty: "easy",
    type: "radio",
    label: "How many bits are in an IPv4 address?",
    options: [
      { label: "32", value: "32" },
      { label: "48", value: "48" },
      { label: "64", value: "64" },
      { label: "128", value: "128" }
    ],
    correctAnswer: "32",
    explanation: "An IPv4 address is a 32-bit number, formatted as four octets (e.g. 192.168.1.1).",
    marks: 1
  },
  {
    subject: "computer networks",
    topic: "Protocols",
    difficulty: "easy",
    type: "text",
    label: "What application layer protocol translates domain names (like google.com) to IP addresses? (Write acronym in uppercase)",
    correctAnswer: "DNS",
    explanation: "DNS (Domain Name System) translates hostnames to numerical IP addresses.",
    marks: 1
  },
  {
    subject: "computer networks",
    topic: "IP Addresses",
    difficulty: "easy",
    type: "checkbox",
    label: "Which of the following are private IP addresses according to RFC 1918? (Select all that apply)",
    options: [
      { label: "10.0.0.1", value: "ip_10" },
      { label: "192.168.1.5", value: "ip_192" },
      { label: "8.8.8.8", value: "ip_8" },
      { label: "172.16.0.100", value: "ip_172" }
    ],
    correctAnswer: ["ip_10", "ip_192", "ip_172"],
    explanation: "10.x.x.x, 192.168.x.x, and 172.16.x.x-172.31.x.x are private ranges. 8.8.8.8 is a public Google DNS address.",
    marks: 1
  },
  {
    subject: "computer networks",
    topic: "Protocols",
    difficulty: "easy",
    type: "radio",
    label: "Which protocol is typically used to dynamically assign IP addresses to devices on a network?",
    options: [
      { label: "DNS", value: "dns" },
      { label: "DHCP", value: "dhcp" },
      { label: "HTTP", value: "http" },
      { label: "SMTP", value: "smtp" }
    ],
    correctAnswer: "dhcp",
    explanation: "DHCP (Dynamic Host Configuration Protocol) leases IP addresses automatically.",
    marks: 1
  },
  {
    subject: "computer networks",
    topic: "Protocols",
    difficulty: "medium",
    type: "radio",
    label: "What protocol is used to resolve a known IP address to its corresponding physical MAC address?",
    options: [
      { label: "DNS", value: "dns" },
      { label: "ARP", value: "arp" },
      { label: "DHCP", value: "dhcp" },
      { label: "ICMP", value: "icmp" }
    ],
    correctAnswer: "arp",
    explanation: "ARP (Address Resolution Protocol) resolves IP addresses (Layer 3) to MAC addresses (Layer 2).",
    marks: 2
  },
  {
    subject: "computer networks",
    topic: "Transport Layer",
    difficulty: "medium",
    type: "radio",
    label: "Which transport protocol is connection-oriented, reliable, and guarantees in-order packet delivery?",
    options: [
      { label: "UDP", value: "udp" },
      { label: "TCP", value: "tcp" },
      { label: "IP", value: "ip" },
      { label: "ICMP", value: "icmp" }
    ],
    correctAnswer: "tcp",
    explanation: "TCP uses handshakes, sequences, and acknowledgments to guarantee delivery, whereas UDP is connectionless.",
    marks: 2
  },
  {
    subject: "computer networks",
    topic: "Routing",
    difficulty: "medium",
    type: "radio",
    label: "What device is used to forward packets between different IP networks?",
    options: [
      { label: "Switch", value: "switch" },
      { label: "Hub", value: "hub" },
      { label: "Router", value: "router" },
      { label: "Modem", value: "modem" }
    ],
    correctAnswer: "router",
    explanation: "Routers look at IP headers to route packets across logical networks.",
    marks: 2
  },
  {
    subject: "computer networks",
    topic: "IP Addresses",
    difficulty: "medium",
    type: "radio",
    label: "How many bits are in an IPv6 address?",
    options: [
      { label: "32", value: "32" },
      { label: "64", value: "64" },
      { label: "128", value: "128" },
      { label: "256", value: "256" }
    ],
    correctAnswer: "128",
    explanation: "IPv6 uses a 128-bit address space, resolving IPv4 address exhaustion.",
    marks: 2
  },
  {
    subject: "computer networks",
    topic: "Application Layer",
    difficulty: "medium",
    type: "radio",
    label: "What port does the secure HTTPS protocol use by default?",
    options: [
      { label: "80", value: "80" },
      { label: "443", value: "443" },
      { label: "22", value: "22" },
      { label: "8080", value: "8080" }
    ],
    correctAnswer: "443",
    explanation: "HTTPS default port is 443; standard HTTP is port 80.",
    marks: 2
  },
  {
    subject: "computer networks",
    topic: "Subnetting",
    difficulty: "medium",
    type: "text",
    label: "What is the subnet mask for a /24 CIDR prefix? (Write in dotted decimal form)",
    correctAnswer: "255.255.255.0",
    explanation: "A /24 block matches the first three octets: 255.255.255.0.",
    marks: 2
  },
  {
    subject: "computer networks",
    topic: "Protocols",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following protocols run over UDP? (Select all that apply)",
    options: [
      { label: "DNS query", value: "dns" },
      { label: "TFTP", value: "tftp" },
      { label: "HTTP (v1.1)", value: "http" },
      { label: "DHCP", value: "dhcp" }
    ],
    correctAnswer: ["dns", "tftp", "dhcp"],
    explanation: "DNS, TFTP, and DHCP utilize UDP. HTTP/1.1 runs over TCP. (HTTP/3 uses QUIC over UDP).",
    marks: 2
  },
  {
    subject: "computer networks",
    topic: "TCP/IP",
    difficulty: "hard",
    type: "radio",
    label: "What is the purpose of the 'Time to Live' (TTL) field in an IPv4 packet header?",
    options: [
      { label: "Determines the total session timeout length", value: "timeout" },
      { label: "Prevents packets from circulating indefinitely in routing loops", value: "loop_prevention" },
      { label: "Indicates the speed limit of the transmission line", value: "speed" },
      { label: "Controls the window size adjustment rate", value: "window" }
    ],
    correctAnswer: "loop_prevention",
    explanation: "Each hop decrements the TTL by 1. If it hits 0, the packet is discarded to prevent infinite routing loops.",
    marks: 3
  },
  {
    subject: "computer networks",
    topic: "Routing Protocols",
    difficulty: "hard",
    type: "radio",
    label: "Which routing protocol is an Exterior Gateway Protocol (EGP) used to exchange routing info between Autonomous Systems?",
    options: [
      { label: "OSPF", value: "ospf" },
      { label: "RIP", value: "rip" },
      { label: "BGP", value: "bgp" },
      { label: "EIGRP", value: "eigrp" }
    ],
    correctAnswer: "bgp",
    explanation: "BGP (Border Gateway Protocol) handles internet-scale routing between Autonomous Systems.",
    marks: 3
  },
  {
    subject: "computer networks",
    topic: "TCP Congestion",
    difficulty: "hard",
    type: "radio",
    label: "What TCP state represents the initialization phase of congestion control, where the window size doubles every RTT?",
    options: [
      { label: "Slow Start", value: "slow_start" },
      { label: "Congestion Avoidance", value: "avoidance" },
      { label: "Fast Retransmit", value: "retransmit" },
      { label: "Fast Recovery", value: "recovery" }
    ],
    correctAnswer: "slow_start",
    explanation: "In Slow Start, the Congestion Window (cwnd) increases exponentially until hitting a threshold.",
    marks: 3
  },
  {
    subject: "computer networks",
    topic: "Error Control",
    difficulty: "hard",
    type: "text",
    label: "What mathematical error-detecting code is appended to Ethernet frames in the FCS trailer? (Write acronym in uppercase)",
    correctAnswer: "CRC",
    explanation: "Ethernet frames use a Cyclic Redundancy Check (CRC-32) to verify data integrity.",
    marks: 3
  },
  {
    subject: "computer networks",
    topic: "Flow Control",
    difficulty: "hard",
    type: "checkbox",
    label: "Which of the following are sliding window protocols used for flow control? (Select all that apply)",
    options: [
      { label: "Stop-and-Wait ARQ", value: "stop_wait" },
      { label: "Go-Back-N ARQ", value: "go_back" },
      { label: "Selective Repeat ARQ", value: "selective" },
      { label: "ALOHA protocol", value: "aloha" }
    ],
    correctAnswer: ["stop_wait", "go_back", "selective"],
    explanation: "Stop-and-Wait, Go-Back-N, and Selective Repeat use windows to throttle packet speeds. ALOHA is a random access MAC protocol.",
    marks: 3
  },
  {
    subject: "computer networks",
    topic: "Cryptography",
    difficulty: "hard",
    type: "radio",
    label: "What is the size of the MAC address in bytes?",
    options: [
      { label: "4 bytes", value: "4" },
      { label: "6 bytes", value: "6" },
      { label: "8 bytes", value: "8" },
      { label: "16 bytes", value: "16" }
    ],
    correctAnswer: "6",
    explanation: "A MAC address is a 48-bit (6-byte) physical address.",
    marks: 3
  },

  // ================= CYBER SECURITY (20 Questions) =================
  {
    subject: "cyber security",
    topic: "Attacks",
    difficulty: "easy",
    type: "radio",
    label: "What type of attack involves an attacker masquerading as a trusted entity to trick users into revealing credentials?",
    options: [
      { label: "Phishing", value: "phishing" },
      { label: "DDOS", value: "ddos" },
      { label: "Man-in-the-Middle", value: "mitm" },
      { label: "SQL Injection", value: "sqli" }
    ],
    correctAnswer: "phishing",
    explanation: "Phishing is social engineering where victims receive fraudulent links to capture credentials.",
    marks: 1
  },
  {
    subject: "cyber security",
    topic: "Concepts",
    difficulty: "easy",
    type: "radio",
    label: "What does the 'C' stand for in the classic security CIA triad?",
    options: [
      { label: "Computation", value: "comp" },
      { label: "Confidentiality", value: "confidentiality" },
      { label: "Compliance", value: "compliance" },
      { label: "Cryptography", value: "crypto" }
    ],
    correctAnswer: "confidentiality",
    explanation: "The CIA triad stands for Confidentiality, Integrity, and Availability.",
    marks: 1
  },
  {
    subject: "cyber security",
    topic: "Malware",
    difficulty: "easy",
    type: "radio",
    label: "What type of malware encrypts user files and demands payment to restore access?",
    options: [
      { label: "Spyware", value: "spyware" },
      { label: "Trojan Horse", value: "trojan" },
      { label: "Ransomware", value: "ransomware" },
      { label: "Adware", value: "adware" }
    ],
    correctAnswer: "ransomware",
    explanation: "Ransomware encrypts target data, demanding cryptocurrency in exchange for decryption keys.",
    marks: 1
  },
  {
    subject: "cyber security",
    topic: "Firewalls",
    difficulty: "easy",
    type: "radio",
    label: "Which software/hardware restricts incoming and outgoing traffic based on pre-defined security rules?",
    options: [
      { label: "Antivirus", value: "antivirus" },
      { label: "Firewall", value: "firewall" },
      { label: "VPN", value: "vpn" },
      { label: "Router", value: "router" }
    ],
    correctAnswer: "firewall",
    explanation: "A firewall filters packet traffic passing between networks using ACL rules.",
    marks: 1
  },
  {
    subject: "cyber security",
    topic: "Passwords",
    difficulty: "easy",
    type: "text",
    label: "What security mechanism requires users to provide two different authentication factors to log in? (Write acronym in uppercase)",
    correctAnswer: "2FA",
    explanation: "Two-Factor Authentication (2FA) adds a code layer beyond just password verification.",
    marks: 1
  },
  {
    subject: "cyber security",
    topic: "Security",
    difficulty: "easy",
    type: "checkbox",
    label: "Which of the following are recommended password practices? (Select all that apply)",
    options: [
      { label: "Using long passphrase structures", value: "long" },
      { label: "Writing passwords on stick-notes", value: "note" },
      { label: "Enforcing unique passwords per account", value: "unique" },
      { label: "Sharing passwords with managers", value: "share" }
    ],
    correctAnswer: ["long", "unique"],
    explanation: "Long passphrases and uniqueness secure accounts. Sharing or physical notes compromise security.",
    marks: 1
  },
  {
    subject: "cyber security",
    topic: "Authentication",
    difficulty: "easy",
    type: "radio",
    label: "Which protocol is used to securely connect to a remote server's shell terminal?",
    options: [
      { label: "Telnet", value: "telnet" },
      { label: "FTP", value: "ftp" },
      { label: "SSH", value: "ssh" },
      { label: "HTTP", value: "http" }
    ],
    correctAnswer: "ssh",
    explanation: "SSH (Secure Shell) encrypts session traffic, unlike plain-text Telnet.",
    marks: 1
  },
  {
    subject: "cyber security",
    topic: "Cryptography",
    difficulty: "medium",
    type: "radio",
    label: "In asymmetric encryption, which key is used to decrypt data that was encrypted with the Public Key?",
    options: [
      { label: "The same Public Key", value: "public" },
      { label: "The corresponding Private Key", value: "private" },
      { label: "A symmetric pre-shared key", value: "preshared" },
      { label: "A session decryption key", value: "session" }
    ],
    correctAnswer: "private",
    explanation: "Asymmetric cryptography pairs keys: public for encryption, private for decryption.",
    marks: 2
  },
  {
    subject: "cyber security",
    topic: "Web Security",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following are recommended methods to protect against SQL Injection (SQLi) attacks?",
    options: [
      { label: "Using Parameterized Queries / Prepared Statements", value: "parameterized" },
      { label: "Input validation and whitelisting", value: "validation" },
      { label: "Disabling browser JavaScript execution", value: "js" },
      { label: "Storing passwords in plain-text", value: "plain" }
    ],
    correctAnswer: ["parameterized", "validation"],
    explanation: "Prepared statements treat values as parameters, not logic code. Input whitelisting strips malicious flags.",
    marks: 2
  },
  {
    subject: "cyber security",
    topic: "Hashing",
    difficulty: "medium",
    type: "radio",
    label: "Which of the following functions is a cryptographic hash function (one-way)?",
    options: [
      { label: "AES", value: "aes" },
      { label: "RSA", value: "rsa" },
      { label: "SHA-256", value: "sha" },
      { label: "DES", value: "des" }
    ],
    correctAnswer: "sha",
    explanation: "SHA-256 is a hashing algorithm. AES, RSA, and DES are reversible encryption schemes.",
    marks: 2
  },
  {
    subject: "cyber security",
    topic: "Attacks",
    difficulty: "medium",
    type: "radio",
    label: "What attack intercepts active communications between two devices to eavesdrop or modify packets?",
    options: [
      { label: "DDoS Attack", value: "ddos" },
      { label: "Man-in-the-Middle (MitM)", value: "mitm" },
      { label: "Buffer Overflow", value: "buffer" },
      { label: "Social Engineering", value: "social" }
    ],
    correctAnswer: "mitm",
    explanation: "MitM attacks spoof routing protocols (like ARP cache poisoning) to sit between endpoints.",
    marks: 2
  },
  {
    subject: "cyber security",
    topic: "Malware",
    difficulty: "medium",
    type: "radio",
    label: "What is a program that duplicates itself to spread over network links without user interaction?",
    options: [
      { label: "Virus", value: "virus" },
      { label: "Worm", value: "worm" },
      { label: "Trojan", value: "trojan" },
      { label: "Spyware", value: "spyware" }
    ],
    correctAnswer: "worm",
    explanation: "Worms exploit network bugs to self-replicate, while viruses require file execution triggers.",
    marks: 2
  },
  {
    subject: "cyber security",
    topic: "Passwords",
    difficulty: "medium",
    type: "text",
    label: "What random string is appended to passwords before hashing to protect against rainbow table attacks?",
    correctAnswer: "salt",
    explanation: "Salting passwords ensures identical inputs yield unique hashes, neutralizing pre-computed lookup tables.",
    marks: 2
  },
  {
    subject: "cyber security",
    topic: "Web Security",
    difficulty: "medium",
    type: "checkbox",
    label: "Which of the following HTTP headers improve site security? (Select all that apply)",
    options: [
      { label: "Content-Security-Policy (CSP)", value: "csp" },
      { label: "Strict-Transport-Security (HSTS)", value: "hsts" },
      { label: "X-Frame-Options", value: "xframe" },
      { label: "User-Agent", value: "user_agent" }
    ],
    correctAnswer: ["csp", "hsts", "xframe"],
    explanation: "CSP limits XSS, HSTS enforces HTTPS, and X-Frame-Options blocks clickjacking. User-Agent is a metadata identifier.",
    marks: 2
  },
  {
    subject: "cyber security",
    topic: "Web Security",
    difficulty: "hard",
    type: "radio",
    label: "What vulnerability occurs when an application script reflects unvalidated inputs to the browser, allowing script injection?",
    options: [
      { label: "Cross-Site Request Forgery (CSRF)", value: "csrf" },
      { label: "Cross-Site Scripting (XSS)", value: "xss" },
      { label: "SQL Injection", value: "sqli" },
      { label: "Broken Object Level Authorization", value: "bola" }
    ],
    correctAnswer: "xss",
    explanation: "XSS permits attackers to run arbitrary javascript in the victim's session.",
    marks: 3
  },
  {
    subject: "cyber security",
    topic: "Cryptography",
    difficulty: "hard",
    type: "radio",
    label: "Which mathematical problem provides the computational security foundation for the RSA algorithm?",
    options: [
      { label: "Discrete Logarithm Problem", value: "discrete" },
      { label: "Integer Factorization of large primes", value: "factorization" },
      { label: "Elliptic Curve Group addition", value: "ecc" },
      { label: "Traveling Salesperson Optimization", value: "tsp" }
    ],
    correctAnswer: "factorization",
    explanation: "RSA's security relies on the extreme difficulty of factoring very large composite numbers into their prime factors.",
    marks: 3
  },
  {
    subject: "cyber security",
    topic: "Attacks",
    difficulty: "hard",
    type: "radio",
    label: "What attack involves sending spoofed ARP messages to link an attacker's MAC address with a target gateway IP?",
    options: [
      { label: "DNS Spoofing", value: "dns" },
      { label: "ARP Spoofing / Poisoning", value: "arp" },
      { label: "DHCP Starvation", value: "dhcp" },
      { label: "ICMP Smurf Attack", value: "smurf" }
    ],
    correctAnswer: "arp",
    explanation: "ARP Spoofing links the attacker's network interface to the router's IP, redirecting local traffic.",
    marks: 3
  },
  {
    subject: "cyber security",
    topic: "Access Control",
    difficulty: "hard",
    type: "text",
    label: "What access control model bases permissions on organizational roles rather than direct user permissions? (Write acronym in uppercase)",
    correctAnswer: "RBAC",
    explanation: "Role-Based Access Control (RBAC) maps authorization to user roles rather than individual profiles.",
    marks: 3
  },
  {
    subject: "cyber security",
    topic: "Web Security",
    difficulty: "hard",
    type: "checkbox",
    label: "Which of the following are secure hashing algorithms currently recommended for storing user passwords? (Select all that apply)",
    options: [
      { label: "bcrypt", value: "bcrypt" },
      { label: "MD5", value: "md5" },
      { label: "Argon2", value: "argon2" },
      { label: "PBKDF2", value: "pbkdf2" }
    ],
    correctAnswer: ["bcrypt", "argon2", "pbkdf2"],
    explanation: "bcrypt, Argon2, and PBKDF2 use computationally slow loops. MD5 is broken and easily cracked.",
    marks: 3
  },
  {
    subject: "cyber security",
    topic: "Protocol Security",
    difficulty: "hard",
    type: "radio",
    label: "Which protocol is the secure successor to SSL, providing encryption for web browser connections?",
    options: [
      { label: "IPsec", value: "ipsec" },
      { label: "TLS (Transport Layer Security)", value: "tls" },
      { label: "SSH", value: "ssh" },
      { label: "S/MIME", value: "smime" }
    ],
    correctAnswer: "tls",
    explanation: "TLS is the standard cryptographic protocol encrypting HTTPS traffic, rendering SSL obsolete.",
    marks: 3
  }
];
