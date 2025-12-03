# Quick Start Guide

Welcome! This guide will help you get up and running with the Scott Klusaw Website project in minutes.

## Prerequisites

Before you begin, make sure you have:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)
- **Git** - For version control

## Initial Setup

Follow these steps to set up your development environment:

### 1. Clone the Repository

```powershell
git clone <repository-url>
```

### 2. Navigate to Project Root

```powershell
cd ScottKlusaw_Website-master
```

### 3. Install Dependencies

```powershell
npm install
```

This will install all necessary development tools including:

- HTMLHint for HTML linting
- Stylelint for CSS linting
- ESLint for JavaScript linting
- Prettier for code formatting
- Live Server for local development
- Husky for Git hooks

### 4. Accept VS Code Extensions

When you open the project in VS Code, you'll see a prompt to install recommended extensions. **Accept all** - these extensions provide:

- Real-time linting
- Auto-formatting on save
- Better development experience

### 5. Validate Everything Works

```powershell
npm run test:all
```

This runs all validation checks. If everything passes, you're ready to go! 🎉

## Development Workflow

Here's your typical development workflow:

### 1. Make Changes

Edit HTML, CSS, or JavaScript files. VS Code will:

- Auto-format on save (if you accepted extensions)
- Show linting errors in real-time
- Highlight issues before you even save

### 2. Validate Your Changes

```powershell
npm run validate
```

This runs all linters and checks for issues.

### 3. Fix Issues Automatically (if needed)

```powershell
npm run fix
```

This auto-fixes many common issues like formatting, semicolons, quotes, etc.

### 4. Test File Paths

```powershell
npm run test:paths
```

Ensures all links, images, and assets are valid and accessible.

### 5. Test Locally

```powershell
npm run serve
```

Opens your site at `http://localhost:8080` with live reload. Changes appear instantly!

### 6. Commit Your Changes

Use conventional commit messages:

```powershell
git add .
git commit -m "feat: add new portfolio item"
```

Pre-commit hooks will automatically run validation. Commits are rejected if validation fails.

### 7. Deploy to Production

Push to `main` branch to trigger automatic deployment:

```powershell
git push origin main
```

GitHub Actions will automatically deploy your changes to AWS S3 within ~60 seconds. Check the **Actions** tab in GitHub to monitor deployment status.

**📖 See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for initial AWS setup instructions.**

## Available Commands

Here's the complete list of npm scripts you can use:

### Linting Commands

- **`npm run lint:html`** - Check HTML files for errors and best practices
- **`npm run lint:css`** - Check CSS files for errors and style issues
- **`npm run lint:js`** - Check JavaScript files for errors and code quality

### Formatting Commands

- **`npm run format`** - Auto-format all HTML, CSS, and JS files with Prettier

### Combined Commands

- **`npm run validate`** - Run all linters (HTML, CSS, JS) at once
- **`npm run fix`** - Run all linters with auto-fix enabled
- **`npm run test:paths`** - Verify all file paths and asset references
- **`npm run test:all`** - Run validation + path tests (full test suite)

### Development Server

- **`npm run serve`** - Start live development server on port 8080

## VS Code Setup

### Recommended Extensions

The project includes `.vscode/extensions.json` with recommended extensions:

- **HTMLHint** - HTML validation
- **Stylelint** - CSS validation and auto-fix
- **ESLint** - JavaScript validation and auto-fix
- **Prettier** - Code formatting
- **Live Server** - Local development server

### Auto-Format on Save

If you accepted the recommended extensions, format-on-save is enabled via `.vscode/settings.json`:

- Files auto-format when you save (Ctrl+S)
- Linters auto-fix issues when possible
- No manual formatting needed!

### Real-Time Feedback

Linters run automatically as you type:

- Squiggly lines show errors/warnings
- Hover for explanations
- Click lightbulb icon for quick fixes

## Testing Locally

The easiest way to test your site:

```powershell
npm run serve
```

This:

