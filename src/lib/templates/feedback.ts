import { Template } from "../types";

export const feedbackTemplates: Template[] = [
  {
    id: "csat-survey",
    title: "Customer Satisfaction (CSAT)",
    description: "Measure client happiness and identify areas for product improvement.",
    category: "Customer Experience",
    icon: "Star",
    coverColor: "from-orange-400 to-rose-500",
    isFeatured: true,
    tags: ["CSAT", "CX", "Product"],
    features: ["Satisfaction Metrics", "Feature Ranking", "Follow-up Consent"],
    useCases: ["Post-Purchase Surveys", "Support Ticket Resolution", "Quarterly Check-ins"],
    industries: ["E-commerce", "SaaS", "Retail", "Services"],
    previewType: "feedback",
    fields: [
      { type: "rating", label: "How satisfied are you with our product/service?", required: true },
      { type: "radio", label: "How often do you use our product?", required: true, options: [
        { label: "Daily", value: "daily" },
        { label: "Weekly", value: "weekly" },
        { label: "Monthly", value: "monthly" },
        { label: "Rarely", value: "rarely" }
      ]},
      { type: "dropdown", label: "Which feature do you value most?", required: false, options: [
        { label: "Ease of use", value: "ease" },
        { label: "Customer Support", value: "support" },
        { label: "Price/Value", value: "price" },
        { label: "Reliability", value: "reliability" },
        { label: "Specific Features", value: "features" }
      ]},
      { type: "textarea", label: "What can we do to improve your experience?", required: false },
      { type: "checkbox", label: "May we contact you regarding your feedback?", required: false, options: [
        { label: "Yes, you can contact me", value: "yes" }
      ]}
    ],
  },
  {
    id: "nps-survey",
    title: "Net Promoter Score (NPS)",
    description: "The industry standard metric for measuring customer loyalty.",
    category: "Customer Experience",
    icon: "Target",
    coverColor: "from-blue-500 to-indigo-600",
    isNew: true,
    tags: ["NPS", "Loyalty", "Growth"],
    features: ["Standard 0-10 Scale", "Qualitative Follow-up"],
    useCases: ["In-App Surveys", "Email Campaigns", "Annual Customer Reviews"],
    industries: ["All Industries", "B2B SaaS", "DTC Brands"],
    previewType: "feedback",
    fields: [
      { type: "rating", label: "How likely are you to recommend us to a friend or colleague? (1-5 scale)", required: true },
      { type: "textarea", label: "What is the primary reason for your score?", required: true },
      { type: "textarea", label: "What is the one thing we could do to make you happier?", required: false }
    ],
  },
  {
    id: "product-feedback",
    title: "Product Feature Feedback",
    description: "Gather targeted feedback from beta testers or active users on new features.",
    category: "Customer Experience",
    icon: "MessageSquare",
    coverColor: "from-emerald-400 to-teal-500",
    tags: ["Product", "UX", "Beta Testing"],
    features: ["Bug Reporting", "UX Rating", "Feature Requests"],
    useCases: ["Beta Programs", "Early Access Feedback", "Continuous Discovery"],
    industries: ["Software", "Consumer Apps", "Hardware"],
    previewType: "standard",
    fields: [
      { type: "radio", label: "Did you find the new dashboard easy to use?", required: true, options: [
        { label: "Very easy", value: "very_easy" },
        { label: "Somewhat easy", value: "easy" },
        { label: "Neutral", value: "neutral" },
        { label: "Difficult", value: "difficult" }
      ]},
      { type: "textarea", label: "What is missing from this feature?", required: false },
      { type: "textarea", label: "Did you encounter any bugs or errors? Please describe.", required: false },
      { type: "file", label: "Screenshot Upload (Optional)", required: false }
    ],
  }
];
