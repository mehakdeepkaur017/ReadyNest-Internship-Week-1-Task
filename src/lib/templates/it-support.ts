import { Template } from "../types";

export const itSupportTemplates: Template[] = [
  {
    id: "it-helpdesk-ticket",
    title: "IT Helpdesk Ticket",
    description: "Standardized internal form for employees to report technical issues.",
    category: "IT & Internal Operations",
    icon: "Headphones",
    coverColor: "from-blue-600 to-indigo-700",
    isFeatured: true,
    tags: ["IT", "Internal", "Support"],
    features: ["Issue Categorization", "Urgency Levels", "Screenshot Uploads"],
    useCases: ["Internal Employee Support", "Customer Support Portals"],
    industries: ["All Industries", "Tech", "Corporate"],
    previewType: "helpdesk",
    fields: [
      { type: "text", label: "Employee Name", required: true },
      { type: "dropdown", label: "Department", required: true, options: [
        { label: "Engineering", value: "eng" },
        { label: "Sales", value: "sales" },
        { label: "Marketing", value: "marketing" },
        { label: "HR", value: "hr" },
        { label: "Finance", value: "finance" },
        { label: "Other", value: "other" }
      ]},
      { type: "dropdown", label: "Issue Category", required: true, options: [
        { label: "Hardware (Laptop, Monitor, etc.)", value: "hardware" },
        { label: "Software / Accounts / Access", value: "software" },
        { label: "Network / Wi-Fi / VPN", value: "network" },
        { label: "Email / Communication", value: "email" },
        { label: "Other", value: "other" }
      ]},
      { type: "radio", label: "Urgency Level", required: true, options: [
        { label: "Low (Not blocking work)", value: "low" },
        { label: "Medium (Work is somewhat impacted)", value: "medium" },
        { label: "High (Completely blocked from working)", value: "high" }
      ]},
      { type: "textarea", label: "Issue Description", required: true, helpText: "Please describe the problem and any error messages you see." },
      { type: "file", label: "Screenshot Upload", required: false, helpText: "Upload a screenshot of the error if possible." }
    ],
  },
  {
    id: "hardware-request",
    title: "Hardware / Software Request Form",
    description: "Employees can request new equipment or software licenses.",
    category: "IT & Internal Operations",
    icon: "Briefcase",
    coverColor: "from-slate-700 to-gray-900",
    tags: ["Procurement", "IT", "Internal"],
    features: ["Manager Approvals", "Business Justification", "Asset Types"],
    useCases: ["Employee Onboarding", "Equipment Upgrades", "License Requests"],
    industries: ["All Industries", "Tech"],
    previewType: "standard",
    fields: [
      { type: "text", label: "Employee Name", required: true },
      { type: "text", label: "Manager Approver Name", required: true },
      { type: "radio", label: "Request Type", required: true, options: [
        { label: "New Hardware (Laptop, Monitor, etc.)", value: "hardware" },
        { label: "Software License / Access", value: "software" },
        { label: "Accessories (Keyboard, Mouse, Cables)", value: "accessories" }
      ]},
      { type: "textarea", label: "What exactly do you need?", required: true },
      { type: "textarea", label: "Business Justification", required: true, helpText: "Why is this needed for your role?" },
      { type: "text", label: "Link to item (if applicable)", required: false }
    ],
  }
];
