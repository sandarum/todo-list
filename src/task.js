export default class task {
  constructor(title, description = "", dueDate = "No Due Date") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isCompleted = false;
  }

  getTaskInfo() {
    return {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      isCompleted: this.isCompleted
    }
  }

  updateTaskStatus(status) {
    this.isCompleted = status;
  }

  updateTaskDetails(title, description, dueDate = "No Due Date"){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

}