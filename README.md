# Defender Security Services — Website

A complete, professional multi-page static website for **Defender Security Services**, based in Dehradun, Uttarakhand.

## 📁 File Structure

```
defender-website/
├── index.html       → Home page (Hero, Mission, Services, Stats, Clients, FAQ, Contact)
├── services.html    → Detailed services page (6 services with descriptions)
├── about.html       → About Us (Story, Values, Team, Timeline, Certifications)
├── contact.html     → Contact page (Form, Map, Quick contact methods)
├── jobs.html        → Careers page (Job listings + Application form)
└── README.md        → This file
```

## 🌐 Deploy on GitHub Pages

1. **Create a new GitHub repository** (e.g. `defender-security-website`)
2. **Upload all HTML files** to the repository root
3. Go to **Settings → Pages**
4. Under "Source", select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save** — your site will be live at:
   `https://yourusername.github.io/defender-security-website/`

## ✅ Features

- **Fully responsive** — mobile, tablet, and desktop
- **Dark military aesthetic** — deep navy with gold accents (Bebas Neue + Barlow fonts)
- **5 full pages** — Home, Services, About, Contact, Jobs
- **Real company data** pulled from defendersecurityservices.in:
  - Address: Near Kargi Chowk, Dehradun, Uttarakhand 248001
  - Phone: +91 8077942213 / 0135 2522520
  - Email: Defenderuttarakhand@gmail.com
  - WhatsApp link: +918077942213
  - Logo from official site
- **Interactive elements**:
  - Mobile hamburger menu
  - Scroll-triggered fade-in animations
  - FAQ accordion
  - Animated client marquee / ticker
  - Contact & job application forms with success feedback
  - Sticky WhatsApp floating button
- **Google Maps embed** for office location
- **No dependencies** — pure HTML + CSS + vanilla JS (no build tools needed)

## 🔧 Customization

### Update Contact Details
Search for these strings across all files and replace as needed:
- `8077942213` → phone number
- `Defenderuttarakhand@gmail.com` → email address
- `Kargi Chowk, Dehradun` → address

### Update Google Maps Embed
In `contact.html`, replace the `<iframe src="...">` URL with your own Google Maps embed link:
1. Go to [Google Maps](https://maps.google.com)
2. Search your address
3. Click Share → Embed a map → Copy HTML

### Add/Replace Images
The hero image and logo are loaded from external CDN URLs. To use local images:
1. Place image files in a folder (e.g. `assets/`)
2. Replace URLs like `https://img1.wsimg.com/...` with `assets/your-image.jpg`

### Update Client Names
In `index.html`, find the `clients-marquee` div and edit the `.client-item` entries to reflect actual client names.

## 📱 Pages Overview

| Page | Description |
|------|-------------|
| `index.html` | Full homepage with hero, mission, services preview, stats, client marquee, FAQ, CTA |
| `services.html` | 6 detailed service sections with features list |
| `about.html` | Company story, values, team, milestone timeline, certifications |
| `contact.html` | Contact form, info blocks, Google Maps embed, quick contact |
| `jobs.html` | Employee benefits, 6 job listings, job application form |

## 🎨 Design System

| Token | Value |
|-------|-------|
| Navy (Background) | `#0a0e1a` |
| Gold (Accent) | `#c9a84c` |
| Body Font | Barlow (Google Fonts) |
| Display Font | Bebas Neue (Google Fonts) |
| Condensed Font | Barlow Condensed (Google Fonts) |

---

© 2025 Defender Security Services | Near Kargi Chowk, Dehradun, Uttarakhand 248001
