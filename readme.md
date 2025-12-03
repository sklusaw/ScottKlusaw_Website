# Scott Klusaw Personal Portfolio Website

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-18%2B-green.svg)
![Static](https://img.shields.io/badge/hosting-AWS%20S3-orange.svg)

Personal portfolio website showcasing software engineering projects, music compositions, and creative writing. Built as a static site and hosted on AWS S3 for optimal performance and simplicity.

---

## 🚀 Quick Start

**See [QUICK_START.md](./docs/QUICK_START.md) for detailed setup guide and development workflow.**

### Prerequisites

- **Node.js 18+** (for development tooling and dependencies)
- **VS Code** (recommended for consistent formatting and linting)

### Installation

```powershell
npm install
```

### Development Commands

- `npm run serve` - Start local development server
- `npm run lint` - Check code standards
- `npm run format` - Auto-format code
- `npm run test:all` - Run all validation checks

**See [QUICK_START.md](./docs/QUICK_START.md) for complete command details and workflow.**

---

## ⚠️ CRITICAL FOR AI ASSISTANTS

> **READ BEFORE MAKING ANY CHANGES**

### Required Reading

1. **[CODING_STANDARDS.md](./docs/CODING_STANDARDS.md)** - Code style, naming conventions, and quality standards
2. **[FILE_ORGANIZATION.md](./docs/FILE_ORGANIZATION.md)** - Asset organization and file structure rules

### Mandatory Rules

#### Before ANY Code Changes:

- ✅ Read `CODING_STANDARDS.md` and `FILE_ORGANIZATION.md` completely
- ✅ Understand the existing file structure and naming patterns
- ✅ Check which CSS variables are available in `assets/css/variables.css`

#### After ANY Code Changes:

- ✅ **Run `npm run test:all`** to validate all changes
- ✅ Verify links work with correct relative paths
- ✅ Confirm format-on-save applied correctly

#### Naming Conventions (STRICT):

- **HTML/CSS files**: `kebab-case.html`, `kebab-case.css`
- **JavaScript files**: `camelCase.js`
- **Images**: `descriptive-kebab-case.jpg/png/svg`

#### CSS Variables (MANDATORY):

- **USE CSS VARIABLES FOR ALL COLORS** from `assets/css/variables.css`
- Primary color: `var(--primary-color)`
- Text colors: `var(--text-color)`, `var(--text-muted)`
- Backgrounds: `var(--bg-primary)`, `var(--bg-secondary)`
- **NEVER hardcode colors** - always use variables

#### HTML Requirements:

- **ALL HTML pages** must link to `assets/css/variables.css` with correct relative path depth
  - Root level: `<link rel="stylesheet" href="assets/css/variables.css">`
  - One level deep: `<link rel="stylesheet" href="../assets/css/variables.css">`
  - Two levels deep: `<link rel="stylesheet" href="../../assets/css/variables.css">`
- **ALL sub-pages** must include back navigation links (e.g., "← Back to Home")

#### Asset Organization:

- Follow `FILE_ORGANIZATION.md` rules strictly
- Keep images in correct `assets/img/` subdirectories
- Each major section has its own `assets/` folder
- Project-specific assets go in project folders (e.g., `xmas/2025/assets/`)

#### VS Code Integration:

- Workspace settings ensure auto-formatting on save
- Prettier and ESLint configs are pre-configured
- `.editorconfig` enforces consistent style

#### Archive Folder:

- **NEVER modify contents of `archive/` folder**
- V1 and V2 are preserved for historical reference only

---

## 📁 Project Structure

```
ScottKlusaw_Website-master/
├── index.html                 # Main portfolio homepage
├── package.json              # Node dependencies and scripts
├── *.md                      # Documentation files
├── assets/                   # Global assets for main site
│   ├── css/                  # Stylesheets (including variables.css)
│   ├── js/                   # JavaScript files
│   ├── img/                  # Images organized by category
│   └── fonts/                # Font files and icon fonts
├── fun/                      # Fun projects section (PRIVATE)
│   └── dating-sim/          # Interactive dating simulator
├── xmas/                     # Holiday card archive (PRIVATE)
│   ├── 2022/                # Christmas card 2022
│   ├── 2023/                # Christmas card 2023
│   └── 2025/                # Christmas card 2025
└── archive/                  # Legacy versions (DO NOT MODIFY)
    ├── V1/                  # Original portfolio version
    └── V2/                  # Second iteration
```

---

## 📄 Pages

| Page                 | Path                         | Access  | Description                             |
| -------------------- | ---------------------------- | ------- | --------------------------------------- |
| **Portfolio Home**   | `/index.html`                | PUBLIC  | Main landing page with projects and bio |
| **Fun Projects**     | `/fun/index.html`            | PRIVATE | Collection of experimental/fun projects |
| **Dating Simulator** | `/fun/dating-sim/index.html` | PRIVATE | Interactive dating sim game             |
| **Christmas Cards**  | `/xmas/index.html`           | PRIVATE | Holiday card archive landing            |
| **Xmas 2022**        | `/xmas/2022/index.html`      | PRIVATE | Christmas card 2022                     |
| **Xmas 2023**        | `/xmas/2023/index.html`      | PRIVATE | Christmas card 2023                     |
| **Xmas 2025**        | `/xmas/2025/index.html`      | PRIVATE | Christmas card 2025                     |

> **Note**: `fun/` and `xmas/` sections are intentionally not linked from the main site navigation for private access only (direct URL sharing).

---

## 📚 Standards Documentation

- **[CODING_STANDARDS.md](./docs/CODING_STANDARDS.md)** - Comprehensive code style guide, naming conventions, CSS variable usage, and quality standards
- **[FILE_ORGANIZATION.md](./docs/FILE_ORGANIZATION.md)** - Asset organization rules and file structure patterns
- **[REFACTORING_ROADMAP.md](./docs/REFACTORING_ROADMAP.md)** - Technical debt tracking and improvement plan
- **[FUTURE_CONSIDERATIONS.md](./docs/FUTURE_CONSIDERATIONS.md)** - Deferred decisions and items for future evaluation
- **[QUICK_START.md](./docs/QUICK_START.md)** - Detailed setup guide and development workflow

---

## 🛠️ Development Environment

### Recommended IDE

**VS Code** with workspace settings auto-applied:

- Format on save enabled
- Prettier for HTML/CSS/JS formatting
- ESLint for JavaScript linting
- EditorConfig for consistent style

### VS Code Extensions (Recommended)

- **Prettier** - Code formatter
- **ESLint** - JavaScript linter
- **EditorConfig** - Consistent editor settings
- **Live Server** - Local development server

### Local Development Server

```powershell
npm run serve
```

Opens the site at `http://127.0.0.1:8080` with auto-reload on changes.

---

## 🔄 Git Workflow

### Conventional Commits

This project enforces [Conventional Commits](https://www.conventionalcommits.org/) via commitlint:

```
feat: add new portfolio project
fix: correct navigation link path
docs: update README with new section
style: format HTML files
refactor: reorganize CSS variables
```

### Pre-commit Hooks

- Runs linting and formatting checks before each commit
- Validates commit message format
- Ensures code quality standards are met

---

## 🚀 Deployment

### Automated Deployment via GitHub Actions

**📖 See [DEPLOYMENT_GUIDE.md](./docs/DEPLOYMENT_GUIDE.md) for complete setup instructions.**

This project uses GitHub Actions to automatically deploy to AWS S3 on every push to `main`.

#### Quick Deploy

```powershell
git add .
git commit -m "feat: your changes"
git push origin main
# 🚀 Automatically deploys to S3!
```

#### Manual Deploy

Trigger deployment from GitHub Actions tab without pushing code.

### What Gets Deployed

✅ **Deployed to S3:**

- HTML files (`index.html`, sub-pages)
- `assets/` folder (CSS, JS, images, fonts)
- `fun/` and `xmas/` sections

❌ **Not Deployed:**

- Development files (`node_modules/`, `.vscode/`)
- Documentation (`docs/`, `*.md`)
- Archive folder (`archive/`)
- Configuration files (`.eslintrc.json`, etc.)

### Architecture

This is a **pure static website** with no build step required.

- ✅ Edit files directly
- ✅ Test locally with `npm run serve`
- ✅ Push to GitHub → Automatic S3 deployment
- ❌ No transpilation or bundling needed

**Architecture Note:** This project intentionally avoids a `src/` folder structure to maintain simplicity for static S3 hosting. See [FUTURE_CONSIDERATIONS.md](./docs/FUTURE_CONSIDERATIONS.md#source-folder-structure) for rationale.

**Security Note:** Deployment uses IAM user credentials (not root), stored securely as GitHub secrets. See [DEPLOYMENT_GUIDE.md](./docs/DEPLOYMENT_GUIDE.md) for security best practices.

---

## 📦 Legacy Versions

Previous iterations of this portfolio are preserved in the `archive/` folder:

- **V1** - Original Bootstrap-based portfolio with jQuery
- **V2** - Second iteration with updated design

> **Important**: Archive contents are read-only for historical reference. Never modify files in `archive/`.

---

## 👨‍💻 Author

**Scott Klusaw**

- 🌐 Website: [scottklusaw.com](https://scottklusaw.com)
- 💼 LinkedIn: [linkedin.com/in/scottklusaw](https://www.linkedin.com/in/scottklusaw)
- 🐙 GitHub: [github.com/scottklusaw](https://github.com/scottklusaw)

---

## 📜 License

This project is licensed under the **MIT License** - see the [license.txt](./license.txt) file for details.

---

**Built with ❤️ and hosted on AWS S3**
