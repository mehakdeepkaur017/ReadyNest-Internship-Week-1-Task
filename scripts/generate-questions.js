const fs = require('fs');
const path = require('path');

const questionBank = [];

// Helper to shuffle arrays
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// 1. MATHEMATICS
for (let i = 1; i <= 40; i++) {
  // Easy MCQ
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;
  const ans1 = a + b;
  questionBank.push({ subject: "mathematics", topic: "Arithmetic", difficulty: "easy", type: "radio", label: `What is the sum of ${a} and ${b}? (Variation ${i})`, options: [{ label: `${ans1}`, value: `${ans1}` }, { label: `${ans1+1}`, value: `${ans1+1}` }, { label: `${ans1-1}`, value: `${ans1-1}` }, { label: `${ans1+2}`, value: `${ans1+2}` }], correctAnswer: `${ans1}`, explanation: `${a} + ${b} = ${ans1}`, marks: 1 });

  // Medium MCQ
  const c = Math.floor(Math.random() * 10) + 2;
  const d = Math.floor(Math.random() * 10) + 2;
  const ans2 = c * d;
  questionBank.push({ subject: "mathematics", topic: "Multiplication", difficulty: "medium", type: "radio", label: `What is the product of ${c} and ${d}? (Variation ${i})`, options: [{ label: `${ans2}`, value: `${ans2}` }, { label: `${ans2+c}`, value: `${ans2+c}` }, { label: `${ans2-d}`, value: `${ans2-d}` }, { label: `${ans2+2}`, value: `${ans2+2}` }], correctAnswer: `${ans2}`, explanation: `${c} * ${d} = ${ans2}`, marks: 2 });

  // Hard MCQ
  const e = Math.floor(Math.random() * 5) + 2;
  const f = Math.floor(Math.random() * 5) + 2;
  const ans3 = Math.pow(e, f);
  questionBank.push({ subject: "mathematics", topic: "Exponents", difficulty: "hard", type: "radio", label: `What is ${e} raised to the power of ${f}? (Variation ${i})`, options: [{ label: `${ans3}`, value: `${ans3}` }, { label: `${ans3+1}`, value: `${ans3+1}` }, { label: `${ans3-1}`, value: `${ans3-1}` }, { label: `${ans3+2}`, value: `${ans3+2}` }], correctAnswer: `${ans3}`, explanation: `${e}^${f} = ${ans3}`, marks: 3 });

  // Easy T/F
  const isTrue1 = Math.random() > 0.5;
  const g = Math.floor(Math.random() * 10) + 1;
  const h = Math.floor(Math.random() * 10) + 1;
  questionBank.push({ subject: "mathematics", topic: "Logic", difficulty: "easy", type: "radio", label: `True or False: ${g} + ${h} = ${isTrue1 ? g+h : g+h+1}`, options: [{ label: "True", value: "true" }, { label: "False", value: "false" }], correctAnswer: isTrue1 ? "true" : "false", explanation: `${g} + ${h} is ${g+h}.`, marks: 1 });

  // Medium T/F
  const isTrue2 = Math.random() > 0.5;
  questionBank.push({ subject: "mathematics", topic: "Geometry", difficulty: "medium", type: "radio", label: `True or False: The area of a square with side length ${g} is ${isTrue2 ? g*g : g*g+1}`, options: [{ label: "True", value: "true" }, { label: "False", value: "false" }], correctAnswer: isTrue2 ? "true" : "false", explanation: `Area = side * side.`, marks: 2 });

  // Hard T/F
  const isTrue3 = Math.random() > 0.5;
  questionBank.push({ subject: "mathematics", topic: "Calculus", difficulty: "hard", type: "radio", label: `True or False: The derivative of ${g}x is ${isTrue3 ? g : g+1}`, options: [{ label: "True", value: "true" }, { label: "False", value: "false" }], correctAnswer: isTrue3 ? "true" : "false", explanation: `d/dx(${g}x) = ${g}.`, marks: 3 });

  // Easy Short Answer
  questionBank.push({ subject: "mathematics", topic: "Arithmetic", difficulty: "easy", type: "text", label: `Calculate ${g} - ${h}.`, correctAnswer: `${g-h}`, explanation: `Basic subtraction.`, marks: 1 });

  // Medium Short Answer
  questionBank.push({ subject: "mathematics", topic: "Algebra", difficulty: "medium", type: "text", label: `Solve for x: x - ${g} = ${h}.`, correctAnswer: `${g+h}`, explanation: `x = ${h} + ${g} = ${g+h}.`, marks: 2 });

  // Hard Short Answer
  questionBank.push({ subject: "mathematics", topic: "Algebra", difficulty: "hard", type: "text", label: `Solve for x: ${g}x = ${g*h}.`, correctAnswer: `${h}`, explanation: `Divide both sides by ${g}.`, marks: 3 });
}

