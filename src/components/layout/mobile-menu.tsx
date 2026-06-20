import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, Sun, Moon } from "lucide-react";
import { NAV_LINKS } from "../../lib/constants";
import { useLanguage } from "../../hooks/use-language";
import { useTheme } from "../../hooks/use-theme";
import { useDirection } from "../../hooks/use-direction";

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
      x: isRtl ? "-100%" : "100%",
      transition: { type: "tween", duration: 0.3, ease: "easeIn" },
    },
    open: {
      x: 0,
      transition: { type: "tween", duration: 0.4, ease: "easeOut" },
    },
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
            className="z-40 fixed inset-0 backdrop-blur-sm overlay-backdrop"
          />

          {/* Side Drawer */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={`fixed top-0 bottom-0 w-80 max-w-full bg-background-secondary/95 shadow-glow-blue z-50 p-6 flex flex-col justify-between backdrop-blur-xl ${
              isRtl
                ? "left-0 border-r border-border-glow/20"
                : "right-0 border-l border-border-glow/20"
            }`}
          >
            {/* ── Header ── */}
            <div>
              <div className="flex justify-between items-center mb-8">
                {/* Logo in mobile menu */}
                <div className="flex items-center gap-2.5">
                  <img
                    src="/logo.svg"
                    alt="ENTITY logo"
                    className="shadow-glow-blue rounded-full w-9 h-9 object-contain"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="font-black text-text-heading text-base tracking-widest select-none">
                      ENTITY
                    </span>
                    <span className="-mt-0.5 font-semibold text-[8px] uppercase tracking-[0.2em] text-accent-cyan select-none">
                      Smart Solutions
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="bg-background-card hover:bg-background-tertiary p-2 border border-border-glow/20 rounded-xl text-text-secondary hover:text-text-heading"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => {
                        onNavLinkClick(link.id);
                        onClose();
                      }}
                      className={`py-2.5 px-4 rounded-xl text-sm font-semibold tracking-wide transition-all text-start ${
                        isRtl ? "text-right" : "text-left"
                      } ${
                        isActive
                          ? "bg-accent-blue/15 text-accent-cyan border border-accent-blue/30"
                          : "text-text-secondary hover:text-text-heading hover:bg-background-tertiary/50"
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
                className="flex justify-between items-center bg-background-card hover:bg-background-tertiary px-4 py-3 border border-border-glow/20 hover:border-accent-blue/30 rounded-xl w-full font-bold text-text-secondary hover:text-text-heading text-sm transition-all"
              >
                <span className="flex items-center gap-2.5">
                  {isDark ? (
                    <Sun className="w-5 h-5 text-amber-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-accent-blue" />
                  )}
                  {isDark
                    ? language === "ar"
                      ? "الوضع الفاتح"
                      : "Light Mode"
                    : language === "ar"
                      ? "الوضع الداكن"
                      : "Dark Mode"}
                </span>
                <span className="text-text-secondary text-xs uppercase">
                  {isDark ? "☀" : "🌙"}
                </span>
              </button>

              {/* Language Switcher */}
              <button
                onClick={() => {
                  toggleLanguage();
                  onClose();
                }}
                className="flex justify-between items-center bg-background-card hover:bg-background-tertiary px-4 py-3 border border-border-glow/20 hover:border-accent-blue/30 rounded-xl w-full font-bold text-text-secondary hover:text-text-heading text-sm transition-all"
              >
                <span className="flex items-center gap-2.5">
                  <Globe className="w-5 h-5 text-accent-cyan" />
                  {language === "en" ? "العربية" : "English"}
                </span>
                <span className="text-text-secondary text-xs uppercase">
                  {language === "en" ? "ar" : "en"}
                </span>
              </button>

              {/* Linktree CTA */}
              <a
                href={linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block shadow-glow-blue px-6 py-3 border border-accent-blue/50 rounded-xl w-full font-bold text-white text-sm text-center tracking-wide transition-all bg-accent-blue hover:bg-accent-blue/90"
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
