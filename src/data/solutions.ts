import { Solution } from '../types/solution';

export const mockSolutions: Solution[] = [
  // IT Solutions
  {
    id: 'sol-cctv',
    slug: 'surveillance-cameras',
    category: 'it',
    title_en: 'Surveillance Cameras & CCTV',
    title_ar: 'كاميرات المراقبة والأنظمة الأمنية',
    description_en: 'High-definition IP cameras, smart vision AI detection, and secure network video recording systems.',
    description_ar: 'كاميرات مراقبة IP عالية الدقة، مع تقنيات التعرف الذكي بالذكاء الاصطناعي، وأنظمة تسجيل آمنة.',
    icon: 'Camera',
    is_active: true,
    sort_order: 1
  },
  {
    id: 'sol-networking',
    slug: 'networking-solutions',
    category: 'it',
    title_en: 'Networking & Wifi Solutions',
    title_ar: 'حلول الشبكات والواي فاي',
    description_en: 'Enterprise-grade structured cabling, high-speed routing/switching, and seamless whole-premise mesh Wi-Fi.',
    description_ar: 'تركيب وتجهيز الشبكات السلكية واللاسلكية للمؤسسات والفلل، مع توفير تغطية واي فاي ممتدة ومستقرة.',
    icon: 'Network',
    is_active: true,
    sort_order: 2
  },
  {
    id: 'sol-locks',
    slug: 'smart-locks',
    category: 'it',
    title_en: 'Smart Lock Systems',
    title_ar: 'أنظمة الأقفال الذكية',
    description_en: 'Keyless entry via biometrics, PIN, RFID card, or mobile app control, integrated with access logs.',
    description_ar: 'دخول ذكي بدون مفاتيح عبر البصمة، الرمز السري، بطاقات RFID، أو الهاتف الذكي، مع تتبع سجلات الدخول.',
    icon: 'Lock',
    is_active: true,
    sort_order: 3
  },
  {
    id: 'sol-intercom',
    slug: 'intercom-systems',
    category: 'it',
    title_en: 'Smart Intercom Systems',
    title_ar: 'أنظمة الإنتركوم الذكي',
    description_en: 'Video intercom terminals with mobile call forwarding, door control, and integration with home monitors.',
    description_ar: 'أنظمة إنتركوم مرئي متميزة تدعم الاتصال بالهاتف المحمول، والتحكم بالأبواب عن بعد، والربط بالشاشات.',
    icon: 'PhoneCall',
    is_active: true,
    sort_order: 4
  },
  {
    id: 'sol-entertainment',
    slug: 'home-entertainment',
    category: 'it',
    title_en: 'Home Entertainment Solutions',
    title_ar: 'حلول الترفيه المنزلي',
    description_en: 'Custom home theater designs, smart projectors, screens, and localized multimedia servers.',
    description_ar: 'تصميم وتركيب المسارح المنزلية الخاصة، أجهزة العرض الذكية، الشاشات، وخوادم الوسائط المتكاملة.',
    icon: 'Tv',
    is_active: true,
    sort_order: 5
  },
  {
    id: 'sol-audio',
    slug: 'audio-solutions',
    category: 'it',
    title_en: 'Professional Audio Solutions',
    title_ar: 'الأنظمة الصوتية الاحترافية',
    description_en: 'Multi-room background music, distributed ceiling speakers, and smart acoustic calibrations.',
    description_ar: 'أنظمة صوتية موزعة للمنازل والمحلات، تدعم التحكم الفردي للغرف ومصادر تشغيل متعددة.',
    icon: 'Volume2',
    is_active: true,
    sort_order: 6
  },
  
  // Software Solutions
  {
    id: 'sol-ai',
    slug: 'ai-automation',
    category: 'software',
    title_en: 'AI & Workflow Automation',
    title_ar: 'الذكاء الاصطناعي والأتمتة',
    description_en: 'Automate repetitive tasks with custom LLM integrations, robotic process pipelines, and smart alerts.',
    description_ar: 'أتمتة المهام المتكررة عبر دمج النماذج الذكية المخصصة، وتدفقات العمل التلقائية، والتنبيهات الذكية.',
    icon: 'Cpu',
    is_active: true,
    sort_order: 7
  },
  {
    id: 'sol-webdev',
    slug: 'website-development',
    category: 'software',
    title_en: 'Premium Web Development',
    title_ar: 'تطوير المواقع الفاخرة',
    description_en: 'Fast, secure, interactive single page websites and ecommerce platforms with custom CMS configurations.',
    description_ar: 'تصميم وبرمجة مواقع وتطبيقات ويب سريعة، تفاعلية وآمنة، مع لوحات تحكم مرنة وسهلة الاستخدام.',
    icon: 'Globe',
    is_active: true,
    sort_order: 8
  },
  {
    id: 'sol-management',
    slug: 'management-systems',
    category: 'software',
    title_en: 'Custom Management Systems',
    title_ar: 'أنظمة الإدارة المخصصة',
    description_en: 'Bespoke ERP, CRM, inventory trackers, and operational dashboards tailored to unique business flows.',
    description_ar: 'أنظمة إدارة داخلية مخصصة، تتبع المخزون، علاقات العملاء، ولوحات تحكم تفصيلية لدورة العمل.',
    icon: 'Database',
    is_active: true,
    sort_order: 9
  },
  {
    id: 'sol-custom-software',
    slug: 'custom-software',
    category: 'software',
    title_en: 'Custom Software Engineering',
    title_ar: 'تطوير البرمجيات الخاصة',
    description_en: 'Solving niche challenges with high-performance desktop tools, APIs, and microservices.',
    description_ar: 'حل المشكلات التقنية الفريدة بمختلف لغات البرمجة وبناء الواجهات الخلفية وقواعد البيانات المتقدمة.',
    icon: 'Code',
    is_active: true,
    sort_order: 10
  },
  {
    id: 'sol-scripts',
    slug: 'smart-scripts-integrations',
    category: 'software',
    title_en: 'Smart Scripts & Integrations',
    title_ar: 'السكربتات الذكية والربط البرمجي',
    description_en: 'Connect disparate systems, API bindings, data migration scripts, and cron-job triggers.',
    description_ar: 'ربط الأنظمة البرمجية المختلفة ببعضها، دمج واجهات البرمجة APIs، وسكربتات معالجة البيانات وجدولتها.',
    icon: 'Terminal',
    is_active: true,
    sort_order: 11
  }
];