// Data structures for procedural generation
const elements = [
  { name: "Hydrogen", sym: "H", num: 1 }, { name: "Helium", sym: "He", num: 2 }, { name: "Lithium", sym: "Li", num: 3 },
  { name: "Beryllium", sym: "Be", num: 4 }, { name: "Boron", sym: "B", num: 5 }, { name: "Carbon", sym: "C", num: 6 },
  { name: "Nitrogen", sym: "N", num: 7 }, { name: "Oxygen", sym: "O", num: 8 }, { name: "Fluorine", sym: "F", num: 9 },
  { name: "Neon", sym: "Ne", num: 10 }, { name: "Sodium", sym: "Na", num: 11 }, { name: "Magnesium", sym: "Mg", num: 12 },
  { name: "Aluminum", sym: "Al", num: 13 }, { name: "Silicon", sym: "Si", num: 14 }, { name: "Phosphorus", sym: "P", num: 15 },
  { name: "Sulfur", sym: "S", num: 16 }, { name: "Chlorine", sym: "Cl", num: 17 }, { name: "Argon", sym: "Ar", num: 18 },
  { name: "Potassium", sym: "K", num: 19 }, { name: "Calcium", sym: "Ca", num: 20 }, { name: "Iron", sym: "Fe", num: 26 },
  { name: "Copper", sym: "Cu", num: 29 }, { name: "Zinc", sym: "Zn", num: 30 }, { name: "Silver", sym: "Ag", num: 47 },
  { name: "Gold", sym: "Au", num: 79 }, { name: "Mercury", sym: "Hg", num: 80 }, { name: "Lead", sym: "Pb", num: 82 },
  { name: "Uranium", sym: "U", num: 92 }, { name: "Plutonium", sym: "Pu", num: 94 }, { name: "Radon", sym: "Rn", num: 86 },
  { name: "Iodine", sym: "I", num: 53 }, { name: "Bromine", sym: "Br", num: 35 }, { name: "Krypton", sym: "Kr", num: 36 },
  { name: "Xenon", sym: "Xe", num: 54 }, { name: "Platinum", sym: "Pt", num: 78 }, { name: "Titanium", sym: "Ti", num: 22 },
  { name: "Cobalt", sym: "Co", num: 27 }, { name: "Nickel", sym: "Ni", num: 28 }, { name: "Tin", sym: "Sn", num: 50 },
  { name: "Tungsten", sym: "W", num: 74 }, { name: "Bismuth", sym: "Bi", num: 83 }, { name: "Radium", sym: "Ra", num: 88 }
];

const biology = ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum", "Golgi Apparatus", "Lysosome", "Chloroplast", "Cell Wall", "Cell Membrane", "Cytoplasm", "Vacuole", "Cytoskeleton", "Centriole", "Peroxisome", "Plasmodesmata", "Chromatin", "Nucleolus", "Flagella", "Cilia", "Microvilli", "Microtubules", "Microfilaments", "Intermediate Filaments", "Vesicle", "Melanosome", "Kinetochore", "Centromere", "Telomere", "Spindle Fibers", "Plastid", "Amyloplast", "Chromoplast", "Elaioplast", "Proteinoplast", "Statolith", "Glyoxysome", "Hydrogenosome", "Magnetosome", "Acrosome", "Myofibril"];

const physics = ["Force", "Mass", "Acceleration", "Velocity", "Speed", "Distance", "Displacement", "Time", "Energy", "Work", "Power", "Momentum", "Impulse", "Pressure", "Density", "Volume", "Area", "Temperature", "Heat", "Entropy", "Enthalpy", "Charge", "Current", "Voltage", "Resistance", "Capacitance", "Inductance", "Magnetic Field", "Electric Field", "Gravitational Field", "Wavelength", "Frequency", "Period", "Amplitude", "Intensity", "Luminosity", "Illuminance", "Radioactivity", "Half-life", "Decay Constant"];

