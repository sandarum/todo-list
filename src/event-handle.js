import todoList from "./todo-list";
import task from "./task";
import { renderAddTaskUI, closeTaskUI } from "./page-load";
import { pageLoad, clearTasksUI } from "./page-load";

export function handleDelete(index) {
  const taskList =  new todoList();
  taskList.removeTask(index);
  clearTasksUI();
  pageLoad();
}

export function handleAddTaskUI(){
  renderAddTaskUI();
}

export function handleCloseUI(){
  closeTaskUI();
}

export function handleAddTask(title, description, dueDate){
  const taskList =  new todoList();
  taskList.addTask(new task(title, description, dueDate));
  closeTaskUI();
  clearTasksUI();
  pageLoad();
}