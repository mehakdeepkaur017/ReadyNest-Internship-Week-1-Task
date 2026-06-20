import mongoose, { Schema, Document } from "mongoose";

const FieldOptionSchema = new Schema(
  {
    label: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false }
);

const ValidationRuleSchema = new Schema(
  {
    type: { type: String, enum: ["min", "max", "minLength", "maxLength", "pattern", "custom"], required: true },
    value: { type: Schema.Types.Mixed, required: true },
    message: { type: String, required: true },
  },
  { _id: false }
);

const FormFieldSchema = new Schema(
  {
    id: { type: String, required: true },
    type: {
      type: String,
      enum: ["text", "textarea", "email", "number", "phone", "date", "time", "dropdown", "radio", "checkbox", "rating", "file", "url", "password"],
      required: true,
    },
    label: { type: String, required: true },
    placeholder: { type: String },
    helpText: { type: String },
    required: { type: Boolean, default: false },
    defaultValue: { type: String },
    options: [FieldOptionSchema],
    validation: [ValidationRuleSchema],
    order: { type: Number, required: true },
    correctAnswer: { type: Schema.Types.Mixed },
    explanation: { type: String },
    marks: { type: Number, default: 1 },
    difficultyLevel: { type: String, enum: ["easy", "medium", "hard"], default: "easy" },
  },
  { _id: false }
);

