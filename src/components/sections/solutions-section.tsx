import React from "react";
import { motion } from "framer-motion";
import {
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
  HelpCircle,
  ArrowRight
} from "lucide-react";
import { Solution } from "../../types/solution";
import { useLanguage } from "../../hooks/use-language";
import { SectionHeader } from "../common/section-header";

interface SolutionsSectionProps {
  solutions: Solution[];
}

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
  const { language, t } = useLanguage();
  const activeSolutions = solutions.filter((sol) => sol.is_active);

  return (
    <section id="solutions" className="relative py-24 bg-background-primary overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <SectionHeader
          title={t("solutionsTitle")}
          subtitle={t("solutionsSubtitle")}
          badge={language === "ar" ? "خبراتنا الأساسية" : "Core Expertise"}
        />

        {/* Grid of Clean Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {activeSolutions.map((sol, index) => {
            const title = language === "ar" ? sol.title_ar : sol.title_en;
            const desc = language === "ar" ? sol.description_ar : sol.description_en;
            const Icon = iconComponents[sol.icon] || HelpCircle;

            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col justify-between p-8 bg-background-secondary border border-border-muted/15 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
              >
                <div>
                  {/* Gold-tinted Circle Icon Container */}
                  <div className="w-12 h-12 rounded-full bg-background-highlight border border-border-highlight/40 text-text-cyan flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-heading mb-4 font-serif leading-snug">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 font-sans">
                    {desc}
                  </p>
                </div>

                {/* Explore Systems Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-cyan hover:text-text-cyan/80 transition-colors"
                >
                  <span>{language === 'ar' ? 'اكتشف الأنظمة' : 'Explore Systems'}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default SolutionsSection;
