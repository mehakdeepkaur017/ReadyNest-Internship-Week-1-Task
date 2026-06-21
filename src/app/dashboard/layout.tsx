"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { LayoutDashboard, FileText, Settings, User as UserIcon, LogOut, ChevronRight, Menu, X, Sparkles, BarChart2, ArrowLeft, MessageSquare, LayoutGrid } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import CommandMenu from "@/components/CommandMenu";
import { Toaster } from "react-hot-toast";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    setProfileImage(localStorage.getItem("profileImage"));
    const handleStorage = () => setProfileImage(localStorage.getItem("profileImage"));
    window.addEventListener("storage", handleStorage);
    window.addEventListener("profileImageUpdated", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("profileImageUpdated", handleStorage);
    };
  }, []);

  const isFormPage = pathname.match(/\/dashboard\/forms\/([a-zA-Z0-9-]+)\/(builder|responses|analytics|settings)/);
  const formId = isFormPage ? isFormPage[1] : null;

  const globalNavigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Templates", href: "/dashboard/templates", icon: Sparkles },
    { name: "Profile", href: "/dashboard/profile", icon: UserIcon },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const formNavigation = formId ? [
    { name: "← Back to Dashboard", href: "/dashboard", icon: ArrowLeft },
    { name: "Builder", href: `/dashboard/forms/${formId}/builder`, icon: LayoutGrid },
    { name: "Responses", href: `/dashboard/forms/${formId}/responses`, icon: MessageSquare },
    { name: "Analytics", href: `/dashboard/forms/${formId}/analytics`, icon: BarChart2 },
    { name: "Settings", href: `/dashboard/forms/${formId}/settings`, icon: Settings },
  ] : [];

  const navigation = isFormPage ? formNavigation : globalNavigation;

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <div className="min-h-screen flex bg-background/50 dot-pattern">
      <Toaster position="top-right" />
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-card/40 backdrop-blur-md p-4 shrink-0 justify-between">
        <div className="space-y-6">
          <div className="flex items-center px-2 py-3 space-x-2.5">
            <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-primary-foreground font-black text-lg">F</span>
            </div>
            <div>
              <span className="font-extrabold text-foreground tracking-tight text-lg">FormForge</span>
              <span className="text-[10px] font-bold text-primary block -mt-1 uppercase tracking-wider">Studio</span>
            </div>
          </div>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span className="flex items-center space-x-3">
                    <Icon className="h-4.5 w-4.5" />
                    <span>{item.name}</span>
                  </span>
                  {isActive && <ChevronRight className="h-3.5 w-3.5" />}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-border pt-4 space-y-3">
          <div className="flex items-center space-x-3 px-2 py-1.5">
            <div className="h-9 w-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-semibold text-primary uppercase text-sm overflow-hidden">
              {profileImage ? <img src={profileImage} alt="Profile" className="w-full h-full object-cover" /> : (session?.user?.name?.[0] || "U")}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground truncate">{session?.user?.name || "User"}</p>
              <p className="text-[11px] text-muted-foreground truncate">{session?.user?.email || "user@example.com"}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors cursor-pointer"
          >
            <LogOut className="h-4.5 w-4.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <aside className="relative flex flex-col w-64 max-w-xs border-r border-border bg-card p-4 justify-between z-50 animate-in slide-in-from-left duration-200">
            <div className="space-y-6">
              <div className="flex items-center justify-between px-2 py-3">
                <div className="flex items-center space-x-2.5">
                  <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-black text-lg">F</span>
                  </div>
                  <span className="font-extrabold text-foreground tracking-tight text-lg">FormForge</span>
                </div>
                <button onClick={() => setSidebarOpen(false)} className="p-1 rounded-md hover:bg-muted">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      <span className="flex items-center space-x-3">
                        <Icon className="h-4.5 w-4.5" />
                        <span>{item.name}</span>
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex items-center space-x-3 px-2 py-1.5">
                <div className="h-9 w-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-semibold text-primary uppercase text-sm overflow-hidden">
                  {profileImage ? <img src={profileImage} alt="Profile" className="w-full h-full object-cover" /> : (session?.user?.name?.[0] || "U")}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground truncate">{session?.user?.name || "User"}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors cursor-pointer"
              >
                <LogOut className="h-4.5 w-4.5" />
                <span>Sign Out</span>
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-border bg-card/30 backdrop-blur-md flex items-center justify-between px-4 md:px-8 z-30">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-1 rounded-md hover:bg-muted md:hidden text-foreground cursor-pointer"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="hidden md:block">
              <h2 className="text-sm font-bold text-foreground capitalize tracking-tight">
                {pathname.split("/").filter(Boolean).slice(-1)[0] || "Dashboard"}
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <CommandMenu />
            <ThemeToggle />
            <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-sm select-none uppercase overflow-hidden">
              {profileImage ? <img src={profileImage} alt="Profile" className="w-full h-full object-cover" /> : (session?.user?.name?.[0] || "U")}
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 mesh-gradient">
          {children}
        </main>
      </div>
    </div>
  );
}
