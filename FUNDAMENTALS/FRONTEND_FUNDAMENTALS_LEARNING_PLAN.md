# Frontend Trainee Learning Plan — Fundamentals & Real-World Skills

A complete, project-independent learning path for a junior frontend developer. Assumes **basic programming knowledge** (variables, conditionals, loops, functions) and builds **industry-relevant skills** step by step.

**Order of study:** HTML5 → CSS → JavaScript (ES6+) → Bootstrap 5 → TypeScript → Vue.js → **Capstone project**

---

## How to Use This Plan

- **Do, don’t just read:** Every stage has exercises and a mini-project. Code every day.
- **Success criteria:** Use the “Learning outcomes” to decide when to move on. Get a quick review from a mentor if possible.
- **Best practices:** Introduced gradually (semantic HTML → DRY CSS → clean JS → components → TypeScript).

---

# Stage 1: HTML5

## Goal
Write semantic, accessible HTML that forms the structure of any web page.

---

### Core Concepts & Topics

| Topic | What to learn |
|-------|----------------|
| **Document structure** | `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `<body>` |
| **Semantic elements** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` — when to use each |
| **Headings** | Single `<h1>` per page; logical hierarchy (`h1` → `h2` → `h3`); don’t skip levels |
| **Text & links** | `<p>`, `<a href="..." target="_blank" rel="noopener noreferrer">`, `<strong>`, `<em>` |
| **Lists** | `<ul>`, `<ol>`, `<li>`; when to use list markup for navigation or content |
| **Images** | `<img src="..." alt="...">` — meaningful `alt` for every image; `width`/`height` to avoid layout shift |
| **Forms (basics)** | `<form>`, `<label>`, `<input type="text|email|password|submit">`, `<button>`, `<textarea>`; label–input association (`for`/`id`) |
| **Tables** | `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` — only for tabular data |
| **Accessibility (a11y)** | Sufficient contrast, keyboard navigation, `aria-label` where needed, no “click here” links |
| **Meta & SEO** | `<meta name="description" content="...">`, viewport, `<link rel="canonical">` |

---

### Hands-On Exercises

1. **Semantic layout:** Create a single HTML file with: header (logo + nav), main (one article with sections), sidebar, footer. Use only semantic tags, no `<div>` for main structure.
2. **Accessible form:** Build a “Contact us” form with name, email, message. Every input has a visible, associated label; use `required` and `type="email"` where appropriate.
3. **Image gallery:** Mark up 3–5 images with proper `alt` and wrap in a list or figure/caption where it makes sense.
4. **Table:** Create a simple table (e.g. product comparison or schedule) with `<thead>` and `<tbody>` and scope on `<th>`.

---

### Mini-Project: Personal Portfolio (HTML only)

- One page: hero section, “About”, “Skills” (list), “Projects” (titles + short descriptions + links), “Contact” (form).
- Use only HTML: semantic sections, one `<h1>`, correct heading order, accessible form, meaningful link text and `alt` on any placeholder images.
- **No CSS** (or minimal browser-default styling only).

---

### Common Mistakes to Avoid

- Using `<div>` for everything instead of `<section>`, `<article>`, `<nav>`, etc.
- Multiple `<h1>`s or skipping heading levels (e.g. `h1` then `h4`).
- Empty or useless `alt` (e.g. `alt="image"`) or missing `alt` on `<img>`.
- Links that say “click here” instead of describing the destination.
- Forgetting `rel="noopener noreferrer"` on `target="_blank"` links.
- Form inputs without associated `<label>` (bad for UX).

---

### Learning Outcomes / Success Criteria

- [ ] Can explain the difference between `<div>`, `<section>`, and `<article>` and when to use each.
- [ ] Can build a multi-section page with correct heading hierarchy and no structural `<div>` soup.
- [ ] Every image has meaningful `alt`; every form field has a proper label.
- [ ] Can validate HTML and fix critical errors.
- [ ] Mini-project (portfolio HTML) is complete and passes a basic a11y check (e.g. keyboard tab order, labels).

---

# Stage 2: CSS

## Goal
Control layout, typography, and appearance and make pages responsive.

---

### Core Concepts & Topics

