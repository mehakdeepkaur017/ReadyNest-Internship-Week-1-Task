"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { 
  CheckCircle2, AlertCircle, Send, Star, HelpCircle, Sparkles, Clock, Timer
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { useSession, signIn } from "next-auth/react";
import { Form, FormField } from "@/lib/types";
import { generateQuizPDF } from "@/lib/pdf-generator";
import { getBuilderContext } from "@/lib/contextBuilder";

// Helper for shuffling arrays
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function PublicFormPage() {
  const { slug } = useParams();
  const { data: session, status: authStatus } = useSession();
  const [form, setForm] = useState<Form | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Onboarding candidate fields states
  const [showCandidateForm, setShowCandidateForm] = useState(false);
  const [candidateData, setCandidateData] = useState<Record<string, string>>({});
  const [candidateErrors, setCandidateErrors] = useState<Record<string, string>>({});

  // Quiz States
  const [shuffledFields, setShuffledFields] = useState<FormField[]>([]);
  const [quizResult, setQuizResult] = useState<any | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);

  // Auto-start logic if welcome screen is disabled
  useEffect(() => {
    if (form && !loading && !started && !showCandidateForm) {
      const isQuiz = form.isQuizMode;
      const showWelcome = form.welcomeScreen?.show;
      const hasCandidateInfo = form.candidateInfoSettings && (
        Object.keys(form.candidateInfoSettings).some(k => k !== "customFields" && (form.candidateInfoSettings as any)[k]?.enabled) || 
        (form.candidateInfoSettings.customFields && form.candidateInfoSettings.customFields.length > 0)
      );

      if (!showWelcome && !isQuiz) {
        if (hasCandidateInfo) {
          setShowCandidateForm(true);
        } else {
          setStarted(true);
        }
      }
    }
  }, [form, loading, started, showCandidateForm]);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await fetch(`/api/public/${slug}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);
        setForm(data.form);

        // Prepopulate default values
        const defaults: Record<string, any> = {};
        data.form.fields.forEach((f: FormField) => {
          if (f.defaultValue) {
            defaults[f.id] = f.defaultValue;
          } else if (f.type === "checkbox") {
            defaults[f.id] = [];
          } else if (f.type === "rating") {
            defaults[f.id] = 0;
          }
        });
        setFormData(defaults);

        // Handle Shuffling
        let fieldsToRender = [...data.form.fields];
        if (data.form.formSettings?.shuffleQuestionOrder || (data.form.isQuizMode && data.form.quizSettings?.shuffleQuestions)) {
          fieldsToRender = shuffleArray(fieldsToRender);
        }

        if (data.form.isQuizMode) {
          const settings = data.form.quizSettings;
          if (settings?.shuffleOptions) {
            fieldsToRender = fieldsToRender.map(field => {
              if (field.options && field.options.length > 0) {
                return { ...field, options: shuffleArray([...field.options]) };
              }
              return field;
            });
          }
          if (settings?.timeLimit > 0) {
            setTimeLeft(settings.timeLimit * 60);
          }
        }
        // Handle Email Collection
        if (data.form.formSettings?.collectEmailAddresses === "responder_input") {
          data.form.candidateInfoSettings = {
            ...data.form.candidateInfoSettings,
            email: { enabled: true, required: true, label: "Email Address" }
          };
        }

        setShuffledFields(fieldsToRender);
      } catch (err: any) {
        toast.error(err.message || "Failed to load form");
      } finally {
        setLoading(false);
      }
    };
    fetchForm();
  }, [slug]);

  // Unified Timer Effect (Counts elapsed timeTaken and handles timeLeft countdown if applicable)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (started && !submitted && form?.isQuizMode) {
      const hasTimeLimit = form.quizSettings && form.quizSettings.timeLimit > 0;
      
      interval = setInterval(() => {
        if (hasTimeLimit) {
          setTimeLeft((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              handleAutoSubmit();
              return 0;
            }
            return prev - 1;
          });
        }
        setTimeTaken((prev) => prev + 1);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [started, submitted, form]);

  const handleAutoSubmit = () => {
    toast.error("Time limit reached! Submitting your answers automatically...", { duration: 4000 });
    submitQuizData(true);
  };

  // Calculate Form Completion Progress percentage
  const getCompletionProgress = () => {
    if (!form || form.fields.length === 0) return 0;
    
    // Count required fields completed or normal fields filled
    const totalFields = form.fields.length;
    let completedCount = 0;

    form.fields.forEach((f) => {
      const val = formData[f.id];
      if (val !== undefined && val !== null && val !== "") {
        if (Array.isArray(val) && val.length === 0) return;
        completedCount++;
      }
    });

    return Math.round((completedCount / totalFields) * 100);
  };

  const handleInputChange = (fieldId: string, val: any) => {
    setFormData((prev) => ({ ...prev, [fieldId]: val }));
    // Clear error
    if (errors[fieldId]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[fieldId];
        return copy;
      });
    }
  };

  const handleCheckboxChange = (fieldId: string, value: string, checked: boolean) => {
    const current = formData[fieldId] || [];
    let updated = [...current];
    if (checked) {
      updated.push(value);
    } else {
      updated = updated.filter((v) => v !== value);
    }
    handleInputChange(fieldId, updated);
  };

  // Submit Handler with dynamic validation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitQuizData(false);
  };

  const handleStartClick = () => {
    if (!form) return;
    const hasCandidateInfo = form.candidateInfoSettings && (
      Object.keys(form.candidateInfoSettings).some(k => k !== "customFields" && (form.candidateInfoSettings as any)[k]?.enabled) || 
      (form.candidateInfoSettings.customFields && form.candidateInfoSettings.customFields.length > 0)
    );

    if (hasCandidateInfo) {
      setShowCandidateForm(true);
    } else {
      setStarted(true);
    }
  };

  const handleStartAssessmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form) return;

    const newErrors: Record<string, string> = {};
    // Predefined fields validation
    Object.keys(form.candidateInfoSettings || {}).forEach((key) => {
      if (key === "customFields") return;
      const field = (form.candidateInfoSettings as any)[key];
      if (field?.enabled && field?.required) {
        if (!candidateData[key] || !candidateData[key].trim()) {
          newErrors[key] = `${field.label} is required`;
        }
      }
    });

    // Custom fields validation
    (form.candidateInfoSettings?.customFields || []).forEach((field: any) => {
      if (field.enabled && field.required) {
        if (!candidateData[field.id] || !candidateData[field.id].trim()) {
          newErrors[field.id] = `${field.label} is required`;
        }
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setCandidateErrors(newErrors);
      toast.error("Please fill in all required candidate details");
      return;
    }

    setShowCandidateForm(false);
    setStarted(true);
  };

  const submitQuizData = async (isAuto = false) => {
    if (!form) return;

    // Validate fields unless auto submitting
    if (!isAuto) {
      const newErrors: Record<string, string> = {};
      form.fields.forEach((field) => {
        const val = formData[field.id];
        if (field.required && (val === undefined || val === null || val === "" || (Array.isArray(val) && val.length === 0))) {
          newErrors[field.id] = `${field.label} is required`;
        }
      });

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        toast.error("Please fill in all required fields");
        return;
      }
    }

    setSubmitting(true);
    try {
      // Extract standard fields
      const standardFields: Record<string, string> = {};
      const standardKeys = ["name", "rollNumber", "class", "section", "studentId", "email", "phone", "institutionName"];
      standardKeys.forEach(key => {
        if (candidateData[key] !== undefined) {
          standardFields[key] = candidateData[key];
        }
      });

      // Extract custom fields with separate label/value structures and stable field IDs
      const customFieldsSubmitted = (form.candidateInfoSettings?.customFields || [])
        .filter((cf: any) => cf.enabled)
        .map((cf: any) => ({
          fieldId: cf.id,
          label: cf.label,
          value: candidateData[cf.id] || ""
        }));

      const finalCandidateInfo = {
        ...standardFields,
        customFields: customFieldsSubmitted
      };

      const payload = form.isQuizMode
        ? { data: formData, timeTaken, candidateInfo: finalCandidateInfo }
        : { data: formData, candidateInfo: finalCandidateInfo };

      const res = await fetch(`/api/public/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Submission failed");
      }

      const resData = await res.json();
      if (resData.quizResult) {
        setQuizResult(resData.quizResult);
      }

      setSubmitted(true);
      toast.success(form.isQuizMode ? "Quiz completed!" : "Form submitted successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to submit response");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center space-x-2 bg-background dot-pattern">
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <span className="text-sm font-semibold text-muted-foreground">Preparing Form...</span>
      </div>
    );
  }

  if (!form) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4 bg-background dot-pattern text-center">
        <div className="glass max-w-sm p-8 rounded-2xl border border-border space-y-3">
          <AlertCircle className="h-10 w-10 text-destructive mx-auto" />
          <h3 className="font-extrabold text-foreground text-sm">Form Not Found</h3>
          <p className="text-xs text-muted-foreground">This form link may have expired, been deactivated, or deleted.</p>
        </div>
      </div>
    );
  }

  const progress = getCompletionProgress();

  const theme = form.themeSettings || {
    primaryColor: "#0f172a",
    backgroundColor: "#f8fafc",
    textColor: "#0f172a",
    cardColor: "#ffffff",
    buttonTextColor: "#ffffff",
    borderRadius: "12px",
    font: "Inter",
    layout: "classic"
  };

  const welcome = form.welcomeScreen || {
    show: false,
    title: "Welcome",
    description: "Please fill out this form.",
    buttonText: "Start"
  };

  const success = form.successScreen || {
    title: "Thank You!",
    description: "Your response has been successfully recorded.",
    showButton: true,
    buttonText: "Submit Another Response",
    redirectUrl: ""
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleDownloadPDF = (result: any) => {
    if (!form) return;
    try {
      generateQuizPDF(form.title, result, form.fields);
      toast.success("PDF report downloaded successfully!");
    } catch (err) {
      toast.error("Failed to generate PDF report");
    }
  };

  const isQuiz = form.isQuizMode;
  const quizSettings = form.quizSettings;
  const builderContext = getBuilderContext(form.category || "Business", isQuiz);
  
  const requiresAuth = (isQuiz && quizSettings?.requireAuth) || 
    form?.formSettings?.limitOneResponse || 
    form?.formSettings?.collectEmailAddresses === "verified";

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        fontFamily: theme.font,
        color: theme.textColor,
      }}
      className="min-h-screen flex flex-col items-center justify-center p-4 relative transition-all duration-300 dot-pattern"
    >
      <Toaster position="top-right" />

      {/* Progress bar (top) */}
      {!submitted && started && form?.formSettings?.showProgressBar && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-muted/40 z-50">
          <motion.div 
            style={{ width: `${progress}%`, backgroundColor: theme.primaryColor }}
            className="h-full transition-all duration-200"
          />
        </div>
      )}

      {/* Floating Timer Badge */}
      {!submitted && started && isQuiz && quizSettings && quizSettings.timeLimit > 0 && (
        <div className="fixed top-4 right-4 z-50 bg-background/90 backdrop-blur-md border border-purple-500/25 px-4.5 py-2.5 rounded-2xl shadow-xl flex items-center space-x-2.5 text-xs font-black text-purple-600 dark:text-purple-400">
          <Clock className="h-4 w-4 animate-spin text-purple-500" />
          <span>TIME REMAINING: {formatTime(timeLeft)}</span>
        </div>
      )}

      <AnimatePresence mode="wait">
        {requiresAuth && !session ? (
          /* Auth Required Screen */
          <motion.div
            key="auth-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{
              backgroundColor: theme.cardColor,
              borderRadius: theme.borderRadius,
              color: theme.textColor,
            }}
            className="w-full max-w-md shadow-2xl p-8 text-center border border-border/20 space-y-5"
          >
            <AlertCircle className="h-12 w-12 text-purple-500 mx-auto animate-pulse" />
            <div className="space-y-1.5">
              <h2 className="font-extrabold text-lg" style={{ color: theme.textColor }}>
                Authentication Required
              </h2>
              <p className="text-xs opacity-75">
                Authentication is required to submit this form. Please sign in with your account to continue.
              </p>
            </div>
            <button
              onClick={() => signIn(undefined, { callbackUrl: window.location.href })}
              style={{
                backgroundColor: theme.primaryColor,
                color: theme.buttonTextColor,
                borderRadius: theme.borderRadius,
              }}
              className="w-full py-3 text-xs font-bold cursor-pointer transition hover:opacity-90 shadow-sm"
            >
              Sign In to Continue
            </button>
          </motion.div>
        ) : submitted ? (
          /* Submission success card OR Quiz Report Card */
          isQuiz && quizResult ? (
            <motion.div
              key="quiz-results-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              style={{
                backgroundColor: theme.cardColor,
                borderRadius: theme.borderRadius,
                color: theme.textColor,
              }}
              className="w-full max-w-2xl shadow-2xl p-6 md:p-8 border border-border/20 space-y-6 overflow-y-auto max-h-[90vh] text-left"
            >
              {/* Custom Header inside Results Card */}
              {form.headerSettings?.institutionName && (
                <div className="flex flex-col items-center text-center space-y-1 mb-4 border-b border-border/40 pb-3">
                  {form.headerSettings.showLogo && form.headerSettings.logoUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={form.headerSettings.logoUrl} alt="Logo" className="h-10 max-w-[150px] object-contain mb-1" />
                  )}
                  <h2 className="text-[10px] font-black uppercase tracking-widest opacity-80">{form.headerSettings.institutionName}</h2>
                  {form.headerSettings.title && <h1 className="text-sm font-black text-foreground mt-0.5">{form.headerSettings.title}</h1>}
                  {form.headerSettings.subtitle && <p className="text-[9px] text-muted-foreground">{form.headerSettings.subtitle}</p>}
                </div>
              )}

              {/* Onboarding Candidate info display */}
              {Object.keys(candidateData).length > 0 && builderContext && (
                <div className="bg-purple-500/5 border border-purple-500/10 rounded-xl p-4 text-xs space-y-2 mb-4">
                  <h4 className="font-extrabold text-[10px] text-purple-600 dark:text-purple-400 uppercase tracking-wider">{builderContext.infoSectionTitle}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.keys(form.candidateInfoSettings || {}).map(key => {
                      if (key === "customFields") return null;
                      const field = (form.candidateInfoSettings as any)[key];
                      if (!field?.enabled || !candidateData[key]) return null;
                      return (
                        <div key={key} className="space-y-0.5">
                          <span className="font-semibold text-muted-foreground text-[10px] block">{field.label}</span>
                          <span className="font-bold text-foreground">{candidateData[key]}</span>
                        </div>
                      );
                    })}
                    {(form.candidateInfoSettings?.customFields || []).map((field: any) => {
                      if (!field.enabled || !candidateData[field.id]) return null;
                      return (
                        <div key={field.id} className="space-y-0.5">
                          <span className="font-semibold text-muted-foreground text-[10px] block">{field.label}</span>
                          <span className="font-bold text-foreground">{candidateData[field.id]}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {/* Pass/Fail Banner */}
              <div className={`p-6 rounded-2xl text-center space-y-2 border ${
                quizResult.passed 
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400" 
                  : "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400"
              }`}>
                <span className="text-3xl font-black">{quizResult.passed ? "🎉 Passed!" : "😢 Try Again"}</span>
                <p className="text-xs font-semibold opacity-85">
                  You scored {quizResult.score} out of {quizResult.totalMarks} points ({quizResult.percentage}%)
                </p>
                <div className="w-fit mx-auto mt-2 px-3 py-1 rounded-full bg-background/50 text-[10px] font-bold tracking-wider uppercase">
                  Passing Grade: {quizSettings?.passingPercentage || 40}%
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-muted/30 border border-border/30 p-3 rounded-xl">
                  <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Correct</span>
                  <p className="text-lg font-black text-emerald-500 mt-1">{quizResult.correctAnswersCount}</p>
                </div>
                <div className="bg-muted/30 border border-border/30 p-3 rounded-xl">
                  <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Wrong</span>
                  <p className="text-lg font-black text-red-500 mt-1">{quizResult.wrongAnswersCount}</p>
                </div>
                <div className="bg-muted/30 border border-border/30 p-3 rounded-xl">
                  <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Time Taken</span>
                  <p className="text-lg font-black text-purple-500 mt-1">{formatTime(quizResult.timeTaken)}</p>
                </div>
              </div>

              {/* PDF Results Downloader */}
              <button
                onClick={() => handleDownloadPDF(quizResult)}
                className="w-full py-3 rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/15 font-bold text-xs flex items-center justify-center space-x-2 transition cursor-pointer"
              >
                <span>📥 Download Result PDF Report</span>
              </button>

              {/* Question Review Section */}
              {quizSettings?.showCorrectAnswers && (
                <div className="space-y-4 pt-4 border-t border-border/30">
                  <h3 className="font-extrabold text-foreground text-sm">Question Review</h3>
                  <div className="space-y-3">
                    {form.fields.map((field, idx) => {
                      const ansAnalysis = quizResult.answersAnalysis.find((a: any) => a.fieldId === field.id);
                      if (!ansAnalysis) return null;

                      const submittedVal = formData[field.id];
                      const isCorrect = ansAnalysis.isCorrect;

                      return (
                        <div 
                          key={field.id} 
                          className={`p-4 rounded-xl border space-y-2 text-xs ${
                            isCorrect 
                              ? "bg-emerald-500/5 border-emerald-500/15" 
                              : "bg-red-500/5 border-red-500/15"
                          }`}
                        >
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="font-bold text-foreground text-xs">Q{idx + 1}: {field.label}</h4>
                            <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shrink-0 ${
                              isCorrect 
                                ? "bg-emerald-500/10 text-emerald-500" 
                                : "bg-red-500/10 text-red-500"
                            }`}>
                              {isCorrect ? "Correct" : "Incorrect"} (+{ansAnalysis.scoreAwarded} pts)
                            </span>
                          </div>

                          <div className="space-y-1 text-muted-foreground text-[11px]">
                            <p>
                              <span className="font-bold">Your answer:</span>{" "}
                              {Array.isArray(submittedVal) ? submittedVal.join(", ") : String(submittedVal || "No Answer")}
                            </p>
                            <p className="text-foreground font-semibold">
                              <span className="font-bold text-muted-foreground font-normal">Correct answer:</span>{" "}
                              {Array.isArray(ansAnalysis.correctAnswers) ? ansAnalysis.correctAnswers.join(", ") : String(ansAnalysis.correctAnswers || "N/A")}
                            </p>
                            {quizSettings.showExplanations && ansAnalysis.explanation && (
                              <p className="mt-2 text-[10px] text-purple-600 dark:text-purple-400 bg-purple-500/5 p-2 rounded-lg border border-purple-500/10 italic">
                                <span className="font-bold not-italic uppercase tracking-wider text-[9px] mr-1">Explanation:</span>
                                {ansAnalysis.explanation}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            /* Success screen */
            <motion.div
              key="success-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              style={{
                backgroundColor: theme.cardColor,
                borderRadius: theme.borderRadius,
                color: theme.textColor,
              }}
              className="w-full max-w-md shadow-2xl p-8 text-center border border-border/20 space-y-5"
            >
              <CheckCircle2 className="h-14 w-14 text-emerald-500 mx-auto animate-bounce" />
              <div>
                <h2 className="font-extrabold text-lg" style={{ color: theme.textColor }}>
                  {success.title}
                </h2>
                <p className="text-xs opacity-75 mt-1">{success.description}</p>
              </div>
              {success.showButton && form?.formSettings?.showSubmitAnotherResponse !== false && (
                <button
                  onClick={() => {
                    if (success.redirectUrl) {
                      window.location.href = success.redirectUrl;
                    } else {
                      setFormData({});
                      setSubmitted(false);
                      setStarted(!welcome.show && !isQuiz);
                    }
                  }}
                  style={{
                    backgroundColor: theme.primaryColor,
                    color: theme.buttonTextColor,
                    borderRadius: theme.borderRadius,
                  }}
                  className="w-full py-2.5 text-xs font-semibold cursor-pointer transition hover:opacity-90 shadow-sm"
                >
                  {success.buttonText}
                </button>
              )}
            </motion.div>
          )
        ) : !started ? (
          showCandidateForm ? (
            /* Candidate Onboarding Details Card */
            <motion.div
              key="candidate-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              style={{
                backgroundColor: theme.cardColor,
                borderRadius: theme.borderRadius,
                color: theme.textColor,
              }}
              className="w-full max-w-xl shadow-2xl p-8 border border-border/20 space-y-6 text-left"
            >
              {/* Institution Header inside Onboarding Card */}
              {form.headerSettings?.institutionName && (
                <div className="flex flex-col items-center text-center space-y-1 mb-4 border-b border-border/40 pb-3">
                  {form.headerSettings.showLogo && form.headerSettings.logoUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={form.headerSettings.logoUrl} alt="Logo" className="h-10 max-w-[150px] object-contain mb-1" />
                  )}
                  <h2 className="text-[10px] font-black uppercase tracking-widest opacity-80">{form.headerSettings.institutionName}</h2>
                  {form.headerSettings.title && <h1 className="text-sm font-black text-foreground mt-0.5">{form.headerSettings.title}</h1>}
                  {form.headerSettings.subtitle && <p className="text-[9px] text-muted-foreground">{form.headerSettings.subtitle}</p>}
                </div>
              )}

              <div>
                <h2 className="text-xl font-extrabold text-foreground">{builderContext?.infoSectionTitle || "Registration"}</h2>
                <p className="text-xs text-muted-foreground mt-1">Please provide your details below to begin.</p>
              </div>

              <form onSubmit={handleStartAssessmentSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.keys(form.candidateInfoSettings || {}).map((key) => {
                    if (key === "customFields") return null;
                    const field = (form.candidateInfoSettings as any)[key];
                    if (!field?.enabled) return null;

                    return (
                      <div key={key} className="space-y-1">
                        <label className="block font-semibold">
                          {field.label}
                          {field.required && <span className="text-red-500 ml-0.5">*</span>}
                        </label>
                        <input
                          type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
                          placeholder={`Enter your ${field.label.toLowerCase()}...`}
                          value={candidateData[key] || ""}
                          onChange={(e) => {
                            setCandidateData({ ...candidateData, [key]: e.target.value });
                            if (candidateErrors[key]) {
                              const copy = { ...candidateErrors };
                              delete copy[key];
                              setCandidateErrors(copy);
                            }
                          }}
                          className="block w-full rounded-lg border border-border/30 bg-background/30 px-3.5 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 text-xs"
                        />
                        {candidateErrors[key] && (
                          <p className="text-[9px] text-destructive font-semibold">{candidateErrors[key]}</p>
                        )}
                      </div>
                    );
                  })}

                  {/* Render custom fields */}
                  {(form.candidateInfoSettings?.customFields || []).map((field: any) => {
                    if (!field.enabled) return null;
                    return (
                      <div key={field.id} className="space-y-1">
                        <label className="block font-semibold">
                          {field.label}
                          {field.required && <span className="text-red-500 ml-0.5">*</span>}
                        </label>
                        <input
                          type="text"
                          placeholder={`Enter your ${field.label.toLowerCase()}...`}
                          value={candidateData[field.id] || ""}
                          onChange={(e) => {
                            setCandidateData({ ...candidateData, [field.id]: e.target.value });
                            if (candidateErrors[field.id]) {
                              const copy = { ...candidateErrors };
                              delete copy[field.id];
                              setCandidateErrors(copy);
                            }
                          }}
                          className="block w-full rounded-lg border border-border/30 bg-background/30 px-3.5 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 text-xs"
                        />
                        {candidateErrors[field.id] && (
                          <p className="text-[9px] text-destructive font-semibold">{candidateErrors[field.id]}</p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-2 pt-2 justify-end">
                  {welcome.show && (
                    <button
                      type="button"
                      onClick={() => setShowCandidateForm(false)}
                      className="px-4 py-2 border border-border hover:bg-muted rounded-lg font-semibold text-xs cursor-pointer transition text-foreground"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    style={{
                      backgroundColor: theme.primaryColor,
                      color: theme.buttonTextColor,
                      borderRadius: theme.borderRadius,
                    }}
                    className="px-6 py-2 font-bold text-xs hover:opacity-90 shadow-md cursor-pointer transition text-center"
                  >
                    Start
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (welcome.show || isQuiz) ? (
            /* Welcome Screen card / Quiz instructions start card */
            <motion.div
              key="welcome-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              style={{
                backgroundColor: theme.cardColor,
                borderRadius: theme.borderRadius,
                color: theme.textColor,
              }}
              className="w-full max-w-xl shadow-2xl p-8 border border-border/20 text-center space-y-6"
            >
              {/* Custom Header inside Welcome Card */}
              {form.headerSettings?.institutionName && (
                <div className="flex flex-col items-center text-center space-y-1 mb-4 border-b border-border/40 pb-3">
                  {form.headerSettings.showLogo && form.headerSettings.logoUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={form.headerSettings.logoUrl} alt="Logo" className="h-10 max-w-[150px] object-contain mb-1" />
                  )}
                  <h2 className="text-[10px] font-black uppercase tracking-widest opacity-80">{form.headerSettings.institutionName}</h2>
                  {form.headerSettings.title && <h1 className="text-sm font-black text-foreground mt-0.5">{form.headerSettings.title}</h1>}
                  {form.headerSettings.subtitle && <p className="text-[9px] text-muted-foreground">{form.headerSettings.subtitle}</p>}
                </div>
              )}

              <div className="space-y-2">
                <h1 className="text-3xl font-extrabold tracking-tight" style={{ color: theme.textColor }}>
                  {welcome.title}
                </h1>
                <p className="text-sm opacity-80 whitespace-pre-wrap">{welcome.description}</p>
              </div>

              {/* Assessment Instructions Block */}
              {(isQuiz || form.instructions?.show) && (
                <div className="bg-purple-500/5 border border-purple-500/15 p-4 rounded-xl max-w-md mx-auto space-y-3 text-xs text-left">
                  <p className="font-extrabold text-purple-600 dark:text-purple-400 text-center uppercase tracking-wider text-[10px] flex items-center justify-center gap-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Assessment Instructions</span>
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 text-foreground font-semibold">
                    <div>⏱️ Time Limit: <span className="font-extrabold">{quizSettings?.timeLimit ? `${quizSettings.timeLimit} minutes` : "No limit"}</span></div>
                    <div>🎯 Passing Grade: <span className="font-extrabold">{quizSettings?.passingPercentage || 40}%</span></div>
                    <div>🔄 Attempts: <span className="font-extrabold">{quizSettings?.maxAttempts ? `${quizSettings.maxAttempts} max` : "Unlimited"}</span></div>
                    <div>⚖️ Negative Mark: <span className="font-extrabold">{quizSettings?.negativeMarking ? `-${quizSettings.negativeMarkValue} pt` : "None"}</span></div>
                    <div>📝 Total Marks: <span className="font-extrabold">{form.fields.reduce((acc, f) => acc + (f.marks || 1), 0)} points</span></div>
                  </div>

                  {form.instructions?.customNotes && (
                    <div className="text-muted-foreground border-t border-border/20 pt-2 italic text-[11px]">
                      <span className="font-bold not-italic">Regulations:</span> {form.instructions.customNotes}
                    </div>
                  )}
                </div>
              )}

              <button
                onClick={handleStartClick}
                style={{
                  backgroundColor: theme.primaryColor,
                  color: theme.buttonTextColor,
                  borderRadius: theme.borderRadius,
                }}
                className="px-8 py-3 text-xs font-bold transition hover:opacity-90 shadow-md inline-block cursor-pointer"
              >
                {isQuiz ? "Start Assessment" : welcome.buttonText}
              </button>
            </motion.div>
          ) : null
        ) : (
          /* Submission card */
          <motion.div
            key="form-card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            style={{
              backgroundColor: theme.cardColor,
              borderRadius: theme.borderRadius,
              color: theme.textColor,
            }}
            className="w-full max-w-xl shadow-2xl border border-border/20 overflow-hidden flex flex-col relative"
          >
            {/* Custom Header inside Main Submission Card */}
            {form.headerSettings?.institutionName && (
              <div className="p-6 pb-2 md:p-8 md:pb-2 flex flex-col items-center text-center space-y-1 border-b border-border/10">
                {form.headerSettings.showLogo && form.headerSettings.logoUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={form.headerSettings.logoUrl} alt="Logo" className="h-10 max-w-[150px] object-contain mb-1" />
                )}
                <h2 className="text-[10px] font-black uppercase tracking-widest opacity-80">{form.headerSettings.institutionName}</h2>
                {form.headerSettings.title && <h1 className="text-sm font-black text-foreground mt-0.5">{form.headerSettings.title}</h1>}
                {form.headerSettings.subtitle && <p className="text-[9px] text-muted-foreground">{form.headerSettings.subtitle}</p>}
              </div>
            )}

            {/* Header info */}
            <div className="p-6 md:p-8 border-b border-border/10 space-y-2 text-left">
              <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: theme.textColor }}>
                {form.title}
              </h1>
              {form.description && <p className="text-xs opacity-75 whitespace-pre-wrap">{form.description}</p>}
            </div>

            {/* Form list fields */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5 text-xs text-left">
              {shuffledFields.map((field, idx) => (
                <div key={field.id} className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="block text-xs font-semibold text-foreground">
                      {field.label}
                      {field.required && <span className="text-red-500 ml-0.5">*</span>}
                    </label>
                    {isQuiz && field.marks && (
                      <span className="text-[10px] font-extrabold text-purple-500 bg-purple-500/5 px-2.5 py-0.5 border border-purple-500/10 rounded-full">
                        {field.marks} pt{field.marks > 1 ? "s" : ""}
                      </span>
                    )}
                  </div>

                  {field.type === "text" && (
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      value={formData[field.id] || ""}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="block w-full rounded-lg border border-border/30 bg-background/30 px-3.5 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 text-xs transition"
                    />
                  )}

                  {field.type === "textarea" && (
                    <textarea
                      placeholder={field.placeholder}
                      value={formData[field.id] || ""}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      rows={3}
                      className="block w-full rounded-lg border border-border/30 bg-background/30 px-3.5 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 text-xs transition"
                    />
                  )}

                  {field.type === "email" && (
                    <input
                      type="email"
                      placeholder={field.placeholder}
                      value={formData[field.id] || ""}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="block w-full rounded-lg border border-border/30 bg-background/30 px-3.5 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 text-xs transition"
                    />
                  )}

                  {field.type === "number" && (
                    <input
                      type="number"
                      placeholder={field.placeholder}
                      value={formData[field.id] || ""}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="block w-full rounded-lg border border-border/30 bg-background/30 px-3.5 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 text-xs transition"
                    />
                  )}

                  {field.type === "phone" && (
                    <input
                      type="tel"
                      placeholder={field.placeholder}
                      value={formData[field.id] || ""}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="block w-full rounded-lg border border-border/30 bg-background/30 px-3.5 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 text-xs transition"
                    />
                  )}

                  {field.type === "date" && (
                    <input
                      type="date"
                      value={formData[field.id] || ""}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="block w-full rounded-lg border border-border/30 bg-background/30 px-3.5 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 text-xs transition"
                    />
                  )}

                  {field.type === "time" && (
                    <input
                      type="time"
                      value={formData[field.id] || ""}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="block w-full rounded-lg border border-border/30 bg-background/30 px-3.5 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 text-xs transition"
                    />
                  )}

                  {field.type === "dropdown" && (
                    <select
                      value={formData[field.id] || ""}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="block w-full rounded-lg border border-border/30 bg-background/30 px-3.5 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 text-xs transition"
                    >
                      <option value="">Select option...</option>
                      {(field.options || []).map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  )}

                  {field.type === "radio" && (
                    <div className="space-y-2 mt-1 bg-background/10 p-3 rounded-lg border border-border/10">
                      {(field.options || []).map((o) => (
                        <label key={o.value} className="flex items-center space-x-2.5 cursor-pointer text-foreground font-semibold">
                          <input
                            type="radio"
                            name={field.id}
                            value={o.value}
                            checked={formData[field.id] === o.value}
                            onChange={() => handleInputChange(field.id, o.value)}
                            className="bg-background border-border h-4 w-4"
                          />
                          <span>{o.label}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {field.type === "checkbox" && (
                    <div className="space-y-2 mt-1 bg-background/10 p-3 rounded-lg border border-border/10">
                      {(field.options || []).map((o) => {
                        const checked = (formData[field.id] || []).includes(o.value);
                        return (
                          <label key={o.value} className="flex items-center space-x-2.5 cursor-pointer text-foreground font-semibold">
                            <input
                              type="checkbox"
                              name={field.id}
                              value={o.value}
                              checked={checked}
                              onChange={(e) => handleCheckboxChange(field.id, o.value, e.target.checked)}
                              className="rounded bg-background border-border h-4 w-4"
                            />
                            <span>{o.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  )}

                  {field.type === "rating" && (
                    <div className="flex items-center space-x-2 mt-1.5 bg-background/10 p-2.5 rounded-lg border border-border/10 w-fit">
                      {[1, 2, 3, 4, 5].map((val) => (
                        <button
                          type="button"
                          key={val}
                          onClick={() => handleInputChange(field.id, val)}
                          className={`text-xl hover:scale-115 transition duration-150 cursor-pointer ${
                            (formData[field.id] || 0) >= val ? "text-yellow-500 scale-105" : "opacity-30"
                          }`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  )}

                  {field.type === "file" && (
                    <input
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        handleInputChange(field.id, file ? file.name : "");
                      }}
                      className="block w-full text-xs file:mr-4 file:py-2 file:px-3.5 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary file:hover:bg-primary/25 cursor-pointer transition"
                    />
                  )}

                  {field.type === "url" && (
                    <input
                      type="url"
                      placeholder={field.placeholder}
                      value={formData[field.id] || ""}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="block w-full rounded-lg border border-border/30 bg-background/30 px-3.5 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 text-xs transition"
                    />
                  )}

                  {field.type === "password" && (
                    <input
                      type="password"
                      placeholder={field.placeholder}
                      value={formData[field.id] || ""}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="block w-full rounded-lg border border-border/30 bg-background/30 px-3.5 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 text-xs transition"
                    />
                  )}

                  {errors[field.id] && (
                    <p className="text-[10px] text-destructive font-semibold flex items-center pt-0.5">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      <span>{errors[field.id]}</span>
                    </p>
                  )}

                  {field.helpText && (
                    <p className="text-[9px] opacity-60 flex items-center mt-1">
                      <HelpCircle className="h-3 w-3 mr-0.5" />
                      <span>{field.helpText}</span>
                    </p>
                  )}
                </div>
              ))}

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    backgroundColor: theme.primaryColor,
                    color: theme.buttonTextColor,
                    borderRadius: theme.borderRadius,
                  }}
                  className="px-6 py-3 font-bold text-xs transition cursor-pointer flex items-center space-x-2 disabled:opacity-50 shadow-lg"
                >
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent mr-2" />
                      <span>Grading quiz...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-1.5" />
                      <span>{isQuiz ? "Complete Quiz" : "Submit Form"}</span>
                    </>
                  )}
                </button>

                <span className="text-[10px] opacity-50 font-medium">Secured with FormForge</span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
