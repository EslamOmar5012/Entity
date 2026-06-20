export interface TranslationKeys {
  navHome: string;
  navSolutions: string;
  navWhyUs: string;
  navClients: string;
  navProjects: string;
  navAbout: string;
  navContact: string;
  
  heroBadge: string;
  heroSupportingText: string;
  heroCtaSolutions: string;
  heroCtaContact: string;
  
  solutionsTitle: string;
  solutionsSubtitle: string;
  solutionsCategoryIt: string;
  solutionsCategorySoftware: string;
  viewDetails: string;
  
  whyUsTitle: string;
  whyUsSubtitle: string;
  
  clientsTitle: string;
  clientsSubtitle: string;
  
  projectsTitle: string;
  projectsSubtitle: string;
  projectsFilterAll: string;
  projectsViewProject: string;
  
  aboutTitle: string;
  aboutSubtitle: string;
  aboutWhoWeAre: string;
  aboutOurMission: string;
  aboutOurVision: string;
  
  contactTitle: string;
  contactSubtitle: string;
  contactGetInTouch: string;
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  contactSend: string;
  contactSuccess: string;
  contactInfoAddress: string;
  contactInfoEmail: string;
  contactInfoPhone: string;
  
  footerCopyright: string;
  footerRights: string;
  whatsappFloatTooltip: string;
}

export type Translations = Record<'en' | 'ar', TranslationKeys>;
