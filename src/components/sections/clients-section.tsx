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
      className="relative bg-background-primary py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          title={t("clientsTitle")}
          subtitle={t("clientsSubtitle")}
          badge={language === "ar" ? "البيئات المستهدفة" : "Sectors"}
        />

        {/* Sectors Grid matching the screenshot cards layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {clients.map((client) => {
            const desc = language === "ar" ? client.description_ar : client.description_en;
            const Icon = iconComponents[client.logo_url] || HelpCircle;

            // Mapping translated titles manually to match structure perfectly
            const title = language === "ar"
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
              : client.name;

            return (
              <motion.div key={client.id} variants={fadeInUp}>
                <div
                  className="flex flex-col items-start gap-5 p-7 bg-background-secondary border border-border-muted/15 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01] group h-full"
                >
                  {/* Clean Gold Icon Bullet Container */}
                  <div className="w-10 h-10 rounded-lg bg-background-highlight border border-border-highlight/40 text-text-cyan flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex flex-col gap-2 flex-grow text-left rtl:text-right">
                    {/* Sector name */}
                    <h3 className="font-bold text-text-heading text-lg tracking-wide font-serif mb-1">
                      {title}
                    </h3>

                    {/* Sector description */}
                    <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default ClientsSection;
