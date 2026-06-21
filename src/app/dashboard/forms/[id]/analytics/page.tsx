"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, BarChart2, Eye, CheckCircle2, TrendingUp, Calendar, RefreshCw,
  ChevronUp, ChevronDown, ArrowUpDown, Download
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, PieChart, Pie, Cell
} from "recharts";

const CHART_COLORS = ['#0ea5e9', '#8b5cf6', '#f59e0b', '#10b981', '#f43f5e', '#64748b'];
import { toast } from "react-hot-toast";
import { Form, AnalyticsData } from "@/lib/types";
import { jsPDF } from "jspdf";
import * as htmlToImage from "html-to-image";

export default function AnalyticsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState<Form | null>(null);
  const [analytics, setAnalytics] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState<"7" | "30" | "all">("30");
  const [isExporting, setIsExporting] = useState(false);
  const [leaderboardSort, setLeaderboardSort] = useState<{
    key: "score" | "name" | "rollNumber" | "class" | "timeTaken" | "submittedAt" | "percentage";
    direction: "asc" | "desc";
  }>({
    key: "score",
    direction: "desc"
  });
  const [chartView, setChartView] = useState<"bar" | "pie">("bar");

  const handleSortLeaderboard = (key: "score" | "name" | "rollNumber" | "class" | "timeTaken" | "submittedAt" | "percentage") => {
    setLeaderboardSort(prev => {
      if (prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: key === "score" || key === "submittedAt" || key === "percentage" ? "desc" : "asc" };
    });
  };

  const getActiveCandidateFields = () => {
    if (!form || !form.candidateInfoSettings) return [];
    const fields: any[] = [];
    Object.keys(form.candidateInfoSettings).forEach(key => {
      if (key === "customFields") return;
      const setting = (form.candidateInfoSettings as any)[key];
      if (setting?.enabled) {
        fields.push({ id: key, label: setting.label || key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'), isCustom: false });
      }
    });
    (form.candidateInfoSettings.customFields || []).forEach((cf: any) => {
      if (cf.enabled !== false) {
        fields.push({ id: cf.id, label: cf.label, isCustom: true });
      }
    });
    return fields;
  };

  const getCandidateValue = (candidateInfo: any, field: any) => {
    if (!candidateInfo) return "";
    if (field.isCustom) {
      const customVal = (candidateInfo.customFields || []).find((c: any) => c.fieldId === field.id || c.label === field.label);
      return customVal ? customVal.value : "";
    }
    return candidateInfo[field.id] || "";
  };

  const getSortedLeaderboard = () => {
    if (!analytics?.quizStats?.leaderboard) return [];
    
    return [...analytics.quizStats.leaderboard].sort((a, b) => {
      let aVal: any = "";
      let bVal: any = "";
      
      switch (leaderboardSort.key) {
        case "name":
          aVal = a.name?.toLowerCase() || "";
          bVal = b.name?.toLowerCase() || "";
          break;
        case "score":
          aVal = a.score ?? 0;
          bVal = b.score ?? 0;
          break;
        case "percentage":
          aVal = a.percentage ?? 0;
          bVal = b.percentage ?? 0;
          break;
        case "timeTaken":
          aVal = a.timeTaken ?? 0;
          bVal = b.timeTaken ?? 0;
          break;
        case "rollNumber":
          aVal = a.candidateInfo?.rollNumber?.toLowerCase() || "";
          bVal = b.candidateInfo?.rollNumber?.toLowerCase() || "";
          break;
        case "class":
          aVal = a.candidateInfo?.class?.toLowerCase() || "";
          bVal = b.candidateInfo?.class?.toLowerCase() || "";
          break;
        case "submittedAt":
          aVal = new Date(a.submittedAt).getTime();
          bVal = new Date(b.submittedAt).getTime();
          break;
        default:
          return 0;
      }
      
      if (aVal < bVal) return leaderboardSort.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return leaderboardSort.direction === "asc" ? 1 : -1;
      return 0;
    });
  };

  const fetchAnalytics = async () => {
    try {
      const formRes = await fetch(`/api/forms/${id}`);
      const formData = await formRes.json();
      if (!formRes.ok) throw new Error(formData.error);
      setForm(formData.form);

      const analyticRes = await fetch(`/api/forms/${id}/analytics?days=${dateRange}`);
      const analyticData = await analyticRes.json();
      if (!analyticRes.ok) throw new Error(analyticData.error);
      setAnalytics(analyticData);
    } catch (err) {
      toast.error("Failed to load analytics details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchAnalytics();
  }, [id, dateRange]);

  const exportPDF = async () => {
    setIsExporting(true);
    toast.loading("Generating PDF Report...", { id: "pdf-export" });
    try {
      const element = document.getElementById("analytics-dashboard-content");
      if (!element) throw new Error("Dashboard not found");
      
      const imgData = await htmlToImage.toPng(element, { quality: 1, pixelRatio: 2 });
      
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      // Calculate height based on actual element dimensions
      const pdfHeight = (element.offsetHeight * pdfWidth) / element.offsetWidth;
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${form?.title || "Form"}-Analytics-Report.pdf`);
      toast.success("PDF Report Downloaded!", { id: "pdf-export" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate PDF", { id: "pdf-export" });
    } finally {
      setIsExporting(false);
    }
  };

  if (loading && !form) {
    return (
      <div className="flex h-[70vh] items-center justify-center space-x-2">
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <span className="text-sm font-semibold text-muted-foreground">Preparing reports...</span>
      </div>
    );
  }

  if (!form || !analytics) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 font-bold">Workspace Error: Analytics report could not load</p>
        <button onClick={() => router.push("/dashboard")} className="mt-4 text-xs font-bold text-primary underline">Go to Dashboard</button>
      </div>
    );
  }

  const conversionRate = form.views > 0 ? Math.round((form.responses / form.views) * 100) : 0;

  return (
    <div className="space-y-8 pb-12">
      {/* Top action header */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => router.push("/dashboard")}
          className="p-2 border border-border hover:bg-muted rounded-lg text-foreground cursor-pointer transition"
        >
          <ArrowLeft className="h-4.5 w-4.5" />
        </button>
        <div>
          <h1 className="font-extrabold text-foreground text-2xl tracking-tight">Form Performance</h1>
          <p className="text-xs text-muted-foreground mt-0.5">Analytics review of &quot;{form.title}&quot;</p>
        </div>
      </div>

      {/* Filters and Export Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card/30 border border-border p-4 rounded-xl glass">
        <div className="flex items-center space-x-2 shrink-0">
          <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Date Range</span>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value as any)}
            className="bg-background border border-border text-xs px-2.5 py-1.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-foreground font-semibold"
          >
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
            <option value="all">All Time</option>
          </select>
        </div>

        <button
          onClick={exportPDF}
          disabled={isExporting}
          className="flex items-center justify-center space-x-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold px-4 py-2 rounded-lg cursor-pointer transition disabled:opacity-50 shadow-md shadow-primary/20"
        >
          {isExporting ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
          <span>Export PDF Report</span>
        </button>
      </div>

      <div id="analytics-dashboard-content" className="space-y-8 bg-background p-1 rounded-xl">
        {/* Conditional Rendering for Quiz vs Form Analytics */}
      {analytics.isQuizMode && analytics.quizStats ? (
        /* Quiz Assessment Performance Dashboard */
        <>
          {/* Quiz Stats Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="glass p-5 rounded-2xl border border-border relative overflow-hidden">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">Total Attempts</span>
              <p className="text-3xl font-extrabold mt-2 text-foreground">{analytics.responses || 0}</p>
              <p className="text-[10px] text-muted-foreground mt-1">Total completed assessments</p>
            </div>

            <div className="glass p-5 rounded-2xl border border-border relative overflow-hidden">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">Average Score</span>
              <p className="text-3xl font-extrabold mt-2 text-purple-600 dark:text-purple-400">{analytics.quizStats.averageScore || 0}</p>
              <p className="text-[10px] text-muted-foreground mt-1">Average candidate mark</p>
            </div>

            <div className="glass p-5 rounded-2xl border border-border relative overflow-hidden">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">Pass Rate</span>
              <p className="text-3xl font-extrabold mt-2 text-emerald-500">{analytics.quizStats.passRate || 0}%</p>
              <p className="text-[10px] text-muted-foreground mt-1">Candidates passing grade</p>
            </div>

            <div className="glass p-5 rounded-2xl border border-border relative overflow-hidden">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">Score Extremes (High / Low)</span>
              <p className="text-3xl font-extrabold mt-2 text-foreground">
                {analytics.quizStats.highestScore} <span className="text-sm font-normal text-muted-foreground">/ {analytics.quizStats.lowestScore}</span>
              </p>
              <p className="text-[10px] text-muted-foreground mt-1">Highest vs lowest quiz score</p>
            </div>
          </div>

          {/* Assessment Insights */}
          <div className="glass border border-border rounded-2xl p-6 relative overflow-hidden space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border/80">
              <h3 className="font-extrabold text-foreground text-sm flex items-center space-x-2">
                <TrendingUp className="h-4.5 w-4.5 text-purple-500" />
                <span>Assessment Insights</span>
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-500 text-[10px] font-black uppercase tracking-wider">
                Status: {analytics.quizStats.passRate >= 70 ? "Excellent Performance" : analytics.quizStats.passRate >= 40 ? "Average Performance" : "Needs Review"}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground max-w-3xl">
              This assessment has recorded {analytics.responses || 0} attempts. The average candidate grade stands at {analytics.quizStats.averageScore} points with a {analytics.quizStats.passRate}% success rate.
              {analytics.quizStats.passRate < 50 && " Consider revising medium or hard questions with low completion rates to improve candidate outcomes."}
              {analytics.quizStats.passRate >= 70 && " High candidate accuracy suggests instructions are clear and materials align well with candidate skills."}
            </p>
          </div>

          {/* Quiz Specific Charts Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Score Distribution Chart */}
            <div className="lg:col-span-1 glass border border-border rounded-2xl p-5 space-y-4">
              <div>
                <h3 className="font-extrabold text-foreground text-sm flex items-center space-x-2">
                  <BarChart2 className="h-4.5 w-4.5 text-purple-500" />
                  <span>Score Distribution</span>
                </h3>
                <p className="text-[10px] text-muted-foreground">Attempts count by score bucket</p>
              </div>

              <div className="h-[280px] w-full text-xs">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analytics.quizStats.scoreDistribution}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" className="dark:stroke-neutral-800" />
                    <XAxis dataKey="name" stroke="#94A3B8" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94A3B8" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ 
                        background: "rgba(255,255,255,0.9)", 
                        borderRadius: "8px", 
                        border: "1px solid #E2E8F0",
                        color: "#0F172A",
                        fontSize: "11px"
                      }} 
                    />
                    <Bar dataKey="count" name="Attempts" fill="#a855f7" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Quiz Leaderboard Grid */}
            <div className="lg:col-span-2 glass border border-border rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <h3 className="font-extrabold text-foreground text-sm flex items-center space-x-2">
                    <TrendingUp className="h-4.5 w-4.5 text-emerald-500" />
                    <span>Assessment Leaderboard</span>
                  </h3>
                  <p className="text-[10px] text-muted-foreground">Top candidate attempts sorted by score</p>
                </div>
                
                <div className="flex items-center space-x-2 shrink-0">
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Sort</span>
                  <select
                    value={`${leaderboardSort.key}_${leaderboardSort.direction}`}
                    onChange={(e) => {
                      const [key, dir] = e.target.value.split("_");
                      setLeaderboardSort({
                        key: key as any,
                        direction: dir as any
                      });
                    }}
                    className="bg-background border border-border text-[10px] px-2 py-1 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-foreground font-semibold"
                  >
                    <option value="score_desc">Score: High to Low</option>
                    <option value="score_asc">Score: Low to High</option>
                    <option value="name_asc">Name: A to Z</option>
                    <option value="name_desc">Name: Z to A</option>
                    <option value="rollNumber_asc">Roll Number: A to Z</option>
                    <option value="rollNumber_desc">Roll Number: Z to A</option>
                    <option value="class_asc">Class: A to Z</option>
                    <option value="class_desc">Class: Z to A</option>
                    <option value="timeTaken_asc">Duration: Low to High</option>
                    <option value="timeTaken_desc">Duration: High to Low</option>
                    <option value="submittedAt_desc">Submission: Newest First</option>
                    <option value="submittedAt_asc">Submission: Oldest First</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs divide-y divide-border/60">
                  <thead>
                    <tr className="text-muted-foreground font-bold text-[10px] uppercase tracking-wider select-none">
                      <th className="py-2.5 px-3">Rank</th>
                      <th 
                        className="py-2.5 px-3 cursor-pointer hover:text-foreground transition-colors"
                        onClick={() => handleSortLeaderboard("name")}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Respondent</span>
                          {leaderboardSort.key === "name" ? (
                            leaderboardSort.direction === "asc" ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />
                          ) : (
                            <ArrowUpDown className="h-3 w-3 opacity-40" />
                          )}
                        </div>
                      </th>
                      <th 
                        className="py-2.5 px-3 cursor-pointer hover:text-foreground transition-colors"
                        onClick={() => handleSortLeaderboard("score")}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Score</span>
                          {leaderboardSort.key === "score" ? (
                            leaderboardSort.direction === "asc" ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />
                          ) : (
                            <ArrowUpDown className="h-3 w-3 opacity-40" />
                          )}
                        </div>
                      </th>
                      <th 
                        className="py-2.5 px-3 cursor-pointer hover:text-foreground transition-colors"
                        onClick={() => handleSortLeaderboard("percentage")}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Percentage</span>
                          {leaderboardSort.key === "percentage" ? (
                            leaderboardSort.direction === "asc" ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />
                          ) : (
                            <ArrowUpDown className="h-3 w-3 opacity-40" />
                          )}
                        </div>
                      </th>
                      <th 
                        className="py-2.5 px-3 cursor-pointer hover:text-foreground transition-colors"
                        onClick={() => handleSortLeaderboard("timeTaken")}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Duration</span>
                          {leaderboardSort.key === "timeTaken" ? (
                            leaderboardSort.direction === "asc" ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />
                          ) : (
                            <ArrowUpDown className="h-3 w-3 opacity-40" />
                          )}
                        </div>
                      </th>
                      <th 
                        className="py-2.5 px-3 cursor-pointer hover:text-foreground transition-colors text-right"
                        onClick={() => handleSortLeaderboard("submittedAt")}
                      >
                        <div className="flex items-center justify-end space-x-1">
                          <span>Submitted At</span>
                          {leaderboardSort.key === "submittedAt" ? (
                            leaderboardSort.direction === "asc" ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />
                          ) : (
                            <ArrowUpDown className="h-3 w-3 opacity-40" />
                          )}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-medium">
                    {getSortedLeaderboard().length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-6 text-center text-muted-foreground italic">No quiz attempts recorded yet</td>
                      </tr>
                    ) : (
                      getSortedLeaderboard().map((item: any, idx: number) => {
                        const mins = Math.floor(item.timeTaken / 60);
                        const secs = item.timeTaken % 60;
                        return (
                          <tr key={idx} className="hover:bg-muted/10">
                            <td className="py-2.5 px-3 font-bold text-muted-foreground">#{idx + 1}</td>
                            <td className="py-2.5 px-3">
                              {(() => {
                                const activeFields = getActiveCandidateFields();
                                if (activeFields.length === 0) {
                                  return <div className="font-semibold text-foreground">Anonymous</div>;
                                }
                                
                                const firstField = activeFields[0];
                                const firstValue = getCandidateValue(item.candidateInfo, firstField) || "Anonymous";
                                
                                const otherFields = activeFields.slice(1);
                                
                                return (
                                  <>
                                    <div className="font-semibold text-foreground">{firstValue}</div>
                                    {otherFields.length > 0 && (
                                      <div className="text-[10px] text-purple-600 dark:text-purple-400 mt-0.5 space-y-0.5">
                                        {otherFields.map(cf => {
                                          const val = getCandidateValue(item.candidateInfo, cf);
                                          if (!val) return null;
                                          return <div key={cf.id}><span>{cf.label}: {val}</span></div>;
                                        })}
                                      </div>
                                    )}
                                  </>
                                );
                              })()}
                            </td>
                            <td className="py-2.5 px-3 font-bold text-foreground">{item.score} / {item.totalMarks}</td>
                            <td className="py-2.5 px-3 font-bold text-foreground">{item.percentage}%</td>
                            <td className="py-2.5 px-3 text-muted-foreground">{mins}m {secs}s</td>
                            <td className="py-2.5 px-3 text-right">
                              <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${
                                item.passed 
                                  ? "bg-emerald-500/10 text-emerald-500" 
                                  : "bg-red-500/10 text-red-500"
                              }`}>
                                {item.passed ? "Pass" : "Fail"}
                              </span>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Standard Form Performance Views */
        <>
          {/* Analytics Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="glass p-5 rounded-2xl border border-border relative overflow-hidden">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Views</span>
                <Eye className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-extrabold mt-2 text-foreground">{analytics.views || 0}</p>
              <p className="text-[10px] text-muted-foreground mt-1">Unique views on form link</p>
            </div>

            <div className="glass p-5 rounded-2xl border border-border relative overflow-hidden">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Submissions</span>
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              </div>
              <p className="text-3xl font-extrabold mt-2 text-foreground">{analytics.responses || 0}</p>
              <p className="text-[10px] text-muted-foreground mt-1">Total completed submissions</p>
            </div>

            <div className="glass p-5 rounded-2xl border border-border relative overflow-hidden">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Submission Rate</span>
                <TrendingUp className="h-5 w-5 text-indigo-500" />
              </div>
              <p className="text-3xl font-extrabold mt-2 text-foreground">
                {analytics.views > 0 ? Math.round((analytics.responses / analytics.views) * 100) : 0}%
              </p>
              <p className="text-[10px] text-muted-foreground mt-1">Submission percentage per view</p>
            </div>
          </div>

          {/* Insights & Recommendation Panel */}
          <div className="glass border border-border rounded-2xl p-6 relative overflow-hidden space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border/80">
              <h3 className="font-extrabold text-foreground text-sm flex items-center space-x-2">
                <TrendingUp className="h-4.5 w-4.5 text-purple-500" />
                <span>Analytics & Insights</span>
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-500 text-[10px] font-black uppercase tracking-wider">
                Sentiment: {analytics.aiInsights?.sentiment || "Neutral"}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground max-w-3xl">
              {analytics.aiInsights?.summary}
            </p>
            {analytics.aiInsights?.suggestions && analytics.aiInsights.suggestions.length > 0 && (
              <div className="pt-2 text-xs space-y-2">
                <p className="font-bold text-foreground">Optimization Action Items:</p>
                <ul className="list-disc pl-4 space-y-1.5 text-muted-foreground">
                  {analytics.aiInsights.suggestions.map((suggestion: string, idx: number) => (
                    <li key={idx}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Chart Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Responses Over Time Area Chart */}
            <div className="lg:col-span-2 glass border border-border rounded-2xl p-5 space-y-4">
              <div>
                <h3 className="font-extrabold text-foreground text-sm flex items-center space-x-2">
                  <Calendar className="h-4.5 w-4.5 text-primary" />
                  <span>Responses (Last 30 Days)</span>
                </h3>
                <p className="text-[10px] text-muted-foreground">Submissions tracking daily</p>
              </div>

              <div className="h-[280px] w-full text-xs">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={analytics.responsesOverTime}>
                    <defs>
                      <linearGradient id="colorResponses" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" className="dark:stroke-neutral-800" />
                    <XAxis dataKey="date" stroke="#94A3B8" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94A3B8" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ 
                        background: "rgba(255,255,255,0.9)", 
                        borderRadius: "8px", 
                        border: "1px solid #E2E8F0",
                        color: "#0F172A",
                        fontSize: "11px"
                      }} 
                    />
                    <Area type="monotone" dataKey="count" name="Submissions" stroke="#0ea5e9" strokeWidth={2} fillOpacity={1} fill="url(#colorResponses)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Weekly Day of Week Bar Chart */}
            <div className="glass border border-border rounded-2xl p-5 space-y-4 lg:col-span-1">
              <div>
                <h3 className="font-extrabold text-foreground text-sm flex items-center space-x-2">
                  <BarChart2 className="h-4.5 w-4.5 text-indigo-500" />
                  <span>Submissions by Day</span>
                </h3>
                <p className="text-[10px] text-muted-foreground">Traffic patterns throughout the week</p>
              </div>

              <div className="h-[280px] w-full text-xs">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analytics.dailyActivity}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" className="dark:stroke-neutral-800" />
                    <XAxis dataKey="day" stroke="#94A3B8" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94A3B8" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ 
                        background: "rgba(255,255,255,0.9)", 
                        borderRadius: "8px", 
                        border: "1px solid #E2E8F0",
                        color: "#0F172A",
                        fontSize: "11px"
                      }} 
                    />
                    <Bar dataKey="count" name="Submissions" fill="#818cf8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Question by Question results breakdowns */}
      <div className="space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-lg font-bold text-foreground">Question-by-Question breakdown</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Explore detailed response statistics for each field</p>
          </div>
          
          <div className="flex items-center space-x-1.5 bg-muted/50 p-1 rounded-lg border border-border">
            <button 
              onClick={() => setChartView('bar')}
              className={`px-3 py-1.5 text-[11px] font-bold rounded-md transition ${chartView === 'bar' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Progress Bars
            </button>
            <button 
              onClick={() => setChartView('pie')}
              className={`px-3 py-1.5 text-[11px] font-bold rounded-md transition ${chartView === 'pie' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Pie Charts
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {analytics.questionStats?.map((stat: any) => (
            <div key={stat.fieldId} className="glass border border-border rounded-2xl p-5 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-widest font-black text-muted-foreground">{stat.type} field</span>
                  <span className="text-[10px] font-bold text-primary">Completion: {stat.completionRate}%</span>
                </div>
                <h4 className="font-extrabold text-foreground text-xs mt-1.5">{stat.label}</h4>
              </div>

              {/* Selection Distribution chart */}
              {stat.optionsDistribution && (
                <div className="space-y-2 mt-2 text-xs flex-1 flex flex-col justify-center">
                  {chartView === 'bar' ? (
                    stat.optionsDistribution.map((opt: any) => (
                      <div key={opt.value} className="space-y-1">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-muted-foreground truncate mr-2" title={opt.label}>{opt.label}</span>
                          <span className="font-bold text-foreground whitespace-nowrap">{opt.count} ({opt.percentage}%)</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: `${opt.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="h-[220px] w-full mt-2 relative">
                      {stat.optionsDistribution.every((opt: any) => opt.count === 0) ? (
                        <div className="absolute inset-0 flex items-center justify-center text-[10px] text-muted-foreground italic">
                          No data to display
                        </div>
                      ) : (
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={stat.optionsDistribution.filter((opt: any) => opt.count > 0)}
                              cx="50%"
                              cy="45%"
                              innerRadius={45}
                              outerRadius={75}
                              paddingAngle={2}
                              dataKey="count"
                              nameKey="label"
                            >
                              {stat.optionsDistribution.filter((opt: any) => opt.count > 0).map((entry: any, index: number) => (
                                <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip 
                              formatter={(value: any, name: any, props: any) => [`${value} (${props.payload.percentage}%)`, name]}
                              contentStyle={{ 
                                background: "rgba(255,255,255,0.95)", 
                                borderRadius: "8px", 
                                border: "1px solid #E2E8F0",
                                color: "#0F172A",
                                fontSize: "11px",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                              }} 
                            />
                            <Legend 
                              layout="horizontal" 
                              verticalAlign="bottom" 
                              align="center"
                              wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Star Rating Distribution details */}
              {stat.ratingsDistribution && (
                <div className="space-y-2 mt-2 text-xs">
                  <p className="font-bold text-primary text-[11px]">Average rating: {stat.averageRating} ★</p>
                  {stat.ratingsDistribution.map((rate: any) => (
                    <div key={rate.rating} className="flex items-center justify-between text-[11px]">
                      <span className="text-muted-foreground flex items-center">{rate.rating} ★</span>
                      <div className="flex-1 mx-3 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-yellow-500" 
                          style={{ width: `${rate.percentage}%` }}
                        />
                      </div>
                      <span className="font-bold text-foreground w-12 text-right">{rate.count} ({rate.percentage}%)</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Recent Text Submissions list */}
              {stat.recentTextSubmissions && (
                <div className="space-y-1.5 mt-2 text-[11px]">
                  <p className="font-bold text-muted-foreground text-[10px] uppercase tracking-wider">Recent answers</p>
                  {stat.recentTextSubmissions.length === 0 ? (
                    <p className="text-muted-foreground italic text-[10px]">No responses yet</p>
                  ) : (
                    <ul className="divide-y divide-border/50">
                      {stat.recentTextSubmissions.map((answer: string, idx: number) => (
                        <li key={idx} className="py-1 text-muted-foreground truncate" title={answer}>
                          {answer}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
