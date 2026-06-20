import { Template } from "../types";

export const businessTemplates: Template[] = [
  {
    id: "b2b-lead-generation",
    title: "B2B Lead Generation",
    description: "Capture high-quality business leads with an optimized qualification form.",
    category: "Business Operations",
    icon: "Target",
    coverColor: "from-blue-600 to-indigo-600",
    isFeatured: true,
    tags: ["Sales", "Marketing", "B2B", "Leads"],
    features: ["Conditional Logic", "Company Size Routing", "Email Validation"],
    useCases: ["Website Contact Page", "Ad Campaign Landing Pages", "Gated Content"],
    industries: ["Software / SaaS", "B2B Services", "Consulting"],
    previewType: "standard",
    fields: [
      { type: "text", label: "Full Name", placeholder: "Jane Doe", required: true },
      { type: "email", label: "Work Email", placeholder: "jane@company.com", required: true },
      { type: "text", label: "Company Name", placeholder: "Acme Corp", required: true },
      { type: "dropdown", label: "Company Size", required: true, options: [
        { label: "1-10", value: "1-10" },
        { label: "11-50", value: "11-50" },
        { label: "51-200", value: "51-200" },
        { label: "201-500", value: "201-500" },
        { label: "500+", value: "500+" }
      ]},
      { type: "textarea", label: "How can we help?", placeholder: "Briefly describe your needs...", required: false }
    ],
  },
  {
    id: "client-onboarding",
    title: "Client Onboarding",
    description: "Collect essential details from new clients to kick off projects smoothly.",
    category: "Business Operations",
    icon: "Briefcase",
    coverColor: "from-slate-700 to-slate-900",
    isNew: true,
    tags: ["Agency", "Freelance", "Onboarding", "Operations"],
    features: ["File Uploads", "Multi-step Ready", "Required Asset Collection"],
    useCases: ["Post-Sale Kickoff", "Agency Client Intake", "Freelancer Briefs"],
    industries: ["Creative Agencies", "Consulting", "Professional Services"],
    previewType: "standard",
    fields: [
      { type: "text", label: "Primary Contact Name", required: true },
      { type: "email", label: "Billing Email", required: true },
      { type: "phone", label: "Contact Phone Number", required: true },
      { type: "text", label: "Project Goal", required: true, helpText: "In one sentence, what is the primary goal?" },
      { type: "dropdown", label: "Estimated Budget", required: true, options: [
        { label: "Under $5,000", value: "under-5k" },
        { label: "$5,000 - $10,000", value: "5k-10k" },
        { label: "$10,000 - $25,000", value: "10k-25k" },
        { label: "$25,000+", value: "over-25k" }
      ]},
      { type: "date", label: "Target Launch Date", required: false },
      { type: "textarea", label: "Current Brand Assets", helpText: "Please provide links to brand guidelines or logos", required: false }
    ],
  },
  {
    id: "quote-request",
    title: "Quote Request",
    description: "Allow prospective customers to request a detailed pricing quote for your services.",
    category: "Business Operations",
    icon: "FileText",
    coverColor: "from-emerald-600 to-teal-700",
    tags: ["Sales", "Inbound", "Pricing"],
    features: ["Service Selection", "Timeline Estimation", "Budget Qualification"],
    useCases: ["Service Businesses", "Custom Manufacturing", "Wholesale Orders"],
    industries: ["Construction", "Logistics", "Manufacturing", "Events"],
    previewType: "standard",
    fields: [
      { type: "text", label: "Company Name", required: true },
      { type: "text", label: "Contact Person", required: true },
      { type: "email", label: "Email Address", required: true },
      { type: "checkbox", label: "Services Required", required: true, options: [
        { label: "Consulting", value: "consulting" },
        { label: "Implementation", value: "implementation" },
        { label: "Maintenance", value: "maintenance" },
        { label: "Training", value: "training" }
      ]},
      { type: "textarea", label: "Project Description", required: true },
      { type: "date", label: "Expected Delivery Date", required: true }
    ],
  }
];
