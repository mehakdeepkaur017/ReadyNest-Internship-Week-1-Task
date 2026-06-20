"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  Plus, Sparkles, FileText, BarChart2, Eye, MoreHorizontal, 
  Trash2, Copy, Heart, ArrowUpRight, CheckCircle2, AlertCircle, Calendar, Archive, Download, Share2, Globe, FileEdit
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { Form, DashboardStats } from "@/lib/types";
import { formatDate, formatRelativeTime } from "@/lib/utils";
import QRCode from "qrcode";
import { questionBank } from "@/lib/question-bank";

export default function DashboardPage() {
  return (
    <Suspense fallback={
      <div className="flex h-[40vh] items-center justify-center space-x-2">
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <span className="text-sm font-semibold text-muted-foreground">Loading workspace...</span>
      </div>
    }>
      <DashboardContent />
    </Suspense>
  );
}

function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [forms, setForms] = useState<Form[]>([]);
  const [activeTab, setActiveTab] = useState<"all" | "published" | "draft" | "favorites" | "archived">("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Smart Assessment Builder States
  const [showBuilderModal, setShowBuilderModal] = useState(false);
  const [builderSubject, setBuilderSubject] = useState("mathematics");
  const [builderDifficulty, setBuilderDifficulty] = useState("mixed");
  const [builderType, setBuilderType] = useState("mixed");
  const [builderCount, setBuilderCount] = useState(10);
  const [buildingAssessment, setBuildingAssessment] = useState(false);
  
  // Create Modal
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newFormTitle, setNewFormTitle] = useState("");
  const [newFormDesc, setNewFormDesc] = useState("");
  
  // QR/Share states
  const [showShareModal, setShowShareModal] = useState(false);
  const [activeShareForm, setActiveShareForm] = useState<Form | null>(null);
  const [qrUrl, setQrUrl] = useState("");
  const [shareTab, setShareTab] = useState<"link" | "embed">("link");
  
  // Actions dropdown states
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  
  // Bulk Actions states
  const [selectedFormIds, setSelectedFormIds] = useState<string[]>([]);

  useEffect(() => {
    // Check if query parameters trigger modals
    if (searchParams.get("create") === "true") {
      setShowCreateModal(true);
    }
    if (searchParams.get("builder") === "true") {
      setShowBuilderModal(true);
    }
  }, [searchParams]);

  const fetchDashboardData = async () => {
    try {
      const statsRes = await fetch("/api/dashboard");
      const statsData = await statsRes.json();
      setStats(statsData);

      const formsRes = await fetch("/api/forms");
      const formsData = await formsRes.json();
      setForms(formsData.forms || []);
    } catch (err) {
      toast.error("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleCreateForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFormTitle.trim()) return;

    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newFormTitle,
          description: newFormDesc,
          fields: [],
          status: "draft",
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      toast.success("Form created successfully!");
      router.push(`/dashboard/forms/${data.form._id}/builder`);
    } catch (err: any) {
      toast.error(err.message || "Failed to create form");
    }
  };

  const handleBuildAssessment = async (e: React.FormEvent) => {
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
      
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: result.title,
          description: result.description,
          fields: result.fields,
          status: "draft",
          isQuizMode: true,
          quizSettings: result.quizSettings,
          candidateInfoSettings: {
            name: { enabled: true, required: true, label: "Name" },
            class: { enabled: true, required: true, label: "Class" },
            rollNumber: { enabled: true, required: true, label: "Roll Number" },
            section: { enabled: false, required: false, label: "Section" },
            studentId: { enabled: false, required: false, label: "Student ID" },
            email: { enabled: false, required: false, label: "Email" },
            phone: { enabled: false, required: false, label: "Phone Number" },
            institutionName: { enabled: false, required: false, label: "Institution Name" },
            customFields: []
          }
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      toast.success("Assessment built successfully!");
      router.push(`/dashboard/forms/${data.form._id}/builder`);
    } catch (err: any) {
      toast.error(err.message || "Assessment building failed");
    } finally {
      setBuildingAssessment(false);
      setShowBuilderModal(false);
    }
  };

  const handleToggleFavorite = async (form: Form) => {
    try {
      const updatedFav = !form.isFavorite;
      // Optimistic update
      setForms((prev) =>
        prev.map((f) => (f._id === form._id ? { ...f, isFavorite: updatedFav } : f))
      );

      const res = await fetch(`/api/forms/${form._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "favorite", isFavorite: updatedFav }),
      });

      if (!res.ok) throw new Error();
      toast.success(updatedFav ? "Added to favorites" : "Removed from favorites");
    } catch (err) {
      // Rollback
      setForms((prev) =>
        prev.map((f) => (f._id === form._id ? { ...f, isFavorite: form.isFavorite } : f))
      );
      toast.error("Failed to update favorite status");
    }
  };

  const handleDuplicateForm = async (formId: string) => {
    try {
      const res = await fetch(`/api/forms/${formId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "duplicate" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      toast.success("Form duplicated!");
      fetchDashboardData();
    } catch (err: any) {
      toast.error(err.message || "Duplication failed");
    }
  };

  const handleDeleteForm = async (formId: string) => {
    if (!confirm("Are you sure you want to delete this form? This will delete all responses as well.")) return;

    try {
      const res = await fetch(`/api/forms/${formId}`, { method: "DELETE" });
      if (!res.ok) throw new Error();

      toast.success("Form deleted");
      setForms((prev) => prev.filter((f) => f._id !== formId));
      fetchDashboardData();
    } catch (err) {
      toast.error("Failed to delete form");
    }
  };

  const handleChangeStatus = async (form: Form, newStatus: string) => {
    try {
      const res = await fetch(`/api/forms/${form._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error();
      toast.success(`Form status updated to ${newStatus}`);
      fetchDashboardData();
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  const handleOpenShare = async (form: Form) => {
    setActiveShareForm(form);
    const publicUrl = `${window.location.origin}/form/${form.slug}`;
    try {
      const qrCodeDataUrl = await QRCode.toDataURL(publicUrl, { width: 300, margin: 2 });
      setQrUrl(qrCodeDataUrl);
      setShowShareModal(true);
    } catch (err) {
      toast.error("Failed to generate QR Code");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Link copied to clipboard!");
  };

  // Filtering
  const filteredForms = forms.filter((f) => {
    const matchesSearch = f.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.description?.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;
    if (activeTab === "all") return f.status !== "archived";
    if (activeTab === "published") return f.status === "published";
    if (activeTab === "draft") return f.status === "draft";
    if (activeTab === "favorites") return f.isFavorite && f.status !== "archived";
    if (activeTab === "archived") return f.status === "archived";
    return true;
  });

  // Bulk Actions
  const handleBulkAction = async (action: "delete" | "status", statusValue?: string) => {
    if (selectedFormIds.length === 0) return;
    
    if (action === "delete") {
      if (!confirm(`Are you sure you want to delete ${selectedFormIds.length} forms? This action cannot be undone.`)) return;
    }

    try {
      const url = "/api/forms/bulk";
      const method = action === "delete" ? "DELETE" : "PATCH";
      const body = action === "delete" 
        ? { formIds: selectedFormIds }
        : { formIds: selectedFormIds, status: statusValue };

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      toast.success(data.message);
      setSelectedFormIds([]);
      fetchDashboardData();
    } catch (err: any) {
      toast.error(err.message || "Bulk action failed");
    }
  };



  const toggleSelectAll = () => {
    if (selectedFormIds.length === filteredForms.length) {
      setSelectedFormIds([]);
    } else {
      setSelectedFormIds(filteredForms.map(f => f._id));
    }
  };

  const toggleFormSelect = (id: string) => {
    setSelectedFormIds(prev => 
      prev.includes(id) ? prev.filter(formId => formId !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Title + Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Workspace</h1>
          <p className="text-muted-foreground text-sm">Create, monitor, and analyze your forms.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowBuilderModal(true)}
            className="flex items-center space-x-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2.5 font-medium text-sm border border-border cursor-pointer transition"
          >
            <Sparkles className="h-4.5 w-4.5 text-purple-500 fill-purple-500/20" />
            <span>Smart Assessment Builder</span>
          </button>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center space-x-2 rounded-lg bg-primary text-primary-foreground hover:glow-hover px-4 py-2.5 font-medium text-sm cursor-pointer transition shadow-lg shadow-primary/20"
          >
            <Plus className="h-4.5 w-4.5" />
            <span>Create Form</span>
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-28 skeleton rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-5 rounded-xl border border-border relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total Forms</span>
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <p className="text-3xl font-extrabold mt-2 text-foreground">{stats?.totalForms || 0}</p>
            <p className="text-xs text-muted-foreground mt-1">{stats?.publishedForms || 0} published • {stats?.draftForms || 0} drafts</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="glass p-5 rounded-xl border border-border relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total Responses</span>
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            </div>
            <p className="text-3xl font-extrabold mt-2 text-foreground">{stats?.totalResponses || 0}</p>
            <p className="text-xs text-emerald-500 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-0.5" />
              <span>Real-time submissions</span>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass p-5 rounded-xl border border-border relative overflow-hidden cursor-help hover:border-primary/50 transition-colors group"
            onClick={() => toast("Conversion Rate = (Total Submissions ÷ Total Views) × 100", { icon: "📊" })}
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                Conversion Rate
                <AlertCircle className="h-3.5 w-3.5 opacity-50 group-hover:text-primary group-hover:opacity-100 transition-all" />
              </span>
              <BarChart2 className="h-5 w-5 text-indigo-500" />
            </div>
            <p className="text-3xl font-extrabold mt-2 text-foreground">{stats?.conversionRate || 0}%</p>
            <p className="text-xs text-muted-foreground mt-1 group-hover:text-foreground transition-colors">Click to see formula</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="glass p-5 rounded-xl border border-border relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Active Published</span>
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping mt-1.5" />
            </div>
            <p className="text-3xl font-extrabold mt-2 text-foreground">{stats?.publishedForms || 0}</p>
            <p className="text-xs text-muted-foreground mt-1">Forms ready to collect responses</p>
          </motion.div>
        </div>
      )}

      {/* Main Grid: Form List & Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form List Panel */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-3 gap-3">
            <div className="flex gap-1.5 overflow-x-auto">
              {(["all", "published", "draft", "favorites", "archived"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize cursor-pointer transition-all ${
                    activeTab === tab 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              {filteredForms.length > 0 && (
                <label className="hidden sm:flex items-center space-x-2 cursor-pointer group">
                  <input 
                    type="checkbox"
                    checked={selectedFormIds.length === filteredForms.length}
                    onChange={toggleSelectAll}
                    className="rounded border-border text-primary focus:ring-primary/20 h-4 w-4 bg-background cursor-pointer"
                  />
                  <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition">Select All</span>
                </label>
              )}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search forms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-48 bg-muted/40 text-xs px-3 py-1.5 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground text-foreground"
                />
              </div>
            </div>
          </div>

          {loading ? (
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-20 skeleton rounded-xl" />
              ))}
            </div>
          ) : filteredForms.length === 0 ? (
            <div className="glass p-12 text-center rounded-2xl border border-border">
              <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <p className="font-semibold text-foreground text-sm">No forms found</p>
              <p className="text-xs text-muted-foreground mt-1">Create a form manually or use the templates / assessment builder.</p>
            </div>
          ) : (
            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {filteredForms.map((form, idx) => (
                  <motion.div
                    key={form._id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="glass p-4 rounded-xl border border-border hover:border-primary/20 hover:bg-card/50 transition-all flex items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center space-x-4 flex-1 min-w-0">
                      <div className={`flex items-center transition-opacity duration-200 ${selectedFormIds.length > 0 || selectedFormIds.includes(form._id) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                        <input 
                          type="checkbox" 
                          checked={selectedFormIds.includes(form._id)}
                          onChange={() => toggleFormSelect(form._id)}
                          className="rounded border-border text-primary focus:ring-primary/20 h-4 w-4 bg-background cursor-pointer"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <Link href={`/dashboard/forms/${form._id}/builder`} className="font-semibold text-foreground hover:text-primary transition truncate text-sm">
                          {form.title}
                        </Link>
                        <select
                          value={form.status}
                          onChange={(e) => handleChangeStatus(form, e.target.value)}
                          className={`pl-2 pr-1 py-0.5 text-[10px] font-bold rounded-full border cursor-pointer outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                            form.status === "published" 
                              ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/20" 
                              : form.status === "archived"
                              ? "bg-slate-500/10 text-slate-500 border-slate-500/20 hover:bg-slate-500/20"
                              : "bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20"
                          }`}
                        >
                          <option value="draft" className="text-foreground bg-background font-medium">draft</option>
                          <option value="published" className="text-foreground bg-background font-medium">published</option>
                          <option value="archived" className="text-foreground bg-background font-medium">archived</option>
                        </select>
                      </div>
                      <p className="text-xs text-muted-foreground truncate mt-1">{form.description || "No description"}</p>
                      <div className="flex items-center space-x-3 text-[10px] text-muted-foreground mt-2">
                        <span>{form.fields?.length || 0} fields</span>
                        <span>•</span>
                        <span>{form.responses || 0} responses</span>
                        <span>•</span>
                        <span>Updated {formatRelativeTime(form.updatedAt)}</span>
                      </div>
                    </div>
                    </div>

                    <div className="flex items-center space-x-1.5 shrink-0">
                      <button
                        onClick={() => handleToggleFavorite(form)}
                        className={`p-2 rounded-lg hover:bg-muted transition cursor-pointer ${
                          form.isFavorite ? "text-red-500 hover:text-red-600" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Heart className={`h-4.5 w-4.5 ${form.isFavorite ? "fill-red-500" : ""}`} />
                      </button>

                      {form.status === "published" && (
                        <button
                          onClick={() => handleOpenShare(form)}
                          className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
                          title="Share QR / Link"
                        >
                          <Share2 className="h-4.5 w-4.5" />
                        </button>
                      )}

                      <div className="relative">
                        <button
                          onClick={() => setOpenDropdownId(openDropdownId === form._id ? null : form._id)}
                          className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
                        >
                          <MoreHorizontal className="h-4.5 w-4.5" />
                        </button>

                        <AnimatePresence>
                          {openDropdownId === form._id && (
                            <>
                              <div className="fixed inset-0 z-30" onClick={() => setOpenDropdownId(null)} />
                              <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 5 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 5 }}
                                className="absolute right-0 mt-1 w-44 bg-card border border-border rounded-lg shadow-xl py-1 z-40"
                              >
                                <button
                                  onClick={() => {
                                    setOpenDropdownId(null);
                                    router.push(`/dashboard/forms/${form._id}/builder`);
                                  }}
                                  className="flex items-center space-x-2.5 px-3 py-2 text-xs text-foreground hover:bg-muted w-full text-left font-medium"
                                >
                                  <FileText className="h-3.5 w-3.5" />
                                  <span>Edit Form</span>
                                </button>
                                <button
                                  onClick={() => {
                                    setOpenDropdownId(null);
                                    router.push(`/dashboard/forms/${form._id}/responses`);
                                  }}
                                  className="flex items-center space-x-2.5 px-3 py-2 text-xs text-foreground hover:bg-muted w-full text-left font-medium"
                                >
                                  <Eye className="h-3.5 w-3.5 text-emerald-500" />
                                  <span>View Responses</span>
                                </button>
                                <button
                                  onClick={() => {
                                    setOpenDropdownId(null);
                                    router.push(`/dashboard/forms/${form._id}/analytics`);
                                  }}
                                  className="flex items-center space-x-2.5 px-3 py-2 text-xs text-foreground hover:bg-muted w-full text-left font-medium"
                                >
                                  <BarChart2 className="h-3.5 w-3.5 text-indigo-500" />
                                  <span>View Analytics</span>
                                </button>
                                <button
                                  onClick={() => {
                                    setOpenDropdownId(null);
                                    handleDuplicateForm(form._id);
                                  }}
                                  className="flex items-center space-x-2.5 px-3 py-2 text-xs text-foreground hover:bg-muted w-full text-left font-medium"
                                >
                                  <Copy className="h-3.5 w-3.5 text-blue-500" />
                                  <span>Duplicate Form</span>
                                </button>

                                <hr className="border-border my-1" />
                                <button
                                  onClick={() => {
                                    setOpenDropdownId(null);
                                    handleDeleteForm(form._id);
                                  }}
                                  className="flex items-center space-x-2.5 px-3 py-2 text-xs text-destructive hover:bg-destructive/10 w-full text-left font-medium"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                  <span>Delete Form</span>
                                </button>
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Sidebar Activity Feed */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-bold text-foreground">Recent Activity</h2>
            <p className="text-xs text-muted-foreground">Action stream from your workspace</p>
          </div>

          <div className="glass p-5 rounded-2xl border border-border space-y-4 max-h-[400px] overflow-y-auto">
            {loading ? (
              <div className="space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-10 skeleton rounded-lg" />
                ))}
              </div>
            ) : !stats?.recentActivity || stats.recentActivity.length === 0 ? (
              <div className="text-center py-6 text-xs text-muted-foreground">
                No activity logged yet.
              </div>
            ) : (
              <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-border">
                {stats.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex gap-3 text-xs items-start relative pl-1.5">
                    <div className={`h-6.5 w-6.5 rounded-full flex items-center justify-center shrink-0 border border-background shadow-sm ${
                      activity.type === "response_received" ? "bg-emerald-500 text-white" :
                      activity.type === "form_created" ? "bg-primary text-white" :
                      activity.type === "form_published" ? "bg-indigo-500 text-white" :
                      "bg-muted text-foreground"
                    }`}>
                      {activity.type === "response_received" && <CheckCircle2 className="h-3.5 w-3.5" />}
                      {activity.type === "form_created" && <Plus className="h-3.5 w-3.5" />}
                      {activity.type === "form_published" && <Calendar className="h-3.5 w-3.5" />}
                      {activity.type === "form_updated" && <FileText className="h-3.5 w-3.5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-[12px]">{activity.message}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{formatRelativeTime(activity.timestamp)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Share / QR Modal */}
      {showShareModal && activeShareForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setShowShareModal(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-sm glass border border-border rounded-2xl shadow-2xl p-6 relative bg-background/95 text-center space-y-4"
          >
            <h3 className="font-bold text-lg text-foreground truncate">{activeShareForm.title}</h3>
            
            <div className="space-y-4 animate-in fade-in duration-200 mt-2">
              <p className="text-xs text-muted-foreground">Scan or copy the link to share the public form.</p>
              {qrUrl && (
                <div className="bg-white p-4 rounded-xl inline-block mx-auto border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={qrUrl} alt="QR Code" className="h-44 w-44" />
                </div>
              )}

              <div className="flex items-center bg-muted/50 rounded-lg p-2 gap-2 border border-border">
                <input
                  type="text"
                  readOnly
                  value={`${window.location.origin}/form/${activeShareForm.slug}`}
                  className="flex-1 text-[11px] bg-transparent text-foreground focus:outline-none truncate px-1"
                />
                <button
                  onClick={() => copyToClipboard(`${window.location.origin}/form/${activeShareForm.slug}`)}
                  className="px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-semibold rounded hover:glow-hover transition cursor-pointer"
                >
                  Copy
                </button>
              </div>

              <div className="flex gap-2">
                <a
                  href={qrUrl}
                  download={`${activeShareForm.slug}-qrcode.png`}
                  className="flex-1 flex items-center justify-center space-x-1.5 border border-border hover:bg-muted py-2 rounded-lg text-xs font-semibold text-foreground cursor-pointer transition"
                >
                  <Download className="h-4 w-4" />
                  <span>Download QR</span>
                </a>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="flex-1 bg-muted border border-border hover:bg-muted/70 py-2 rounded-lg text-xs font-semibold text-foreground cursor-pointer transition"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Manual Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setShowCreateModal(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-md glass border border-border rounded-2xl shadow-2xl p-6 relative bg-background/95 space-y-4"
          >
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <h3 className="font-extrabold text-lg text-foreground">Create New Form</h3>
              <button onClick={() => setShowCreateModal(false)} className="text-muted-foreground hover:text-foreground text-sm font-semibold">✕</button>
            </div>

            <form onSubmit={handleCreateForm} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">Form Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. User Signup Survey"
                  value={newFormTitle}
                  onChange={(e) => setNewFormTitle(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-border bg-background/50 px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">Description (Optional)</label>
                <textarea
                  placeholder="Provide context or instructions for respondents..."
                  value={newFormDesc}
                  onChange={(e) => setNewFormDesc(e.target.value)}
                  rows={3}
                  className="mt-1 block w-full rounded-lg border border-border bg-background/50 px-3.5 py-2 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 border border-border hover:bg-muted rounded-lg text-xs font-semibold text-foreground cursor-pointer transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground hover:glow-hover rounded-lg text-xs font-semibold cursor-pointer transition"
                >
                  Create Draft
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Smart Assessment Builder Modal */}
      {showBuilderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setShowBuilderModal(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-md glass border border-border rounded-2xl shadow-2xl p-6 relative bg-background/95 space-y-4"
          >
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <h3 className="font-extrabold text-lg text-foreground flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-500 fill-purple-500/10" />
                <span>Smart Assessment Builder</span>
              </h3>
              <button onClick={() => setShowBuilderModal(false)} className="text-muted-foreground hover:text-foreground text-sm font-semibold">✕</button>
            </div>

            <p className="text-xs text-muted-foreground">
              Configure parameters to instantly generate a high-quality, structured test from our curated question bank. 100% deterministic & free forever.
            </p>

            <form onSubmit={handleBuildAssessment} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">Subject</label>
                <select
                  value={builderSubject}
                  onChange={(e) => setBuilderSubject(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-border bg-background/50 px-3.5 py-2.5 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition"
                >
                  <option value="mathematics">Mathematics ({questionBank.filter(q => q.subject === "mathematics").length} Questions)</option>
                  <option value="science">Science ({questionBank.filter(q => q.subject === "science").length} Questions)</option>
                  <option value="english">English ({questionBank.filter(q => q.subject === "english").length} Questions)</option>
                  <option value="history">History ({questionBank.filter(q => q.subject === "history").length} Questions)</option>
                  <option value="geography">Geography ({questionBank.filter(q => q.subject === "geography").length} Questions)</option>
                  <option value="computer science">Computer Science ({questionBank.filter(q => q.subject === "computer science").length} Questions)</option>
                  <option value="dbms">DBMS ({questionBank.filter(q => q.subject === "dbms").length} Questions)</option>
                  <option value="java">Java ({questionBank.filter(q => q.subject === "java").length} Questions)</option>
                  <option value="python">Python ({questionBank.filter(q => q.subject === "python").length} Questions)</option>
                  <option value="data structures">Data Structures ({questionBank.filter(q => q.subject === "data structures").length} Questions)</option>
                  <option value="operating systems">Operating Systems ({questionBank.filter(q => q.subject === "operating systems").length} Questions)</option>
                  <option value="computer networks">Computer Networks ({questionBank.filter(q => q.subject === "computer networks").length} Questions)</option>
                  <option value="cyber security">Cyber Security ({questionBank.filter(q => q.subject === "cyber security").length} Questions)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">Difficulty</label>
                  <select
                    value={builderDifficulty}
                    onChange={(e) => setBuilderDifficulty(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-foreground text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition"
                  >
                    <option value="mixed">Mixed</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">Question Type</label>
                  <select
                    value={builderType}
                    onChange={(e) => setBuilderType(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-foreground text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition"
                  >
                    <option value="mixed">Mixed Types</option>
                    <option value="mcq">Multiple Choice (MCQ)</option>
                    <option value="true_false">True / False</option>
                    <option value="short_answer">Short Answer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">Question Count</label>
                <div className="flex items-center space-x-2 mt-1.5">
                  <button
                    type="button"
                    onClick={() => setBuilderCount(prev => Math.max(1, prev - 1))}
                    className="h-9.5 w-9.5 flex items-center justify-center rounded-lg border border-border bg-background/50 hover:bg-muted text-foreground transition font-extrabold cursor-pointer text-sm"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    required
                    value={builderCount}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (isNaN(val)) {
                        setBuilderCount("" as any);
                      } else {
                        setBuilderCount(Math.min(100, Math.max(1, val)));
                      }
                    }}
                    onBlur={() => {
                      if (!builderCount || isNaN(builderCount)) {
                        setBuilderCount(10);
                      }
                    }}
                    className="h-9.5 w-24 text-center rounded-lg border border-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition font-semibold"
                  />
                  <button
                    type="button"
                    onClick={() => setBuilderCount(prev => Math.min(100, prev + 1))}
                    className="h-9.5 w-9.5 flex items-center justify-center rounded-lg border border-border bg-background/50 hover:bg-muted text-foreground transition font-extrabold cursor-pointer text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3 text-[11px] text-muted-foreground space-y-1">
                <p className="font-semibold text-purple-400 text-xs">✨ Curated Assessment includes:</p>
                <ul className="list-disc list-inside space-y-0.5 ml-1">
                  <li>Automatic grading & answer key mapping</li>
                  <li>In-depth explanations for students</li>
                  <li>Automatic estimation of time limits</li>
                  <li>Shuffled questions and options</li>
                </ul>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowBuilderModal(false)}
                  disabled={buildingAssessment}
                  className="px-4 py-2 border border-border hover:bg-muted rounded-lg text-xs font-semibold text-foreground cursor-pointer transition disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={buildingAssessment}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/20 rounded-lg text-xs font-semibold cursor-pointer transition flex items-center space-x-1.5 disabled:opacity-50"
                >
                  {buildingAssessment ? (
                    <>
                      <span className="h-3 w-3 animate-spin rounded-full border border-white border-t-transparent mr-1" />
                      <span>Building...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Build Assessment</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
      {/* Bulk Actions Floating Bar */}
      <AnimatePresence>
        {selectedFormIds.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass border border-border rounded-full px-6 py-3 shadow-2xl flex items-center space-x-4 bg-background/80 backdrop-blur-md"
          >
            <span className="text-xs font-bold text-foreground bg-primary/10 px-2 py-1 rounded-md">
              {selectedFormIds.length} selected
            </span>
            <div className="w-[1px] h-6 bg-border" />
            <button
              onClick={() => handleBulkAction("status", "published")}
              className="text-xs font-semibold text-emerald-500 hover:text-emerald-400 transition cursor-pointer"
            >
              Publish
            </button>
            <button
              onClick={() => handleBulkAction("status", "draft")}
              className="text-xs font-semibold text-amber-500 hover:text-amber-400 transition cursor-pointer"
            >
              Draft
            </button>
            <button
              onClick={() => handleBulkAction("status", "archived")}
              className="text-xs font-semibold text-slate-500 hover:text-slate-400 transition cursor-pointer"
            >
              Archive
            </button>
            <div className="w-[1px] h-6 bg-border" />
            <button
              onClick={() => handleBulkAction("delete")}
              className="flex items-center space-x-1 text-xs font-semibold text-destructive hover:text-red-400 transition cursor-pointer"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span>Delete</span>
            </button>
            <div className="w-[1px] h-6 bg-border" />
            <button
              onClick={() => setSelectedFormIds([])}
              className="text-xs font-semibold text-muted-foreground hover:text-foreground transition cursor-pointer"
            >
              Cancel
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
