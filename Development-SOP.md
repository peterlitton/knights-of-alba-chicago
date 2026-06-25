# Chicago Delegation — Development SOP

**Project:** Chicago Delegation web presence
**Operator:** Peter (with Claude)
**Last revised:** 2026-06-25

---

## Why this exists

Even a solo, static-site project benefits from a paper trail: knowing what changed, when, and why; being able to roll back; not stepping on past decisions. This document is the lightest discipline that gives us those things.

It does **not** try to anticipate every situation. It's a v1 — additive over time as we learn what bites.

---

## Versioning

We use **CalVer** in the form `YYYY.MM.DD`, with an optional patch suffix.

- First push of a day: `2026.06.25`
- Subsequent pushes the same day: `2026.06.25.2`, `2026.06.25.3`

Why CalVer over SemVer: a marketing site doesn't have API contracts. "Major / minor / patch" carries no useful information here. CalVer reads at a glance and matches our event-folder naming.

**Where the version appears:**

1. **Footer of every page** — small line below the motto. Subtle, always present.
2. **`<meta name="build-version">`** in each page's `<head>` — machine-readable, for support and debugging.
3. **`VERSION` file at the repo root** — single source of truth. The footer and meta tag are updated to match.
4. **Release archive filename** — every zip / tarball delivered as a release must carry the version: `Chicago-Delegation-Site-vYYYY.MM.DD.zip`. Never ship an unversioned archive — without the version in the filename, downloaded copies collide and version history is lost on disk.

**How to bump:** edit the `VERSION` file, then update the footer string and meta tag in `index.html` and any event detail page that ships in the same release. Name the deliverable archive to match. Manual for now; can be scripted later.

---

## Commit messages

Use a short prefix for grep-ability:

```
feat:    new feature, page, or section
fix:     bug fix
copy:    text or wording change only
content: adding events, photos, or other content
style:   CSS / visual change only
docs:    documentation (this file, README, CHANGELOG)
chore:   version bumps, dependency tidy-ups
revert:  undoing a prior commit
```

One change per commit where possible. If a single push touches two unrelated things, split them.

**Tag releases.** When we ship a version that's meaningfully different (new event, new page, major copy revision), tag it: `git tag v2026.06.25 && git push --tags`. Patch releases for typos don't need tags.

---

## Changelog

`CHANGELOG.md` at the repo root. Newest entries at top, grouped by Added / Changed / Fixed / Removed:

```
## 2026.06.25
### Added
- Event detail page: Notte del Solstizio d'Estate
- /events/ directory structure for event content
- Italian translations for new event copy

### Changed
- Events page restructured: Upcoming / Past sections
- Asset directory reorganized: brand/ and heritage/

### Removed
- All placeholder events
```

Update the changelog **in the same commit** as the change. Don't let it drift.

---

## Deploy workflow

Production: `main` branch on GitHub → Render Static Site → live at the configured URL.

There is no staging. There is no build step. A commit to `main` deploys within ~60 seconds.

### Pre-ship checklist

Before any push to `main`:

- The change works in a real browser (Chrome and Safari), at desktop and mobile widths
- No console errors on the changed page
- If i18n keys were touched: both EN and IT render correctly
- If a new event or photo: links resolve, photos load
- `VERSION` file is bumped
- `CHANGELOG.md` has an entry under the new version
- Footer version string and `<meta>` tag match `VERSION`
- If a release archive is being shipped: filename includes the version (`Chicago-Delegation-Site-vYYYY.MM.DD.zip`)
- Commit message follows the prefix convention

### After pushing

1. Open the live URL; confirm the new version string appears in the footer
2. Click through the changed page(s) on the live site
3. If a deploy fails: check Render's deploy logs (dashboard → service → Events tab)

### Rolling back

`git revert <bad-commit-sha>` on `main`, push, Render redeploys to the reverted state. Path of least confusion. Force-pushing or resetting `main` works too but is more dangerous.

---

## Project conventions

### File structure

```
site/
├── index.html              Main single-page site (Home / Events / Gallery / Knight / Roster / Contact)
├── VERSION                 Current version string
├── CHANGELOG.md            Release history
├── DEVELOPMENT.md          This file
├── README.md               Project overview
├── assets/
│   ├── brand/              Crest, logos, ornaments
│   └── heritage/           General Order imagery
└── events/
    └── YYYY-MM-DD-slug/    One folder per event
        ├── index.html      Event recap page
        ├── photos/         Web-optimized photos
        └── ...             Downloads (flyers, posters, menus)
```

### Adding a new event

