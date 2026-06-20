"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "otp" | "password">("email");
  
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRequestOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Failed to send reset link");
      } else {
        toast.success("OTP sent! It is valid for 10 minutes. Please check your Inbox and Spam folders.");
        setStep("otp");
      }
    } catch (err) {
      toast.error("Unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    // Move to next step without making an API call, we'll verify it with the password
    if (otp.length === 6) {
      setStep("password");
    } else {
      toast.error("Please enter a valid 6-digit OTP");
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Failed to reset password");
        if (data.error === "Invalid or expired OTP") {
          setStep("otp");
          setOtp("");
        }
      } else {
        toast.success("Password reset successfully! Please sign in.");
        router.push("/login");
      }
    } catch (err) {
      toast.error("Unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-radial mesh-gradient p-4">
      <div className="w-full max-w-md space-y-6 glass p-8 rounded-2xl shadow-2xl relative overflow-hidden border border-white/10 dark:border-white/5">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-purple-500 to-accent animate-pulse" />
        
        {step === "email" && (
          <>
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Reset Password</h1>
              <p className="text-muted-foreground text-sm">Enter your email and we'll send you a recovery code</p>
            </div>

            <form onSubmit={handleRequestOTP} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="elon@spacex.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !email}
                className="w-full mt-2 rounded-lg bg-primary py-3 font-semibold text-primary-foreground hover:glow-hover transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg hover:shadow-primary/30"
              >
                {loading ? (
                  <span className="flex items-center justify-center space-x-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    <span>Sending...</span>
                  </span>
                ) : (
                  "Send Recovery Code"
                )}
              </button>
            </form>

            <p className="text-center text-sm text-muted-foreground">
              Remembered your password?{" "}
              <Link href="/login" className="font-medium text-primary hover:underline transition">
                Sign In
              </Link>
            </p>
          </>
        )}

        {step === "otp" && (
          <>
            <div className="space-y-3 text-center">
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Enter Code</h1>
              <p className="text-muted-foreground text-sm">We've sent a 6-digit code to <span className="font-bold text-foreground">{email}</span></p>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 text-left">
                <p className="text-xs text-amber-500 font-medium">⚠️ This code is valid for 10 minutes.</p>
                <p className="text-[10px] text-amber-500/80 mt-1">Please check all inbox folders, including Spam or Junk, if you don't see it right away.</p>
              </div>
            </div>

            <form onSubmit={handleVerifyOTP} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Recovery Code</label>
                <input
                  type="text"
                  required
                  placeholder="123456"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                  className="mt-1 block w-full rounded-lg border border-border bg-background/50 px-4 py-4 text-center text-3xl tracking-[1em] font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={otp.length !== 6}
                className="w-full mt-2 rounded-lg bg-primary py-3 font-semibold text-primary-foreground hover:glow-hover transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg hover:shadow-primary/30"
              >
                Continue
              </button>
            </form>
            
            <p className="text-center text-sm text-muted-foreground">
              Didn't receive the email?{" "}
              <button onClick={handleRequestOTP} disabled={loading} className="font-medium text-primary hover:underline transition">
                Resend Code
              </button>
            </p>
          </>
        )}

        {step === "password" && (
          <>
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight">New Password</h1>
              <p className="text-muted-foreground text-sm">Please create a new password for your account</p>
            </div>

            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">New Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading || newPassword.length < 6}
                className="w-full mt-2 rounded-lg bg-primary py-3 font-semibold text-primary-foreground hover:glow-hover transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg hover:shadow-primary/30"
              >
                {loading ? (
                  <span className="flex items-center justify-center space-x-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    <span>Resetting...</span>
                  </span>
                ) : (
                  "Reset Password & Sign In"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
