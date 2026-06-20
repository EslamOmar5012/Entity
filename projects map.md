# ENTITY — Full Frontend Website Prompt with Supabase-Ready CMS Architecture

## Project Goal

Build a **premium, futuristic, bilingual single-page company website frontend** for **ENTITY**.

The website should feel like a **high-end smart solutions / IT / security / networking / automation / software company website** and should be designed to be **production-oriented**, not a generic mockup.

The project should be built as a **single-page application (SPA)** and must be architected so that it can later connect cleanly to **Supabase** as a lightweight CMS / backend for managing content, photos, projects, and editable website sections.

---

# Core Requirements

## Tech Stack

Build the frontend using:

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **shadcn/ui**
* **Framer Motion** for animations
* **Lucide React** (or React Icons) for icons
* **Embla Carousel** or **Swiper** for sliders/carousels
* **clsx** / **class-variance-authority** if useful
* architecture ready for **Supabase integration**

---

# Core Brand Context

## Company Name

**ENTITY**

## Main Slogan

**When Intelligence Meets Connectivity**

## Company Nature

ENTITY provides smart and technical solutions including:

* Surveillance Cameras
* Networking Solutions
* Smart Locks
* Intercom Systems
* Home Entertainment Solutions
* Audio Solutions
* AI & Automation
* Website Development
* Management Systems
* Custom Software
* Smart Scripts & Integrations

---

# Website Goal / Direction

I want a website that feels:

* **premium**
* **technical**
* **futuristic**
* **trustworthy**
* **high-end**
* **Arabic-friendly**
* **enterprise-ready**

The final result should **not** feel like a generic SaaS landing page.
It should feel specifically designed for **ENTITY** and inspired by the visual identity of the provided flyers.

---

# Design Inspiration

Use the provided flyer images as the main visual inspiration for the website.

## Extract the visual style from the flyers:

* futuristic dark tech aesthetic
* deep navy / almost black backgrounds
* electric blue and cyan glow accents
* subtle purple / violet highlights for software-related sections
* glowing borders
* glassmorphism where appropriate
* smart security / dashboard / IT solutions vibe
* clean premium layout with modern spacing
* technical and polished feeling
* subtle grid / digital / futuristic background patterns
* use modern glow carefully, without overdoing it

---

# Visual Theme Requirements

## Color Palette

Use a design system inspired by the flyers, approximately like this:

* **Background Primary:** very dark navy / almost black
* **Background Secondary:** deep blue gradient
* **Accent Primary:** electric blue
* **Accent Secondary:** cyan glow
* **Accent Tertiary:** purple / violet for software highlights
* **Text Primary:** off-white / very light gray
* **Text Secondary:** muted cool gray / blue-gray
* **Borders:** translucent glowing blue / purple borders
* **Cards:** dark glass cards with soft glow and hover elevation

## Typography

Use a modern Arabic + English pairing such as:

* Arabic: **Cairo** or **Tajawal**
* English: **Inter** or **Manrope**

Typography should feel clean, modern, technical, and premium.

---

# Language / Localization Requirements

The website must support **Arabic and English**.

## Requirements

* Add a language switcher: **AR / EN**
* Arabic mode must use **RTL**
* English mode must use **LTR**
* All major content should be stored in a clean translation/content structure
* Make the bilingual architecture scalable and easy to edit later

## Suggested approach

Use:

* `src/i18n/translations.ts`
* or a content-driven approach through a structured data layer

If content later comes from Supabase, support bilingual fields such as:

* `title_ar`
* `title_en`
* `description_ar`
* `description_en`

---

# Important Architecture Requirement

Do **not** build the website as a purely static landing page.

The website must be architected so it can later be connected cleanly to **Supabase** as a CMS/content backend for:

* projects
* solutions
* section content
* images
* client data
* WhatsApp / Linktree / social links
* hero and about content

The first version can still use local dummy data, but the code structure must be prepared for dynamic Supabase integration.

---

# General Website Requirements

## Website Type

* Single Page Application (SPA)
* Smooth scrolling between sections
* Sticky navbar
* Responsive from mobile to ultra-wide desktop
* Modern animated but performance-friendly frontend

## Quality Requirements

* Clean reusable architecture
* Scalable folder structure
* Strong TypeScript typing
* Modular components
* Reusable UI sections and cards
* Good accessibility where practical
* Good responsive behavior
* Clear separation between UI, content, and data access logic
* Easy to replace placeholder content later

---

# Advanced File / Folder Structure

Create an advanced scalable structure similar to this (or improve it if needed):

