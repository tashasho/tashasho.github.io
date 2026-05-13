# Portfolio Handdown — Bhumika Marmat

**Date:** 2026-05-13
**Live URL:** https://tashasho.github.io
**Repo:** GitHub Pages repo under `tashasho` account
**Main file:** `/index.html` (single-file, ~2060 lines — all CSS + HTML + JS inline, no build step)

---

## 1. Project Overview

A personal portfolio site for Bhumika Marmat (IIT Kharagpur, Math & CS, Class of 2026) themed around Stardew Valley / indie game pixel art. It's a single HTML file with no framework, no bundler, no dependencies beyond Google Fonts. Deployed on GitHub Pages.

### Design Language
- **Theme:** Stardew Valley pixel art RPG
- **Palette:** Deep purple bg (`#2a1f3d`), parchment panels (`#f5e6c8`), pink accent (`#e85d75`), orange (`#ff9b4a`), gold (`#f5c842`), green (`#5a8f4a`), blue (`#4a7fb5`)
- **Fonts:** `Press Start 2P` (headings/labels), `VT323` (retro body), `DM Sans` (readable body text)
- **Icons:** 109 Stardew Valley PNGs/GIFs in `/images/` (sourced from `cupidbity/stardew-valley-file-icon-theme`)
- **Cursor:** Custom pixel arrow (inline SVG data URI)

### Key Features
- CSS-only starry sky with parallax on scroll
- 20 floating draggable Stardew icons (mouse + touch)
- Scroll progress bar (gold-to-pink gradient)
- RPG stat bars with animated fill
- Typewriter effect cycling roles ("VC Intern", "Tool Builder", "Math Nerd", "Substack Writer")
- IntersectionObserver scroll-triggered reveals
- Expand/collapse toggles (23 throughout the site) using `toggleDetail()` JS function
- Skills inventory marquee (infinite horizontal scroll)
- Tab-based project categories (VC Tools / Startup Tools / Side Builds)
- Auto-hiding navbar on scroll down
- Pixel border technique using CSS `box-shadow`
- Mobile responsive (breakpoints at 768px, 480px)

---

## 2. Site Structure (Sections in order)

| Section | Nav Label | CSS ID | Icon | Description |
|---------|-----------|--------|------|-------------|
| Hero | — | `#hero` | Stardrop.png | Player profile card with name, typing effect, stat bars, CTAs |
| Skills Bar | — | (no id) | Various | Scrolling marquee of 18 skills with icons |
| Experience | Quest Log | `#experience` | Farm_Computer.png | 3 VC internship entries as quest cards |
| Tools | Crafted | `#tools` | Iridium_Axe.png | Tabbed project showcase (3 tabs, ~6 projects) |
| Research | Library | `#research` | Book.png | 3 research papers/projects |
| Writing | Notes | `#writing` | Secret_Note.png | 6 Substack articles as "secret notes" |
| Side Quests | Side Quests | `#sidequests` | Quests.png | 5 miscellaneous activities |
| About | Bio | `#about` | Scroll.png | Character bio card |
| Contact | Mail | `#contact` | Mail.png | Contact card with email, LinkedIn, GitHub, Substack, Calendly |
| Footer | — | — | Cat.gif | Copyright + IIT KGP |

---

## 3. File Structure

```
/portfolio/
  index.html          # THE site (all CSS/HTML/JS inline, ~2060 lines)
  404.html             # Custom 404 page (dark + pink theme)
  README.md            # Repo documentation
  .nojekyll            # Bypass Jekyll on GitHub Pages
  .git/                # Git repo
  .claude/             # Claude workspace config
  images/              # 109 Stardew Valley icons (PNGs + GIFs)
    Cat.gif, Dog.gif, Prismatic_Slime.gif, etc.
    autumn/            # 17 seasonal variant icons
    winter/            # 17 seasonal variant icons
  src/                 # LEFTOVER from abandoned React conversion — SHOULD BE DELETED
    App.tsx
    components/
    data/
    hooks/
    main.tsx
    styles/
    vite-env.d.ts
```

---

## 4. What Was Completed This Session

1. **Substack articles populated** — Replaced all 6 "Post Title Here" placeholders in the Writing section with real article titles and descriptions:
   - Note 01: "Your VC Portfolio Model Is Lying to You About Risk"
   - Note 02: "Why Biased Investors Make Founders Worse"
   - Note 03: "The Companies That Should Be Funded But Aren't"
   - Note 04: "What the Room Is Actually Thinking When You Walk In"
   - Note 05: "The Traits That Actually Predict Whether You'll Still Be Building in Two Years"
   - Note 06: "The Anxious Founder Who Was Right on Time"

2. **Email updated** — All 4 occurrences of `bhumika.marmat@gmail.com` changed to `tashashoms@gmail.com`

3. **Achievements section removed** — Entire Awards/Achievements HTML block and its nav link deleted

4. **Calendly placeholder added** — "Book a Chat" button added in two places (hero CTA row + contact card), both linking to `#CALENDLY_LINK`

---

## 5. What's Pending / Not Done

### Must-do before pushing

| Task | Details |
|------|---------|
| **Replace Calendly placeholder** | Find-and-replace `#CALENDLY_LINK` with actual Calendly URL (2 occurrences in index.html) |
| **Delete `src/` directory** | Leftover from abandoned React conversion. Run `rm -rf src/` before pushing. |

### Requested but not yet started

