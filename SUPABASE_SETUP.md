# Supabase Setup Guide — ENTITY Website

This guide walks you through setting up Supabase as the live data backend for the ENTITY website.
When `VITE_USE_SUPABASE=false`, the site uses built-in static data automatically — no Supabase needed.

---

## Table of Contents
1. [Create a Supabase Project](#1-create-a-supabase-project)
2. [Get Your API Keys](#2-get-your-api-keys)
3. [Configure .env](#3-configure-env)
4. [Create Tables (SQL)](#4-create-tables-sql)
5. [Enable Row Level Security](#5-enable-row-level-security)
6. [Set Up Storage Bucket](#6-set-up-storage-bucket)
7. [Insert Sample Data](#7-insert-sample-data)
8. [How the Toggle Works](#8-how-the-toggle-works)
9. [Data Shape Reference](#9-data-shape-reference)

---

## 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign in.
2. Click **New Project**.
3. Choose a **Name** (e.g. `entity-website`), **Password**, and **Region** (closest to your users).
4. Wait ~2 minutes for the project to be ready.

---

## 2. Get Your API Keys

Go to your project → **Settings** → **API Keys** (or **Settings → API** on older dashboards).

You will see two key formats:

| Key Name | Variable | Format | Use |
|---|---|---|---|
| **Publishable key** *(new 2025)* | `VITE_SUPABASE_PUBLISHABLE_KEY` | `sb_publishable_...` | Frontend — safe to expose, respects RLS |
| **anon / public** *(legacy)* | `VITE_SUPABASE_ANON_KEY` | `eyJ...` (JWT) | Frontend — same permissions, older format |

> **Use whichever one your dashboard shows.** Both formats are supported by the app.
> Never use the `Secret` / `service_role` key on the frontend.

Also copy your **Project URL** (e.g. `https://xxxxxxxxxxxx.supabase.co`).

---

## 3. Configure .env

Copy `.env.example` → `.env` and fill in your values:

```env
VITE_USE_SUPABASE=true

VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co

# New format (2025 dashboard)
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...

# OR legacy format (older dashboard)
# VITE_SUPABASE_ANON_KEY=eyJ...
```

Restart the dev server after editing `.env`.

---

## 4. Create Tables (SQL)

Go to your Supabase project → **SQL Editor** → **New Query**, then run the following SQL blocks one by one.

### 4.1 — `site_settings` (global website settings)

```sql
CREATE TABLE public.site_settings (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name    text NOT NULL DEFAULT 'ENTITY',
  slogan_ar       text NOT NULL DEFAULT '',
  slogan_en       text NOT NULL DEFAULT '',
  whatsapp_url    text NOT NULL DEFAULT '',
  linktree_url    text NOT NULL DEFAULT '',
  email           text NOT NULL DEFAULT '',
  address_ar      text NOT NULL DEFAULT '',
  address_en      text NOT NULL DEFAULT '',
  social_links    jsonb NOT NULL DEFAULT '{}',
  hero_title_ar   text NOT NULL DEFAULT '',
  hero_title_en   text NOT NULL DEFAULT '',
  hero_subtitle_ar text NOT NULL DEFAULT '',
  hero_subtitle_en text NOT NULL DEFAULT '',
  updated_at      timestamptz NOT NULL DEFAULT now()
);
```

> This table should contain **exactly one row** — the global settings for the entire website.

---

### 4.2 — `solutions` (services / IT / software offerings)

```sql
CREATE TABLE public.solutions (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug           text NOT NULL UNIQUE,
  category       text NOT NULL CHECK (category IN ('it', 'software')),
  title_ar       text NOT NULL,
  title_en       text NOT NULL,
  description_ar text NOT NULL,
  description_en text NOT NULL,
  icon           text NOT NULL DEFAULT 'Shield',  -- Lucide icon name
  image_url      text,
  is_active      boolean NOT NULL DEFAULT true,
  sort_order     int NOT NULL DEFAULT 0,
  created_at     timestamptz NOT NULL DEFAULT now()
);
```

---

### 4.3 — `projects` (project portfolio / case studies)

```sql
CREATE TABLE public.projects (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar       text NOT NULL,
  title_en       text NOT NULL,
  description_ar text NOT NULL,
  description_en text NOT NULL,
  category       text NOT NULL,         -- e.g. 'cctv', 'networking', 'smarthome', 'software'
  cover_image    text NOT NULL,         -- URL (Supabase Storage or external)
  gallery_images text[],               -- array of image URLs
  is_featured    boolean NOT NULL DEFAULT false,
  sort_order     int NOT NULL DEFAULT 0,
  created_at     timestamptz NOT NULL DEFAULT now()
);
```

---

### 4.4 — `clients` (company logos / client showcase)

```sql
CREATE TABLE public.clients (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name           text NOT NULL,
  category       text NOT NULL DEFAULT 'Corporate',  -- e.g. 'Residential', 'Retail', 'Corporate'
  logo_url       text NOT NULL,
  description_ar text,
  description_en text,
  sort_order     int NOT NULL DEFAULT 0,
  created_at     timestamptz NOT NULL DEFAULT now()
);
```

---

### 4.5 — `why_us_items` (Why Choose Us section cards)

```sql
CREATE TABLE public.why_us_items (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar       text NOT NULL,
  title_en       text NOT NULL,
  description_ar text NOT NULL,
  description_en text NOT NULL,
  icon           text NOT NULL DEFAULT 'Star',  -- Lucide icon name
  sort_order     int NOT NULL DEFAULT 0,
  created_at     timestamptz NOT NULL DEFAULT now()
);
```

---

### 4.6 — `about_content` (About section copy and stats)

```sql
CREATE TABLE public.about_content (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar   text NOT NULL,
  title_en   text NOT NULL,
  body_ar    text NOT NULL,
  body_en    text NOT NULL,
  stats_json jsonb NOT NULL DEFAULT '[]',
  -- stats_json shape: [{ "label_ar": "...", "label_en": "...", "value": "..." }, ...]
  updated_at timestamptz NOT NULL DEFAULT now()
);
```

> This table should contain **exactly one row** — the single About page content block.

---

## 5. Enable Row Level Security

RLS prevents public users from writing to your tables while still allowing reads.
Run this in the SQL Editor:

```sql
-- Enable RLS on all tables
ALTER TABLE public.site_settings  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.solutions       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clients         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.why_us_items    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.about_content   ENABLE ROW LEVEL SECURITY;

-- Allow anyone to READ (SELECT) all rows — website is public
CREATE POLICY "Public read site_settings"  ON public.site_settings  FOR SELECT USING (true);
CREATE POLICY "Public read solutions"      ON public.solutions       FOR SELECT USING (true);
CREATE POLICY "Public read projects"       ON public.projects        FOR SELECT USING (true);
CREATE POLICY "Public read clients"        ON public.clients         FOR SELECT USING (true);
CREATE POLICY "Public read why_us_items"   ON public.why_us_items    FOR SELECT USING (true);
CREATE POLICY "Public read about_content"  ON public.about_content   FOR SELECT USING (true);
```

> **Write operations** (INSERT / UPDATE / DELETE) require authentication or the secret key,
> which you should only do from a secure admin panel or Supabase Studio.

---

## 6. Set Up Storage Bucket

Project images and client logos should be stored in Supabase Storage.

1. Go to **Storage** → **New Bucket**
2. Name: `entity-media`
3. ✅ Make it **Public** (so images are accessible without a token)
4. Click **Create**

### Allow public access to files:

```sql
-- Allow anyone to view files in entity-media
CREATE POLICY "Public read entity-media"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'entity-media');
```

### Upload images:

- Go to **Storage** → `entity-media`
- Create folders: `projects/`, `clients/`, `solutions/`
- Upload your images there
- Copy the public URL and use it in your table rows

**Public URL format:**
```
https://<your-project-ref>.supabase.co/storage/v1/object/public/entity-media/<path/to/file.jpg>
```

---

## 7. Insert Sample Data

Run this in the SQL Editor to seed initial content:

```sql
-- site_settings (one row)
INSERT INTO public.site_settings (
  company_name, slogan_ar, slogan_en,
  whatsapp_url, linktree_url, email,
  address_ar, address_en,
  social_links,
  hero_title_ar, hero_title_en,
  hero_subtitle_ar, hero_subtitle_en
) VALUES (
  'ENTITY',
  'نبني المستقبل الرقمي',
  'We Build the Digital Future',
  'https://wa.me/201234567890',
  'https://linktr.ee/entity',
  'info@entity.com',
  'القاهرة، مصر',
  'Cairo, Egypt',
  '{"facebook": "https://facebook.com/entity", "instagram": "https://instagram.com/entity"}',
  'نبني المستقبل الرقمي',
  'We Build the Digital Future',
  'شركة متخصصة في تقنية المعلومات والأمن والشبكات والأتمتة',
  'Specialized in IT, Security, Networking & Automation'
);

-- about_content (one row)
INSERT INTO public.about_content (
  title_ar, title_en,
  body_ar, body_en,
  stats_json
) VALUES (
  'من نحن',
  'About Us',
  'شركة ENTITY هي شركة رائدة في مجال تكنولوجيا المعلومات والأمن والشبكات.',
  'ENTITY is a leading company in IT, security, networking, and smart automation.',
  '[
    {"label_ar": "مشروع منجز", "label_en": "Projects Done", "value": "200+"},
    {"label_ar": "عميل راضٍ", "label_en": "Happy Clients", "value": "150+"},
    {"label_ar": "سنوات خبرة", "label_en": "Years Experience", "value": "10+"}
  ]'
);

-- why_us_items
INSERT INTO public.why_us_items (title_ar, title_en, description_ar, description_en, icon, sort_order) VALUES
  ('خبرة عالية', 'Expert Team', 'فريق محترف بخبرة 10+ سنوات', 'Professional team with 10+ years experience', 'Award', 1),
  ('دعم على مدار الساعة', '24/7 Support', 'نحن هنا دائماً لمساعدتك', 'We are always here to help you', 'Headphones', 2),
  ('تقنيات حديثة', 'Modern Tech', 'نستخدم أحدث التقنيات', 'We use the latest technologies', 'Cpu', 3),
  ('أسعار تنافسية', 'Competitive Pricing', 'جودة عالية بأسعار مناسبة', 'High quality at competitive prices', 'BadgeDollarSign', 4);

-- solutions
INSERT INTO public.solutions (slug, category, title_ar, title_en, description_ar, description_en, icon, is_active, sort_order) VALUES
  ('cctv', 'it', 'كاميرات المراقبة', 'CCTV Systems', 'أنظمة مراقبة متكاملة', 'Complete CCTV surveillance systems', 'Camera', true, 1),
  ('networking', 'it', 'الشبكات', 'Networking', 'بنية تحتية شبكية متكاملة', 'Full network infrastructure setup', 'Network', true, 2),
  ('smart-home', 'it', 'المنزل الذكي', 'Smart Home', 'حلول الأتمتة المنزلية', 'Home automation solutions', 'Home', true, 3),
  ('software', 'software', 'تطوير البرمجيات', 'Software Development', 'تطبيقات ومواقع مخصصة', 'Custom apps and websites', 'Code', true, 4);
```

---

## 8. How the Toggle Works

The app uses a simple **feature flag** pattern:

```
VITE_USE_SUPABASE=true   →  Fetches live from Supabase. Falls back to static on error.
VITE_USE_SUPABASE=false  →  Uses built-in static mock data. No network calls made.
```

**Code flow per service:**

```
Service (e.g. getSolutions)
  │
  ├─ VITE_USE_SUPABASE === 'true'?
  │     YES → Query Supabase table
  │              ├─ Success + has data → return mapped DB rows
  │              └─ Error / empty    → fall through to static data
  │
  └─ NO (or fallback) → return mockSolutions from /src/data/solutions.ts
```

### Static data files (used when Supabase is off):

| Service | Static data file |
|---|---|
| `getSiteSettings()` | `src/data/company.ts` → `mockSettings` |
| `getSolutions()` | `src/data/solutions.ts` → `mockSolutions` |
| `getProjects()` | `src/data/projects.ts` → `mockProjects` |
| `getClients()` | `src/data/clients.ts` → `mockClients` |
| `getWhyUsItems()` | `src/data/why-us.ts` → `mockWhyUs` |
| `getAboutContent()` | `src/data/company.ts` → `mockAbout` |

---

## 9. Data Shape Reference

### `site_settings` row
```ts
{
  id: string;
  company_name: string;
  slogan_ar: string;       // Arabic tagline
  slogan_en: string;       // English tagline
  whatsapp_url: string;    // Full WhatsApp link (https://wa.me/...)
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
  updated_at: string;      // ISO timestamp
}
```

### `solutions` row
```ts
{
  id: string;
  slug: string;            // URL-friendly key e.g. "cctv"
  category: 'it' | 'software';
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  icon: string;            // Lucide icon name e.g. "Camera", "Code", "Shield"
  image_url: string | null;
  is_active: boolean;
  sort_order: number;
  created_at: string;
}
```

### `projects` row
```ts
{
  id: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  category: string;        // 'cctv' | 'networking' | 'smarthome' | 'software'
  cover_image: string;     // URL to cover image
  gallery_images: string[] | null;
  is_featured: boolean;
  sort_order: number;
  created_at: string;
}
```

### `clients` row
```ts
{
  id: string;
  name: string;
  category: string;        // 'Residential' | 'Retail' | 'Corporate'
  logo_url: string;        // URL to logo image
  description_ar: string | null;
  description_en: string | null;
  sort_order: number;
  created_at: string;
}
```

### `why_us_items` row
```ts
{
  id: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  icon: string;            // Lucide icon name
  sort_order: number;
  created_at: string;
}
```

### `about_content` row
```ts
{
  id: string;
  title_ar: string;
  title_en: string;
  body_ar: string;
  body_en: string;
  stats_json: Array<{
    label_ar: string;
    label_en: string;
    value: string;         // e.g. "200+", "10+"
  }>;
  updated_at: string;
}
```

---

## Quick Troubleshooting

| Problem | Fix |
|---|---|
| Data not loading from Supabase | Check `VITE_USE_SUPABASE=true` in `.env`, then restart dev server |
| `Invalid API key` error | Make sure you're using the **Publishable** or **anon** key, NOT the Secret key |
| Empty results from table | Check RLS policies — run the `CREATE POLICY` statements in Section 5 |
| Images not showing | Check storage bucket is **Public** and URL is correct |
| Everything falls back to static | Check browser console for error messages from the Supabase queries |

---

*Generated for ENTITY website — `src/integrations/supabase/`*
