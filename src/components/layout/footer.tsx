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
      const offset = 80;
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
    <footer className="z-10 relative bg-background-secondary pt-16 pb-8 border-border-glow/10 border-t overflow-hidden">
      {/* Decorative glows in footer background */}
      <div className="right-0 bottom-0 -z-10 absolute blur-[80px] rounded-full w-[300px] h-[300px] bg-accent-blue/5" />
      <div className="top-0 left-0 -z-10 absolute blur-[70px] rounded-full w-[200px] h-[200px] bg-accent-purple/5" />

      <div className="mx-auto px-6 container">
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand Info Column */}
          <div className="flex flex-col gap-4">
            <span className="font-black text-glow-blue text-text-heading text-2xl tracking-wider select-none">
              ENTITY
            </span>
            <p className="max-w-xs text-text-secondary text-sm leading-relaxed">
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
                  className="flex justify-center items-center bg-background-card border border-white/5 hover:border-accent-blue/30 rounded-lg w-9 h-9 text-text-secondary hover:text-white transition-all hover:bg-accent-blue/15"
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
                  className="flex justify-center items-center bg-background-card border border-white/5 hover:border-accent-blue/30 rounded-lg w-9 h-9 text-text-secondary hover:text-white transition-all hover:bg-accent-blue/15"
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
                  className="flex justify-center items-center bg-background-card border border-white/5 hover:border-accent-blue/30 rounded-lg w-9 h-9 text-text-secondary hover:text-white transition-all hover:bg-accent-blue/15"
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
                  className="flex justify-center items-center bg-background-card border border-white/5 hover:border-accent-blue/30 rounded-lg w-9 h-9 text-text-secondary hover:text-white transition-all hover:bg-accent-blue/15"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h3 className="rtl:pr-2 pl-2 rtl:pl-0 border-accent-cyan rtl:border-r-2 border-l-2 rtl:border-l-0 font-bold text-text-heading text-base tracking-wide">
              {language === "ar" ? "روابط سريعة" : "Quick Navigation"}
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavLinkClick(link.id)}
                  className="py-1 text-text-secondary text-sm text-left rtl:text-right transition-colors hover:text-accent-cyan"
                >
                  {t(link.labelKey)}
                </button>
              ))}
            </nav>
          </div>

          {/* Business Hours Column */}
          <div className="flex flex-col gap-4">
            <h3 className="rtl:pr-2 pl-2 rtl:pl-0 border-accent-cyan rtl:border-r-2 border-l-2 rtl:border-l-0 font-bold text-text-heading text-base tracking-wide">
              {language === "ar" ? "ساعات العمل" : "Business Hours"}
            </h3>
            <div className="flex flex-col gap-2 text-text-secondary text-sm leading-relaxed">
              <div className="flex justify-between">
                <span>
                  {language === "ar"
                    ? "السبت - الخميس:"
                    : "Saturday - Thursday:"}
                </span>
                <span className="text-text-primary">9:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>{language === "ar" ? "الجمعة:" : "Friday:"}</span>
                <span className="font-semibold text-accent-cyan">
                  {language === "ar" ? "مغلق" : "Closed"}
                </span>
              </div>
              <p className="mt-2 text-text-secondary text-xs italic">
                {language === "ar"
                  ? "* الدعم الفني الطارئ متاح لعملاء العقود 24/7"
                  : "* Emergency support available 24/7 for SLA contract clients."}
              </p>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-4">
            <h3 className="rtl:pr-2 pl-2 rtl:pl-0 border-accent-cyan rtl:border-r-2 border-l-2 rtl:border-l-0 font-bold text-text-heading text-base tracking-wide">
              {language === "ar" ? "بيانات الاتصال" : "Contact Credentials"}
            </h3>
            <div className="flex flex-col gap-3 text-text-secondary text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="flex-shrink-0 mt-0.5 w-5 h-5 text-accent-cyan" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="flex-shrink-0 w-5 h-5 text-accent-cyan" />
                <a
                  href={`tel:${phone}`}
                  className="hover:text-white transition-colors"
                >
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="flex-shrink-0 w-5 h-5 text-accent-cyan" />
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
        <div className="flex md:flex-row flex-col justify-between items-center gap-4 pt-8 border-border-muted/10 border-t text-text-secondary text-xs">
          <p>{t("footerCopyright")}</p>
          <p className="font-semibold tracking-wide text-accent-blue">
            {t("footerRights")}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