| Task | Details |
|------|---------|
| **Visual redesign — break boxy layouts** | User wants less boxy card-based layouts, more organic/collage pixel art aesthetic. Referenced: (1) image of pixel-art girl coding with orange/blue/black collage, (2) medium.com/design-bootcamp/web-design-style-website-with-pixels-757e41ac447e, (3) dribbble.com/shots/26424915-Hackathon-Website-Design. Key ask: "dont make everything very boxy, use claude design to develop cool pixel animations and graphics, create pixel designs of me doing stuff." |
| **Add pixel character illustrations** | User wants custom pixel art scenes of Bhumika doing various activities (coding, presenting, etc.) integrated into the site. The reference image shows a punk/collage pixel aesthetic — orange bg, blue/red geometric shards, pixel art character at a computer with code on screen. |
| **Push to GitHub** | Cannot push from sandbox (403 blocked). User needs to run locally: `cd ~/portfolio && git add -A && git commit -m "msg" && git push origin main` |

### Design direction for the visual redesign (from user's references)

The user wants to move **away** from the current uniform Stardew Valley parchment-card grid toward something more like:

- **Collage/editorial pixel art** — overlapping layers, torn edges, geometric color blocks (orange, blue, black, red)
- **Mixed media feel** — pixel art characters layered over abstract geometric backgrounds
- **Less structured grid** — organic placement, varied section sizes, diagonal elements, overlapping visuals
- **Custom pixel character scenes** — "me doing stuff" (coding, reading, presenting, etc.)
- **Hackathon/tech aesthetic** — bold typography, neon accents, code snippets as decorative elements
- **References:** lamalama.nl, sasha.works, y-n10.com, WorkOS Launch Week (from the Medium article)

---

## 6. Technical Notes

### CSS Architecture (inside `<style>` tag, lines 21–1088)
- CSS variables at `:root` (lines 25-44)
- Scroll progress bar (65-73)
- Starry sky / stars (78-93)
- Floating icons + drag (98-119)
- Pixel border mixins (124-145)
- Nav (150-197)
- Hero / player card (211-354)
- Skills marquee (358-387)
- Section base styles (392-430)
- Quest/experience cards (434-527)
- Tools/projects + tabs (531-626)
- Research cards (631-684)
- Writing/secret notes (689-762)
- Awards (764-819) — HTML removed but CSS still present, can be cleaned up
- Side quests (824-870)
- About card (875-902)
- Contact card (907-968)
- Footer (973-994)
- Reveal animations (999-1008)
- Responsive breakpoints (1013-1039)
- Toggle system (1044-1073)
- Print styles (1078-1088)

### JavaScript (inside `<script>` tag, lines 1731–2057)
- Star generation (1735-1752)
- Floating icons + drag handlers (1757-1871)
- Scroll progress (1876-1882)
- Typewriter effect (1887-1924)
- Nav hide/show + hamburger (1929-1954)
- IntersectionObserver reveals (1959-1974)
- Tab switching (1979-1994)
- Stat bar animation (1999-2015)
- Smooth anchor scroll (2020-2031)
- Parallax stars (2036-2041)
- Toggle details function (2046-2056)

### Deployment
- GitHub Pages at `tashasho.github.io`
- No build step — just push `index.html` + `images/` + `404.html`
- `.nojekyll` file present to skip Jekyll processing
- Cannot push from Claude sandbox (GitHub API blocked by proxy)
- Push command: `cd ~/portfolio && git add -A && git commit -m "update" && git push origin main`

### Known Quirks
- Awards CSS (lines 764-819) is still in the stylesheet even though the HTML section was removed. Safe to delete for cleanliness.
- `src/` directory is leftover from an abandoned React+Vite conversion attempt. Contains App.tsx, components, etc. Should be deleted.
- Substack URLs use the `substack.com/home/post/p-XXXXX` format (numeric post IDs)
- Resume link points to `Bhumika_Marmat_Resume_VC.pdf` — this file doesn't exist in the repo yet

---

## 7. Quick Reference — Common Edits

**Change email:**
```bash
# Search for current email
grep -n "tashashoms@gmail.com" index.html
# 4 occurrences: hero mailto, contact mailto, contact card mailto, contact display text
```

**Replace Calendly placeholder:**
```bash
sed -i 's|#CALENDLY_LINK|https://calendly.com/YOUR_LINK|g' index.html
```

**Add a new Substack article:**
Duplicate one of the `<a class="secret-note">` blocks in the Writing section (~line 1521-1561), update the href, note number, title, and description.

**Add a new floating icon:**
Add an entry to the `icons` array in the floating icons JS (~line 1759):
```js
{ src: 'images/YourIcon.png', size: 36 },
```

**Change typing phrases:**
Edit the `phrases` array in the typewriter JS (~line 1888):
```js
var phrases = ['VC Intern', 'Tool Builder', 'Math Nerd', 'Substack Writer'];
```

---

## 8. Version History

| Version | Description |
|---------|-------------|
| V1-V3 | Dark pink/black theme with scrollytelling, text animations |
| V4 | SVG graphics, glassmorphism, pop colors |
| V5 | Complete rewrite to Stardew Valley pixel art theme |
| V6 | Added 23 expand/collapse toggles, minimized visible text, increased spacing |
| V6.1 | Removed achievements, added real Substack titles, email → tashashoms@gmail.com, Calendly placeholder |
| V7 (pending) | Visual redesign: break boxy layouts, collage pixel art aesthetic, custom character illustrations |
