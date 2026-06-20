export interface Database {
  public: {
    Tables: {
      site_settings: {
        Row: {
          id: string;
          company_name: string;
          slogan_ar: string;
          slogan_en: string;
          whatsapp_url: string;
          linktree_url: string;
          email: string;
          address_ar: string;
          address_en: string;
          social_links: {
            facebook?: string;
            twitter?: string;
            instagram?: string;
            linkedin?: string;
          };
          hero_title_ar: string;
          hero_title_en: string;
          hero_subtitle_ar: string;
          hero_subtitle_en: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['site_settings']['Row'], 'id' | 'updated_at'> & {
          id?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['site_settings']['Row']>;
      };
      solutions: {
        Row: {
          id: string;
          slug: string;
          category: 'it' | 'software';
          title_ar: string;
          title_en: string;
          description_ar: string;
          description_en: string;
          icon: string;
          image_url: string | null;
          is_active: boolean;
          sort_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['solutions']['Row'], 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['solutions']['Row']>;
      };
      projects: {
        Row: {
          id: string;
          title_ar: string;
          title_en: string;
          description_ar: string;
          description_en: string;
          category: string;
          cover_image: string;
          gallery_images: string[] | null;
          is_featured: boolean;
          sort_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['projects']['Row'], 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['projects']['Row']>;
      };
      clients: {
        Row: {
          id: string;
          name: string;
          category: string;
          logo_url: string;
          description_ar: string | null;
          description_en: string | null;
          sort_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['clients']['Row'], 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['clients']['Row']>;
      };
      why_us_items: {
        Row: {
          id: string;
          title_ar: string;
          title_en: string;
          description_ar: string;
          description_en: string;
          icon: string;
          sort_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['why_us_items']['Row'], 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['why_us_items']['Row']>;
      };
      about_content: {
        Row: {
          id: string;
          title_ar: string;
          title_en: string;
          body_ar: string;
          body_en: string;
          stats_json: Array<{
            label_ar: string;
            label_en: string;
            value: string;
          }>;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['about_content']['Row'], 'id' | 'updated_at'> & {
          id?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['about_content']['Row']>;
      };
    };
  };
}