1. Create `events/YYYY-MM-DD-slug/` (date prefix sorts chronologically)
2. Copy an existing event's `index.html` as a template; update title, date, content, i18n dictionary
3. Add web-optimized photos to `photos/` (see standards below)
4. Update the main `index.html`:
   - If upcoming: add to Events page → Upcoming section
   - If past: add card to Events page → Past Events section, **and** as the featured card on the home page if it's the most recent

### Photo optimization standards

Cap the larger dimension at **1600px**. JPEG quality **82%**. Strip EXIF metadata.

```bash
mogrify -resize "1600x1600>" -quality 82 -strip *.jpeg
```

Keep originals offline (not in the repo) so we can re-crop or re-export later. The repo holds web-ready images only.

### Working with translations (i18n)

- Translatable elements use `data-i18n="key"` (text-only), `data-i18n-html="key"` (markup), or `data-i18n-placeholder="key"` (form placeholders)
- Italian translations live in the `I18N.it` dictionary in each page's `<script>` block
- Key naming: `section.element` (e.g., `hero.title`, `nav.events`, `evpage.solstizio.body`)
- **Don't translate:** proper nouns (Knights' surnames, place names, wine designations), Italian-origin terms already in the parent Order's vocabulary (Maestro, Cavaliere, Ordine), or culturally-loaded wordplay
- When adding a new translatable element, add the Italian translation **in the same commit** — don't let translation debt accumulate

**Native-speaker review:** any Italian copy on this site should be reviewed by a native speaker before it goes truly public. Claude's Italian is competent but not idiomatic on brand-voice questions.

### Asset paths

- From `index.html` (repo root): `assets/...` and `events/...`
- From an event detail page (one level deep): `../../assets/...`
- Never use absolute paths (`/assets/...`) — they break local previews and Render preview URLs

---

## Working with Claude

A few notes on how Claude operates in this environment, learned the hard way on other projects.

### Production state vs working state

What's deployed on Render is the source of truth — not what's in this chat or in Claude's working tree. Before Claude claims "the site does X," it should verify against the live URL or the latest tarball in `/mnt/user-data/outputs`. The sandbox filesystem resets between turns, so Claude's in-progress edits are **not durable** across conversations.

### One tarball per turn

When Claude ships a build, it's one zip containing the full `site/` directory, ready to drag-drop onto the repo. No standalone files alongside the archive; no splitting a turn's work into multiple downloads. If a turn touches three files, all three are in the same zip.

### Don't invent scope

When a request is ambiguous, do the literal smallest thing that satisfies it. Don't add directories, READMEs, deploy scripts, or "next steps" sections that weren't asked for. Ask one clarifying question instead.

### "Reassess" means something was missed

If Peter says "reassess" or "step back," that's a signal that something was missed — not a request to re-state the conclusion with different framing. Re-read with fresh eyes and look for what was missed. If nothing new turns up, say so explicitly and ask what specifically prompted the pushback.

### When two iterations of the same fix don't land

After two failed attempts at the same shape of change, stop. The next move is not a third attempt — it's "step back, restate the problem, consider whether the foundation is sound." Often the right answer is a different shape entirely.

### Don't claim confidence without evidence

If Claude is about to write "I'm confident this works" without something it can paste to support that, the right move is to write less and check more. "Confident" is a quantitative claim; it should mean the pre-ship checklist passed with evidence.

---

## Revision history

Dated, additive. Earlier entries stay in place.

**2026-06-25 — v1.** Initial SOP. Establishes CalVer versioning, footer + meta-tag build identification, commit message conventions, changelog format, deploy workflow, project conventions (file structure, events, photos, i18n, paths), pre-ship checklist, and operator notes on working with Claude. Pulled selectively from the PM-Dashboard SOP (canonical case there: 2026-05-10 deploy cycle); the Chicago Delegation context is much lighter — no live operations, no real-time data, no authentication, no per-user state — so the gates / production-triage / shell-quoting / architecture-decision sections were left out. Will add as we learn what bites.

**2026-06-25 — Version rule extended to release archives.** Operator-directed. Triggered by the v1 ship: the SOP specified the version appear in the footer, meta tag, and VERSION file — but the deliverable archive was shipped as `Chicago-Delegation-Site-Prototype.zip` (unversioned). Without the version in the filename, downloaded copies overwrite each other on disk and the operator loses local history of what was shipped when. Two deltas, no new section: (1) added a fourth bullet under "Where the version appears" requiring versioned archive filenames in the form `Chicago-Delegation-Site-vYYYY.MM.DD.zip`; (2) added the corresponding line to the pre-ship checklist. Canonical case: v1 ship of 2026-06-25.
