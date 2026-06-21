import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Compass } from "lucide-react";
import { AboutContent } from "../../types/company";
import { useLanguage } from "../../hooks/use-language";
import { SectionHeader } from "../common/section-header";
import { StatsCounter } from "../common/stats-counter";
import { useSectionAnimation } from "../../hooks/use-section-animation";

interface AboutSectionProps {
  content: AboutContent;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  const { t, language } = useLanguage();
  const { fadeInUp, containerVariants } = useSectionAnimation();

  const title = language === "ar" ? content.title_ar : content.title_en;
  const body = language === "ar" ? content.body_ar : content.body_en;

  const aboutPillars = [
    {
      id: "who",
      titleKey: "aboutWhoWeAre",
      desc_en:
        "ENTITY consists of experienced engineers and hardware technicians scripting intelligent integrations.",
      desc_ar:
        "تتكون ENTITY من مهندسين ذوي خبرة وفنيين متخصصين يبرمجون حلول تكامل الأجهزة الذكية.",
      icon: Compass,
      glowColor: "border-accent-blue/15 bg-background-tertiary/10 text-accent-cyan",
      panelGlow: "hover:border-text-cyan/40 hover:bg-background-card/90",
    },
    {
      id: "mission",
      titleKey: "aboutOurMission",
      desc_en:
        "To make spaces smarter, networking infrastructure resilient, and software operations optimized.",
      desc_ar:
        "جعل المساحات أكثر ذكاءً وأتمتة، وبنيتكم التحتية للشبكات أكثر مرونة، وعملياتكم البرمجية مثالية.",
      icon: Shield,
      glowColor: "border-accent-cyan/15 bg-background-tertiary/10 text-accent-cyan",
      panelGlow: "hover:border-text-cyan/40 hover:bg-background-card/90",
    },
    {
      id: "vision",
      titleKey: "aboutOurVision",
      desc_en:
        "To serve as the primary security and technical integration hub across the regional enterprise landscape.",
      desc_ar:
        "أن نكون المركز الرئيسي والموثوق لحلول الأمان وتكامل الأنظمة التقنية لقطاع الأعمال بالمنطقة.",
      icon: Eye,
      glowColor: "border-accent-purple/15 bg-background-tertiary/10 text-accent-cyan",
      panelGlow: "hover:border-text-cyan/40 hover:bg-background-card/90",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-background-primary py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          title={t("aboutTitle")}
          subtitle={t("aboutSubtitle")}
          badge={language === "ar" ? "ملف الشركة" : "Company Profile"}
        />

        {/* Top block: Text summary */}
        <div className="max-w-4xl mx-auto text-center mt-12 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl md:text-3.5xl font-bold text-text-heading font-serif leading-tight select-none">
              {title}
            </h3>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed pr-2 font-sans max-w-3xl mx-auto">
              {body}
            </p>
          </motion.div>
        </div>

        {/* Middle block: 3 Pillars Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {aboutPillars.map((pillar) => {
            const PillarIcon = pillar.icon;
            const desc = language === "ar" ? pillar.desc_ar : pillar.desc_en;
            
            return (
              <motion.div
                key={pillar.id}
                variants={fadeInUp}
                className={`relative bg-background-secondary border border-border-muted/15 rounded-xl p-7 transition-all duration-300 hover:scale-[1.01] group ${pillar.panelGlow}`}
              >
                <div className="flex items-center gap-4 mb-4 text-left rtl:text-right">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center border text-text-cyan bg-background-highlight border-border-highlight/40"
                  >
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-text-heading text-lg tracking-wide group-hover:text-text-cyan transition-colors font-serif">
                    {t(pillar.titleKey as any)}
                  </h4>
                </div>
                
                <p className="text-text-secondary text-xs md:text-sm leading-relaxed text-left rtl:text-right">
                  {desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom block: Simple minimalist stats row (as shown in the screenshot) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border-muted/15"
        >
          {content.stats.map((stat, idx) => {
            const label = language === "ar" ? stat.label_ar : stat.label_en;
            return (
              <motion.div key={idx} variants={fadeInUp}>
                <StatsCounter value={stat.value} label={label} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default AboutSection;
