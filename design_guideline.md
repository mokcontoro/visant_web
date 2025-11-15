# Visant.AI Web Design Guidelines

These guidelines describe how to extend and maintain the look and feel of the current Visant.AI marketing site. Use them as the single source of truth for new sections, landing pages, and marketing assets.

---

## 1. Brand Principles

- **Approachable intelligence:** Position Visant.AI as the simplest way to get AI-powered detection. Visuals must feel friendly, confident, and never intimidating.
- **Hands-on clarity:** Prioritize simple storytelling (e.g., “Mount → Connect → Describe”) so prospects immediately understand the workflow.
- **Trustworthy warmth:** Combine modern tech cues with soft colors, rounded shapes, and generous white space to convey safety and reliability.

---

## 2. Color System

| Token | Hex | Usage |
| --- | --- | --- |
| `--accent` | `#0B918A` | Primary CTA background, key icons, links |
| `--accent-light` | `#B3E8E5` | Hover/active state highlights |
| `--text-dark` | `#2A2A2A` | Body copy, headings |
| `--text-muted` | `#6B6B6B` | Secondary text, captions |
| `--text-light` | `#FFFFFF` | Text on colored backgrounds/buttons |
| `--bg-light` | `#FAFAF8` | Page background |
| `--bg-accent` | `#E7F6F5` | Light panels (FAQ/story) |
| `--warm` | `#F2EDE8` | Hero background, soft highlight |
| `--coral` | `#FFBFA8` | Optional accent for highlights or alerts |

**Accent variants:**
- Pricing cards use deeper hues (`#2B4095`, `#1D676A`, `#6A0572`) on their headers and matching CTA buttons. Use similar saturation shifts for any future tier-specific elements.
- Use `--accent-light` for hover states, dividers, or subtle highlights connected to the primary CTA color.
- Reserve `--coral` for attention-grabbing chips, alerts, or data callouts so it stays special.

**Usage rules:**
1. Keep backgrounds light; reserve saturated color blocks for emphasis (hero title, pricing headers, CTA buttons).
2. Maintain a minimum 4.5:1 contrast ratio for all text-on-color pairs.
3. Limit any screen to two saturated colors to preserve calmness.

---

## 3. Typography

- **Font:** Poppins, weights 400 (body), 600 (subheads), 700 (primary headings & button labels).
- **Hierarchy:**
  - H1 hero title ~2.2rem desktop / 1.7rem mobile.
  - H2 section headers ~1.8rem desktop / 1.4rem mobile.
  - Body copy 1rem.
- **Line length:** Target 60–75 characters for paragraphs; center align only when content is short (hero, testimonials).
- **Letter spacing:** Keep default; rely on weight and color for emphasis.

---

## 4. Layout & Spacing

- **Grid:** Use max-width 1000px centered container for main sections. Hero image may extend wider (up to 60% viewport) with auto margins.
- **Sections:** 3rem top/bottom padding on desktop, shrinking to 2rem on small screens.
- **Cards (install steps, use cases, testimonials):** Apply 1–1.5rem interior padding, 1rem border radius, and subtle shadow `0 4px 12px rgba(0,0,0,0.08)`.
- **Flex behavior:**
  - Hero buttons, CTA groups: flex row, wrap, 1rem gap.
  - Pricing grid: `repeat(auto-fit, minmax(260px, 1fr))` for responsive stacking.

---

## 5. Imagery & Illustration

The hero illustration sets the tone for all artwork.

- **Concept:** Friendly AI camera noticing an abnormal event in a light industrial setting.
- **Style:** Flat/vecor hybrid, rounded shapes, medium line weight, subtle grain.
- **Palette:** Camera in teal/gray, environment in warm beige, human figure with natural skin tones and muted clothing.
- **Composition:** 16:9 aspect ratio. Camera typically upper-left, human action mid-right to create diagonal eye flow. Keep negative space for overlaying typewriter text bubble.
- **Secondary images:** Installation steps (1-2-3 icons) and category cards should follow the same illustration system: simplified shapes, soft highlights, and no harsh gradients.

**Export specs:** Provide hero art at 2560×1440 PNG, transparent or warm solid background as needed. Step icons can be 512×512 PNG/SVG with 150px display height.

---

## 6. Components & Patterns

### Buttons
- Base style: pill shape (border-radius 999px), 0.9rem × 2rem padding, inline-flex center alignment, hover scale 1.05.
- CTA variations share typography; only color changes (e.g., primary teal vs. coral secondary). Ensure equal min-height to avoid mismatched rows.

### Hero Module
- Elements order: title, subtitle, hero image with typewriter overlay, button group.
- Typewriter bubble: white box, subtle shadow, `::after` caret animation.

### Install Steps (1-2-3)
- Three cards in a grid, each with centered icon, short heading “Step X: Verb,” and sentence-length body text.
- Icons scale by height (150px) with `object-fit: contain; max-width: 100%` to prevent overflow in landscape mobile.

### Use-Case Grid
- Four equal cards with image, `h3`, and supporting copy. Maintain consistent icon sizes and keep descriptions under two lines to avoid uneven heights.

### Pricing Panels
- Structure: colored head, white body with bullet list, footer containing CTA button.
- Include precise monetary info (plan cost, monthly equivalent, hardware treatment) in bullet list.
- Buttons span full width inside the card (use `box-sizing: border-box` to prevent overflow) and link to the respective payment or contact flows.

### Testimonials & FAQ
- Testimonials: centered italic text in accent background block.
- FAQ: stacked blocks with accent subhead and neutral body copy.

---

## 7. Responsiveness & Accessibility

- Collapse multi-column grids to single column below 600px while preserving card order.
- Reduce hero font sizes and typewriter bubble width on small screens per existing CSS breakpoints.
- Ensure interactive elements have `:hover` and `:focus` states (color change + slight motion).
- Provide descriptive `alt` text for every illustration (e.g., “Visant camera detecting spill near worker”).

---

## 8. Content Guidance

- **Messaging:** Lead with outcome (“Detect what matters 24/7”), follow with reassurance (“No AI expertise required”), then offer proof (use cases/testimonials) and conversion (pricing + CTAs).
- **Microcopy:** Keep CTAs action-oriented (“Click to Detect What Matters,” “Choose 6-Month Plan,” “Talk With Sales”).
- **Lists:** When describing processes or plan inclusions, prefer bulleted lists for quick scanning.

---

## 9. Asset Delivery Checklist

1. Export illustrations and icons at 2× resolution for retina displays.
2. Provide both light and transparent backgrounds for hero art when possible.
3. Deliver SVG/PNG assets named according to use (`hero.png`, `1_installation.png`, etc.).
4. Document any new color tokens or component variations in this file to keep the system consistent.

By adhering to these guidelines, every new section will align with the existing Visant.AI experience while remaining flexible for future iterations.
