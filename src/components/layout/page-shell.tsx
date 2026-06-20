import React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { AnimatedBg } from '../common/animated-bg';
import { WhatsappFloat } from '../common/whatsapp-float';
import { SiteSettings } from '../../types/company';
import { useLanguage } from '../../hooks/use-language';

interface PageShellProps {
  children: React.ReactNode;
  settings: SiteSettings;
}

export const PageShell: React.FC<PageShellProps> = ({ children, settings }) => {
  const { direction } = useLanguage();

  return (
    <div 
      className="min-h-screen flex flex-col relative bg-background-primary text-text-primary overflow-x-hidden" 
      dir={direction}
    >
      {/* Canvas Particle Background */}
      <AnimatedBg />

      {/* Header Sticky Navigation */}
      <Navbar linktreeUrl={settings.linktree_url} />

      {/* Main Content Area */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Floating Action Elements */}
      <WhatsappFloat phone={settings.whatsapp_url.replace('https://wa.me/', '')} />

      {/* Footer Branding Area */}
      <Footer
        email={settings.email}
        addressEn={settings.address_en}
        addressAr={settings.address_ar}
        phone={settings.whatsapp_url.replace('https://wa.me/', '+')} // dynamic fallback formatting
        socials={settings.social_links}
      />
    </div>
  );
};
export default PageShell;