```bash
src/
  assets/
    images/
    icons/
    logos/
    dummy/

  components/
    common/
      section-header.tsx
      glow-card.tsx
      language-switcher.tsx
      social-links.tsx
      whatsapp-float.tsx
      section-container.tsx
      animated-bg.tsx
      stats-counter.tsx
      section-badge.tsx
      cta-button.tsx

    layout/
      navbar.tsx
      footer.tsx
      page-shell.tsx
      mobile-menu.tsx

    sections/
      hero-section.tsx
      solutions-section.tsx
      why-us-section.tsx
      clients-section.tsx
      projects-section.tsx
      about-section.tsx
      contact-section.tsx

  data/
    solutions.ts
    projects.ts
    clients.ts
    company.ts
    why-us.ts

  hooks/
    use-language.ts
    use-scrollspy.ts
    use-direction.ts
    use-section-animation.ts

  i18n/
    translations.ts
    types.ts

  integrations/
    supabase/
      client.ts
      types.ts
      queries.ts
      mutations.ts
      storage.ts

  services/
    content-service.ts
    projects-service.ts
    solutions-service.ts
    clients-service.ts
    settings-service.ts

  types/
    database.ts
    content.ts
    company.ts
    project.ts
    solution.ts
    client.ts

  lib/
    utils.ts
    constants.ts
    motion.ts
    theme.ts

  styles/
    globals.css

  pages/
    home.tsx

  App.tsx
  main.tsx
```

---

# Main Page Sections

Build the page as a **single-page company website** with the following sections.

Use this order unless a slightly improved UX order makes more sense while preserving all sections.

---

# 1) Navbar

Create a **premium sticky navbar** with a subtle blur / glass effect.

## Navbar Content

* Company logo
* Company name: **ENTITY**
* Navigation links that scroll to sections:

  * Home
  * Solutions
  * Why Us
  * Clients
  * Projects
  * About / Info
* Language switcher (AR / EN)
* CTA button: **Linktree**

  * opens the company Linktree in a new tab
  * use placeholder URL for now

## Navbar Behavior

* Sticky on scroll
* Transparent / lighter at top
* Becomes darker / glass / more solid on scroll
* Active section highlighting while scrolling
* Smooth anchor scrolling
* Mobile version with animated drawer / sheet menu
* Should work cleanly in both Arabic and English

---

# 2) Hero / Main Info Section

This is the main landing section and should feel premium, futuristic, and memorable.

## Hero Content

* Company logo (I will upload and replace it later)
* Company name: **ENTITY**
* Main slogan:
  **When Intelligence Meets Connectivity**
* A short supporting line that describes the company
* 2 CTA buttons:

  * **View Solutions**
  * **Contact / WhatsApp**
* Optional small subtitle / badge like:

  * Smart Security
  * Networking
  * Automation
  * Software Solutions

## Hero Visual Direction

* Premium logo presentation
* Smooth futuristic animated background
* Can include subtle:

  * digital grid
  * glow beams
  * abstract tech particles
  * gradient overlays
* Keep it elegant, not noisy

## Hero Animation

* Logo should have a smooth premium animation:

  * subtle floating
  * glow pulse
  * fade / slide reveal
* Headline and slogan should animate in elegantly
* CTA buttons can have subtle motion
* Avoid childish or exaggerated motion

## Hero Layout

* Must look excellent on desktop and mobile
* Arabic and English layouts should both feel natural
* Preserve a strong visual hierarchy

---

# 3) Solutions Section

Create a visually rich **slider / carousel based solutions section**.

## Important Structure

This section must contain **two categories**:

1. **IT / Smart Solutions**
2. **Software Solutions**

Use one of these approaches:

* tabs + one slider
* segmented control + dynamic cards
* two separate sliders
* any clean UX pattern that feels premium and easy to use

---

## A) IT / Smart Solutions

Include these solution cards:

* Surveillance Cameras
* Networking Solutions
* Smart Lock Solution
* Intercom Solution
* Home Entertainment Solutions
* Audio Solutions

---

## B) Software Solutions

Include these solution cards:

* AI & Automation
* Website Development
* Management Systems
* Custom Software
* Smart Scripts & Integration

---

## Solution Card Requirements

Each solution card should include:

* icon or image
* title
* short description
* hover effect
* subtle glow border
* animated reveal on scroll
* premium card styling

## Slider Behavior

* Desktop: show multiple cards
* Tablet: show fewer cards
* Mobile: one card or swipe-first layout
* Smooth arrows / dots
* Touch-friendly swipe support
* Clean performance

