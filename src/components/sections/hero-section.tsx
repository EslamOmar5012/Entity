import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '../../hooks/use-language';
import { useDirection } from '../../hooks/use-direction';
import { SiteSettings } from '../../types/company';
import { CtaButton } from '../common/cta-button';
import { useSectionAnimation } from '../../hooks/use-section-animation';

interface HeroSectionProps {
  settings: SiteSettings;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ settings }) => {
  const { t, language } = useLanguage();
  const { isRtl } = useDirection();
  const { fadeInUp } = useSectionAnimation();

  const title = language === 'ar' ? settings.hero_title_ar : settings.hero_title_en;
  const slogan = language === 'ar' ? settings.slogan_ar : settings.slogan_en;
  const subtitle = language === 'ar' ? settings.hero_subtitle_ar : settings.hero_subtitle_en;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background-primary"
    >
      {/* Background static grid pattern */}
      <div className="absolute inset-0 cyber-grid opacity-30 -z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* ── Left Column: Text Content (Serif Style) ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="lg:col-span-7 flex flex-col items-start gap-5 text-start"
        >
          {/* Small Gold Tag */}
          <span className="text-xs font-bold uppercase tracking-widest text-text-cyan select-none">
            {language === 'ar' ? 'أتمتة استراتيجية دقيقة' : 'Strategic Automation'}
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-text-heading select-none font-serif">
            {title}
            {slogan && slogan.trim() !== title.trim() && (
              <span className="block mt-2 font-serif italic font-normal text-text-cyan">
                {slogan}
              </span>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl font-sans">
            {subtitle} {t('heroSupportingText')}
          </p>

          {/* Call To Actions */}
          <div className="flex flex-wrap items-center gap-4 w-full mt-4">
            <CtaButton 
              variant="primary" 
              onClick={() => scrollTo('solutions')}
              className="bg-border-glow text-white hover:bg-border-glow/90 px-7 py-3 rounded-lg border-none font-bold"
            >
              <span>{t('heroCtaSolutions')}</span>
              <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1.5 ${isRtl ? 'rotate-180 group-hover:-translate-x-1.5' : ''}`} />
            </CtaButton>
            <CtaButton 
              variant="secondary" 
              onClick={() => scrollTo('contact')}
              className="border border-border-muted/30 text-text-primary hover:bg-background-tertiary/20 px-7 py-3 rounded-lg font-bold"
            >
              <span>{t('heroCtaContact')}</span>
            </CtaButton>
          </div>
        </motion.div>

        {/* ── Right Column: Circular Logo Dashboard (Inspired by Screenshot & Logo) ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.15 }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          <div className="relative w-80 h-80 flex items-center justify-center select-none">
            
            {/* Simple Elegant Circle Outer Frame */}
            <div className="absolute inset-0 rounded-full border-2 border-accent-blue/30 bg-background-secondary/40 shadow-md" />
            <div className="absolute inset-4 rounded-full border border-border-muted/15" />

            {/* Circular Logo Card Holder */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-60 h-60 rounded-full border border-border-highlight/40 dark:border-border-muted/30 bg-background-card flex items-center justify-center shadow-lg relative overflow-hidden group"
            >
              {/* Logo Image in the center */}
              <div className="relative flex flex-col items-center justify-center z-10 p-6">
                <img
                   src="/logo.svg"
                  alt="ENTITY Smart Solutions Logo"
                  className="w-36 h-36 object-contain group-hover:scale-102 transition-transform duration-300"
                  onError={e => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down chevron */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => scrollTo('solutions')}
      >
        <motion.div 
          animate={{ y: [0, 6, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-text-secondary opacity-70" />
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
