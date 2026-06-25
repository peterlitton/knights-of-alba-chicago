# Chicago Delegation — Web Presence

A web presence for the Chicago Delegation of the **Ordine dei Cavalieri del Tartufo e dei Vini d'Alba**.

## Structure

```
site/
├── index.html                              Main single-page site (Home, Events list, Gallery, Become a Knight, Roster, Contact)
│
├── assets/
│   ├── brand/                              Official Order brand assets (crest, logo, ornaments)
│   └── heritage/                           General Order imagery (castle, truffles, Barolo, etc.)
│
└── events/
    └── 2026-06-21-notte-del-solstizio/     One folder per event, dated for chronological ordering
        ├── index.html                      Full event recap page
        ├── photos/                         Web-optimized photos (1600px max, ~85% JPEG)
        ├── notte-del-solstizio-flyer.pdf   Downloadable event programme
        ├── royal-summer-knight-poster.png  Downloadable cocktail poster (full size)
        └── royal-summer-knight-poster-thumb.jpeg  Thumbnail used on the page
```

## Adding a new event

1. Create a folder: `events/YYYY-MM-DD-slug/` (date prefix sorts chronologically)
2. Add `index.html` based on the existing event page as a template
3. Add `photos/` with web-optimized images
4. Add a card for the event on the main `index.html`:
   - **Upcoming** before the event: in the events page Upcoming section
   - **Past** after the event: in the events page Past Events section (and as the featured card on the home page)

## Languages

The site is bilingual EN/IT. The language switcher (flag toggle) lives in the top strip on every page. Italian translations are inlined in each page's `<script>` block as a dictionary keyed by `data-i18n` attributes on translatable elements.

To translate new content:
1. Add `data-i18n="my.key"` (or `data-i18n-html="my.key"` for content with markup) to the HTML element
2. Add the Italian translation to the `I18N.it` dictionary in the page's `<script>` block

## Hosting

The site is static — every page is plain HTML/CSS/JS, no build step, no server. It deploys cleanly on Render Static Sites (or any static host) by pointing the publish directory at the root of the repo.

## Notes

The **Concept Prototype** banner in the bottom-right corner identifies this as a demonstrative mockup. It can be removed by deleting the `<div class="demo-banner">…</div>` element from each page once the site goes to production.
