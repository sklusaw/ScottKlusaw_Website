# Project To-Do List

This file tracks ongoing and future tasks for the website refactoring project.

**Last Updated:** December 3, 2025

---

## 🚧 In Progress

### Git & GitHub Setup (PRIORITY)

**Goal:** Configure Git to push to personal GitHub account (separate from work credentials)

**Documentation:** [GIT_SETUP_GUIDE.md](./GIT_SETUP_GUIDE.md)

**Tasks:**

- [ ] **Choose authentication method**
  - Option A: HTTPS with Personal Access Token (simpler, 10 minutes)
  - Option B: SSH keys with config (more secure, 20 minutes)

- [ ] **Configure repository-specific Git identity**

  ```powershell
  git config user.email "your-personal-email@example.com"
  git config user.name "Scott Klusaw"
  ```

- [ ] **Set up GitHub remote**

  ```powershell
  # Check if remote exists
  git remote -v

  # Add or update remote URL
  git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
  # OR
  git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
  ```

- [ ] **Generate GitHub Personal Access Token** (if using HTTPS)
  - Go to GitHub Settings → Developer settings → Personal access tokens
  - Generate new token (classic)
  - Required scopes: `repo`, `workflow`
  - Save token securely (can't retrieve again!)

- [ ] **Test first push to personal GitHub**

  ```powershell
  git add .
  git commit -m "feat: add modern dev setup and documentation"
  git push -u origin main
  ```

- [ ] **Verify Husky pre-commit hooks work**
  - Should automatically run linters on commit
  - Commit blocked if linting fails

**Estimated Time:** 15-30 minutes

---

### Dating Sim Testing

- [ ] **Test dating-sim functionality**
  - Open http://127.0.0.1:8080/fun/dating-sim/ in browser
  - Verify: opening screen displays
  - Verify: Start Game button works
  - Verify: character images load
  - Verify: dialogue options appear
  - Verify: relationship points update correctly
  - Verify: character transitions work
  - Verify: final screen shows highest relationship character
  - Check browser console for errors

---

## 📋 Upcoming Tasks

### Phase 3: Library Management

- [ ] **Audit unused JavaScript libraries**
  - Execute grep searches across all HTML files:
    - Search for: `mixItUp`, `.mix`, `#portfolio`
    - Search for: `lightbox`, `nivoLightbox`
    - Search for: `counterUp`, `.counter`
  - Check `archive/V1/` and `archive/V2/` for historical usage
  - Document findings in FUTURE_CONSIDERATIONS.md
  - Add inline comments to main.js marking "possibly unused" plugins
  - Make removal decision based on findings

- [ ] **jQuery version upgrade evaluation**
  - Create feature branch for testing
  - Test each plugin compatibility with jQuery 3.x
  - Document breaking changes
  - Consider vanilla JS alternatives if incompatibilities found

### Phase 4: CSS Modularization (Ambitious)

- [ ] **Split main.css into modular structure**
  - Create directory structure:
    - `assets/css/core/` (typography.css, utilities.css)
    - `assets/css/layout/` (navigation.css, hero.css, footer.css)
    - `assets/css/components/` (slideshow.css, timeline.css, portfolio.css, social-icons.css, forms.css)
    - `assets/css/pages/` (page-specific styles)
  - Extract ~25KB main.css into focused files by section
  - Convert main.css to @import manifest loading modules in correct cascade order
  - Add comprehensive section documentation to each file
  - Test thoroughly to ensure no style regressions

### Future Enhancements

- [ ] **AWS Deployment Setup**
  - Follow DEPLOYMENT_GUIDE.md to set up automated deployment
  - Create IAM user with S3 permissions
  - Add GitHub secrets for AWS credentials
  - Test deployment workflow

- [ ] **Create COMPONENT_GUIDE.md**
  - Document slideshow.js usage and API
  - Document youtubePlayer.js usage and API
  - Document dating-sim game engine usage
  - Include code examples for each component

- [ ] **Performance Optimization**
  - Run Lighthouse audit
  - Optimize image sizes
  - Evaluate CSS @import performance impact
  - Consider adding build step if metrics indicate need

- [ ] **Content Updates**
  - Portfolio restoration (if applicable)
  - Blog section implementation (if desired)
  - Update "About" section content

---

## ✅ Completed Tasks

### Phase 2: Code Extraction

- [x] **Extract YouTube player inline script from index.html**
  - Created `assets/js/components/youtubePlayer.js` (220 lines)
  - Added comprehensive JSDoc documentation
  - Removed 45 lines of inline code from index.html

- [x] **Extract slideshow inline script from index.html**
  - Created `assets/js/components/slideshow.js` (180 lines)
  - Converted inline onclick handlers to addEventListener
  - Added comprehensive JSDoc documentation
  - Removed 32 lines of inline code from index.html

- [x] **Extract landing page inline styles**
  - Created `fun/assets/css/fun-landing.css` (54 lines)
  - Created `xmas/assets/css/xmas-landing.css` (54 lines)
  - Created `xmas/assets/css/coming-soon.css` (37 lines)
  - Added section header documentation to each file

- [x] **Extract dating-sim inline CSS to external file**
  - Created `fun/dating-sim/assets/css/dating-sim.css` (180 lines)
  - Added 8 section headers documenting purpose and organization
  - Removed 140 lines of inline CSS from index.html

- [x] **Extract dating-sim inline JavaScript to modules**
  - Created `fun/dating-sim/assets/js/game-data.js` (120 lines)
  - Created `fun/dating-sim/assets/js/game-engine.js` (140 lines)
  - Split logic into data and engine modules
  - Added comprehensive JSDoc with type definitions
  - Removed 187 lines of inline JS from index.html

- [x] **Update dating-sim index.html references**
  - Removed all inline `<style>` and `<script>` blocks
  - Added external CSS and JS references
  - Verified correct load order (data before engine)

- [x] **Delete duplicate files**
  - Removed `assets/css/about.css` (3 duplicate rules)
  - Removed `assets/js/jquery-3.2.1.min.js` (unused)
  - Removed `assets/js/nivo-lightbox.js` (using .min version)
  - Removed duplicate script references from index.html

- [x] **Fix HTML validation errors**
  - Added doctypes to xmas/2022 and xmas/2023 index.html
  - Fixed empty src attribute in fun/dating-sim/index.html

- [x] **Run validation suite on dating-sim**
  - HTMLHint validation passed (0 errors)
  - Stylelint validation passed (auto-fixed property ordering)

- [x] **Update FILE_ORGANIZATION.md documentation**
  - Reflected removed about.css
  - Added new `assets/js/components/` directory
  - Documented all extracted landing page CSS files
  - Documented dating-sim assets structure

### Documentation

- [x] **Create FUTURE_CONSIDERATIONS.md**
  - Documented CSS import strategy decision
  - Documented unused libraries for future audit
  - Documented jQuery upgrade risks
  - Added source folder structure rationale
  - Added build step considerations

- [x] **Create DEPLOYMENT_GUIDE.md**
  - 500+ line comprehensive guide
  - IAM user setup with JSON policy
  - GitHub secrets configuration
  - Testing and troubleshooting
  - Security best practices

- [x] **Create GitHub Actions workflows**
  - `.github/workflows/deploy.yml` - Automated S3 deployment
  - `.github/workflows/validate.yml` - PR validation

- [x] **Update README.md**
  - Added automated deployment section
  - Added architecture notes
  - Linked to deployment guide

- [x] **Update QUICK_START.md**
  - Added deployment workflow step
  - Linked to deployment guide

---

## 📝 Notes

### Progress Summary

**Code Extraction (Phase 2):** ~90% Complete

- ✅ All inline JavaScript extracted and modularized
- ✅ All landing page CSS extracted
- ✅ Dating sim fully modularized
- ⏳ Awaiting functionality testing

**Documentation:** ~95% Complete

- ✅ All major guides created
- ✅ Component documentation (JSDoc) complete
- ⏳ COMPONENT_GUIDE.md pending (future)

**Remaining Work:**

- Library audit and cleanup (Phase 3)
- Main CSS modularization (Phase 4 - ambitious)
- AWS deployment setup (user manual steps)

### Reference Documents

- [CODING_STANDARDS.md](./CODING_STANDARDS.md) - Code style and conventions
- [FILE_ORGANIZATION.md](./FILE_ORGANIZATION.md) - Project structure
- [REFACTORING_ROADMAP.md](./REFACTORING_ROADMAP.md) - Overall strategy and phases
- [FUTURE_CONSIDERATIONS.md](./FUTURE_CONSIDERATIONS.md) - Deferred decisions
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - AWS S3 deployment setup
- [QUICK_START.md](./QUICK_START.md) - Developer onboarding

---

**This file is version controlled.** Update this TODO list as tasks are completed or new tasks are identified.
