# Stage 5 — TypeScript

## Why both `.ts` and `.js`?

- **`app.ts`** — TypeScript **source**. This is what you edit (types, interfaces, logic). Browsers don’t run TypeScript.
- **`app.js`** — JavaScript that the **browser runs**. The HTML loads this file.

Flow: you edit **`app.ts`** → run `npx tsc` → the compiler produces **`app.js`** → the browser runs **`app.js`**.

We keep **`app.js`** in the repo so you can open `index.html` without running the compiler (starter has a skeleton, final has the solution). Once you implement the TODOs in `app.ts`, run `npx tsc` and it overwrites `app.js` with the compiled output. **Don’t edit `app.js` by hand** — treat `app.ts` as the single source of truth.

---

## Compile and run

Compile TypeScript to JavaScript before opening `index.html`:

```bash
cd starter   # or final
npx tsc
```

If `tsc` is not found, install TypeScript first:

```bash
npm install typescript
npx tsc
```

Or from the repo root (where TypeScript is already a dev dependency):

```bash
npx -p typescript tsc -p docs/FUNDAMENTALS/stage-5-typescript/starter/tsconfig.json
```

Then open `index.html` in your browser.

- **Starter:** Implement the `TODO` parts in `app.ts`, then run `npx tsc` to generate `app.js`. The starter skeleton already has the `Task` interface and `render()` structure so the page runs (empty list) and the form doesn’t reload the page.
- **Final:** Includes a pre-built `app.js` so you can open `index.html` without running `tsc`. You can still run `npx tsc` in `final/` to regenerate `app.js` from `app.ts`.
