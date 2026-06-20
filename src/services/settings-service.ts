import { fetchDbSettings } from '../integrations/supabase/queries';
import { SiteSettings } from '../types/company';
import { mockSettings } from '../data/company';

const USE_SUPABASE = import.meta.env.VITE_USE_SUPABASE === 'true';

export async function getSiteSettings(): Promise<SiteSettings> {
  if (USE_SUPABASE) {
    try {
      const data = await fetchDbSettings();
      if (data) {
        return {
          company_name: data.company_name,
          slogan_ar: data.slogan_ar,
          slogan_en: data.slogan_en,
          whatsapp_url: data.whatsapp_url,
          linktree_url: data.linktree_url,
          email: data.email,
          address_ar: data.address_ar,
          address_en: data.address_en,
          social_links: data.social_links || {},
          hero_title_ar: data.hero_title_ar,
          hero_title_en: data.hero_title_en,
          hero_subtitle_ar: data.hero_subtitle_ar,
          hero_subtitle_en: data.hero_subtitle_en,
        };
      }
    } catch (e) {
      console.warn('Supabase fetch failed, falling back to mockSettings:', e);
    }
  }
  
  return mockSettings;
}
export default { getSiteSettings };
