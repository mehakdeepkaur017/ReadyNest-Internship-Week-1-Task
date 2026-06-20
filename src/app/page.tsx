"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  Sparkles, ArrowRight, FileText, LayoutGrid, CheckCircle2, ChevronRight,
  Users, GraduationCap, BarChart2, Star, Edit3, ClipboardList, HelpCircle, Target, Calendar
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"contact" | "quiz" | "survey">("contact");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Curated list of FAQ items
  const faqs = [
    {
      question: "Is FormForge really 100% free?",
      answer: "Yes, our core product is entirely open and free. There are no paywalls for the builder or response collection."
    },
    {
      question: "How does the Quiz Generation work?",
      answer: "Instead of dealing with unpredictable generation costs and errors, you can configure subject, difficulty, and question type. FormForge instantly compiles a robust, structured test pulling from our verified question bank."
    },
    {
      question: "Can I host quizzes with timer limits and auto-grading?",
      answer: "Absolutely. FormForge features a full Quiz Mode. You can set time limits, enforce passing percentages, shuffle questions, and provide detailed explanations to respondents upon completion."
    },
    {
      question: "Where can I view responses and metrics?",
      answer: "Every form and quiz has a dedicated Analytics tab showing submission rates, score distributions, daily activity graphs, and individual response details."
    },
    {
      question: "Can I export my collected data?",
      answer: "Yes, you can export responses to CSV/Excel formats, and download beautiful PDF reports of quiz results with a single click."
    }
  ];

  // Interactive mockup template definitions
  const mockupFields = {
    contact: [
      { label: "Full Name", type: "Text Field", placeholder: "e.g. Sarah Jenkins" },
      { label: "Email Address", type: "Email Field", placeholder: "sarah@company.com" },
      { label: "Inquiry Details", type: "Text Area", placeholder: "How can we assist you?" }
    ],
    quiz: [
      { label: "Which SQL clause is used to extract rows that satisfy a condition?", type: "MCQ Quiz Question", options: ["GROUP BY", "ORDER BY", "WHERE", "SELECT"] },
      { label: "Java supports multiple inheritance of classes.", type: "True / False", options: ["True", "False"] },
      { label: "What is the average-case retrieval time in a Hash Table?", type: "MCQ Quiz Question", options: ["O(1)", "O(log n)", "O(n)"] }
    ],
    survey: [
      { label: "Overall Satisfaction", type: "Star Rating (1-5)" },
      { label: "How did you hear about us?", type: "Radio Options", options: ["Search Engine", "Social Media", "Friend Referral"] },
      { label: "What can we improve?", type: "Text Area" }
    ]
  };

  return (
    <div className="min-h-screen bg-background dot-pattern flex flex-col justify-between overflow-x-hidden relative mesh-gradient scroll-smooth">
      
      {/* Top Header Navigation */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-background/70 backdrop-blur-md border-b border-border/50 z-50 transition-all">
        <div className="h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-primary-foreground font-black text-lg">F</span>
            </div>
            <div>
              <span className="font-extrabold text-foreground tracking-tight text-lg">FormForge</span>
              <span className="text-[10px] font-bold text-primary block -mt-1 uppercase tracking-wider">Studio</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#demo" className="hover:text-foreground transition-colors">Live Demo</a>
            <a href="#templates" className="hover:text-foreground transition-colors">Templates</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-xs font-semibold text-muted-foreground hover:text-foreground transition">
              Sign In
            </Link>
            <Link
              href="/register"
              className="flex items-center space-x-1.5 px-4 py-2 bg-primary text-primary-foreground font-bold text-xs rounded-lg hover:glow-hover transition shadow-lg shadow-primary/20"
            >
              <span>Get Started</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-32">
        <section className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-10 py-12 md:py-20 relative">
          {/* Decorative background lights */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none -z-10" />

          {/* Sparkle Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-[10px] font-bold bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5 fill-primary/20" />
            <span>100% Free Forever • Unlimited Responses</span>
          </motion.div>

          {/* Hero Title */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground tracking-tight leading-[1.05]"
            >
              Build Forms, Surveys & <br />
              <span className="gradient-text">Online Tests in Minutes</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Create professional forms, smart surveys, auto-graded quizzes, assessments, and feedback systems without subscription tiers or hidden fees.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/register"
              className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:glow-hover transition-all shadow-xl shadow-primary/20 flex items-center justify-center space-x-2"
            >
              <span>Create Your First Form</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </Link>
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-3.5 bg-muted hover:bg-muted/70 text-foreground font-semibold text-sm rounded-xl border border-border transition-all flex items-center justify-center space-x-2"
            >
              <LayoutGrid className="h-4.5 w-4.5" />
              <span>Explore Templates</span>
            </Link>
          </motion.div>

          {/* Interactive Floating Preview Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 50 }}
            className="pt-16 max-w-5xl mx-auto relative z-10"
          >
            <div className="relative glass border border-border/80 rounded-2xl shadow-2xl p-4 md:p-6 bg-background/70 overflow-hidden text-left">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-purple-500 to-teal-500" />
              
              {/* Fake Chrome window control bar */}
              <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-5">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest bg-muted px-3 py-1 rounded-full border border-border/50">
                  FormForge Studio Live Workspace
                </div>
              </div>

              {/* Sidebar layout preview */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1 border-r border-border/50 pr-4 space-y-4 hidden lg:block">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-wider mb-2">Field Presets</p>
                  <div className="space-y-1.5 text-xs text-foreground font-semibold">
                    <div className="p-2 border border-border/80 rounded-lg bg-muted/40 hover:bg-muted/70 transition cursor-pointer flex items-center gap-2"><Edit3 className="h-3.5 w-3.5 text-primary" /> Short Text</div>
                    <div className="p-2 border border-border/80 rounded-lg bg-muted/40 hover:bg-muted/70 transition cursor-pointer flex items-center gap-2"><FileText className="h-3.5 w-3.5 text-primary" /> Long Paragraph</div>
                    <div className="p-2 border border-border/80 rounded-lg bg-muted/40 hover:bg-muted/70 transition cursor-pointer flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-purple-500" /> MCQ Choice</div>
                    <div className="p-2 border border-border/80 rounded-lg bg-muted/40 hover:bg-muted/70 transition cursor-pointer flex items-center gap-2"><Star className="h-3.5 w-3.5 text-amber-500" /> Star Rating</div>
                  </div>
                </div>

                {/* Main page creator visualizer */}
                <div className="lg:col-span-3 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border/40 pb-4 gap-4">
                    <div>
                      <h2 className="text-xl font-black text-foreground">Computer Science Midterm</h2>
                      <p className="text-xs text-muted-foreground mt-1">Structured Assessment • 45 minutes limit</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2.5 py-1 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-full">Auto-Grading Active</span>
                      <span className="px-2.5 py-1 text-[10px] font-bold text-indigo-500 bg-indigo-500/10 border border-indigo-500/20 rounded-full">Pass Rate: 60%</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 border border-primary/20 rounded-xl bg-primary/5 space-y-2 relative">
                      <div className="absolute top-2 right-2 text-[9px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded">Marks: 2</div>
                      <p className="text-xs font-bold text-foreground">Question 1: What is the worst-case complexity of a search on a Balanced Binary Search Tree?</p>
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <div className="p-2 bg-background border border-border rounded-lg text-xs flex items-center gap-2"><div className="h-3 w-3 rounded-full border border-border" /> O(n)</div>
                        <div className="p-2 bg-background border border-primary/30 rounded-lg text-xs flex items-center gap-2 font-semibold text-primary"><div className="h-3 w-3 rounded-full border-4 border-primary" /> O(log n) [Key]</div>
                      </div>
                    </div>

                    <div className="p-4 border border-border/80 rounded-xl bg-card space-y-2">
                      <p className="text-xs font-bold text-foreground">Question 2: Which layer in the OSI model handles logical routing of data packets?</p>
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <div className="p-2 bg-muted/20 border border-border rounded-lg text-xs flex items-center gap-2"><div className="h-3 w-3 rounded-full border border-border" /> Transport Layer</div>
                        <div className="p-2 bg-muted/20 border border-border rounded-lg text-xs flex items-center gap-2"><div className="h-3 w-3 rounded-full border border-border" /> Data Link Layer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </motion.div>
        </section>



        {/* Who Uses FormForge Section */}
        <section id="features" className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">Who Uses FormForge?</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">Tailored for a variety of roles to simplify information capture and knowledge testing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Teachers & Educators",
                description: "Build randomized quizzes and tests. Collect and evaluate student responses with auto-grading rules.",
                icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
                badge: "Education"
              },
              {
                title: "Students",
                description: "Organize feedback surveys, collect study answers, or compile class assessments with ease.",
                icon: <Users className="h-6 w-6 text-purple-500" />,
                badge: "Academic"
              },
              {
                title: "Businesses",
                description: "Collect client leads, service inquiries, and product feedback through optimized contact forms.",
                icon: <Target className="h-6 w-6 text-emerald-500" />,
                badge: "Corporate"
              },
              {
                title: "Recruiters & HR",
                description: "Receive resumes, contact information, cover letters, and profile URLs with secure file upload configurations.",
                icon: <Users className="h-6 w-6 text-orange-500" />,
                badge: "HR & Careers"
              },
              {
                title: "Event Organizers",
                description: "Coordinate ticket allocations, dietary conditions, and guest lists with a fully structured RSVP flow.",
                icon: <Calendar className="h-6 w-6 text-pink-500" />,
                badge: "Events"
              },
              {
                title: "Collaborative Teams",
                description: "Gather feedback from teammates, prioritize bug reports, and vote on upcoming feature initiatives.",
                icon: <Sparkles className="h-6 w-6 text-teal-500" />,
                badge: "Collaboration"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass p-6 rounded-2xl border border-border/80 flex flex-col justify-between hover:border-primary/20 hover:bg-card/40 transition-all duration-350 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-muted rounded-xl inline-block border border-border/50">
                    {card.icon}
                  </div>
                  <h3 className="font-extrabold text-foreground text-base tracking-tight">{card.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">{card.badge}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

          {/* Interactive Live Builder Demo Showcase */}
          <section id="demo" className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">Interactive Showcase</h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">Explore how visual fields and validation adapt instantly to different form types.</p>
            </div>

            <div className="max-w-3xl mx-auto glass p-6 md:p-8 rounded-2xl border border-border/80 bg-background/50 space-y-6">
              {/* Tabs for demo */}
              <div className="flex bg-muted/60 p-1 border border-border/60 rounded-xl text-xs md:text-sm">
                {(["contact", "quiz", "survey"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 font-extrabold rounded-lg cursor-pointer transition capitalize ${
                      activeTab === tab 
                        ? "bg-primary text-primary-foreground shadow" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab === "contact" ? "Contact Us" : tab === "quiz" ? "Science & Tech Quiz" : "User Survey"}
                  </button>
                ))}
              </div>

              {/* Dynamic Tab Mock Panel */}
              <div className="p-5 border border-border/80 rounded-xl bg-card space-y-4 min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {mockupFields[activeTab].map((f, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-bold text-foreground">{f.label}</label>
                          <span className="text-[9px] text-muted-foreground uppercase bg-muted border border-border/50 px-2 py-0.5 rounded">
                            {f.type}
                          </span>
                        </div>

                        {(f as any).options ? (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1.5">
                            {(f as any).options.map((opt: string, oIdx: number) => (
                              <div key={oIdx} className="p-2 border border-border bg-muted/10 rounded-lg text-[10px] text-foreground flex items-center gap-1.5">
                                <div className="h-3 w-3 rounded-full border border-border" />
                                <span>{opt}</span>
                              </div>
                            ))}
                          </div>
                        ) : activeTab === "survey" && f.type.includes("Star") ? (
                          <div className="flex gap-1.5 text-amber-400 pt-1">
                            {[...Array(5)].map((_, starIdx) => (
                              <Star key={starIdx} className="h-4.5 w-4.5 fill-amber-400" />
                            ))}
                          </div>
                        ) : (
                          <input
                            type="text"
                            placeholder={(f as any).placeholder}
                            disabled
                            className="w-full bg-muted/20 text-xs px-3.5 py-2.5 rounded-lg border border-border focus:outline-none"
                          />
                        )}
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="text-center pt-2">
                <Link
                  href="/register"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-primary hover:text-primary/80 transition-all cursor-pointer group"
                >
                  <span>Build your own matching form layout</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>

          {/* Quiz & Assessment Showcase flowchart */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">Structured Quiz Flow</h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">Create and host tests instantly. Student responses are checked and graded automatically.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center max-w-4xl mx-auto relative">
              {[
                { title: "Define Setup", desc: "Select Subject, Count, Type", icon: <Edit3 className="h-5 w-5" /> },
                { title: "Generate Quiz", desc: "Instantly build layout & keys", icon: <ClipboardList className="h-5 w-5" /> },
                { title: "Students Attempt", desc: "Online responsive portal", icon: <Users className="h-5 w-5" /> },
                { title: "Auto Evaluation", desc: "Grade responses instantly", icon: <CheckCircle2 className="h-5 w-5" /> },
                { title: "View Analytics", desc: "Audit logs & score graphs", icon: <BarChart2 className="h-5 w-5" /> }
              ].map((step, sIdx) => (
                <div key={sIdx} className="flex flex-col items-center text-center p-4 relative">
                  <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm mb-3">
                    {step.icon}
                  </div>
                  <h4 className="font-extrabold text-foreground text-xs">{step.title}</h4>
                  <p className="text-[10px] text-muted-foreground mt-1 max-w-[120px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Template Gallery Showcase */}
          <section id="templates" className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">Professional Templates</h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">Pre-configured blueprints ready to capture feedback and grade assessments immediately.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Contact Form", desc: "Gather names, emails, and message details cleanly.", color: "from-blue-500 to-cyan-500", count: 5 },
                { title: "Customer Survey", desc: "Optimize lead capture with rating and radio inputs.", color: "from-pink-500 to-rose-500", count: 6 },
                { title: "Event RSVP", desc: "Manage attendee counts, ticket levels, and diet restrictions.", color: "from-violet-500 to-purple-500", count: 8 },
                { title: "School Math Quiz", desc: "Algebra and geometry tests with automatic grading keys.", color: "from-blue-600 to-indigo-600", count: 3, isQuiz: true },
                { title: "DBMS Assessment", desc: "Structured test on SQL normalization rules.", color: "from-indigo-600 to-purple-600", count: 2, isQuiz: true },
                { title: "Python Programming Quiz", desc: "Assess syntax loops, lists, and dict comprehensions.", color: "from-yellow-600 to-green-600", count: 2, isQuiz: true }
              ].map((tmpl, idx) => (
                <div key={idx} className="glass rounded-xl overflow-hidden border border-border/85 flex flex-col justify-between hover:-translate-y-1 transition duration-300">
                  <div className={`h-24 bg-gradient-to-r ${tmpl.color} opacity-80`} />
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[9px] font-bold bg-primary/10 border border-primary/20 text-primary px-2 py-0.5 rounded">
                          {tmpl.isQuiz ? "Education" : "General"}
                        </span>
                        {tmpl.isQuiz && <span className="text-[9px] font-bold text-amber-500 uppercase">Graded</span>}
                      </div>
                      <h4 className="font-extrabold text-foreground text-sm leading-tight">{tmpl.title}</h4>
                      <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">{tmpl.desc}</p>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-muted-foreground border-t border-border/40 pt-3">
                      <span>{tmpl.count} questions/fields</span>
                      <Link href="/login" className="text-primary font-bold hover:underline">Use Template</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why FormForge Grid */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">Full Suite of Features</h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto font-medium">Powering your registration, analysis, and exam pipelines without limits.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
              {[
                { title: "Smart Assessment Builder", desc: "Build graded assessments in seconds from a rich bank of questions with difficulty selection." },
                { title: "Quiz Mode Enabled", desc: "Incorporate strict timers, shuffling rules, and auto-grading logic into online assessments." },
                { title: "Live Analytics Portal", desc: "View detailed statistics, response metrics, and conversion rates directly in the dashboard." },
                { title: "QR Code & Link Sharing", desc: "Share public form URLs or download dynamic QR Codes for instant mobile survey attempts." },
                { title: "CSV & PDF Exports", desc: "Download full spreadsheets of gathered responses or detailed individual exam reports." },
                { title: "100% Free Forever", desc: "No subscriptions, no hidden limits, and no credit cards. FormForge is built to be accessible to all." }
              ].map((feat, idx) => (
                <div key={idx} className="glass p-5 border border-border/80 rounded-xl space-y-2 flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-extrabold text-foreground text-xs">{feat.title}</h5>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Free Forever Banner */}
          <section className="max-w-4xl mx-auto px-6 py-12 md:py-16 bg-gradient-to-r from-primary/10 to-indigo-500/10 border border-primary/20 rounded-3xl text-center space-y-4 my-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
            <h2 className="text-3xl font-black text-foreground tracking-tight">Everything You Need. Completely Free.</h2>
            <p className="text-xs text-muted-foreground max-w-lg mx-auto leading-relaxed">
              No hidden paywalls, no response count limitations, and no premium plans. Enjoy complete freedom to compile, share, and analyze.
            </p>
            <div className="flex justify-center gap-6 text-[10px] font-bold text-primary uppercase tracking-widest pt-2">
              <span>✓ No Subscriptions</span>
              <span>✓ No Premium Tiers</span>
              <span>✓ No Hidden Fees</span>
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <section id="faq" className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight flex items-center justify-center gap-2">
                <HelpCircle className="h-7 w-7 text-primary" />
                <span>Frequently Asked Questions</span>
              </h2>
              <p className="text-muted-foreground text-sm">Have queries about FormForge? We have compiled responses to common questions.</p>
            </div>

            <div className="space-y-4 text-left">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-border/80 rounded-xl overflow-hidden glass">
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 font-bold text-foreground text-xs sm:text-sm cursor-pointer select-none hover:bg-muted/10 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${activeFaq === idx ? "rotate-90" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="p-4 pt-0 text-[11px] sm:text-xs text-muted-foreground leading-relaxed border-t border-border/30">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="max-w-7xl mx-auto px-6 py-20 text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">Start Building Smarter Forms Today</h2>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">Create your account in seconds and unlock form building, graded tests, and responsive analytics.</p>
            <div className="pt-2">
              <Link
                href="/register"
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-primary text-primary-foreground font-bold text-xs rounded-xl hover:glow-hover transition shadow-lg shadow-primary/20 cursor-pointer"
              >
                <span>Create Free Account</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
      </main>

      {/* Footer copyright */}
      <footer className="h-20 flex items-center justify-center border-t border-border bg-card/20 z-10">
        <p className="text-[11px] text-muted-foreground font-semibold">© 2026 FormForge Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
