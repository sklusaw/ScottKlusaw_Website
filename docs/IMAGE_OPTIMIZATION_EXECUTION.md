# Phase 1 & 2: Image Optimization Execution Guide

**Date:** December 3, 2025  
**Status:** Ready for Manual Execution

---

## Overview

This guide provides step-by-step instructions for compressing images using free online tools. No software installation required.

**Total Estimated Time:** 15-20 minutes  
**Expected Savings:** 2 MB+ (60% reduction)

---

## Phase 1: Critical Images (Highest Priority)

### Image 1: assets/img/hero-area.jpg

**Current:** 829 KB  
**Target:** 300-350 KB  
**Priority:** 🔴 CRITICAL

**Steps:**

1. Go to https://squoosh.app
2. Click "Open image"
3. Select `assets/img/hero-area.jpg`
4. Ensure "MozJPEG" is selected (right panel)
5. Adjust quality slider to **75** (watch preview quality)
6. Ensure dimensions are ~1920x600px (check current size)
7. Click "Download"
8. Save as `hero-area.jpg` (overwrite original)

**Expected Result:** 829 KB → 280-320 KB

---

### Image 2: assets/img/hero-area-med.jpg

**Current:** 829 KB  
**Target:** 250-300 KB  
**Priority:** 🔴 CRITICAL

**Steps:**

1. Same as Image 1, but optimize for tablet (resize to ~1024x400px)
2. Quality slider: **72** (slightly lower for smaller viewport)
3. Download and save as `hero-area-med.jpg`

**Expected Result:** 829 KB → 220-260 KB

---

### Image 3: assets/img/hero-area-small.jpg

**Current:** 829 KB  
**Target:** 150-200 KB  
**Priority:** 🔴 CRITICAL

**Steps:**

1. Same as Image 1, but optimize for mobile (resize to ~600x300px)
2. Quality slider: **65** (lower quality for mobile is acceptable)
3. Download and save as `hero-area-small.jpg`

**Expected Result:** 829 KB → 140-180 KB

**Note:** After resizing, the file should be significantly smaller. If still large, reduce quality to 60.

---

### Image 4: assets/img/show-pics/2.jpg

**Current:** 622 KB  
**Target:** 280-320 KB  
**Priority:** 🔴 CRITICAL

**Steps:**

1. Go to https://squoosh.app
2. Open `assets/img/show-pics/2.jpg`
3. Resize to ~800-1000px width (matches portfolio grid)
4. Quality: **75**
5. Download and save as `2.jpg` in show-pics folder

**Expected Result:** 622 KB → 280-320 KB

---

### Phase 1 Summary

| Image               | Before       | After        | Savings            |
| ------------------- | ------------ | ------------ | ------------------ |
| hero-area.jpg       | 829 KB       | 300 KB       | 529 KB             |
| hero-area-med.jpg   | 829 KB       | 250 KB       | 579 KB             |
| hero-area-small.jpg | 829 KB       | 170 KB       | 659 KB             |
| show-pics/2.jpg     | 622 KB       | 300 KB       | 322 KB             |
| **TOTAL**           | **3,109 KB** | **1,020 KB** | **2,089 KB (67%)** |

---

## Phase 2: Secondary Images (High Priority)

### Image 5: assets/img/logo.png

**Current:** 177 KB  
**Target:** 40-60 KB (or 5-20 KB as SVG)  
**Priority:** 🟡 HIGH

#### Option A: PNG Compression (Easier)

**Steps:**

1. Go to https://tinypng.com
2. Drag and drop `assets/img/logo.png`
3. Click "Download"
4. Save as `logo.png`

**Expected Result:** 177 KB → 50-80 KB

---

#### Option B: Convert to SVG (Better, if possible)

**Steps:**

1. Go to https://www.photopea.com (online image editor, free)
2. Open `logo.png`
3. Check if logo has simple shapes (solid colors, clean lines)
4. If yes, use Trace feature:
   - Image menu → Trace Bitmap
   - Adjust threshold for clean output
   - Export as SVG

**Alternative SVG Tools:**

- https://www.vectorizer.io - Auto PNG→SVG
- https://convertio.co/png-svg/ - Quick conversion

**Expected Result:** 177 KB → 5-20 KB (if simple logo)

**Recommendation:** Try Option B first. If quality acceptable, use SVG. Otherwise, use Option A.

---

### Image 6: assets/img/background/bg-1.jpg

**Current:** 433 KB  
**Target:** 200-250 KB  
**Priority:** 🟡 HIGH

**Steps:**

