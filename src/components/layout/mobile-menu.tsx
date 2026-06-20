import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../../lib/constants';
import { useLanguage } from '../../hooks/use-language';
import { useTheme } from '../../hooks/use-theme';
import { useDirection } from '../../hooks/use-direction';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavLinkClick: (id: string) => void;
  linktreeUrl: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
  onNavLinkClick,
  linktreeUrl,
}) => {
  const { t, toggleLanguage, language } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const { isRtl } = useDirection();

  const menuVariants: any = {
    closed: {
      x: isRtl ? '-100%' : '100%',
      transition: { type: 'tween', duration: 0.3, ease: 'easeIn' }
    },
    open: {
      x: 0,
      transition: { type: 'tween', duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Side Drawer */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={`fixed top-0 bottom-0 w-80 max-w-full bg-background-secondary/95 shadow-glow-blue z-50 p-6 flex flex-col justify-between backdrop-blur-xl ${
              isRtl
                ? 'left-0 border-r border-border-glow/20'
                : 'right-0 border-l border-border-glow/20'
            }`}
          >
            {/* ── Header ── */}
            <div>
              <div className="flex items-center justify-between mb-8">
                {/* Logo in mobile menu */}
                <div className="flex items-center gap-2.5">
                  <img
                    src="/logo.svg"
                    alt="ENTITY logo"
                    className="w-9 h-9 object-contain rounded-full shadow-glow-blue"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="text-base font-black text-text-heading tracking-widest select-none">
                      ENTITY
                    </span>
                    <span className="text-[8px] font-semibold tracking-[0.2em] text-accent-cyan uppercase -mt-0.5 select-none">
                      Smart Solutions
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-background-card hover:bg-background-tertiary border border-border-glow/20 text-text-secondary hover:text-text-heading"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map(link => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => {
                        onNavLinkClick(link.id);
                        onClose();
                      }}
                      className={`py-2.5 px-4 rounded-xl text-sm font-semibold tracking-wide transition-all text-start ${
                        isRtl ? 'text-right' : 'text-left'
                      } ${
                        isActive
                          ? 'bg-accent-blue/15 text-accent-cyan border border-accent-blue/30'
                          : 'text-text-secondary hover:text-text-heading hover:bg-background-tertiary/50'
                      }`}
                    >
                      {t(link.labelKey)}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* ── Bottom Actions ── */}
            <div className="flex flex-col gap-3 mt-auto">

              {/* Theme Switcher */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-between w-full py-3 px-4 rounded-xl bg-background-card border border-border-glow/20 text-text-secondary hover:text-text-heading font-bold text-sm hover:border-accent-blue/30 hover:bg-background-tertiary transition-all"
              >
                <span className="flex items-center gap-2.5">
                  {isDark
                    ? <Sun className="w-5 h-5 text-amber-400" />
                    : <Moon className="w-5 h-5 text-accent-blue" />
                  }
                  {isDark
                    ? (language === 'ar' ? 'الوضع الفاتح' : 'Light Mode')
                    : (language === 'ar' ? 'الوضع الداكن' : 'Dark Mode')
                  }
                </span>
                <span className="text-xs uppercase text-text-secondary">
                  {isDark ? '☀' : '🌙'}
                </span>
              </button>

              {/* Language Switcher */}
              <button
                onClick={() => { toggleLanguage(); onClose(); }}
                className="flex items-center justify-between w-full py-3 px-4 rounded-xl bg-background-card border border-border-glow/20 text-text-secondary hover:text-text-heading font-bold text-sm hover:border-accent-blue/30 hover:bg-background-tertiary transition-all"
              >
                <span className="flex items-center gap-2.5">
                  <Globe className="w-5 h-5 text-accent-cyan" />
                  {language === 'en' ? 'العربية' : 'English'}
                </span>
                <span className="text-xs uppercase text-text-secondary">
                  {language === 'en' ? 'ar' : 'en'}
                </span>
              </button>

              {/* Linktree CTA */}
              <a
                href={linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 px-6 rounded-xl bg-accent-blue text-white shadow-glow-blue border border-accent-blue/50 text-sm font-bold tracking-wide hover:bg-accent-blue/90 transition-all block"
              >
                Linktree
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default MobileMenu;
