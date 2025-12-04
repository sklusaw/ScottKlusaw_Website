# File Organization

This document defines the file and directory structure for the Scott Klusaw Website project.

---

## Directory Structure

```
ScottKlusaw_Website/
├── index.html                    # Main portfolio page (PUBLIC)
├── license.txt
├── readme.md
│
├── .gitignore                    # Git ignore rules
├── .editorconfig                 # Editor configuration
├── .prettierrc.json              # Prettier formatting rules
├── .prettierignore               # Prettier ignore patterns
├── .eslintrc.json                # ESLint JavaScript linting
├── .stylelintrc.json             # Stylelint CSS linting
├── .htmlhintrc                   # HTMLHint HTML linting
├── commitlint.config.js          # Commit message linting
├── package.json                  # npm dependencies and scripts
│
├── .vscode/                      # VS Code workspace settings
│   ├── settings.json             # Editor settings
│   └── extensions.json           # Recommended extensions
│
├── assets/                       # SHARED resources used by multiple pages
│   ├── css/
│   │   ├── variables.css         # CSS custom properties (MUST BE FIRST)
│   │   ├── main.css              # CSS manifest (@import manifest loading modular CSS)
│   │   ├── main-old.css          # Original monolithic CSS (backup)
│   │   ├── responsive.css        # Responsive breakpoints
│   │   ├── animate.css
│   │   ├── bootstrap.min.css
│   │   ├── nivo-lightbox.css
│   │   ├── slicknav.css
│   │   │
│   │   ├── core/                 # CORE STYLES - Base typography, utilities
│   │   │   ├── typography.css    # Font definitions, heading/body/link styles
│   │   │   └── utilities.css     # Buttons, spacing, loader, back-to-top
│   │   │
│   │   ├── layout/               # LAYOUT STYLES - Page structure & major sections
│   │   │   ├── navigation.css    # Navbar, dropdowns, mobile menu
│   │   │   ├── hero.css          # Hero section, background, overlay
│   │   │   └── footer.css        # Footer, copyright, contact section
│   │   │
│   │   ├── components/           # COMPONENT STYLES - Reusable UI components
│   │   │   ├── social-icons.css  # Social media icon styling & hover effects
│   │   │   ├── slideshow.css     # Image carousel, navigation, animations
│   │   │   ├── timeline.css      # Timeline with milestones and cards
│   │   │   ├── portfolio.css     # Portfolio grid, filtering, hover overlays
│   │   │   └── forms.css         # Form controls, inputs, contact forms
│   │   │
│   │   └── pages/                # PAGE-SPECIFIC STYLES - Unique page layouts
│   │       ├── about.css         # About section, profile, counters
│   │       └── services.css      # Services section and service items
│   │
│   ├── js/
│   │   ├── components/           # Modular JavaScript components
│   │   │   ├── slideshow.js      # Manual slideshow carousel (extracted)
│   │   │   └── youtubePlayer.js  # YouTube IFrame API wrapper (extracted)
│   │   ├── jquery-min.js
│   │   ├── bootstrap.min.js
│   │   ├── main.js
│   │   └── [other shared scripts]
│   │
│   ├── fonts/
│   │   ├── font-awesome.min.css
│   │   ├── simple-line-icons.css
│   │   └── line-icons/
│   │
│   └── img/
│       ├── logo.png                      # Site logo
│       ├── hero-area.jpg                 # Desktop hero image
│       ├── hero-area-small.jpg           # Mobile hero image
│       ├── hero-area-med.jpg             # Tablet hero image
│       ├── slides/                       # Main page slideshow
│       │   ├── 1.jpg
│       │   ├── 2.jpg
│       │   ├── 3.jpg
│       │   └── 4.jpg
│       ├── show-pics/                    # Main page showcase photos
│       │   ├── 1.jpg
│       │   ├── 2.jpg
│       │   └── 3.jpg
│       ├── about/                        # About section images
│       └── background/                   # Background images
│
├── fun/                          # Fun projects section (PRIVATE ACCESS)
│   ├── index.html                # Landing page listing fun projects
│   ├── assets/
│   │   └── css/
│   │       └── fun-landing.css   # Landing page styles (extracted)
│   └── dating-sim/               # Dating simulator game
│       ├── index.html            # Game page
│       └── assets/               # Page-specific resources
│           ├── css/
│           │   └── dating-sim.css    # Game styles (extracted)
│           └── js/
│               ├── game-data.js      # Character and dialogue data
│               └── game-engine.js    # Game logic and state management
│
├── xmas/                         # Christmas letters section (PRIVATE ACCESS)
│   ├── index.html                # Landing page listing years
│   ├── assets/
│   │   └── css/
│   │       ├── xmas-landing.css  # Landing page styles (extracted)
│   │       └── coming-soon.css   # Reusable placeholder page styles
│   ├── 2022/
│   │   ├── index.html
│   │   └── assets/
│   │       └── xmas2022.pdf
│   ├── 2023/
│   │   ├── index.html
│   │   └── assets/
│   │       └── xmas2023.pdf
│   └── 2025/
│       ├── index.html            # Coming soon placeholder
│       └── assets/               # Empty, ready for future PDF
│
├── archive/                      # Legacy website versions (ARCHIVED)
│   ├── V1/                       # Original version
│   └── V2/                       # Second version
│
├── CODING_STANDARDS.md           # THIS IS THE LAW
├── FILE_ORGANIZATION.md          # This file
├── REFACTORING_ROADMAP.md        # Phased improvement plan
├── QUICK_START.md                # Developer setup guide
└── README.md                     # Project overview
```

