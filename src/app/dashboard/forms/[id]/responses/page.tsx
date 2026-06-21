"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, Search, Trash2, Calendar, FileSpreadsheet, Eye, ChevronLeft, ChevronRight, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { Form, FormResponse } from "@/lib/types";
import { formatDateTime } from "@/lib/utils";

export default function ResponsesPage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState<Form | null>(null);
  const [responses, setResponses] = useState<FormResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedResponse, setSelectedResponse] = useState<FormResponse | null>(null);
  const [sortBy, setSortBy] = useState("submittedAt_desc");
  
  // Selection and Bulk Actions state
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const getActiveCandidateFields = () => {
    if (!form || !form.candidateInfoSettings) return [];
    const settings = form.candidateInfoSettings;
    const fields: { id: string; label: string; isCustom: boolean }[] = [];
    
    const standardKeys = [
      "name",
      "rollNumber",
      "class",
      "section",
      "studentId",
      "email",
      "phone",
      "institutionName"
    ] as const;

    standardKeys.forEach(k => {
      if (settings[k]?.enabled) {
        fields.push({ id: k, label: settings[k].label, isCustom: false });
      }
    });

    if (settings.customFields) {
      settings.customFields.forEach(cf => {
        if (cf.enabled) {
          fields.push({ id: cf.id, label: cf.label, isCustom: true });
        }
      });
    }

    return fields;
  };

  const getCandidateValue = (resp: FormResponse, cf: { id: string; isCustom: boolean }) => {
    if (!resp.candidateInfo) return "-";
    if (cf.isCustom) {
      const customField = resp.candidateInfo.customFields?.find(f => f.fieldId === cf.id);
      return customField?.value || "-";
    }
    return (resp.candidateInfo as any)[cf.id] || "-";
  };

  const fetchResponses = async () => {
    try {
      // Get Form details
      const formRes = await fetch(`/api/forms/${id}`);
      const formData = await formRes.json();
      if (!formRes.ok) throw new Error(formData.error);
      setForm(formData.form);

      // Get Responses
      const respRes = await fetch(`/api/forms/${id}/responses?page=${page}&search=${encodeURIComponent(search)}&sortBy=${sortBy}`);
      const respData = await respRes.json();
      if (!respRes.ok) throw new Error(respData.error);
      
      setResponses(respData.responses || []);
      setTotalPages(respData.pages || 1);
    } catch (err) {
      toast.error("Failed to load response data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResponses();
  }, [id, page, search, sortBy]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(responses.map(r => r._id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (respId: string, checked: boolean) => {
    if (checked) {
      setSelectedIds(prev => [...prev, respId]);
    } else {
      setSelectedIds(prev => prev.filter(id => id !== respId));
    }
  };

  const handleDeleteResponse = async (respId: string) => {
    if (!confirm("Are you sure you want to delete this response?")) return;

    try {
      const res = await fetch(`/api/forms/${id}/responses?responseId=${respId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error();

      toast.success("Submission response deleted");
      setResponses((prev) => prev.filter((r) => r._id !== respId));
      setSelectedIds((prev) => prev.filter((id) => id !== respId));
      if (selectedResponse?._id === respId) setSelectedResponse(null);
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return;
    if (!confirm(`Are you sure you want to delete ${selectedIds.length} selected response(s)?`)) return;

    try {
      const res = await fetch(`/api/forms/${id}/responses?responseIds=${selectedIds.join(",")}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error();

      toast.success(`${selectedIds.length} submission response(s) deleted`);
      setResponses((prev) => prev.filter((r) => !selectedIds.includes(r._id)));
      setSelectedIds([]);
    } catch (err) {
      toast.error("Bulk delete failed");
    }
  };

  const handleExportCSV = () => {
    if (!form || responses.length === 0) return;
    
    const activeCandidateFields = getActiveCandidateFields();
    
    // Headers
    const headers = [
      "Submission Time",
      ...activeCandidateFields.map(cf => cf.label),
      ...form.fields.map(f => f.label),
      ...(form.isQuizMode ? ["Score", "Total Marks", "Percentage %", "Result Status"] : [])
    ];
    
    // Rows
    const rows = responses.map(resp => {
      const time = new Date(resp.submittedAt).toISOString();
      
      const candidateInfoValues = activeCandidateFields.map(cf => {
        const val = getCandidateValue(resp, cf);
        return `"${String(val).replace(/"/g, '""')}"`;
      });

      const fieldValues = form.fields.map(f => {
        const val = resp.data[f.id];
        if (val === undefined || val === null) return "";
        if (Array.isArray(val)) {
          return `"${val.join(", ").replace(/"/g, '""')}"`;
        }
        return `"${String(val).replace(/"/g, '""')}"`;
      });

      const quizValues = form.isQuizMode && resp.quizResult
        ? [
            resp.quizResult.score,
            resp.quizResult.totalMarks,
            `"${resp.quizResult.percentage}%"`,
            resp.quizResult.passed ? "PASSED" : "FAILED"
          ]
        : [];

      return [time, ...candidateInfoValues, ...fieldValues, ...quizValues].join(",");
    });
    
    const csvContent = "\uFEFF" + [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${form.slug}-responses.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("CSV file downloaded!");
  };

  const handleExportExcel = async () => {
    if (!form || responses.length === 0) return;

    try {
      const XLSX = await import("xlsx");
      const activeCandidateFields = getActiveCandidateFields();

      // Headers
      const headers = [
        "Submission Time",
        ...activeCandidateFields.map(cf => cf.label),
        ...form.fields.map(f => f.label),
        ...(form.isQuizMode ? ["Score", "Total Marks", "Percentage %", "Result Status"] : [])
      ];

      // Rows
      const rows = responses.map(resp => {
        const time = new Date(resp.submittedAt).toLocaleString();
        
        const candidateInfoValues = activeCandidateFields.map(cf => {
          return getCandidateValue(resp, cf);
        });

        const fieldValues = form.fields.map(f => {
          const val = resp.data[f.id];
          if (val === undefined || val === null) return "";
          if (Array.isArray(val)) return val.join(", ");
          return String(val);
        });

        const quizValues = form.isQuizMode && resp.quizResult
          ? [
              resp.quizResult.score,
              resp.quizResult.totalMarks,
              `${resp.quizResult.percentage}%`,
              resp.quizResult.passed ? "PASSED" : "FAILED"
            ]
          : [];

        return [time, ...candidateInfoValues, ...fieldValues, ...quizValues];
      });

      const worksheetData = [headers, ...rows];
      const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Responses");

      XLSX.writeFile(workbook, `${form.slug}-responses.xlsx`);
      toast.success("Excel (.xlsx) file downloaded successfully!");
    } catch (err) {
      toast.error("Failed to load Excel library");
    }
  };

  const handleExportJSON = () => {
    if (!form || responses.length === 0) return;
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(responses, null, 2)
    )}`;
    const link = document.createElement("a");
    link.setAttribute("href", jsonString);
    link.setAttribute("download", `${form.slug}-responses.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("JSON file downloaded!");
  };

  if (loading && !form) {
    return (
      <div className="flex h-[70vh] items-center justify-center space-x-2">
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <span className="text-sm font-semibold text-muted-foreground">Loading submissions...</span>
      </div>
    );
  }

  if (!form) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 font-bold">Workspace Error: Form not found</p>
        <button onClick={() => router.push("/dashboard")} className="mt-4 text-xs font-bold text-primary underline">Go to Dashboard</button>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Top action header */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => router.push("/dashboard")}
          className="p-2 border border-border hover:bg-muted rounded-lg text-foreground cursor-pointer transition"
        >
          <ArrowLeft className="h-4.5 w-4.5" />
        </button>
        <div>
          <h1 className="font-extrabold text-foreground text-2xl tracking-tight">Form Submissions</h1>
          <p className="text-xs text-muted-foreground mt-0.5">Collect responses for &quot;{form.title}&quot;</p>
        </div>
      </div>

      {/* Filter, search and Export actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-card/30 border border-border p-4 rounded-xl glass">
        <div className="flex flex-1 flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search submissions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full rounded-lg border border-border bg-background pl-9 pr-3.5 py-1.5 text-foreground text-xs focus:outline-none focus:ring-1 focus:ring-primary transition placeholder:text-muted-foreground"
            />
          </div>
          
          <div className="flex items-center space-x-2 shrink-0">
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-background border border-border text-xs px-2.5 py-1.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-foreground font-semibold"
            >
              <option value="submittedAt_desc">Newest First</option>
              <option value="submittedAt_asc">Oldest First</option>
              {form.isQuizMode && (
                <>
                  <option value="score_desc">Score: High to Low</option>
                  <option value="score_asc">Score: Low to High</option>
                </>
              )}
              {getActiveCandidateFields().filter(cf => !cf.isCustom).flatMap(cf => [
                <option key={`${cf.id}_asc`} value={`candidate_${cf.id}_asc`}>{cf.label} (A-Z)</option>,
                <option key={`${cf.id}_desc`} value={`candidate_${cf.id}_desc`}>{cf.label} (Z-A)</option>
              ])}
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={handleExportCSV}
            disabled={responses.length === 0}
            className="flex items-center space-x-1.5 border border-border bg-background hover:bg-muted text-xs font-semibold px-3 py-1.5 rounded-lg text-foreground cursor-pointer disabled:opacity-40 transition"
          >
            <span>Export CSV</span>
          </button>
          <button
            onClick={handleExportExcel}
            disabled={responses.length === 0}
            className="flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 hover:shadow-emerald-600/20 shadow-md text-xs font-bold px-3 py-1.5 rounded-lg text-white cursor-pointer disabled:opacity-40 transition"
          >
            <FileSpreadsheet className="h-3.5 w-3.5 text-white" />
            <span>Export Excel</span>
          </button>
          <button
            onClick={handleExportJSON}
            disabled={responses.length === 0}
            className="flex items-center space-x-1.5 border border-border bg-background hover:bg-muted text-xs font-semibold px-3 py-1.5 rounded-lg text-foreground cursor-pointer disabled:opacity-40 transition"
          >
            <span>Export JSON</span>
          </button>
          <span className="text-xs text-muted-foreground font-semibold pl-2 border-l border-border">{responses.length} responses</span>
        </div>
      </div>

      {/* Bulk actions deletion bar */}
      {selectedIds.length > 0 && (
        <div className="flex items-center justify-between bg-destructive/10 border border-destructive/25 p-3 rounded-lg text-xs animate-in slide-in-from-top duration-200">
          <span className="font-bold text-destructive">{selectedIds.length} response(s) selected</span>
          <button
            onClick={handleBulkDelete}
            className="flex items-center space-x-1.5 px-3 py-1 bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold rounded text-[11px] cursor-pointer transition"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>Delete Selected</span>
          </button>
        </div>
      )}

      {/* Response Grid Table */}
      {responses.length === 0 ? (
        <div className="glass p-16 text-center rounded-2xl border border-border">
          <FileSpreadsheet className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="font-semibold text-foreground text-sm">No submissions recorded</p>
          <p className="text-xs text-muted-foreground mt-1">Share the published form link to collect responses.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="border border-border rounded-xl bg-card/20 overflow-x-auto glass">
            <table className="w-full text-xs text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="p-3.5 w-10">
                    <input
                      type="checkbox"
                      checked={selectedIds.length === responses.length && responses.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="rounded border-border bg-background text-primary"
                    />
                  </th>
                  <th className="p-3.5 font-bold text-muted-foreground uppercase tracking-wider text-[10px]">Submission Time</th>
                  {getActiveCandidateFields().map((cf) => (
                    <th key={cf.id} className="p-3.5 font-bold text-muted-foreground uppercase tracking-wider text-[10px] truncate max-w-[150px]">
                      {cf.label}
                    </th>
                  ))}
                  {form.isQuizMode && (
                    <th className="p-3.5 font-bold text-muted-foreground uppercase tracking-wider text-[10px]">Score</th>
                  )}
                  {form.fields.map((field) => (
                    <th key={field.id} className="p-3.5 font-bold text-muted-foreground uppercase tracking-wider text-[10px] truncate max-w-[150px]" title={field.label}>
                      {field.label}
                    </th>
                  ))}
                  <th className="p-3.5 font-bold text-muted-foreground uppercase tracking-wider text-[10px] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {responses.map((resp) => (
                  <tr key={resp._id} className="hover:bg-muted/10 transition-colors">
                    <td className="p-3.5 w-10">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(resp._id)}
                        onChange={(e) => handleSelectOne(resp._id, e.target.checked)}
                        className="rounded border-border bg-background text-primary"
                      />
                    </td>
                    <td className="p-3.5 text-foreground font-semibold whitespace-nowrap text-[11px]">
                      {formatDateTime(resp.submittedAt)}
                    </td>
                    {getActiveCandidateFields().map((cf) => {
                      const val = getCandidateValue(resp, cf);
                      return (
                        <td key={cf.id} className="p-3.5 text-foreground font-bold truncate max-w-[150px]">
                          {val}
                        </td>
                      );
                    })}
                    {form.isQuizMode && (
                      <td className="p-3.5 text-foreground font-black whitespace-nowrap">
                        {resp.quizResult ? (
                          <span className={`px-2 py-0.5 rounded text-[10px] ${
                            resp.quizResult.passed 
                              ? "bg-emerald-500/10 text-emerald-500" 
                              : "bg-red-500/10 text-red-500"
                          }`}>
                            {resp.quizResult.score} / {resp.quizResult.totalMarks} ({resp.quizResult.percentage}%)
                          </span>
                        ) : "-"}
                      </td>
                    )}
                    {form.fields.map((field) => {
                      const val = resp.data[field.id];
                      let displayVal = "";
                      if (val) {
                        if (typeof val === "object") {
                          displayVal = Array.isArray(val) ? val.join(", ") : JSON.stringify(val);
                        } else {
                          displayVal = String(val);
                        }
                      }
                      return (
                        <td key={field.id} className="p-3.5 text-muted-foreground truncate max-w-[150px]" title={displayVal}>
                          {displayVal || "-"}
                        </td>
                      );
                    })}
                    <td className="p-3.5 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end space-x-1">
                        <button
                          onClick={() => setSelectedResponse(resp)}
                          className="p-1.5 rounded hover:bg-muted text-primary cursor-pointer transition"
                        >
                          <Eye className="h-4.5 w-4.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteResponse(resp._id)}
                          className="p-1.5 rounded hover:bg-destructive/10 text-destructive cursor-pointer transition"
                        >
                          <Trash2 className="h-4.5 w-4.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-border pt-4">
              <span className="text-xs text-muted-foreground">Page {page} of {totalPages}</span>
              <div className="flex space-x-1.5">
                <button
                  disabled={page <= 1}
                  onClick={() => setPage(page - 1)}
                  className="p-1.5 border border-border hover:bg-muted rounded text-foreground cursor-pointer transition disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  disabled={page >= totalPages}
                  onClick={() => setPage(page + 1)}
                  className="p-1.5 border border-border hover:bg-muted rounded text-foreground cursor-pointer transition disabled:opacity-40"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Response Detail / Viewer Modal */}
      <AnimatePresence>
        {selectedResponse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSelectedResponse(null)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg glass border border-border rounded-2xl shadow-2xl p-6 relative bg-background/95 flex flex-col max-h-[80vh]"
            >
              <div className="flex justify-between items-center pb-2.5 border-b border-border">
                <div>
                  <h3 className="font-extrabold text-foreground text-sm">Submission Details</h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Submitted on {formatDateTime(selectedResponse.submittedAt)}</p>
                </div>
                <button onClick={() => setSelectedResponse(null)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 pt-4 pr-1 text-xs">
                {getActiveCandidateFields().length > 0 && (
                  <div className="bg-purple-500/5 border border-purple-500/15 p-4 rounded-xl space-y-2 mb-4">
                    <h4 className="font-extrabold text-[10px] text-purple-600 dark:text-purple-400 uppercase tracking-wider">Candidate Information</h4>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      {getActiveCandidateFields().map(cf => (
                        <div key={cf.id} className="space-y-0.5">
                          <span className="font-semibold text-muted-foreground text-[10px] block">{cf.label}</span>
                          <span className="font-bold text-foreground">{getCandidateValue(selectedResponse, cf)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedResponse.quizResult && (
                  <div className="bg-emerald-500/5 border border-emerald-500/15 p-4 rounded-xl space-y-2 mb-4">
                    <h4 className="font-extrabold text-[10px] text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Quiz Performance</h4>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div>
                        <span className="font-semibold text-muted-foreground text-[9px] block">Score</span>
                        <span className="font-bold text-foreground">{selectedResponse.quizResult.score} / {selectedResponse.quizResult.totalMarks}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-muted-foreground text-[9px] block">Time Taken</span>
                        <span className="font-bold text-foreground">
                          {Math.floor(selectedResponse.quizResult.timeTaken / 60)}m {selectedResponse.quizResult.timeTaken % 60}s
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-muted-foreground text-[9px] block">Status</span>
                        <span className={`font-bold ${selectedResponse.quizResult.passed ? "text-emerald-500" : "text-red-500"}`}>
                          {selectedResponse.quizResult.passed ? "PASSED" : "FAILED"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {form.fields.map((field) => {
                  const val = selectedResponse.data[field.id];
                  let displayVal = "-";
                  if (val) {
                    if (typeof val === "object") {
                      displayVal = Array.isArray(val) ? val.join(", ") : JSON.stringify(val);
                    } else {
                      displayVal = String(val);
                    }
                  }

                  return (
                    <div key={field.id} className="space-y-1 bg-muted/10 border border-border/50 rounded-lg p-3">
                      <p className="font-semibold text-foreground">{field.label}</p>
                      <p className="text-muted-foreground whitespace-pre-wrap mt-0.5">{displayVal}</p>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-border pt-4 mt-4 flex justify-end gap-2">
                <button
                  onClick={() => handleDeleteResponse(selectedResponse._id)}
                  className="px-4 py-2 bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg text-xs font-semibold cursor-pointer transition flex items-center space-x-1"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>Delete Response</span>
                </button>
                <button
                  onClick={() => setSelectedResponse(null)}
                  className="px-4 py-2 bg-muted border border-border hover:bg-muted/70 rounded-lg text-xs font-semibold text-foreground cursor-pointer transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
