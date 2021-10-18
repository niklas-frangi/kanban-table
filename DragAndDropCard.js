function allowDrop(ev) {
    ev.preventDefault();
    console.log("Allow!");
}
  
function denyDrop(ev) {
    ev.stopPropagation();
    console.log("Deny!");
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id);
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
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));
    console.log(ev.target.id);
    if (ev.target.id === ('toDoColumn')){
      document.getElementById(data).classList.add('toDo');
      addCardColumnToLocalStorage(data, 'toDo');
    }
    else if (ev.target.id === ('doingColumn')){
      document.getElementById(data).classList.add('doing');
      addCardColumnToLocalStorage(data, 'doing');
    }
    else if (ev.target.id === ('testColumn')){
      document.getElementById(data).classList.add('test');
      addCardColumnToLocalStorage(data, 'test');
    }
    else if (ev.target.id === ('doneColumn')){
      document.getElementById(data).classList.add('done');
      addCardColumnToLocalStorage(data, 'done');
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