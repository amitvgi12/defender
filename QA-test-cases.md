# Defender Security Services — QA Test Cases
**Version:** 1.0  **Date:** April 2026  **Tester:** ___________  
**Live URL:** https://amitvgi12.github.io/defender/

---

## TEST SUITE SUMMARY
| Suite | Tests | Pass | Fail | Blocked |
|-------|-------|------|------|---------|
| TC-01 Navigation | 12 | | | |
| TC-02 Homepage | 10 | | | |
| TC-03 Services Page | 6 | | | |
| TC-04 About Page | 8 | | | |
| TC-05 Contact Page | 10 | | | |
| TC-06 Jobs Page | 8 | | | |
| TC-07 Responsiveness | 8 | | | |
| TC-08 Accessibility | 8 | | | |
| TC-09 Performance | 6 | | | |
| TC-10 Security/SEO | 6 | | | |
| **TOTAL** | **82** | | | |

---

## TC-01 NAVIGATION

| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|-----------------|--------|
| TC-01-01 | Nav logo links to home | Click logo from any page | Redirects to index.html | |
| TC-01-02 | All nav links work | Click each: Home, Services, About, Jobs, Contact | Correct page loads | |
| TC-01-03 | Active state on nav | Visit each page | Current page link highlighted gold | |
| TC-01-04 | Phone link in nav | Click "+91 8077942213" in nav | Opens phone dialer with +918077942213 | |
| TC-01-05 | "Get a Quote" nav button | Click btn | Navigates to contact.html | |
| TC-01-06 | Hamburger visible on mobile | Resize to <900px | Desktop nav hidden, hamburger shown | |
| TC-01-07 | Hamburger opens menu | Click hamburger on mobile | Mobile menu slides open | |
| TC-01-08 | Hamburger closes menu | Click hamburger again | Mobile menu closes | |
| TC-01-09 | Mobile menu closes on link click | Open menu, click any link | Menu closes AND page navigates | |
| TC-01-10 | Hamburger ARIA state | Open/close hamburger | aria-expanded toggles true/false | |
| TC-01-11 | Nav shrinks on scroll | Scroll down 100px | Nav height reduces (scrolled class added) | |
| TC-01-12 | Skip link on tab press | Press Tab from address bar | "Skip to main content" link appears | |

---

## TC-02 HOMEPAGE (index.html)

| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|-----------------|--------|
| TC-02-01 | Hero stats consistent | View hero section | Shows: 50+ Guards, 3+ Years, 10+ Clients, 24/7 | |
| TC-02-02 | Stats section consistent | Scroll to stats block | Shows: 50+ Guards, 3+ Years, 10+ Clients, 24/7 (same as hero) | |
| TC-02-03 | FAQ CTA count correct | View FAQ section | Shows "10+ Clients Trust Defender" (not "50+") | |
| TC-02-04 | Hero CTA buttons work | Click "Get Free Assessment" | Goes to contact.html | |
| TC-02-05 | Hero CTA buttons work | Click "Our Services" | Goes to services.html | |
| TC-02-06 | FAQ accordion opens | Click any FAQ question | Answer expands; ARIA expanded=true | |
| TC-02-07 | FAQ accordion closes | Click open question | Answer collapses; ARIA expanded=false | |
| TC-02-08 | Client marquee plays | View clients section | Logos scroll continuously | |
| TC-02-09 | Client marquee pauses | Hover over marquee | Scrolling pauses | |
| TC-02-10 | No broken client images | View marquee | All 11 client images load (no broken icons) | |

---

## TC-03 SERVICES PAGE (services.html)

| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|-----------------|--------|
| TC-03-01 | Breadcrumb correct | Visit services page | Shows "Home / Services" | |
| TC-03-02 | All 6 services visible | Scroll page | All 6 service sections rendered | |
| TC-03-03 | Alternating layout | View even/odd services | Even rows have reversed layout | |
| TC-03-04 | Service CTAs work | Click any "Request" btn | Goes to contact.html | |
| TC-03-05 | CTA band buttons | Click "Contact Us Today" | Goes to contact.html | |
| TC-03-06 | CTA band phone | Click "Call +91 8077942213" | Opens dialer with correct number | |

---

## TC-04 ABOUT PAGE (about.html)

| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|-----------------|--------|
| TC-04-01 | EST badge year | View story section | Badge shows "EST. 2022" | |
| TC-04-02 | Story text consistent | Read story | No mention of "decade" — says "Since 2022" | |
| TC-04-03 | Values section | View 6 value cards | All 6 values render with icons | |
| TC-04-04 | Timeline accurate | View timeline | Starts 2022, shows correct milestones | |
| TC-04-05 | Gallery filter — All | Click "All" filter btn | All gallery items visible | |
| TC-04-06 | Gallery filter — Deployment | Click "Deployment" | Only deployment items shown | |
| TC-04-07 | Gallery placeholder | Without images in assets/gallery/ | Shows "Photo coming soon" placeholder, no broken img icon | |
| TC-04-08 | Lightbox keyboard nav | Open lightbox, press Arrow keys / Escape | Left/Right navigates, Escape closes | |