1. Go to https://squoosh.app
2. Open `assets/img/background/bg-1.jpg`
3. Keep full dimensions (it's a background image)
4. Quality: **70** (lower quality acceptable for background)
5. Download and save as `bg-1.jpg`

**Expected Result:** 433 KB → 180-220 KB

---

### Phase 2 Summary

| Image     | Before     | After      | Savings          |
| --------- | ---------- | ---------- | ---------------- |
| logo.png  | 177 KB     | 50 KB      | 127 KB           |
| bg-1.jpg  | 433 KB     | 210 KB     | 223 KB           |
| **TOTAL** | **610 KB** | **260 KB** | **350 KB (57%)** |

---

## Quality Verification Checklist

After compressing each image, verify:

- [ ] **Visual Quality** - Image looks good at full size
- [ ] **No Artifacts** - No compression blocks or color banding
- [ ] **Text Readable** - If image contains text, still readable
- [ ] **Colors Accurate** - No significant color shifts
- [ ] **File Size** - Matches target range
- [ ] **File Type** - Correct format (JPG/PNG/SVG)

**Quick Preview Test:**

1. Open original and compressed side-by-side
2. Look for obvious degradation
3. At 75% quality, should be imperceptible to viewers

---

## Upload Instructions

### After Compressing All Images

1. **Backup original images** (Optional, but recommended)

   ```powershell
   # In PowerShell, create backup folder
   mkdir assets/img-backup
   Copy-Item -Path "assets/img/*" -Destination "assets/img-backup/" -Recurse
   ```

2. **Replace original files**
   - Drag compressed files to their respective folders
   - Overwrite original files
   - Verify files uploaded correctly

3. **Verify in browser**

   ```bash
   # Start server to test
   npm run serve

   # Or open index.html directly in browser
   ```

4. **Visual Inspection Checklist**
   - [ ] Hero image looks crisp (no artifacts)
   - [ ] Logo displays correctly
   - [ ] Background image looks smooth
   - [ ] Portfolio images appear clear
   - [ ] No broken image icons

5. **File Size Verification**
   ```powershell
   # Check compressed file sizes
   Get-ChildItem -Path "assets/img" -Recurse -File |
     ForEach-Object {
       Write-Host $_.FullName $([math]::Round($_.Length/1KB, 2))"KB"
     }
   ```

---

## Tools Used

### Squoosh (Google)

- **URL:** https://squoosh.app
- **Best for:** JPEG compression, resizing
- **Formats:** JPEG, PNG, WebP
- **Quality:** Excellent visual quality control

### TinyPNG/TinyJPG

- **URL:** https://tinypng.com
- **Best for:** Quick PNG/JPEG optimization
- **Quality:** Lossy compression, good quality
- **Batch:** Can upload multiple files

### Vectorizer.io

- **URL:** https://www.vectorizer.io
- **Best for:** PNG to SVG conversion
- **Quality:** Auto-tracing, decent for simple logos

### Photopea

- **URL:** https://www.photopea.com
- **Best for:** Advanced editing, manual SVG conversion
- **Quality:** Professional results, more control

---

## Troubleshooting

### Squoosh: Image Won't Open

- Try refreshing page
- Check file size (>50 MB may not work)
- Try different browser

### Quality Too Poor

- Reduce quality slider less (try 80 instead of 75)
- Some image types need different quality settings
- Compare original and compressed side-by-side

### File Still Too Large

- For JPEGs: Reduce quality further (try 60-65)
- For PNGs: Use TinyPNG instead
- For backgrounds: Can be lower quality (70 is fine)

### Logo SVG Conversion Not Working

- Logo may have complex gradients or effects
- Stick with PNG compression (Option A)
- Quality loss is often acceptable for logos

---

## Performance Impact After Optimization

### Expected Results

**Before:**

- Hero images: 2.5 MB
- All images: 6.4 MB
- Load time (3G): ~86 seconds

**After Phase 1 & 2:**

- Hero images: ~700 KB
- All images: ~3.4 MB
- Load time (3G): ~46 seconds (46% faster) ✅

---

## Next Steps After Completing Phases 1 & 2

1. ✅ Compress images (this guide)
2. ✅ Upload to repository
3. ⏳ Run Lighthouse audit
4. ⏳ Test on real devices (mobile, tablet, desktop)
5. ⏳ Monitor real user metrics

---

## Command Reference

### Test locally (after replacing images)

```bash
npm run serve
# Open http://127.0.0.1:8080 in browser
```

### Validate all files

```bash
npm run validate
```

### Check image file sizes

```powershell
Get-ChildItem -Path "assets/img" -Recurse -File |
  Select-Object Name, @{Name="SizeKB";Expression={[math]::Round($_.Length/1KB,2)}} |
  Sort-Object SizeKB -Descending
```

---

## Support

If images look worse after compression:

1. Try higher quality setting (75 → 80)
2. Reduce resize dimensions slightly
3. Try different tool (TinyPNG instead of Squoosh)
4. Compare with original in image viewer

**Remember:** Small quality loss is acceptable if file size cut in half.
