import React from 'react';
import { motion } from 'framer-motion';
import { Home, ShoppingBag, Building2, Warehouse, Utensils, GraduationCap, HelpCircle } from 'lucide-react';
import { Client } from '../../types/client';
import { useLanguage } from '../../hooks/use-language';
import { SectionHeader } from '../common/section-header';
import { GlowCard } from '../common/glow-card';
import { useSectionAnimation } from '../../hooks/use-section-animation';

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
    <section id="clients" className="py-20 bg-background-secondary/15 relative overflow-hidden">
      {/* Decorative gradient glow in background */}
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <SectionHeader
          title={t('clientsTitle')}
          subtitle={t('clientsSubtitle')}
          badge={language === 'ar' ? 'شركاء النجاح' : 'Our Markets'}
        />

        {/* Sectors / Industries Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {clients.map((client) => {
            const desc = language === 'ar' ? client.description_ar : client.description_en;
            const Icon = iconComponents[client.logo_url] || HelpCircle;

            return (
              <motion.div
                key={client.id}
                variants={fadeInUp}
              >
                <GlowCard 
                  glowColor="cyan"
                  className="flex items-start gap-4 p-6 h-full border-white/5 hover:border-accent-cyan/30"
                >
                  {/* Glowing round indicator */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan flex-shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.15)] group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-6 h-6 animate-pulse" />
                  </div>

                  <div className="flex flex-col gap-2">
                    {/* Category details */}
                    <span className="text-xs font-bold uppercase tracking-widest text-accent-cyan bg-accent-cyan/5 border border-accent-cyan/20 px-2 py-0.5 rounded-full w-max">
                      {client.category}
                    </span>

                    {/* Sector name */}
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {language === 'ar' 
                        ? (client.id === 'cli-res' ? 'المجمعات والفلل السكنية' : 
                           client.id === 'cli-ret' ? 'صالات العرض والتجزئة' : 
                           client.id === 'cli-corp' ? 'المقرات الإدارية والشركات' : 
                           client.id === 'cli-ware' ? 'المستودعات والخدمات اللوجستية' : 
                           client.id === 'cli-hosp' ? 'الفنادق والمطاعم والضيافة' : 
                           'القطاع التعليمي والمدارس')
                        : client.name
                      }
                    </h3>

                    {/* Sector description */}
                    <p className="text-sm text-text-secondary leading-relaxed">
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