const geography = [
  { city: "Paris", country: "France", cont: "Europe" }, { city: "Tokyo", country: "Japan", cont: "Asia" },
  { city: "Berlin", country: "Germany", cont: "Europe" }, { city: "Rome", country: "Italy", cont: "Europe" },
  { city: "Madrid", country: "Spain", cont: "Europe" }, { city: "London", country: "United Kingdom", cont: "Europe" },
  { city: "Beijing", country: "China", cont: "Asia" }, { city: "New Delhi", country: "India", cont: "Asia" },
  { city: "Washington D.C.", country: "United States", cont: "North America" }, { city: "Ottawa", country: "Canada", cont: "North America" },
  { city: "Brasilia", country: "Brazil", cont: "South America" }, { city: "Buenos Aires", country: "Argentina", cont: "South America" },
  { city: "Cairo", country: "Egypt", cont: "Africa" }, { city: "Pretoria", country: "South Africa", cont: "Africa" },
  { city: "Canberra", country: "Australia", cont: "Oceania" }, { city: "Wellington", country: "New Zealand", cont: "Oceania" },
  { city: "Moscow", country: "Russia", cont: "Europe" }, { city: "Seoul", country: "South Korea", cont: "Asia" },
  { city: "Jakarta", country: "Indonesia", cont: "Asia" }, { city: "Bangkok", country: "Thailand", cont: "Asia" },
  { city: "Hanoi", country: "Vietnam", cont: "Asia" }, { city: "Manila", country: "Philippines", cont: "Asia" },
  { city: "Riyadh", country: "Saudi Arabia", cont: "Asia" }, { city: "Tehran", country: "Iran", cont: "Asia" },
  { city: "Baghdad", country: "Iraq", cont: "Asia" }, { city: "Kabul", country: "Afghanistan", cont: "Asia" },
  { city: "Islamabad", country: "Pakistan", cont: "Asia" }, { city: "Dhaka", country: "Bangladesh", cont: "Asia" },
  { city: "Kathmandu", country: "Nepal", cont: "Asia" }, { city: "Colombo", country: "Sri Lanka", cont: "Asia" },
  { city: "Nairobi", country: "Kenya", cont: "Africa" }, { city: "Abuja", country: "Nigeria", cont: "Africa" },
  { city: "Accra", country: "Ghana", cont: "Africa" }, { city: "Addis Ababa", country: "Ethiopia", cont: "Africa" },
  { city: "Algiers", country: "Algeria", cont: "Africa" }, { city: "Rabat", country: "Morocco", cont: "Africa" },
  { city: "Tunis", country: "Tunisia", cont: "Africa" }, { city: "Tripoli", country: "Libya", cont: "Africa" },
  { city: "Khartoum", country: "Sudan", cont: "Africa" }, { city: "Mogadishu", country: "Somalia", cont: "Africa" }
];

const englishWords = [
  { w: "Ephemeral", s: "Short-lived", a: "Permanent" }, { w: "Generous", s: "Giving", a: "Selfish" },
  { w: "Brave", s: "Courageous", a: "Cowardly" }, { w: "Happy", s: "Joyful", a: "Sad" },
  { w: "Fast", s: "Quick", a: "Slow" }, { w: "Smart", s: "Intelligent", a: "Stupid" },
  { w: "Rich", s: "Wealthy", a: "Poor" }, { w: "Strong", s: "Powerful", a: "Weak" },
  { w: "Beautiful", s: "Pretty", a: "Ugly" }, { w: "Clean", s: "Tidy", a: "Dirty" },
  { w: "Cold", s: "Chilly", a: "Hot" }, { w: "Hard", s: "Difficult", a: "Easy" },
  { w: "Light", s: "Bright", a: "Dark" }, { w: "Loud", s: "Noisy", a: "Quiet" },
  { w: "New", s: "Recent", a: "Old" }, { w: "Right", s: "Correct", a: "Wrong" },
  { w: "Safe", s: "Secure", a: "Dangerous" }, { w: "True", s: "Accurate", a: "False" },
  { w: "Young", s: "Youthful", a: "Old" }, { w: "Good", s: "Excellent", a: "Bad" },
  { w: "Big", s: "Large", a: "Small" }, { w: "High", s: "Tall", a: "Low" },
  { w: "Long", s: "Lengthy", a: "Short" }, { w: "Wide", s: "Broad", a: "Narrow" },
  { w: "Deep", s: "Profound", a: "Shallow" }, { w: "Thick", s: "Dense", a: "Thin" },
  { w: "Heavy", s: "Weighty", a: "Light" }, { w: "Full", s: "Packed", a: "Empty" },
  { w: "Many", s: "Numerous", a: "Few" }, { w: "Much", s: "Plenty", a: "Little" },
  { w: "More", s: "Extra", a: "Less" }, { w: "Most", s: "Majority", a: "Least" },
  { w: "All", s: "Every", a: "None" }, { w: "Always", s: "Forever", a: "Never" },
  { w: "Often", s: "Frequently", a: "Seldom" }, { w: "Sometimes", s: "Occasionally", a: "Rarely" },
  { w: "Usually", s: "Normally", a: "Unusually" }, { w: "Probably", s: "Likely", a: "Unlikely" },
  { w: "Certainly", s: "Definitely", a: "Uncertainly" }, { w: "Exactly", s: "Precisely", a: "Inexactly" }
];

