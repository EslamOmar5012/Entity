import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe } from 'lucide-react';
import { NAV_LINKS } from '../../lib/constants';
import { useLanguage } from '../../hooks/use-language';
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

          {/* Side Drawer Container */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={`fixed top-0 bottom-0 w-80 max-w-full bg-background-secondary/95 border-l border-border-glow/20 shadow-glow-blue z-50 p-6 flex flex-col justify-between backdrop-blur-xl ${
              isRtl ? 'left-0 border-r border-l-0' : 'right-0 border-l'
            }`}
          >
            {/* Header Area */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-black text-white text-glow-blue tracking-wider">
                  ENTITY
                </span>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-xl bg-background-card hover:bg-background-tertiary border border-white/5 text-text-primary"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Anchors */}
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map(link => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => {
                        onNavLinkClick(link.id);
                        onClose();
                      }}
                      className={`text-left ${isRtl ? 'text-right' : 'text-left'} py-2 px-4 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                        isActive 
                          ? 'bg-accent-blue/15 text-text-cyan border border-accent-blue/30' 
                          : 'text-text-secondary hover:text-white hover:bg-background-tertiary/50'
                      }`}
                    >
                      {t(link.labelKey)}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions Drawer */}
            <div className="flex flex-col gap-4 mt-auto">
              {/* Language Switcher */}
              <button
                onClick={() => {
                  toggleLanguage();
                  onClose();
                }}
                className="flex items-center justify-between w-full py-3 px-4 rounded-xl bg-background-card border border-white/5 text-text-primary font-bold text-sm hover:border-accent-blue/30 hover:bg-background-tertiary"
              >
                <span className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-accent-cyan" />
                  {language === 'en' ? 'العربية' : 'English'}
                </span>
                <span className="text-xs uppercase text-text-secondary">
                  {language === 'en' ? 'ar' : 'en'}
                </span>
              </button>

              {/* Linktree Call-to-action */}
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
