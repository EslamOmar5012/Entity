import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useLanguage } from "../../hooks/use-language";
import { NAV_LINKS } from "../../lib/constants";

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
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const address = language === "ar" ? addressAr : addressEn;

  return (
    <footer className="z-10 relative bg-[#09142c] text-white pt-16 pb-8 border-t border-slate-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12 text-left rtl:text-right">
          
          {/* Brand Info Column */}
          <div className="flex flex-col gap-4">
            <span className="font-extrabold text-white text-2xl tracking-wider select-none font-serif">
              ENTITY
            </span>
            <p className="max-w-xs text-slate-400 text-sm leading-relaxed pr-2 font-sans">
              {t("heroSupportingText")}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {socials.facebook && (
                <a
                  href={socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex justify-center items-center bg-slate-900 border border-slate-800 rounded-lg w-9 h-9 text-slate-400 hover:text-white transition-colors"
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
                  className="flex justify-center items-center bg-slate-900 border border-slate-800 rounded-lg w-9 h-9 text-slate-400 hover:text-white transition-colors"
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
                  className="flex justify-center items-center bg-slate-900 border border-slate-800 rounded-lg w-9 h-9 text-slate-400 hover:text-white transition-colors"
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
                  className="flex justify-center items-center bg-slate-900 border border-slate-800 rounded-lg w-9 h-9 text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-base tracking-wide uppercase font-serif">
              {language === "ar" ? "روابط سريعة" : "Navigation"}
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavLinkClick(link.id)}
                  className="py-1 text-slate-400 text-sm text-left rtl:text-right transition-colors hover:text-accent-cyan font-sans"
                >
                  {t(link.labelKey)}
                </button>
              ))}
            </nav>
          </div>

          {/* Business Hours Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-base tracking-wide uppercase font-serif">
              {language === "ar" ? "ساعات العمل" : "Business Hours"}
            </h3>
            <div className="flex flex-col gap-2 text-slate-400 text-sm leading-relaxed font-sans">
              <div className="flex justify-between">
                <span>
                  {language === "ar"
                    ? "السبت - الخميس:"
                    : "Saturday - Thursday:"}
                </span>
                <span className="text-white">9:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>{language === "ar" ? "الجمعة:" : "Friday:"}</span>
                <span className="font-semibold text-accent-cyan">
                  {language === "ar" ? "مغلق" : "Closed"}
                </span>
              </div>
              <p className="mt-2 text-slate-500 text-xs italic">
                {language === "ar"
                  ? "* الدعم الفني الطارئ متاح لعملاء العقود 24/7"
                  : "* Emergency support available 24/7 for SLA contract clients."}
              </p>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-base tracking-wide uppercase font-serif">
              {language === "ar" ? "بيانات الاتصال" : "Global Credentials"}
            </h3>
            <div className="flex flex-col gap-3 text-slate-400 text-sm font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="flex-shrink-0 mt-0.5 w-4 h-4 text-text-cyan" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="flex-shrink-0 w-4 h-4 text-text-cyan" />
                <a
                  href={`tel:${phone}`}
                  className="hover:text-white transition-colors"
                >
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="flex-shrink-0 w-4 h-4 text-text-cyan" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white break-all transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="flex md:flex-row flex-col justify-between items-center gap-4 pt-8 border-t border-slate-800 text-slate-500 text-xs font-sans">
          <p>{t("footerCopyright")}</p>
          <p className="font-semibold tracking-wide text-text-cyan">
            {t("footerRights")}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
