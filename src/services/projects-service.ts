import { fetchDbProjects } from '../integrations/supabase/queries';
import { Project } from '../types/project';
import { mockProjects } from '../data/projects';

const USE_SUPABASE = import.meta.env.VITE_USE_SUPABASE === 'true';

export async function getProjects(): Promise<Project[]> {
  if (USE_SUPABASE) {
    try {
      const dbProjects = await fetchDbProjects();
      if (dbProjects && dbProjects.length > 0) {
        return dbProjects.map(item => ({
          id: item.id,
          title_ar: item.title_ar,
          title_en: item.title_en,
          description_ar: item.description_ar,
          description_en: item.description_en,
          category: item.category,
          cover_image: item.cover_image,
          gallery_images: item.gallery_images,
          is_featured: item.is_featured,
          sort_order: item.sort_order
        }));
      }
    } catch (e) {
      console.warn('Supabase projects fetch failed, falling back to mockProjects:', e);
    }
  }

  return mockProjects;
}
export default { getProjects };
