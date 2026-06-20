export type FieldType =
  | "text"
  | "textarea"
  | "email"
  | "number"
  | "phone"
  | "date"
  | "time"
  | "dropdown"
  | "radio"
  | "checkbox"
  | "rating"
  | "file"
  | "url"
  | "password";

export interface FieldOption {
  label: string;
  value: string;
}

export interface ValidationRule {
  type: "min" | "max" | "minLength" | "maxLength" | "pattern" | "custom";
  value: string | number;
  message: string;
}

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  helpText?: string;
  required: boolean;
  defaultValue?: string;
  options?: FieldOption[];
  validation?: ValidationRule[];
  order: number;
  correctAnswer?: any;
  explanation?: string;
  marks?: number;
  difficultyLevel?: "easy" | "medium" | "hard";
}

export type FormStatus = "draft" | "published" | "archived";

export interface CandidateFieldSetting {
  enabled: boolean;
  required: boolean;
  label: string;
}

export interface CustomCandidateFieldSetting {
  id: string;
  label: string;
  required: boolean;
  enabled: boolean;
}

export interface CandidateInfoSettings {
  name: CandidateFieldSetting;
  rollNumber: CandidateFieldSetting;
  class: CandidateFieldSetting;
  section: CandidateFieldSetting;
  studentId: CandidateFieldSetting;
  email: CandidateFieldSetting;
  phone: CandidateFieldSetting;
  institutionName: CandidateFieldSetting;
  customFields?: CustomCandidateFieldSetting[];
}

export interface HeaderSettings {
  institutionName?: string;
  title?: string;
  subtitle?: string;
  logoUrl?: string;
  showLogo?: boolean;
}

export interface InstructionsSettings {
  show: boolean;
  customNotes?: string;
}

export interface QuizSettings {
  timeLimit: number;
  passingPercentage: number;
  negativeMarking: boolean;
  negativeMarkValue: number;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  maxAttempts: number;
  requireAuth: boolean;
  showCorrectAnswers: boolean;
  showExplanations: boolean;
}

export interface Form {
  _id: string;
  title: string;
  description?: string;
  slug: string;
  fields: FormField[];
  status: FormStatus;
  userId: string;
  coverImage?: string;
  category?: string;
  tags?: string[];
  isFavorite: boolean;
  responses: number;
  views: number;
  isQuizMode: boolean;
  quizSettings?: QuizSettings;
  candidateInfoSettings?: CandidateInfoSettings;
  headerSettings?: HeaderSettings;
  instructions?: InstructionsSettings;
  themeSettings?: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
    cardColor: string;
    buttonTextColor: string;
    borderRadius: string;
    font: string;
    layout: string;
  };
  welcomeScreen?: {
    show: boolean;
    title: string;
    description: string;
    buttonText: string;
  };
  successScreen?: {
    title: string;
    description: string;
    showButton: boolean;
    buttonText: string;
    redirectUrl: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface QuizResult {
  score: number;
  totalMarks: number;
  percentage: number;
  correctAnswersCount: number;
  wrongAnswersCount: number;
  timeTaken: number;
  passed: boolean;
  respondentEmail?: string;
  respondentName?: string;
  answersAnalysis: {
    fieldId: string;
    isCorrect: boolean;
    scoreAwarded: number;
    correctAnswers?: any;
    explanation?: string;
  }[];
}

export interface FormResponse {
  _id: string;
  formId: string;
  data: Record<string, unknown>;
  candidateInfo?: {
    name?: string;
    rollNumber?: string;
    class?: string;
    section?: string;
    studentId?: string;
    email?: string;
    phone?: string;
    institutionName?: string;
    customFields?: {
      fieldId: string;
      label: string;
      value: string;
    }[];
  };
  submittedAt: string;
  metadata?: {
    userAgent?: string;
    ip?: string;
  };
  quizResult?: QuizResult;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  image?: string;
  createdAt: string;
}

export interface DashboardStats {
  totalForms: number;
  totalResponses: number;
  publishedForms: number;
  draftForms: number;
  conversionRate: number;
  recentActivity: ActivityItem[];
  recentForms: Form[];
}

export interface ActivityItem {
  id: string;
  type: "form_created" | "form_published" | "response_received" | "form_updated";
  message: string;
  timestamp: string;
  formId?: string;
  formTitle?: string;
}

export interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  fields: Omit<FormField, "id" | "order">[];
  coverColor: string;
  isQuizMode?: boolean;
  quizSettings?: QuizSettings;
  // Marketplace 3.0 enhancements
  isFeatured?: boolean;
  isNew?: boolean;
  tags?: string[];
  features?: string[];
  useCases?: string[];
  industries?: string[];
  previewType?: "job-application" | "feedback" | "helpdesk" | "event" | "healthcare" | "standard" | "finance" | "real-estate";
}

export interface AnalyticsData {
  responsesOverTime: { date: string; count: number }[];
  formPerformance: { name: string; responses: number; views: number }[];
  completionRate: number;
  popularForms: { name: string; responses: number }[];
  dailyActivity: { day: string; count: number }[];
}

export interface SearchResult {
  type: "form" | "response" | "template";
  id: string;
  title: string;
  description?: string;
  url: string;
}
