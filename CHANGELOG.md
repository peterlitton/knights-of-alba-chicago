# Changelog

All notable changes to the Chicago Delegation web presence are documented here.
Format follows [keepachangelog.com](https://keepachangelog.com); newest entries at top.

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
