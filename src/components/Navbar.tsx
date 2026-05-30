"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Phone, Mail, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to style navbar differently with hysteresis to prevent flickering
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 40) {
        setIsScrolled(true);
      } else if (scrollY < 37) {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Acasă", href: "/" },
    { label: "Reparații Laptop", href: "/reparatii-laptop" },
    { label: "Reparații Calculatoare", href: "/reparatii-calculatoare" },
    { label: "Instalare Windows", href: "/instalare-windows" },
    { label: "Galerie Foto", href: "/galerie" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out ${isScrolled ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-200 dark:border-slate-800" : "bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800"}`}>
      {/* Top Info Bar - Collapses on scroll */}
      <div className={`w-full bg-slate-900 text-slate-300 transition-all duration-300 overflow-hidden ${isScrolled ? "h-0 opacity-0" : "h-auto py-2 opacity-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-medium tracking-wide">
          <div className="flex justify-center items-center gap-5">
            <a href="mailto:office@servicecomputer.ro" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span>office@servicecomputer.ro</span>
            </a>
            <a href="tel:0770198233" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-500" />
              <span>+40 770 198 233</span>
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Social</span>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2c2.717 0 3.056.01 4.122.058 1.065.048 1.79.217 2.428.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.637.416 1.363.465 2.428.047 1.066.058 1.405.058 4.122 0 2.717-.01 3.056-.058 4.122-.048 1.065-.217 1.79-.465 2.428a4.88 4.88 0 01-1.153 1.772 4.88 4.88 0 01-1.772 1.153c-.637.247-1.363.416-2.428.465-1.066.047-1.405.058-4.122.058-2.717 0-3.056-.01-4.122-.058-1.065-.048-1.79-.217-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.9 4.9 0 01-1.153-1.772c-.247-.637-.416-1.363-.465-2.428C2.01 15.056 2 14.717 2 12c0-2.717.01-3.056.058-4.122.048-1.065.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.637-.247 1.363-.416 2.428-.465C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.337-8.337a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${isScrolled ? "py-3" : "py-4 sm:py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Swirl & Name */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                {/* SVG circular loop/swirl logo as described */}
                <svg
                  className="w-10 h-10 animate-[spin_10s_linear_infinite]"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="swirlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#swirlGrad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="180 60"
                  />
                  <path
                    d="M50 20 C60 20, 70 30, 70 50 C70 70, 50 80, 40 70 C30 60, 30 40, 50 30"
                    stroke="url(#swirlGrad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight leading-none bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  COMPUTER SHOP
                </span>
                <span className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase leading-none mt-1">
                  and SERVICE
                </span>
              </div>
            </Link>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-6">
                <ul className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Theme toggle & CTA Button */}
                <div className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-slate-800">
                  <ThemeToggle />
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-2.5 px-5 rounded-xl shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30 hover:shadow-xl transition-all hover:-translate-y-0.5 text-sm"
                  >
                    PICK-UP & RETURN GRATUIT
                  </Link>
                </div>
              </div>

              {/* Mobile Actions: Hamburger + Theme Toggle */}
              <div className="flex lg:hidden items-center gap-3">
                <ThemeToggle />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-expanded={isOpen}
                  aria-label="Comută meniul principal"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "max-h-[500px] opacity-100 py-5 border-t border-slate-100 dark:border-slate-900 mt-3"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-4 space-y-3">
              <ul className="space-y-3 text-base font-semibold text-slate-700 dark:text-slate-300">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block p-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-5 rounded-xl shadow-lg transition-all"
                >
                  PICK-UP & RETURN GRATUIT
                </Link>
              </div>
            </div>
          </div>
        </nav>
    </header>
  );
}
