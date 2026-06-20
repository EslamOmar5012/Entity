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
      glowColor:
        "bg-accent-blue/10 border-accent-blue/20 text-accent-blue shadow-[0_0_10px_rgba(37,99,235,0.1)]",
    },
    {
      id: "mission",
      titleKey: "aboutOurMission",
      desc_en:
        "To make spaces smarter, networking infrastructure resilient, and software operations optimized.",
      desc_ar:
        "جعل المساحات أكثر ذكاءً وأتمتة، وبنيتكم التحتية للشبكات أكثر مرونة، وعملياتكم البرمجية مثالية.",
      icon: Shield,
      glowColor:
        "bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.1)]",
    },
    {
      id: "vision",
      titleKey: "aboutOurVision",
      desc_en:
        "To serve as the primary security and technical integration hub across the regional enterprise landscape.",
      desc_ar:
        "أن نكون المركز الرئيسي والموثوق لحلول الأمان وتكامل الأنظمة التقنية لقطاع الأعمال بالمنطقة.",
      icon: Eye,
      glowColor:
        "bg-accent-purple/10 border-accent-purple/20 text-accent-purple shadow-[0_0_10px_rgba(124,58,237,0.1)]",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-background-secondary/10 py-20 overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="top-[40%] right-[-10%] -z-10 absolute blur-[100px] rounded-full w-[350px] h-[350px] animate-pulse-slow bg-accent-blue/5" />
      <div className="bottom-[20%] left-[-10%] -z-10 absolute blur-[80px] rounded-full w-[250px] h-[250px] bg-accent-cyan/3" />

      <div className="mx-auto px-6 container">
        <SectionHeader
          title={t("aboutTitle")}
          subtitle={t("aboutSubtitle")}
          badge={language === "ar" ? "معلومات عنا" : "Company Profile"}
        />

        {/* Top block: Text summary + dynamic stats list */}
        <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-12 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-6"
          >
            <h3 className="mb-6 font-bold text-text-heading text-2xl md:text-3xl leading-tight select-none">
              {title}
            </h3>
            <p className="mb-6 font-medium text-text-secondary text-sm md:text-base leading-relaxed">
              {body}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="gap-4 md:gap-6 grid grid-cols-2 lg:col-span-6"
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

        {/* Bottom block: 3 Pillars Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="gap-6 grid grid-cols-1 md:grid-cols-3"
        >
          {aboutPillars.map((pillar) => {
            const PillarIcon = pillar.icon;
            const desc = language === "ar" ? pillar.desc_ar : pillar.desc_en;
            return (
              <motion.div
                key={pillar.id}
                variants={fadeInUp}
                className="relative bg-background-card/50 hover:bg-background-card backdrop-blur-md p-6 border border-border-muted/10 hover:border-accent-blue/30 rounded-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border ${pillar.glowColor}`}
                  >
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-text-heading text-lg tracking-wide">
                    {t(pillar.titleKey as any)}
                  </h4>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
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
