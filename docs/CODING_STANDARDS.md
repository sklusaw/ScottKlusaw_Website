# Coding Standards

This document defines the coding standards for the Scott Klusaw Website project. **ALL code must adhere to these standards.** Automated tooling (ESLint, Stylelint, HTMLHint, Prettier) enforces these rules.

---

## Table of Contents

1. [Naming Conventions](#naming-conventions)
2. [HTML Standards](#html-standards)
3. [CSS Standards](#css-standards)
4. [JavaScript Standards](#javascript-standards)
5. [File Organization](#file-organization)
6. [Navigation Patterns](#navigation-patterns)
7. [Accessibility](#accessibility)
8. [Git Commits](#git-commits)
9. [Comments and Documentation](#comments-and-documentation)

---

## Naming Conventions

### HTML & CSS

- **Classes and IDs**: Use `kebab-case`
  ```html
  <div class="hero-area" id="contact-form"></div>
  ```
- **Files**: Use `kebab-case` with appropriate extensions
  ```
  index.html
  main-styles.css
  contact-form.html
  ```

### JavaScript

- **Variables and Functions**: Use `camelCase`
  ```javascript
  const userName = 'Scott';
  function showSlides(slideIndex) {}
  ```
- **Classes and Constructors**: Use `PascalCase`
  ```javascript
  class YouTubePlayer {}
  ```
- **Constants**: Use `SCREAMING_SNAKE_CASE`
  ```javascript
  const MAX_SLIDES = 4;
  const API_KEY = 'abc123';
  ```
- **Files**: Use `camelCase.js`
  ```
  youtubePlayer.js
  slideshow.js
  ```

### Directories

- **All directories**: Use lowercase with hyphens
  ```
  assets/
  fun/dating-sim/
  xmas/2022/
  show-pics/
  ```

---

## HTML Standards

### Structure

- **Always include DOCTYPE**: `<!DOCTYPE html>`
- **Use semantic HTML5 elements**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Proper meta tags on all pages**:
  ```html
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <title>Page Title</title>
  ```

### Formatting

- **Indentation**: 2 spaces (no tabs)
- **Attribute order**:
  1. `id`
  2. `class`
  3. `data-*` attributes
  4. `src`, `href`, `for`, `type`, `name`, `value`
  5. `alt`, `title`, `aria-*`
  6. `style` (avoid if possible)

### No Inline Code (After Phase 2)

- **No inline styles**: Use external CSS files
- **No inline scripts**: Use external JavaScript files
- **Exception**: Temporary inline code is allowed during refactoring phases, but must be documented and moved to external files

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Scott Klusaw</title>
    <link rel="stylesheet" href="assets/css/variables.css" />
    <link rel="stylesheet" href="assets/css/main.css" />
  </head>
  <body>
    <header class="site-header" id="main-header">
      <h1>Welcome</h1>
    </header>
    <script src="assets/js/main.js"></script>
  </body>
</html>
```

---

## CSS Standards

### Mobile-First Approach

- Write base styles for mobile devices first
- Use `@media` queries to enhance for larger screens
- Test on multiple device sizes

### CSS Variables

- **ALWAYS use CSS variables from `variables.css` for colors**
- **ALL pages must link to `assets/css/variables.css`** (adjust path based on depth)
- **Variable naming**: Use `--primary-color` style (descriptive with hyphens)

```css
/* ✓ CORRECT */
color: var(--primary-color);
background: var(--dark-bg);
border-color: var(--gray-medium);

/* ✗ WRONG */
color: #00b4d9;
background: #1c1c20;
```

### Property Ordering

- **Alphabetical order** (enforced by stylelint-order)
- Group related properties with comments for readability

```css
.example {
  /* Positioning */
  display: flex;
  position: relative;

  /* Box Model (alphabetical) */
  border: 1px solid var(--gray-medium);
  height: 100px;
  margin: 10px;
  padding: 20px;
  width: 200px;

  /* Typography (alphabetical) */
  color: var(--text-primary);
  font-family: var(--font-primary);
  font-size: 16px;

  /* Visual (alphabetical) */
  background: var(--white);
  box-shadow: var(--shadow-light);
  opacity: 1;
}
```

### Class Naming

- **BEM-like methodology**: `.block__element--modifier`
- **Descriptive names**: Convey purpose, not appearance

```css
/* ✓ CORRECT */
.hero-area {
}
.hero-area__title {
}
.hero-area__title--large {
}
.contact-form__input--error {
}

/* ✗ AVOID */
.blue-box {
}
.big-text {
}
```

### Best Practices

- **Avoid `!important`**: Use specificity correctly
- **Comment major sections**:
  ```css
  /* ==========================================================================
     Hero Area
     ========================================================================== */
  ```

---

## JavaScript Standards

### Modern JavaScript (ES6+)

- **Use modern syntax**: `const`, `let`, arrow functions, template literals
- **Avoid `var`**: Use `const` by default, `let` when reassignment needed

```javascript
// ✓ CORRECT
const userName = 'Scott';
let counter = 0;
const greet = (name) => `Hello, ${name}!`;

// ✗ WRONG
var userName = 'Scott';
var greet = function (name) {
  return 'Hello, ' + name + '!';
};
```

### Code Organization

- **'use strict' mode** at the top of files
- **External files only** (after Phase 2)
- **One purpose per file**: Separate concerns (slideshow.js, youtubePlayer.js)

### Error Handling

- **Use try/catch** for operations that may fail
- **Provide meaningful error messages**

```javascript
try {
  const data = JSON.parse(response);
} catch (error) {
  console.error('Failed to parse JSON:', error);
}
```

### Async Operations

- **Prefer async/await** over callbacks
- **Handle promises properly**

```javascript
// ✓ CORRECT
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

// ✗ AVOID (but acceptable for legacy code)
fetch('/api/data')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### jQuery

- **Minimize jQuery usage**: Use vanilla JavaScript where simple
- **Keep for complex DOM manipulation** or when already heavily used
- **Document why jQuery is needed** if adding new jQuery code

---

## File Organization

### Asset Placement Rules

1. **Shared Resources** → Root `assets/`
   - Used by multiple pages or foundational to the site
   - Examples: Bootstrap, jQuery, Font Awesome, `logo.png`, `hero-area.jpg`, shared CSS

2. **Page-Specific Resources** → `[page-folder]/assets/`
   - Used exclusively by one page or section
   - Examples: `xmas/2022/assets/xmas2022.pdf`, `fun/dating-sim/assets/dating-sim.css`

### Theming Requirement

**ALL HTML pages MUST link to `assets/css/variables.css`**

Adjust path based on page depth:

```html
<!-- Root level (index.html) -->
<link rel="stylesheet" href="assets/css/variables.css" />

<!-- One level deep (fun/index.html) -->
<link rel="stylesheet" href="../assets/css/variables.css" />

<!-- Two levels deep (fun/dating-sim/index.html) -->
<link rel="stylesheet" href="../../assets/css/variables.css" />
```

See [FILE_ORGANIZATION.md](FILE_ORGANIZATION.md) for complete structure.

---

## Navigation Patterns

### Back Links

**ALL sub-pages must include back navigation links**

Pattern: `<a href="../index.html">← Back to [Parent]</a>`

```html
<!-- fun/dating-sim/index.html -->
<a href="../index.html">← Back to Fun Projects</a>

<!-- xmas/2022/index.html -->
<a href="../index.html">← Back to Christmas Letters</a>

<!-- fun/index.html -->
<a href="../index.html">← Back to Main Site</a>
```

### Styles

- Simple text link with arrow character (`←`)
- Positioned consistently (usually top of page)
- Use consistent colors from CSS variables

---

## Accessibility

### WCAG 2.1 AA Compliance

- **Semantic HTML**: Use appropriate elements (`<nav>`, `<button>`, `<main>`)
- **Alt text**: ALL images must have meaningful `alt` attributes
- **Keyboard navigation**: All interactive elements must be keyboard-accessible
- **Focus indicators**: Visible focus styles for keyboard users
- **Color contrast**: Minimum 4.5:1 for text, 3:1 for large text/UI components
- **ARIA labels**: Add when semantic HTML isn't sufficient

### Examples

```html
<!-- ✓ CORRECT -->
<img src="logo.png" alt="Scott Klusaw Portfolio Logo" />
<button type="button" aria-label="Close menu">×</button>
<nav aria-label="Main navigation">
  <!-- ✗ WRONG -->
  <img src="logo.png" alt="" />
  <div onclick="closeMenu()">×</div>
</nav>
```

---

## Git Commits

### Conventional Commits

**Format**: `<type>(<scope>): <subject>`

**Types**:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring (no feature/fix)
- `test`: Adding/updating tests
- `chore`: Build process, tooling, dependencies

**Examples**:

```
feat(css): extract hardcoded colors to CSS variables
fix(navigation): correct PDF path in xmas 2022 page
docs(readme): add quick start guide
style(html): format index.html with prettier
refactor(js): move inline slideshow code to external file
chore(deps): update eslint to v8.55.0
```

**Enforced by commitlint** via pre-commit hooks.

---

## Comments and Documentation

### JavaScript Comments

- **JSDoc** for functions:
  ```javascript
  /**
   * Displays the specified slide in the slideshow
   * @param {number} slideIndex - The index of the slide to display (1-based)
   * @returns {void}
   */
  function showSlides(slideIndex) {
    // Implementation
  }
  ```

### CSS Comments

- **Section headers** for major blocks:
  ```css
  /* ==========================================================================
     Hero Area Styles
     ========================================================================== */
  ```
- **Inline comments** for complex/non-obvious code:
  ```css
  /* Prevent flash of unstyled content on page load */
  .preload * {
    transition: none !important;
  }
  ```

### HTML Comments

- **Sparingly**: Most HTML should be self-documenting
- **Use for sections**:
  ```html
  <!-- Header Area Start -->
  <header>...</header>
  <!-- Header Area End -->
  ```

### What to Comment

- **WHY, not WHAT**: Explain the reasoning, not the obvious
- **Workarounds and hacks**: Document why they exist
- **Complex logic**: Break down difficult-to-understand code
- **TODOs**: Mark items for future work (but track in roadmap)

---

## Validation

Run these commands before committing:

```bash
npm run validate       # Run all linters
npm run fix           # Auto-format and fix issues
npm run test:paths    # Check for broken links
```

Pre-commit hooks will automatically run linters on staged files.

---

## Questions?

Refer to:

- [FILE_ORGANIZATION.md](FILE_ORGANIZATION.md) for structure details
- [REFACTORING_ROADMAP.md](REFACTORING_ROADMAP.md) for improvement phases
- [FUTURE_CONSIDERATIONS.md](FUTURE_CONSIDERATIONS.md) for deferred decisions
- [QUICK_START.md](QUICK_START.md) for development workflow
- [README.md](../readme.md) for project overview
