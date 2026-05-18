# REAA — Research Organisation on Analytics and AI
**Website: [reaa.tn](https://reaa.tn)**

Official website for the Research Organisation on Analytics and AI (REAA), hosted on OVH.

---

## Project structure

```
reaa-website/
├── index.html          # Main single-page site
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Navigation, animations, form UX
├── assets/
│   └── img/            # Place logos, photos here
├── .gitignore
└── README.md
```

---

## Local development

No build step required — pure HTML/CSS/JS.

```bash
# Clone the repo
git clone https://github.com/<your-org>/reaa-website.git
cd reaa-website

# Serve locally (Python 3)
python -m http.server 8080
# Then open http://localhost:8080
```

---

## Deployment on OVH (manual FTP/SFTP)

1. Log in to your [OVH Control Panel](https://www.ovhcloud.com/en/web-hosting/).
2. Go to **Web Hosting → FTP / SSH**.
3. Note your **FTP host**, **username**, and **password** (or create one).
4. Using an FTP client (e.g. FileZilla or Cyberduck):
   - Connect to your OVH server.
   - Upload all files to the `www/` (or `public_html/`) root directory.
5. Your site is live at **reaa.tn**.

### Domain configuration (reaa.tn → OVH)

In OVH DNS Zone, ensure:
| Type | Name | Value |
|------|------|-------|
| A    | @    | `<OVH server IP>` |
| A    | www  | `<OVH server IP>` |
| CNAME| www  | reaa.tn. *(alternative)* |

---

## Automated deployment via GitHub Actions (recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to OVH

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.4
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          server-dir: /www/
```

Then add secrets in **GitHub → Settings → Secrets**:
- `FTP_SERVER` — your OVH FTP hostname
- `FTP_USERNAME` — your FTP login
- `FTP_PASSWORD` — your FTP password

Every push to `main` will auto-deploy to OVH. ✓

---

## Contact form backend

The form currently simulates a submission. To activate real sending, choose one:

| Option | How |
|--------|-----|
| **Formspree** | Set `action="https://formspree.io/f/<id>"` on `<form>` and remove the JS submit handler |
| **EmailJS** | Add the EmailJS SDK and call `emailjs.send(...)` in `main.js` |
| **PHP mailer** | Add `mail.php` on the OVH server and `fetch('/mail.php', ...)` from `main.js` |

---

## Customisation checklist

- [ ] Replace placeholder partner logos in `assets/img/`
- [ ] Update statistics in the hero stat bar (`index.html` lines ~40–55)
- [ ] Add real team/member photos when a team section is added
- [ ] Connect the contact form to a backend (see above)
- [ ] Add `favicon.ico` / `favicon.svg`
- [ ] Add Open Graph image (`og:image` meta tag)

---

## Tech stack

- Pure HTML5 / CSS3 / Vanilla JS (no framework, no build tool)
- Fonts: [DM Serif Display + DM Sans](https://fonts.google.com/) via Google Fonts
- Deployment: OVH Shared Hosting via FTP or GitHub Actions

---

*© 2024 REAA. All rights reserved.*
"# REAA" 