| Topic | What to learn |
|-------|----------------|
| **Selectors** | Element, class (`.`), ID (`#`); avoid over-relying on IDs for styling |
| **Box model** | Content, padding, border, margin; `box-sizing: border-box` |
| **Units** | `px`, `em`, `rem`, `%`, `vw`/`vh`; prefer `rem` for font size, `em` for local scaling |
| **Typography** | `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing` |
| **Colors** | Hex, `rgb`/`rgba`, named colors; contrast for readability |
| **Flexbox** | `display: flex`, `flex-direction`, `justify-content`, `align-items`, `gap`, `flex-wrap`, `flex-grow`/`shrink`/`basis` |
| **Grid** | `display: grid`, `grid-template-columns`/`rows`, `gap`, `grid-column`/`row` |
| **Positioning** | `static`, `relative`, `absolute`, `fixed`, `sticky`; when to use each |
| **Responsive design** | Media queries `@media (min-width: ...)`; mobile-first approach; breakpoints (e.g. 576px, 768px, 992px) |
| **Custom properties** | `--variable-name: value;`, `var(--variable-name)`; use for colors and spacing |
| **Specificity** | How rules override; avoid `!important` and overly specific selectors |

---

### Hands-On Exercises

1. **Center things:** Center a box horizontally with margin, then with Flexbox, then with Grid. Center both horizontally and vertically with Flexbox.
2. **Card layout:** Build a card (image on top, title, text, button) using Flexbox; make the button stick to the bottom of the card.
3. **Responsive navbar:** Simple horizontal nav that stacks vertically on small screens using a media query.
4. **CSS variables:** Define `--color-primary`, `--spacing-unit` in `:root` and use them in a small page; change theme by overriding variables.
5. **Grid gallery:** 3-column grid on desktop, 2 on tablet, 1 on mobile using `grid-template-columns` and media queries.

---

### Mini-Project: Style the Portfolio

- Take the Stage 1 portfolio HTML and add a full CSS layer.
- Requirements: consistent typography and spacing (use variables), Flexbox or Grid for layout, responsive (mobile-first), at least one breakpoint for tablet/desktop.
- No framework yet; plain CSS only.

---

### Common Mistakes to Avoid

- Using `px` for font sizes everywhere instead of `rem`/`em`.
- Overusing `!important` to “fix” specificity; fix selectors instead.
- Deep nested selectors (e.g. `.page .main .card .title`) — keep specificity low.
- Forgetting `box-sizing: border-box` (set globally or per component).
- Inline styles for anything that should be reusable or themeable.

---

### Learning Outcomes / Success Criteria

- [ ] Can build a responsive layout with Flexbox or Grid without copying a template blindly.
- [ ] Can explain the box model and how `padding`/`margin` affect layout.
- [ ] Uses at least one media query and CSS variables in the portfolio.
- [ ] Code is organized (e.g. variables at top, sections commented) and avoid repeated “magic numbers”.
- [ ] Portfolio looks intentional on mobile and desktop (no horizontal scroll, readable text).

---

# Stage 3: JavaScript (ES6+)

## Goal
Add behavior and interactivity with modern JavaScript and good habits.

---

### Core Concepts & Topics

| Topic | What to learn |
|-------|----------------|
| **Variables** | `const` (default), `let`; avoid `var` |
| **Types** | `string`, `number`, `boolean`, `null`, `undefined`; `typeof`; truthy/falsy |
| **Objects** | Create, read, update; destructuring `const { a, b } = obj`; spread `{ ...obj }` |
| **Arrays** | `map`, `filter`, `reduce`, `find`, `some`, `every`; spread `[...arr]` |
| **Functions** | Declarations, arrow functions `() => {}`, default params, rest `...args` |
| **Control flow** | `if`/`else`, `switch`, `for`, `for...of`, `for...in` (objects); early returns |
| **Async** | Callbacks → Promises → `async`/`await`; `fetch()`; error handling with `try/catch` |
| **DOM** | `querySelector`, `querySelectorAll`, `getElementById`; read/change `textContent`, `innerHTML` (use carefully), attributes, classes |
| **Events** | `addEventListener`, `event.target`, `preventDefault()`; event delegation |
| **Modules** | `import` / `export` (ES modules); one responsibility per file |

---

### Hands-On Exercises

1. **Data shape:** Given an array of objects (e.g. users or products), use `map`/`filter`/`reduce` to get: list of names, only active items, total price.
2. **Fetch and render:** Call a public API (e.g. JSONPlaceholder), get a list, and render it in the DOM (create elements, no innerHTML for user data).
3. **Form handling:** On form submit, read values, validate (e.g. non-empty email), show errors next to fields, prevent submit if invalid.
4. **Event delegation:** One listener on a parent list; identify which item was clicked and update it (e.g. toggle “done”).
5. **Small module:** Put “format date” and “format currency” in a `utils.js`, export them, import in `main.js` and use.

