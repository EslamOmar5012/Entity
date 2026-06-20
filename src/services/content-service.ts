import { fetchDbAboutContent, fetchDbWhyUsItems } from '../integrations/supabase/queries';
import { AboutContent, WhyUsItem } from '../types/company';
import { mockAbout } from '../data/company';
import { mockWhyUs } from '../data/why-us';

const USE_SUPABASE = import.meta.env.VITE_USE_SUPABASE === 'true';

export async function getAboutContent(): Promise<AboutContent> {
  if (USE_SUPABASE) {
    try {
      const data = await fetchDbAboutContent();
      if (data) {
        return {
          title_ar: data.title_ar,
          title_en: data.title_en,
          body_ar: data.body_ar,
          body_en: data.body_en,
          stats: (data.stats_json as any[]).map((item: any) => ({
            label_ar: item.label_ar,
            label_en: item.label_en,
            value: item.value
          }))
        };
      }
    } catch (e) {
      console.warn('Supabase fetch failed for about_content, falling back to mockAbout:', e);
    }
  }

  return mockAbout;
}

export async function getWhyUsItems(): Promise<WhyUsItem[]> {
  if (USE_SUPABASE) {
    try {
      const data = await fetchDbWhyUsItems();
      if (data && data.length > 0) {
        return data.map(item => ({
          id: item.id,
          title_ar: item.title_ar,
          title_en: item.title_en,
          description_ar: item.description_ar,
          description_en: item.description_en,
          icon: item.icon,
          sort_order: item.sort_order
        }));
      }
    } catch (e) {
      console.warn('Supabase fetch failed for why_us_items, falling back to mockWhyUs:', e);
    }
  }

  return mockWhyUs;
}
