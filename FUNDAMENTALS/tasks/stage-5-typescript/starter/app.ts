/**
 * STAGE 5 — STARTER
 * Refactor the task list with TypeScript.
 *
 * 1. Define interface Task { id: number; text: string; done: boolean } ✓
 * 2. Type the tasks array: Task[]
 * 3. Implement loadTasks(), saveTasks(), addTask(), toggleDone(), removeTask(), render()
 * 4. Run: npx tsc   (generates app.js). If tsc not found: npm install typescript then npx tsc
 * 5. Open index.html
 */

const STORAGE_KEY = 'fundamentals-task-list-ts';

const form = document.getElementById('task-form') as HTMLFormElement | null;
const input = document.getElementById('task-input') as HTMLInputElement | null;
const list = document.getElementById('task-list') as HTMLUListElement | null;

interface Task {
  id: number;
  text: string;
  done: boolean;
}

let tasks: Task[] = loadTasks();

if (form && input && list) {
  render();
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    // TODO: add task to tasks, clear input, saveTasks(), render()
    input.value = '';
  });
}

function loadTasks(): Task[] {
  // TODO: read from localStorage, parse JSON, return Task[] or []
  return [];
}

function saveTasks(): void {
  // TODO: localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

function toggleDone(id: number): void {
  // TODO: find task by id, flip task.done, saveTasks(), render()
}

function removeTask(id: number): void {
  // TODO: filter out task with id, saveTasks(), render()
}

function render(): void {
  if (!list) return;
  list.innerHTML = '';
  tasks.forEach((task: Task) => {
    const li = document.createElement('li');
    li.className = task.done ? 'done' : '';
    const span = document.createElement('span');
    span.textContent = task.text;
    const doneBtn = document.createElement('button');
    doneBtn.type = 'button';
    doneBtn.textContent = task.done ? 'Undo' : 'Done';
    doneBtn.addEventListener('click', () => toggleDone(task.id));
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => removeTask(task.id));
    li.append(span, doneBtn, removeBtn);
    list.appendChild(li);
  });
}

export {};
