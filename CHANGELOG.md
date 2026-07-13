# Changelog

All notable changes to the Chicago Delegation web presence are documented here.
Format follows [keepachangelog.com](https://keepachangelog.com); newest entries at top.

## 2026.07.13

### Added
- Site icons: `favicon.ico`, `apple-touch-icon.png` (shield on ivory with even vertical inset), and 192/512 PWA icons + `site.webmanifest` so the shield appears when saving the site to a phone home screen
- Brand assets: `assets/brand/shield-clear.png` (crest on transparent, tight-cropped) and `assets/brand/flag-us.svg` (accurate 50-star US flag)
- Canonical link tags on every page pointing to knightsofalbachicago.org
- Contact page: General Services block (contact@knightsofalbachicago.org) above the Maestro
- Leadership: Vicepresidente cards for Peter Litton (Knight since 2025) and Norris Liu (Knight since 2023)
- Roster: Vicepresidente titles on Litton and Liu entries
- Italian translations for all new and changed copy

### Changed
- Leadership section moved from Become a Knight page to The Knights page, below the roster; retitled "The Leadership of the Chicago Delegation"
- Contact intro copy: "hospitality partner" removed from audience list
- Contact: "The Maestro" label → "The Chicago Maestro"
- Contact form: submit button now "Send to the Order"; submission composes an email to contact@knightsofalbachicago.org
- Roster lede and Gallery lede copy revised
- Roster: comma now sits inside the surname span, closing the kerning gap after the name

### Removed
- Concept Prototype banner from all pages (markup, styles, and i18n keys)

## 2026.06.25.2

### Added
- Multi-page architecture: each section is now a real URL
  - `/events/` — Events list (Upcoming / Past)
  - `/gallery/` — Gallery
  - `/become-a-knight/` — Knight application
  - `/the-knights/` — Roster
  - `/contact/` — Contact form
- Shared `assets/styles/main.css` (extracted from inline styles)
- Shared `assets/scripts/i18n.js` (extracted i18n dictionary + engine, MPA nav active-state logic)
- `build-pages.js` (Node generator; emits the six section pages from a shared chrome template)

### Changed
- Footer build-version line now legible: 13px white at 0.85 opacity (was 10px gold at 0.45 opacity)
- Event detail page (`events/2026-06-21-notte-del-solstizio/`) nav links updated to MPA URLs
- Internal nav now uses real `href` attributes instead of `data-page` SPA toggles

### Removed
- `index.html` monolith replaced by per-page files; old SPA `showPage()` logic retired

## 2026.06.25

### Added
- Event detail page: Notte del Solstizio d'Estate (`events/2026-06-21-notte-del-solstizio/`)
- Real event content: 6 web-optimized photos, bilingual flyer PDF, drink poster + thumbnail
- Italian translations for all new event copy
- Honored Guest callout for Chiara Boschis (E. Pira & Figli)
- Wines list, menu, drink-of-the-night feature, and photo gallery with lightbox
- "Souvenirs of the Chapter" download section (flyer + drink poster)
- `Development-SOP.md` — initial development standard operating procedure
- SOP rule: release archive filenames must include the version (`Chicago-Delegation-Site-vYYYY.MM.DD.zip`)
- `VERSION` file at repo root as single source of truth for build version
- `<meta name="build-version">` tag in each page's `<head>`
- Subtle build-version line below the footer motto on every page
- `CHANGELOG.md` (this file)

### Changed
- Events page restructured into Upcoming / Past sections with proper section heads
- "Calendar of Events · 2025–2026" eyebrow removed from Events page
- Asset directory reorganized: `assets/brand/` (crest, logos, ornaments) and `assets/heritage/` (general imagery)
- Home page "Upcoming gatherings" preview replaced with featured Recent Gathering card (Notte del Solstizio)
- Home page heading: "Upcoming gatherings" → "Recent gatherings"
- All asset paths in `index.html` updated to new directory structure

### Removed
- All 7 placeholder events from the Events page and home preview
- Dead Italian translation keys for removed placeholder events
