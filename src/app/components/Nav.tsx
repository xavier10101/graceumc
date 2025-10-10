'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/ministry-opportunities", label: "Ministry Opportunities" },
  { href: "/worship", label: "Worship" },
  { href: "/calendar", label: "Calendar" },
  { href: "/contact", label: "Contact Us" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="hover:underline"
            style={{
              color: "var(--brand-red)",
              fontWeight: 500,
              paddingBottom: 2,
              borderBottom: isActive ? "2px solid white" : "2px solid transparent",
            }}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );

  return (
    <div className="flex items-center gap-4">
      <button
        aria-label="Toggle menu"
        className="md:hidden inline-flex items-center justify-center rounded border border-black/[.12] dark:border-white/[.18] p-2"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <nav className="hidden md:flex items-center gap-6">
        <NavLinks />
      </nav>
      <a
        href="https://www.facebook.com/GraceUMCGreer/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center justify-center rounded border border-black/[.12] dark:border-white/[.18] p-2 hover:bg-black/[.04] dark:hover:bg-white/[.06] transition-colors"
        style={{ backgroundColor: "#1877F2" }}
        aria-label="Visit our Facebook page (opens in new tab)"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-2 md:hidden">
          <div className="mx-4 rounded-lg border border-black/[.12] dark:border-white/[.18] bg-white dark:bg-black p-4 flex flex-col gap-3 shadow-lg">
            <NavLinks />
            <a
              href="https://www.facebook.com/GraceUMCGreer/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
              style={{ color: "#1877F2" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      )}
    </div>
  );
}


