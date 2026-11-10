import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe, ArrowUpRight, Menu, X, SlidersHorizontal, Edit3 } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenConsultation: () => void;
  onOpenEditor: () => void;
  profileName: string;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  isDark,
  onToggleTheme,
  onOpenConsultation,
  onOpenEditor,
  profileName,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#pengalaman-sma', label: lang === 'id' ? 'Pengalaman SMA' : 'High School' },
    { href: '#cita-cita', label: lang === 'id' ? 'Cita-Cita' : 'Career Goals' },
    { href: '#motivasi', label: lang === 'id' ? 'Motivasi' : 'Motivation' },
    { href: '#pendidikan', label: lang === 'id' ? 'Riwayat Pendidikan' : 'Education' },
    { href: '#kontak', label: lang === 'id' ? 'Kontak' : 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-50/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-neutral-950 dark:text-white whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
          >
            {profileName}
          </a>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action button + utility controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Live Portfolio Editor Trigger */}
            <button
              onClick={onOpenEditor}
              aria-label={lang === 'id' ? 'Edit Teks & Gambar' : 'Edit Text & Media'}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md transition-colors"
              title={lang === 'id' ? 'Kustomisasi Teks & Gambar' : 'Customize Content & Media'}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'id' ? 'Edit' : 'Edit'}</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              aria-label={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md transition-colors"
              title={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase">{lang}</span>
            </button>

            {/* Dark Mode Switcher */}
            <button
              onClick={onToggleTheme}
              aria-label={isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
              className="p-1.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md transition-colors"
              title={isDark ? 'Mode Terang' : 'Mode Gelap'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              <span>{lang === 'id' ? 'Mulai Proyek' : 'Start a Project'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white"
              aria-label="Toggle menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg">
            <nav className="flex flex-col gap-3 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-1.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-neutral-950 dark:bg-white dark:text-neutral-950 rounded-md"
                >
                  <span>{lang === 'id' ? 'Mulai Diskusi Proyek' : 'Start a Project Discussion'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