const historyEvents = [
  { y: 1492, e: "Columbus arrived in the Americas" }, { y: 1776, e: "US Declaration of Independence" },
  { y: 1789, e: "French Revolution began" }, { y: 1914, e: "World War I began" },
  { y: 1918, e: "World War I ended" }, { y: 1939, e: "World War II began" },
  { y: 1945, e: "World War II ended" }, { y: 1969, e: "Apollo 11 moon landing" },
  { y: 1989, e: "Fall of the Berlin Wall" }, { y: 2001, e: "September 11 attacks" },
  { y: 1066, e: "Battle of Hastings" }, { y: 1215, e: "Magna Carta signed" },
  { y: 1453, e: "Fall of Constantinople" }, { y: 1517, e: "Protestant Reformation began" },
  { y: 1588, e: "Spanish Armada defeated" }, { y: 1607, e: "Jamestown founded" },
  { y: 1620, e: "Mayflower arrived" }, { y: 1765, e: "Stamp Act passed" },
  { y: 1773, e: "Boston Tea Party" }, { y: 1781, e: "Battle of Yorktown" },
  { y: 1787, e: "US Constitution signed" }, { y: 1803, e: "Louisiana Purchase" },
  { y: 1812, e: "War of 1812 began" }, { y: 1815, e: "Battle of Waterloo" },
  { y: 1836, e: "Battle of the Alamo" }, { y: 1848, e: "Seneca Falls Convention" },
  { y: 1861, e: "US Civil War began" }, { y: 1865, e: "US Civil War ended" },
  { y: 1869, e: "Transcontinental Railroad completed" }, { y: 1898, e: "Spanish-American War" },
  { y: 1917, e: "US entered World War I" }, { y: 1920, e: "19th Amendment ratified" },
  { y: 1929, e: "Stock Market Crash" }, { y: 1941, e: "Pearl Harbor attacked" },
  { y: 1950, e: "Korean War began" }, { y: 1953, e: "Korean War ended" },
  { y: 1954, e: "Brown v. Board of Education" }, { y: 1962, e: "Cuban Missile Crisis" },
  { y: 1963, e: "JFK assassinated" }, { y: 1964, e: "Civil Rights Act passed" }
];

const csConcepts = [
  "Algorithm", "Variable", "Loop", "Function", "Class", "Object", "Array", "Pointer", "Recursion", "Inheritance",
  "Polymorphism", "Encapsulation", "Abstraction", "Interface", "Database", "Network", "Protocol", "Compiler", "Interpreter", "OS",
  "Thread", "Process", "Deadlock", "Semaphore", "Mutex", "Cache", "Memory", "Storage", "CPU", "GPU",
  "API", "Framework", "Library", "IDE", "Version Control", "Git", "Repository", "Commit", "Merge", "Branch",
  "HTML", "CSS", "JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Ruby", "PHP"
];

