# KGD-HCJC · Embassy

Digital presence of the **Kingdom of God — Holy Church of Jesus Christ**, in single-file V1.0.

Two seats: **Vienna** (Mission of Record) and **New York** (Seat at the Nations).
Five service lines: Pilgrim Tours · Exchange Programs · Educational Services · Travel · Political & Religious Consultation.

## Files

```
index.html       → The Embassy. Single HTML file with 30 routed sections.
app.js           → Hash router · 16-language i18n · Chancery simulation · back-to-top.
.nojekyll        → Tells GitHub Pages not to run Jekyll (required for files starting with _).
README.md        → This file.
DEPLOY.md        → GitHub Pages deployment walkthrough.
```

No external dependencies. No build step. No framework. No web fonts loaded from CDNs. No third-party trackers.

## Run locally

Open `index.html` in any modern browser. That's it.

For clean URLs during local development:
```
python3 -m http.server 8000
```
Then visit `http://localhost:8000/`.

## Deploy

See `DEPLOY.md` for the GitHub Pages walkthrough.

## Structure

Routes (hash-based · back-button works):

```
#home
#about        · about-mandate · about-doctrine · about-history · about-leadership · about-standing · about-vocations
#services     · services-pilgrim · services-exchange · services-education · services-travel · services-consultation
#seats        · seat-vienna · seat-new-york
#press        · press-communique · press-accreditation
#engage
#calendar
#advisories
#contact
#legal-treaty · legal-accessibility · legal-privacy · legal-imprint
#chancery
#design
#404          (fallback for any unknown hash)
```

## Design contract

- **Colour**: creamy white ground (`#FAF6EC`) · amber accent (`#C8762A`) · ceremonial gold (`#C9A84C`) · ink `#1A120A`.
- **Type**: Helvetica Neue (display + body) · Courier New (labels, metadata, references). Roles are absolute; mixing is a violation.
- **Sigil**: patriarchal cross (two horizontal bars, lower longer). Spins on the vertical axis at 14-second loop. `prefers-reduced-motion` stops all motion.
- **Motion**: restrained. Easing `cubic-bezier(0.2, 0.7, 0.2, 1)`. No parallax, no scroll-jacking, no autoplay.
- **Every page renders without JavaScript.** Interactivity enhances.

## Languages

Sixteen, excluding Hebrew: EN · DE · FR · ES · IT · PT · NL · PL · LA · EL · RU · UK · AR · ZH · JA · KO. Arabic switches the page to RTL. Core chrome is translated in all sixteen; long-form content falls back to English where translation is not yet complete.

## Licence

Text © KGD-HCJC · 2026. Sigil is a trademark of the Embassy. Source released under internal licence for the V1 launch; a public licence accompanies V1.1.

— *Embassy · v1.0.0 · 2026-04-19*
