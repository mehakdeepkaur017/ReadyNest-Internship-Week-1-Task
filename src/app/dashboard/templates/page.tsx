"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { 
  Sparkles, MessageSquare, Calendar, Star, Briefcase, 
  ClipboardList, Headphones, Target, FileText, CheckCircle2,
  Search, X, LayoutTemplate, Building2, Users, ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { templates, templateCategories, getFeaturedTemplates, getNewTemplates } from "@/lib/templates";
import { Template } from "@/lib/types";

const COLLECTIONS_DATA = [
  {
    id: "business",
    title: "Business Operations",
    icon: <Briefcase className="h-6 w-6" />,
    description: "Streamline your company's core operations with standardized forms and automated intake processes.",
    useCases: ["Client Onboarding", "Lead Generation", "Vendor Registration", "Project Intake"],
    colorClass: "from-blue-600 to-indigo-600",
    bgIcon: <Building2 className="h-48 w-48 text-white/5 absolute -right-6 -bottom-6 transform rotate-12" />
  },
  {
    id: "hr",
    title: "HR & Recruitment",
    icon: <Users className="h-6 w-6" />,
    description: "Manage the entire employee lifecycle from initial application to offboarding with professional workflows.",
    useCases: ["Job Applications", "Employee Onboarding", "Leave Requests", "Performance Reviews"],
    colorClass: "from-emerald-500 to-teal-600",
    bgIcon: <Users className="h-48 w-48 text-white/5 absolute -right-6 -bottom-6 transform -rotate-12" />
  },
  {
    id: "education",
    title: "Education",
    icon: <FileText className="h-6 w-6" />,
    description: "Tools for institutions to manage student data, enrollments, and academic assessments smoothly.",
    useCases: ["Student Registration", "Course Enrollment", "Assignment Submission", "Examinations"],
    colorClass: "from-purple-500 to-fuchsia-600",
    bgIcon: <FileText className="h-48 w-48 text-white/5 absolute -right-6 -bottom-6 transform rotate-12" />
  },
  {
    id: "it",
    title: "IT & Internal Operations",
    icon: <Headphones className="h-6 w-6" />,
    description: "Maintain hardware, software, and access securely with structured internal ticketing systems.",
    useCases: ["Helpdesk Tickets", "Bug Reports", "Access Requests", "Asset Requests"],
    colorClass: "from-slate-700 to-slate-900",
    bgIcon: <Headphones className="h-48 w-48 text-white/5 absolute -right-6 -bottom-6 transform -rotate-12" />
  }
];

const SvgBackground = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#gridPattern)" />
  </svg>
);

