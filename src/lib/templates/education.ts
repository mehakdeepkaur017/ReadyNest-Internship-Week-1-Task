import { Template } from "../types";

export const educationTemplates: Template[] = [
  {
    id: "student-registration",
    title: "Student Registration",
    description: "Comprehensive registration form for new students entering courses or programs.",
    category: "Education",
    icon: "ClipboardList",
    coverColor: "from-sky-500 to-blue-600",
    isFeatured: true,
    tags: ["Admissions", "School", "University", "Enrollment"],
    features: ["Parent/Guardian Links", "Document Uploads", "Medical History Collection"],
    useCases: ["K-12 Admissions", "University Enrollment", "Summer Camps", "Extracurriculars"],
    industries: ["Education", "Childcare", "Higher Ed"],
    previewType: "standard",
    fields: [
      { type: "text", label: "Student Full Name", required: true },
      { type: "date", label: "Date of Birth", required: true },
      { type: "text", label: "Parent/Guardian Name", required: true },
      { type: "phone", label: "Emergency Contact Number", required: true },
      { type: "dropdown", label: "Grade/Year Applying For", required: true, options: [
        { label: "Freshman", value: "freshman" },
        { label: "Sophomore", value: "sophomore" },
        { label: "Junior", value: "junior" },
        { label: "Senior", value: "senior" },
        { label: "Graduate", value: "graduate" }
      ]},
      { type: "textarea", label: "Previous Education", required: true },
      { type: "textarea", label: "Medical Conditions / Allergies", required: false },
      { type: "file", label: "Previous Transcript Upload", required: false }
    ],
  },
  {
    id: "faculty-feedback",
    title: "Faculty Feedback",
    description: "Collect student feedback at the end of a semester or training program.",
    category: "Education",
    icon: "Star",
    coverColor: "from-indigo-500 to-purple-600",
    tags: ["Feedback", "University", "Evaluation"],
    features: ["Anonymous Ready", "Likert Scales", "Course Specifics"],
    useCases: ["End of Semester Evals", "Workshop Reviews", "Instructor Assessments"],
    industries: ["Universities", "Corporate Training", "Online Courses"],
    previewType: "feedback",
    fields: [
      { type: "text", label: "Course Name & Code", required: true },
      { type: "text", label: "Instructor Name", required: true },
      { type: "rating", label: "Overall Course Rating", required: true },
      { type: "rating", label: "Instructor Effectiveness Rating", required: true },
      { type: "radio", label: "Was the workload appropriate?", required: true, options: [
        { label: "Too light", value: "light" },
        { label: "Just right", value: "right" },
        { label: "Too heavy", value: "heavy" }
      ]},
      { type: "textarea", label: "What was the best part of the course?", required: false },
      { type: "textarea", label: "What could be improved?", required: false }
    ],
  },
  {
    id: "scholarship-application",
    title: "Scholarship Application",
    description: "Standardized application for financial aid and academic scholarships.",
    category: "Education",
    icon: "Target",
    coverColor: "from-blue-600 to-indigo-800",
    isNew: true,
    tags: ["Financial Aid", "University", "Grants"],
    features: ["Essay Collection", "Income Verification", "Reference Checks"],
    useCases: ["University Scholarships", "Private Grants", "Community Foundations"],
    industries: ["Education", "Nonprofits", "Foundations"],
    previewType: "standard",
    fields: [
      { type: "text", label: "Applicant Name", required: true },
      { type: "email", label: "Student Email", required: true },
      { type: "number", label: "Current GPA", required: true },
      { type: "dropdown", label: "Current Education Level", required: true, options: [
        { label: "High School Senior", value: "hs" },
        { label: "Undergraduate", value: "undergrad" },
        { label: "Graduate", value: "grad" }
      ]},
      { type: "textarea", label: "Personal Statement Essay", helpText: "Describe your academic goals and financial need (500 words).", required: true },
      { type: "file", label: "Letter of Recommendation", required: true },
      { type: "file", label: "Latest Transcript", required: true }
    ]
  }
];
