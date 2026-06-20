import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, Camera, Network, Lock, PhoneCall, Tv, Volume2, Cpu, Globe, Database, Code, Terminal, HelpCircle } from 'lucide-react';
import { Solution, SolutionCategory } from '../../types/solution';
import { useLanguage } from '../../hooks/use-language';
import { SectionHeader } from '../common/section-header';
import { GlowCard } from '../common/glow-card';
import { cn } from '../../lib/utils';

interface SolutionsSectionProps {
  solutions: Solution[];
}

// Icon mapper for dynamic CMS mapping
const iconComponents: Record<string, React.ComponentType<any>> = {
  Camera,
  Network,
  Lock,
  PhoneCall,
  Tv,
  Volume2,
  Cpu,
  Globe,
  Database,
  Code,
  Terminal,
};

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ solutions }) => {
  const { t, language, direction } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<SolutionCategory>('it');

  // Filter solutions by category
  const filteredSolutions = solutions.filter(
    item => item.category === activeCategory && item.is_active
  );

  // Initialize Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
    direction: direction,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect, filteredSolutions]);

  // Re-initialize Embla when active category changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit({ direction: direction });
      emblaApi.scrollTo(0);
    }
  }, [activeCategory, emblaApi, direction]);

  return (
    <section id="solutions" className="py-20 bg-background-secondary/30 relative">
      {/* Decorative background glow grid */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-accent-cyan/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <SectionHeader
          title={t('solutionsTitle')}
          subtitle={t('solutionsSubtitle')}
          badge={language === 'ar' ? 'حلول ذكية' : 'Core Focus'}
        />

        {/* Tab Switcher Segmented Control */}
        <div className="flex justify-center mb-10">
          <div className="flex p-1.5 rounded-2xl bg-background-tertiary/60 border border-white/5 backdrop-blur-sm max-w-md w-full relative">
            <button
              onClick={() => setActiveCategory('it')}
              className={cn(
                'flex-1 py-3 px-4 rounded-xl text-sm font-bold tracking-wide transition-all z-10 text-center flex items-center justify-center gap-2',
                activeCategory === 'it' 
                  ? 'bg-accent-blue text-white shadow-glow-blue' 
                  : 'text-text-secondary hover:text-white'
              )}
            >
              <Network className="w-4 h-4" />
              {t('solutionsCategoryIt')}
            </button>
            <button
              onClick={() => setActiveCategory('software')}
              className={cn(
                'flex-1 py-3 px-4 rounded-xl text-sm font-bold tracking-wide transition-all z-10 text-center flex items-center justify-center gap-2',
                activeCategory === 'software' 
                  ? 'bg-accent-purple text-white shadow-[0_0_15px_rgba(124,58,237,0.35)]' 
                  : 'text-text-secondary hover:text-white'
              )}
            >
              <Code className="w-4 h-4" />
              {t('solutionsCategorySoftware')}
            </button>
          </div>
        </div>

        {/* Carousel Slider Panel */}
        <div className="relative">
          <div className="overflow-hidden px-1" ref={emblaRef}>
            <div className="flex gap-6">
              <AnimatePresence mode="popLayout">
                {filteredSolutions.map((sol, index) => {
                  const title = language === 'ar' ? sol.title_ar : sol.title_en;
                  const desc = language === 'ar' ? sol.description_ar : sol.description_en;
                  const Icon = iconComponents[sol.icon] || HelpCircle;
                  const cardColor = activeCategory === 'software' ? 'purple' : 'cyan';

                  return (
                    <div 
                      key={sol.id} 
                      className="flex-shrink-0 w-full sm:w-[280px] md:w-[350px]"
                    >
                      <motion.div
                        initial={{ opacity: 0, x: direction === 'rtl' ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <GlowCard 
                          glowColor={cardColor}
                          className="h-[280px] flex flex-col justify-between"
                        >
                          <div className="flex flex-col gap-4">
                            {/* Glowing Icon Wrapper */}
                            <div className={cn(
                              'w-12 h-12 rounded-xl flex items-center justify-center border',
                              activeCategory === 'software'
                                ? 'bg-accent-purple/10 border-accent-purple/30 text-accent-purple shadow-[0_0_10px_rgba(124,58,237,0.15)]'
                                : 'bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.15)]'
                            )}>
                              <Icon className="w-6 h-6" />
                            </div>

                            {/* Card title */}
                            <h3 className="text-xl font-bold text-white tracking-wide">
                              {title}
                            </h3>

                            {/* Card description */}
                            <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                              {desc}
                            </p>
                          </div>

                          {/* Dynamic CTA Arrow */}
                          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-glow-blue transition-colors group-hover:text-accent-cyan mt-4">
                            <span>{t('viewDetails')}</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                          </div>
                        </GlowCard>
                      </motion.div>
                    </div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Slider Navigation Arrows (Hide if not scrollable) */}
          {(prevBtnEnabled || nextBtnEnabled) && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className={cn(
                  'w-10 h-10 rounded-xl border border-white/5 bg-background-card flex items-center justify-center hover:border-accent-blue/40 text-text-primary transition-all disabled:opacity-30 disabled:pointer-events-none',
                  prevBtnEnabled ? 'hover:bg-accent-blue/10 hover:shadow-glow-blue' : ''
                )}
                aria-label="Previous solution slide"
              >
                <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className={cn(
                  'w-10 h-10 rounded-xl border border-white/5 bg-background-card flex items-center justify-center hover:border-accent-blue/40 text-text-primary transition-all disabled:opacity-30 disabled:pointer-events-none',
                  nextBtnEnabled ? 'hover:bg-accent-blue/10 hover:shadow-glow-blue' : ''
                )}
                aria-label="Next solution slide"
              >
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default SolutionsSection;
