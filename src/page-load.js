import task from "./task";
import todoList from "./todo-list";
import deleteIcon from './delete.svg';
import { clickDelete, clickAddTaskUI, clickCloseTask, updateTaskStatus } from "./events";

export function pageLoad(){
  renderUI();
  clickDelete();
  clickAddTaskUI();
  clickCloseTask();
  updateTaskStatus();
}

export function renderUI() {

  const myList = new todoList();
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

  const status = task.getTaskInfo().isCompleted;

  checkBox.checked = status;
  title.textContent = task.getTaskInfo().title;
  date.textContent = task.getTaskInfo().dueDate;

  checkBox.classList.add('status');
  status === true ? title.classList.add('completed'): title.classList.remove("completed");
  status === true ? date.classList.add('completed'): date.classList.remove("completed");

  title.dataset.index = index;
  date.dataset.index = index;
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
  element.textContent = `＋   Add Task`;
  element.classList.add('add-ui-btn');
  return element;
}

export function clearTasksUI() {
  const taskUl = document.querySelector('.taskList');
  while(taskUl.firstChild) {
    taskUl.removeChild(taskUl.firstChild);
  }
}

export function renderAddTaskUI() {
  const element = document.querySelector('.model-parent');
  element.style.display = 'block';
}

export function closeTaskUI(){
  const element = document.querySelector('.model-parent');
  element.style.display = 'none';
}

export function renderTaskCompletionStyle(status, index){
  const selector = `p[data-index="${index}"]`;
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    status === true ? element.classList.add('completed'): element.classList.remove("completed");
  })
}