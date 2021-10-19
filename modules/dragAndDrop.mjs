export function DragAndDrop() {

  let noDropZone = document.querySelectorAll('.noDrop');
  console.log(noDropZone);
  noDropZone.forEach(a=>a.addEventListener("dragover", denyDrop));

  let column = document.querySelectorAll('.kanbanColumn');
  console.log(column);
  column.forEach(a=>a.addEventListener("drop", drop));
  column.forEach(a=>a.addEventListener("dragover", allowDrop));
  column.forEach(a=>a.addEventListener("dragenter", dragTarget));
  column.forEach(a=>a.addEventListener("dragleave", dragLeaveTarget));
  
  let task = document.querySelectorAll('.kanbanCard');
  console.log(task);
  task.forEach(a=>a.addEventListener("dragover", denyDrop));
  task.forEach(a=>a.addEventListener("dragstart", drag));

  function allowDrop(ev) {
    ev.preventDefault();
    console.log("Allow!");
  }
  
  function denyDrop(ev) {
    ev.stopPropagation();
    console.log("Deny!");
  }

 function dragTarget(ev) {
    if (ev.target.className === "kanbanColumn") {
      ev.target.style.border = "2px solid black"; 
    }
 }

 function dragLeaveTarget(ev) {
  if (ev.target.className === "kanbanColumn") {
    ev.target.style.border = ""; 
  }
}

  function drag(ev) {
    let dragged = ev.target;
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(dragged);
    if (ev.target.classList.contains('toDo')){
      ev.target.classList.remove('toDo');
    }
    else if (ev.target.classList.contains('doing')){
      ev.target.classList.remove('doing');
    }
    else if (ev.target.classList.contains('test')){
      ev.target.classList.remove('test');
    }
    else if (ev.target.classList.contains('done')){
      ev.target.classList.remove('done');
    }
  }
  
  function drop(ev) {
    ev.preventDefault();
    let dragged = ev.dataTransfer.getData("text");
    console.log(dragged);
    let draggedItem = document.getElementById(dragged);
    if (ev.target.className == "kanbanColumn") {
      ev.target.style.background = "";
      console.log(draggedItem);
      //dragged.parentNode.removeChild( draggedItem );
      ev.target.appendChild( draggedItem );
    }
    console.log(draggedItem);
    if (ev.target.id === ('toDoColumn')){
      draggedItem.classList.add('toDo');
      addCardColumnToLocalStorage(draggedItem.id, 'toDo');
    }
    else if (ev.target.id === ('doingColumn')){
      draggedItem.classList.add('doing');
      addCardColumnToLocalStorage(draggedItem.id, 'doing');
    }
    else if (ev.target.id === ('testColumn')){
      draggedItem.classList.add('test');
      addCardColumnToLocalStorage(draggedItem.id, 'test');
    }
    else if (ev.target.id === ('doneColumn')){
      draggedItem.classList.add('done');
      addCardColumnToLocalStorage(draggedItem.id, 'done');
    }
  }
  
  function addCardColumnToLocalStorage(parameterCardID, column){
    console.log(parameterCardID);
    parameterCardID = parseInt(parameterCardID, 10);
    console.log(parameterCardID);
    console.log(column);
    let allCardsParse = JSON.parse(localStorage.getItem('allCards'));
    console.log(allCardsParse);
    let selectedCardIndex = allCardsParse.findIndex(a => a.cardId === parameterCardID);
    console.log(selectedCardIndex);
    allCardsParse[selectedCardIndex].cardColumn = column;
    console.log(allCardsParse);
    localStorage.setItem('allCards', JSON.stringify(allCardsParse));
  }
  
  }