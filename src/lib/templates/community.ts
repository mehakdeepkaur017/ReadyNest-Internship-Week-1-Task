import { Template } from "../types";

export const communityTemplates: Template[] = [
  {
    id: "volunteer-application",
    title: "Volunteer Application",
    description: "Recruit and organize volunteers for your nonprofit or community initiative.",
    category: "Community & Nonprofits",
    icon: "Briefcase",
    coverColor: "from-green-500 to-emerald-700",
    tags: ["Nonprofit", "Charity", "Events"],
    features: ["Availability Tracking", "Skill Mapping", "Contact Details"],
    useCases: ["Charity Events", "Community Cleanups", "Shelter Staffing"],
    industries: ["Nonprofits", "Local Government", "Religious Orgs"],
    previewType: "standard",
    fields: [
      { type: "text", label: "Full Name", required: true },
      { type: "email", label: "Email Address", required: true },
      { type: "phone", label: "Phone Number", required: true },
      { type: "checkbox", label: "Which days are you available?", required: true, options: [
        { label: "Weekdays (Morning)", value: "weekday_am" },
        { label: "Weekdays (Afternoon/Evening)", value: "weekday_pm" },
        { label: "Weekends", value: "weekends" }
      ]},
      { type: "dropdown", label: "Areas of Interest", required: true, options: [
        { label: "Event Setup/Tear Down", value: "setup" },
        { label: "Guest Registration", value: "registration" },
        { label: "Fundraising/Outreach", value: "fundraising" },
        { label: "Social Media/Marketing", value: "marketing" },
        { label: "General Help", value: "general" }
      ]},
      { type: "textarea", label: "Do you have any relevant skills or past volunteer experience?", required: false }
    ],
  },
  {
    id: "donation-pledge",
    title: "Donation Pledge",
    description: "Collect commitments from donors for your upcoming fundraising campaign.",
    category: "Community & Nonprofits",
    icon: "Star",
    coverColor: "from-amber-400 to-yellow-600",
    tags: ["Fundraising", "Charity", "Finance"],
    features: ["Pledge Tiers", "Payment Preferences", "Anonymous Options"],
    useCases: ["Annual Appeals", "Capital Campaigns", "Giving Tuesday"],
    industries: ["Nonprofits", "Universities", "Political Campaigns"],
    previewType: "finance",
    fields: [
      { type: "text", label: "Donor Name / Organization", required: true },
      { type: "email", label: "Contact Email", required: true },
      { type: "radio", label: "Pledge Amount", required: true, options: [
        { label: "$50", value: "50" },
        { label: "$100", value: "100" },
        { label: "$250", value: "250" },
        { label: "$500+", value: "500_plus" },
        { label: "Other amount", value: "other" }
      ]},
      { type: "dropdown", label: "Payment Method Preference", required: true, options: [
        { label: "Credit Card (Online)", value: "cc" },
        { label: "Check / Mail", value: "check" },
        { label: "Bank Transfer", value: "wire" }
      ]},
      { type: "checkbox", label: "Anonymous Donation", required: false, options: [
        { label: "Please keep my donation anonymous", value: "anonymous" }
      ]},
      { type: "textarea", label: "Message / Dedication", helpText: "Is this donation in honor or memory of someone?", required: false }
    ],
  }
];
