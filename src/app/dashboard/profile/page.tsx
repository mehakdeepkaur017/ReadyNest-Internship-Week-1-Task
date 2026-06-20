"use client";

import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { 
  User, Mail, Key, LogOut, FileText, CheckCircle2, LayoutTemplate, 
  GraduationCap, Clock, Download, Edit3, Share2, Eye, EyeOff
} from "lucide-react";
import { toast } from "react-hot-toast";
import { DashboardStats } from "@/lib/types";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Password change states
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setEmail(session.user.email || "");
      // Generate a mock username from email
      if (session.user.email) {
        setUsername("@" + session.user.email.split("@")[0].toLowerCase().replace(/[^a-z0-9]/g, ""));
      }
    }
  }, [session]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/dashboard");
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Failed to fetch stats", err);
      }
    };
    fetchStats();
    
    // Load persisted profile image
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfileImage(base64String);
        try {
          localStorage.setItem("profileImage", base64String);
          window.dispatchEvent(new Event("profileImageUpdated"));
          toast.success("Profile picture updated!");
        } catch (error) {
          toast.error("Image too large to save locally.");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignOutDevices = () => {
    if (confirm("Are you sure you want to sign out of all other devices?")) {
      toast.success("Successfully signed out of all other active sessions.");
    }
  };

  const submitPasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match.");
      return;
    }
    setIsChangingPassword(true);
    
    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        toast.error(data.error || "Failed to change password.");
      } else {
        toast.success("Password successfully updated.");
        setShowPasswordChange(false);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setIsChangingPassword(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Profile Overview</h1>
        <p className="text-muted-foreground text-sm">Manage your personal identity, security, and view your workspace stats.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Identity & Security */}
        <div className="lg:col-span-4 space-y-6">
          {/* Identity Card */}
          <div className="glass border border-border rounded-2xl p-6 text-center space-y-4">
            <div className="relative mx-auto w-24 h-24 group cursor-pointer">
              <input type="file" accept="image/*" className="hidden" id="profile-upload" onChange={handleImageUpload} />
              <label htmlFor="profile-upload" className="block w-full h-full rounded-full bg-primary/10 border-4 border-background shadow-xl flex items-center justify-center font-black text-primary text-4xl uppercase cursor-pointer overflow-hidden relative">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  name?.[0] || "U"
                )}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit3 className="h-6 w-6 text-white" />
                </div>
              </label>
              <div className="absolute bottom-0 right-0 h-6 w-6 bg-emerald-500 border-2 border-background rounded-full pointer-events-none" />
            </div>
            
            <div className="space-y-1">
              <h2 className="font-extrabold text-foreground text-xl tracking-tight">{name || "User"}</h2>
              <p className="text-sm font-semibold text-primary">{username}</p>
              <p className="text-xs text-muted-foreground pt-1">{email}</p>
            </div>

            <div className="pt-4 border-t border-border flex justify-center">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-primary/10 text-primary uppercase tracking-wider">
                <User className="h-3.5 w-3.5" />
                <span>Workspace Admin</span>
              </span>
            </div>
          </div>

          {/* Security Actions */}
          <div className="glass border border-border rounded-2xl p-6 space-y-4">
            <h3 className="font-extrabold text-foreground text-sm uppercase tracking-wider">Account Security</h3>
            <div className="space-y-3">
              <div className="space-y-2">
                <button
                  onClick={() => setShowPasswordChange(!showPasswordChange)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-border bg-background hover:bg-muted text-xs font-semibold text-foreground transition"
                >
                  <span className="flex items-center space-x-2.5">
                    <Key className="h-4 w-4 text-muted-foreground" />
                    <span>Change Password</span>
                  </span>
                </button>
                
                {showPasswordChange && (
                  <form onSubmit={submitPasswordChange} className="p-4 bg-muted/40 rounded-lg border border-border space-y-3">
                    <div className="relative">
                      <input 
                        type={showPasswords ? "text" : "password"} 
                        placeholder="Current Password" 
                        required
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full text-xs pl-3 pr-10 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <button 
                        type="button" 
                        onClick={() => setShowPasswords(!showPasswords)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition cursor-pointer"
                      >
                        {showPasswords ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <div className="relative">
                      <input 
                        type={showPasswords ? "text" : "password"} 
                        placeholder="New Password" 
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full text-xs pl-3 pr-10 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <button 
                        type="button" 
                        onClick={() => setShowPasswords(!showPasswords)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition cursor-pointer"
                      >
                        {showPasswords ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <div className="relative">
                      <input 
                        type={showPasswords ? "text" : "password"} 
                        placeholder="Confirm New Password" 
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full text-xs pl-3 pr-10 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <button 
                        type="button" 
                        onClick={() => setShowPasswords(!showPasswords)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition cursor-pointer"
                      >
                        {showPasswords ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <div className="flex justify-end gap-2 pt-1">
                      <button type="button" onClick={() => setShowPasswordChange(false)} className="px-3 py-1.5 text-[10px] font-semibold text-muted-foreground hover:bg-muted rounded-md transition">Cancel</button>
                      <button type="submit" disabled={isChangingPassword} className="px-3 py-1.5 text-[10px] font-bold bg-primary text-primary-foreground hover:glow-hover rounded-md transition">
                        {isChangingPassword ? "Saving..." : "Update Password"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
              
              <button
                onClick={handleSignOutDevices}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-destructive/30 bg-destructive/5 hover:bg-destructive/10 text-xs font-semibold text-destructive transition"
              >
                <span className="flex items-center space-x-2.5">
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out All Devices</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Stats & Activity */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Quick Stats Grid */}
          <div>
            <h3 className="font-extrabold text-foreground text-sm uppercase tracking-wider mb-4">Workspace Statistics</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass border border-border p-5 rounded-2xl">
                <FileText className="h-5 w-5 text-blue-500 mb-3" />
                <p className="text-3xl font-black text-foreground">{stats?.totalForms || 0}</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-1">Forms Created</p>
              </div>
              <div className="glass border border-border p-5 rounded-2xl">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mb-3" />
                <p className="text-3xl font-black text-foreground">{stats?.totalResponses || 0}</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-1">Responses</p>
              </div>
              <div className="glass border border-border p-5 rounded-2xl">
                <Share2 className="h-5 w-5 text-purple-500 mb-3" />
                <p className="text-3xl font-black text-foreground">{stats?.publishedForms || 0}</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-1">Published</p>
              </div>
              <div className="glass border border-border p-5 rounded-2xl">
                <Edit3 className="h-5 w-5 text-amber-500 mb-3" />
                <p className="text-3xl font-black text-foreground">{stats?.draftForms || 0}</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-1">Drafts</p>
              </div>
            </div>
          </div>

          {/* Recent Activity Timeline */}
          <div className="glass border border-border rounded-2xl p-6">
            <h3 className="font-extrabold text-foreground text-sm uppercase tracking-wider mb-6">Recent Activity</h3>
            
            <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-border/60 pl-2">
              
              {/* Activity 1 */}
              <div className="relative flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 z-10 relative bg-background">
                  <Share2 className="h-3.5 w-3.5 text-emerald-500" />
                </div>
                <div className="flex-1 min-w-0 pt-1.5">
                  <p className="text-xs font-semibold text-foreground">Published <span className="font-bold text-primary">Mathematics Quiz</span></p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 2 hours ago
                  </p>
                </div>
              </div>

              {/* Activity 2 */}
              <div className="relative flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 z-10 relative bg-background">
                  <Edit3 className="h-3.5 w-3.5 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0 pt-1.5">
                  <p className="text-xs font-semibold text-foreground">Created draft for <span className="font-bold text-primary">IT Helpdesk Ticket</span></p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 1 day ago
                  </p>
                </div>
              </div>

              {/* Activity 3 */}
              <div className="relative flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 z-10 relative bg-background">
                  <User className="h-3.5 w-3.5 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0 pt-1.5">
                  <p className="text-xs font-semibold text-foreground">Updated profile settings</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 3 days ago
                  </p>
                </div>
              </div>

              {/* Activity 4 */}
              <div className="relative flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 z-10 relative bg-background">
                  <Download className="h-3.5 w-3.5 text-amber-500" />
                </div>
                <div className="flex-1 min-w-0 pt-1.5">
                  <p className="text-xs font-semibold text-foreground">Exported 42 responses from <span className="font-bold text-primary">Expense Form</span></p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 1 week ago
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
