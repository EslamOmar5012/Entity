import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../../hooks/use-language';
import { NAV_LINKS } from '../../lib/constants';

interface FooterProps {
  email: string;
  addressEn: string;
  addressAr: string;
  phone: string;
  socials: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export const Footer: React.FC<FooterProps> = ({
  email,
  addressEn,
  addressAr,
  phone,
  socials,
}) => {
  const { t, language } = useLanguage();

  const handleNavLinkClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const address = language === 'ar' ? addressAr : addressEn;

  return (
    <footer className="relative bg-background-secondary border-t border-border-glow/10 pt-16 pb-8 overflow-hidden z-10">
      {/* Decorative glows in footer background */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent-blue/5 rounded-full blur-[80px] -z-10" />
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-accent-purple/5 rounded-full blur-[70px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info Column */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-black tracking-wider text-white text-glow-blue select-none">
              ENTITY
            </span>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              {t('heroSupportingText')}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {socials.facebook && (
                <a 
                  href={socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-lg bg-background-card hover:bg-accent-blue/15 border border-white/5 hover:border-accent-blue/30 text-text-secondary hover:text-white flex items-center justify-center transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {socials.twitter && (
                <a 
                  href={socials.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-lg bg-background-card hover:bg-accent-blue/15 border border-white/5 hover:border-accent-blue/30 text-text-secondary hover:text-white flex items-center justify-center transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {socials.instagram && (
                <a 
                  href={socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-background-card hover:bg-accent-blue/15 border border-white/5 hover:border-accent-blue/30 text-text-secondary hover:text-white flex items-center justify-center transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {socials.linkedin && (
                <a 
                  href={socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-background-card hover:bg-accent-blue/15 border border-white/5 hover:border-accent-blue/30 text-text-secondary hover:text-white flex items-center justify-center transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-base tracking-wide border-l-2 border-accent-cyan pl-2 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-2">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Navigation'}
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNavLinkClick(link.id)}
                  className="text-sm text-text-secondary hover:text-accent-cyan transition-colors text-left rtl:text-right py-1"
                >
                  {t(link.labelKey)}
                </button>
              ))}
            </nav>
          </div>

          {/* Business Hours Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-base tracking-wide border-l-2 border-accent-cyan pl-2 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-2">
              {language === 'ar' ? 'ساعات العمل' : 'Business Hours'}
            </h3>
            <div className="text-sm text-text-secondary leading-relaxed flex flex-col gap-2">
              <div className="flex justify-between">
                <span>{language === 'ar' ? 'السبت - الخميس:' : 'Saturday - Thursday:'}</span>
                <span className="text-text-primary">9:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>{language === 'ar' ? 'الجمعة:' : 'Friday:'}</span>
                <span className="text-accent-cyan font-semibold">{language === 'ar' ? 'مغلق' : 'Closed'}</span>
              </div>
              <p className="text-xs text-text-secondary italic mt-2">
                {language === 'ar' 
                  ? '* الدعم الفني الطارئ متاح لعملاء العقود 24/7' 
                  : '* Emergency support available 24/7 for SLA contract clients.'}
              </p>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-base tracking-wide border-l-2 border-accent-cyan pl-2 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-2">
              {language === 'ar' ? 'بيانات الاتصال' : 'Contact Credentials'}
            </h3>
            <div className="flex flex-col gap-3 text-sm text-text-secondary">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                <a href={`tel:${phone}`} className="hover:text-white transition-colors">{phone}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors break-all">{email}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <p>{t('footerCopyright')}</p>
          <p className="font-semibold text-accent-blue tracking-wide">{t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
