import todoList from "./todo-list";
import { renderUI } from "./page-load";

export function handleDelete(index) {
  const taskList =  new todoList();
  taskList.removeTask(index);
}