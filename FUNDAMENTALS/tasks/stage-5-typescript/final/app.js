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
    if (!text)
      return;
    tasks.push({ id: Date.now(), text, done: false });
    input.value = '';
    saveTasks();
    render();
  });
}

function loadTasks() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
  catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function toggleDone(id) {
  const task = tasks.find((t) => t.id === id);
  if (task)
    task.done = !task.done;
  saveTasks();
  render();
}

function removeTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  render();
}

function render() {
  if (!list)
    return;
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
