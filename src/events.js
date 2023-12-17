import { handleCloseUI, handleDelete, handleAddTaskUI, handleAddTask, handleTaskStatus } from "./event-handle";

export function clickDelete(){
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach( button => {
    button.addEventListener('click',()=> {
      handleDelete(button.dataset.index);
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
    console.log('EVENT');
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