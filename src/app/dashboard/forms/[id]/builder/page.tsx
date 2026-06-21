"use client";

import { useEffect, useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { 
  Save, Trash2, Copy, ToggleLeft, ToggleRight,
  Settings, GripVertical, PlusCircle, MinusCircle, FileText, Sparkles, LayoutGrid,
  ChevronDown, ChevronUp, ArrowLeft, Palette, LayoutTemplate, Clock, Share2
} from "lucide-react";
import { 
  DndContext, closestCenter, KeyboardSensor, PointerSensor, 
  useSensor, useSensors, DragEndEvent 
} from "@dnd-kit/core";
import { 
  arrayMove, SortableContext, sortableKeyboardCoordinates, 
  verticalListSortingStrategy, useSortable 
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { Form, FormField, FieldType, FormStatus } from "@/lib/types";
import { getBuilderContext, BuilderContext } from "@/lib/contextBuilder";
import { questionBank } from "@/lib/question-bank";

// Standard preset fields to add
const FIELD_PRESETS: { type: FieldType; label: string; icon: string }[] = [
  { type: "text", label: "Text Input", icon: "✍️" },
  { type: "textarea", label: "Long Text", icon: "📝" },
  { type: "email", label: "Email Address", icon: "✉️" },
  { type: "number", label: "Number Input", icon: "🔢" },
  { type: "phone", label: "Phone Number", icon: "📞" },
  { type: "date", label: "Date Picker", icon: "📅" },
  { type: "time", label: "Time Picker", icon: "⏰" },
  { type: "dropdown", label: "Select Dropdown", icon: "▼" },
  { type: "radio", label: "Radio Selection", icon: "🔘" },
  { type: "checkbox", label: "Checkbox Group", icon: "☑️" },
  { type: "rating", label: "Rating Stars", icon: "⭐" },
  { type: "file", label: "File Upload", icon: "📁" },
  { type: "url", label: "URL Link", icon: "🔗" },
  { type: "password", label: "Password Input", icon: "🔒" },
];

export default function FormBuilderPage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState<Form | null>(null);
  const [fields, setFields] = useState<FormField[]>([]);
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  
  // Workspace Modes
  const [leftTab, setLeftTab] = useState<"build" | "settings">("build");
  const [mobileView, setMobileView] = useState<"workspace" | "preview">("workspace");
  const [expandedConfig, setExpandedConfig] = useState<string | null>("context");
  const [status, setStatus] = useState<FormStatus>("draft");

  // Context-Aware Builder Data
  const [builderContext, setBuilderContext] = useState<BuilderContext | null>(null);

  // Quiz States
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizSettings, setQuizSettings] = useState({
    timeLimit: 0,
    passingPercentage: 40,
    negativeMarking: false,
    negativeMarkValue: 0,
    shuffleQuestions: false,
    shuffleOptions: false,
    maxAttempts: 0,
    requireAuth: false,
    showCorrectAnswers: true,
    showExplanations: true
  });

  // Candidate Settings States
  const [candidateInfoSettings, setCandidateInfoSettings] = useState<any>({
    name: { enabled: false, required: false, label: "" },
    rollNumber: { enabled: false, required: false, label: "" },
    class: { enabled: false, required: false, label: "" },
    section: { enabled: false, required: false, label: "" },
    studentId: { enabled: false, required: false, label: "" },
    email: { enabled: false, required: false, label: "" },
    phone: { enabled: false, required: false, label: "" },
    institutionName: { enabled: false, required: false, label: "" },
    customFields: []
  });

  const [headerSettings, setHeaderSettings] = useState<any>({
    institutionName: "",
    title: "",
    subtitle: "",
    logoUrl: "",
    showLogo: false
  });

  const [instructions, setInstructions] = useState<any>({
    show: false,
    customNotes: ""
  });

  // Customization States
  const [themeSettings, setThemeSettings] = useState({
    primaryColor: "#0f172a",
    backgroundColor: "#f8fafc",
    textColor: "#0f172a",
    cardColor: "#ffffff",
    buttonTextColor: "#ffffff",
    borderRadius: "12px",
    font: "Inter",
    layout: "classic"
  });

  const [welcomeScreen, setWelcomeScreen] = useState({
    show: false,
    title: "Welcome",
    description: "Please fill out this form.",
    buttonText: "Start"
  });

  const [successScreen, setSuccessScreen] = useState({
    title: "Thank You!",
    description: "Your response has been successfully recorded.",
    showButton: true,
    buttonText: "Submit Another Response",
    redirectUrl: ""
  });

  // Smart Builder States
  const [showBuilderModal, setShowBuilderModal] = useState(false);
  const [buildingAssessment, setBuildingAssessment] = useState(false);
  const [builderSubject, setBuilderSubject] = useState("mathematics");
  const [builderDifficulty, setBuilderDifficulty] = useState("mixed");
  const [builderType, setBuilderType] = useState("mixed");
  const [builderCount, setBuilderCount] = useState<number>(10);
  const [builderAction, setBuilderAction] = useState<"append" | "replace">("replace");

  // Load Form detail
  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await fetch(`/api/forms/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);
        
        setForm(data.form);
        setFields(data.form.fields || []);
        setStatus(data.form.status);
        setIsQuizMode(data.form.isQuizMode || false);
        
        // Generate Context from category
        const context = getBuilderContext(data.form.category || "Business", data.form.isQuizMode || false);
        setBuilderContext(context);

        if (data.form.quizSettings) setQuizSettings(data.form.quizSettings);
        if (data.form.themeSettings) setThemeSettings(data.form.themeSettings);
        if (data.form.welcomeScreen) setWelcomeScreen(data.form.welcomeScreen);
        if (data.form.successScreen) setSuccessScreen(data.form.successScreen);
        if (data.form.headerSettings) setHeaderSettings(data.form.headerSettings);
        if (data.form.instructions) setInstructions(data.form.instructions);
        
        if (data.form.candidateInfoSettings) {
          setCandidateInfoSettings(data.form.candidateInfoSettings);
        } else if (data.form.isQuizMode) {
          setCandidateInfoSettings((prev: any) => ({
            ...prev,
            name: { enabled: true, required: true, label: "" },
            rollNumber: { enabled: true, required: true, label: "" },
            class: { enabled: true, required: true, label: "" }
          }));
        }
      } catch (err) {
        toast.error("Failed to load form details");
        router.push("/dashboard");
      }
    };
    fetchForm();
  }, [id, router]);

  // Handle quiz mode toggle correctly updating context
  const handleQuizModeToggle = () => {
    const nextVal = !isQuizMode;
    setIsQuizMode(nextVal);
    
    // Regenerate context
    if (form) {
      setBuilderContext(getBuilderContext(form.category || "Business", nextVal));
    }
    
    if (nextVal) {
      setCandidateInfoSettings((prev: any) => ({
        ...prev,
        name: { enabled: true, required: true, label: "" },
        class: { enabled: true, required: true, label: "" },
        rollNumber: { enabled: true, required: true, label: "" }
      }));
    }
    toast.success(nextVal ? "Quiz Mode Enabled! Context updated." : "Quiz Mode Disabled");
  };

  // Sensors for dnd-kit
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleSave = async (silent = false) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/forms/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form?.title,
          description: form?.description,
          fields: fields.map((f, i) => ({ ...f, order: i })),
          status,
          themeSettings,
          welcomeScreen,
          successScreen,
          isQuizMode,
          quizSettings,
          candidateInfoSettings,
          headerSettings,
          instructions,
        }),
      });
      if (!res.ok) throw new Error();
      if (!silent) toast.success("Form changes saved successfully!");
    } catch (err) {
      toast.error("Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  const handleSmartBuild = async (e: React.FormEvent) => {
    e.preventDefault();
    setBuildingAssessment(true);
    try {
      const { buildCuratedAssessment } = await import("@/lib/assessment-builder");
      const result = buildCuratedAssessment(
        builderSubject,
        builderDifficulty,
        builderType,
        builderCount
      );

      if (result.warning) {
        toast(result.warning, {
          icon: "⚠️",
          duration: 6000
        });
      }

      if (builderAction === "replace") {
        setFields(result.fields);
      } else {
        const appendedFields = [...fields, ...result.fields].map((f, i) => ({ ...f, order: i }));
        setFields(appendedFields);
      }

      setIsQuizMode(true);
      setQuizSettings(result.quizSettings);
      
      setCandidateInfoSettings((prev: any) => ({
        ...prev,
        name: { enabled: true, required: true, label: "Name" },
        class: { enabled: true, required: true, label: "Class" },
        rollNumber: { enabled: true, required: true, label: "Roll Number" }
      }));

      toast.success("Questions generated successfully!");
      setShowBuilderModal(false);
    } catch (err) {
      toast.error("Failed to generate questions");
    } finally {
      setBuildingAssessment(false);
    }
  };

  const handleShare = () => {
    if (!form?.slug) return;
    const url = `${window.location.origin}/form/${form.slug}`;
    navigator.clipboard.writeText(url)
      .then(() => toast.success("Form link copied to clipboard!"))
      .catch(() => toast.error("Failed to copy link"));
  };

  const addField = (type: FieldType) => {
    const newField: FormField = {
      id: crypto.randomUUID ? crypto.randomUUID() : `field_${Date.now()}`,
      type,
      label: `Untitled ${type.toUpperCase()}`,
      placeholder: `Enter your ${type}...`,
      helpText: "",
      required: false,
      options: ["dropdown", "radio", "checkbox"].includes(type)
        ? [
            { label: "Option 1", value: "option_1" },
            { label: "Option 2", value: "option_2" },
          ]
        : [],
      order: fields.length,
    };

    const updated = [...fields, newField];
    setFields(updated);
    setSelectedFieldId(newField.id);
    toast.success(`Added ${type} field`);
  };

  const duplicateField = (field: FormField) => {
    const duplicated: FormField = {
      ...field,
      id: crypto.randomUUID ? crypto.randomUUID() : `field_${Date.now()}`,
      label: `${field.label} (Copy)`,
      order: fields.length,
    };

    setFields([...fields, duplicated]);
    setSelectedFieldId(duplicated.id);
    toast.success("Field duplicated!");
  };

  const deleteField = (fieldId: string) => {
    setFields((prev) => prev.filter((f) => f.id !== fieldId));
    if (selectedFieldId === fieldId) setSelectedFieldId(null);
    toast.success("Field deleted");
  };

  const updateFieldProperty = (fieldId: string, property: keyof FormField, value: any) => {
    setFields((prev) =>
      prev.map((f) => {
        if (f.id === fieldId) {
          return { ...f, [property]: value };
        }
        return f;
      })
    );
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setFields((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  if (!form || !builderContext) {
    return (
      <div className="flex h-[70vh] items-center justify-center space-x-2">
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <span className="text-sm font-semibold text-muted-foreground">Loading workspace...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] -m-4 sm:-m-8">
      {/* Top action header - Global Workspace Toggle */}
      <div className="shrink-0 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-background border-b border-border p-4 z-20 overflow-x-auto">
        <div className="min-w-0 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
          <div className="flex items-center space-x-2.5 sm:border-r border-border/50 sm:pr-4 max-w-full">
            <h1 className="font-extrabold text-foreground text-lg truncate tracking-tight">{form.title}</h1>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
              status === "published" 
                ? "bg-emerald-500/15 text-emerald-500 border-emerald-500/20" 
                : "bg-amber-500/15 text-amber-500 border-amber-500/20"
            }`}>
              {status}
            </span>
          </div>

          <div className="flex overflow-x-auto bg-muted/40 p-1 rounded-xl border border-border w-full sm:w-auto shrink-0">
            <button
              onClick={() => { setLeftTab("build"); setSelectedFieldId(null); }}
              className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                leftTab === "build" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" /> Build Mode
            </button>
            <button
              onClick={() => setLeftTab("settings")}
              className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                leftTab === "settings" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Settings className="h-3.5 w-3.5" /> Configuration
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto shrink-0">
          {/* Quiz Mode Toggle */}
          <button
            onClick={handleQuizModeToggle}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 cursor-pointer transition ${
              isQuizMode 
                ? "bg-purple-500 hover:bg-purple-600 text-white shadow shadow-purple-500/25" 
                : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border border-border"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>{isQuizMode ? "Quiz Mode: ON" : "Quiz Mode: OFF"}</span>
          </button>

          {/* Smart Build Button */}
          <button
            onClick={() => setShowBuilderModal(true)}
            className="px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 cursor-pointer transition bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20 border border-purple-500/20"
          >
            <Sparkles className="h-3.5 w-3.5 fill-purple-500/20" />
            <span>Smart Build</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 cursor-pointer transition bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 border border-blue-500/20"
            title="Copy Public Link"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>Share</span>
          </button>

          {/* Save Status Toggle */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as FormStatus)}
            className="bg-muted/40 border border-border text-xs px-3 py-1.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary font-semibold text-foreground"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>

          <button
            onClick={() => handleSave()}
            disabled={saving}
            className="flex items-center space-x-1.5 bg-primary text-primary-foreground hover:opacity-90 px-4 py-1.5 rounded-lg text-xs font-bold transition disabled:opacity-50 cursor-pointer shadow-lg shadow-primary/25"
          >
            {saving ? (
              <span className="h-3.5 w-3.5 animate-spin rounded-full border border-primary-foreground border-t-transparent" />
            ) : (
              <Save className="h-3.5 w-3.5" />
            )}
            <span>Save</span>
          </button>
        </div>
      </div>

      {/* Mobile View Toggle */}
      <div className="lg:hidden flex bg-muted/40 p-1 mx-4 sm:mx-8 mt-4 rounded-xl border border-border shrink-0">
        <button
          onClick={() => setMobileView("workspace")}
          className={`flex-1 px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
            mobileView === "workspace" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Settings className="h-4 w-4" /> Builder Workspace
        </button>
        <button
          onClick={() => setMobileView("preview")}
          className={`flex-1 px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
            mobileView === "preview" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <LayoutTemplate className="h-4 w-4" /> Live Preview
        </button>
      </div>

      {/* Main Split Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT PANEL - DYNAMIC WORKSPACE */}
        <div className={`w-full lg:w-[450px] shrink-0 lg:border-r border-border bg-background flex-col z-10 relative lg:overflow-hidden ${
          mobileView === "workspace" ? "flex flex-1 lg:flex-none" : "hidden lg:flex"
        }`}>
          
          <div className="flex-1 relative overflow-hidden flex flex-col">
            {leftTab === "build" ? (
              <AnimatePresence mode="wait">
                {selectedFieldId ? (
                  /* FIELD PROPERTIES INSPECTOR (SLIDE-OVER) */
                  <motion.div
                    key="inspector"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 bg-background z-20 flex flex-col"
                  >
                    <div className="p-4 border-b border-border bg-muted/10 flex items-center shrink-0">
                      <button 
                        onClick={() => setSelectedFieldId(null)} 
                        className="flex items-center text-xs font-extrabold text-muted-foreground hover:text-foreground transition cursor-pointer"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Form Structure
                      </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
                      {fields.filter((f) => f.id === selectedFieldId).map((field) => (
                        <div key={field.id} className="space-y-5 text-xs">
                          <div>
                            <label className="block font-bold text-muted-foreground uppercase tracking-wider text-[10px]">Field Label</label>
                            <input
                              type="text"
                              value={field.label}
                              onChange={(e) => updateFieldProperty(field.id, "label", e.target.value)}
                              className="mt-1.5 block w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary text-xs"
                            />
                          </div>

                          {!["rating", "file", "date", "time"].includes(field.type) && (
                            <div>
                              <label className="block font-bold text-muted-foreground uppercase tracking-wider text-[10px]">Placeholder text</label>
                              <input
                                type="text"
                                value={field.placeholder || ""}
                                onChange={(e) => updateFieldProperty(field.id, "placeholder", e.target.value)}
                                className="mt-1.5 block w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary text-xs"
                              />
                            </div>
                          )}

                          <div>
                            <label className="block font-bold text-muted-foreground uppercase tracking-wider text-[10px]">Help Guide / Tooltip</label>
                            <input
                              type="text"
                              value={field.helpText || ""}
                              onChange={(e) => updateFieldProperty(field.id, "helpText", e.target.value)}
                              className="mt-1.5 block w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary text-xs"
                            />
                          </div>

                          <div className="flex items-center justify-between border-t border-b border-border/50 py-3">
                            <div>
                              <p className="font-bold text-foreground text-[11px]">Required Validation</p>
                              <p className="text-[9px] text-muted-foreground mt-0.5">Respondents must complete this</p>
                            </div>
                            <button
                              onClick={() => updateFieldProperty(field.id, "required", !field.required)}
                              className="text-muted-foreground hover:text-foreground cursor-pointer"
                            >
                              {field.required ? <ToggleRight className="h-6 w-6 text-primary" /> : <ToggleLeft className="h-6 w-6" />}
                            </button>
                          </div>

                          {["dropdown", "radio", "checkbox"].includes(field.type) && (
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <label className="block font-bold text-muted-foreground uppercase tracking-wider text-[10px]">Select Options</label>
                                <button
                                  onClick={() => {
                                    const opts = field.options || [];
                                    const nextVal = `option_${opts.length + 1}`;
                                    updateFieldProperty(field.id, "options", [...opts, { label: `Option ${opts.length + 1}`, value: nextVal }]);
                                  }}
                                  className="text-primary hover:underline text-[10px] font-bold"
                                >
                                  + Add Option
                                </button>
                              </div>

                              <div className="space-y-2 max-h-[30vh] overflow-y-auto pr-1 custom-scrollbar">
                                {(field.options || []).map((opt, oIdx) => (
                                  <div key={oIdx} className="flex items-center space-x-2">
                                    <input
                                      type="text"
                                      value={opt.label}
                                      onChange={(e) => {
                                        const list = [...(field.options || [])];
                                        list[oIdx] = { label: e.target.value, value: e.target.value.toLowerCase().replace(/\s+/g, "_") };
                                        updateFieldProperty(field.id, "options", list);
                                      }}
                                      className="block w-full rounded border border-border bg-background px-2.5 py-1.5 text-foreground text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                                    />
                                    <button
                                      onClick={() => {
                                        const list = (field.options || []).filter((_, i) => i !== oIdx);
                                        updateFieldProperty(field.id, "options", list);
                                      }}
                                      className="p-1.5 hover:bg-muted text-destructive rounded cursor-pointer transition"
                                    >
                                      <MinusCircle className="h-4 w-4" />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {isQuizMode && (
                            <div className="space-y-4 pt-3 border-t border-border/50 bg-purple-500/5 -mx-5 px-5 pb-5">
                              <p className="font-extrabold text-purple-600 dark:text-purple-400 text-[10px] uppercase tracking-wider flex items-center gap-1.5 mt-2">
                                <Sparkles className="h-3.5 w-3.5" /> Quiz Properties
                              </p>
                              <div>
                                <label className="block font-bold text-muted-foreground uppercase tracking-wider text-[10px]">Points / Marks</label>
                                <input
                                  type="number"
                                  min={1}
                                  value={field.marks || 1}
                                  onChange={(e) => updateFieldProperty(field.id, "marks", parseInt(e.target.value) || 1)}
                                  className="mt-1.5 block w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  /* BUILD STRUCTURE VIEW */
                  <motion.div
                    key="structure"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 overflow-y-auto p-4 custom-scrollbar space-y-6"
                  >
                    {/* Presets Row */}
                    <div>
                      <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2.5">Add Elements</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {FIELD_PRESETS.map((preset) => (
                          <button
                            key={preset.type}
                            onClick={() => addField(preset.type)}
                            className="flex items-center space-x-2 px-2.5 py-1.5 rounded-lg border border-border hover:border-primary/40 bg-muted/20 hover:bg-muted/50 text-xs text-foreground font-semibold text-left transition cursor-pointer"
                          >
                            <span className="text-base select-none">{preset.icon}</span>
                            <span className="truncate text-[11px]">{preset.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <hr className="border-border/50" />

                    {/* Canvas List */}
                    <div>
                      <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3 flex justify-between">
                        <span>Form Structure</span>
                        <span>{fields.length} items</span>
                      </h3>
                      
                      {fields.length === 0 ? (
                        <div className="p-8 text-center border border-dashed border-border rounded-xl flex flex-col items-center justify-center space-y-2 bg-muted/10">
                          <LayoutGrid className="h-6 w-6 text-muted-foreground/60" />
                          <p className="font-bold text-foreground text-xs">No fields yet</p>
                          <p className="text-[10px] text-muted-foreground">Click elements above to add them.</p>
                        </div>
                      ) : (
                        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                          <SortableContext items={fields.map((f) => f.id)} strategy={verticalListSortingStrategy}>
                            <div className="space-y-2 pb-12">
                              {fields.map((field) => (
                                <SortableFieldItem
                                  key={field.id}
                                  field={field}
                                  selected={selectedFieldId === field.id}
                                  onSelect={() => setSelectedFieldId(field.id)}
                                  onDelete={() => deleteField(field.id)}
                                  onDuplicate={() => duplicateField(field)}
                                />
                              ))}
                            </div>
                          </SortableContext>
                        </DndContext>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ) : (
              /* CONFIGURATION MODE (ACCORDIONS) */
              <div className="absolute inset-0 overflow-y-auto p-4 custom-scrollbar space-y-3">
                <Accordion 
                  id="general" 
                  title="General Settings" 
                  icon={FileText} 
                  expanded={expandedConfig} 
                  onToggle={setExpandedConfig}
                >
                  <p className="text-[10px] text-muted-foreground mb-4">Set the name and description of this form.</p>
                  <div className="space-y-3 p-3 border border-border/50 rounded-xl bg-background/50 shadow-inner">
                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground">Form Title</label>
                      <input
                        type="text"
                        value={form?.title || ""}
                        onChange={(e) => setForm((prev) => prev ? { ...prev, title: e.target.value } : null)}
                        className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-1.5 text-foreground text-xs focus:ring-1 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground">Form Description</label>
                      <textarea
                        value={form?.description || ""}
                        onChange={(e) => setForm((prev) => prev ? { ...prev, description: e.target.value } : null)}
                        rows={3}
                        className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-1.5 text-foreground text-xs focus:ring-1 focus:ring-primary focus:outline-none custom-scrollbar"
                      />
                    </div>
                  </div>
                </Accordion>

                <Accordion 
                  id="context" 
                  title={builderContext.infoSectionTitle} 
                  icon={FileText} 
                  expanded={expandedConfig} 
                  onToggle={setExpandedConfig}
                >
                  <p className="text-[10px] text-muted-foreground mb-4">Collect context details before the form begins.</p>
                  <div className="space-y-3 p-3 border border-border/50 rounded-xl bg-background/50 shadow-inner">
                    {Object.keys(candidateInfoSettings).map((key) => {
                      if (key === "customFields") return null;
                      const field = candidateInfoSettings[key];
                      const defaultLabel = (builderContext.defaultLabels as any)[key] || key;
                      
                      return (
                        <div key={key} className="border-b border-border/40 pb-2 last:border-0 last:pb-0 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-foreground text-[10px]">{defaultLabel}</span>
                            <div className="flex items-center space-x-1.5">
                              <button
                                type="button"
                                onClick={() => {
                                  setCandidateInfoSettings((prev: any) => ({
                                    ...prev,
                                    [key]: { ...prev[key], enabled: !prev[key].enabled }
                                  }));
                                }}
                                className={`text-[9px] font-bold px-1.5 py-0.5 rounded border transition ${
                                  field.enabled ? "bg-primary/10 text-primary border-primary/20" : "border-border text-muted-foreground hover:bg-muted"
                                }`}
                              >
                                {field.enabled ? "Enabled" : "Disabled"}
                              </button>
                              {field.enabled && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    setCandidateInfoSettings((prev: any) => ({
                                      ...prev,
                                      [key]: { ...prev[key], required: !prev[key].required }
                                    }));
                                  }}
                                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded border transition ${
                                    field.required ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:bg-muted"
                                  }`}
                                >
                                  {field.required ? "Required" : "Optional"}
                                </button>
                              )}
                            </div>
                          </div>
                          {field.enabled && (
                            <div>
                              <input
                                type="text"
                                value={field.label || ""}
                                onChange={(e) => {
                                  setCandidateInfoSettings((prev: any) => ({
                                    ...prev,
                                    [key]: { ...prev[key], label: e.target.value }
                                  }));
                                }}
                                placeholder={`Custom label (Default: ${defaultLabel})`}
                                className="w-full text-[10px] px-2 py-1.5 rounded border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary mt-1"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {/* Custom Fields List */}
                    <div className="pt-2 border-t border-border/40">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-extrabold text-foreground text-[10px]">Custom Data Fields</span>
                        <button
                          type="button"
                          onClick={() => {
                            const name = prompt("Enter custom field name (e.g. Department ID, Voucher Code):");
                            if (!name || !name.trim()) return;
                            const newId = `custom_${Date.now()}`;
                            setCandidateInfoSettings((prev: any) => ({
                              ...prev,
                              customFields: [
                                ...(prev.customFields || []),
                                { id: newId, label: name.trim(), required: true, enabled: true }
                              ]
                            }));
                          }}
                          className="text-[9px] font-black text-primary hover:underline cursor-pointer"
                        >
                          + Add Field
                        </button>
                      </div>
                      <div className="space-y-2">
                        {(candidateInfoSettings.customFields || []).map((field: any, cIdx: number) => (
                          <div key={field.id} className="p-2 border border-border/60 rounded bg-background/80 shadow-sm space-y-1.5 text-[10px] text-foreground">
                            <div className="flex items-center justify-between gap-1">
                              <input
                                type="text"
                                value={field.label}
                                onChange={(e) => {
                                  const list = [...(candidateInfoSettings.customFields || [])];
                                  list[cIdx] = { ...list[cIdx], label: e.target.value };
                                  setCandidateInfoSettings((prev: any) => ({ ...prev, customFields: list }));
                                }}
                                className="bg-transparent border-b border-border/60 focus:border-primary focus:outline-none w-1/2 font-bold text-foreground py-0.5"
                              />
                              <div className="flex items-center space-x-1">
                                <button
                                  type="button"
                                  onClick={() => {
                                    const list = [...(candidateInfoSettings.customFields || [])];
                                    list[cIdx] = { ...list[cIdx], required: !list[cIdx].required };
                                    setCandidateInfoSettings((prev: any) => ({ ...prev, customFields: list }));
                                  }}
                                  className={`px-1.5 py-0.5 rounded border text-[9px] font-black transition ${
                                    field.required ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground"
                                  }`}
                                >
                                  {field.required ? "Req" : "Opt"}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const list = (candidateInfoSettings.customFields || []).filter((f: any) => f.id !== field.id);
                                    setCandidateInfoSettings((prev: any) => ({ ...prev, customFields: list }));
                                  }}
                                  className="text-red-500 font-extrabold hover:underline"
                                >
                                  Del
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Accordion>

                <Accordion 
                  id="header" 
                  title={builderContext.headerSectionTitle} 
                  icon={LayoutTemplate} 
                  expanded={expandedConfig} 
                  onToggle={setExpandedConfig}
                >
                  <p className="text-[10px] text-muted-foreground mb-4">Customize branding and visual identity.</p>
                  <div className="space-y-3 p-3 border border-border/50 rounded-xl bg-background/50 shadow-inner">
                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground">{builderContext.defaultLabels.institutionName}</label>
                      <input
                        type="text"
                        value={headerSettings?.institutionName || ""}
                        onChange={(e) => setHeaderSettings((prev: any) => ({ ...prev, institutionName: e.target.value }))}
                        placeholder={`e.g. Acme Corp`}
                        className="w-full text-[10px] px-2.5 py-1.5 rounded border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground">Form Title Override (Optional)</label>
                      <input
                        type="text"
                        value={headerSettings?.title || ""}
                        onChange={(e) => setHeaderSettings((prev: any) => ({ ...prev, title: e.target.value }))}
                        placeholder="e.g. 2026 Registration"
                        className="w-full text-[10px] px-2.5 py-1.5 rounded border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary mt-1"
                      />
                    </div>

                    <div className="space-y-1.5 mt-2 pt-2 border-t border-border/40">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-muted-foreground">Show Logo</span>
                        <button
                          type="button"
                          onClick={() => setHeaderSettings((prev: any) => ({ ...prev, showLogo: !prev.showLogo }))}
                          className="text-muted-foreground hover:text-foreground cursor-pointer"
                        >
                          {headerSettings?.showLogo ? <ToggleRight className="h-6 w-6 text-primary" /> : <ToggleLeft className="h-6 w-6" />}
                        </button>
                      </div>
                      
                      {headerSettings?.showLogo && (
                        <div className="p-2 border border-dashed border-border rounded-lg bg-background/50 mt-2">
                          {headerSettings?.logoUrl ? (
                            <div className="relative inline-block w-full">
                              <img src={headerSettings.logoUrl} alt="Logo" className="h-10 mx-auto object-contain" />
                              <button
                                type="button"
                                onClick={() => setHeaderSettings((prev: any) => ({ ...prev, logoUrl: "" }))}
                                className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-4 w-4 text-[10px] flex items-center justify-center font-bold"
                              >
                                ✕
                              </button>
                            </div>
                          ) : (
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const reader = new FileReader();
                                  reader.onload = (event) => setHeaderSettings((prev: any) => ({ ...prev, logoUrl: event.target?.result as string }));
                                  reader.readAsDataURL(file);
                                }
                              }}
                              className="block w-full text-[9px] file:mr-2 file:py-1 file:px-2.5 file:rounded file:border-0 file:bg-primary/10 file:text-primary file:hover:bg-primary/25 cursor-pointer"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Accordion>

                <Accordion 
                  id="theme" 
                  title="Theme & Appearance" 
                  icon={Palette} 
                  expanded={expandedConfig} 
                  onToggle={setExpandedConfig}
                >
                  <div className="grid grid-cols-2 gap-4 p-1">
                    <div>
                      <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Primary Accent</label>
                      <div className="flex items-center space-x-2 mt-1 border border-border p-1 rounded-lg bg-background shadow-inner">
                        <input type="color" value={themeSettings.primaryColor} onChange={(e) => setThemeSettings({ ...themeSettings, primaryColor: e.target.value })} className="w-6 h-6 rounded cursor-pointer bg-transparent border-none p-0" />
                        <span className="font-mono text-[9px] font-bold opacity-70">{themeSettings.primaryColor}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Background</label>
                      <div className="flex items-center space-x-2 mt-1 border border-border p-1 rounded-lg bg-background shadow-inner">
                        <input type="color" value={themeSettings.backgroundColor} onChange={(e) => setThemeSettings({ ...themeSettings, backgroundColor: e.target.value })} className="w-6 h-6 rounded cursor-pointer bg-transparent border-none p-0" />
                        <span className="font-mono text-[9px] font-bold opacity-70">{themeSettings.backgroundColor}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Card Color</label>
                      <div className="flex items-center space-x-2 mt-1 border border-border p-1 rounded-lg bg-background shadow-inner">
                        <input type="color" value={themeSettings.cardColor} onChange={(e) => setThemeSettings({ ...themeSettings, cardColor: e.target.value })} className="w-6 h-6 rounded cursor-pointer bg-transparent border-none p-0" />
                        <span className="font-mono text-[9px] font-bold opacity-70">{themeSettings.cardColor}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Text Color</label>
                      <div className="flex items-center space-x-2 mt-1 border border-border p-1 rounded-lg bg-background shadow-inner">
                        <input type="color" value={themeSettings.textColor} onChange={(e) => setThemeSettings({ ...themeSettings, textColor: e.target.value })} className="w-6 h-6 rounded cursor-pointer bg-transparent border-none p-0" />
                        <span className="font-mono text-[9px] font-bold opacity-70">{themeSettings.textColor}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4 p-1">
                    <div>
                      <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Typography</label>
                      <select value={themeSettings.font} onChange={(e) => setThemeSettings({ ...themeSettings, font: e.target.value })} className="mt-1 block w-full rounded-lg border border-border bg-background px-2 py-2 text-xs font-semibold shadow-inner focus:ring-1 focus:ring-primary focus:outline-none">
                        <option value="Inter">Inter (Sans)</option>
                        <option value="Playfair Display">Playfair (Serif)</option>
                        <option value="Space Mono">Space Mono</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Corner Radius</label>
                      <select value={themeSettings.borderRadius} onChange={(e) => setThemeSettings({ ...themeSettings, borderRadius: e.target.value })} className="mt-1 block w-full rounded-lg border border-border bg-background px-2 py-2 text-xs font-semibold shadow-inner focus:ring-1 focus:ring-primary focus:outline-none">
                        <option value="0px">Sharp (0px)</option>
                        <option value="8px">Small (8px)</option>
                        <option value="16px">Medium (16px)</option>
                        <option value="24px">Large (24px)</option>
                      </select>
                    </div>
                  </div>
                </Accordion>

                <Accordion 
                  id="submission" 
                  title="Submission Screens" 
                  icon={Sparkles} 
                  expanded={expandedConfig} 
                  onToggle={setExpandedConfig}
                >
                  <p className="text-[10px] text-muted-foreground mb-4">Configure what happens after submission.</p>
                  <div className="space-y-3 p-3 border border-border/50 rounded-xl bg-background/50 shadow-inner">
                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground">Success Message Title</label>
                      <input
                        type="text"
                        value={successScreen.title}
                        onChange={(e) => setSuccessScreen({ ...successScreen, title: e.target.value })}
                        className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-1.5 text-foreground text-xs focus:ring-1 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground">Success Description</label>
                      <textarea
                        value={successScreen.description}
                        onChange={(e) => setSuccessScreen({ ...successScreen, description: e.target.value })}
                        rows={2}
                        className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-1.5 text-foreground text-xs focus:ring-1 focus:ring-primary focus:outline-none custom-scrollbar"
                      />
                    </div>
                  </div>
                </Accordion>

                {isQuizMode && (
                  <Accordion 
                    id="quizSettings" 
                    title="Quiz Settings" 
                    icon={Clock} 
                    expanded={expandedConfig} 
                    onToggle={setExpandedConfig}
                  >
                    <p className="text-[10px] text-muted-foreground mb-4">Set time limits and quiz rules.</p>
                    <div className="space-y-3 p-3 border border-border/50 rounded-xl bg-background/50 shadow-inner">
                      <div>
                        <label className="block text-[10px] font-bold text-muted-foreground">Time Limit (in minutes)</label>
                        <input
                          type="number"
                          min={0}
                          value={quizSettings.timeLimit || 0}
                          onChange={(e) => setQuizSettings({ ...quizSettings, timeLimit: parseInt(e.target.value) || 0 })}
                          className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-1.5 text-foreground text-xs focus:ring-1 focus:ring-primary focus:outline-none"
                        />
                        <p className="text-[9px] text-muted-foreground mt-1">Set to 0 for no time limit.</p>
                      </div>
                    </div>
                  </Accordion>
                )}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANEL - REAL TIME LIVE PREVIEW */}
        <div className={`bg-muted/20 relative overflow-hidden flex-col ${
          mobileView === "preview" ? "flex flex-1" : "hidden lg:flex lg:flex-1"
        }`}>
          <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-background/80 backdrop-blur-md rounded-full border border-border shadow-sm text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Live Preview
          </div>

          <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
            <div
              style={{
                backgroundColor: themeSettings.backgroundColor,
                fontFamily: themeSettings.font,
                color: themeSettings.textColor,
              }}
              className="w-full max-w-2xl mx-auto min-h-full rounded-2xl border border-border shadow-sm relative overflow-hidden transition-all duration-300 flex flex-col items-center py-12"
            >
              <div
                style={{
                  backgroundColor: themeSettings.cardColor,
                  borderRadius: themeSettings.borderRadius,
                  color: themeSettings.textColor,
                }}
                className="w-[90%] max-w-xl p-8 shadow-xl border border-border/10 space-y-8 my-auto"
              >
                {/* Live Preview Custom Header */}
                {headerSettings?.institutionName && (
                  <div className="flex flex-col items-center text-center space-y-1 mb-6 border-b border-border/20 pb-6">
                    {headerSettings.showLogo && headerSettings.logoUrl && (
                      <img src={headerSettings.logoUrl} alt="Logo" className="h-14 max-w-[200px] object-contain mb-2" />
                    )}
                    <h2 className="text-[11px] font-black uppercase tracking-widest opacity-60">{headerSettings.institutionName}</h2>
                    {(headerSettings.title || form.title) && <h1 className="text-xl font-black text-foreground mt-1 tracking-tight">{headerSettings.title || form.title}</h1>}
                    {headerSettings.subtitle && <p className="text-xs text-muted-foreground mt-1 opacity-80">{headerSettings.subtitle}</p>}
                  </div>
                )}

                {!headerSettings?.institutionName && (
                  <div className="space-y-2 mb-6">
                    <h1 className="text-2xl font-black tracking-tight" style={{ color: themeSettings.textColor }}>
                      {form.title}
                    </h1>
                    {form.description && <p className="text-sm opacity-70 leading-relaxed">{form.description}</p>}
                  </div>
                )}

                {instructions?.show && (
                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-left space-y-3 text-sm">
                    <p className="font-bold text-primary uppercase tracking-wider text-[10px]">Information & Guidelines</p>
                    {instructions.customNotes && (
                      <p className="opacity-80 leading-relaxed text-xs">{instructions.customNotes}</p>
                    )}
                  </div>
                )}

                {/* Live Preview Context Info Card */}
                {(Object.keys(candidateInfoSettings).some(k => k !== "customFields" && candidateInfoSettings[k]?.enabled) || (candidateInfoSettings.customFields && candidateInfoSettings.customFields.length > 0)) && (
                  <div className="bg-muted/5 border border-border/40 rounded-xl p-5 space-y-4 text-left">
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-foreground opacity-60">{builderContext.infoSectionTitle}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {Object.keys(candidateInfoSettings).map(key => {
                        if (key === "customFields") return null;
                        const field = candidateInfoSettings[key];
                        if (!field.enabled) return null;
                        const label = field.label || (builderContext.defaultLabels as any)[key] || key;
                        return (
                          <div key={key} className="space-y-1.5">
                            <label className="block font-bold text-[11px] opacity-80">
                              {label} {field.required && <span className="text-red-500">*</span>}
                            </label>
                            <input
                              type="text"
                              disabled
                              placeholder={`Enter ${label.toLowerCase()}...`}
                              className="block w-full rounded border border-border/40 bg-background/30 px-3 py-2 text-foreground focus:outline-none text-xs"
                            />
                          </div>
                        );
                      })}
                      {(candidateInfoSettings.customFields || []).map((field: any) => (
                        <div key={field.id} className="space-y-1.5">
                          <label className="block font-bold text-[11px] opacity-80">
                            {field.label} {field.required && <span className="text-red-500">*</span>}
                          </label>
                          <input
                            type="text"
                            disabled
                            placeholder={`Enter ${field.label.toLowerCase()}...`}
                            className="block w-full rounded border border-border/40 bg-background/30 px-3 py-2 text-foreground focus:outline-none text-xs"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-6 pt-4">
                  {fields.length === 0 ? (
                    <div className="text-center py-8 opacity-40 italic text-sm">
                      Select elements from the Builder to start creating your form.
                    </div>
                  ) : (
                    fields.map((field) => (
                      <div key={field.id} className="space-y-2 relative group">
                        <label className="block text-sm font-bold">
                          {field.label}
                          {field.required && <span className="text-red-500 ml-1">*</span>}
                        </label>
                        {field.helpText && (
                          <p className="text-[10px] opacity-60 -mt-1 mb-2">{field.helpText}</p>
                        )}

                        {field.type === "text" && <input type="text" disabled placeholder={field.placeholder} className="block w-full rounded border border-border/40 bg-background/30 px-3 py-2.5 text-xs opacity-70" />}
                        {field.type === "textarea" && <textarea disabled placeholder={field.placeholder} rows={3} className="block w-full rounded border border-border/40 bg-background/30 px-3 py-2.5 text-xs opacity-70" />}
                        {field.type === "dropdown" && (
                          <select disabled className="block w-full rounded border border-border/40 bg-background/30 px-3 py-2.5 text-xs opacity-70">
                            <option value="">Select option...</option>
                            {(field.options || []).map((o) => <option key={o.value}>{o.label}</option>)}
                          </select>
                        )}
                        {field.type === "radio" && (
                          <div className="space-y-2 mt-2">
                            {(field.options || []).map((o) => (
                              <label key={o.value} className="flex items-center space-x-2.5 opacity-70">
                                <input type="radio" disabled className="text-primary h-4 w-4" />
                                <span className="text-sm font-medium">{o.label}</span>
                              </label>
                            ))}
                          </div>
                        )}
                        {field.type === "checkbox" && (
                          <div className="space-y-2 mt-2">
                            {(field.options || []).map((o) => (
                              <label key={o.value} className="flex items-center space-x-2.5 opacity-70">
                                <input type="checkbox" disabled className="rounded text-primary h-4 w-4" />
                                <span className="text-sm font-medium">{o.label}</span>
                              </label>
                            ))}
                          </div>
                        )}
                        {field.type === "rating" && (
                          <div className="flex items-center space-x-2 mt-1 text-2xl text-yellow-500 opacity-70">
                            {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
                          </div>
                        )}
                        {/* More basic fields */}
                        {["email", "number", "phone", "date", "time", "url", "password"].includes(field.type) && (
                          <input type="text" disabled placeholder={field.placeholder || "Input"} className="block w-full rounded border border-border/40 bg-background/30 px-3 py-2.5 text-xs opacity-70" />
                        )}
                        {field.type === "file" && (
                          <div className="block w-full rounded border border-dashed border-border/40 bg-background/30 px-3 py-4 text-center text-xs opacity-70">
                            Drop files here or click to upload
                          </div>
                        )}
                      </div>
                    ))
                  )}

                  <div className="pt-6 border-t border-border/20 mt-8">
                    <button
                      type="button"
                      disabled
                      style={{
                        backgroundColor: themeSettings.primaryColor,
                        color: themeSettings.buttonTextColor,
                        borderRadius: themeSettings.borderRadius,
                      }}
                      className="px-8 py-3.5 font-bold text-sm shadow-md opacity-60 w-full sm:w-auto text-center"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Builder Modal */}
      <AnimatePresence>
        {showBuilderModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-card w-full max-w-lg rounded-2xl shadow-2xl border border-border overflow-hidden"
            >
              <div className="p-6 border-b border-border bg-muted/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-primary">
                    <Sparkles className="h-6 w-6" />
                    <h2 className="text-lg font-black tracking-tight">Smart Assessment Builder</h2>
                  </div>
                  <button onClick={() => setShowBuilderModal(false)} className="text-muted-foreground hover:text-foreground">
                    ✕
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mt-2 font-medium">Dynamically update or add questions to your current assessment.</p>
              </div>

              <form onSubmit={handleSmartBuild} className="p-6 space-y-5 bg-background">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2 col-span-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Subject</label>
                    <select
                      value={builderSubject}
                      onChange={(e) => setBuilderSubject(e.target.value)}
                      className="w-full bg-muted/40 border border-border px-3 py-2.5 rounded-xl text-sm font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="mathematics">Mathematics</option>
                      <option value="science">Science</option>
                      <option value="english">English Literature</option>
                      <option value="history">History</option>
                      <option value="geography">Geography</option>
                      <option value="computer science">Computer Science</option>
                      <option value="dbms">DBMS</option>
                      <option value="java">Java Programming</option>
                      <option value="python">Python</option>
                      <option value="data structures">Data Structures</option>
                      <option value="operating systems">Operating Systems</option>
                      <option value="computer networks">Computer Networks</option>
                      <option value="cyber security">Cyber Security</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Difficulty</label>
                    <select
                      value={builderDifficulty}
                      onChange={(e) => setBuilderDifficulty(e.target.value)}
                      className="w-full bg-muted/40 border border-border px-3 py-2.5 rounded-xl text-sm font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="mixed">Mixed</option>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Question Type</label>
                    <select
                      value={builderType}
                      onChange={(e) => setBuilderType(e.target.value)}
                      className="w-full bg-muted/40 border border-border px-3 py-2.5 rounded-xl text-sm font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="mixed">Mixed Types</option>
                      <option value="mcq">Multiple Choice</option>
                      <option value="tf">True / False</option>
                      <option value="sa">Short Answer</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Number of Questions</label>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={builderCount}
                      onChange={(e) => setBuilderCount(parseInt(e.target.value) || 10)}
                      className="w-full bg-muted/40 border border-border px-3 py-2.5 rounded-xl text-sm font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Action</label>
                    <select
                      value={builderAction}
                      onChange={(e) => setBuilderAction(e.target.value as any)}
                      className="w-full bg-muted/40 border border-border px-3 py-2.5 rounded-xl text-sm font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="replace">Replace Existing Canvas</option>
                      <option value="append">Append to Canvas</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowBuilderModal(false)}
                    className="px-4 py-2 font-bold text-sm text-muted-foreground hover:text-foreground transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={buildingAssessment}
                    className="flex items-center space-x-2 bg-primary text-primary-foreground hover:opacity-90 px-6 py-2 rounded-xl text-sm font-bold transition disabled:opacity-50 cursor-pointer shadow-lg shadow-primary/25"
                  >
                    {buildingAssessment ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    ) : (
                      <Sparkles className="h-4 w-4" />
                    )}
                    <span>{buildingAssessment ? "Generating..." : "Generate & Apply"}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Reusable Accordion Component for Configuration Workspace
function Accordion({ title, icon: Icon, id, expanded, onToggle, children }: any) {
  const isOpen = expanded === id;
  return (
    <div className="border border-border/80 rounded-xl overflow-hidden mb-3 bg-muted/5 shadow-sm">
      <button 
        onClick={() => onToggle(isOpen ? null : id)}
        className={`w-full flex items-center justify-between p-3.5 transition-colors cursor-pointer ${
          isOpen ? "bg-muted/40 border-b border-border/50" : "bg-background hover:bg-muted/20"
        }`}
      >
        <div className="flex items-center gap-2.5 font-bold text-xs text-foreground">
          <div className={`p-1.5 rounded-lg ${isOpen ? "bg-primary/10" : "bg-muted"}`}>
            <Icon className={`h-3.5 w-3.5 ${isOpen ? "text-primary" : "text-muted-foreground"}`} />
          </div>
          {title}
        </div>
        {isOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-background/50">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Draggable Sortable Item wrapper
interface FieldItemProps {
  field: FormField;
  selected: boolean;
  onSelect: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
}

function SortableFieldItem({ field, selected, onSelect, onDelete, onDuplicate }: FieldItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`glass border rounded-xl flex items-center justify-between gap-3 p-3 transition-all select-none ${
        selected ? "border-primary bg-primary/10 shadow-sm ring-1 ring-primary/30" : "border-border hover:border-primary/30 bg-background"
      }`}
    >
      <div className="flex items-center space-x-2.5 min-w-0 flex-1">
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground p-1 shrink-0"
        >
          <GripVertical className="h-4 w-4" />
        </button>

        <div className="min-w-0 cursor-pointer flex-1 py-1" onClick={onSelect}>
          <div className="flex items-center space-x-1.5">
            <span className="font-bold text-foreground text-xs truncate">{field.label}</span>
            {field.required && <span className="text-[10px] font-black text-red-500">*</span>}
          </div>
          <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider block mt-0.5">{field.type}</span>
        </div>
      </div>

      <div className="flex items-center space-x-1 shrink-0">
        <button onClick={onDuplicate} className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition">
          <Copy className="h-3.5 w-3.5" />
        </button>
        <button onClick={onDelete} className="p-1.5 rounded hover:bg-red-500/10 text-muted-foreground hover:text-red-500 cursor-pointer transition">
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
