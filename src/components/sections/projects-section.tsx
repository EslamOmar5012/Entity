import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { Project } from "../../types/project";
import { useLanguage } from "../../hooks/use-language";
import { SectionHeader } from "../common/section-header";
import { cn } from "../../lib/utils";

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { key: "all", label_en: "All Projects", label_ar: "جميع المشاريع" },
    { key: "cctv", label_en: "CCTV Systems", label_ar: "كاميرات المراقبة" },
    { key: "networking", label_en: "Networking", label_ar: "الشبكات والاتصال" },
    { key: "smarthome", label_en: "Smart Automation", label_ar: "الأتمتة الذكية" },
    { key: "audio", label_en: "Audio Solutions", label_ar: "الأنظمة الصوتية" },
    { key: "software", label_en: "Software Dev", label_ar: "الحلول البرمجية" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <section id="projects" className="relative py-24 bg-background-primary overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <SectionHeader
          title={t("projectsTitle")}
          subtitle={t("projectsSubtitle")}
          badge={language === "ar" ? "معرض أعمالنا" : "Portfolio of Innovation"}
        />

        {/* Filter Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          {categories.map((cat) => {
            const isActive = filter === cat.key;
            const label = language === "ar" ? cat.label_ar : cat.label_en;
            return (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={cn(
                  "relative py-1 text-sm font-semibold tracking-wider transition-all select-none focus:outline-none uppercase",
                  isActive
                    ? "text-text-cyan font-bold"
                    : "text-text-secondary hover:text-text-heading"
                )}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-text-cyan" />
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Grid Layout (2 columns layout on desktop matching the screenshot) */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const title = language === "ar" ? project.title_ar : project.title_en;
              const desc = language === "ar" ? project.description_ar : project.description_en;

              const categoryObj = categories.find((c) => c.key === project.category);
              const categoryLabel = categoryObj
                ? language === "ar"
                  ? categoryObj.label_ar
                  : categoryObj.label_en
                : project.category;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col justify-end relative bg-background-secondary border border-border-muted/15 rounded-2xl aspect-[16/10] overflow-hidden hover:shadow-md transition-shadow duration-350"
                >
                  {/* Project Image */}
                  <img
                    src={project.cover_image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Clean shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-background-secondary/40 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 rounded bg-background-highlight border border-border-highlight/40 text-text-cyan font-bold text-[10px] uppercase tracking-wider select-none">
                      {categoryLabel}
                    </span>
                  </div>

                  {/* Text Details */}
                  <div className="p-8 text-left rtl:text-right w-full z-20">
                    <h3 className="text-xl font-bold text-text-heading group-hover:text-text-cyan tracking-wide transition-colors leading-tight mb-2 select-none font-serif">
                      {title}
                    </h3>

                    <p className="text-text-secondary text-xs leading-relaxed transition-colors mb-4 line-clamp-2">
                      {desc}
                    </p>

                    {/* Action Trigger */}
                    <div className="flex items-center gap-1.5 font-bold text-[10px] uppercase tracking-widest text-text-cyan">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'عرض التفاصيل' : 'View Details'}</span>
                      <ExternalLink className="w-3.5 h-3.5 rtl:rotate-180 transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
export default ProjectsSection;
