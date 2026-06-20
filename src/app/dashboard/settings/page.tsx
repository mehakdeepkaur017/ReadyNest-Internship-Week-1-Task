"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { 
  Settings, Shield, Bell, Palette, Layout, AlertTriangle, 
  Monitor, Sun, Moon, Key, Laptop, Save, Type, Smartphone, Tablet
} from "lucide-react";
import { useSession } from "next-auth/react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"general" | "appearance" | "notifications" | "security">("general");
  const [saving, setSaving] = useState(false);
  
  const { data: session } = useSession();
  
  // Settings States
  const [theme, setTheme] = useState("system");
  const [orgName, setOrgName] = useState("My Workspace");
  const [accentColor, setAccentColor] = useState("#6366f1");
  const [autoSave, setAutoSave] = useState(true);
  
  // Security States
  const [loadingSessions, setLoadingSessions] = useState(false);

  useEffect(() => {
    const savedColor = localStorage.getItem("accentColor");
    if (savedColor) {
      setAccentColor(savedColor);
      document.documentElement.style.setProperty("--color-primary", savedColor);
    }
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    // Session fetching removed as per user request
  }, [activeTab]);

  const handlePasswordReset = async () => {
    if (!session?.user?.email) {
      toast.error("Could not find your email");
      return;
    }
    
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: session.user.email }),
      });
      if (res.ok) {
        toast.success("OTP sent! It is valid for 10 minutes. Please check your Inbox and Spam folders.");
      } else {
        toast.error("Failed to send reset link");
      }
    } catch (err) {
      toast.error("An error occurred");
    }
  };

  // Revoke session removed

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      // Apply Theme
      if (theme === "dark") {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else if (theme === "light") {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      } else {
        localStorage.removeItem("theme");
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }

      // Apply Accent Color
      localStorage.setItem("accentColor", accentColor);
      document.documentElement.style.setProperty("--color-primary", accentColor);

      toast.success("Settings saved successfully!");
    } catch (err) {
      toast.error("Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Workspace Settings</h1>
        <p className="text-muted-foreground text-sm">Configure your environment, branding, and notification preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Settings Sidebar */}
        <div className="md:w-64 shrink-0 space-y-1">
          <button
            onClick={() => setActiveTab("general")}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition ${
              activeTab === "general" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <Settings className="h-4.5 w-4.5" />
            <span>General & Branding</span>
          </button>
          <button
            onClick={() => setActiveTab("appearance")}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition ${
              activeTab === "appearance" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <Palette className="h-4.5 w-4.5" />
            <span>Appearance</span>
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition ${
              activeTab === "notifications" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <Bell className="h-4.5 w-4.5" />
            <span>Notifications</span>
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition ${
              activeTab === "security" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <Shield className="h-4.5 w-4.5" />
            <span>Security & Access</span>
          </button>
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          <form onSubmit={handleSaveSettings} className="space-y-6">
            
            {/* GENERAL TAB */}
            {activeTab === "general" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="glass border border-border rounded-2xl p-6 space-y-6">
                  <div>
                    <h3 className="font-extrabold text-foreground text-sm flex items-center space-x-2">
                      <Layout className="h-4.5 w-4.5 text-blue-500" />
                      <span>Workspace Preferences</span>
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-1">Configure default settings for new forms and assessments.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Default Form Type</label>
                      <select className="w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary">
                        <option>Standard Form</option>
                        <option>Graded Assessment</option>
                        <option>Survey</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Auto-Save Builder</label>
                      <select 
                        value={autoSave ? "yes" : "no"} 
                        onChange={(e) => setAutoSave(e.target.value === "yes")}
                        className="w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="yes">Enabled (Every 30s)</option>
                        <option value="no">Disabled (Manual Save)</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Default Success Message</label>
                      <input 
                        type="text" 
                        defaultValue="Thank you! Your response has been submitted successfully."
                        className="w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="glass border border-border rounded-2xl p-6 space-y-6">
                  <div>
                    <h3 className="font-extrabold text-foreground text-sm flex items-center space-x-2">
                      <Type className="h-4.5 w-4.5 text-purple-500" />
                      <span>Brand Identity</span>
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-1">Customize how your public forms look to respondents.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Organization Name</label>
                      <input 
                        type="text" 
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        className="w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    
                    <div className="flex gap-6 items-center">
                      <div className="flex-1">
                        <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Accent Color</label>
                        <div className="flex items-center space-x-3">
                          <input 
                            type="color" 
                            value={accentColor}
                            onChange={(e) => setAccentColor(e.target.value)}
                            className="h-8 w-12 rounded cursor-pointer bg-transparent border-0 p-0"
                          />
                          <span className="text-xs font-mono text-muted-foreground uppercase">{accentColor}</span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Workspace Logo</label>
                        <button type="button" className="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground border border-border rounded-lg text-xs font-semibold transition">
                          Upload Image...
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* APPEARANCE TAB */}
            {activeTab === "appearance" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="glass border border-border rounded-2xl p-6 space-y-6">
                  <div>
                    <h3 className="font-extrabold text-foreground text-sm flex items-center space-x-2">
                      <Monitor className="h-4.5 w-4.5 text-emerald-500" />
                      <span>Interface Theme</span>
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-1">Select or customize your dashboard appearance.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div 
                      onClick={() => handleThemeChange("light")}
                      className={`border-2 rounded-xl p-4 cursor-pointer flex flex-col items-center gap-3 transition ${theme === "light" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 glass"}`}
                    >
                      <Sun className={`h-8 w-8 ${theme === "light" ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="text-xs font-bold text-foreground">Light Mode</span>
                    </div>
                    <div 
                      onClick={() => handleThemeChange("dark")}
                      className={`border-2 rounded-xl p-4 cursor-pointer flex flex-col items-center gap-3 transition ${theme === "dark" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 glass"}`}
                    >
                      <Moon className={`h-8 w-8 ${theme === "dark" ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="text-xs font-bold text-foreground">Dark Mode</span>
                    </div>
                    <div 
                      onClick={() => handleThemeChange("system")}
                      className={`border-2 rounded-xl p-4 cursor-pointer flex flex-col items-center gap-3 transition ${theme === "system" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 glass"}`}
                    >
                      <Monitor className={`h-8 w-8 ${theme === "system" ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="text-xs font-bold text-foreground">System Sync</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* NOTIFICATIONS TAB */}
            {activeTab === "notifications" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="glass border border-border rounded-2xl p-6 space-y-6">
                  <div>
                    <h3 className="font-extrabold text-foreground text-sm flex items-center space-x-2">
                      <Bell className="h-4.5 w-4.5 text-amber-500" />
                      <span>Email Alerts</span>
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-1">Control which events trigger an email to your registered address.</p>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer select-none">
                      <input type="checkbox" defaultChecked className="rounded border-border text-primary focus:ring-primary/20 h-4 w-4 bg-background" />
                      <div>
                        <p className="text-xs font-semibold text-foreground">New Responses</p>
                        <p className="text-[10px] text-muted-foreground">Get notified immediately when someone submits a standard form</p>
                      </div>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer select-none">
                      <input type="checkbox" defaultChecked className="rounded border-border text-primary focus:ring-primary/20 h-4 w-4 bg-background" />
                      <div>
                        <p className="text-xs font-semibold text-foreground">Assessment Submissions</p>
                        <p className="text-[10px] text-muted-foreground">Get notified when a student completes a graded assessment</p>
                      </div>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer select-none">
                      <input type="checkbox" className="rounded border-border text-primary focus:ring-primary/20 h-4 w-4 bg-background" />
                      <div>
                        <p className="text-xs font-semibold text-foreground">Weekly Digest Summary</p>
                        <p className="text-[10px] text-muted-foreground">Receive a weekly email compiling your form performance metrics</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* SECURITY TAB */}
            {activeTab === "security" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="glass border border-border rounded-2xl p-6 space-y-6">
                  <div>
                    <h3 className="font-extrabold text-foreground text-sm flex items-center space-x-2">
                      <Shield className="h-4.5 w-4.5 text-emerald-500" />
                      <span>Authentication</span>
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-1">Manage your password and secure your workspace.</p>
                  </div>
                  
                  <div>
                    <button type="button" onClick={handlePasswordReset} className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-muted/80 border border-border text-foreground text-xs font-semibold rounded-lg transition cursor-pointer">
                      <Key className="h-3.5 w-3.5" />
                      <span>Send Password Reset Email</span>
                    </button>
                  </div>
                </div>


                {/* Danger Zone */}
                <div className="glass border border-destructive/20 bg-destructive/5 rounded-2xl p-6 space-y-4">
                  <div>
                    <h3 className="font-extrabold text-destructive text-sm flex items-center space-x-2">
                      <AlertTriangle className="h-4.5 w-4.5" />
                      <span>Danger Zone</span>
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-1">Permanently delete your workspace and all collected data.</p>
                  </div>
                  
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm("Are you sure? This action cannot be undone and deletes all forms and responses permanently.")) {
                          toast.success("Account deletion initiated.");
                        }
                      }}
                      className="px-4 py-2 bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg text-xs font-bold transition cursor-pointer"
                    >
                      Delete Workspace
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button (Only show on non-security tabs for aesthetic UX) */}
            {activeTab !== "security" && (
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center space-x-2 px-6 py-2.5 bg-primary text-primary-foreground hover:glow-hover rounded-xl text-xs font-bold cursor-pointer transition disabled:opacity-50 shadow-lg shadow-primary/20"
                >
                  <Save className="h-4 w-4" />
                  <span>{saving ? "Saving..." : "Save Preferences"}</span>
                </button>
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}
