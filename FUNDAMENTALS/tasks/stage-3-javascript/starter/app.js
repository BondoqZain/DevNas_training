
const STORAGE_KEY = 'fundamentals-task-list';

const formEl = document.getElementById('task-form');
const inputEl = document.getElementById('task-input');
const listEl = document.getElementById('task-list');

let tasks = getTasks();
renderTasks();


formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = inputEl.value.trim();
  if (value.length === 0) return;

  const newTask = {
    id: Date.now(),
    text: value,
    done: false
  };

  tasks = [...tasks, newTask];

  inputEl.value = '';
  inputEl.focus(); 

  updateStorage();
  renderTasks();
});


listEl.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;

  const id = Number(li.dataset.id);

  const isToggle = e.target.classList.contains('toggle-btn');
  const isDelete = e.target.classList.contains('delete-btn');

  if (isToggle) {
    tasks = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
  }

  if (isDelete) {
    tasks = tasks.filter(task => task.id !== id);
  }

  updateStorage();
  renderTasks();
});


function getTasks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function updateStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}


function renderTasks() {
  listEl.innerHTML = '';

  for (const task of tasks) {
    const li = document.createElement('li');
    li.dataset.id = task.id;
    li.className = task.done ? 'done' : '';

    const span = document.createElement('span');
    span.textContent = task.text;

    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.textContent = task.done ? 'Undo' : 'Done';
    toggleBtn.className = 'toggle-btn';

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Remove';
    deleteBtn.className = 'delete-btn';

    li.append(span, toggleBtn, deleteBtn);
    listEl.appendChild(li);
  }
}
