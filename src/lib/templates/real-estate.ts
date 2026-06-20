import { Template } from "../types";

export const realEstateTemplates: Template[] = [
  {
    id: "property-inquiry",
    title: "Property Viewing Request",
    description: "Capture leads from potential buyers or renters interested in property showings.",
    category: "Real Estate",
    icon: "Calendar",
    coverColor: "from-blue-700 to-slate-800",
    tags: ["Sales", "Leasing", "Property"],
    features: ["Date & Time Pickers", "Buyer/Renter Triage", "Pre-approval Check"],
    useCases: ["Property Listings", "Open House Registrations", "Broker Websites"],
    industries: ["Real Estate", "Property Management", "Brokerages"],
    previewType: "real-estate",
    fields: [
      { type: "text", label: "Full Name", required: true },
      { type: "email", label: "Email Address", required: true },
      { type: "phone", label: "Phone Number", required: true },
      { type: "text", label: "Property Address / ID of Interest", required: true },
      { type: "radio", label: "Are you looking to buy or rent?", required: true, options: [
        { label: "Buy", value: "buy" },
        { label: "Rent", value: "rent" }
      ]},
      { type: "date", label: "Preferred Viewing Date", required: true },
      { type: "dropdown", label: "Preferred Time", required: true, options: [
        { label: "Morning", value: "morning" },
        { label: "Afternoon", value: "afternoon" },
        { label: "Evening", value: "evening" }
      ]},
      { type: "checkbox", label: "Are you currently pre-approved for a mortgage?", required: false, options: [
        { label: "Yes, I have pre-approval", value: "yes" }
      ]}
    ],
  },
  {
    id: "maintenance-request",
    title: "Tenant Maintenance Request",
    description: "Structured form for tenants to report issues to property management.",
    category: "Real Estate",
    icon: "Target",
    coverColor: "from-amber-600 to-red-700",
    tags: ["Property Management", "Support", "Internal"],
    features: ["Issue Categorization", "Priority Levels", "Photo Uploads"],
    useCases: ["Tenant Portals", "HOA Websites", "Facility Management"],
    industries: ["Property Management", "Commercial Real Estate"],
    previewType: "helpdesk",
    fields: [
      { type: "text", label: "Tenant Name", required: true },
      { type: "text", label: "Unit/Apartment Number", required: true },
      { type: "phone", label: "Contact Phone Number", required: true },
      { type: "dropdown", label: "Issue Category", required: true, options: [
        { label: "Plumbing", value: "plumbing" },
        { label: "Electrical", value: "electrical" },
        { label: "HVAC / Heating / AC", value: "hvac" },
        { label: "Appliances", value: "appliances" },
        { label: "Pest Control", value: "pest" },
        { label: "Other", value: "other" }
      ]},
      { type: "radio", label: "Priority Level", required: true, options: [
        { label: "Low (No immediate rush)", value: "low" },
        { label: "Medium (Needs attention soon)", value: "medium" },
        { label: "High/Emergency (Water leak, no heat, etc.)", value: "high" }
      ]},
      { type: "textarea", label: "Detailed Description of the Issue", required: true },
      { type: "checkbox", label: "Permission to Enter", required: true, options: [
        { label: "I grant permission for maintenance to enter if I am not home.", value: "granted" }
      ]},
      { type: "file", label: "Photo of the issue", required: false, helpText: "Upload a picture to help us diagnose the problem." }
    ],
  }
];
