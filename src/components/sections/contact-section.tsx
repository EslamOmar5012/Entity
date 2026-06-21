import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import { useLanguage } from "../../hooks/use-language";
import { CtaButton } from "../common/cta-button";
import { useSectionAnimation } from "../../hooks/use-section-animation";

interface ContactSectionProps {
  email: string;
  addressEn: string;
  addressAr: string;
  phone: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  email,
  addressEn,
  addressAr,
  phone,
}) => {
  const { t, language } = useLanguage();
  const { fadeInUp } = useSectionAnimation();

  // Form states
  const [name, setName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !formEmail || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName("");
      setFormEmail("");
      setCompany("");
      setMessage("");

      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const address = language === "ar" ? addressAr : addressEn;

  return (
    <section
      id="contact"
      className="relative bg-background-primary py-24 overflow-hidden border-t border-border-muted/15"
    >
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start mt-8">
          
          {/* ── Left Column: Contact Details ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Gold Badge */}
            <span className="text-xs font-bold uppercase tracking-widest text-text-cyan select-none">
              {language === 'ar' ? 'تواصل معنا' : 'Establish Contact'}
            </span>

            {/* Title & Subtitle */}
            <h2 className="text-3xl md:text-4.5xl font-extrabold tracking-tight leading-tight text-text-heading font-serif">
              {language === 'ar' ? 'هل أنت مستعد لتطوير بنيتك التحتية؟' : 'Ready to evolve your infrastructure?'}
            </h2>
            
            <p className="text-text-secondary text-sm md:text-base leading-relaxed pr-2 font-sans">
              {language === 'ar' 
                ? 'تواصل مع مستشارينا الاستراتيجيين لاستكشاف كيف يمكن للأتمتة المخصصة تحويل أعمالك وتأمينها.'
                : 'Connect with our strategic consultants to explore how tailored automation can differentiate your experience.'}
            </p>

            {/* Details Cards Container */}
            <div className="flex flex-col gap-5 mt-6">
              {/* Phone Node */}
              <div className="flex items-center gap-4 text-left rtl:text-right">
                <div className="w-10 h-10 rounded-full bg-background-highlight border border-border-highlight/40 text-text-cyan flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-text-secondary uppercase tracking-widest leading-none mb-1">
                    {t("contactInfoPhone")}
                  </span>
                  <a href={`tel:${phone}`} className="text-sm font-bold text-text-heading hover:text-text-cyan transition-colors font-sans">
                    {phone}
                  </a>
                </div>
              </div>

              {/* Email Node */}
              <div className="flex items-center gap-4 text-left rtl:text-right">
                <div className="w-10 h-10 rounded-full bg-background-highlight border border-border-highlight/40 text-text-cyan flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-text-secondary uppercase tracking-widest leading-none mb-1">
                    {t("contactInfoEmail")}
                  </span>
                  <a href={`mailto:${email}`} className="text-sm font-bold text-text-heading hover:text-text-cyan transition-colors font-sans break-all">
                    {email}
                  </a>
                </div>
              </div>

              {/* Address Node */}
              <div className="flex items-start gap-4 text-left rtl:text-right">
                <div className="w-10 h-10 rounded-full bg-background-highlight border border-border-highlight/40 text-text-cyan flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-text-secondary uppercase tracking-widest leading-none mb-1">
                    {t("contactInfoAddress")}
                  </span>
                  <span className="text-sm font-semibold text-text-heading font-sans">
                    {address}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Form Terminal (Inspired by Screenshot Form) ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-7 bg-background-secondary border border-border-muted/15 rounded-2xl p-8 shadow-sm w-full"
          >
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 bg-emerald-500/10 mb-6 p-4 border border-emerald-500/30 rounded-xl font-semibold text-emerald-500 text-sm text-left rtl:text-right"
              >
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-emerald-500" />
                <span>{t("contactSuccess")}</span>
              </motion.div>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 text-left rtl:text-right"
            >
              {/* Row 1: Name and Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-bold text-text-secondary text-xs uppercase tracking-widest font-sans"
                  >
                    {t("contactName")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-background-primary px-4 py-3 border border-border-muted/15 focus:border-text-cyan rounded-lg focus:outline-none w-full text-text-primary text-sm transition-all"
                    placeholder={language === "ar" ? "الاسم الكامل" : "Your name"}
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="company"
                    className="font-bold text-text-secondary text-xs uppercase tracking-widest font-sans"
                  >
                    {language === "ar" ? "اسم الشركة" : "Company"}
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="bg-background-primary px-4 py-3 border border-border-muted/15 focus:border-text-cyan rounded-lg focus:outline-none w-full text-text-primary text-sm transition-all"
                    placeholder={language === "ar" ? "اسم شركتك" : "Organization inc."}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-bold text-text-secondary text-xs uppercase tracking-widest font-sans"
                >
                  {t("contactEmail")}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="bg-background-primary px-4 py-3 border border-border-muted/15 focus:border-text-cyan rounded-lg focus:outline-none w-full text-text-primary text-sm transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message / Project Brief */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-bold text-text-secondary text-xs uppercase tracking-widest font-sans"
                >
                  {language === "ar" ? "نبذة عن المشروع" : "Project Brief"}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-background-primary px-4 py-3 border border-border-muted/15 focus:border-text-cyan rounded-lg focus:outline-none w-full text-text-primary text-sm transition-all resize-none"
                  placeholder={
                    language === "ar"
                      ? "كيف يمكننا مساعدتك في مشروعك القادم؟"
                      : "What systems do you require?"
                  }
                />
              </div>

              {/* Submit Button (Solid Primary Navy Background) */}
              <CtaButton
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full bg-border-glow hover:bg-border-glow/95 border-none text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all uppercase tracking-wider"
              >
                {isSubmitting ? (
                  <span className="border-2 border-border-muted/30 border-t-text-primary rounded-full w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>{language === 'ar' ? 'إرسال الطلب' : 'Send Request'}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </CtaButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