---

### Mini-Project: Interactive Task List

- HTML: input + “Add” button, list of tasks, each with “Done” and “Remove.”
- JS: add task, mark done (toggle class or style), remove task; persist list in `localStorage` and restore on load.
- Use `const`/`let`, arrow functions, array methods, and at least one `async` (e.g. simulated delay or a simple API call).
- No framework; vanilla JS and small functions (no 200-line script).

---

### Common Mistakes to Avoid

- Using `var`; using `let` when `const` is enough.
- Mutating state from many places; prefer one place that updates data and re-renders.
- Using `innerHTML` with user input (XSS risk); use `textContent` or sanitize.
- Not handling loading/error states for `fetch`.
- Huge single file; split by feature or by “data / DOM / events”.
- Ignoring accessibility (e.g. keyboard support, focus) when adding interactivity.

---

### Learning Outcomes / Success Criteria

- [ ] Can use `map`/`filter`/`reduce` to transform and filter arrays without writing manual loops every time.
- [ ] Can use `async/await` with `fetch` and handle errors.
- [ ] Can add/remove listeners and use event delegation where appropriate.
- [ ] Task list works, uses localStorage, and code is split into small functions or modules.
- [ ] Can explain when to use `const` vs `let` and what “side effects” mean in a function.

---

# Stage 4: Bootstrap 5

## Goal
Use a component framework to build UIs quickly while understanding how it works under the hood.

---

### Core Concepts & Topics

| Topic | What to learn |
|-------|----------------|
| **Setup** | CDN or npm; grid and components depend on Bootstrap CSS + JS (for dropdowns, modals, etc.) |
| **Grid** | `container` / `container-fluid`, `row`, `col`, `col-md-6`, etc.; breakpoints and column counts |
| **Utilities** | Spacing (`m-*`, `p-*`), display (`d-flex`, `d-none`), flex (`justify-content-*`, `align-items-*`), text (`text-center`), colors (`bg-primary`, `text-muted`) |
| **Components** | Buttons (`btn`, `btn-primary`), cards (`card`, `card-body`), navbar, forms (`form-control`, `form-label`, `form-select`), modal, dropdown |
| **Forms** | `form-label`, `form-control`, `form-select`, validation classes (`is-invalid`), `input-group` |
| **Overriding** | Custom CSS after Bootstrap; CSS variables where Bootstrap 5 supports them; avoid editing Bootstrap source |
| **When not to use** | Don’t use Bootstrap for one-off custom layouts if plain CSS is clearer; don’t nest too many containers |

---

### Hands-On Exercises

1. **Grid only:** Build a 3-column layout that becomes 1 column on mobile using only Bootstrap grid classes.
2. **Navbar:** Responsive navbar with logo and links; collapse to hamburger on small screens.
3. **Card grid:** Row of cards (image, title, text, button) using Bootstrap cards and grid; make it responsive.
4. **Form:** Login form with email/password, validation styling, and a submit button using Bootstrap form classes.
5. **Modal:** Button opens a Bootstrap modal with some content; close on button and backdrop.

---

### Mini-Project: Landing Page with Bootstrap

- One-page marketing-style landing: hero (heading + CTA), features (3 cards in a row), testimonial or stats, CTA form (email signup), footer.
- Use Bootstrap grid, typography, buttons, cards, and navbar; responsive and readable.
- Customize at least one thing (e.g. primary color or font) via CSS override or variable.

---

### Common Mistakes to Avoid

- Loading Bootstrap JS but not using it (or forgetting it when using dropdowns/modals).
- Nesting `container` inside `container` unnecessarily.
- Using Bootstrap for every single style; combine with your own CSS for custom parts.
- Not testing on real devices; Bootstrap is responsive only if you use the right classes.
- Overriding with `!important` instead of higher specificity or variables.

---

### Learning Outcomes / Success Criteria

- [ ] Can build a responsive page using only Bootstrap grid and utility classes.
- [ ] Can use at least three components (e.g. navbar, card, form or modal) correctly.
- [ ] Can change one Bootstrap behavior (e.g. primary color) without breaking layout.
- [ ] Landing page works on narrow and wide viewports and looks coherent.
- [ ] Can explain what Bootstrap’s grid breakpoints are and how `col-md-6` behaves.

