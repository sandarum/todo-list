import todoList from "./todo-list";
import task from "./task";
import { renderAddTaskUI, closeTaskUI, renderTaskCompletionStyle, renderViewModel, closeViewUI, pageLoad, clearTasksUI, renderEditModel, closeEditUI } from "./page-load";

export function handleDelete(index) {
  const taskList =  new todoList();
  taskList.removeTask(index);
  clearTasksUI();
  pageLoad();
}

export function handleView(index) {
  const taskList =  new todoList();
  const taskDetails = taskList.getTasks()[index].getTaskInfo();
  renderViewModel(taskDetails.title, taskDetails.description, taskDetails.dueDate, taskDetails.isCompleted);
}

export function handleEdit(index) {
  const taskList =  new todoList();
  const taskDetails = taskList.getTasks()[index].getTaskInfo();
  renderEditModel(taskDetails.title, taskDetails.description, taskDetails.dueDate, index );
}

export function handleAddTaskUI(){
  renderAddTaskUI();
}

export function handleCloseUI(){
  closeTaskUI();
}

export function handleCloseViewUI(){
  closeViewUI();
}

export function handleCloseEditUI(){
  closeEditUI();
}

export function handleAddTask(title, description, dueDate){
  const taskList =  new todoList();
  dueDate === "" ? taskList.addTask(new task(title, description)) : taskList.addTask(new task(title, description, dueDate));
  closeTaskUI();
  clearTasksUI();
  pageLoad();
}

export function handleUpdateTask(title, description, dueDate, index){
  const taskList =  new todoList();
  taskList.getTasks()[index].updateTaskDetails(title, description, dueDate);
  closeEditUI();
  clearTasksUI();
  pageLoad();
}

export function handleTaskStatus(status, index) {
  const taskList =  new todoList();
  taskList.getTasks()[index].updateTaskStatus(status);
  renderTaskCompletionStyle(status, index);
}