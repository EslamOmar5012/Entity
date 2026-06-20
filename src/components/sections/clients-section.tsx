import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  ShoppingBag,
  Building2,
  Warehouse,
  Utensils,
  GraduationCap,
  HelpCircle,
} from "lucide-react";
import { Client } from "../../types/client";
import { useLanguage } from "../../hooks/use-language";
import { SectionHeader } from "../common/section-header";
import { GlowCard } from "../common/glow-card";
import { useSectionAnimation } from "../../hooks/use-section-animation";

interface ClientsSectionProps {
  clients: Client[];
}

const iconComponents: Record<string, React.ComponentType<any>> = {
  Home,
  ShoppingBag,
  Building2,
  Warehouse,
  Utensils,
  GraduationCap,
};

export const ClientsSection: React.FC<ClientsSectionProps> = ({ clients }) => {
  const { t, language } = useLanguage();
  const { fadeInUp, containerVariants } = useSectionAnimation();

  return (
    <section
      id="clients"
      className="relative bg-background-secondary/15 py-20 overflow-hidden"
    >
      {/* Decorative gradient glow in background */}
      <div className="top-[40%] left-[-10%] -z-10 absolute blur-[100px] rounded-full w-[350px] h-[350px] bg-accent-blue/5" />

      <div className="mx-auto px-6 container">
        <SectionHeader
          title={t("clientsTitle")}
          subtitle={t("clientsSubtitle")}
          badge={language === "ar" ? "شركاء النجاح" : "Our Markets"}
        />

        {/* Sectors / Industries Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {clients.map((client) => {
            const desc =
              language === "ar" ? client.description_ar : client.description_en;
            const Icon = iconComponents[client.logo_url] || HelpCircle;

            return (
              <motion.div key={client.id} variants={fadeInUp}>
                <GlowCard
                  glowColor="cyan"
                  className="flex items-start gap-4 p-6 border-border-muted/10 hover:border-accent-cyan/30 h-full"
                >
                  {/* Glowing round indicator */}
                  <div className="flex flex-shrink-0 justify-center items-center shadow-[0_0_10px_rgba(6,182,212,0.15)] border border-accent-cyan/30 rounded-xl w-12 h-12 group-hover:rotate-6 transition-transform duration-300 bg-accent-cyan/10 text-accent-cyan">
                    <Icon className="w-6 h-6 animate-pulse" />
                  </div>

                  <div className="flex flex-col gap-2">
                    {/* Category details */}
                    <span className="px-2 py-0.5 border border-accent-cyan/20 rounded-full w-max font-bold text-xs uppercase tracking-widest bg-accent-cyan/5 text-accent-cyan">
                      {client.category}
                    </span>

                    {/* Sector name */}
                    <h3 className="font-bold text-text-heading text-lg tracking-wide">
                      {language === "ar"
                        ? client.id === "cli-res"
                          ? "المجمعات والفلل السكنية"
                          : client.id === "cli-ret"
                            ? "صالات العرض والتجزئة"
                            : client.id === "cli-corp"
                              ? "المقرات الإدارية والشركات"
                              : client.id === "cli-ware"
                                ? "المستودعات والخدمات اللوجستية"
                                : client.id === "cli-hosp"
                                  ? "الفنادق والمطاعم والضيافة"
                                  : "القطاع التعليمي والمدارس"
                        : client.name}
                    </h3>

                    {/* Sector description */}
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default ClientsSection;
