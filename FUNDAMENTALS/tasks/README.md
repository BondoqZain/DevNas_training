# FUNDAMENTALS — Starter & Final Files

This folder contains **starter** and **final** files for each stage of the [Frontend Fundamentals Learning Plan](../FRONTEND_FUNDAMENTALS_LEARNING_PLAN.md). Read that plan first for goals, exercises, and success criteria for each stage.

## How to use

- **Starter:** Minimal scaffolding. Use this as your starting point and implement the stage’s mini-project yourself.
- **Final:** Reference solution. Use it to compare after you finish, or if you’re stuck.

## Structure

| Stage | Path | Mini-project |
|-------|------|----------------|
| 1 | `stage-1-html5/` | Personal portfolio (HTML only) |
| 2 | `stage-2-css/` | Style the portfolio |
| 3 | `stage-3-javascript/` | Interactive task list |
| 4 | `stage-4-bootstrap5/` | Landing page with Bootstrap |
| 5 | `stage-5-typescript/` | Typed task list |

## Running the files

- **Stages 1–4:** Open `index.html` in the `starter/` or `final/` folder in your browser. For Stage 2, the HTML loads `styles.css` from the same folder.
- **Stage 5:** In `starter/` implement the TODOs in `app.ts`, then run `npx tsc` in that folder to generate `app.js`. Open `index.html` after that. In `final/` you can open `index.html` directly (pre-built `app.js` included). See `stage-5-typescript/README.md`.

**Tip:** If you open HTML files via `file://`, Stage 5 (type="module") may need to be run from a local server (e.g. `npx serve .` in the folder). Opening `index.html` directly usually works in modern browsers.

Work through each stage in order. Use the **starter** first, then compare with **final** when done.
