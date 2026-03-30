# Design System Document

## 1. Overview & Creative North Star
**Creative North Star: The Digital Architect**

This design system is engineered for the elite Frontend Developer—one who builds not just interfaces, but digital ecosystems. It moves away from the "template-heavy" look of typical portfolios by embracing an editorial, high-tech aesthetic. We achieve this through **Intentional Asymmetry** and **Tonal Depth**.

The core philosophy is "Precision over Clutter." By utilizing a deep, atmospheric palette and high-contrast typography, we create an environment that feels like a sophisticated IDE or a high-end command center. We lean into the developer's identity by using tech-forward blue and purple gradients that reference modern tooling (React, Next.js) while maintaining the polish of a premium agency.

---

## 2. Colors
Our color palette is rooted in the deep space of `surface` (`#0f072e`) and energized by a vibrant `primary` (`#ba9eff`).

* **Primary & Secondary Roles:** Use `primary` for main actions and branding. Use `secondary` (`#53ddfc`) for interactive highlights and tech-specific badges to create a visual link to tools like React.
* **The "No-Line" Rule:** Explicitly prohibit 1px solid borders for sectioning. Structural boundaries must be defined solely by background color shifts (e.g., a `surface-container-low` section sitting on a `surface` background).
* **Surface Hierarchy & Nesting:** Treat the UI as a series of physical layers.
* **Level 0:** `surface` (The foundation)
* **Level 1:** `surface-container-low` (Secondary content areas)
* **Level 2:** `surface-container` (Cards and interactive modules)
* **Level 3:** `surface-bright` (Active overlays or high-priority floating elements)
* **The "Glass & Gradient" Rule:** Floating elements must utilize Glassmorphism. Use semi-transparent `surface-variant` colors with a `backdrop-blur` (12px-20px) to ensure the UI feels integrated and high-tech.
* **Signature Textures:** Apply a subtle linear gradient from `primary` to `primary-dim` on main CTAs to provide a "lit from within" look that flat colors cannot mimic.

---

## 3. Typography
We use a dual-font strategy to balance technical precision with characterful authority.

* **Display & Headlines (Space Grotesk):** This font carries the "innovator" vibe. Its geometric, slightly wide proportions command attention. Use `display-lg` for hero statements to create an editorial, high-impact entry point.
* **Body & Labels (Inter):** The workhorse of modern development. `inter` is used for all functional text, ensuring maximum readability across multi-language (LTR/RTL) contexts.
* **Tonal Scale:**
* **Headlines:** Bold and authoritative.
* **Body:** Neutral and breathable.
* **Labels:** All-caps with increased letter-spacing (`0.05em`) for a "metadata" or "code-comment" aesthetic.

---

## 4. Elevation & Depth
In this system, elevation is conveyed through light and tone, not structural lines.

* **The Layering Principle:** Depth is achieved by stacking surface-container tiers. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift.
* **Ambient Shadows:** When a float effect is required (e.g., a modal or hovering card), use a diffused shadow: `shadow-color: primary_dim` at 6% opacity, with a 32px blur. This mimics the soft glow of a monitor in a dark room.
* **The "Ghost Border" Fallback:** If a boundary is required for accessibility, use the `outline-variant` token at **15% opacity**. Never use 100% opaque, high-contrast borders.
* **Glassmorphism:** Use `surface-variant` with 40% opacity and a `backdrop-filter: blur(16px)`. This is the signature look for navigation bars and floating skill badges.

---

## 5. Components

### Buttons
* **Primary:** `primary` background with `on_primary` text. Roundedness: `md` (`0.375rem`).
* **Secondary (Tech Ghost):** `outline` border at 20% opacity with `primary` text. Use for "View Code" or secondary links.
* **Tertiary:** No background, `primary` text, with a subtle underline transition on hover.

### Project Cards
* **Style:** No borders. Background: `surface-container`.
* **Interaction:** On hover, shift background to `surface-container-high` and apply a subtle `primary` outer glow (4px blur).
* **Spacing:** Use `spacing-6` (1.5rem) internal padding.

### Skill Badges (Chips)
* **Design:** `surface-variant` background with `on_surface_variant` text.
* **Tech-Specific:** For core skills (React, Next.js, AI), use a `secondary_container` background with `secondary` text to make them pop.

### Input Fields
* **Structure:** `surface-container-low` background.
* **States:** On focus, transition the background to `surface-container` and add a `primary` "Ghost Border" at 30% opacity.
* **RTL Support:** Ensure labels and error messages (`error`) flip alignment for Arabic scripts while maintaining the same padding scales.

---

## 6. Do's and Don'ts

### Do:
* **DO** use whitespace as a separator. Use `spacing-16` or `spacing-20` between major sections to let the high-tech aesthetic "breathe."
* **DO** use subtle gradients for large-scale typography (e.g., `primary` to `secondary` on hero headlines).
* **DO** ensure RTL layouts mirror perfectly, keeping the "Digital Architect" hierarchy intact for Arabic users.

### Don't:
* **DON'T** use 1px solid white or grey borders. They break the immersive, dark-mode atmosphere.
* **DON'T** use standard "drop shadows" (black/grey). Always tint shadows with the `primary` or `surface` tones.
* **DON'T** crowd the layout. If a section feels cramped, increase the `spacing` scale step rather than adding dividers.
* **DON'T** use sharp corners. Stick strictly to the Roundedness Scale (`md` for most components, `full` for badges) to maintain a modern, approachable feel.
