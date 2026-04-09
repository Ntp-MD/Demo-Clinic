# DESIGN.md — Demo Clinic

> Holistic Wellness & Aesthetic Care. Soft sage and dusty rose warmth, clinical elegance with spa-like serenity.

---

## 1. Visual Theme & Atmosphere

Demo Clinic is a **wellness and aesthetic medical practice**. The visual language is soft, inviting, and trustworthy — designed to communicate care, expertise, and tranquility.

- **Mood:** Light, airy, calming — like a high-end spa meets professional clinic
- **Density:** Medium — generous breathing room with comfortable section spacing
- **Philosophy:** Cream and sage canvas with muted rose accents. Organic shapes, soft shadows, gentle transitions. Whitespace heals.
- **Personality:** Warm, professional, nurturing. Not clinical-cold, not overly playful — balanced sophistication.
- **Background motif:** Soft gradient orbs (blur 80px) in sage and rose, subtle organic flow. Hidden on mobile for performance.

---

## 2. Color Palette & Roles

### Base (Light Theme)

| Token | Hex | Role |
|---|---|---|
| `--main-color-1` | `#f9f7f8` | Page background, primary surface |
| `--main-color-2` | `#ede8ec` | Elevated surfaces, stats bar, secondary bg |
| `--main-color-3` | `#ddd4da` | Borders, dividers, subtle separators |
| `--main-color-4` | `#af8f9d` | Muted borders, form input borders |

### Font Colors

| Token | Hex | Role |
|---|---|---|
| `--font-color-white` | `#ffffff` | Text on dark/colored backgrounds |
| `--font-color1` | `#3a3537` | Primary headings, body text |
| `--font-color2` | `#6b5e65` | Secondary text, descriptions |
| `--font-color3` | `#a08f98` | Placeholder text, subtle captions |

### Accent Colors

| Token | Hex | Role |
|---|---|---|
| `--accent-base` | `#94a684` | Sage green — soft backgrounds, icon fills |
| `--accent-primary` | `#7a8f6c` | Primary sage — buttons, links, highlights |
| `--accent-secondary` | `#af8f9d` | Dusty rose — decorative accents, dividers |
| `--accent-success` | `#6aaa78` | Success states, rating stars, checkmarks |
| `--accent-warning` | `#c9954a` | Warning states, gold accents |
| `--accent-error` | `#c05a5a` | Error states, rare use |

### Gradient Patterns

- **Hero background:** `linear-gradient(140deg, --main-color-1 0%, --main-color-2 60%, --main-color-1 100%)`
- **Background orbs:** Circular blurred shapes in `--accent-secondary` (rose) and `--accent-base` (sage)
- **Card hover:** Subtle shadow lift with border color transition to `--accent-primary`

---

## 3. Typography Rules

**Font Family:** 
- **Display:** `Playfair Display`, Georgia, serif — elegant, editorial feel
- **Body:** `Inter`, system-ui, sans-serif — clean, modern readability

### Scale (all fluid via `clamp`)

| Token | Value | Usage |
|---|---|---|
| `--font-xs` | `clamp(12px, 0.5vw, 14px)` | Labels, tags, badges, small captions |
| `--font-sm` | `clamp(14px, 1.5vw, 16px)` | Body text, navigation, card descriptions |
| `--font-md` | `clamp(16px, 2vw, 18px)` | Hero description, section body |
| `--font-lg` | `clamp(18px, 2.5vw, 20px)` | Card titles, large body text |
| `--font-xl` | `clamp(20px, 3vw, 24px)` | Medium headings, clinic name |
| `--font-2xl` | `clamp(28px, 4vw, 40px)` | Section titles (H2), stat numbers |
| `--font-3xl` | `clamp(36px, 5.5vw, 58px)` | Large section headings |
| `--font-4xl` | `clamp(44px, 7.5vw, 80px)` | Hero H1 |

### Typography Rules

- **H1 (`hero__title`):** Playfair Display, weight 700, line-height 1.1, `--font-color1`
- **H1 Accent (`hero__title-accent`):** `--accent-primary`, italic, weight 600
- **H2 (`section-title`):** Playfair Display, weight 600, line-height 1.18, `--font-color1`
- **Body (`hero__desc`):** `--font-md`, line-height 1.8, `--font-color2`
- **Section label:** `--font-xs`, uppercase, letter-spacing 3px, `--accent-primary`, with horizontal line accent
- **Card titles:** Playfair Display, `--font-lg`, weight 600

---

## 4. Component Stylings

### Buttons

| Variant | Class | Style |
|---|---|---|
| Primary | `.btn--primary` | `--accent-primary` bg, white text, pill shape |
| Outline | `.btn--outline` | Transparent bg, `--font-color1` border and text |
| Ghost | `.btn--ghost` | Transparent bg, `--accent-primary` border and text |

- **Base:** `padding: 14px var(--spacing-xl)`, `border-radius: --radius-pill`, `font-weight: 500`
- **Hover transitions:** Background fills, color inverts smoothly
- **Min-height:** 44px for touch targets

### Cards

- **Base `.card`:** White bg, `--radius-lg` border-radius, `--shadow-sm` shadow
- **Hover:** `translateY(-4px)`, `--shadow-lg`, border color shifts to `--accent-primary`
- **Service cards:** White bg, `--main-color-3` border, icon + tag + checklist layout

### Section Labels

- `.section-label`: Inline flex with 24px horizontal line before text
- Uppercase, letter-spacing 3px, `--accent-primary` color
- Line: 2px height, 24px width, same color as text

