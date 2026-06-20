import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "../../hooks/use-language";
import { SectionHeader } from "../common/section-header";
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
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !formEmail || !message) return;

    setIsSubmitting(true);
    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName("");
      setFormEmail("");
      setMessage("");

      // Clear success alert after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const address = language === "ar" ? addressAr : addressEn;

  return (
    <section
      id="contact"
      className="relative bg-background-secondary/20 py-20 overflow-hidden"
    >
      {/* Decorative details */}
      <div className="top-[30%] left-[-10%] -z-10 absolute blur-[80px] rounded-full w-[300px] h-[300px] animate-pulse-slow bg-accent-blue/5" />
      <div className="right-[-10%] bottom-[10%] -z-10 absolute blur-[100px] rounded-full w-[350px] h-[350px] bg-accent-purple/5" />

      <div className="mx-auto px-6 container">
        <SectionHeader
          title={t("contactTitle")}
          subtitle={t("contactSubtitle")}
          badge={language === "ar" ? "تواصل معنا" : "Get in Touch"}
        />

        <div className="items-start gap-10 md:gap-12 grid grid-cols-1 lg:grid-cols-12 mx-auto max-w-6xl">
          {/* Left Block: Contact Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <h3 className="mb-2 font-bold text-text-heading text-xl md:text-2xl leading-tight">
              {language === "ar"
                ? "معلومات الاتصال المباشرة"
                : "Direct Contact Nodes"}
            </h3>

            {/* Address Box */}
            <div className="flex items-start gap-4 bg-background-tertiary/40 backdrop-blur-sm p-5 border border-border-muted/10 hover:border-accent-blue/20 rounded-2xl transition-all">
              <div className="flex flex-shrink-0 justify-center items-center border border-accent-blue/20 rounded-xl w-10 h-10 bg-accent-blue/10 text-accent-blue">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1 text-left rtl:text-right">
                <span className="font-bold text-text-secondary text-xs uppercase tracking-widest">
                  {t("contactInfoAddress")}
                </span>
                <span className="font-semibold text-text-heading text-sm leading-relaxed">
                  {address}
                </span>
              </div>
            </div>

            {/* Email Box */}
            <div className="flex items-start gap-4 bg-background-tertiary/40 backdrop-blur-sm p-5 border border-border-muted/10 hover:border-accent-blue/20 rounded-2xl transition-all">
              <div className="flex flex-shrink-0 justify-center items-center border border-accent-cyan/20 rounded-xl w-10 h-10 bg-accent-cyan/10 text-accent-cyan">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1 text-left rtl:text-right">
                <span className="font-bold text-text-secondary text-xs uppercase tracking-widest">
                  {t("contactInfoEmail")}
                </span>
                <a
                  href={`mailto:${email}`}
                  className="font-semibold text-text-heading text-sm break-all transition-colors hover:text-accent-cyan"
                >
                  {email}
                </a>
              </div>
            </div>

            {/* Phone/WhatsApp Box */}
            <div className="flex items-start gap-4 bg-background-tertiary/40 backdrop-blur-sm p-5 border border-border-muted/10 hover:border-accent-blue/20 rounded-2xl transition-all">
              <div className="flex flex-shrink-0 justify-center items-center border border-accent-purple/20 rounded-xl w-10 h-10 bg-accent-purple/10 text-accent-purple">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1 text-left rtl:text-right">
                <span className="font-bold text-text-secondary text-xs uppercase tracking-widest">
                  {t("contactInfoPhone")}
                </span>
                <a
                  href={`tel:${phone}`}
                  className="font-semibold text-text-heading text-sm transition-colors hover:text-accent-purple"
                >
                  {phone}
                </a>
              </div>
            </div>

            {/* Working Hours Box */}
            <div className="flex items-start gap-4 bg-background-tertiary/40 backdrop-blur-sm p-5 border border-border-muted/10 hover:border-accent-blue/20 rounded-2xl transition-all">
              <div className="flex flex-shrink-0 justify-center items-center border border-accent-magenta/20 rounded-xl w-10 h-10 bg-accent-magenta/10 text-accent-magenta">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1 text-left rtl:text-right">
                <span className="font-bold text-text-secondary text-xs uppercase tracking-widest">
                  {language === "ar" ? "ساعات الدعم" : "Operational Status"}
                </span>
                <span className="font-semibold text-text-heading text-sm leading-relaxed">
                  {language === "ar"
                    ? "السبت - الخميس (9ص - 9م)"
                    : "Sat - Thu: 9:00 AM - 9:00 PM"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Message Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative lg:col-span-7 bg-background-card backdrop-blur-md p-6 md:p-8 border border-border-muted/10 rounded-3xl"
          >
            {/* Border glow */}
            <div className="-z-10 absolute inset-0 opacity-30 shadow-glass border border-accent-blue/20 rounded-3xl pointer-events-none" />

            <h3 className="mb-6 font-bold text-text-heading text-xl md:text-2xl text-left rtl:text-right leading-tight">
              {t("contactGetInTouch")}
            </h3>

            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 bg-emerald-500/10 mb-6 p-4 border border-emerald-500/30 rounded-xl font-semibold text-emerald-400 text-sm text-left rtl:text-right"
              >
                <CheckCircle className="flex-shrink-0 w-5 h-5" />
                <span>{t("contactSuccess")}</span>
              </motion.div>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 text-left rtl:text-right"
            >
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-bold text-text-secondary text-xs uppercase tracking-widest"
                >
                  {t("contactName")}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background-tertiary/40 px-4 py-3 border border-border-muted/10 hover:border-border-muted/20 focus:border-accent-blue/50 rounded-xl focus:outline-none w-full text-text-primary text-sm transition-all"
                  placeholder={language === "ar" ? "اسمك الكريم" : "Your name"}
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-bold text-text-secondary text-xs uppercase tracking-widest"
                >
                  {t("contactEmail")}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="bg-background-tertiary/40 px-4 py-3 border border-border-muted/10 hover:border-border-muted/20 focus:border-accent-blue/50 rounded-xl focus:outline-none w-full text-text-primary text-sm transition-all"
                  placeholder="example@mail.com"
                />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-bold text-text-secondary text-xs uppercase tracking-widest"
                >
                  {t("contactMessage")}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-background-tertiary/40 px-4 py-3 border border-border-muted/10 hover:border-border-muted/20 focus:border-accent-blue/50 rounded-xl focus:outline-none w-full text-text-primary text-sm transition-all resize-none"
                  placeholder={
                    language === "ar"
                      ? "تفاصيل استفسارك..."
                      : "Describe what you need..."
                  }
                />
              </div>

              {/* Submit Button */}
              <CtaButton
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="mt-2 w-full"
              >
                {isSubmitting ? (
                  <span className="border-2 border-border-muted/30 border-t-text-primary rounded-full w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>{t("contactSend")}</span>
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
