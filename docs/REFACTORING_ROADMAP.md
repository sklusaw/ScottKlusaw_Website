# Refactoring Roadmap

## Introduction

This document outlines a comprehensive, phased approach to improving the ScottKlusaw_Website codebase. The roadmap is designed to incrementally modernize the site while maintaining functionality at each step. Each phase builds upon the previous one, ensuring systematic progress from foundational improvements through advanced optimizations.

The phases are organized from most critical (standards and structure) to enhancement-focused (performance and UI refresh). This allows us to establish a solid foundation before tackling more complex refactoring work.

---

## Phase 1: Standards Setup ✅ (Completed Today)

**Goal**: Establish consistent project structure, naming conventions, tooling, and documentation standards.

### Completed Work

- [x] Repository restructure and organization
- [x] Folder renaming to kebab-case convention (`showpics/` → `show-pics/`)
- [x] Asset migration (moved PDFs to proper `assets/` directories)
- [x] Path updates across all HTML files
- [x] CSS variables extraction (`variables.css` with `:root` definitions)
- [x] Landing pages creation (`fun/index.html` and `xmas/index.html`)
- [x] npm tooling setup with automated path testing
- [x] VS Code workspace settings (`.vscode/settings.json`)
- [x] Configuration files:
  - [x] `package.json` with test scripts
  - [x] `commitlint.config.js` for commit message standards
  - [x] `.editorconfig` for consistent code formatting
- [x] Documentation creation:
  - [x] `CODING_STANDARDS.md`
  - [x] `FILE_ORGANIZATION.md`
  - [x] `REFACTORING_ROADMAP.md` (this file)

### Verification Checklist

Before moving to Phase 2, verify all Phase 1 changes are working correctly:

- [ ] Run `npm run test:paths` and ensure all tests pass (no 404 errors)
- [ ] Test all pages load correctly:
  - [ ] Main site: `index.html`
  - [ ] Fun landing: `fun/index.html`
  - [ ] Dating sim: `fun/dating-sim/index.html`
  - [ ] Xmas landing: `xmas/index.html`
  - [ ] Xmas 2022: `xmas/2022/index.html`
  - [ ] Xmas 2023: `xmas/2023/index.html`
  - [ ] Xmas 2025: `xmas/2025/index.html`
- [ ] Verify all assets load without 404 errors:
  - [ ] Images display correctly (check browser DevTools Network tab)
  - [ ] PDFs are accessible and downloadable
  - [ ] CSS files load and styles apply correctly
  - [ ] JavaScript files load and functionality works
- [ ] Verify navigation:
  - [ ] Back buttons work on all subpages
  - [ ] Landing page links navigate correctly
- [ ] Verify CSS variables:
  - [ ] Theme colors are consistent across pages
  - [ ] Variables in `variables.css` are being used
  - [ ] No hardcoded color values remain where variables should be used

---

## Phase 2: Code Extraction (Next Priority)

**Goal**: Separate inline code into external files following best practices for maintainability and caching.

### Tasks

#### JavaScript Extraction

- [ ] Extract inline JavaScript from `index.html`:
  - [ ] Create `assets/js/slideshow.js` for carousel/slideshow functionality
  - [ ] Create `assets/js/youtube-player.js` for YouTube embed handling
  - [ ] Add proper script tags with `defer` attribute
  - [ ] Ensure proper event listener setup (DOMContentLoaded)
  - [ ] Test slideshow navigation (prev/next buttons, auto-advance)
  - [ ] Test YouTube player initialization and controls

#### CSS Extraction

- [ ] Extract inline styles from `fun/dating-sim/index.html`:
  - [ ] Create `fun/dating-sim/assets/css/dating-sim.css`
  - [ ] Move all `<style>` block contents to external file
  - [ ] Link external stylesheet in HTML
  - [ ] Verify styling remains identical after extraction
  - [ ] Test interactive elements (buttons, choices, scenes)

#### Content Updates

- [ ] Update copyright year across all pages:
  - [ ] `index.html`: 2022 → 2025
  - [ ] `fun/index.html`: verify year
  - [ ] `fun/dating-sim/index.html`: verify year
  - [ ] `xmas/index.html`: verify year
  - [ ] All `xmas/*/index.html` pages: verify years

#### HTML Structure Fixes

