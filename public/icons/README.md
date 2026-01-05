# Icons Directory

This directory contains SVG icons used throughout the portfolio website.

## Current Icons

All icons are currently **placeholder SVGs** that need to be replaced with your custom designs.

### Service Icons (64x64px recommended)

`business-intelligence.svg` - Business Intelligence service icon
`data-engineering.svg` - Data Engineering service icon  
`web-development.svg` - Web Development service icon
`analytics.svg` - Analytics Instrumentation service icon
`consulting.svg` - Consulting service icon
`education.svg` - Educational Services & Workshops icon

### UI Icons

- `checkmark.svg` - Success/completion indicator (used in PDF download form)

## Replacing Icons

To replace a placeholder icon with your custom design:

1. **Create or obtain your icon** (SVG format recommended for scalability)
2. **Name it exactly** as shown above (e.g., `business-intelligence.svg`)
3. **Replace the file** in this directory
4. **Recommended specs:**
   - Format: SVG (preferred) or PNG
   - Size: 64x64px for service icons, 32x32px for UI icons
   - Style: Match your brand aesthetic
   - Color: Can be full color or monochrome

## Icon Sources

You can create or find icons from:

- **Custom design:** Figma, Illustrator, Sketch
- **Icon libraries:** Heroicons, Lucide, Feather Icons, Font Awesome
- **AI generation:** Midjourney, DALL-E, Stable Diffusion
- **Free resources:** The Noun Project, Flaticon, Icons8

## Technical Notes

- Icons are referenced in `src/config.js` as `/icons/[filename].svg`
- Service icons are displayed at 48px (w-12 h-12) on the Services page
- Checkmark icon is displayed at 32px (w-8 h-8) in the PDF download form
- All icons should have proper alt text for accessibility

