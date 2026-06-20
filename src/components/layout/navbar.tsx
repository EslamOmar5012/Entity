import React, { useState, useEffect } from 'react';
import { Menu, Globe, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../../hooks/use-language';
import { useTheme } from '../../hooks/use-theme';
import { useScrollSpy } from '../../hooks/use-scrollspy';
import { NAV_LINKS } from '../../lib/constants';
import { MobileMenu } from './mobile-menu';
import { cn } from '../../lib/utils';

interface NavbarProps {
  linktreeUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ linktreeUrl }) => {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectionIds = NAV_LINKS.map(link => link.id);
  const activeSection = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3',
          isScrolled
            ? 'bg-background-primary/85 backdrop-blur-md border-b border-border-glow/20 shadow-glass'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">

          {/* ── Logo Brand ── */}
          <button
            onClick={() => handleNavLinkClick('home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="ENTITY — Go to top"
          >
            {/* Actual logo image */}
            <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.svg"
                alt="ENTITY Smart Solutions logo"
                className="w-full h-full object-contain rounded-full shadow-glow-blue"
                onError={e => {
                  // Fallback if logo file not found
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Ping halo on hover */}
              <div className="absolute inset-0 rounded-full bg-accent-blue/10 animate-ping pointer-events-none opacity-0 group-hover:opacity-100 -z-10" />
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xl font-black tracking-widest text-text-heading select-none">
                ENTITY
              </span>
              <span className="text-[9px] font-semibold tracking-[0.25em] text-accent-cyan uppercase select-none -mt-0.5">
                Smart Solutions
              </span>
            </div>
          </button>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavLinkClick(link.id)}
                  className={cn(
                    'text-sm font-semibold tracking-wide transition-all py-1.5 px-3 rounded-lg relative',
                    isActive
                      ? 'text-accent-cyan text-glow-cyan'
                      : 'text-text-secondary hover:text-text-heading'
                  )}
                >
                  {t(link.labelKey)}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-accent-cyan shadow-glow-cyan" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* ── Desktop Actions ── */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="w-9 h-9 rounded-xl border border-border-glow/20 bg-background-card hover:bg-background-tertiary hover:border-accent-blue/30 text-text-secondary hover:text-text-heading flex items-center justify-center transition-all"
            >
              {isDark
                ? <Sun className="w-4 h-4 text-amber-400" />
                : <Moon className="w-4 h-4 text-accent-blue" />
              }
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border-glow/20 bg-background-card hover:bg-background-tertiary hover:border-accent-blue/30 text-text-secondary hover:text-text-heading text-xs font-bold tracking-wider uppercase transition-all"
            >
              <Globe className="w-4 h-4 text-accent-cyan" />
              <span>{language === 'en' ? 'AR' : 'EN'}</span>
            </button>

            {/* Linktree CTA */}
            <a
              href={linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl bg-accent-blue text-white shadow-glow-blue border border-accent-blue/50 text-xs font-bold tracking-wide hover:bg-accent-blue/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Linktree
            </a>
          </div>

          {/* ── Mobile Menu Toggle ── */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl bg-background-card border border-border-glow/20 text-text-secondary hover:bg-background-tertiary hover:border-accent-blue/20"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavLinkClick={handleNavLinkClick}
        linktreeUrl={linktreeUrl}
      />
    </>
  );
};
export default Navbar;
