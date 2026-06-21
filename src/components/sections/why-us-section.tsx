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
  const { language } = useLanguage();
  const { fadeInUp } = useSectionAnimation();

  return (
    <section id="why-choose-us" className="relative py-24 bg-[#09142c] text-white overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ── Left Column: Standard Text Details ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="lg:col-span-7 flex flex-col items-start gap-5 text-left rtl:text-right"
        >
          {/* Gold Subtitle */}
          <span className="text-xs font-bold uppercase tracking-widest text-text-cyan select-none">
            {language === 'ar' ? 'معيار ENTITY' : 'The ENTITY Standard'}
          </span>

          {/* White Title */}
          <h2 className="text-3xl md:text-4.5xl font-extrabold tracking-tight leading-tight text-white font-serif">
            {language === 'ar' 
              ? 'لماذا تثق كبرى الشركات بخدماتنا؟' 
              : 'Why leading organizations trust our expertise.'}
          </h2>

          {/* List of Features */}
          <div className="flex flex-col gap-6 mt-4 w-full">
            {items.map((item) => {
              const title = language === "ar" ? item.title_ar : item.title_en;
              const desc = language === "ar" ? item.description_ar : item.description_en;
              const Icon = iconComponents[item.icon] || HelpCircle;

              return (
                <div key={item.id} className="flex items-start gap-4 text-left rtl:text-right">
                  {/* Gold Icon Bullet */}
                  <div className="flex-shrink-0 text-text-cyan mt-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base tracking-wide font-sans mb-1">
                      {title}
                    </h4>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Right Column: Corporate Stats Panel ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "15+", label: language === 'ar' ? 'سنة خبرة' : 'Years Experience', icon: '🏆' },
              { value: "200+", label: language === 'ar' ? 'عميل راضٍ' : 'Satisfied Clients', icon: '🤝' },
              { value: "99.9%", label: language === 'ar' ? 'وقت التشغيل' : 'Uptime Guarantee', icon: '⚡' },
              { value: "500+", label: language === 'ar' ? 'مشروع منجز' : 'Projects Delivered', icon: '✅' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#101f42]/80 border border-slate-700/50 rounded-2xl p-5 flex flex-col items-start gap-2 hover:border-[#044a72]/60 hover:bg-[#101f42] transition-all duration-300"
              >
                <span className="text-xl">{stat.icon}</span>
                <span className="text-3xl font-extrabold text-white font-serif tracking-tight">{stat.value}</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Decorative Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="bg-gradient-to-br from-[#033058] to-[#044a72] border border-[#044a72]/60 rounded-2xl p-6 flex items-center gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm">
                {language === 'ar' ? 'شريك موثوق للمؤسسات الكبرى' : 'Trusted Enterprise Partner'}
              </p>
              <p className="text-slate-300 text-xs mt-1">
                {language === 'ar' 
                  ? 'نقدم حلولاً مخصصة تضمن استمرارية عملك'
                  : 'Delivering tailored solutions that ensure business continuity'}
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
export default WhyUsSection;