---

## Asset Placement Rules

### Rule 1: Shared Resources → Root `assets/`

**Criteria**: Used by multiple pages OR foundational to the site

**Examples**:

- **CSS Frameworks**: Bootstrap, Font Awesome
- **JavaScript Libraries**: jQuery, vendor plugins
- **Fonts**: Font Awesome, line icons, Google Fonts
- **Images**:
  - `logo.png` (used on multiple pages potentially)
  - `hero-area.jpg` (main page hero background)
  - `slides/` (main page slideshow images)
  - `show-pics/` (main page showcase photos)
- **Core Stylesheets**:
  - `variables.css` (REQUIRED by all pages)
  - `main.css` (shared styles)
  - `responsive.css` (shared breakpoints)

**Why**:

- Reduces duplication
- Enables consistent theming via `variables.css`
- Simplifies updates (change once, affects all pages)

---

### Rule 2: Page-Specific Resources → `[page-folder]/assets/`

**Criteria**: Used exclusively by ONE page or section

**Examples**:

- **PDFs**:
  - `xmas/2022/assets/xmas2022.pdf` (only for 2022 letter)
  - `xmas/2023/assets/xmas2023.pdf` (only for 2023 letter)
- **Page-Specific Styles** (future):
  - `fun/dating-sim/assets/css/dating-sim.css` (only for dating sim)
- **Page-Specific Scripts** (future):
  - `fun/dating-sim/assets/js/game-logic.js`
- **Page-Specific Images** (future):
  - `fun/dating-sim/assets/img/characters/`

**Why**:

- Keeps page resources isolated
- Easier to maintain/delete entire sections
- Clearer dependencies (everything for one page in one place)
- Doesn't bloat root `assets/` folder

---

## Theming Requirement

### CSS Variables (`variables.css`)

**CRITICAL RULE**: Every HTML page in the project MUST link to `assets/css/variables.css`

**Why**:

- Ensures consistent color scheme across all pages
- Enables site-wide theme changes by editing one file
- Provides centralized design tokens

**How**: Adjust path based on page depth

#### Examples

**Root Level** (`index.html`):

```html
<link rel="stylesheet" href="assets/css/variables.css" />
```

**One Level Deep** (`fun/index.html`, `xmas/index.html`):

```html
<link rel="stylesheet" href="../assets/css/variables.css" />
```

**Two Levels Deep** (`fun/dating-sim/index.html`, `xmas/2022/index.html`):

```html
<link rel="stylesheet" href="../../assets/css/variables.css" />
```

**Three Levels Deep** (if needed):

```html
<link rel="stylesheet" href="../../../assets/css/variables.css" />
```

### Loading Order

`variables.css` should be the **FIRST** stylesheet linked:

```html
<head>
  <!-- 1. CSS Variables FIRST -->
  <link rel="stylesheet" href="assets/css/variables.css" />

  <!-- 2. Framework/Vendor CSS -->
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/fonts/font-awesome.min.css" />

  <!-- 3. Site Styles -->
  <link rel="stylesheet" href="assets/css/main.css" />
  <link rel="stylesheet" href="assets/css/responsive.css" />

  <!-- 4. Page-Specific Styles (if any) -->
  <link rel="stylesheet" href="assets/css/page-specific.css" />
</head>
```