---

# Stage 5: TypeScript

## Goal
Add static types to JavaScript to catch errors early and document data shapes.

---

### Core Concepts & Topics

| Topic | What to learn |
|-------|----------------|
| **Basic types** | `string`, `number`, `boolean`, `null`, `undefined`; type annotations on variables and params |
| **Arrays & objects** | `string[]`, `Array<number>`; `interface` and `type` for object shapes |
| **Optional & union** | `?` for optional props; `string | null`; literal unions `'draft' | 'published'` |
| **Functions** | Parameter and return types; optional and default params |
| **Interfaces vs types** | `interface User { ... }`; `type Id = string`; when to use which |
| **Generics (basics)** | `function first<T>(arr: T[]): T`; why they’re used in libraries |
| **Strictness** | Avoid `any`; use `unknown` when type is truly unknown; enable strict mode |
| **Config** | `tsconfig.json`: `strict`, `target`, `module`; using TS in a Vite/React/Vue project |

---

### Hands-On Exercises

1. **Type a function:** Write a function `fullName(first: string, last?: string): string` and call it with valid and invalid args; fix errors the compiler reports.
2. **Interface:** Define `interface Product { id: string; name: string; price: number }` and an array of products; use it in a function that returns the total price.
3. **Union type:** Type “status” as `'pending' | 'success' | 'error'` and use it in a small function; add a default for invalid values.
4. **Strict null:** Turn on strict null checks and fix “possibly undefined” errors by using optional chaining (`?.`) or checks.
5. **Generic:** Write `function pick<T, K extends keyof T>(obj: T, key: K): T[K]` and use it on an object.

---

### Mini-Project: Typed Task List (refactor)

- Take the Stage 3 task list and add TypeScript (or create a new TS-only version).
- Define interfaces for Task and for the “state” (list of tasks, maybe filter).
- Type event handlers and DOM helpers; no `any` except where you explicitly document why.
- Run `tsc --noEmit` (or build) with no errors.

---

### Common Mistakes to Avoid

- Using `any` to silence the compiler instead of modeling the real type.
- Typing everything too loosely (e.g. `object`) so you get no real safety.
- Ignoring “possibly undefined” or “possibly null”; handle them explicitly.
- Writing types that duplicate the runtime structure so they get out of sync; keep one source of truth.
- Skipping return types on functions; they serve as documentation and catch mistakes.

---

### Learning Outcomes / Success Criteria

- [ ] Can define an `interface` or `type` for a real object (e.g. user, product, API response).
- [ ] Can write a function with typed parameters and return type and fix compiler errors.
- [ ] Can use optional chaining and union types in at least one practical example.
- [ ] Task list (or equivalent) is fully typed with no `any` and builds cleanly.
- [ ] Can explain why TypeScript is used in large codebases (maintainability, refactoring, documentation).

---

# Stage 6: Vue.js

## Goal
Build UIs with components, reactivity, and composition in Vue 3.

---

### Core Concepts & Topics

| Topic | What to learn |
|-------|----------------|
| **Vue 3 setup** | Create project (Vite + Vue); single-file components (`.vue`): `<template>`, `<script>`, `<style>` |
| **Composition API** | `<script setup>`, `ref`, `reactive`, `computed`; when to use which |
| **Template** | Interpolation `{{ }}`, `v-bind`/`:`, `v-on`/`@`, `v-if`/`v-else`, `v-for` (with `key`) |
| **Props & events** | `defineProps<{ ... }>()`, `defineEmits<['eventName']>()`; parent–child communication |
| **Slots** | Default and named slots; scoped slots for passing data to slot content |
| **Lifecycle** | `onMounted`, `onUnmounted` (or `onBeforeUnmount`); when to fetch data or subscribe |
| **Composables** | Extract logic into `useXxx()` that returns refs/reactive + functions; reuse across components |
| **Forms** | `v-model` on inputs and custom components; validation in a composable or component |
| **Lists & keys** | Always use a stable, unique `key` in `v-for` (not index when list can change) |

---

### Hands-On Exercises

1. **Reactivity:** Create a component with `ref` count; button increments it; display count in template. Then use `computed` for “double count.”
2. **Props down, events up:** Parent holds a list; child receives one item and emits “delete”; parent removes it.
3. **Composable:** `useCounter(initial)` that returns `{ count, increment, decrement }`; use it in two components.
4. **Fetch in component:** `onMounted` + `fetch` to load data into a `ref`; show loading and error states in the template.
5. **Slot:** Parent passes a “header” slot and a default slot into a card component; card renders them in the right places.

