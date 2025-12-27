# Repository Guidelines

## Project Structure & Module Organization
This is a static site. Root HTML files `index.html`, `category.html`, and `detail.html` render the three views. Styling lives in `styles.css`; behavior is in `script.js`, `category.js`, and `detail.js`; the shared content registry is in `data.js`. Product assets live in category folders such as `Corner-Brackets/`, each containing a category-level `doc.md` plus numeric subfolders like `Corner-Brackets/9/` with a `doc.md` and images.

## Build, Test, and Development Commands
No build step is required. Run a simple static server from the repo root:
`python -m http.server 8000` (serves at `http://localhost:8000`).
Open `index.html` for the landing view; deep links use query params, for example `category.html?id=corner-brackets` and `detail.html?id=9`.

## Coding Style & Naming Conventions
Use 2-space indentation, semicolons, and double-quoted strings in JS. Prefer `const`/`let` and keep functions small and readable. In `data.js`, category `id` values are kebab-case, `folder` names match on-disk directories, and product `id` strings match their numeric folder names. Keep image lists ordered as they should appear in sliders.

## Testing Guidelines
There is no automated test suite. Validate manually by loading all three pages and checking category tiles, sliders, and `doc.md` parsing. For new products, ensure `doc.md` starts with a title line and ends with the external link.

## Commit & Pull Request Guidelines
Existing history uses short Chinese commit messages like “上传…” or “修改代码”; keep new messages brief and descriptive. PRs should include a summary, the list of touched pages/assets, and before/after screenshots for UI or content changes.