---

# 4) Why Us Section

Create a strong **“Why Choose ENTITY”** section.

## Content

Use **professional placeholder / lorem ipsum style content** for now, but structure it as real company content.

## Suggested Card Ideas

Use 4–6 feature cards such as:

* Integrated smart solutions
* Professional technical support
* Security-first mindset
* Scalable systems
* Custom implementation
* Ongoing maintenance and consultation

## Design

* Premium feature cards
* Icon + title + short paragraph
* Animated on scroll
* Strong but clean spacing
* Can include a section intro paragraph

---

# 5) Clients Section

Create a section to present company clients / industries served.

## Content

Use placeholder / lorem ipsum text for now.

## Suggested Structure

* Intro paragraph
* Client industry cards or categories such as:

  * Residential
  * Retail
  * Corporate Offices
  * Warehouses
  * Hospitality
  * Education

Optional:

* placeholder logos
* testimonial style cards
* trust indicators

## Goal

Make this section feel trustworthy, enterprise-oriented, and clean.

---

# 6) Projects Section

Create a **projects showcase slider**.

## Requirements

* Use **dummy placeholder images** for now
* Show projects as cards or a carousel
* Each project should include:

  * image
  * title
  * short description
  * project category
* Add hover overlay with “View Project” style interaction
* Add smooth animated transitions

## Suggested Dummy Project Categories

* CCTV installation
* Office networking deployment
* Smart home setup
* Intercom deployment
* Audio system integration
* Custom software dashboard

---

# 7) About / Company Info Section

Create an **About ENTITY / Our Info** section.

## Content

Use placeholder / lorem ipsum content for now, but structure it like a real company profile.

## Suggested Blocks

* Who we are
* Our mission
* Our vision
* Our service approach

## Optional Stats / Counters

Add stats if they fit the design:

* Projects completed
* Support availability
* Years of experience
* Solutions delivered

---

# 8) Footer / Contact Section

Add a polished footer or bottom contact strip.

## Footer Content

* Company name
* Quick nav links
* WhatsApp
* Linktree
* Placeholder email
* Placeholder address
* Social icons placeholders
* copyright

Make it feel polished and consistent with the futuristic design.

---

# Floating WhatsApp Button

Add a floating **WhatsApp chat icon**.

## Requirements

* fixed position
* opens WhatsApp chat link in a new tab
* nice hover animation
* mobile-safe position
* should not overlap important content
* use placeholder WhatsApp number for now

---

# Responsive Requirements

The website must be **fully responsive** across:

* small mobile screens
* medium phones
* tablets
* laptops
* large desktops
* ultra-wide screens

## Responsive Rules

* No broken layouts
* No horizontal overflow
* Readable text sizes
* Good card scaling
* Sliders behave correctly on touch devices
* Navbar collapses elegantly
* Arabic RTL layout remains visually correct on all breakpoints
* Hero and solution cards should still feel premium on mobile

---

# Animation Requirements

Use **Framer Motion** with tasteful motion only.

## Add animation to:

* Hero logo
* Hero text
* Section reveals
* Cards hover states
* Slider entry transitions
* Navbar background transition on scroll
* possibly counters / decorative elements if subtle

## Important

Avoid excessive motion or performance-heavy effects.

---

# Content & Data Handling

All page content should be driven from structured data files or a service layer when possible.

## Suggested local data files

* `data/solutions.ts`
* `data/projects.ts`
* `data/clients.ts`
* `data/company.ts`
* `data/why-us.ts`

Do **not** hardcode all content directly inside components if avoidable.

---

# Supabase / CMS Integration Requirements

I want the project to be prepared for **Supabase integration** so I can manage website content dynamically later instead of hardcoding everything.

## Goal

The frontend should be structured so I can connect it to **Supabase** and use it as a lightweight CMS / backend to update the website without editing code every time.

---

# What I want to manage from Supabase

## 1) Projects

I want to manage:

* project title
* project description
* project category
* project images
* featured flag
* display order

## 2) Clients

I want to manage:

* client name
* client logo
* client category
* short description
* display order

## 3) Solutions

I want to manage:

* solution title (Arabic + English)
* solution description (Arabic + English)
* solution icon or image
* solution category:

  * IT / Smart Solutions
  * Software Solutions
* display order
* active/inactive toggle

## 4) Website section content

I want important website sections to be configurable from Supabase, such as:

* Hero section text
* Why Us cards
* About / Company info section
* Contact info
* Footer links
* WhatsApp link
* Linktree link
* social media links