- [ ] Fix xmas pages HTML structure:
  - [ ] Review `xmas/2022/index.html` for proper semantic HTML
  - [ ] Review `xmas/2023/index.html` for proper semantic HTML
  - [ ] Review `xmas/2025/index.html` for proper semantic HTML
  - [ ] Ensure consistent heading hierarchy (h1 → h2 → h3)
  - [ ] Add missing alt attributes to images
  - [ ] Validate HTML with W3C validator

### Verification Steps

- [ ] Run `npm run test:paths` to ensure no broken links
- [ ] Test all JavaScript functionality in browser
- [ ] Verify styles match original appearance exactly
- [ ] Check browser console for any new errors
- [ ] Test on multiple browsers (Chrome, Firefox, Edge)

---

## Phase 3: Library Updates

**Goal**: Update and consolidate third-party dependencies for better performance and security.

### Tasks

#### jQuery Consolidation

- [ ] Audit jQuery usage across all pages
- [ ] Remove duplicate jQuery files:
  - [ ] Keep single version in `assets/js/`
  - [ ] Update all references to use consolidated version
  - [ ] Remove `jquery-min.js` and keep `jquery-3.2.1.min.js` (or update to latest 3.x)
- [ ] Consider jQuery removal:
  - [ ] Identify all jQuery-dependent code
  - [ ] Evaluate feasibility of vanilla JS conversion
  - [ ] Document decision in `CODING_STANDARDS.md`

#### Bootstrap Update (4 → 5)

- [ ] Review Bootstrap 5 migration guide
- [ ] Update Bootstrap CSS and JS files
- [ ] Update markup for Bootstrap 5 changes:
  - [ ] `data-*` attributes → `data-bs-*`
  - [ ] Grid system classes
  - [ ] Button classes
  - [ ] Form classes
  - [ ] Modal components
- [ ] Test responsive behavior at all breakpoints
- [ ] Update Popper.js if needed (Bootstrap 5 requirement)

#### Font Awesome Update

- [ ] Update to latest Font Awesome 6.x
- [ ] Replace `font-awesome.min.css` with latest version
- [ ] Check for icon name changes (FA5 → FA6)
- [ ] Update icon class names if necessary
- [ ] Consider switching to SVG+JS version for performance

#### Additional Dependencies

- [ ] Review and update other vendor libraries:
  - [ ] Nivo Lightbox (check for updates or alternatives)
  - [ ] WOW.js (verify still needed)
  - [ ] Waypoints (verify still needed)
  - [ ] Other animation libraries
- [ ] Document versions in `package.json` or dependency manifest

### Verification Steps

- [ ] Test all interactive components after updates
- [ ] Verify visual consistency across all pages
- [ ] Check for console errors or warnings
- [ ] Test on mobile devices/responsive views
- [ ] Run Lighthouse audit for any regressions

---

## Phase 4: CSS/JS Refactoring

**Goal**: Implement consistent naming conventions and improve code documentation.

### CSS Refactoring

#### Class Name Standardization

- [ ] Audit all CSS class names in all files
- [ ] Convert to kebab-case convention:
  - [ ] `.videoContainer` → `.video-container`
  - [ ] `.slideShow` → `.slide-show`
  - [ ] `.navBar` → `.nav-bar`
  - [ ] Document other conversions
- [ ] Update HTML files with new class names
- [ ] Update JavaScript selectors
- [ ] Search and replace carefully to avoid breaking changes

#### CSS Organization

- [ ] Review CSS file structure
- [ ] Consider consolidating redundant styles
- [ ] Group related styles together
- [ ] Add section comments for clarity
- [ ] Remove unused CSS rules (use coverage tools)

### JavaScript Refactoring

#### Naming Conventions

- [ ] Convert to camelCase for all JavaScript:
  - [ ] Variable names
  - [ ] Function names
  - [ ] Object properties
- [ ] Avoid single-letter variables (except loop counters)
- [ ] Use descriptive names (e.g., `currentSlideIndex` not `idx`)

#### Documentation

- [ ] Add JSDoc comments to all functions:
  ```javascript
  /**
   * Advances to the next slide in the carousel
   * @param {number} direction - Direction to move (1 for next, -1 for prev)
   * @returns {void}
   */
  ```
- [ ] Document function parameters and return types
- [ ] Add file-level comments explaining module purpose
- [ ] Document complex logic with inline comments

#### Code Quality

- [ ] Use `const` and `let` instead of `var`
- [ ] Use arrow functions where appropriate
- [ ] Use template literals for string concatenation
- [ ] Add error handling (try/catch blocks)
- [ ] Use strict equality (`===` instead of `==`)

