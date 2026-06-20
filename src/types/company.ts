export interface SiteSettings {
  company_name: string;
  slogan_ar: string;
  slogan_en: string;
  whatsapp_url: string;
  linktree_url: string;
  email: string;
  address_ar: string;
  address_en: string;
  social_links: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  hero_title_ar: string;
  hero_title_en: string;
  hero_subtitle_ar: string;
  hero_subtitle_en: string;
}

export interface WhyUsItem {
  id: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  icon: string; // Lucide icon identifier
  sort_order: number;
}

export interface AboutContent {
  title_ar: string;
  title_en: string;
  body_ar: string;
  body_en: string;
  stats: Array<{
    label_ar: string;
    label_en: string;
    value: string;
  }>;
}
export interface GlobalData {
  settings: SiteSettings;
  whyUs: WhyUsItem[];
  about: AboutContent;
}
