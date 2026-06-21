"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, Settings, User as UserIcon, Plus, Eye, Home, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface SearchResult {
  type: "form" | "response" | "template" | "action";
  id: string;
  title: string;
  description?: string;
  url: string;
}

export default function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const staticActions: SearchResult[] = [
    { type: "action", id: "create", title: "Create New Form", description: "Design a new form from scratch", url: "/dashboard?create=true" },

    { type: "action", id: "home", title: "Go to Dashboard", description: "View form list and quick statistics", url: "/dashboard" },
    { type: "action", id: "templates", title: "Browse Templates", description: "Start from a prebuilt form design", url: "/dashboard/templates" },
    { type: "action", id: "profile", title: "View Profile", description: "Manage your user profile details", url: "/dashboard/profile" },
    { type: "action", id: "settings", title: "Account Settings", description: "Adjust application configurations", url: "/dashboard/settings" },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSelectedIndex(0);
    }
  }, [open]);

  useEffect(() => {
    if (!query) {
      setResults(staticActions);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        if (data.results) {
          const apiResults = data.results as SearchResult[];
          const matches = staticActions.filter(a => 
            a.title.toLowerCase().includes(query.toLowerCase()) || 
            a.description?.toLowerCase().includes(query.toLowerCase())
          );
          setResults([...matches, ...apiResults]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSelect = (url: string) => {
    setOpen(false);
    setQuery("");
    router.push(url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex].url);
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center space-x-2 text-xs text-muted-foreground border border-border bg-muted/30 px-3 py-1.5 rounded-lg hover:bg-muted transition cursor-pointer"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Search...</span>
        <kbd className="bg-background border border-border px-1.5 py-0.5 rounded text-[10px] font-mono leading-none">Ctrl K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              className="w-full max-w-lg bg-background border border-border rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[50vh]"
            >
              <div className="flex items-center border-b border-border px-4 py-3 bg-muted/20">
                <Search className="h-5 w-5 text-muted-foreground mr-3" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search forms..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent border-none text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="text-xs text-muted-foreground bg-muted border border-border px-1.5 py-0.5 rounded hover:text-foreground"
                >
                  ESC
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {loading && (
                  <div className="text-center text-xs text-muted-foreground py-6 flex items-center justify-center space-x-2">
                    <span className="h-3 w-3 animate-spin rounded-full border border-muted-foreground border-t-transparent" />
                    <span>Searching...</span>
                  </div>
                )}

                {!loading && results.length === 0 && (
                  <div className="text-center text-xs text-muted-foreground py-6">
                    No results found for &quot;{query}&quot;
                  </div>
                )}

                {!loading &&
                  results.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <div
                        key={item.id + "-" + idx}
                        onClick={() => handleSelect(item.url)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`flex items-center px-3 py-2.5 rounded-lg cursor-pointer transition-all ${
                          isSelected ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
                        }`}
                      >
                        {item.type === "action" && item.id === "create" && <Plus className="h-4.5 w-4.5 mr-3 shrink-0" />}

                        {item.type === "action" && item.id === "home" && <Home className="h-4.5 w-4.5 mr-3 shrink-0" />}
                        {item.type === "action" && item.id === "templates" && <FileText className="h-4.5 w-4.5 mr-3 shrink-0" />}
                        {item.type === "action" && item.id === "profile" && <UserIcon className="h-4.5 w-4.5 mr-3 shrink-0" />}
                        {item.type === "action" && item.id === "settings" && <Settings className="h-4.5 w-4.5 mr-3 shrink-0" />}
                        {item.type === "form" && <FileText className="h-4.5 w-4.5 mr-3 shrink-0 text-blue-500" />}
                        {item.type === "template" && <Sparkles className="h-4.5 w-4.5 mr-3 shrink-0 text-purple-500" />}
                        {item.type === "response" && <Eye className="h-4.5 w-4.5 mr-3 shrink-0 text-emerald-500" />}

                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{item.title}</p>
                          {item.description && (
                            <p className={`text-xs truncate ${isSelected ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="border-t border-border px-4 py-2 bg-muted/10 flex items-center justify-between text-[10px] text-muted-foreground font-medium">
                <div className="flex items-center space-x-3">
                  <span>↑↓ Navigate</span>
                  <span>↵ Select</span>
                </div>
                <span>FormForge</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
