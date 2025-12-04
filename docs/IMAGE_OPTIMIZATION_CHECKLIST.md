# Image Optimization Checklist - Quick Reference

**Execution Date:** December 3, 2025

---

## Phase 1: CRITICAL IMAGES (Do First!)

### [ ] Hero Image 1: hero-area.jpg

- **Current Size:** 829 KB
- **Target:** 300-350 KB
- **Tool:** Squoosh.app
- **Quality Setting:** 75
- **Status:** ⬜ Not started

### [ ] Hero Image 2: hero-area-med.jpg

- **Current Size:** 829 KB
- **Target:** 250-300 KB
- **Tool:** Squoosh.app
- **Quality Setting:** 72
- **Status:** ⬜ Not started

### [ ] Hero Image 3: hero-area-small.jpg

- **Current Size:** 829 KB
- **Target:** 150-200 KB
- **Tool:** Squoosh.app (resize to ~600px width)
- **Quality Setting:** 65
- **Status:** ⬜ Not started

### [ ] Portfolio Image: show-pics/2.jpg

- **Current Size:** 622 KB
- **Target:** 280-320 KB
- **Tool:** Squoosh.app
- **Quality Setting:** 75
- **Status:** ⬜ Not started

**Phase 1 Total Savings:** ~2,089 KB (67% reduction)

---

## Phase 2: SECONDARY IMAGES (Do Second)

### [ ] Logo: assets/img/logo.png

- **Current Size:** 177 KB
- **Target:** 40-60 KB (or 5-20 KB as SVG)
- **Option A (Easier):** TinyPNG.com
- **Option B (Better):** Vectorizer.io (PNG→SVG)
- **Status:** ⬜ Not started

### [ ] Background: assets/img/background/bg-1.jpg

- **Current Size:** 433 KB
- **Target:** 200-250 KB
- **Tool:** Squoosh.app
- **Quality Setting:** 70
- **Status:** ⬜ Not started

**Phase 2 Total Savings:** ~350 KB (57% reduction)

---

## File Paths Quick Reference

```
Hero Images:
├── assets/img/hero-area.jpg
├── assets/img/hero-area-med.jpg
└── assets/img/hero-area-small.jpg

Portfolio:
└── assets/img/show-pics/2.jpg

Logo:
└── assets/img/logo.png

Background:
└── assets/img/background/bg-1.jpg
```

---

## Tool Quick Links

| Tool           | URL                       | Best For        |
| -------------- | ------------------------- | --------------- |
| **Squoosh**    | https://squoosh.app       | JPEGs, resizing |
| **TinyPNG**    | https://tinypng.com       | Quick PNG/JPEG  |
| **Vectorizer** | https://www.vectorizer.io | PNG→SVG logos   |

---

## Quality Settings Reference

- **95-100:** Lossless (huge files, skip)
- **85-90:** Highest quality (acceptable, 20% reduction)
- **75-80:** High quality (recommended, 50% reduction) ✅
- **65-75:** Good quality (for images viewed at distance)
- **50-65:** Lower quality (backgrounds, thumbnails only)

---

## After Completing Optimization

- [ ] Replace all original files
- [ ] Open website: `npm run serve`
- [ ] Visual inspection at desktop/tablet/mobile
- [ ] Run validation: `npm run validate`
- [ ] Check file sizes match targets
- [ ] Commit to git with message: "docs: optimize images Phase 1 & 2"

---

## Expected Results

```
BEFORE:
├── Hero: 2,487 KB
├── show-pics/2.jpg: 622 KB
├── logo: 177 KB
├── background: 433 KB
└── TOTAL: 6,400 KB

AFTER:
├── Hero: 720 KB (29% of original)
├── show-pics/2.jpg: 300 KB (48% of original)
├── logo: 50 KB (28% of original)
├── background: 210 KB (49% of original)
└── TOTAL: 2,800 KB (44% of original) ✅
```

**Total Savings:** 3,600 KB (56% reduction)

---

## Pro Tips

✅ **Do:**

- Compare compressed with original side-by-side
- Test at different zoom levels
- Accept slight quality loss for massive file savings
- Use 75 quality as starting point (adjust if needed)

❌ **Don't:**

- Go below 60 quality (visible artifacts)
- Over-resize (logos especially)
- Skip the backup before replacing files
- Forget to test in browser after upload

---

## Status Tracking

```
Phase 1 (Critical):
  [ ] hero-area.jpg ........... 829 KB → 300 KB
  [ ] hero-area-med.jpg ....... 829 KB → 250 KB
  [ ] hero-area-small.jpg ..... 829 KB → 170 KB
  [ ] show-pics/2.jpg ......... 622 KB → 300 KB
  ─────────────────────────────────────────
  [ ] PHASE 1 COMPLETE ....... 2,089 KB saved

Phase 2 (High Priority):
  [ ] logo.png ................ 177 KB → 50 KB
  [ ] bg-1.jpg ................ 433 KB → 210 KB
  ─────────────────────────────────────────
  [ ] PHASE 2 COMPLETE ....... 350 KB saved

TOTAL: [ ] 2,439 KB saved (56% reduction)
```

---

## Questions?

Refer to: `docs/IMAGE_OPTIMIZATION_EXECUTION.md` for detailed step-by-step instructions.