### Verification Steps

- [ ] Run all functionality tests
- [ ] Verify no visual regressions
- [ ] Check console for errors
- [ ] Run linters (ESLint, StyleLint)
- [ ] Review changes with fresh eyes

---

## Phase 5: Accessibility

**Goal**: Ensure the site is accessible to all users, including those using assistive technologies.

### ARIA Labels and Semantic HTML

- [ ] Add ARIA labels to interactive elements:
  - [ ] Navigation buttons: `aria-label="Previous slide"`, `aria-label="Next slide"`
  - [ ] Social media links: `aria-label="Visit my LinkedIn profile"`
  - [ ] Video controls: `aria-label="Play video"`
  - [ ] Form inputs: proper `aria-describedby` associations
- [ ] Add ARIA roles where needed:
  - [ ] `role="navigation"` for nav sections
  - [ ] `role="main"` for main content
  - [ ] `role="complementary"` for sidebars
- [ ] Improve semantic HTML:
  - [ ] Use `<nav>` for navigation
  - [ ] Use `<main>` for main content
  - [ ] Use `<article>` and `<section>` appropriately
  - [ ] Use `<button>` instead of `<div>` for clickable elements

### Keyboard Navigation

- [ ] Ensure all interactive elements are keyboard accessible:
  - [ ] Tab order is logical and intuitive
  - [ ] Focus indicators are visible
  - [ ] Enter/Space keys trigger button actions
  - [ ] Escape key closes modals/lightboxes
- [ ] Test slideshow keyboard controls:
  - [ ] Left/Right arrow keys for navigation
  - [ ] Add keyboard event listeners if missing
- [ ] Test form keyboard navigation:
  - [ ] Tab between fields
  - [ ] Submit with Enter key
  - [ ] Accessible validation messages

### Responsive YouTube Embed

- [ ] Make YouTube iframe responsive:
  - [ ] Use aspect-ratio CSS or padding-bottom technique
  - [ ] Ensure video scales properly on mobile
  - [ ] Test fullscreen functionality
- [ ] Add proper title attribute to iframe
- [ ] Consider lazy loading for video embeds

### Color Contrast

- [ ] Audit color contrast ratios:
  - [ ] Use WAVE or aXe browser extensions
  - [ ] Ensure 4.5:1 ratio for normal text (WCAG AA)
  - [ ] Ensure 3:1 ratio for large text and UI components
- [ ] Fix contrast issues using CSS variables:
  - [ ] Adjust `--primary-color`, `--text-color`, etc.
  - [ ] Test in light and dark environments
- [ ] Ensure sufficient contrast for:
  - [ ] Links (especially on colored backgrounds)
  - [ ] Buttons (text and border)
  - [ ] Form inputs and labels
  - [ ] Error messages

### Alt Text and Content

- [ ] Add descriptive alt text to all images:
  - [ ] Portfolio images: describe the project shown
  - [ ] Decorative images: use `alt=""`
  - [ ] Background images: ensure no critical info is conveyed
- [ ] Add `lang` attribute to `<html>` tag: `<html lang="en">`
- [ ] Ensure proper heading hierarchy (no skipped levels)
- [ ] Add skip links for keyboard users: "Skip to main content"

### Verification Steps

- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Test keyboard-only navigation
- [ ] Run automated accessibility tests (Lighthouse, WAVE, aXe)
- [ ] Check color contrast with browser tools
- [ ] Test with browser zoom at 200%
- [ ] Validate HTML to ensure proper structure

---

## Phase 6: Performance Optimization

**Goal**: Improve page load times and overall site performance.

### Image Optimization

- [ ] Convert images to modern formats:
  - [ ] Use WebP for photos with JPEG fallback
  - [ ] Use PNG for graphics requiring transparency
  - [ ] Consider AVIF for even better compression
- [ ] Implement responsive images:
  - [ ] Use `<picture>` element with multiple sources
  - [ ] Add `srcset` and `sizes` attributes
  - [ ] Provide different resolutions (1x, 2x, 3x)
- [ ] Compress existing images:
  - [ ] Use tools like ImageOptim, Squoosh, or Sharp
  - [ ] Target 80-90% quality for JPEGs
  - [ ] Remove metadata/EXIF data
- [ ] Resize images to actual display dimensions:
  - [ ] Don't serve 2000px images for 400px display

### Lazy Loading

