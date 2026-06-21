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
  const { toggleTheme, isDark } = useTheme();
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
      const offset = 90;
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
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-background-primary/95 border-b border-border-muted shadow-sm py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">

          {/* ── Brand Name Logo (Plain Serif Font) ── */}
          <button
            onClick={() => handleNavLinkClick('home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="ENTITY — Go to top"
          >
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border border-accent-blue/30 bg-background-tertiary">
              <img
                src="/logo.svg"
                alt="ENTITY logo"
                className="w-6 h-6 object-contain rounded-full"
                onError={e => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <span className="text-2xl font-black tracking-widest text-text-heading font-serif select-none">
              ENTITY
            </span>
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
                    'text-sm font-semibold tracking-wide transition-all relative py-1',
                    isActive
                      ? 'text-text-heading font-bold'
                      : 'text-text-secondary hover:text-text-heading'
                  )}
                >
                  {t(link.labelKey)}
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
              className="w-9 h-9 rounded-lg border border-border-muted/20 bg-background-card hover:bg-background-tertiary text-text-secondary hover:text-text-heading flex items-center justify-center transition-all"
            >
              {isDark
                ? <Sun className="w-4 h-4 text-amber-500" />
                : <Moon className="w-4 h-4 text-accent-blue" />
              }
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border-muted/20 bg-background-card hover:bg-background-tertiary text-text-secondary hover:text-text-heading text-xs font-bold uppercase transition-all"
            >
              <Globe className="w-4 h-4 text-accent-cyan" />
              <span>{language === 'en' ? 'AR' : 'EN'}</span>
            </button>

            {/* Linktree CTA Button (Solid Dark Navy Background) */}
            <a
              href={linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-border-glow text-white text-xs font-bold uppercase tracking-wider hover:bg-border-glow/90 active:scale-[0.98] transition-all shadow-sm"
            >
              Linktree
            </a>
          </div>

          {/* ── Mobile Menu Toggle ── */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg bg-background-card border border-border-muted/10 text-text-secondary hover:bg-background-tertiary transition-all"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
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
