import { handleCloseUI, handleDelete, handleAddTaskUI, handleAddTask, handleTaskStatus, handleView, handleCloseViewUI, handleEdit, handleCloseEditUI, handleUpdateTask } from "./event-handle";

export function clickDelete(){
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach( button => {
    button.addEventListener('click',()=> {
      handleDelete(button.dataset.index);
    });
  });
}

export function clickView(){
  const viewButtons = document.querySelectorAll('.viewBtn');
  viewButtons.forEach( button => {
    button.addEventListener('click',()=> {
      handleView(button.dataset.index);
    });
  });
}

export function clickEdit(){
  const editButtons = document.querySelectorAll('.editBtn');
  editButtons.forEach( button => {
    button.addEventListener('click',()=> {
      console.log(button.dataset.index);
      handleEdit(button.dataset.index);
    });
  });
}

export function clickAddTaskUI(){
  const addButton = document.querySelector('.add-ui-btn');
  addButton.addEventListener('click',handleAddTaskUI);
}

export function clickCloseTask(){
  const closeButton = document.querySelector('.close-icon');
  closeButton.addEventListener('click',handleCloseUI);
  const modelParent = document.querySelector('.model-parent');
  modelParent.addEventListener('click', (e)=> {
    if(e.target.className === 'model-parent'){
      handleCloseUI();
    }
  })
}

export function clickCloseView(){
  const closeButton = document.querySelector('.view-close-icon');
  closeButton.addEventListener('click',handleCloseViewUI);
  const modelParent = document.querySelector('.task-details-model-parent');
  modelParent.addEventListener('click', (e)=> {
    if(e.target.className === 'task-details-model-parent'){
      handleCloseViewUI();
    }
  })
}

export function clickCloseEdit(){
  const closeButton = document.querySelector('.edit-close-icon');
  closeButton.addEventListener('click',handleCloseEditUI);
  const modelParent = document.querySelector('.edit-model-parent');
  modelParent.addEventListener('click', (e)=> {
    if(e.target.className === 'edit-model-parent'){
      handleCloseEditUI();
    }
  })
}

export function addTask(){
  const addButton = document.querySelector('.add-btn');
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const dueDate = document.querySelector('#due-date');
  const taskForm = document.querySelector('#task-form');

  addButton.addEventListener('click',(e) => {
    e.preventDefault();
    handleAddTask(title.value, description.value, dueDate.value);
    taskForm.reset();
  });
}

export function updateTask(){
  const updateButton = document.querySelector('.edit-btn');
  const title = document.querySelector('#edit-title');
  const description = document.querySelector('#edit-description');
  const dueDate = document.querySelector('#edit-due-date');
  const index = document.querySelector('.index');
  const taskForm = document.querySelector('#edit-form');

  updateButton.addEventListener('click',(e) => {
    e.preventDefault();
    handleUpdateTask(title.value, description.value, dueDate.value, index.textContent);
    taskForm.reset();
  });
}

export function updateTaskStatus(){
  const checkBoxes = document.querySelectorAll('.status');
  if( checkBoxes !== null){
    checkBoxes.forEach(checkBox => {
      checkBox.addEventListener('change', ()=> {
        handleTaskStatus(checkBox.checked, checkBox.dataset.index);
      });
    });
  }
}