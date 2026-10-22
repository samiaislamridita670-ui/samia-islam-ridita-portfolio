"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Mail, FileText, ExternalLink } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080B12]/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6"
      >
        {/* Logo */}
        <Link
          href="/#home"
          className="text-2xl font-bold tracking-tight text-white"
          onClick={() => setMenuOpen(false)}
        >
          Samia<span className="text-indigo-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${link.href}`}
              className="text-sm font-medium text-slate-300 transition hover:text-indigo-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://github.com/samiaislamridita670-ui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            className="text-slate-300 transition hover:text-white"
          >
           
          </a><ExternalLink size={20} />

          <a
            href="mailto:samiaislamridita670@gmail.com"
            aria-label="Send an email"
            className="text-slate-300 transition hover:text-white"
          >
            <Mail size={20} />
          </a>

          <a
            href="/Samia_Islam_Ridita_Resume_1.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            <FileText size={17} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-slate-700 p-2 text-white lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#101522] px-6 py-6 lg:hidden"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={`/${link.href}`}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-300 transition hover:text-indigo-400"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/Samia_Islam_Ridita_Resume_1.pdf"
              download
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 font-semibold text-white"
            >
              <FileText size={18} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
