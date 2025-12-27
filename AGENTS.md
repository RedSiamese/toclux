# Repository Guidelines

## Project Structure & Module Organization
- Root files: `index.html` (home), `detail.html` (detail view), `styles.css`, `script.js`, `detail.js`, and `data.js`.
- Product folders live at the repo root as numeric IDs (`/1/`, `/2/`, etc.). Each contains `doc.md` plus product images. `data.js` is the registry that powers the gallery.
- `bug/` holds reference screenshots.

## Build, Test, and Development Commands
- No build step; this is a static site.
- Local dev server (required so `fetch` can load `doc.md`):
  `python -m http.server 8000`
  then open `http://localhost:8000/index.html`.
- Quick preview: opening `index.html` directly works for layout, but `fetch` may fail under `file://`.

## Coding Style & Naming Conventions
- Indentation: 2 spaces in HTML/CSS/JS.
- JavaScript: camelCase variables/functions, `const`/`let`, template literals for HTML fragments.
- CSS: kebab-case class names, CSS variables defined in `:root`.
- Content: folder names are numeric IDs; `doc.md` uses first line as title, last line as URL, middle lines as description/features.

## Testing Guidelines
- No automated tests or test framework in this repository.
- Manual checks: load home and detail pages, verify slider dots and scrolling, confirm images render, and ensure `doc.md` content is parsed correctly.

## Commit & Pull Request Guidelines
- Commit history uses short, plain messages (often Chinese). Keep commits brief and action-focused; include scope when useful (e.g., "Add product 14 assets").
- PRs: include a summary, list new/updated IDs, add screenshots for UI changes, and link related issues if available.
