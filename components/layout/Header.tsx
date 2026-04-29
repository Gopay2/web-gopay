"use client";

import React, { useState } from "react";

/**
 * Interface representing a navigation link item
 */
interface NavItem {
  label: string;
  href: string;
}

/**
 * Header Component
 * Displays the main navigation bar with the logo and desktop/mobile navigation links.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Inicio", href: "#" },
    { label: "Cómo funciona", href: "#how" },
    { label: "Marcas", href: "#brands" },
    { label: "Testimonios", href: "#testimonials" },
    { label: "Preguntas Frecuentes", href: "#faq" }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-blue-900/20 font-[family-name:var(--font-outfit)]">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <img
            alt="GoPay Logo"
            className="w-auto object-contain h-8 md:h-12 scale-[1.5] md:scale-[1.8] origin-left"
            src="/brands/gopaylogo.webp"
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a key={index} className="text-slate-400 font-medium transition-colors hover:text-secondary" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
          className="lg:hidden text-slate-400 hover:text-secondary p-2 focus:outline-none transition-colors relative w-10 h-10 flex items-center justify-center"
        >
          <div className="w-6 h-3.5 relative">
            <span 
              className={`absolute left-0 h-[2px] w-full bg-current rounded-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span 
              className={`absolute left-0 h-[2px] w-full bg-current rounded-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/50 shadow-2xl transition-all duration-300 origin-top ${
          isMenuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              className="text-slate-300 font-medium transition-colors hover:text-secondary py-4 border-b border-slate-800/50 last:border-0" 
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
