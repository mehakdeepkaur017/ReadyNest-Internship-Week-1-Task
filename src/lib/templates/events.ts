import { Template } from "../types";

export const eventsTemplates: Template[] = [
  {
    id: "conference-registration",
    title: "Conference Registration",
    description: "Professional registration form for tech conferences, summits, and corporate events.",
    category: "Events & Registrations",
    icon: "Calendar",
    coverColor: "from-rose-500 to-pink-700",
    isFeatured: true,
    tags: ["Conference", "Meetup", "RSVP", "Corporate"],
    features: ["Ticket Tiers", "Dietary Restrictions", "Session Preferences"],
    useCases: ["Industry Summits", "Trade Shows", "Corporate Retreats"],
    industries: ["Event Management", "Tech", "Professional Associations"],
    previewType: "event",
    fields: [
      { type: "text", label: "Full Name", required: true },
      { type: "email", label: "Professional Email", required: true },
      { type: "text", label: "Job Title & Company", required: true },
      { type: "dropdown", label: "Ticket Type", required: true, options: [
        { label: "Early Bird ($199)", value: "early_bird" },
        { label: "General Admission ($299)", value: "general" },
        { label: "VIP Pass ($499)", value: "vip" }
      ]},
      { type: "radio", label: "Dietary Restrictions", required: true, options: [
        { label: "None", value: "none" },
        { label: "Vegetarian", value: "vegetarian" },
        { label: "Vegan", value: "vegan" },
        { label: "Gluten-Free", value: "gluten_free" },
        { label: "Other", value: "other" }
      ]},
      { type: "checkbox", label: "Which sessions are you most interested in?", required: false, options: [
        { label: "Morning Keynotes", value: "keynote" },
        { label: "Technical Workshops", value: "technical" },
        { label: "Networking Events", value: "networking" },
        { label: "Panel Discussions", value: "panels" }
      ]}
    ],
  },
  {
    id: "event-feedback",
    title: "Event Feedback",
    description: "Discover what attendees loved and how you can improve next year.",
    category: "Events & Registrations",
    icon: "MessageSquare",
    coverColor: "from-violet-500 to-fuchsia-600",
    tags: ["Survey", "Post-Event", "NPS"],
    features: ["Speaker Ratings", "Venue Ratings", "Likelihood to Return"],
    useCases: ["Post-Conference Survey", "Webinar Follow-up", "Meetup Feedback"],
    industries: ["Event Organizers", "Marketing Teams", "Communities"],
    previewType: "feedback",
    fields: [
      { type: "rating", label: "How would you rate the overall event?", required: true },
      { type: "rating", label: "How would you rate the venue & catering?", required: true },
      { type: "radio", label: "Did the event meet your expectations?", required: true, options: [
        { label: "Exceeded expectations", value: "exceeded" },
        { label: "Met expectations", value: "met" },
        { label: "Fell short", value: "short" }
      ]},
      { type: "textarea", label: "What was your favorite session or moment?", required: false },
      { type: "textarea", label: "How can we improve for next time?", required: false },
      { type: "radio", label: "How likely are you to attend next year?", required: true, options: [
        { label: "Very likely", value: "very_likely" },
        { label: "Maybe", value: "maybe" },
        { label: "Unlikely", value: "unlikely" }
      ]}
    ],
  },
  {
    id: "sponsor-registration",
    title: "Sponsor Registration",
    description: "Onboard sponsors for your event, including booth requirements and branding assets.",
    category: "Events & Registrations",
    icon: "Star",
    coverColor: "from-amber-500 to-yellow-600",
    isNew: true,
    tags: ["B2B", "Sponsorship", "Exhibitors"],
    features: ["Sponsorship Tiers", "Logo Uploads", "Booth Requirements"],
    useCases: ["Trade Shows", "Charity Galas", "Tech Summits"],
    industries: ["Event Agencies", "Nonprofits", "Trade Associations"],
    previewType: "standard",
    fields: [
      { type: "text", label: "Company Name", required: true },
      { type: "text", label: "Primary Contact Name", required: true },
      { type: "email", label: "Contact Email", required: true },
      { type: "dropdown", label: "Sponsorship Level", required: true, options: [
        { label: "Platinum ($10,000)", value: "platinum" },
        { label: "Gold ($5,000)", value: "gold" },
        { label: "Silver ($2,500)", value: "silver" },
        { label: "Booth Only ($1,000)", value: "booth" }
      ]},
      { type: "file", label: "High-Res Company Logo (Vector/PNG)", required: true },
      { type: "checkbox", label: "Additional Requirements", required: false, options: [
        { label: "Dedicated Power Drop", value: "power" },
        { label: "Hardline Internet", value: "internet" },
        { label: "Extra Exhibitor Passes", value: "passes" }
      ]}
    ]
  }
];
