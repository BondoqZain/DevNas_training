// Run "npx tsc" to regenerate this from app.ts after you implement the TODOs
const STORAGE_KEY = 'fundamentals-task-list-ts';

const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

let tasks = loadTasks();

if (form && input && list) {
  render();
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    // TODO: add task, saveTasks(), render()
    input.value = '';
  });
}

function loadTasks() {
  return [];
}

function saveTasks() {
}

function toggleDone(id) {
}

function removeTask(id) {
}

function render() {
  if (!list) return;
  list.innerHTML = '';
  tasks.forEach((task) => {
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
