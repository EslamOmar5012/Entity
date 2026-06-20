import React from 'react';
import { motion } from 'framer-motion';
import { Boxes, ShieldCheck, Lock, TrendingUp, Wrench, Activity, HelpCircle } from 'lucide-react';
import { WhyUsItem } from '../../types/company';
import { useLanguage } from '../../hooks/use-language';
import { SectionHeader } from '../common/section-header';
import { GlowCard } from '../common/glow-card';
import { useSectionAnimation } from '../../hooks/use-section-animation';

interface WhyUsSectionProps {
  items: WhyUsItem[];
}

const iconComponents: Record<string, React.ComponentType<any>> = {
  Boxes,
  ShieldCheck,
  Lock,
  TrendingUp,
  Wrench,
  Activity,
};

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ items }) => {
  const { t, language } = useLanguage();
  const { fadeInUp, containerVariants } = useSectionAnimation();

  return (
    <section id="why-choose-us" className="py-20 relative overflow-hidden">
      {/* Subtle details background */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-accent-purple/3 rounded-full blur-[120px] -z-10 animate-pulse-slow" />

      <div className="container mx-auto px-6">
        <SectionHeader
          title={t('whyUsTitle')}
          subtitle={t('whyUsSubtitle')}
          badge={language === 'ar' ? 'مميزاتنا' : 'Our USPs'}
        />

        {/* Feature Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {items.map((item) => {
            const title = language === 'ar' ? item.title_ar : item.title_en;
            const desc = language === 'ar' ? item.description_ar : item.description_en;
            const Icon = iconComponents[item.icon] || HelpCircle;

            return (
              <motion.div 
                key={item.id} 
                variants={fadeInUp}
              >
                <GlowCard 
                  glowColor="blue"
                  className="h-full flex flex-col gap-4 p-6 border-white/5 hover:border-accent-blue/30"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent-blue/10 border border-accent-blue/30 text-accent-blue shadow-[0_0_10px_rgba(37,99,235,0.15)] group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {title}
                  </h3>
                  
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {desc}
                  </p>
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default WhyUsSection;
