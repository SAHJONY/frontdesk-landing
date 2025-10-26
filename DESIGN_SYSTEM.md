# FrontDesk Agents - Premium Design System

## Visual Identity

### Color Palette

**Primary Colors:**
- Navy Blue: `#0A1628` (backgrounds, headers)
- Deep Blue: `#1E3A5F` (cards, panels)
- Accent Blue: `#3B82F6` (CTAs, highlights)
- Sky Blue: `#60A5FA` (hover states)

**Neutral Colors:**
- White: `#FFFFFF` (text on dark)
- Light Gray: `#F3F4F6` (backgrounds)
- Medium Gray: `#6B7280` (secondary text)
- Dark Gray: `#1F2937` (text on light)

**Semantic Colors:**
- Success: `#10B981` (positive metrics)
- Warning: `#F59E0B` (alerts)
- Error: `#EF4444` (errors)

### Typography

**Font Family:**
- Primary: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Monospace: `'Fira Code', 'Courier New', monospace` (for metrics)

**Font Sizes:**
- Hero: `clamp(2.5rem, 5vw, 4rem)` (40-64px)
- H1: `clamp(2rem, 4vw, 3rem)` (32-48px)
- H2: `clamp(1.5rem, 3vw, 2rem)` (24-32px)
- H3: `1.25rem` (20px)
- Body: `1rem` (16px)
- Small: `0.875rem` (14px)

### Spacing Scale
- xs: `0.25rem` (4px)
- sm: `0.5rem` (8px)
- md: `1rem` (16px)
- lg: `1.5rem` (24px)
- xl: `2rem` (32px)
- 2xl: `3rem` (48px)
- 3xl: `4rem` (64px)

### Effects

**Glassmorphism:**
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

**Shadows:**
- Small: `0 1px 3px rgba(0, 0, 0, 0.12)`
- Medium: `0 4px 6px rgba(0, 0, 0, 0.1)`
- Large: `0 10px 25px rgba(0, 0, 0, 0.15)`
- XL: `0 20px 50px rgba(0, 0, 0, 0.2)`

**Border Radius:**
- Small: `0.375rem` (6px)
- Medium: `0.5rem` (8px)
- Large: `1rem` (16px)
- XL: `1.5rem` (24px)

## Component Patterns

### Hero Section
- Full-width background image with overlay
- Professional receptionist photo (right side)
- Text overlay on left with gradient backdrop
- Large headline + subtitle + CTA button
- Minimum height: 600px

### Feature Cards
- White background with subtle shadow
- Icon or image at top
- Title (H3) + description
- Hover effect: lift + shadow increase
- Padding: 2rem
- Border radius: 1rem

### Pricing Cards
- White background (standard)
- Highlighted card: gradient border + shadow
- Price in large font (3rem)
- Feature list with checkmarks
- CTA button at bottom
- Max width: 380px

### Dashboard Panels
- Dark background (`#0A1628`)
- Glass effect cards
- Metrics with large numbers + trend indicators
- Subtle grid lines
- Monospace font for numbers

## Image Requirements

### Hero Images
- **Receptionist Photo:** Professional woman on phone, smiling, business attire
- **Office Environment:** Modern, clean, professional setting
- **Resolution:** Minimum 1920x1080px
- **Format:** WebP with JPG fallback
- **Optimization:** Compressed to <200KB

### Feature Images
- **Analytics Dashboard:** Dark UI with charts and metrics
- **CRM Integration:** Screenshots of HubSpot/Sheets integration
- **Phone System:** Modern VoIP interface
- **Resolution:** Minimum 800x600px

### Icons
- **Style:** Outline/stroke style, consistent weight
- **Color:** Match accent blue (#3B82F6)
- **Size:** 24x24px or 32x32px
- **Source:** Heroicons or Lucide

## Responsive Breakpoints

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`
- Wide: `> 1440px`

## Animation Guidelines

- **Duration:** 200-300ms for micro-interactions
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out)
- **Hover:** Scale 1.02, shadow increase
- **Focus:** Ring outline with accent color
- **Page transitions:** Fade in 300ms

## Accessibility

- **Contrast Ratio:** Minimum 4.5:1 for text
- **Focus Indicators:** Visible 2px outline
- **Alt Text:** Required for all images
- **Keyboard Navigation:** Full support
- **Screen Readers:** Semantic HTML + ARIA labels

