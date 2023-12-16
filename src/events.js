import { handleDelete } from "./event-handle";

export function clickDelete(){
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach( button => {
    button.addEventListener('click',handleDelete);
  });
}