import { Template } from "../types";

export const healthcareTemplates: Template[] = [
  {
    id: "patient-intake",
    title: "New Patient Intake",
    description: "Secure, structured form to collect essential patient history before their first visit.",
    category: "Healthcare",
    icon: "ClipboardList",
    coverColor: "from-teal-500 to-emerald-700",
    isFeatured: true,
    tags: ["Medical", "Patient", "Clinic", "Onboarding"],
    features: ["Medical History", "Insurance Capture", "Emergency Contacts"],
    useCases: ["Private Practices", "Dental Clinics", "Specialist Offices"],
    industries: ["Healthcare", "Dentistry", "Physical Therapy"],
    previewType: "healthcare",
    fields: [
      { type: "text", label: "Patient Full Name", required: true },
      { type: "date", label: "Date of Birth", required: true },
      { type: "phone", label: "Primary Phone Number", required: true },
      { type: "text", label: "Emergency Contact Name", required: true },
      { type: "phone", label: "Emergency Contact Phone", required: true },
      { type: "textarea", label: "Primary Reason for Visit", required: true },
      { type: "radio", label: "Do you have medical insurance?", required: true, options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
      ]},
      { type: "textarea", label: "Current Medications", helpText: "List all prescriptions and supplements", required: false },
      { type: "textarea", label: "Known Allergies", required: false }
    ],
  },
  {
    id: "appointment-booking",
    title: "Appointment Booking",
    description: "Simple scheduling request form for medical or dental appointments.",
    category: "Healthcare",
    icon: "Calendar",
    coverColor: "from-cyan-500 to-blue-600",
    tags: ["Scheduling", "Clinic", "Doctors"],
    features: ["Date Selection", "Provider Preferences", "New Patient Routing"],
    useCases: ["Website Booking Pages", "Patient Portals"],
    industries: ["Healthcare", "Chiropractic", "Optometry"],
    previewType: "standard",
    fields: [
      { type: "text", label: "Full Name", required: true },
      { type: "email", label: "Email Address", required: true },
      { type: "phone", label: "Phone Number", required: true },
      { type: "radio", label: "Are you a new patient?", required: true, options: [
        { label: "Yes, I am a new patient", value: "yes" },
        { label: "No, returning patient", value: "no" }
      ]},
      { type: "dropdown", label: "Preferred Physician (if any)", required: false, options: [
        { label: "No Preference", value: "none" },
        { label: "Dr. Smith", value: "smith" },
        { label: "Dr. Johnson", value: "johnson" },
        { label: "Dr. Lee", value: "lee" }
      ]},
      { type: "date", label: "Preferred Date", required: true },
      { type: "dropdown", label: "Preferred Time of Day", required: true, options: [
        { label: "Morning (8AM - 12PM)", value: "morning" },
        { label: "Afternoon (12PM - 4PM)", value: "afternoon" },
        { label: "Late (After 4PM)", value: "late" }
      ]},
      { type: "textarea", label: "Reason for visit", required: false }
    ],
  },
  {
    id: "health-screening",
    title: "Health Screening & Triage",
    description: "Pre-visit screening questionnaire for symptoms and risk factors.",
    category: "Healthcare",
    icon: "Target",
    coverColor: "from-rose-500 to-red-600",
    isNew: true,
    tags: ["Screening", "Triage", "Symptoms"],
    features: ["Symptom Checklists", "Exposure History", "Immediate Routing"],
    useCases: ["Urgent Care Intake", "Telehealth Pre-Screens", "Workplace Safety"],
    industries: ["Urgent Care", "Corporate Health", "Telemedicine"],
    previewType: "healthcare",
    fields: [
      { type: "text", label: "Patient Name", required: true },
      { type: "checkbox", label: "Are you currently experiencing any of the following?", required: true, options: [
        { label: "Fever or chills", value: "fever" },
        { label: "Cough or shortness of breath", value: "cough" },
        { label: "Fatigue or muscle aches", value: "fatigue" },
        { label: "Loss of taste or smell", value: "taste" },
        { label: "None of the above", value: "none" }
      ]},
      { type: "radio", label: "Have you traveled internationally in the last 14 days?", required: true, options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
      ]},
      { type: "textarea", label: "Please detail any other current symptoms", required: false }
    ]
  }
];
