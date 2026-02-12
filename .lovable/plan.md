
# TKM Homepage Complete Redesign -- Premium, Spacious, Conversion-Focused

This is a comprehensive homepage restructuring based on the client's master prompt. The goal is to transform the current product-catalog feel into a premium, spacious, emotion-driven brand experience.

---

## New Color Palette

Update the Tailwind config in `index.html` to use the new architectural palette:

| Role | Color | Hex |
|------|-------|-----|
| Primary Background | Warm Off-White | `#F6F4F1` |
| Secondary Background | Soft Stone Gray | `#E8E6E3` |
| Primary Text | Charcoal Black | `#1E1E1E` |
| Accent (Buttons/CTAs) | Deep Obsidian Blue | `#1C2D3A` |
| Hover State | Slate Blue | `#2F4456` |
| Luxury Highlight | Muted Brass | `#B08D57` |

The existing teal (`#008B9B`) will be replaced with the obsidian blue as the primary accent.

---

## New Homepage Section Order

```text
 1. Hero (refined -- single CTA, single H1)
 2. Trust Bar (moved below hero, taller, premium)
 3. Brand Authority (NEW -- 3-column value props)
 4. Shop By Category (improved spacing + hover effects)
 5. Lifestyle Break (NEW -- emotional pause)
 6. Featured Products (limited to 4-6, better cards)
 7. Why Choose TKM (NEW -- 4-column trust section)
 8. Premium Kitchen Faucets (with intro text)
 9. Lifestyle Break #2 (NEW -- performance messaging)
10. Advanced Shower Systems (with intro text)
11. Stainless Steel Sinks (with SEO paragraph)
12. Customer Reviews (social proof, moved up)
13. FAQ (improved with more questions + schema)
14. Final CTA (dark section -- "Upgrade Your Space Today")
```

---

## Section-by-Section Changes

### 1. Hero -- `components/Hero.tsx`
- Single H1: "Premium Sanitaryware & Luxury Kitchen Fittings in Pakistan"
- Subtext: "Modern designs. Durable finishes. Trusted by thousands of homes."
- ONE CTA button: "Shop Collection" (styled with new obsidian blue)
- Remove the secondary "Shop Kitchen" button
- Stronger dark overlay for readability
- Increase vertical padding (desktop: 120px top/bottom, mobile: 80px)

### 2. Trust Bar -- `components/BenefitsBar.tsx`
- Move back to directly below hero in `App.tsx`
- Update to new color palette (obsidian blue background instead of teal)
- Make taller with more padding (py-8)
- Update 4 items: Nationwide Delivery, 5-Year Warranty, Secure Payments, Quality Tested Products
- Increase icon size to 28px
- Add subtle top border line

### 3. Brand Authority Section -- NEW `components/BrandAuthority.tsx`
- H2: "Designed for Modern Pakistani Homes"
- 3 columns with minimal line icons:
  - "Imported Premium Materials" -- high-grade brass and stainless steel
  - "Long-Lasting Finish" -- resistant to rust, corrosion, daily wear
  - "Performance Tested" -- quality-checked before dispatch
- Background: `#F6F4F1`, padding 100px desktop / 60px mobile
- No mention of German/European engineering

### 4. Shop By Category -- `components/ShopByArea.tsx`
- Keep existing SVG icons but increase size by ~15% (from w-16/w-20 to w-20/w-24)
- Add hover lift effect (`hover:-translate-y-2`) and shadow (`hover:shadow-xl`)
- Increase spacing between items (gap-6 to gap-8)
- Section padding: 100px vertical
- Background: `#E8E6E3`

### 5. Lifestyle Break #1 -- NEW `components/LifestyleBreak.tsx`
- Full-width image with overlay
- H2: "Crafted to Elevate Everyday Living"
- Body: "From statement kitchen faucets to modern shower systems -- discover fittings that combine function with refined design."
- CTA: "Explore Best Sellers"
- 120px vertical padding equivalent via image height

### 6. Featured Products -- in `App.tsx`
- Limit to 4 products max
- Increase grid gap to 32px (gap-8)
- Update `ProductCard.tsx`: add "Free Nationwide Delivery" text under price, static star ratings on all cards, better padding
- Section padding: 100px vertical
- Background: `#F6F4F1`

