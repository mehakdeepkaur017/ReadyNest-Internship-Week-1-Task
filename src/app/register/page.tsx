"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState<"register" | "verify">("register");
  
  // Registration State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Verification State
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Something went wrong");
      } else {
        toast.success(data.message || "OTP sent! It is valid for 10 minutes. Please check your Inbox and Spam folders.");
        if (data.requiresVerification) {
          setStep("verify");
        } else {
          router.push("/login");
        }
      }
    } catch (err) {
      toast.error("Unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Invalid OTP");
      } else {
        toast.success("Email verified successfully! Please log in.");
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
        
        {step === "register" ? (
          <>
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Create Account</h1>
              <p className="text-muted-foreground text-sm">Join FormForge to craft beautiful, smart forms</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 rounded-lg bg-primary py-3 font-semibold text-primary-foreground hover:glow-hover transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg hover:shadow-primary/30"
              >
                {loading ? (
                  <span className="flex items-center justify-center space-x-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    <span>Creating Account...</span>
                  </span>
                ) : (
                  "Get Started for Free"
                )}
              </button>
            </form>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-primary hover:underline transition">
                Sign In
              </Link>
            </p>
          </>
        ) : (
          <>
            <div className="space-y-3 text-center">
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Verify Email</h1>
              <p className="text-muted-foreground text-sm">We've sent a 6-digit code to <span className="font-bold text-foreground">{email}</span></p>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 text-left">
                <p className="text-xs text-amber-500 font-medium">⚠️ This code is valid for 10 minutes.</p>
                <p className="text-[10px] text-amber-500/80 mt-1">Please check all inbox folders, including Spam or Junk, if you don't see it right away.</p>
              </div>
            </div>

            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Verification Code</label>
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
                disabled={loading || otp.length !== 6}
                className="w-full mt-2 rounded-lg bg-primary py-3 font-semibold text-primary-foreground hover:glow-hover transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg hover:shadow-primary/30"
              >
                {loading ? (
                  <span className="flex items-center justify-center space-x-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    <span>Verifying...</span>
                  </span>
                ) : (
                  "Verify & Complete"
                )}
              </button>
            </form>
            
            <p className="text-center text-sm text-muted-foreground">
              Didn't receive the email?{" "}
              <button onClick={handleRegister} disabled={loading} className="font-medium text-primary hover:underline transition">
                Resend Code
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
