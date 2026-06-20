import { createClient } from '@supabase/supabase-js';
import type { Database } from '../../types/database';

const useSupabase = import.meta.env.VITE_USE_SUPABASE === 'true';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';

// Supports both the new Publishable Key format (sb_publishable_*) introduced in 2025
// and the legacy Anon JWT key format (VITE_SUPABASE_ANON_KEY) for backward compatibility.
const supabaseKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  '';

// Only create the client if Supabase is explicitly enabled AND credentials are present.
// Falls back to null so all services gracefully use static mock data instead.
export const supabase =
  useSupabase && supabaseUrl && supabaseKey
    ? createClient<Database>(supabaseUrl, supabaseKey)
    : null;

export const isSupabaseConfigured = (): boolean => !!supabase;
