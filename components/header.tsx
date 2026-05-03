'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

// Dynamically import icons and animations
const DynamicIcons = {
  Moon: dynamic(() => import('lucide-react').then((mod) => mod.Moon), {
    ssr: false,
    loading: () => <div className="w-[18px] h-[18px] bg-slate-300/20 rounded" />,
  }),
  Sun: dynamic(() => import('lucide-react').then((mod) => mod.Sun), {
    ssr: false,
    loading: () => <div className="w-[18px] h-[18px] bg-slate-300/20 rounded" />,
  }),
  Menu: dynamic(() => import('lucide-react').then((mod) => mod.Menu), {
    ssr: false,
    loading: () => <div className="w-5 h-5 bg-slate-300/20 rounded" />,
  }),
  X: dynamic(() => import('lucide-react').then((mod) => mod.X), {
    ssr: false,
    loading: () => <div className="w-5 h-5 bg-slate-300/20 rounded" />,
  }),
};

// Dynamically import mobile menu
const MobileMenu = dynamic(() => import('./mobile-menu').then((mod) => mod.MobileMenu), {
  ssr: false,
  loading: () => null,
});

export function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  const sections = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  );

  useEffect(() => {
    const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
    let frameId = 0;
    let lastRun = 0;

    const updateScrollState = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)) : 0;

      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 50);

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom > 0;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastRun < 100) return;
      lastRun = now;
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateScrollState);
    };

    const cleanup = () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frameId);
      setMounted(false);
    };

    if (typeof window !== 'undefined') {
      idleCallback(() => {
        setMounted(true);
        window.addEventListener('scroll', handleScroll, { passive: true });
        updateScrollState();
      });
    }

    return cleanup;
  }, [sections]);

  const handleNavigation = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    },
    [isMobileMenuOpen],
  );

  return (
    <LazyMotion features={domAnimation}>
      {/* Centered header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-4 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="mx-auto px-6 py-2.5 rounded-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 shadow-lg">
          <div className="flex items-center justify-between gap-6">
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavigation(section.id)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    activeSection === section.id
                      ? 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mounted && (isMobileMenuOpen ? <DynamicIcons.X /> : <DynamicIcons.Menu />)}
            </button>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'dark' ? <DynamicIcons.Sun /> : <DynamicIcons.Moon />)}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu - only render when needed */}
      {mounted && isMobileMenuOpen && (
        <MobileMenu
          sections={sections}
          activeSection={activeSection}
          onNavigate={handleNavigation}
        />
      )}

      {/* Scroll progress bar - only render when mounted */}
      {mounted && (
        <m.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-500 z-50 origin-left"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      )}
    </LazyMotion>
  );
}