## 5) Gallery / Project Photos

I want to upload and manage project photos from **Supabase Storage** and display them in:

* Projects section
* future gallery sections
* other media-based sections later if needed

---

# Supabase Architecture Requirements

Please structure the frontend so it is easy to connect to Supabase cleanly.

## Suggested Supabase-related structure

```bash
src/
  integrations/
    supabase/
      client.ts
      types.ts
      queries.ts
      mutations.ts
      storage.ts

  services/
    content-service.ts
    projects-service.ts
    solutions-service.ts
    clients-service.ts
    settings-service.ts

  types/
    database.ts
    content.ts
```

---

# Data Strategy

The app should support **two modes**:

## 1) Static Fallback Mode

Use local dummy data for development/demo:

* `data/solutions.ts`
* `data/projects.ts`
* `data/clients.ts`
* `data/company.ts`
* `data/why-us.ts`

## 2) Dynamic Supabase Mode

Make the architecture ready so those sections can later fetch from Supabase instead of local files.

Use a clean abstraction such as:

* service layer
* local mock data
* easy switch to Supabase fetches later

For example:

* `projects-service.ts`
* `solutions-service.ts`
* `content-service.ts`
* `settings-service.ts`

Each service should be designed so it can later switch between:

* local static data
* Supabase database content

---

# Supabase Tables / Content Model Suggestion

Prepare the code with TypeScript types/interfaces that would fit a structure like this.

## `site_settings`

Stores global website settings such as:

* company_name
* slogan_ar
* slogan_en
* whatsapp_url
* linktree_url
* email
* address_ar
* address_en
* social_links
* hero_title_ar
* hero_title_en
* hero_subtitle_ar
* hero_subtitle_en

## `solutions`

Stores solution cards:

* id
* slug
* category
* title_ar
* title_en
* description_ar
* description_en
* icon
* image_url
* is_active
* sort_order

## `projects`

Stores project showcase data:

* id
* title_ar
* title_en
* description_ar
* description_en
* category
* cover_image
* gallery_images
* is_featured
* sort_order
* created_at

## `clients`

Stores client data:

* id
* name
* category
* logo_url
* description_ar
* description_en
* sort_order

## `why_us_items`

Stores Why Us cards:

* id
* title_ar
* title_en
* description_ar
* description_en
* icon
* sort_order

## `about_content`

Stores About section content:

* id
* title_ar
* title_en
* body_ar
* body_en
* stats_json

---

# Supabase Storage Requirements

Prepare the project so I can use **Supabase Storage** for:

* project images
* client logos
* solution images
* future gallery/media uploads

The code should be organized so image URLs can later come from Supabase Storage without changing the UI structure.

---

# Admin / CMS Readiness

I do **not necessarily need a full admin dashboard right now**, but I want the frontend architecture to be ready for one later.

So please:

* separate UI from data access logic
* keep reusable TypeScript interfaces for CMS content
* make sections render from structured data
* avoid hardcoded section text directly inside components when possible
* make it easy to add a future `/admin` dashboard if needed

---

# Suggested Implementation Pattern

Use this approach:

* Components should receive content via props or a service layer
* Services should handle data retrieval
* Keep a Supabase client setup file ready
* Keep TypeScript database/content types ready
* Make it easy to add future admin CRUD screens later

---

# Bilingual CMS Support

Since the site is Arabic + English, the CMS/data model must support both languages for editable content, especially:

* hero text
* solution titles and descriptions
* why us cards
* about content
* project text
* contact text if needed

Use bilingual fields such as:

* `title_ar`
* `title_en`
* `description_ar`
* `description_en`

---

# Important CMS Workflow Goal

I want to be able later to:

1. upload project photos from Supabase
2. add/edit projects from Supabase
3. edit solutions from Supabase
4. edit some section text from Supabase
5. update WhatsApp / Linktree / contact info from Supabase

So the generated frontend should be designed with that future workflow in mind, even if the first version still uses dummy local data.

---

# Assets Handling

I will provide the **company logo** later, so prepare the hero and navbar logo area to accept a real uploaded logo easily.

For now:

* use a placeholder logo import path
* keep logo size and spacing polished
* keep it easy to swap later

---

# UX Enhancements to Include

Please add the following enhancements if they improve the final result:

1. Scroll progress or active section indicator
2. Subtle animated futuristic background
3. Glow hover cards
4. Smooth section anchor scrolling
5. Elegant bilingual toggle
6. Section headers with subtitle + accent line
7. Soft glassmorphism panels
8. Consistent container widths and spacing system
9. Accessible button states and focus states
10. Reusable CTA buttons
11. Scroll-to-top button
12. polished loading-friendly image handling

