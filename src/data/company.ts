import { SiteSettings, AboutContent } from '../types/company';
import { DEFAULT_CONTACT_INFO } from '../lib/constants';

export const mockSettings: SiteSettings = {
  company_name: 'ENTITY',
  slogan_en: 'When Intelligence Meets Connectivity',
  slogan_ar: 'عندما يلتقي الذكاء بالاتصال',
  whatsapp_url: DEFAULT_CONTACT_INFO.whatsappUrl,
  linktree_url: DEFAULT_CONTACT_INFO.linktreeUrl,
  email: DEFAULT_CONTACT_INFO.email,
  address_en: DEFAULT_CONTACT_INFO.addressEn,
  address_ar: DEFAULT_CONTACT_INFO.addressAr,
  social_links: DEFAULT_CONTACT_INFO.socials,
  hero_title_en: 'ENTITY Smart Solutions',
  hero_title_ar: 'ENTITY للحلول الذكية والبرمجة',
  hero_subtitle_en: 'Futuristic systems engineering and enterprise connectivity solutions.',
  hero_subtitle_ar: 'هندسة الأنظمة المستقبلية وحلول الاتصال للمؤسسات والمنازل الذكية.'
};

export const mockAbout: AboutContent = {
  title_en: 'We Design Tomorrow\'s Connections',
  title_ar: 'نصمم قنوات اتصال الغد',
  body_en: 'ENTITY began with a simple vision: to bridge the gap between high-end hardware integration and advanced software intelligence. Today, we deliver turn-key projects involving intelligent surveillance, mesh networking infrastructure, seamless access controls, and bespoke digital software applications. We build security, connection, and comfort with elite architectural care.',
  body_ar: 'بدأت ENTITY برؤية بسيطة: سد الفجوة بين تكامل الأجهزة الفاخرة وذكاء البرمجيات المتقدم. اليوم، نقدم مشاريع متكاملة تشمل المراقبة الذكية، البنية التحتية لشبكات الاتصال، التحكم السلس في الدخول، وتطبيقات البرمجيات المخصصة. نبني الأمان، والاتصال، والراحة بعناية هندسية فائقة ومتميزة.',
  stats: [
    { label_en: 'Projects Completed', label_ar: 'مشروع منجز', value: '150+' },
    { label_en: 'Active Support', label_ar: 'دعم فني مستمر', value: '24/7' },
    { label_en: 'Happy Clients', label_ar: 'عميل سعيد', value: '98%' },
    { label_en: 'Smart Solutions Delivered', label_ar: 'حل ذكي مقدم', value: '20+' }
  ]
};