export interface IForm extends Document {
  title: string;
  description?: string;
  slug: string;
  fields: typeof FormFieldSchema[];
  status: "draft" | "published" | "archived";
  userId: mongoose.Types.ObjectId;
  coverImage?: string;
  category?: string;
  tags?: string[];
  isFavorite: boolean;
  responses: number;
  views: number;
  themeSettings: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
    cardColor: string;
    buttonTextColor: string;
    borderRadius: string;
    font: string;
    layout: string;
  };
  welcomeScreen: {
    show: boolean;
    title: string;
    description: string;
    buttonText: string;
  };
  successScreen: {
    title: string;
    description: string;
    showButton: boolean;
    buttonText: string;
    redirectUrl: string;
  };
  isQuizMode: boolean;
  quizSettings?: {
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
  };
  candidateInfoSettings?: any;
  headerSettings?: {
    institutionName?: string;
    title?: string;
    subtitle?: string;
    logoUrl?: string;
    showLogo?: boolean;
  };
  instructions?: {
    show: boolean;
    customNotes?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const FormSchema = new Schema<IForm>(
  {
    title: { type: String, required: true },
    description: { type: String },
    slug: { type: String, required: true, unique: true },
    fields: [FormFieldSchema],
    status: { type: String, enum: ["draft", "published", "archived"], default: "draft" },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    coverImage: { type: String },
    category: { type: String },
    tags: [{ type: String }],
    isFavorite: { type: Boolean, default: false },
    responses: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    isQuizMode: { type: Boolean, default: false },
    quizSettings: {
      type: {
        timeLimit: { type: Number, default: 0 },
        passingPercentage: { type: Number, default: 40 },
        negativeMarking: { type: Boolean, default: false },
        negativeMarkValue: { type: Number, default: 0 },
        shuffleQuestions: { type: Boolean, default: false },
        shuffleOptions: { type: Boolean, default: false },
        maxAttempts: { type: Number, default: 0 },
        requireAuth: { type: Boolean, default: false },
        showCorrectAnswers: { type: Boolean, default: true },
        showExplanations: { type: Boolean, default: true },
      },
      default: () => ({
        timeLimit: 0,
        passingPercentage: 40,
        negativeMarking: false,
        negativeMarkValue: 0,
        shuffleQuestions: false,
        shuffleOptions: false,
        maxAttempts: 0,
        requireAuth: false,
        showCorrectAnswers: true,
        showExplanations: true
      })
    },
    candidateInfoSettings: {
      type: {
        name: {
          enabled: { type: Boolean, default: false },
          required: { type: Boolean, default: false },
          label: { type: String, default: "Name" }
        },
        rollNumber: {
          enabled: { type: Boolean, default: false },
          required: { type: Boolean, default: false },
          label: { type: String, default: "Roll Number" }
        },
        class: {
          enabled: { type: Boolean, default: false },
          required: { type: Boolean, default: false },
          label: { type: String, default: "Class" }
        },
        section: {
          enabled: { type: Boolean, default: false },
          required: { type: Boolean, default: false },
          label: { type: String, default: "Section" }
        },
        studentId: {
          enabled: { type: Boolean, default: false },
          required: { type: Boolean, default: false },
          label: { type: String, default: "Student ID" }
        },
        email: {
          enabled: { type: Boolean, default: false },
          required: { type: Boolean, default: false },
          label: { type: String, default: "Email" }
        },
        phone: {
          enabled: { type: Boolean, default: false },
          required: { type: Boolean, default: false },
          label: { type: String, default: "Phone Number" }
        },
        institutionName: {
          enabled: { type: Boolean, default: false },
          required: { type: Boolean, default: false },
          label: { type: String, default: "Institution Name" }
        },
        customFields: [{
          id: { type: String },
          label: { type: String },
          required: { type: Boolean, default: false },
          enabled: { type: Boolean, default: true }
        }]
      },
      default: () => ({
        name: { enabled: false, required: false, label: "Name" },
        rollNumber: { enabled: false, required: false, label: "Roll Number" },
        class: { enabled: false, required: false, label: "Class" },
        section: { enabled: false, required: false, label: "Section" },
        studentId: { enabled: false, required: false, label: "Student ID" },
        email: { enabled: false, required: false, label: "Email" },
        phone: { enabled: false, required: false, label: "Phone Number" },
        institutionName: { enabled: false, required: false, label: "Institution Name" },
        customFields: []
      })
    },
    headerSettings: {
      type: {
        institutionName: { type: String, default: "" },
        title: { type: String, default: "" },
        subtitle: { type: String, default: "" },
        logoUrl: { type: String, default: "" },
        showLogo: { type: Boolean, default: false },
      },
      default: () => ({
        institutionName: "",
        title: "",
        subtitle: "",
        logoUrl: "",
        showLogo: false
      })
    },
    instructions: {
      type: {
        show: { type: Boolean, default: false },
        customNotes: { type: String, default: "" },
      },
      default: () => ({
        show: false,
        customNotes: ""
      })
    },
    themeSettings: {
      type: {
        primaryColor: { type: String, default: "#0f172a" },
        backgroundColor: { type: String, default: "#f8fafc" },
        textColor: { type: String, default: "#0f172a" },
        cardColor: { type: String, default: "#ffffff" },
        buttonTextColor: { type: String, default: "#ffffff" },
        borderRadius: { type: String, default: "12px" },
        font: { type: String, default: "Inter" },
        layout: { type: String, default: "classic" },
      },
      default: () => ({
        primaryColor: "#0f172a",
        backgroundColor: "#f8fafc",
        textColor: "#0f172a",
        cardColor: "#ffffff",
        buttonTextColor: "#ffffff",
        borderRadius: "12px",
        font: "Inter",
        layout: "classic"
      })
    },
    welcomeScreen: {
      type: {
        show: { type: Boolean, default: false },
        title: { type: String, default: "Welcome" },
        description: { type: String, default: "Please fill out this form." },
        buttonText: { type: String, default: "Start" },
      },
      default: () => ({
        show: false,
        title: "Welcome",
        description: "Please fill out this form.",
        buttonText: "Start"
      })
    },
    successScreen: {
      type: {
        title: { type: String, default: "Thank You!" },
        description: { type: String, default: "Your response has been successfully recorded." },
        showButton: { type: Boolean, default: true },
        buttonText: { type: String, default: "Submit Another Response" },
        redirectUrl: { type: String, default: "" },
      },
      default: () => ({
        title: "Thank You!",
        description: "Your response has been successfully recorded.",
        showButton: true,
        buttonText: "Submit Another Response",
        redirectUrl: ""
      })
    }
  },
  { timestamps: true }
);

FormSchema.index({ userId: 1, status: 1 });
FormSchema.index({ slug: 1 });
FormSchema.index({ title: "text", description: "text" });

export default mongoose.models.Form || mongoose.model<IForm>("Form", FormSchema);
