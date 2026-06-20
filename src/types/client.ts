export interface Client {
  id: string;
  name: string;
  category: string; // e.g. 'Residential', 'Retail', 'Corporate'
  logo_url: string;
  description_ar?: string | null;
  description_en?: string | null;
  sort_order: number;
}
