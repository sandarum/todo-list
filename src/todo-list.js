export default class todoList {
  static tasks = [];

  getTasks() {
    return todoList.tasks;
  }

  addTask(task) {
    todoList.tasks.push(task);
  }

  removeTask(index) {
    todoList.tasks.splice(index,1);
  }
}