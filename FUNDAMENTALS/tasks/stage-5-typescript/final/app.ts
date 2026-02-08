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
    tasks.push({ id: Date.now(), text, done: false });
    input.value = '';
    saveTasks();
    render();
  });
}

function loadTasks(): Task[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? (JSON.parse(data) as Task[]) : [];
  } catch {
    return [];
  }
}

function saveTasks(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function toggleDone(id: number): void {
  const task = tasks.find((t) => t.id === id);
  if (task) task.done = !task.done;
  saveTasks();
  render();
}

function removeTask(id: number): void {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  render();
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