- [ ] Implement lazy loading for images:
  - [ ] Add `loading="lazy"` attribute to images
  - [ ] Use Intersection Observer API for custom implementation
  - [ ] Prioritize above-the-fold images (use `loading="eager"`)
- [ ] Lazy load YouTube iframe:
  - [ ] Use facade pattern (thumbnail + play button)
  - [ ] Load actual iframe only on user interaction
  - [ ] Consider using lite-youtube-embed component
- [ ] Defer non-critical JavaScript:
  - [ ] Use `defer` or `async` attributes
  - [ ] Load analytics scripts asynchronously

### Minification and Bundling

- [ ] Minify CSS:
  - [ ] Use cssnano or clean-css
  - [ ] Create `.min.css` versions
  - [ ] Update HTML to reference minified files
- [ ] Minify JavaScript:
  - [ ] Use terser or uglify-js
  - [ ] Create `.min.js` versions
  - [ ] Preserve license comments if needed
- [ ] Consider bundling:
  - [ ] Combine multiple CSS files into one
  - [ ] Combine multiple JS files into one
  - [ ] Balance between bundling and caching
- [ ] Add build scripts to `package.json`:
  - [ ] `npm run build:css`
  - [ ] `npm run build:js`
  - [ ] `npm run build` (all assets)

### Additional Optimizations

- [ ] Enable caching headers (if you control server):
  - [ ] Cache static assets for long periods
  - [ ] Use cache busting with version/hash in filenames
- [ ] Preload critical resources:
  - [ ] `<link rel="preload" href="main.css" as="style">`
  - [ ] Preload fonts used above the fold
- [ ] Reduce third-party dependencies:
  - [ ] Review necessity of each library
  - [ ] Consider lightweight alternatives
  - [ ] Remove unused libraries
- [ ] Optimize fonts:
  - [ ] Use `font-display: swap` to prevent FOIT
  - [ ] Subset fonts to include only needed characters
  - [ ] Consider variable fonts

### Verification Steps

- [ ] Run Lighthouse performance audit (target 90+ score)
- [ ] Test on slow 3G connection (Chrome DevTools)
- [ ] Measure before/after page load times
- [ ] Check Time to Interactive (TTI) and First Contentful Paint (FCP)
- [ ] Verify images still look good after optimization
- [ ] Test lazy loading behavior
- [ ] Ensure minified code works identically to source

---

## Phase 7: UI Refresh

**Goal**: Modernize the visual design while maintaining brand identity.

### Color Scheme Review

- [ ] Audit current color usage via CSS variables
- [ ] Consider modern color trends:
  - [ ] Evaluate current primary/secondary colors
  - [ ] Consider adding accent colors
  - [ ] Review background colors (light vs. dark)
- [ ] Ensure color accessibility (contrast ratios)
- [ ] Create color palette documentation:
  - [ ] Primary colors
  - [ ] Secondary colors
  - [ ] Semantic colors (success, error, warning, info)
  - [ ] Neutral grays

### Typography Enhancement

- [ ] Review font choices:
  - [ ] Consider modern font pairings
  - [ ] Evaluate readability at various sizes
  - [ ] Ensure consistent font usage
- [ ] Improve typography scale:
  - [ ] Define consistent heading sizes
  - [ ] Set comfortable line heights
  - [ ] Adjust letter spacing if needed
- [ ] Add CSS variables for typography:
  - [ ] `--font-primary`, `--font-secondary`
  - [ ] `--font-size-base`, `--font-size-large`, etc.
  - [ ] `--line-height-base`, etc.

### Layout Improvements

- [ ] Review spacing consistency:
  - [ ] Use consistent margins and padding
  - [ ] Define spacing scale (4px, 8px, 16px, 24px, etc.)
  - [ ] Add CSS variables for spacing
- [ ] Improve responsive design:
  - [ ] Review breakpoints
  - [ ] Test on actual devices
  - [ ] Optimize for tablet views
- [ ] Consider grid layout for modern browsers:
  - [ ] CSS Grid for page layouts
  - [ ] Flexbox for component layouts

### Component Styling

- [ ] Modernize buttons:
  - [ ] Update border radius
  - [ ] Add hover/active states
  - [ ] Consider adding subtle shadows or gradients
  - [ ] Ensure consistent button sizes
- [ ] Improve navigation styling:
  - [ ] Modern menu design
  - [ ] Smooth transitions
  - [ ] Mobile-friendly hamburger menu
- [ ] Enhance cards and sections:
  - [ ] Consistent border radius
  - [ ] Subtle shadows for depth
  - [ ] Proper padding and spacing

