import { Template } from "../types";

export const hrTemplates: Template[] = [
  {
    id: "job-application",
    title: "Job Application",
    description: "A streamlined application form designed to collect candidate resumes and portfolios.",
    category: "HR & Recruitment",
    icon: "Briefcase",
    coverColor: "from-violet-600 to-purple-800",
    isFeatured: true,
    tags: ["Hiring", "Careers", "Recruiting"],
    features: ["Resume Upload", "Portfolio Links", "Experience Routing"],
    useCases: ["Careers Page", "LinkedIn Job Posts", "University Recruiting"],
    industries: ["All Industries", "Tech", "Retail", "Corporate"],
    previewType: "job-application",
    fields: [
      { type: "text", label: "Full Name", required: true },
      { type: "email", label: "Email Address", required: true },
      { type: "phone", label: "Phone Number", required: true },
      { type: "dropdown", label: "Position Applied For", required: true, options: [
        { label: "Software Engineer", value: "eng" },
        { label: "Product Manager", value: "pm" },
        { label: "Marketing Specialist", value: "mktg" },
        { label: "Sales Representative", value: "sales" }
      ]},
      { type: "url", label: "LinkedIn Profile", required: true },
      { type: "url", label: "Portfolio / Website", required: false },
      { type: "dropdown", label: "Years of Experience", required: true, options: [
        { label: "Entry Level (<1 yr)", value: "<1" },
        { label: "Mid Level (1-3 yrs)", value: "1-3" },
        { label: "Senior (3-5 yrs)", value: "3-5" },
        { label: "Lead / Manager (5+ yrs)", value: "5+" }
      ]},
      { type: "file", label: "Resume / CV", required: true }
    ],
  },
  {
    id: "employee-onboarding",
    title: "Employee Onboarding",
    description: "Collect personal information, equipment preferences, and tax details for new hires.",
    category: "HR & Recruitment",
    icon: "Users",
    coverColor: "from-sky-500 to-cyan-600",
    isNew: true,
    tags: ["HR", "Internal", "New Hires"],
    features: ["Secure Data Collection", "Hardware Selection", "Document Uploads"],
    useCases: ["First Day Setup", "Remote Employee Provisioning", "Payroll Intake"],
    industries: ["Corporate", "Remote Teams", "Startups"],
    previewType: "standard",
    fields: [
      { type: "text", label: "Legal Full Name", required: true },
      { type: "date", label: "Date of Birth", required: true },
      { type: "text", label: "Home Address", required: true },
      { type: "text", label: "Emergency Contact Name & Phone", required: true },
      { type: "radio", label: "Preferred Computer Platform", required: true, options: [
        { label: "Apple Mac", value: "mac" },
        { label: "Windows PC", value: "windows" }
      ]},
      { type: "dropdown", label: "T-Shirt Size (Company Swag)", required: false, options: [
        { label: "Small", value: "s" },
        { label: "Medium", value: "m" },
        { label: "Large", value: "l" },
        { label: "X-Large", value: "xl" }
      ]},
      { type: "textarea", label: "Dietary Restrictions (For Team Lunches)", required: false }
    ],
  },
  {
    id: "performance-review",
    title: "Performance Review",
    description: "Standardized evaluation form for employee performance assessments.",
    category: "HR & Recruitment",
    icon: "Star",
    coverColor: "from-amber-500 to-orange-600",
    tags: ["Internal", "Management", "Evaluation"],
    features: ["Rating Scales", "Manager & Self Eval", "Goal Tracking"],
    useCases: ["Annual Reviews", "Quarterly Check-ins", "Probation Reviews"],
    industries: ["All Industries", "Corporate", "Agencies"],
    previewType: "standard",
    fields: [
      { type: "text", label: "Employee Name", required: true },
      { type: "text", label: "Manager Name", required: true },
      { type: "dropdown", label: "Review Period", required: true, options: [
        { label: "Q1", value: "q1" },
        { label: "Q2", value: "q2" },
        { label: "Q3", value: "q3" },
        { label: "Q4", value: "q4" },
        { label: "Annual", value: "annual" }
      ]},
      { type: "rating", label: "Core Competency: Communication", required: true },
      { type: "rating", label: "Core Competency: Problem Solving", required: true },
      { type: "rating", label: "Core Competency: Teamwork", required: true },
      { type: "textarea", label: "Key Achievements", required: true },
      { type: "textarea", label: "Areas for Improvement", required: true },
      { type: "radio", label: "Overall Rating", required: true, options: [
        { label: "Exceeds Expectations", value: "exceeds" },
        { label: "Meets Expectations", value: "meets" },
        { label: "Needs Improvement", value: "needs" }
      ]}
    ],
  }
];
