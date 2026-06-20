import React, { useState, useEffect } from 'react';
import { Menu, Globe } from 'lucide-react';
import { useLanguage } from '../../hooks/use-language';
import { useScrollSpy } from '../../hooks/use-scrollspy';
import { NAV_LINKS } from '../../lib/constants';
import { MobileMenu } from './mobile-menu';
import { cn } from '../../lib/utils';

interface NavbarProps {
  linktreeUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ linktreeUrl }) => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active section scroll spying
  const sectionIds = NAV_LINKS.map(link => link.id);
  const activeSection = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4',
          isScrolled 
            ? 'bg-background-primary/80 backdrop-blur-md border-b border-border-glow/20 shadow-glass' 
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <button 
            onClick={() => handleNavLinkClick('home')}
            className="flex items-center gap-2 group focus:outline-none"
          >
            {/* Minimal glowing representation of Entity logo */}
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-blue to-accent-cyan flex items-center justify-center shadow-glow-blue transition-transform duration-300 group-hover:scale-105">
              <span className="text-white text-xs font-black select-none">ET</span>
              <div className="absolute inset-0 rounded-lg bg-accent-cyan/20 animate-ping pointer-events-none -z-10 group-hover:block hidden" />
            </div>
            <span className="text-2xl font-black tracking-wider text-white select-none">
              ENTITY
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavLinkClick(link.id)}
                  className={cn(
                    'text-sm font-semibold tracking-wide hover:text-white transition-all py-1.5 px-3 rounded-lg relative',
                    isActive 
                      ? 'text-text-cyan text-glow-cyan' 
                      : 'text-text-secondary'
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

          {/* Desktop Action Items */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switch Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/5 bg-background-card hover:bg-background-tertiary hover:border-accent-blue/30 text-text-primary text-xs font-bold tracking-wider uppercase transition-all"
            >
              <Globe className="w-4 h-4 text-accent-cyan" />
              <span>{language === 'en' ? 'AR' : 'EN'}</span>
            </button>

            {/* Linktree Button */}
            <a
              href={linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl bg-accent-blue text-white shadow-glow-blue border border-accent-blue/50 text-xs font-bold tracking-wide hover:bg-accent-blue/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Linktree
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl bg-background-card border border-white/5 text-text-primary hover:bg-background-tertiary hover:border-accent-blue/20"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer menu overlay */}
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