---

# Deliverables

I want the output to include:

## 1) Full frontend code structure

Provide the full React SPA frontend implementation.

## 2) All required components

Include all sections and reusable components.

## 3) Dummy content

Use placeholder text and dummy images where I did not provide real content yet.

## 4) Supabase-ready architecture

Even if the first version still uses dummy data, prepare the codebase structure for Supabase integration.

## 5) Clean comments only where useful

Do not over-comment every line.

## 6) Ready-to-run project

The code should be organized so I can install dependencies and run it directly.

---

# Placeholder Content Rules

Where I have not yet provided exact content:

* use lorem ipsum or professional placeholder text
* keep the structure realistic and business-oriented
* do not leave sections empty

---

# Final Instruction

Build the frontend in a way that looks polished enough to be used as a real company landing page after I replace:

* logo
* WhatsApp number
* Linktree URL
* real project images
* real client info
* real company text

and later connect it to **Supabase** to manage:

* projects
* photos
* solutions
* about content
* contact links
* hero content
* footer content

---

# Task List (Implementation Checklist)

## Planning / Setup

* [ ] Create React + TypeScript + Vite project
* [ ] Install and configure Tailwind CSS
* [ ] Install and configure shadcn/ui
* [ ] Install Framer Motion
* [ ] Install Embla Carousel or Swiper
* [ ] Install Lucide React / icon system
* [ ] Set up clean folder structure
* [ ] Create reusable utility helpers and constants

## Branding / Theme

* [ ] Extract visual inspiration from the provided flyer images
* [ ] Build dark futuristic theme
* [ ] Define color palette tokens
* [ ] Define typography system for Arabic + English
* [ ] Create glow / glass card styles
* [ ] Add reusable button variants and section header styles

## Internationalization

* [ ] Add Arabic and English support
* [ ] Add language switcher component
* [ ] Implement RTL for Arabic
* [ ] Implement LTR for English
* [ ] Store translations / content in structured files or service-driven content

## Layout

* [ ] Build page shell / layout structure
* [ ] Build sticky animated navbar
* [ ] Add mobile navigation drawer
* [ ] Add section anchor navigation
* [ ] Add footer / contact strip

## Hero Section

* [ ] Add animated logo area
* [ ] Add company name and slogan
* [ ] Add supporting intro text
* [ ] Add CTA buttons
* [ ] Add animated futuristic background

## Solutions Section

* [ ] Create IT solutions slider
* [ ] Create software solutions slider or tabbed slider
* [ ] Add icons / images for each solution
* [ ] Add hover states and glow cards
* [ ] Make the section responsive

## Why Us Section

* [ ] Create feature cards
* [ ] Add placeholder content
* [ ] Add icons and scroll animations

## Clients Section

* [ ] Add intro content
* [ ] Add client categories / placeholder client cards
* [ ] Make the section trustworthy and clean

## Projects Section

* [ ] Add project slider
* [ ] Add dummy images
* [ ] Add project title / category / description
* [ ] Add hover overlay interaction

## About / Info Section

* [ ] Add company info layout
* [ ] Add mission / vision / description blocks
* [ ] Add optional stats counters

## Floating Actions / Contact

* [ ] Add floating WhatsApp chat button
* [ ] Add placeholder WhatsApp link
* [ ] Add Linktree button in navbar
* [ ] Add social/contact placeholders in footer

## Supabase Readiness

* [ ] Create Supabase client setup structure
* [ ] Add service layer for content, projects, solutions, clients, and settings
* [ ] Add TypeScript database/content types
* [ ] Prepare storage handling abstraction for project images and logos
* [ ] Keep components data-driven instead of hardcoded
* [ ] Make architecture ready for future admin dashboard / CRUD flow

## Responsive / Polish

* [ ] Test mobile responsiveness
* [ ] Test tablet responsiveness
* [ ] Test desktop responsiveness
* [ ] Test ultra-wide layouts
* [ ] Test Arabic RTL layout thoroughly
* [ ] Test sliders on touch devices
* [ ] Improve spacing and visual balance
* [ ] Add smooth section reveal animations
* [ ] Ensure performance remains good

## Final Output

* [ ] Make content easy to replace later
* [ ] Keep code clean and scalable
* [ ] Ensure the UI looks custom to ENTITY and not like a generic template
* [ ] Deliver a ready-to-run frontend
