import type { Metadata } from "next";
import Link from "next/link";
import { Geist_Mono, Inter } from "next/font/google";
import Nav from "./components/Nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grace UMC Greer",
  description: "Grace United Methodist Church - Greer, SC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-40 bg-white/80 dark:bg-black/40 backdrop-blur border-b border-black/[.08] dark:border-white/[.145]">
            <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
              <Link href="/" className="text-xl font-semibold" style={{ color: "var(--brand-red)" }}>Grace UMC Greer</Link>
              <Nav />
            </div>
          </header>
          <main className="flex-1 mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
          <footer className="border-t border-black/[.08] dark:border-white/[.145] py-8">
            <div className="mx-auto max-w-6xl px-6 text-sm text-black/60 dark:text-white/60">
              © {new Date().getFullYear()} Grace UMC Greer
            </div>
          </footer>
          <a
            href="https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=HLv5OW77ktwW7DehGumoQZBJn7CvyMSE9pYv3g0SboqFZLaH93ITAlE9Oj2qpzZ8TyyJ04NVcrpJQDwPbnjqqxacn1glE4Uspy1f6TvQhogDSb2tWXxhSsCdHJE7ItvyY0ytbkmjK7yh2RbdWCjyk8NWPZ7nO3smxVIfimor_4sttf8pZZm_h6QEILDmCb3aWgeRpzDeEH-Rfo37pflUiA==&ver=3"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full px-5 py-3 text-white shadow-lg transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "var(--brand-red)" }}
            aria-label="Online Giving (opens in a new tab)"
          >
            <span className="text-sm font-semibold">Online Giving $</span>
          </a>
        </div>
      </body>
    </html>
  );
}
