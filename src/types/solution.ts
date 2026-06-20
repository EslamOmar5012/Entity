export type SolutionCategory = 'it' | 'software';

export interface Solution {
  id: string;
  slug: string;
  category: SolutionCategory;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  icon: string; // Lucide icon identifier
  image_url?: string | null;
  is_active: boolean;
  sort_order: number;
}
