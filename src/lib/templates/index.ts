import { Template } from "../types";
import { businessTemplates } from "./business";
import { hrTemplates } from "./hr";
import { educationTemplates } from "./education";
import { eventsTemplates } from "./events";
import { healthcareTemplates } from "./healthcare";
import { feedbackTemplates } from "./feedback";
import { communityTemplates } from "./community";
import { realEstateTemplates } from "./real-estate";
import { itSupportTemplates } from "./it-support";
import { financeTemplates } from "./finance";

// Aggregate all modular templates into a single array export
export const templates: Template[] = [
  ...businessTemplates,
  ...hrTemplates,
  ...educationTemplates,
  ...eventsTemplates,
  ...healthcareTemplates,
  ...feedbackTemplates,
  ...communityTemplates,
  ...realEstateTemplates,
  ...itSupportTemplates,
  ...financeTemplates,
];

// Helper to get featured templates
export const getFeaturedTemplates = () => templates.filter(t => t.isFeatured);

// Helper to get new templates
export const getNewTemplates = () => templates.filter(t => t.isNew);

// Helper to get templates by category
export const getTemplatesByCategory = (category: string) => templates.filter(t => t.category === category);

// List of all unique categories
export const templateCategories = Array.from(new Set(templates.map(t => t.category))).sort();