// Generates ~40 questions of each Type/Difficulty for non-math subjects
const subjectsInfo = [
  { id: "science", data: elements, prop1: "name", prop2: "sym", type: "Element", topic: "Chemistry" },
  { id: "science", data: biology, isArray: true, topic: "Biology" },
  { id: "science", data: physics, isArray: true, topic: "Physics" },
  { id: "geography", data: geography, prop1: "city", prop2: "country", type: "City", topic: "Capitals" },
  { id: "english", data: englishWords, prop1: "w", prop2: "s", type: "Word", topic: "Vocabulary" },
  { id: "history", data: historyEvents, prop1: "y", prop2: "e", type: "Year", topic: "Events" },
  { id: "computer science", data: csConcepts, isArray: true, topic: "Concepts" },
  { id: "dbms", data: csConcepts, isArray: true, topic: "Concepts" },
  { id: "java", data: csConcepts, isArray: true, topic: "Concepts" },
  { id: "python", data: csConcepts, isArray: true, topic: "Concepts" },
  { id: "data structures", data: csConcepts, isArray: true, topic: "Concepts" },
  { id: "operating systems", data: csConcepts, isArray: true, topic: "Concepts" },
  { id: "computer networks", data: csConcepts, isArray: true, topic: "Concepts" },
  { id: "cyber security", data: csConcepts, isArray: true, topic: "Concepts" }
];

function generatePool(subject, topic, baseLabel, answer, falseAnswers, type, diff) {
  let opts = [{ label: answer, value: answer }];
  falseAnswers.slice(0, 3).forEach(f => opts.push({ label: f, value: f }));
  opts = shuffle(opts);
  
  if (type === "radio") {
    questionBank.push({ subject, topic, difficulty: diff, type: "radio", label: baseLabel, options: opts, correctAnswer: answer, explanation: `The correct answer is ${answer}.`, marks: diff === 'easy' ? 1 : diff === 'medium' ? 2 : 3 });
  } else if (type === "text") {
    questionBank.push({ subject, topic, difficulty: diff, type: "text", label: baseLabel, correctAnswer: answer, explanation: `The correct answer is ${answer}.`, marks: diff === 'easy' ? 1 : diff === 'medium' ? 2 : 3 });
  } else if (type === "tf") {
    const isTrue = Math.random() > 0.5;
    const stmt = isTrue ? answer : falseAnswers[0];
    questionBank.push({ subject, topic, difficulty: diff, type: "radio", label: `True or False: ${baseLabel.replace("What", stmt)}`, options: [{ label: "True", value: "true" }, { label: "False", value: "false" }], correctAnswer: isTrue ? "true" : "false", explanation: isTrue ? `Yes, it is true.` : `No, it is false.`, marks: diff === 'easy' ? 1 : diff === 'medium' ? 2 : 3 });
  }
}

subjectsInfo.forEach(info => {
  let count = 0;
  // Let's generate 40 variations for each combination (Easy/Med/Hard) x (MCQ/TF/Text) = 360 questions per subject!
  for (let c = 0; c < 40; c++) {
    const diffs = ["easy", "medium", "hard"];
    for (const diff of diffs) {
      const types = ["radio", "text", "tf"];
      for (const t of types) {
        let label = "";
        let ans = "";
        let falseAns = [];
        
        if (info.isArray) {
           ans = info.data[Math.floor(Math.random() * info.data.length)];
           falseAns = info.data.filter(x => x !== ans).sort(() => Math.random() - 0.5);
           label = `Identify the correct concept regarding ${ans} (Variation ${c}_${diff}_${t})`;
        } else {
           const item = info.data[Math.floor(Math.random() * info.data.length)];
           ans = item[info.prop2];
           falseAns = info.data.filter(x => x[info.prop2] !== ans).map(x => x[info.prop2]).sort(() => Math.random() - 0.5);
           label = `What is the ${info.prop2} of ${item[info.prop1]}? (Variation ${c}_${diff}_${t})`;
        }
        generatePool(info.id, info.topic, label, String(ans), falseAns.map(String), t, diff);
      }
    }
  }
});

// Write to file
const outPath = path.join(__dirname, '../src/lib/question-bank.ts');
const fileContent = `export interface BankQuestion {
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

export const questionBank: BankQuestion[] = ${JSON.stringify(questionBank, null, 2)};
`;

fs.writeFileSync(outPath, fileContent);
console.log(`Generated ${questionBank.length} questions and saved to question-bank.ts`);
