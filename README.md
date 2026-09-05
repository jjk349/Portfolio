# Portfolio

James Kurtis — Mechanical Engineering student at Cornell University. Personal portfolio site
built with plain HTML/CSS/JS, deployed via GitHub Pages.

Live at: https://jjk349.github.io/Portfolio/

## Structure

```
index.html          Home — About Me + featured projects
projects.html        Full project list
projects/*.html       Individual project detail pages
cv.html               Formatted CV + PDF download
assets/css/style.css  Site styling (dark theme)
assets/js/main.js     Small interactive bits (footer year, copy email)
assets/images/        Photos, project thumbnails, favicon
assets/cv/            Downloadable CV PDF
```

## Editing content

- **About Me**: edit the `<section id="about">` block in `index.html`.
- **Projects**: add a card to the `.project-grid` in `index.html` and `projects.html`,
  then create a matching page in `projects/` (copy an existing one as a template).
- **CV**: edit `cv.html` to update the on-page resume, and replace
  `assets/cv/James-Kurtis-CV.pdf` with an updated PDF export (keep the filename or update
  the download links).

## Running locally

No build step required — just serve the folder, e.g.:

```
python -m http.server 8000
```

then open http://localhost:8000.

## Deployment

GitHub Pages is configured to deploy from the `main` branch, root folder. Any push to
`main` updates the live site automatically.
