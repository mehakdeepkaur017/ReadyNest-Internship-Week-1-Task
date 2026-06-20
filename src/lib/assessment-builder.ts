import { questionBank, BankQuestion } from "./question-bank";
import { FormField, QuizSettings } from "./types";

interface AssessmentBuildResult {
  title: string;
  description: string;
  fields: FormField[];
  isQuizMode: boolean;
  quizSettings: QuizSettings;
  warning?: string;
}

// Helper to capitalize strings nicely
function capitalize(str: string): string {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Normalize user subject input to key in question bank
function normalizeSubject(sub: string): string {
  const s = sub.toLowerCase().trim();
  if (s.includes("math")) return "mathematics";
  if (s.includes("science")) return "science";
  if (s.includes("english")) return "english";
  if (s.includes("history")) return "history";
  if (s.includes("geography")) return "geography";
  if (s.includes("computer science") || s === "cs") return "computer science";
  if (s.includes("dbms") || s.includes("database") || s.includes("sql")) return "dbms";
  if (s.includes("java")) return "java";
  if (s.includes("python")) return "python";
  if (s.includes("data structure") || s.includes("dsa")) return "data structures";
  if (s.includes("operating system") || s === "os") return "operating systems";
  if (s.includes("network") || s === "cn") return "computer networks";
  if (s.includes("security") || s.includes("cyber")) return "cyber security";
  return s;
}

export function buildCuratedAssessment(
  subject: string,
  difficulty: string = "mixed",
  questionType: string = "mixed",
  questionCount: number = 8
): AssessmentBuildResult {
  const normSubject = normalizeSubject(subject);
  const normDifficulty = difficulty.toLowerCase().trim();
  const normType = questionType.toLowerCase().trim();

  // Find all unique questions for this subject
  const subjectPool = questionBank.filter(q => q.subject === normSubject);

  let warning: string | undefined = undefined;
  let finalSelected: BankQuestion[] = [];

  // Determine difficulty search sequence
  const difficultiesOrderMap: Record<string, string[]> = {
    easy: ["easy", "medium", "hard"],
    medium: ["medium", "easy", "hard"],
    hard: ["hard", "medium", "easy"],
    mixed: ["easy", "medium", "hard"]
  };

  const difficultyOrder = difficultiesOrderMap[normDifficulty] || ["easy", "medium", "hard"];

  // Matcher function for question type
  const matchesType = (q: BankQuestion, type: string): boolean => {
    if (type === "mixed" || !type) return true;
    if (type === "mcq") return q.type === "radio";
    if (type === "true_false") {
      if (q.type !== "radio") return false;
      const choices = q.options?.map(o => o.value) || [];
      return choices.includes("true") && choices.includes("false");
    }
    if (type === "short_answer") return q.type === "text";
    if (type === "checkbox") return q.type === "checkbox";
    return true;
  };

  // If pool has less than or equal to requested, return all unique ones
  if (subjectPool.length === 0) {
    warning = `No questions are available in the question bank for ${capitalize(normSubject)}.`;
  } else if (subjectPool.length <= questionCount) {
    finalSelected = [...subjectPool];
    if (subjectPool.length < questionCount) {
      warning = `Requested ${questionCount} questions, but only ${subjectPool.length} unique questions were available for ${capitalize(normSubject)}.`;
    }
  } else {
    // We have enough total questions, but we need to strictly filter them based on criteria
    const shuffledPool = [...subjectPool].sort(() => Math.random() - 0.5);
    const selectedLabels = new Set<string>();
    
    // Strict Filtering: Only accept questions that EXACTLY match requested difficulty and type
    for (const q of shuffledPool) {
      if (finalSelected.length >= questionCount) break;
      
      const difficultyMatch = normDifficulty === "mixed" || q.difficulty === normDifficulty;
      const typeMatch = matchesType(q, normType);
      
      if (difficultyMatch && typeMatch && !selectedLabels.has(q.label)) {
        finalSelected.push(q);
        selectedLabels.add(q.label);
      }
    }

    if (finalSelected.length < questionCount) {
      warning = `Requested ${questionCount} questions for ${capitalize(normSubject)} with difficulty "${normDifficulty}" and type "${normType}", but only found ${finalSelected.length} exact matches. Showing available matches.`;
    }
  }

  // Shuffle final list
  finalSelected = finalSelected.sort(() => Math.random() - 0.5);

  const finalCount = finalSelected.length;

  // Formulate fields
  const fields: FormField[] = finalSelected.map((q, index) => {
    const id = `field_${Date.now()}_${index}_${Math.random().toString(36).substring(2, 9)}`;
    return {
      id,
      type: q.type as any,
      label: q.label,
      placeholder: q.type === "text" ? "Type your answer here..." : "",
      helpText: `Subject: ${capitalize(q.subject)} | Topic: ${q.topic}`,
      required: true,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      marks: q.marks,
      difficultyLevel: q.difficulty,
      order: index,
    };
  });

  // Generate Professional Title
  let displaySubject = normSubject && normSubject !== "all" && normSubject !== "mixed" ? capitalize(normSubject) : "General Knowledge";
  let displayDifficulty = normDifficulty && normDifficulty !== "mixed" ? capitalize(normDifficulty) : "Comprehensive";
  
  let title = `${displayDifficulty} ${displaySubject} Assessment`;
  if (normDifficulty === "mixed" || !normDifficulty) {
    title = `${displaySubject} Quiz`;
  }

  const estTime = Math.ceil(finalCount * 1.5);
  const description = `This is a professionally structured ${displayDifficulty.toLowerCase()} assessment covering topics in ${displaySubject.toLowerCase()}. Consists of ${finalCount} questions. Estimated completion time: ${estTime} minutes.`;

  // Standard Quiz Settings
  const quizSettings: QuizSettings = {
    timeLimit: estTime,
    passingPercentage: 50,
    negativeMarking: false,
    negativeMarkValue: 0,
    shuffleQuestions: true,
    shuffleOptions: true,
    maxAttempts: 1,
    requireAuth: false,
    showCorrectAnswers: true,
    showExplanations: true,
  };

  return {
    title,
    description,
    fields,
    isQuizMode: true,
    quizSettings,
    warning
  };
}
