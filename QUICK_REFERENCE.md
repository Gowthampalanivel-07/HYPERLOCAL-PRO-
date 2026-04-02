# 🖤🎨 Design System Quick Reference

## Color Palette at a Glance

### Base Colors (Backgrounds)
```
█ #0F1115 — Primary BG       (--color-bg-primary)
█ #121417 — Secondary BG     (--color-bg-secondary)
█ #1A1C1F — Surface Layer    (--color-surface)
█ #23262B — Card Layer       (--color-card)
```

### Grey Scale (UI Hierarchy)
```
█ #D1D5DB — Light Grey       (--color-grey-light)
█ #9CA3AF — Medium Grey      (--color-grey-medium)
█ #6B7280 — Soft Grey        (--color-grey-soft)
█ #2A2E34 — Dark Grey        (--color-grey-dark)
```

### Text Colors
```
█ #F3F4F6 — Primary Text     (--color-text-primary)
█ #A1A1AA — Secondary Text   (--color-text-secondary)
█ #6B7280 — Disabled Text    (--color-text-disabled)
```

---

## Glass Effects Quick Copy

### Main Glass (Most Used)
```css
background: rgba(255, 255, 255, 0.06);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border-radius: 20px;
border: 1px solid rgba(255, 255, 255, 0.08);
```

### Elevated Glass
```css
background: rgba(255, 255, 255, 0.08);
backdrop-filter: blur(25px);
-webkit-backdrop-filter: blur(25px);
box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 20px;
```

### Soft Glass
```css
background: rgba(255, 255, 255, 0.04);
backdrop-filter: blur(15px);
-webkit-backdrop-filter: blur(15px);
border: 1px solid rgba(255, 255, 255, 0.05);
border-radius: 20px;
```

---

## CSS Classes (Ready to Use)

| Class | Purpose |
|-------|---------|
| `.glass-main` | Cards, popups, sections |
| `.glass-elevated` | Modals, important components |
| `.glass-soft` | Subtle backgrounds, overlays |
| `.btn-primary` | Primary CTA buttons |
| `.btn-secondary` | Secondary buttons |
| `.card` | Content cards with hover |
| `.bottom-nav` | Bottom navigation bar |
| `.bottom-nav-item` | Nav items |
| `.text-primary` | Primary text styling |
| `.text-secondary` | Secondary text styling |
| `.text-disabled` | Disabled state text |
| `.bg-primary` | Primary background |
| `.bg-secondary` | Secondary background |
| `.bg-surface` | Surface layer |
| `.bg-card` | Card background |

---

## Component Usage Examples

### Simple Card
```jsx
<div className="glass-main p-6 rounded-xl">
  <h3 className="text-primary font-semibold">Title</h3>
  <p className="text-secondary">Content here...</p>
</div>
```

### Button
```jsx
<button className="btn-primary">
  Action Button
</button>
```

### Modal
```jsx
<div className="glass-elevated fixed inset-0 flex items-center justify-center">
  <div className="p-8">
    <h2 className="text-primary">Modal Title</h2>
    <p className="text-secondary">Modal content...</p>
  </div>
</div>
```

### Navigation
```jsx
<nav className="glass-main bottom-0 w-full flex gap-4 p-4">
  <a className="bottom-nav-item active">Home</a>
  <a className="bottom-nav-item">Services</a>
  <a className="bottom-nav-item">About</a>
</nav>
```

---

## Depth Layers (Stacking Order)

```
┌─────────────────────────────┐
│  5. Tooltips (z: 110)       │
│  4. Modals (z: 100)         │ .glass-elevated
│  3. Cards (z: 20)           │ .glass-main
│  2. Surface (z: 10)         │ .bg-surface
│  1. Primary BG (z: 0)       │ .bg-primary
└─────────────────────────────┘
```

---

## Effects
```css
/* Subtle Glow */
box-shadow: 0 0 20px rgba(255, 255, 255, 0.06);

/* Smooth Transitions */
transition: all 0.25s ease;

/* Focus Glow */
box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
```

---

## Fonts

- **Headings:** Sora
- **Body:** Inter

```css
font-family: var(--font-heading);  /* For h1, h2, h3... */
font-family: var(--font-body);     /* For p, span... */
```

---

## ⚡ Pro Tips

✅ Always use CSS variables → `var(--color-text-primary)`  
✅ Keep text solid (no transparency)  
✅ Use `.glass-main` for 90% of your glass components  
✅ Add subtle glow to interactive elements  
✅ Test contrast ratios for accessibility  

❌ Don't hardcode colors  
❌ Don't use transparency on text  
❌ Don't overuse blur effects  
❌ Don't create new accent colors  
❌ Don't forget -webkit- prefixes for Safari  

---

## File Imports

```jsx
// main.jsx
import './index.css'  // Automatically imports design-system.css

// In components
import './index.css'  // No need - already global
```

---

## System Files
- **`design-system.css`** — Core colors & glass effects
- **`index.css`** — Global styles & typography
- **`DESIGN_SYSTEM_GUIDE.md`** — Complete documentation
- **`QUICK_REFERENCE.md`** — This file

---

**Version 1.0** | April 1, 2026