---

### Mini-Project: Vue Task List + Product List

- **Task list (Vue version):** List of tasks; add, toggle done, remove; use `ref`/`reactive` and one composable (e.g. `useTaskList()`).
- **Product list:** Fetch products from a public API; display in cards (image, title, price); filter by text input; use `computed` for filtered list.
- Use props/emits for any reusable piece (e.g. `TaskItem` receives task and emits events).
- At least one composable and one slot (e.g. card with customizable footer).

---

### Common Mistakes to Avoid

- Using `reactive` for primitives; use `ref` for numbers/strings/booleans.
- Mutating props in the child; emit events and let parent update.
- Using array index as `key` in `v-for` when the list is reordered or filtered; use a stable id.
- Putting all logic in one component; extract composables and small components.
- Forgetting that `v-model` is `:modelValue` + `@update:modelValue` when building custom inputs.

---

### Learning Outcomes / Success Criteria

- [ ] Can create a Vue component with `ref`/`computed` and use them in the template.
- [ ] Can pass props and emit events between parent and child.
- [ ] Can write a composable and use it in at least one component.
- [ ] Can use `onMounted` to fetch data and show loading/error states.
- [ ] Mini-project has at least two components and one composable; code is readable and not one giant file.

---



# Capstone Project: Full-Stack Front-End App

## Objective
Combine all stages into one small but complete application that demonstrates fundamentals, structure, and best practices.

---

## Suggested Idea: “Learning Dashboard” or “Course Explorer”

A single-page app where:

1. **Content:** Navigation and a list of “courses” or “learning tracks” (title, description, progress, link). Data can live in the app (e.g. a typed array) or be loaded from a static JSON file / API to practice `fetch` and typing.

2. **Tech stack used:**
   - **HTML:** Semantic layout (header, nav, main, sections, footer).
   - **CSS / Bootstrap 5:** Layout, spacing, responsive grid, and components (e.g. navbar, cards).
   - **Vue 3:** Composition API, components (e.g. `AppHeader`, `CourseCard`), composables (e.g. `useCourses()`, `useProgress()`).
   - **TypeScript:** Interfaces for course, nav item; typed composables and props; no `any`.

3. **Features:**
   - Load course list (from code or from JSON/API); show loading and error states.
   - Render nav and course list; each course as a card (title, description, progress bar or badge).
   - Responsive: usable on mobile and desktop (Bootstrap grid or your own CSS).
   - Accessible: keyboard navigation, focus states, semantic HTML, labels where needed.

4. **Code quality:**
   - Small, focused components.
   - One or two composables for data and state.
   - No `any`; config and props typed.
   - Clear file structure (e.g. `components/`, `composables/`, `types/`).

---

## Capstone Deliverables

- [ ] **Repo (or folder)** with Vue + TypeScript project (Bootstrap or plain CSS for styling).
- [ ] **Data:** Nav items and at least 3 courses (in code or in a JSON file); if using JSON, load it with `fetch` and type the response.
- [ ] **Vue app** that renders the dashboard with loading/error handling.
- [ ] **README** with: how to run, how to add a new course or nav item, short description of main components and data flow.
- [ ] **Quick demo:** Show the app running and, if using external data, change the data and see the UI update.

---

## Capstone Success Criteria

- All 6 stages are clearly used (semantic HTML, CSS or Bootstrap, JS/TS, Vue).
- Code is readable, typed, and split into components and composables.
- Data flow is clear (where data comes from and how it reaches the UI).
- No critical a11y or responsive issues.
- Trainee can explain the main components and how they get their data.

---

# Summary: Stage Overview

| Stage | Focus | Mini-project / outcome |
|-------|--------|-------------------------|
| 1 | HTML5 | Semantic portfolio (HTML only) |
| 2 | CSS | Styled portfolio (responsive, variables) |
| 3 | JavaScript ES6+ | Interactive task list (vanilla JS) |
| 4 | Bootstrap 5 | Landing page with components |
| 5 | TypeScript | Typed task list (or refactor) |
| 6 | Vue.js | Vue task list + product list (composables, slots) |
| **Capstone** | **All 6** | **Learning dashboard / course explorer (Vue + TypeScript + Bootstrap or CSS)** |

---


