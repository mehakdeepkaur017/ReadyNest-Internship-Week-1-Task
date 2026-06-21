"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Form, FormSettings } from "@/lib/types";
import { Save, Loader2, HelpCircle } from "lucide-react";
import toast from "react-hot-toast";

const defaultSettings: FormSettings = {
  collectEmailAddresses: "do_not_collect",
  limitOneResponse: false,
  showProgressBar: false,
  shuffleQuestionOrder: false,
  showSubmitAnotherResponse: true,
  makeQuestionsRequiredByDefault: false,
};

export default function FormSettingsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [form, setForm] = useState<Form | null>(null);
  const [settings, setSettings] = useState<FormSettings>(defaultSettings);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchForm();
  }, [id]);

  const fetchForm = async () => {
    try {
      const res = await fetch(`/api/forms/${id}`);
      if (!res.ok) throw new Error("Failed to fetch form");
      const data = await res.json();
      setForm(data.form);
      setIsQuizMode(data.form.isQuizMode || false);
      if (data.form.formSettings) {
        setSettings({ ...defaultSettings, ...data.form.formSettings });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load settings");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(`/api/forms/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formSettings: settings, isQuizMode }),
      });
      if (!res.ok) throw new Error("Failed to save settings");
      toast.success("Settings saved successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-24">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-1 font-medium">Manage how responses are collected and presented.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center space-x-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-50 cursor-pointer shadow-lg shadow-primary/20"
        >
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          <span>{saving ? "Saving..." : "Save Settings"}</span>
        </button>
      </div>

      <div className="space-y-6">
        {/* Quiz Mode */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-border/50 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-foreground">Make this a quiz</h3>
              <p className="text-sm text-muted-foreground mt-1">Assign point values, set answers and automatically provide feedback</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={isQuizMode} onChange={(e) => setIsQuizMode(e.target.checked)} />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>

        {/* Responses */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-border/50">
            <h3 className="text-lg font-bold text-foreground">Responses</h3>
            <p className="text-sm text-muted-foreground mt-1">Manage how responses are collected and protected</p>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground text-sm">Collect email addresses</p>
              </div>
              <select
                value={settings.collectEmailAddresses}
                onChange={(e) => setSettings({ ...settings, collectEmailAddresses: e.target.value as any })}
                className="bg-muted/50 border border-border rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-primary w-48"
              >
                <option value="do_not_collect">Do not collect</option>
                <option value="verified">Verified</option>
                <option value="responder_input">Responder input</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground text-sm uppercase tracking-wider mt-4 text-muted-foreground text-xs">Requires Sign-In</p>
                <p className="font-semibold text-foreground text-sm mt-2">Limit to 1 response</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer mt-6">
                <input type="checkbox" className="sr-only peer" checked={settings.limitOneResponse} onChange={(e) => setSettings({ ...settings, limitOneResponse: e.target.checked })} />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Presentation */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-border/50">
            <h3 className="text-lg font-bold text-foreground">Presentation</h3>
            <p className="text-sm text-muted-foreground mt-1">Manage how the form and responses are presented</p>
          </div>
          <div className="p-6 space-y-6">
            <p className="font-semibold text-foreground text-sm uppercase tracking-wider text-muted-foreground text-xs">Form Presentation</p>
            
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="font-semibold text-foreground text-sm">Show progress bar</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={settings.showProgressBar} onChange={(e) => setSettings({ ...settings, showProgressBar: e.target.checked })} />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground text-sm">Shuffle question order</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={settings.shuffleQuestionOrder} onChange={(e) => setSettings({ ...settings, shuffleQuestionOrder: e.target.checked })} />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="border-t border-border/50 pt-6">
              <p className="font-semibold text-foreground text-sm uppercase tracking-wider text-muted-foreground text-xs mb-4">After Submission</p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm">Show link to submit another response</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={settings.showSubmitAnotherResponse} onChange={(e) => setSettings({ ...settings, showSubmitAnotherResponse: e.target.checked })} />
                  <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Defaults */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-border/50">
            <h3 className="text-lg font-bold text-foreground">Defaults</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground text-sm">Form defaults</p>
                <p className="text-xs text-muted-foreground mt-0.5">Settings applied to this form and new forms</p>
              </div>
            </div>
            
            <div className="border-t border-border/50 pt-6 flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground text-sm">Question defaults</p>
                <p className="text-xs text-muted-foreground mt-0.5">Settings applied to all new questions</p>
                <p className="text-sm font-semibold mt-4">Make questions required by default</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer mt-8">
                <input type="checkbox" className="sr-only peer" checked={settings.makeQuestionsRequiredByDefault} onChange={(e) => setSettings({ ...settings, makeQuestionsRequiredByDefault: e.target.checked })} />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
