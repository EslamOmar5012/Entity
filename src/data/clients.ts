import { Client } from '../types/client';

export const mockClients: Client[] = [
  {
    id: 'cli-res',
    name: 'Luxury Residential',
    category: 'Residential',
    logo_url: 'Home', // Icon fallback indicator
    description_en: 'Premium villas, smart homes, and compound apartments protected by active security.',
    description_ar: 'القصور، الفلل الفاخرة، الشقق السكنية المجهزة بالكامل بأنظمة تحكم ذكية وحماية متقدمة.',
    sort_order: 1
  },
  {
    id: 'cli-ret',
    name: 'Retail & Showrooms',
    category: 'Retail',
    logo_url: 'ShoppingBag',
    description_en: 'Commercial outlets, supermarkets, and fashion stores using smart visual analytics.',
    description_ar: 'المحلات والمعارض التجارية الكبرى التي تعتمد على الكاميرات التحليلية لحساب الزوار وتأمين المنتجات.',
    sort_order: 2
  },
  {
    id: 'cli-corp',
    name: 'Corporate HQ Offices',
    category: 'Corporate',
    logo_url: 'Building2',
    description_en: 'Multinational office locations needing structured networks and secure access controls.',
    description_ar: 'مقار الشركات والمكاتب الإدارية التي تتطلب شبكات فايبر فائقة السرعة وأنظمة حضور وبوابات أمان.',
    sort_order: 3
  },
  {
    id: 'cli-ware',
    name: 'Industrial Warehouses',
    category: 'Logistics',
    logo_url: 'Warehouse',
    description_en: 'Storage spaces requiring thermal monitoring and perimeter perimeter alarms.',
    description_ar: 'المستودعات والمخازن اللوجستية التي تحتاج إلى مراقبة حرارية وإنذارات لحماية الأسوار الخارجية.',
    sort_order: 4
  },
  {
    id: 'cli-hosp',
    name: 'Hospitality & Lounges',
    category: 'Hospitality',
    logo_url: 'Utensils',
    description_en: 'Hotels, fine dining restaurants, and lounges styled with intelligent sound designs.',
    description_ar: 'الفنادق، المطاعم الراقية، والمقاهي المجهزة بأنظمة صوتية مركوزة وشبكات واي فاي للزوار.',
    sort_order: 5
  },
  {
    id: 'cli-edu',
    name: 'Educational Hubs',
    category: 'Education',
    logo_url: 'GraduationCap',
    description_en: 'Schools and training facilities requiring video intercoms and distributed Wi-Fi access.',
    description_ar: 'المدارس، الكليات، ومراكز التدريب التي تتطلب أنظمة إنتركوم ذكية وتغطية واي فاي ممتدة.',
    sort_order: 6
  }
];
