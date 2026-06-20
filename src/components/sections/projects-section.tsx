import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "../../types/project";
import { useLanguage } from "../../hooks/use-language";
import { SectionHeader } from "../common/section-header";
import { cn } from "../../lib/utils";

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
}) => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { key: "all", label_en: "All Projects", label_ar: "كل المشاريع" },
    { key: "cctv", label_en: "CCTV Systems", label_ar: "كاميرات المراقبة" },
    { key: "networking", label_en: "Networking", label_ar: "الشبكات والاتصال" },
    {
      key: "smarthome",
      label_en: "Smart Automation",
      label_ar: "الأنظمة الذكية",
    },
    { key: "audio", label_en: "Audio Solutions", label_ar: "الأنظمة الصوتية" },
    { key: "software", label_en: "Software Dev", label_ar: "الحلول البرمجية" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <section id="projects" className="relative py-20">
      <div className="top-[20%] right-[-10%] -z-10 absolute blur-[100px] rounded-full w-[350px] h-[350px] bg-accent-blue/5" />

      <div className="mx-auto px-6 container">
        <SectionHeader
          title={t("projectsTitle")}
          subtitle={t("projectsSubtitle")}
          badge={language === "ar" ? "معرض أعمالنا" : "Portfolio"}
        />

        {/* Filter Buttons Segmented Bar */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = filter === cat.key;
            const label = language === "ar" ? cat.label_ar : cat.label_en;
            return (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={cn(
                  "px-4 py-2 border rounded-xl font-bold text-xs md:text-sm tracking-wider transition-all select-none",
                  isActive
                    ? "bg-accent-blue text-white shadow-glow-blue border-accent-blue/50"
                    : "bg-background-card border-white/5 text-text-secondary hover:text-white hover:border-white/10 hover:bg-background-tertiary",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid Layout */}
        <motion.div
          layout
          className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const title =
                language === "ar" ? project.title_ar : project.title_en;
              const desc =
                language === "ar"
                  ? project.description_ar
                  : project.description_en;

              // Get category badge text
              const categoryObj = categories.find(
                (c) => c.key === project.category,
              );
              const categoryLabel = categoryObj
                ? language === "ar"
                  ? categoryObj.label_ar
                  : categoryObj.label_en
                : project.category;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-background-card shadow-lg hover:shadow-glow-blue border border-border-muted/10 hover:border-accent-blue/40 rounded-2xl aspect-[4/3] overflow-hidden transition-all"
                >
                  {/* Background Project Image */}
                  <img
                    src={project.cover_image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Dark gradient base overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-primary/95 via-background-primary/60 to-transparent" />

                  {/* Top-Right Category Floating Badge */}
                  <div className="top-4 right-4 rtl:right-auto rtl:left-4 z-10 absolute">
                    <span className="shadow-glow-blue px-2.5 py-1 border border-accent-blue/50 rounded-lg font-black text-white text-xs uppercase tracking-wider bg-accent-blue">
                      {categoryLabel}
                    </span>
                  </div>

                  {/* Bottom Text Content (Visible default + full description on hover) */}
                  <div className="bottom-0 z-10 absolute inset-x-0 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent p-6 min-h-[50%] text-left rtl:text-right">
                    <h3 className="mb-2 font-bold text-text-heading group-hover:text-text-cyan text-xl tracking-wide transition-colors select-none">
                      {title}
                    </h3>

                    <p className="mb-4 text-text-secondary group-hover:text-text-primary text-xs line-clamp-2 md:line-clamp-3 leading-relaxed transition-colors">
                      {desc}
                    </p>

                    {/* View Action Overlay trigger button */}
                    <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 font-bold text-xs uppercase tracking-wider transition-opacity duration-300 text-accent-cyan pointer-events-none">
                      <span>{t("projectsViewProject")}</span>
                      <ExternalLink className="w-3.5 h-3.5 rtl:rotate-180" />
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