### 7. Why Choose TKM -- NEW `components/WhyChooseTKM.tsx`
- Replaces the old `ScrollFadeIn` component's position
- H2: "Why Customers Choose TKM"
- 4 columns: 5-Year Warranty, Durable Brass Construction, Modern Minimal Designs, Trusted by Thousands
- Background: `#E8E6E3`
- 100px vertical padding

### 8. Premium Kitchen Faucets -- `components/KitchenMixers.tsx`
- Add intro paragraph: "Modern pull-down and single lever designs for contemporary kitchens."
- Limit to 4 products (remove 5th)
- More whitespace around grid
- 100px vertical padding

### 9. Lifestyle Break #2 -- NEW `components/LifestyleBreak2.tsx`
- Full-width banner
- H2: "Built for Daily Performance"
- Text: "Designed to withstand high water pressure and everyday use."
- CTA: "View Shower Systems"

### 10. Advanced Shower Systems -- `components/AdvancedShowers.tsx`
- Add short intro paragraph above the grid
- 100px vertical padding

### 11. Stainless Steel Sinks -- `components/StainlessSteel.tsx`
- Add 150-200 word SEO paragraph before products targeting: kitchen sink in Pakistan, stainless steel sink price, modern kitchen fittings, bathroom fittings
- Limit to 4 products
- 100px vertical padding

### 12. Customer Reviews -- `components/CustomerReviews.tsx`
- Update H2: "Trusted by Homeowners Across Pakistan"
- Neutral background (`#E8E6E3`)
- 100px padding

### 13. FAQ -- `components/FaqSection.tsx`
- Add more questions (total 5-6): Do you offer free delivery? Warranty policy? Rust-resistant? Delivery time? Cash on delivery?
- Add FAQ schema JSON-LD via `SEOHead` or inline script
- 100px padding

### 14. Final CTA -- `components/BottomBanner.tsx`
- H2: "Upgrade Your Space Today"
- Single button: "Shop Now"
- Darker obsidian background
- 120px padding

---

## Global Changes

### `App.tsx` -- Complete homepage layout restructure
- Remove `ScrollFadeIn` from between hero and categories
- Reorder all sections per the new flow above
- Remove all the thin divider elements (replaced by proper spacing and alternating backgrounds)
- Wrap each section with consistent padding and alternating backgrounds
- Ensure only ONE `<h1>` on the page (in Hero), all section titles are `<h2>`

### `index.html` -- Color palette update
- Update Tailwind config colors to the new palette
- Add Playfair Display font import for headlines
- Update body class to use new background color

### `components/Header.tsx` -- Sticky header
- Already sticky (`sticky top-0`), confirm it works smoothly
- Update accent color references from teal to obsidian blue

### `components/ProductCard.tsx` -- CRO improvements
- Add default static 5-star rating when no rating data exists
- Add "Free Nationwide Delivery" line under price
- Better card padding (p-4 to p-5)
- Hover animation on Add to Cart button

### `components/common/SectionTitle.tsx` -- Update styling
- Change from black background pill to clean text-based H2 with the new charcoal color
- Match the architectural premium feel

---

## Files Summary

**Files to create (4):**
- `components/BrandAuthority.tsx`
- `components/LifestyleBreak.tsx`
- `components/LifestyleBreak2.tsx`
- `components/WhyChooseTKM.tsx`

**Files to modify (12):**
- `index.html` -- color palette, fonts
- `App.tsx` -- complete section reorder and spacing
- `components/Hero.tsx` -- single CTA, single H1, stronger overlay
- `components/BenefitsBar.tsx` -- new colors, taller, updated items
- `components/ShopByArea.tsx` -- bigger icons, hover effects
- `components/ProductCard.tsx` -- CRO additions
- `components/KitchenMixers.tsx` -- intro text, limit products
- `components/AdvancedShowers.tsx` -- intro text
- `components/StainlessSteel.tsx` -- SEO paragraph
- `components/CustomerReviews.tsx` -- updated heading, background
- `components/FaqSection.tsx` -- more questions, schema
- `components/BottomBanner.tsx` -- simplified CTA
- `components/common/SectionTitle.tsx` -- updated styling

**Files to remove/deprecate:**
- `components/LifestyleBanner.tsx` -- replaced by LifestyleBreak components
- `components/ScrollFadeIn.tsx` -- replaced by BrandAuthority
- `components/SEOContent.tsx` -- SEO content moved into StainlessSteel section

**Not included in this phase:**
- WhatsApp invoice integration (requires backend setup)
