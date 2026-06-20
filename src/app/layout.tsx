import "@/app/globals.css";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "FormForge",
  description: "Premium SaaS form builder",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable)} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
                const accentColor = localStorage.getItem('accentColor');
                if (accentColor) {
                  document.documentElement.style.setProperty('--color-primary', accentColor);
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-background text-foreground min-h-screen font-sans">
        <SessionProvider>
          <Toaster position="top-right" />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
