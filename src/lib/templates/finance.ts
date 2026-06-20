import { Template } from "../types";

export const financeTemplates: Template[] = [
  {
    id: "expense-reimbursement",
    title: "Expense Reimbursement",
    description: "Standardized form for employees to submit reimbursable expenses.",
    category: "Finance & Administration",
    icon: "FileText",
    coverColor: "from-emerald-600 to-teal-700",
    isFeatured: true,
    isNew: true,
    tags: ["Finance", "Internal", "Accounting"],
    features: ["Receipt Uploads", "Expense Categorization", "Amount Tracking"],
    useCases: ["Travel Expenses", "Office Supplies", "Client Meals"],
    industries: ["All Industries", "Corporate", "Agencies"],
    previewType: "finance",
    fields: [
      { type: "text", label: "Employee Name", required: true },
      { type: "text", label: "Department", required: true },
      { type: "date", label: "Date of Expense", required: true },
      { type: "dropdown", label: "Expense Category", required: true, options: [
        { label: "Travel", value: "travel" },
        { label: "Meals", value: "meals" },
        { label: "Office Supplies", value: "supplies" },
        { label: "Software/Subscriptions", value: "software" },
        { label: "Other", value: "other" }
      ]},
      { type: "number", label: "Total Amount (USD)", required: true },
      { type: "textarea", label: "Description / Business Purpose", required: true },
      { type: "file", label: "Receipt Upload", required: true, helpText: "Please upload clear images or PDFs of receipts." }
    ],
  }
];
