'use client';

import { useState, useEffect } from 'react';
import { OmSymbol, MenuIcon, CloseIcon } from './ui/icons';
import { navLinks } from '../../lib/content';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/95 backdrop-blur-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <button
            onClick={() => handleNavClick('#inicio')}
            className="flex items-center gap-3 text-text-primary"
          >
            <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center">
              <OmSymbol className="w-6 h-6 text-accent" />
            </div>
            <span className="font-serif text-lg tracking-wide hidden sm:inline">Nitay Yoga Estudio</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xs cursor-pointer font-medium uppercase tracking-[0.15em] text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#programa')}
              className="bg-beige text-bg-primary uppercase tracking-[0.1em] text-xs font-medium px-6 py-3 rounded-sm hover:bg-beige-dark transition-colors"
            >
              Quiero mi evaluación
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-text-primary"
            aria-label="Abrir menú"
          >
            <MenuIcon className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-bg-primary flex flex-col items-center justify-center gap-6 pb-24">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-6 text-text-primary"
            aria-label="Cerrar menú"
          >
            <CloseIcon className="w-8 h-8" />
          </button>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-lg font-medium uppercase tracking-[0.15em] text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#programa')}
            className="bg-beige text-bg-primary uppercase tracking-[0.1em] text-sm font-medium px-8 py-4 rounded-sm hover:bg-beige-dark transition-colors mt-2"
          >
            Quiero mi evaluación
          </button>
        </div>
      )}
    </>
  );
}
