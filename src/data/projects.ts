import { Project } from '../types/project';

export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    title_en: 'Villa Smart Automation',
    title_ar: 'أتمتة ذكية متكاملة لفيلا سكنية',
    description_en: 'Complete installation of smart lighting, central audio, IP camera array, and smart locks managed through a single screen.',
    description_ar: 'تركيب نظام إضاءة ذكي متكامل، صوت مركزي، شبكة كاميرات مراقبة وأقفال ذكية تدار كلياً من خلال شاشة واحدة وتطبيق هاتف.',
    category: 'smarthome',
    cover_image: 'https://images.unsplash.com/photo-1558244661-d248897f7bc4?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1558244661-d248897f7bc4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    ],
    is_featured: true,
    sort_order: 1
  },
  {
    id: 'proj-2',
    title_en: 'Corporate Office HQ Network',
    title_ar: 'شبكة المقر الرئيسي لشركة كبرى',
    description_en: 'Deploying structured cabling for 120 workstations, server cabinets, enterprise routing, and high-security access controls.',
    description_ar: 'تأسيس بنية تحتية للشبكات لأكثر من 120 نقطة عمل، خزانة خوادم متكاملة، جدران نارية لحماية البيانات، وأنظمة بصمة دخول.',
    category: 'networking',
    cover_image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    is_featured: true,
    sort_order: 2
  },
  {
    id: 'proj-3',
    title_en: 'Retail Showroom AI CCTV',
    title_ar: 'كاميرات المراقبة الذكية لمعرض تجاري',
    description_en: 'Thermal and smart vision IP cameras mapping heatmaps and customer flows, with secure remote cloud storage.',
    description_ar: 'تأمين معرض بمجموعة كاميرات IP تدعم الذكاء الاصطناعي لرصد الحركة، رسم الخرائط الحرارية للزوار، وربطها بالهاتف.',
    category: 'cctv',
    cover_image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    is_featured: true,
    sort_order: 3
  },
  {
    id: 'proj-4',
    title_en: 'Logistics Center ERP & Dashboard',
    title_ar: 'لوحة تحكم ونظام ERP لشركة لوجستية',
    description_en: 'Custom web portal to manage inventory tracking, driver assignment, automated client billing, and real-time operations map.',
    description_ar: 'برمجة منصة إدارة مخصصة لحركة المستودعات وتعيين الشاحنات، إصدار فواتير آلية للعملاء ولوحة تحكم لمراقبة الشحنات.',
    category: 'software',
    cover_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    is_featured: true,
    sort_order: 4
  },
  {
    id: 'proj-5',
    title_en: 'Lounge Sound & Acoustic Setup',
    title_ar: 'توزيع نظام صوتي لمطعم راقٍ',
    description_en: 'Multi-zone acoustic sound tuning with hidden ceiling speakers and intuitive localized volume dials.',
    description_ar: 'تخطيط وتوزيع نظام صوتي مجزأ لعدة مناطق بمطعم وتأمين تشغيل متزامن مع وحدات تحكم مدمجة لتحديد الصوت.',
    category: 'audio',
    cover_image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
    is_featured: false,
    sort_order: 5
  },
  {
    id: 'proj-6',
    title_en: 'Smart Lock Apartment Complex',
    title_ar: 'أنظمة أقفال ذكية لمجمع سكني',
    description_en: 'Installation of centralized keycard and PIN smart locks for 40 rental units with temporary code generation capability.',
    description_ar: 'تركيب وإعداد أقفال ذكية تعمل بالكارت والرمز السري لعدد 40 شقة سكنية مع إتاحة إنشاء أكواد مؤقتة للزوار عن بعد.',
    category: 'cctv', // smart locks category mapped under it/hardware
    cover_image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    is_featured: false,
    sort_order: 6
  }
];