---

## TC-05 CONTACT PAGE (contact.html)

| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|-----------------|--------|
| TC-05-01 | Form validation — empty | Click "Send" with empty form | Validation errors shown on required fields | |
| TC-05-02 | Form validation — short name | Enter 1-char first name | "Please enter your first name" error shown | |
| TC-05-03 | Form validation — invalid phone | Enter "abc" as phone | Phone validation error shown | |
| TC-05-04 | Form validation — no service | Don't select service | "Please select a service" error shown | |
| TC-05-05 | Form submits to WhatsApp | Fill all required fields, submit | WhatsApp opens with pre-filled message, success banner shown | |
| TC-05-06 | WhatsApp message content | Submit form with test data | Message contains: name, phone, service | |
| TC-05-07 | Google Maps loads | View map section | Map renders with correct Dehradun location | |
| TC-05-08 | Phone links callable | Click any phone number | Opens dialer with +91 prefix included | |
| TC-05-09 | WhatsApp links | Click "Message on WhatsApp" | Opens wa.me/918077942213 | |
| TC-05-10 | Email link | Click email address | Opens email client with correct address | |

---

## TC-06 JOBS PAGE (jobs.html)

| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|-----------------|--------|
| TC-06-01 | All 6 jobs visible | View jobs section | 6 job listings rendered | |
| TC-06-02 | Job types shown | View badges | Full Time and Contractual badges shown | |
| TC-06-03 | Salary ranges shown | View job cards | Salary info visible on each card | |
| TC-06-04 | "Apply Now" scrolls | Click "Apply Now" on any job | Scrolls to application form (#apply) | |
| TC-06-05 | Application form validation | Submit empty form | Phone validation error shown | |
| TC-06-06 | Application submits to WhatsApp | Fill required fields, submit | WhatsApp opens with application details | |
| TC-06-07 | Benefits section | View "Why Join" section | All 6 benefit cards visible | |
| TC-06-08 | Page breadcrumb | Check breadcrumb | Shows "Home / Careers" | |

---

## TC-07 RESPONSIVENESS

| ID | Test Case | Viewport | Expected Result | Status |
|----|-----------|----------|-----------------|--------|
| TC-07-01 | Desktop layout | 1440px | Full nav, 3-col services, 2-col mission | |
| TC-07-02 | Laptop layout | 1024px | Full nav visible, all sections readable | |
| TC-07-03 | Tablet layout | 768px | Hamburger nav, 2-col services, single-col mission | |
| TC-07-04 | Mobile layout (large) | 414px | Single column everything, stacked hero stats 2x2 | |
| TC-07-05 | Mobile layout (small) | 375px | No horizontal scroll, text readable | |
| TC-07-06 | Hero stats mobile | 375px | Stats display in 2x2 grid, not overlapping content | |
| TC-07-07 | Footer mobile | 375px | Single column footer links | |
| TC-07-08 | Forms on mobile | 375px | Inputs full-width, not cut off | |

---

## TC-08 ACCESSIBILITY

| ID | Test Case | Tool/Method | Expected Result | Status |
|----|-----------|-------------|-----------------|--------|
| TC-08-01 | Keyboard navigation | Tab through page | All interactive elements reachable and visible | |
| TC-08-02 | Skip link | Press Tab on load | "Skip to main content" link appears and works | |
| TC-08-03 | Image alt text | Inspect images | All content images have descriptive alt text; decorative ones have empty alt | |
| TC-08-04 | Hamburger aria-label | Inspect hamburger btn | Has aria-label="Toggle navigation menu" | |
| TC-08-05 | WhatsApp float aria | Inspect wa-float | Has aria-label="Chat with us on WhatsApp" | |
| TC-08-06 | Form labels | Inspect form fields | Every input has an associated <label> with for/id pair | |
| TC-08-07 | FAQ ARIA | Open/close FAQ | aria-expanded toggles correctly on button | |
| TC-08-08 | Colour contrast | Chrome DevTools / axe | Gold #c9a84c on navy #0a0e1a passes AA (min 4.5:1) | |

---

## TC-09 PERFORMANCE

| ID | Test Case | Tool | Expected Result | Status |
|----|-----------|------|-----------------|--------|
| TC-09-01 | PageSpeed score — mobile | Google PageSpeed | Score ≥ 75 | |
| TC-09-02 | PageSpeed score — desktop | Google PageSpeed | Score ≥ 90 | |
| TC-09-03 | Font loading | Network tab | Fonts load without blocking render (media=print trick) | |
| TC-09-04 | Lazy loading | Network tab | Images below fold only load on scroll | |
| TC-09-05 | Hero image — eager | Network tab | Hero image loads immediately (loading=eager) | |
| TC-09-06 | No console errors | Browser DevTools | Zero JS errors in console on any page | |

---

## TC-10 SECURITY & SEO

| ID | Test Case | Tool/Method | Expected Result | Status |
|----|-----------|-------------|-----------------|--------|
| TC-10-01 | noopener on external links | Inspect all target="_blank" | All have rel="noopener noreferrer" | |
| TC-10-02 | Tel links correct format | Inspect all tel: hrefs | All use tel:+91XXXXXXXXXX format | |
| TC-10-03 | Meta descriptions | View page source of all 5 pages | Each page has unique <meta name="description"> | |
| TC-10-04 | lang attribute | View page source of all 5 pages | All <html> tags have lang="en" | |
| TC-10-05 | robots.txt accessible | Open /robots.txt | Returns 200 with correct content | |
| TC-10-06 | sitemap.xml accessible | Open /sitemap.xml | Returns 200 with 5 URL entries | |

---

## BUGS FIXED LOG

| Bug ID | Severity | Description | File(s) | Fix Applied |
|--------|----------|-------------|---------|-------------|
| BUG-01 | Critical | Forms do nothing on submit (no backend) | contact.html, jobs.html | Redirects to WhatsApp with pre-filled message |
| BUG-02 | Critical | Stats inconsistency: hero shows "3+ Years / 10+ Clients"; stats block had them swapped | index.html | Fixed to match: 50+ Guards, 3+ Years, 10+ Clients, 24/7 |
| BUG-03 | Critical | FAQ CTA said "50+ Clients" (wrong — hero says 10+) | index.html | Corrected to "10+ Clients Trust Defender" |
| BUG-04 | High | client-12.png, client-13.png referenced but files missing → broken images | index.html | Removed both; marquee uses 11 clients |
| BUG-05 | High | `tel:` links missing `+91` prefix — dial fails on some devices | All pages | Changed to `tel:+918077942213` format |
| BUG-06 | High | target="_blank" links missing rel="noopener noreferrer" — security risk | All pages | Added rel="noopener noreferrer" to all external links |
| BUG-07 | High | `--text-muted` CSS variable undefined → invisible list items in FAQ | index.html | Replaced with explicit `color: var(--gray)` |
| BUG-08 | High | Mobile menu doesn't close when nav link clicked | All pages | Added click listener on each menu link to close menu |
| BUG-09 | Medium | Gallery images missing (gallery-1.jpg through gallery-12.jpg) | about.html | Added `onerror` handler showing "Photo coming soon" placeholder |
| BUG-10 | Medium | Missing `<meta name="description">` on about, contact, jobs | Those pages | Added unique description to all 5 pages |
| BUG-11 | Medium | Missing `lang="en"` on html tag on about, contact, jobs, services | Those pages | Added to all 5 pages |
| BUG-12 | Medium | CSS duplicated verbatim across all 5 pages | All pages | Extracted to shared.css — single source of truth |
| BUG-13 | Medium | `<iframe>` map missing `allowfullscreen` and `referrerpolicy` | contact.html | Added both attributes |
| BUG-14 | Medium | Form inputs had no `name` attributes — data unidentifiable | contact.html, jobs.html | Added name, id, autocomplete attrs to all fields |
| BUG-15 | Medium | No `aria-label` on hamburger button, WhatsApp float | All pages | Added aria-label to both elements |
| BUG-16 | Medium | FAQ ARIA states not updated on toggle | index.html | Added aria-expanded toggle in JS |
| BUG-17 | Low | Google Fonts render-blocking | All pages | Changed to media="print" onload trick with noscript fallback |
| BUG-18 | Low | About page said "over a decade" but founded 2022 (3 years) | about.html | Corrected to "Since 2022, we have grown..." |
| BUG-19 | Low | No favicon linked | All pages | Added favicon link tag on all 5 pages |
| BUG-20 | Low | No robots.txt / sitemap.xml | Root | Created both files |
| BUG-21 | Low | Hero bg image should use loading="eager" not lazy (above fold) | index.html | Changed mission img to eager; hero bg is CSS background |
| BUG-22 | Low | Service cards weren't clickable/linked | index.html | Wrapped in anchor tags to services.html |
| BUG-23 | Low | No nav scroll-shrink effect on inner pages | services, about, contact, jobs | Added scroll listener + CSS .scrolled state |
| BUG-24 | Info | No skip-to-content link for screen readers | All pages | Added `.skip-link` with focus-visible style |

---

## HOW TO ADD GALLERY IMAGES

1. Create folder: `assets/gallery/`
2. Add photos named: `gallery-1.jpg`, `gallery-2.jpg` … `gallery-6.jpg`
3. Recommended size: 800×600px, JPEG, <200KB each
4. Update `alt` text and `data-cap` in about.html to describe each photo
5. To add more photos, copy an existing `.gallery-item` block and increment the number

## HOW TO ADD MORE CLIENT LOGOS

1. Save files to `assets/clients/client-12.png`, `client-13.png`, etc.
2. Add new `.client-item` blocks in the marquee (both in the original set AND the duplicate set)
3. Recommended: PNG with transparent background, 160×90px

---

*Last updated: April 2026 | Defender Security Services Website v2.0*
