export const SECTION_IDS = {
  home: 'home',
  solutions: 'solutions',
  whyUs: 'why-choose-us',
  clients: 'clients',
  projects: 'projects',
  about: 'about',
  contact: 'contact',
};

export const NAV_LINKS = [
  { id: SECTION_IDS.home, labelKey: 'navHome' },
  { id: SECTION_IDS.solutions, labelKey: 'navSolutions' },
  { id: SECTION_IDS.whyUs, labelKey: 'navWhyUs' },
  { id: SECTION_IDS.clients, labelKey: 'navClients' },
  { id: SECTION_IDS.projects, labelKey: 'navProjects' },
  { id: SECTION_IDS.about, labelKey: 'navAbout' },
  { id: SECTION_IDS.contact, labelKey: 'navContact' },
] as const;

export const DEFAULT_CONTACT_INFO = {
  phone: '+201000000000', // standard corporate placeholder
  email: 'info@entity-solutions.tech',
  addressEn: 'Smart Village, Building B-14, Giza, Egypt',
  addressAr: 'القرية الذكية، مبنى B-14، الجيزة، مصر',
  whatsappUrl: 'https://wa.me/201000000000',
  linktreeUrl: 'https://linktr.ee/entity.solutions',
  socials: {
    facebook: 'https://facebook.com/entity.solutions',
    twitter: 'https://twitter.com/entity_sol',
    instagram: 'https://instagram.com/entity.solutions',
    linkedin: 'https://linkedin.com/company/entity-solutions',
  }
};
