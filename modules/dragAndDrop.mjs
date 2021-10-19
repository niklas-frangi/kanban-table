export function DragAndDrop() {
  // Alla element med classen nonDrop går inte att droppa i.
  let noDropZone = document.querySelectorAll('.noDrop');
  noDropZone.forEach(a=>a.addEventListener("dragover", denyDrop));
  // Lägger EventListener på alla columner.
  let column = document.querySelectorAll('.kanbanColumn');
  column.forEach(a=>a.addEventListener("drop", drop));
  column.forEach(a=>a.addEventListener("dragover", allowDrop));
  column.forEach(a=>a.addEventListener("dragenter", dragTarget));
  column.forEach(a=>a.addEventListener("dragleave", dragLeaveTarget));

  let allKanbanCard= document.querySelectorAll('.kanbanCard');
  allKanbanCard.forEach(a=>a.addEventListener("dragover", denyDrop));
  allKanbanCard.forEach(a=>a.addEventListener("dragstart", drag));

  // Tillåter drop.
  function allowDrop(ev) {
    ev.preventDefault();
  }
  // Stoppar bubbling.
  function denyDrop(ev) {
    ev.stopPropagation();
  }
  // Sätter en ram på dropTarget.
 function dragTarget(ev) {
    if (ev.target.className === "kanbanColumn") {
      ev.target.style.border = "2px solid black"; 
    }
  }
 // Tar bort på dropTarget.
 function dragLeaveTarget(ev) {
    if (ev.target.className === "kanbanColumn") {
    ev.target.style.border = ""; 
    }
  }
  // Lägger data i "text" om dropItem, så att det kan identifieras av nästa funktion.
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  // Stoppar in dropItem i dropTarget samt kör funktion addCardColumnToLocalStorage() med parametrar, så det sparas i LocalStorage.
  function drop(ev) {
    ev.preventDefault();
    let dragged = ev.dataTransfer.getData("text");
    let draggedItem = document.getElementById(dragged);
    if (ev.target.className == "kanbanColumn") {
      ev.target.style.background = "";
      ev.target.appendChild( draggedItem );
    }
    if (ev.target.id === ('Todo')){
      addCardColumnToLocalStorage(draggedItem.id, 'Todo');
    }
    else if (ev.target.id === ('Doing')){
      addCardColumnToLocalStorage(draggedItem.id, 'Doing');
    }
    else if (ev.target.id === ('Test')){
      addCardColumnToLocalStorage(draggedItem.id, 'Test');
    }
    else if (ev.target.id === ('Done')){
      addCardColumnToLocalStorage(draggedItem.id, 'Done');
    }
  }
  // Funktion som sparar i LocalStorage.
  function addCardColumnToLocalStorage(parameterCardID, column){
    parameterCardID = parseInt(parameterCardID, 10);
    let allCardsParse = JSON.parse(localStorage.getItem('allCards'));
    let selectedCardIndex = allCardsParse.findIndex(a => a.cardId === parameterCardID);
    allCardsParse[selectedCardIndex].cardColumn = column;
    localStorage.setItem('allCards', JSON.stringify(allCardsParse));
  } 
}