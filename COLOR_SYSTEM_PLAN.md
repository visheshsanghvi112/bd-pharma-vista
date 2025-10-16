# 🎨 BD Pharma Vista - Color System Specification

## Current Issues
- 74 instances of `bg-white` (inconsistent)
- 131 instances of `text-white` (inconsistent)
- 139 instances of arbitrary gray/blue colors
- Hardcoded hex colors in Footer
- Multiple names for same colors
- Service cards use non-brand colors

## Unified Color Palette

### Primary Brand Colors
```
Primary Navy (Main Brand):   #283593
Primary Light:                #5C6BC0
Primary Dark:                 #1A237E
```

### Background Colors
```
Surface White:                #FFFFFF (for cards, modals)
Background Light:             #F5F5F7 (page backgrounds)
Background Accent:            #E8EAF6 (pharma light blue)
```

### Text Colors
```
Text Primary:                 #1A1F2C (headings, main text)
Text Secondary:               #6B7280 (body text)
Text Muted:                   #9CA3AF (subtle text)
Text White:                   #FFFFFF (on dark backgrounds only)
```

### Status & Accent Colors
```
Success:                      #10B981 (green)
Warning:                      #F59E0B (amber)
Destructive:                  #EF4444 (red)
Info:                         #3B82F6 (blue)
```

## Semantic Token Mapping

### Replace This → With This

#### Backgrounds
- `bg-white` → `bg-card` (for cards, components)
- `bg-white` → `bg-background` (for page backgrounds)
- `bg-gray-50` → `bg-pharma-light`
- `bg-gray-100` → `bg-muted`
- `bg-blue-50` → `bg-pharma-light`

#### Text Colors
- `text-white` (on colored bg) → `text-white` (keep)
- `text-white` (on white bg) → `text-foreground`
- `text-black` → `text-foreground`
- `text-gray-600` → `text-muted-foreground`
- `text-gray-700` → `text-secondary-foreground`
- `text-gray-800` → `text-foreground`
- `text-gray-900` → `text-foreground`

#### Borders
- `border-gray-200` → `border-border`
- `border-gray-300` → `border-border`

#### Brand Colors
- `bg-[#283593]` → `bg-pharma-navy`
- `text-[#283593]` → `text-pharma-navy`
- Use `pharma-navy` instead of mixing `primary` and `pharma-blue`

## Implementation Rules

### 1. Card Components
```tsx
// ❌ Wrong
<div className="bg-white text-black">

// ✅ Correct
<div className="bg-card text-card-foreground">
```

### 2. Page Backgrounds
```tsx
// ❌ Wrong
<section className="bg-white">

// ✅ Correct
<section className="bg-background">
```

### 3. Text on Colored Backgrounds
```tsx
// ❌ Wrong
<div className="bg-pharma-navy text-white">

// ✅ Correct (white is acceptable here)
<div className="bg-pharma-navy text-white">
```

### 4. Body Text
```tsx
// ❌ Wrong
<p className="text-gray-600">

// ✅ Correct
<p className="text-muted-foreground">
```

### 5. Buttons
```tsx
// ❌ Wrong
<Button className="bg-blue-500 text-white">

// ✅ Correct
<Button variant="default"> // uses primary theme color
```

## Service Card Color Scheme

Instead of random colors, use variations of brand colors:

```tsx
// Primary Service
color: "from-pharma-navy to-primary"

// Secondary Services
color: "from-primary-light to-primary"
color: "from-primary to-primary-dark"
color: "from-pharma-light to-primary-light"
```

## Dark Mode Strategy

Since the app is light-mode only (App.tsx forces light mode):
- Remove all dark mode classes and logic
- Clean up dark mode CSS variables (keep structure for future)
- Remove `dark:` prefixes from all components

## Files Requiring Updates

### ✅ COMPLETED - High Priority
1. ✅ `tailwind.config.ts` - Consolidated pharma colors, added status colors, organized gradients
2. ✅ `src/index.css` - Updated CSS variables with better comments and semantic naming
3. ✅ `src/components/layout/Footer.tsx` - Replaced hardcoded hex with gradient-footer
4. ✅ `src/components/home/FeaturedServices.tsx` - Brand-aligned colors (pharma theme)
5. ✅ `src/components/about/StatCard.tsx` - Semantic colors, removed dark mode
6. ✅ `src/components/about/MissionVisionCard.tsx` - Semantic colors, removed dark mode
7. ✅ `src/components/about/DirectorCard.tsx` - Semantic colors, removed dark mode
8. ✅ `src/components/about/AwardsSection.tsx` - Semantic colors, removed dark mode
9. ✅ `src/components/about/CertificationsSection.tsx` - Semantic colors, removed dark mode
10. ✅ `src/components/about/CsrSection.tsx` - Semantic colors, removed dark mode
11. ✅ `src/components/about/DirectorsSection.tsx` - Semantic colors, removed dark mode
12. ✅ `src/components/about/FacilitiesSection.tsx` - Semantic colors, removed dark mode
13. ✅ `src/components/about/GlobalPresenceMap.tsx` - Semantic colors, removed dark mode

### 🔄 IN PROGRESS - Pages Directory
14. `src/pages/Index.tsx` - Multiple white/gray instances
15. `src/pages/About.tsx` - Inconsistent colors
16. `src/pages/Team.tsx` - Inconsistent colors
17. `src/pages/Contact.tsx` - Inconsistent colors
18. `src/pages/Careers.tsx` - Inconsistent colors
19. `src/pages/OurStory.tsx` - Inconsistent colors
20. `src/pages/FAQ.tsx` - Inconsistent colors
21. `src/pages/Privacy.tsx` - Inconsistent colors
22. `src/pages/NotFound.tsx` - Inconsistent colors

### 📋 PENDING - Other Components
23. `src/components/layout/Navbar.tsx` - Check for inconsistencies
24. `src/components/home/FAQ.tsx` - Check for inconsistencies
25. Other UI components as needed

## Progress Summary

### Color Replacements Made:
- ❌ `bg-white dark:bg-card` → ✅ `bg-card`
- ❌ `bg-white dark:bg-background` → ✅ `bg-background`
- ❌ `text-black dark:text-white` → ✅ `text-foreground` or `text-card-foreground`
- ❌ `text-gray-600 dark:text-gray-300` → ✅ `text-muted-foreground`
- ❌ `text-gray-700 dark:text-gray-300` → ✅ `text-muted-foreground`
- ❌ `bg-pharma-light/30 dark:bg-pharma-dark/20` → ✅ `bg-pharma-light/30`
- ❌ `text-primary dark:text-primary-light` → ✅ `text-primary`
- ❌ `from-blue-500 to-cyan-500` → ✅ `from-pharma-navy to-primary`
- ❌ `from-[#1e2870] via-[#283593]` → ✅ `bg-gradient-footer`

### Dark Mode Cleanup:
- Removed all `dark:` prefixes from about components (13 files)
- App.tsx already forces light mode - dark mode CSS left for future use

## Testing Checklist
- [x] Tailwind config has consolidated colors
- [x] CSS variables are well-documented
- [x] Footer uses theme gradients
- [x] Service cards use brand colors
- [x] All about components use semantic tokens
- [ ] All page components use semantic tokens
- [ ] All text uses proper semantic tokens
- [ ] No arbitrary gray/blue colors remain
- [ ] Buttons use theme variants
- [ ] All components look visually consistent

