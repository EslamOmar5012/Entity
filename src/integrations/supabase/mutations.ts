import { supabase } from './client';
import { Insert, Update } from './types';

export async function updateDbSettings(id: string, settings: Update<'site_settings'>) {
  if (!supabase) return null;
  const { data, error } = await (supabase as any)
    .from('site_settings')
    .update(settings)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function createDbProject(project: Insert<'projects'>) {
  if (!supabase) return null;
  const { data, error } = await (supabase as any)
    .from('projects')
    .insert(project)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateDbProject(id: string, project: Update<'projects'>) {
  if (!supabase) return null;
  const { data, error } = await (supabase as any)
    .from('projects')
    .update(project)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteDbProject(id: string) {
  if (!supabase) return null;
  const { error } = await (supabase as any)
    .from('projects')
    .delete()
    .eq('id', id);

  if (error) throw error;
  return true;
}
