import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../hooks/use-language';
import { SectionHeader } from '../common/section-header';
import { CtaButton } from '../common/cta-button';
import { useSectionAnimation } from '../../hooks/use-section-animation';

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
  const [name, setName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [message, setMessage] = useState('');
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
      setName('');
      setFormEmail('');
      setMessage('');
      
      // Clear success alert after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const address = language === 'ar' ? addressAr : addressEn;

  return (
    <section id="contact" className="py-20 bg-background-secondary/20 relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-[30%] left-[-10%] w-[300px] h-[300px] bg-accent-blue/5 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] bg-accent-purple/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <SectionHeader
          title={t('contactTitle')}
          subtitle={t('contactSubtitle')}
          badge={language === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Block: Contact Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
              {language === 'ar' ? 'معلومات الاتصال المباشرة' : 'Direct Contact Nodes'}
            </h3>

            {/* Address Box */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-background-tertiary/40 border border-white/5 backdrop-blur-sm hover:border-accent-blue/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 text-accent-blue flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1 text-left rtl:text-right">
                <span className="text-xs text-text-secondary uppercase font-bold tracking-widest">{t('contactInfoAddress')}</span>
                <span className="text-sm font-semibold text-white leading-relaxed">{address}</span>
              </div>
            </div>

            {/* Email Box */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-background-tertiary/40 border border-white/5 backdrop-blur-sm hover:border-accent-blue/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1 text-left rtl:text-right">
                <span className="text-xs text-text-secondary uppercase font-bold tracking-widest">{t('contactInfoEmail')}</span>
                <a href={`mailto:${email}`} className="text-sm font-semibold text-white hover:text-accent-cyan transition-colors break-all">{email}</a>
              </div>
            </div>

            {/* Phone/WhatsApp Box */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-background-tertiary/40 border border-white/5 backdrop-blur-sm hover:border-accent-blue/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1 text-left rtl:text-right">
                <span className="text-xs text-text-secondary uppercase font-bold tracking-widest">{t('contactInfoPhone')}</span>
                <a href={`tel:${phone}`} className="text-sm font-semibold text-white hover:text-accent-purple transition-colors">{phone}</a>
              </div>
            </div>

            {/* Working Hours Box */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-background-tertiary/40 border border-white/5 backdrop-blur-sm hover:border-accent-blue/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-accent-magenta/10 border border-accent-magenta/20 text-accent-magenta flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1 text-left rtl:text-right">
                <span className="text-xs text-text-secondary uppercase font-bold tracking-widest">{language === 'ar' ? 'ساعات الدعم' : 'Operational Status'}</span>
                <span className="text-sm font-semibold text-white leading-relaxed">
                  {language === 'ar' ? 'السبت - الخميس (9ص - 9م)' : 'Sat - Thu: 9:00 AM - 9:00 PM'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Message Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="lg:col-span-7 p-6 md:p-8 rounded-3xl bg-background-card border border-white/5 backdrop-blur-md relative"
          >
            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl border border-accent-blue/20 opacity-30 pointer-events-none -z-10 shadow-glass" />
            
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight text-left rtl:text-right">
              {t('contactGetInTouch')}
            </h3>

            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-sm font-semibold text-left rtl:text-right"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>{t('contactSuccess')}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left rtl:text-right">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                  {t('contactName')}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-background-tertiary/40 border border-white/5 hover:border-white/10 focus:border-accent-blue/50 focus:outline-none px-4 py-3 rounded-xl text-white text-sm transition-all"
                  placeholder={language === 'ar' ? 'اسمك الكريم' : 'Your name'}
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                  {t('contactEmail')}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="w-full bg-background-tertiary/40 border border-white/5 hover:border-white/10 focus:border-accent-blue/50 focus:outline-none px-4 py-3 rounded-xl text-white text-sm transition-all"
                  placeholder="example@mail.com"
                />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                  {t('contactMessage')}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-background-tertiary/40 border border-white/5 hover:border-white/10 focus:border-accent-blue/50 focus:outline-none px-4 py-3 rounded-xl text-white text-sm transition-all resize-none"
                  placeholder={language === 'ar' ? 'تفاصيل استفسارك...' : 'Describe what you need...'}
                />
              </div>

              {/* Submit Button */}
              <CtaButton
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full mt-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                ) : (
                  <>
                    <span>{t('contactSend')}</span>
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
