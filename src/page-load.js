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
}

function renderTasks(taskList) {

  const fragment = new DocumentFragment();

  taskList.forEach(task => {
    const taskElement = document.createElement('li');
    taskElement.appendChild(renderTaskDetails(task));
    fragment.appendChild(taskElement);
  });

  return fragment;
}

function renderTaskDetails(task) {

  const element = document.createElement('div');
  const checkBox = document.createElement('input')
  checkBox.setAttribute('type','checkbox');
  const title = document.createElement('p')
  const date = document.createElement('p');
  element.classList.add('task');

  const deleteBtn = new Image();
  deleteBtn.src = deleteIcon;

  checkBox.checked = task.getTaskInfo().isCompleted;
  title.textContent = task.getTaskInfo().title;
  date.textContent = task.getTaskInfo().dueDate;

  element.appendChild(checkBox);
  element.appendChild(title);
  element.appendChild(date);
  element.appendChild(deleteBtn);

  return element;

}