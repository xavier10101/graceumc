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
      {open && (
        <div className="absolute left-0 right-0 top-full mt-2 md:hidden">
          <div className="mx-4 rounded-lg border border-black/[.12] dark:border-white/[.18] bg-white dark:bg-black p-4 flex flex-col gap-3 shadow-lg">
            <NavLinks />
          </div>
        </div>
      )}
    </div>
  );
}


