import { fetchDbSolutions } from '../integrations/supabase/queries';
import { Solution } from '../types/solution';
import { mockSolutions } from '../data/solutions';

const USE_SUPABASE = import.meta.env.VITE_USE_SUPABASE === 'true';

export async function getSolutions(): Promise<Solution[]> {
  if (USE_SUPABASE) {
    try {
      const dbSolutions = await fetchDbSolutions();
      if (dbSolutions && dbSolutions.length > 0) {
        return dbSolutions.map(item => ({
          id: item.id,
          slug: item.slug,
          category: item.category,
          title_ar: item.title_ar,
          title_en: item.title_en,
          description_ar: item.description_ar,
          description_en: item.description_en,
          icon: item.icon,
          image_url: item.image_url,
          is_active: item.is_active,
          sort_order: item.sort_order
        }));
      }
    } catch (e) {
      console.warn('Supabase solutions fetch failed, falling back to mockSolutions:', e);
    }
  }

  return mockSolutions;
}
export default { getSolutions };
