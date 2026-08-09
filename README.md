# my_site

Personal portfolio site for Ashish Singh. Plain HTML/CSS/JS — no framework, no build step.

## Structure

- `index.html` — all sections (hero, about, skills, experience, projects, certifications, contact)
- `styles.css` — dark theme, layout
- `script.js` — nav toggle, scroll-reveal, active-link highlighting
- `assets/resume.pdf` — downloadable resume
- `assets/favicon.svg` — site icon

## Local preview

Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/Ashish001Singh/my_site.git
git push -u origin main
```

Then in the repo on GitHub: **Settings → Pages → Source: `main` branch, `/ (root)`**.
The `.nojekyll` file is already included so assets serve correctly.

## TODOs left in content

- `index.html` — Synechron experience section has a placeholder bullet for more
  accomplishments from the past year.
- `index.html` — Certifications section has 6 placeholder cards to fill in the
  remaining certs (site currently lists 7 of 13).
