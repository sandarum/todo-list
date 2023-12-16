import task from "./task";
import todoList from "./todo-list";
import deleteIcon from './delete.svg';

export function renderUI() {

  const myList = new todoList();

  // Add temp tasks
  myList.addTask(new task('Study'));
  myList.addTask(new task('Exercise'));
  myList.addTask(new task('Read'));
  myList.addTask(new task('Clean'));
  myList.addTask(new task('Meditate'));

  const tasks = myList.getTasks();
  const taskUl = document.querySelector('.taskList');
  taskUl.appendChild(renderTasks(tasks));
  taskUl.appendChild(renderAddTaskButton());
}

function renderTasks(taskList) {

  const fragment = new DocumentFragment();

  taskList.forEach((task, index) => {
    const taskElement = document.createElement('li');
    taskElement.appendChild(renderTaskDetails(task, index));
    fragment.appendChild(taskElement);
  });

  return fragment;
}

function renderTaskDetails(task, index) {

  const element = document.createElement('div');
  const checkBox = document.createElement('input')
  checkBox.setAttribute('type','checkbox');
  const title = document.createElement('p')
  const date = document.createElement('p');
  element.classList.add('task');

  const deleteBtn = new Image();
  deleteBtn.src = deleteIcon;
  deleteBtn.classList.add('delete');

  checkBox.checked = task.getTaskInfo().isCompleted;
  title.textContent = task.getTaskInfo().title;
  date.textContent = task.getTaskInfo().dueDate;

  checkBox.dataset.index = index;
  deleteBtn.dataset.index = index;

  element.appendChild(checkBox);
  element.appendChild(title);
  element.appendChild(date);
  element.appendChild(deleteBtn);

  return element;
}

function renderAddTaskButton() {
  const element = document.createElement('button');
  element.textContent = 'Add Task';
  return element;
}

function clearTasksUI() {
  const taskUl = document.querySelector('.taskList');
  while(taskUl.firstChild) {
    taskUl.removeChild(taskUl.firstChild);
  }
}

function renderAddTaskUI() {
  
}