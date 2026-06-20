import { supabase } from './client';
import { Row } from './types';

export async function fetchDbSettings(): Promise<Row<'site_settings'> | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('site_settings')
    .select('*')
    .single();
  
  if (error) {
    console.error('Error fetching site_settings from Supabase:', error);
    return null;
  }
  return data;
}

export async function fetchDbSolutions(): Promise<Row<'solutions'>[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('solutions')
    .select('*')
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching solutions from Supabase:', error);
    return [];
  }
  return data;
}

export async function fetchDbProjects(): Promise<Row<'projects'>[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching projects from Supabase:', error);
    return [];
  }
  return data;
}

export async function fetchDbClients(): Promise<Row<'clients'>[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching clients from Supabase:', error);
    return [];
  }
  return data;
}

export async function fetchDbWhyUsItems(): Promise<Row<'why_us_items'>[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('why_us_items')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching why_us_items from Supabase:', error);
    return [];
  }
  return data;
}

export async function fetchDbAboutContent(): Promise<Row<'about_content'> | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('about_content')
    .select('*')
    .single();

  if (error) {
    console.error('Error fetching about_content from Supabase:', error);
    return null;
  }
  return data;
}
