import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Compass } from 'lucide-react';
import { AboutContent } from '../../types/company';
import { useLanguage } from '../../hooks/use-language';
import { SectionHeader } from '../common/section-header';
import { StatsCounter } from '../common/stats-counter';
import { useSectionAnimation } from '../../hooks/use-section-animation';

interface AboutSectionProps {
  content: AboutContent;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  const { t, language } = useLanguage();
  const { fadeInUp, containerVariants } = useSectionAnimation();

  const title = language === 'ar' ? content.title_ar : content.title_en;
  const body = language === 'ar' ? content.body_ar : content.body_en;

  const aboutPillars = [
    {
      id: 'who',
      titleKey: 'aboutWhoWeAre',
      desc_en: 'ENTITY consists of experienced engineers and hardware technicians scripting intelligent integrations.',
      desc_ar: 'تتكون ENTITY من مهندسين ذوي خبرة وفنيين متخصصين يبرمجون حلول تكامل الأجهزة الذكية.',
      icon: Compass,
      glowColor: 'bg-accent-blue/10 border-accent-blue/20 text-accent-blue shadow-[0_0_10px_rgba(37,99,235,0.1)]',
    },
    {
      id: 'mission',
      titleKey: 'aboutOurMission',
      desc_en: 'To make spaces smarter, networking infrastructure resilient, and software operations optimized.',
      desc_ar: 'جعل المساحات أكثر ذكاءً وأتمتة، وبنيتكم التحتية للشبكات أكثر مرونة، وعملياتكم البرمجية مثالية.',
      icon: Shield,
      glowColor: 'bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.1)]',
    },
    {
      id: 'vision',
      titleKey: 'aboutOurVision',
      desc_en: 'To serve as the primary security and technical integration hub across the regional enterprise landscape.',
      desc_ar: 'أن نكون المركز الرئيسي والموثوق لحلول الأمان وتكامل الأنظمة التقنية لقطاع الأعمال بالمنطقة.',
      icon: Eye,
      glowColor: 'bg-accent-purple/10 border-accent-purple/20 text-accent-purple shadow-[0_0_10px_rgba(124,58,237,0.1)]',
    },
  ];

  return (
    <section id="about" className="py-20 relative bg-background-secondary/10 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[20%] left-[-10%] w-[250px] h-[250px] bg-accent-cyan/3 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-6">
        <SectionHeader
          title={t('aboutTitle')}
          subtitle={t('aboutSubtitle')}
          badge={language === 'ar' ? 'معلومات عنا' : 'Company Profile'}
        />

        {/* Top block: Text summary + dynamic stats list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="lg:col-span-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-text-heading mb-6 leading-tight select-none">
              {title}
            </h3>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6 font-medium">
              {body}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6"
          >
            {content.stats.map((stat, idx) => {
              const label = language === 'ar' ? stat.label_ar : stat.label_en;
              return (
                <motion.div key={idx} variants={fadeInUp}>
                  <StatsCounter value={stat.value} label={label} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom block: 3 Pillars Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {aboutPillars.map((pillar) => {
            const PillarIcon = pillar.icon;
            const desc = language === 'ar' ? pillar.desc_ar : pillar.desc_en;
            return (
              <motion.div
                key={pillar.id}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-background-card/50 border border-white/5 backdrop-blur-md relative hover:border-accent-blue/30 hover:bg-background-card transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${pillar.glowColor}`}>
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-text-heading tracking-wide">
                    {t(pillar.titleKey as any)}
                  </h4>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default AboutSection;