### Dividers

- `.divider`: 48px width, 2px height, `--accent-secondary` bg
- `.divider--center`: Auto margins for centered alignment

### Form Elements

- **Inputs:** `--main-color-1` bg, `--main-color-4` border, `--radius-sm`
- **Focus:** `--accent-primary` border, soft glow shadow `0 0 0 3px rgba(122, 143, 108, 0.14)`
- **Select:** Custom chevron icon, right-aligned

### Navigation

- **Desktop:** Transparent header → solid `--main-color-1` on scroll
- **Logo:** Leaf icon in `--accent-primary` square, "Demo" + "Clinic" text stack
- **Nav links:** Underline scale animation on hover (left to right)
- **Mobile:** Hamburger → slide-in drawer from left, full-height

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|---|---|
| `--spacing-xs` | `5px` |
| `--spacing-sm` | `10px` |
| `--spacing-md` | `20px` |
| `--spacing-lg` | `30px` |
| `--spacing-xl` | `50px` |
| `--spacing-2xl` | `80px` |
| `--spacing-section` | `clamp(60px, 8vw, 130px)` |

### Grid

- **Hero:** 2-column grid `1fr 1fr` at ≥1024px, stacked below
- **Services:** 3-column grid at desktop, 2 at tablet, 1 at mobile
- **Stats bar:** 4-column grid, 2 at mobile
- **Container:** Max-width 1260px, centered, `--spacing-lg` horizontal padding

### Whitespace Philosophy

- Sections separated by `--spacing-section` (60–130px fluid)
- Generous breathing room — wellness aesthetic demands calm
- Section headers always centered with label > title > subtitle hierarchy

---

## 6. Depth & Elevation

| Level | Usage | Shadow |
|---|---|---|
| `--shadow-xs` | Subtle resting | `0 1px 2px rgba(58, 53, 55, 0.05)` |
| `--shadow-sm` | Cards resting | `0 2px 8px rgba(58, 53, 55, 0.08)` |
| `--shadow-md` | Elevated cards, mobile nav | `0 4px 20px rgba(58, 53, 55, 0.1)` |
| `--shadow-lg` | Hover states, floating badges | `0 10px 40px rgba(58, 53, 55, 0.13)` |
| `--shadow-xl` | Hero visual card | `0 20px 60px rgba(58, 53, 55, 0.16)` |

### Hero Visual Card

- White card with macOS-style window dots (green, pink, yellow)
- Centered icon in circular `--main-color-2` background
- Floating badges positioned absolute (rating, years of care)
- Pills at bottom for service categories

---

## 7. Do's and Don'ts

### Do

- Use the cream/sage palette to create a calming atmosphere
- Apply Playfair Display for all headings to maintain elegance
- Keep plenty of whitespace — let the design breathe
- Use rounded shapes extensively (`--radius-pill`, `--radius-lg`)
- Maintain 44px minimum touch targets on all interactive elements
- Use soft shadows to create gentle depth, never harsh

### Don't

- Don't use harsh, saturated colors — keep everything muted and soft
- Don't use sharp corners — round everything (cards, buttons, inputs)
- Don't crowd elements — wellness design needs room to breathe
- Don't use dark backgrounds except for specific contrast needs
- Don't use more than 2 font families
- Don't skip the section label pattern — it's part of the brand rhythm

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| `≥1024px` | Full desktop: 2-col hero, 3-col services, 4-col stats |
| `≤1024px` | Hero stacks to single column, services go 2-col |
| `≤900px` | Mobile navigation (hamburger), logo remains |
| `≤768px` | Container padding reduces to `--spacing-md` |
| `≤640px` | Services single column, stats 2-col, hero badges stack |

- **Touch targets:** Minimum 44×44px on all buttons and nav links
- **Hero orbs:** Hidden below 768px for performance
- **Floating badges:** Reposition to static flow on small screens

---

## 9. Agent Prompt Guide

### Quick Color Reference

```
Cream bg:        #f9f7f8  (--main-color-1)
Soft rose bg:    #ede8ec  (--main-color-2)
Sage primary:    #7a8f6c  (--accent-primary)
Dusty rose:      #af8f9d  (--accent-secondary)
Body text:       #3a3537  (--font-color1)
Secondary text:  #6b5e65  (--font-color2)
White:           #ffffff  (--font-color-white)
```

### Ready-to-Use Prompts

- **Landing page:** "Build a wellness clinic landing page using DESIGN.md. Soft sage and dusty rose palette, cream backgrounds, Playfair Display headings, floating hero card with service pills, 3-column service grid with icons."
- **Services section:** "Create a 6-card services grid using DESIGN.md. White cards with hover lift, icon + tag + checklist layout, sage green accents, 'Get Started' arrow links."
- **Hero section:** "Design a hero section using DESIGN.md. 2-column layout with gradient orbs, Playfair Display H1 with italic accent word, trust indicators with checkmarks, floating visual card with macOS dots and rating badge."
- **Stats bar:** "Build a stats bar using DESIGN.md. `--main-color-2` background, 4-column grid, large Playfair numbers in sage green, uppercase labels."
- **Booking form:** "Create a booking form using DESIGN.md. Cream inputs with sage focus states, 2-column layout, pill-shaped submit button, soft shadows."
- **Section header:** "Make a reusable section header using DESIGN.md. Horizontal line + uppercase label, Playfair Display H2, centered divider, subtitle with max-width constraint."
