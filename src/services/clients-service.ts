import { fetchDbClients } from '../integrations/supabase/queries';
import { Client } from '../types/client';
import { mockClients } from '../data/clients';

const USE_SUPABASE = import.meta.env.VITE_USE_SUPABASE === 'true';

export async function getClients(): Promise<Client[]> {
  if (USE_SUPABASE) {
    try {
      const dbClients = await fetchDbClients();
      if (dbClients && dbClients.length > 0) {
        return dbClients.map(item => ({
          id: item.id,
          name: item.name,
          category: item.category,
          logo_url: item.logo_url,
          description_ar: item.description_ar,
          description_en: item.description_en,
          sort_order: item.sort_order
        }));
      }
    } catch (e) {
      console.warn('Supabase clients fetch failed, falling back to mockClients:', e);
    }
  }

  return mockClients;
}
export default { getClients };
