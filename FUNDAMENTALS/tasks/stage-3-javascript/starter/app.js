/**
 * STAGE 3 — STARTER
 * Implement the interactive task list.
 *
 * Requirements:
 * - Add task on form submit (read value, prevent default)
 * - Each task has "Done" and "Remove" buttons
 * - Toggle done state (e.g. CSS class or style)
 * - Remove task from list
 * - Persist tasks in localStorage; restore on load
 *
 * Use: const/let, arrow functions, addEventListener, DOM APIs
 */

const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

// Prevent form from reloading the page (add your add-task logic inside)
form.addEventListener('submit', (e) => e.preventDefault());

// TODO: Load from localStorage on page load
// TODO: In submit handler: read input, add task, saveTasks(), render()
// TODO: Render a task (create li with text, Done button, Remove button)
// TODO: Save to localStorage when list changes