const CollectionHeroCard = ({ collection, templateCount, onExplore }: any) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-border/20 shadow-xl group cursor-pointer flex flex-col bg-gradient-to-br ${collection.colorClass} transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] min-h-[360px]`} onClick={onExplore}>
      <SvgBackground />
      {collection.bgIcon}
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
      
      {/* Content wrapper with glassmorphism */}
      <div className="relative z-10 p-1 bg-gradient-to-b from-transparent to-black/20 h-full flex flex-col">
        <div className="bg-background/95 backdrop-blur-md h-full rounded-[20px] p-6 flex flex-col transition-colors group-hover:bg-background/90">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-primary/10 text-primary rounded-2xl shadow-inner border border-primary/20">
              {collection.icon}
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider bg-foreground/5 text-foreground px-3 py-1 rounded-full border border-border/50">
              {templateCount} Templates
            </span>
          </div>

          <h3 className="text-xl font-black text-foreground tracking-tight">{collection.title}</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed h-10 line-clamp-2">
            {collection.description}
          </p>

          <div className="mt-6 flex-1">
            <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider mb-3">Popular Workflows</p>
            <ul className="space-y-2">
              {collection.useCases.map((useCase: string) => (
                <li key={useCase} className="flex items-center text-xs font-semibold text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-2 text-primary/70" />
                  {useCase}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-border/40">
            <button className="flex items-center text-sm font-bold text-primary group-hover:text-primary/80 transition-colors">
              Explore Templates <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dynamic Miniature Preview Component
const TemplateMiniPreview = ({ template }: { template: Template }) => {
  return (
    <div className={`h-40 w-full relative overflow-hidden bg-gradient-to-br ${template.coverColor} p-4 pt-6 group-hover:opacity-100 opacity-95 transition-opacity`}>
      <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
      
      {/* Miniature mock form window */}
      <div className="w-[85%] mx-auto bg-background/95 backdrop-blur-md rounded-t-xl shadow-2xl border border-white/20 h-full p-3 flex flex-col gap-2 transform group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-500 origin-bottom relative z-10 overflow-hidden">
        
        {/* Mock Header with real tiny text */}
        <div className="space-y-0.5 mb-1 pb-1.5 border-b border-border/40 shrink-0">
          <div className="text-[9px] font-black tracking-tight text-foreground line-clamp-1">{template.title}</div>
          <div className="text-[6px] text-muted-foreground line-clamp-1 leading-tight">{template.description}</div>
        </div>

        {/* Mock Fields with real tiny labels and pseudo-inputs */}
        <div className="flex-1 space-y-2 overflow-hidden relative">
          {/* Gradient fade out at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background/95 to-transparent z-10 pointer-events-none"></div>
          
          {template.fields.slice(0, 3).map((f, i) => (
            <div key={i} className="space-y-0.5">
              <div className="text-[7px] font-bold text-foreground/80 flex items-center leading-none">
                {f.label} {f.required && <span className="text-red-500 ml-[1px]">*</span>}
              </div>
              
              {f.type === "textarea" ? (
                <div className="h-6 w-full bg-muted/20 border border-border/40 rounded shadow-inner flex p-1 text-[6px] text-muted-foreground/60">
                  {f.placeholder || "Enter details..."}
                </div>
              ) : f.type === "dropdown" ? (
                <div className="h-4 w-full bg-muted/20 border border-border/40 rounded shadow-inner flex items-center justify-between px-1 text-[6px] text-muted-foreground/60">
                  <span>Select option...</span>
                  <svg className="h-2 w-2 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              ) : f.type === "radio" || f.type === "checkbox" ? (
                <div className="flex items-center space-x-1 mt-[2px]">
                  <div className={`h-2 w-2 border border-border/60 bg-muted/20 shadow-inner ${f.type === 'radio' ? 'rounded-full' : 'rounded-[1px]'}`}></div>
                  <span className="text-[6px] text-muted-foreground font-medium">Option 1</span>
                </div>
              ) : f.type === "rating" ? (
                <div className="flex space-x-[2px] mt-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="h-2.5 w-2.5 text-amber-400 fill-amber-400" viewBox="0 0 24 24"><path d="m12 2-3 6.5-7 1 5 5-1 7 6-3.5 6 3.5-1-7 5-5-7-1z"/></svg>
                  ))}
                </div>
              ) : (
                <div className="h-4 w-full bg-muted/20 border border-border/40 rounded shadow-inner flex items-center px-1 text-[6px] text-muted-foreground/60">
                  {f.placeholder || "Type here..."}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {template.isNew && (
        <div className="absolute top-3 right-3 z-20">
          <span className="text-[8px] font-black bg-primary text-primary-foreground px-2 py-0.5 rounded-full shadow-lg uppercase tracking-wider">
            New
          </span>
        </div>
      )}
    </div>
  );
};

export default function TemplatesMarketplace() {
  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [creating, setCreating] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageSquare": return <MessageSquare className="h-5 w-5" />;
      case "Calendar": return <Calendar className="h-5 w-5" />;
      case "Star": return <Star className="h-5 w-5" />;
      case "Briefcase": return <Briefcase className="h-5 w-5" />;
      case "ClipboardList": return <ClipboardList className="h-5 w-5" />;
      case "Headphones": return <Headphones className="h-5 w-5" />;
      case "Target": return <Target className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const handleUseTemplate = async (template: Template) => {
    setCreating(true);
    try {
      const fields = template.fields.map((f, index) => ({
        id: crypto.randomUUID ? crypto.randomUUID() : `field_${Date.now()}_${index}`,
        type: f.type,
        label: f.label,
        placeholder: f.placeholder || "",
        helpText: f.helpText || "",
        required: f.required,
        options: f.options || [],
        correctAnswer: (f as any).correctAnswer,
        explanation: (f as any).explanation,
        marks: (f as any).marks,
        difficultyLevel: (f as any).difficultyLevel,
        order: index,
      }));

      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: template.title,
          description: template.description,
          fields,
          status: "draft",
          category: template.category,
          isQuizMode: template.isQuizMode || false,
          quizSettings: template.quizSettings,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      toast.success(`Template ${template.title} applied successfully!`);
      router.push(`/dashboard/forms/${data.form._id}/builder`);
    } catch (err: any) {
      toast.error(err.message || "Failed to create form from template");
    } finally {
      setCreating(false);
      setSelectedTemplate(null);
    }
  };

  const filteredTemplates = useMemo(() => {
    return templates.filter((t) => {
      const matchesSearch = 
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = activeCategory === "All" || t.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const renderTemplateCard = (template: Template) => (
    <motion.div
      key={template.id}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl overflow-hidden border border-border group flex flex-col bg-card/40 hover:bg-card/60 transition-colors shadow-sm hover:shadow-xl hover:shadow-primary/5 cursor-pointer"
      onClick={() => setSelectedTemplate(template)}
    >
      <TemplateMiniPreview template={template} />
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <div className="p-2.5 rounded-xl bg-background border border-border text-foreground -mt-10 relative z-20 shadow-md">
            {getIcon(template.icon)}
          </div>
        </div>
        
        <h3 className="font-extrabold text-foreground text-base tracking-tight leading-tight">{template.title}</h3>
        <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 flex-1">{template.description}</p>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {template.tags?.slice(0,2).map(tag => (
            <span key={tag} className="text-[9px] font-bold text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4 py-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
          Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Marketplace</span>
        </h1>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          Launch your real-world workflows instantly. Browse our curated collection of professional, production-ready form structures.
        </p>
        
        <div className="relative max-w-xl mx-auto mt-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for workflows, applications, surveys..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 border-border/50 bg-card/50 glass text-sm font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-muted-foreground/60 shadow-inner"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
            activeCategory === "All" 
              ? "bg-foreground text-background shadow-md" 
              : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50"
          }`}
        >
          All Solutions
        </button>
        {templateCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeCategory === cat 
                ? "bg-foreground text-background shadow-md" 
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Conditional Rendering based on Search/Filter */}
      {searchQuery || activeCategory !== "All" ? (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-foreground flex items-center">
            <Search className="h-4 w-4 mr-2 text-primary" />
            Results for &quot;{searchQuery || activeCategory}&quot; ({filteredTemplates.length})
          </h2>
          {filteredTemplates.length === 0 ? (
            <div className="glass p-12 text-center rounded-2xl border border-border">
              <LayoutTemplate className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-50" />
              <p className="font-bold text-foreground">No solutions found</p>
              <p className="text-xs text-muted-foreground mt-1">Try adjusting your search or category filter.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-4 text-xs font-bold text-primary hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {filteredTemplates.map(t => renderTemplateCard(t))}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-16">
          {/* Featured Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-extrabold text-foreground flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-amber-500" />
              Featured Workflows
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {getFeaturedTemplates().slice(0, 3).map((t) => renderTemplateCard(t))}
            </div>
          </div>

          {/* New Additions */}
          {getNewTemplates().length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-extrabold text-foreground flex items-center">
                <Target className="h-5 w-5 mr-2 text-rose-500" />
                Recently Added
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {getNewTemplates().map(t => renderTemplateCard(t))}
              </div>
            </div>
          )}

          {/* Curated Collections Grid */}
          <div className="space-y-6 pt-8 border-t border-border/50">
            <h2 className="text-2xl font-extrabold text-foreground flex items-center">
              <LayoutTemplate className="h-6 w-6 mr-2 text-primary" />
              Curated Collections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COLLECTIONS_DATA.map(collection => (
                <CollectionHeroCard 
                  key={collection.id} 
                  collection={collection} 
                  onExplore={() => {
                    setSearchQuery("");
                    setActiveCategory(collection.title);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  templateCount={templates.filter(t => t.category === collection.title).length}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Quick Preview Side Drawer */}
      <AnimatePresence>
        {selectedTemplate && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTemplate(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%", boxShadow: "-20px 0 50px rgba(0,0,0,0)" }}
              animate={{ x: 0, boxShadow: "-20px 0 50px rgba(0,0,0,0.1)" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-background border-l border-border shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className={`h-32 bg-gradient-to-br ${selectedTemplate.coverColor} relative p-6 flex flex-col justify-end shrink-0`}>
                <button 
                  onClick={() => setSelectedTemplate(null)}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="flex items-center space-x-3 absolute -bottom-6 left-6">
                  <div className="p-3 rounded-xl bg-card border border-border text-foreground shadow-xl">
                    {getIcon(selectedTemplate.icon)}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full mt-6 backdrop-blur-md">
                    {selectedTemplate.category}
                  </span>
                </div>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-6 pt-10 space-y-6">
                <div>
                  <h2 className="text-2xl font-black text-foreground tracking-tight leading-tight">{selectedTemplate.title}</h2>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{selectedTemplate.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedTemplate.tags?.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-muted-foreground bg-muted px-2 py-1 rounded-md border border-border/50">#{tag}</span>
                  ))}
                </div>

                {/* Marketplace 3.0 Details */}
                <div className="space-y-4 pt-4 border-t border-border">
                  {selectedTemplate.useCases && (
                    <div>
                      <h4 className="text-[11px] font-bold text-foreground uppercase tracking-wider mb-2 flex items-center">
                        <Target className="h-3 w-3 mr-1.5 text-primary" /> Example Use Cases
                      </h4>
                      <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4">
                        {selectedTemplate.useCases.map(uc => <li key={uc}>{uc}</li>)}
                      </ul>
                    </div>
                  )}

                  {selectedTemplate.industries && (
                    <div>
                      <h4 className="text-[11px] font-bold text-foreground uppercase tracking-wider mb-2 flex items-center">
                        <Building2 className="h-3 w-3 mr-1.5 text-primary" /> Recommended Industries
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedTemplate.industries.map(ind => (
                          <span key={ind} className="text-[10px] bg-primary/5 text-primary px-2 py-0.5 rounded border border-primary/10">{ind}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedTemplate.features && (
                    <div>
                      <h4 className="text-[11px] font-bold text-foreground uppercase tracking-wider mb-2 flex items-center">
                        <Sparkles className="h-3 w-3 mr-1.5 text-primary" /> Features Included
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedTemplate.features.map(feat => (
                          <span key={feat} className="text-[10px] bg-muted/50 text-muted-foreground px-2 py-0.5 rounded">{feat}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <h4 className="text-[11px] font-extrabold text-foreground uppercase tracking-wider flex items-center justify-between">
                    <span>Field Structure Preview</span>
                    <span className="text-muted-foreground">{selectedTemplate.fields.length} Fields</span>
                  </h4>
                  <div className="space-y-2 border border-border/50 bg-card rounded-xl p-2 relative overflow-hidden">
                    <div className="absolute left-4 top-4 bottom-4 w-px bg-border/50"></div>
                    {selectedTemplate.fields.map((field, idx) => (
                      <div key={idx} className="flex items-start text-xs relative z-10 p-2 hover:bg-muted/50 rounded-lg transition-colors">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5 mr-3 shrink-0 ring-4 ring-card"></div>
                        <div className="flex-1">
                          <p className="font-bold text-foreground">{field.label}</p>
                          <div className="flex items-center mt-1 space-x-2">
                            <span className="text-[9px] font-semibold text-muted-foreground bg-muted px-1.5 py-0.5 rounded capitalize">
                              {field.type}
                            </span>
                            {field.required && (
                              <span className="text-[9px] font-bold text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded">Required</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Drawer Footer CTA */}
              <div className="p-5 bg-card border-t border-border shadow-[0_-10px_20px_rgba(0,0,0,0.02)] shrink-0">
                <button
                  onClick={() => handleUseTemplate(selectedTemplate)}
                  disabled={creating}
                  className="w-full py-3.5 bg-foreground text-background hover:bg-foreground/90 rounded-xl text-sm font-bold cursor-pointer transition-all flex items-center justify-center space-x-2 disabled:opacity-50 shadow-lg"
                >
                  {creating ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                      <span>Generating Solution...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-4.5 w-4.5" />
                      <span>Use This Workflow</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
