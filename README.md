# tashasho.github.io

Personal portfolio site for **Bhumika Marmat** — Mathematics & Computing, IIT Kharagpur.

Live at [tashasho.github.io](https://tashasho.github.io)

## Stack

- Pure HTML/CSS/JS — no build step, no dependencies
- Hosted on GitHub Pages
- Fonts: Playfair Display, DM Mono, DM Sans (Google Fonts)

## Features

- Animated gradient mesh background with floating orbs
- Multi-color particle system with mouse interaction
- Scrollytelling with word-by-word title reveals
- Scroll-reactive background color tinting per section
- Gradient scroll progress bar (pink → violet → blue)
- Cursor glow effect
- Expressive typography with character animations
- Animated stat counters
- Tabbed project categories (VC Tools / Startup Tools / Side Builds)
- Substack writing section
- Mobile-responsive with hamburger nav
- Print stylesheet

## Editing Content

Everything lives in `index.html`. To update content:

1. Clone the repo
2. Edit `index.html` directly
3. Push to `main` — GitHub Pages deploys automatically

### Adding Images

Place images in the `images/` folder, then reference them in `index.html`:

```html
<!-- Profile photo (uncomment in hero or about section) -->
<img class="profile-img" src="images/profile.jpg" alt="Bhumika"/>

<!-- Section banner -->
<div class="section-img"><img src="images/banner.jpg" alt="description"/></div>

<!-- Project screenshot -->
<img class="tool-img" src="images/nexus9-screenshot.png" alt="Nexus-9"/>
```

Search for `TO ADD IMAGE` or `TO ADD PHOTO` in the HTML to find all placeholder spots.

### Adding Substack Posts

Find the `<!-- WRITING -->` section and update the `.writing-card` elements:
1. Change the `href` to your post URL
2. Update `.wc-title` with the post title
3. Update `.wc-desc` with a one-line summary

### Adding New Projects

Copy an existing `.tool-item` block and paste it into the appropriate tab panel:
- `#panel-vc-tools` — VC & fund-related tools
- `#panel-startup-tools` — Founder/startup tools
- `#panel-side-builds` — Everything else

## Structure

```
.
├── index.html      # The entire site
├── 404.html        # Custom 404 page
├── images/         # Your images (profile, screenshots, banners)
├── .nojekyll       # Bypass Jekyll processing
└── README.md       # This file
```