### Animation and Interaction

- [ ] Review existing animations:
  - [ ] Ensure smooth transitions (60fps)
  - [ ] Respect `prefers-reduced-motion`
  - [ ] Remove jarring or excessive animations
- [ ] Add subtle interactions:
  - [ ] Hover effects on links and buttons
  - [ ] Focus indicators
  - [ ] Page transitions (if appropriate)
- [ ] Test performance impact of animations

### Verification Steps

- [ ] Get feedback from users or colleagues
- [ ] Compare before/after screenshots
- [ ] Test on multiple devices and browsers
- [ ] Ensure brand consistency
- [ ] Verify accessibility is maintained/improved

---

## Phase 8: Landing Page Enhancement

**Goal**: Improve the fun/ and xmas/ landing pages with better content, styling, and user experience.

### Fun Landing Page (`fun/index.html`)

- [ ] Content improvements:
  - [ ] Add engaging description of fun projects section
  - [ ] Include preview images/thumbnails for projects
  - [ ] Add short descriptions for each linked project
  - [ ] Consider adding dates or "new" badges
- [ ] Styling enhancements:
  - [ ] Create card-based layout for projects
  - [ ] Add hover effects to project cards
  - [ ] Use consistent spacing and typography
  - [ ] Add background or decorative elements
- [ ] Navigation improvements:
  - [ ] Make back button more prominent
  - [ ] Add breadcrumb navigation
  - [ ] Include footer with quick links

### Xmas Landing Page (`xmas/index.html`)

- [ ] Content improvements:
  - [ ] Add festive introduction text
  - [ ] Include preview images for each year's letter
  - [ ] Add short description or highlights for each year
  - [ ] Display years in reverse chronological order (newest first)
- [ ] Styling enhancements:
  - [ ] Create timeline or grid layout for years
  - [ ] Add festive theming (colors, icons, decorations)
  - [ ] Use card-based design for each year
  - [ ] Add seasonal graphics or animations
- [ ] Navigation improvements:
  - [ ] Make navigation intuitive and clear
  - [ ] Add back to main site button
  - [ ] Include breadcrumb navigation

### Dating Sim Page Enhancement

- [ ] Review and improve game flow
- [ ] Add better styling with extracted CSS
- [ ] Ensure mobile-friendly layout
- [ ] Consider adding save/load game state
- [ ] Add instructions or help section

### General Landing Page Features

- [ ] Implement consistent header/footer across landing pages
- [ ] Add metadata (title, description, Open Graph tags)
- [ ] Ensure responsive design
- [ ] Add loading states if needed
- [ ] Include analytics tracking
- [ ] Test social media sharing previews

### Verification Steps

- [ ] Get user feedback on navigation clarity
- [ ] Test on mobile devices
- [ ] Verify all links work correctly
- [ ] Check page load performance
- [ ] Ensure consistent branding

---

## Progress Tracking

### Quick Reference

- ✅ **Phase 1**: Standards Setup (Completed)
- ⏳ **Phase 2**: Code Extraction (Next Priority)
- 📋 **Phase 3**: Library Updates
- 📋 **Phase 4**: CSS/JS Refactoring
- 📋 **Phase 5**: Accessibility
- 📋 **Phase 6**: Performance Optimization
- 📋 **Phase 7**: UI Refresh
- 📋 **Phase 8**: Landing Page Enhancement

### Notes

- Each phase should be completed and verified before moving to the next
- Some tasks can be parallelized within a phase
- Document any deviations or additional work in this file
- Update checkboxes as tasks are completed
- Add new tasks as they are identified

---

## Resources and References

### Documentation

- [CODING_STANDARDS.md](./CODING_STANDARDS.md) - Project coding conventions
- [FILE_ORGANIZATION.md](./FILE_ORGANIZATION.md) - Directory structure guide
- [FUTURE_CONSIDERATIONS.md](./FUTURE_CONSIDERATIONS.md) - Deferred decisions and future evaluation items

### External Resources

- [Bootstrap 5 Migration Guide](https://getbootstrap.com/docs/5.0/migration/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev Performance](https://web.dev/performance/)
- [CSS Tricks](https://css-tricks.com/)

### Tools

- npm scripts for automated testing
- Browser DevTools for debugging
- Lighthouse for auditing
- WAVE for accessibility testing
- ImageOptim/Squoosh for image optimization

---

_Last Updated: December 3, 2025_