1. Starts a local web server on port 8080
2. Opens `http://localhost:8080` in your browser
3. Auto-reloads when you save changes
4. Works with all features (no CORS issues!)

**Alternative:** Right-click `index.html` in VS Code and select "Open with Live Server"

## Git Workflow

### Conventional Commits

This project enforces conventional commit messages using Commitlint:

**Format:** `<type>: <description>`

**Valid types:**

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Examples:**

```powershell
git commit -m "feat: add contact form validation"
git commit -m "fix: resolve mobile menu overflow issue"
git commit -m "docs: update README with new instructions"
git commit -m "style: format CSS files with Prettier"
```

### Pre-Commit Hooks

Husky automatically runs validation before each commit:

- Lints all staged files
- Runs path validation
- Prevents bad code from being committed

If validation fails, the commit is rejected. Run `npm run fix` to resolve issues.

## Deployment

This is a **static website** - no build step required!

### Ready for AWS S3

The site is designed for S3 static hosting:

1. All files are in the correct structure
2. Paths are relative and portable
3. No compilation or bundling needed

### Deployment Steps

1. Validate everything: `npm run test:all`
2. Upload files to S3 bucket
3. Configure S3 for static website hosting
4. Set `index.html` as index document
5. Done! 🚀

## Troubleshooting

### VS Code Extension Issues

**Problem:** Extensions not working or not installed

**Solution:**

1. Open Command Palette (Ctrl+Shift+P)
2. Type "Extensions: Show Recommended Extensions"
3. Install all recommended extensions
4. Reload VS Code (Ctrl+Shift+P → "Developer: Reload Window")

### Linter Errors

**Problem:** Getting linting errors after making changes

**Solution:**

```powershell
npm run fix
```

This auto-fixes most formatting and style issues. For remaining errors, check the terminal output for specific fixes needed.

### Path Issues

**Problem:** `npm run test:paths` fails

**Solution:**

1. Check the error output - it shows which files are missing
2. Verify file paths are relative (not absolute)
3. Check for typos in filenames
4. Ensure files exist in the correct directories

**Common causes:**

- Typo in `src` or `href` attributes
- Wrong file extension (`.jpg` vs `.png`)
- Missing files in `assets/` folders

### npm Install Failures

**Problem:** `npm install` fails or shows errors

**Solutions:**

1. **Clear npm cache:**

   ```powershell
   npm cache clean --force
   npm install
   ```

2. **Delete node_modules and reinstall:**

   ```powershell
   Remove-Item -Recurse -Force node_modules
   Remove-Item -Force package-lock.json
   npm install
   ```

3. **Check Node.js version:**

   ```powershell
   node --version
   ```

   Must be 18.0.0 or higher. Update Node.js if needed.

4. **Run as Administrator (if permission issues):**
   - Right-click PowerShell
   - Select "Run as Administrator"
   - Navigate to project and run `npm install`

### Port Already in Use

**Problem:** `npm run serve` fails because port 8080 is in use

**Solution:**

1. Find and stop the process using port 8080, OR
2. Edit `package.json` to use a different port:
   ```json
   "serve": "live-server --port=8081"
   ```

### Format on Save Not Working

**Problem:** Files don't auto-format when saving

**Solution:**

1. Ensure Prettier extension is installed
2. Check `.vscode/settings.json` exists
3. Open Command Palette (Ctrl+Shift+P)
4. Type "Preferences: Open Settings (JSON)"
5. Verify `"editor.formatOnSave": true` is set
6. Reload VS Code

## Need Help?

- Check the [README.md](../readme.md) for project overview
- Review [CODING_STANDARDS.md](./CODING_STANDARDS.md) for code guidelines
- See [FILE_ORGANIZATION.md](./FILE_ORGANIZATION.md) for project structure
- Check [REFACTORING_ROADMAP.md](./REFACTORING_ROADMAP.md) for improvement plans
- Review [FUTURE_CONSIDERATIONS.md](./FUTURE_CONSIDERATIONS.md) for deferred decisions

Happy coding! 🚀