---

## Navigation Patterns

### Back Links

All sub-pages must include navigation back to their parent or main site.

**Pattern**:

```html
<a href="../index.html">← Back to [Parent Name]</a>
```

**Examples**:

| Page                        | Back Link Destination     | Example Code                                              |
| --------------------------- | ------------------------- | --------------------------------------------------------- |
| `fun/dating-sim/index.html` | Fun projects landing      | `<a href="../index.html">← Back to Fun Projects</a>`      |
| `xmas/2022/index.html`      | Christmas letters landing | `<a href="../index.html">← Back to Christmas Letters</a>` |
| `xmas/2023/index.html`      | Christmas letters landing | `<a href="../index.html">← Back to Christmas Letters</a>` |
| `xmas/2025/index.html`      | Christmas letters landing | `<a href="../index.html">← Back to Christmas Letters</a>` |
| `fun/index.html`            | Main site                 | `<a href="../index.html">← Back to Main Site</a>`         |
| `xmas/index.html`           | Main site                 | `<a href="../index.html">← Back to Main Site</a>`         |

**Styling**:

- Use consistent styling across all back links
- Apply colors from CSS variables (e.g., `var(--text-secondary)`)
- Position near top of page for easy access

---

## Path Reference Guide

When referencing assets from different page depths, use these patterns:

### From Root (`index.html`)

```html
<link rel="stylesheet" href="assets/css/main.css" />
<script src="assets/js/main.js"></script>
<img src="assets/img/logo.png" alt="Logo" />
```

### From One Level Deep (`fun/index.html`)

```html
<link rel="stylesheet" href="../assets/css/main.css" />
<script src="../assets/js/main.js"></script>
<img src="../assets/img/logo.png" alt="Logo" />
```

### From Two Levels Deep (`fun/dating-sim/index.html`)

```html
<link rel="stylesheet" href="../../assets/css/main.css" />
<script src="../../assets/js/main.js"></script>
<img src="../../assets/img/logo.png" alt="Logo" />
```

### From Page-Specific Assets

```html
<!-- xmas/2022/index.html referencing its own PDF -->
<embed src="assets/xmas2022.pdf" type="application/pdf" />

<!-- fun/dating-sim/index.html referencing its own CSS (Phase 2) -->
<link rel="stylesheet" href="assets/css/dating-sim.css" />
```

---

## Folder Naming Conventions

- **Lowercase with hyphens**: `dating-sim/`, `show-pics/`, `hero-area.jpg`
- **Avoid spaces**: Use `-` instead of spaces
- **Avoid capital letters**: Use lowercase for consistency (exception: archived `V1/`, `V2/`)
- **Be descriptive**: Folder names should clearly indicate contents

---

## Special Folders

### `archive/`

- Contains legacy versions (V1, V2) for historical reference
- **Do not modify** contents
- **Do not link to** from active pages
- Excluded from linters and formatters via `.prettierignore`

### `node_modules/`

- Generated by `npm install`
- Contains development dependencies
- **Never commit** to git (excluded via `.gitignore`)
- **Never reference** in HTML pages (use root `assets/` instead)

### `.vscode/`

- VS Code workspace settings
- **Do commit** to git (helps other developers)
- Ensures consistent editor configuration

---

## Migration Checklist (Phase 1 Complete)

✅ **Completed**:

- [x] Moved V1 and V2 to `archive/`
- [x] Promoted V3 contents to root
- [x] Renamed folders to kebab-case
- [x] Created page-specific asset directories
- [x] Moved PDFs to respective `assets/` folders
- [x] Updated all path references
- [x] Created landing pages with back navigation
- [x] Linked `variables.css` in all pages

🔜 **Future** (Phase 2+):

- [ ] Extract dating-sim inline styles to `fun/dating-sim/assets/css/dating-sim.css`
- [ ] Extract slideshow inline JS to `assets/js/slideshow.js`
- [ ] Extract YouTube player inline JS to `assets/js/youtubePlayer.js`

---

## Questions?

Refer to:

- [CODING_STANDARDS.md](CODING_STANDARDS.md) for naming and code conventions
- [REFACTORING_ROADMAP.md](REFACTORING_ROADMAP.md) for phased improvements
- [FUTURE_CONSIDERATIONS.md](FUTURE_CONSIDERATIONS.md) for deferred decisions
- [QUICK_START.md](QUICK_START.md) for development workflow
- [README.md](../readme.md) for project overview
