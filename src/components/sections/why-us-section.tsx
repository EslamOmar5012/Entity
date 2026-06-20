import React from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  ShieldCheck,
  Lock,
  TrendingUp,
  Wrench,
  Activity,
  HelpCircle,
} from "lucide-react";
import { WhyUsItem } from "../../types/company";
import { useLanguage } from "../../hooks/use-language";
import { SectionHeader } from "../common/section-header";
import { GlowCard } from "../common/glow-card";
import { useSectionAnimation } from "../../hooks/use-section-animation";

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
    <section id="why-choose-us" className="relative py-20 overflow-hidden">
      {/* Subtle details background */}
      <div className="top-[30%] right-[-10%] -z-10 absolute blur-[120px] rounded-full w-[400px] h-[400px] animate-pulse-slow bg-accent-purple/3" />

      <div className="mx-auto px-6 container">
        <SectionHeader
          title={t("whyUsTitle")}
          subtitle={t("whyUsSubtitle")}
          badge={language === "ar" ? "مميزاتنا" : "Our USPs"}
        />

        {/* Feature Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => {
            const title = language === "ar" ? item.title_ar : item.title_en;
            const desc =
              language === "ar" ? item.description_ar : item.description_en;
            const Icon = iconComponents[item.icon] || HelpCircle;

            return (
              <motion.div key={item.id} variants={fadeInUp}>
                <GlowCard
                  glowColor="blue"
                  className="flex flex-col gap-4 p-6 border-border-muted/10 hover:border-accent-blue/30 h-full"
                >
                  <div className="flex justify-center items-center shadow-[0_0_10px_rgba(37,99,235,0.15)] border border-accent-blue/30 rounded-xl w-12 h-12 group-hover:scale-105 transition-transform duration-300 bg-accent-blue/10 text-accent-blue">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-bold text-text-heading text-xl tracking-wide">
                    {title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed">
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
