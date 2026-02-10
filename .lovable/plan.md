

# Revised Plan: Visual Balance and Section Separation (Kludi-Inspired)

## What the client wants
The homepage sections feel stacked on top of each other. Looking at the Kludi reference, they use generous whitespace, subtle dividers, and alternating backgrounds to create clear visual rhythm. We already have the "Why Choose TKM" section (ScrollFadeIn) and the benefits/stats bar (BenefitsBar) -- so no new components needed for those. The focus is purely on **spacing, visual breaks, and avoiding content overlap**.

---

## Current Homepage Flow
1. Hero
2. BenefitsBar (trust icons)
3. ScrollFadeIn (brand story -- "Pakistan's Fastest Growing...")
4. Shop By Category (6 cards)
5. Featured Products (4 cards)
6. Premium Kitchen Faucets (banner + 5 products)
7. Advanced Shower Systems (2 images)
8. Stainless Steel Sinks (banner + 4 products)
9. Social Reels
10. Customer Reviews
11. FAQ
12. Bottom Banner

**Problem:** Sections 4 through 8 all run together with minimal spacing -- category cards, then product cards, then kitchen banner, then shower images, then sink banner. It feels like one continuous wall of content.

---

## Changes

### 1. Add generous vertical spacing and alternating backgrounds

Wrap each major section in alternating `bg-white` and `bg-stone-50` backgrounds with increased padding (`py-16 md:py-24`), following Kludi's approach. This creates natural visual separation without adding unnecessary new content.

**Sections and their backgrounds:**
- Hero -- full bleed (no change)
- BenefitsBar -- teal (no change)
- ScrollFadeIn -- white (already has this)
- Shop By Category -- `bg-stone-50`, `py-16 md:py-24`
- Featured Products -- `bg-white`, `py-16 md:py-24`
- Kitchen Faucets -- `bg-stone-50`, `py-16 md:py-24`
- Showers -- `bg-white`, `py-16 md:py-24`
- Sinks -- `bg-stone-50`, `py-16 md:py-24`
- Social Reels onwards -- continue alternating

### 2. Add a subtle horizontal divider between Categories and Featured Products

Insert a thin decorative line divider (like Kludi uses between their brand story and "Top Collections") to visually separate the category grid from the product grid below. This is a simple `<hr>` styled element with max-width and centered, rather than a whole new component.

### 3. Add a lifestyle/inspiration banner between Featured Products and Kitchen Faucets

Create one new component -- `LifestyleBanner.tsx` -- a full-width image with overlaid text (e.g., "Designed for Modern Pakistani Homes") that acts as a visual pause before the Kitchen section begins. This breaks the product-grid-after-product-grid pattern.

### 4. Vector illustrations for categories

Replace the current product photos in `ShopByArea.tsx` with inline SVG line-art icons for each of the 6 categories. Minimalist style with teal accent color, matching the Kludi "Top Collections" feel.

### 5. WhatsApp invoice on order (separate phase)

This requires backend setup (Supabase/Cloud + WhatsApp Business API). We will handle this as a separate implementation after the visual changes are complete.

---

## Technical Details

### Files to modify:
- **`App.tsx`** -- Wrap each homepage section in alternating background containers with generous padding; add divider element; insert LifestyleBanner
- **`components/ShopByArea.tsx`** -- Replace `<img>` tags with inline SVG vector illustrations for each category
- **`components/KitchenMixers.tsx`** -- Remove internal `mb-16`, let parent handle spacing
- **`components/AdvancedShowers.tsx`** -- Remove internal `mb-16`, let parent handle spacing
- **`components/StainlessSteel.tsx`** -- Remove internal `mb-16`, let parent handle spacing

### Files to create:
- **`components/LifestyleBanner.tsx`** -- Full-width image banner with text overlay, placed between Featured Products and Kitchen Faucets

### No changes needed:
- `BenefitsBar.tsx` -- Already serves as the stats/trust bar
- `ScrollFadeIn.tsx` -- Already serves as the "Why Choose TKM" brand story section

