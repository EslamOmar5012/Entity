import React, { useEffect, useState } from 'react';
import { PageShell } from '../components/layout/page-shell';
import { HeroSection } from '../components/sections/hero-section';
import { SolutionsSection } from '../components/sections/solutions-section';
import { WhyUsSection } from '../components/sections/why-us-section';
import { ClientsSection } from '../components/sections/clients-section';
import { ProjectsSection } from '../components/sections/projects-section';
import { AboutSection } from '../components/sections/about-section';
import { ContactSection } from '../components/sections/contact-section';

// Services
import { getSiteSettings } from '../services/settings-service';
import { getSolutions } from '../services/solutions-service';
import { getWhyUsItems, getAboutContent } from '../services/content-service';
import { getClients } from '../services/clients-service';
import { getProjects } from '../services/projects-service';

// Types
import { SiteSettings, WhyUsItem, AboutContent } from '../types/company';
import { Solution } from '../types/solution';
import { Client } from '../types/client';
import { Project } from '../types/project';

export const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  // Data States
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [whyUs, setWhyUs] = useState<WhyUsItem[]>([]);
  const [about, setAbout] = useState<AboutContent | null>(null);
  const [clients, setClients] = useState<Client[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [
          settingsData,
          solutionsData,
          whyUsData,
          aboutData,
          clientsData,
          projectsData
        ] = await Promise.all([
          getSiteSettings(),
          getSolutions(),
          getWhyUsItems(),
          getAboutContent(),
          getClients(),
          getProjects(),
        ]);

        setSettings(settingsData);
        setSolutions(solutionsData);
        setWhyUs(whyUsData);
        setAbout(aboutData);
        setClients(clientsData);
        setProjects(projectsData);
      } catch (err) {
        console.error('Failed to load home page content:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading || !settings || !about) {
    // Futuristic glowing loading screen
    return (
      <div className="min-h-screen bg-background-primary flex flex-col items-center justify-center relative overflow-hidden">
        {/* Neon Halo rings */}
        <div className="absolute w-64 h-64 rounded-full border border-accent-blue/15 animate-ping -z-10" />
        <div className="absolute w-48 h-48 rounded-full border border-dashed border-accent-cyan/20 animate-spin -z-10" style={{ animationDuration: '8s' }} />
        
        <span className="text-3xl font-black tracking-widest text-white text-glow-blue select-none animate-pulse">
          ENTITY
        </span>
        <div className="w-16 h-1 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple rounded-full mt-4 animate-pulse" />
      </div>
    );
  }

  return (
    <PageShell settings={settings}>
      {/* 2) Hero Section */}
      <HeroSection settings={settings} />

      {/* 3) Solutions Section */}
      <SolutionsSection solutions={solutions} />

      {/* 4) Why Us Section */}
      <WhyUsSection items={whyUs} />

      {/* 5) Clients Section */}
      <ClientsSection clients={clients} />

      {/* 6) Projects Section */}
      <ProjectsSection projects={projects} />

      {/* 7) About Section */}
      <AboutSection content={about} />

      {/* 8) Contact Section (includes address/phone from settings) */}
      <ContactSection
        email={settings.email}
        addressEn={settings.address_en}
        addressAr={settings.address_ar}
        phone={settings.whatsapp_url.replace('https://wa.me/', '+')}
      />
    </PageShell>
  );
};
export default Home;
