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
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 overflow-hidden"
    >
      {/* Decorative cyber grid */}
      <div className="absolute inset-0 cyber-grid cyber-grid-radial -z-10" />
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-accent-blue/10 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-accent-purple/10 rounded-full blur-[90px] -z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* ── Left: Text Content ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="lg:col-span-7 flex flex-col items-start gap-6 text-start"
        >
          {/* Glowing live badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)] select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping" />
            {t('heroBadge')}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-snug text-text-heading select-none">
            {title}
            <span className="block mt-4 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple bg-clip-text text-transparent leading-normal pt-1 pb-1">
              {slogan}
            </span>
          </h1>

          {/* Supporting text */}
          <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl">
            {subtitle} {t('heroSupportingText')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full mt-2">
            <CtaButton variant="primary" onClick={() => scrollTo('solutions')}>
              {t('heroCtaSolutions')}
              <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </CtaButton>
            <CtaButton variant="secondary" onClick={() => scrollTo('contact')}>
              {t('heroCtaContact')}
            </CtaButton>
          </div>
        </motion.div>

        {/* ── Right: Rotating Logo Card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">

            {/* Outer spinning dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-dashed border-accent-blue/30 shadow-[0_0_20px_rgba(37,99,235,0.1)]"
            />

            {/* Counter-rotating inner ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-8 rounded-full border border-dotted border-accent-cyan/20"
            />

            {/* Pulsing glow halo */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-accent-blue/15 via-accent-cyan/5 to-accent-purple/15 blur-2xl -z-10"
            />

            {/* ── Floating Logo Card ── */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="w-52 h-52 md:w-60 md:h-60 bg-gradient-to-br from-background-secondary/90 to-background-tertiary/90 rounded-3xl border border-accent-blue/40 shadow-glow-blue flex items-center justify-center backdrop-blur-md relative overflow-hidden cursor-pointer group"
            >
              {/* Inner grid lines */}
              <div className="absolute inset-0 cyber-grid opacity-20" />

              {/* Glow sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              {/* Actual ENTITY Logo */}
              <div className="relative flex flex-col items-center justify-center gap-2 z-10">
                <motion.img
                  src="/logo.svg"
                  alt="ENTITY Smart Solutions"
                  className="w-36 h-36 md:w-40 md:h-40 object-contain drop-shadow-[0_0_18px_rgba(37,99,235,0.6)]"
                  animate={{ rotateY: [0, 8, 0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              {/* Corner highlights */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-accent-cyan/60" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-accent-cyan/60" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-accent-cyan/60" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-accent-cyan/60" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => scrollTo('solutions')}
      >
        <span className="text-xs font-bold text-text-secondary tracking-widest uppercase">
          {language === 'ar' ? 'اسحب لأسفل' : 'Scroll Down'}
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4 text-accent-cyan" />
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
