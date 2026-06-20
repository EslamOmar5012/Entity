export interface Project {
  id: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  category: string; // e.g. 'cctv', 'networking', 'smarthome', 'software'
  cover_image: string;
  gallery_images?: string[] | null;
  is_featured: boolean;
  sort_order: number;
}
