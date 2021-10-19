import { global } from '../main.js'
import { deleteCard } from './deleteCard.mjs'
import { changecardText } from './changecardText.mjs'
import { removeCards } from './removeCards.mjs'
import { DragAndDrop } from './DragAndDrop.mjs';

export function printExistingCard(){
    //Nollställer divarna (dvs raderar alla befintliga kort om något existerar) och skriver ut allt på nytt 
    //**removeCards();

    //Tar ut alla korten från localStorage
    const storedCards = JSON.parse(localStorage.getItem('allCards'));
    
    //Filtrerar korten baserat på vilken kolumnstatus dessa har.
    const listallTodoCards = Object.values(storedCards).filter(card => card.cardColumn === 'Todo');
    const listallDoingCards = Object.values(storedCards).filter(card => card.cardColumn === 'Doing');
    const listallTestCards = Object.values(storedCards).filter(card => card.cardColumn === 'Test');
    const listallDoneCards = Object.values(storedCards).filter(card => card.cardColumn === 'Done');

    /*forEach för att skriva ut alla korten och lägg till knapparna Ta bort och Ändra kort.
    Sätter attribut draggable="true" ondragstart="drag(event)" ondragover="denyDrop(event) för drag n drop på korten.*/
    Object.values(listallTodoCards).forEach(card => {
        var newDiv = document.createElement("div");
        newDiv.id = card.cardId
        newDiv.innerHTML = card.cardText +
        "<br><button id='removeCardBtn' onclick='deleteCard()'>Ta bort</button>   <button id='changeCardBtn' onclick='changecardText()'>Ändra kort</button>";
        newDiv.className = 'kanbanCard'
        newDiv.setAttribute('draggable', true);
        global.kanbanboardTodo.appendChild(newDiv);
      });
      Object.values(listallDoingCards).forEach(card => {
        var newDiv = document.createElement("div");
        newDiv.id = card.cardId
        newDiv.innerHTML = card.cardText +
        "<br><button id='removeCardBtn' onclick='deleteCard()'>Ta bort</button>   <button id='changeCardBtn' onclick='changecardText()'>Ändra kort</button>";
        newDiv.className = 'kanbanCard'
        newDiv.setAttribute('draggable', true);
        global.kanbanboardDoing.appendChild(newDiv);
      });
      Object.values(listallTestCards).forEach(card => {
        var newDiv = document.createElement("div");
        newDiv.id = card.cardId
        newDiv.innerHTML = card.cardText +
        "<br><button id='removeCardBtn' onclick='deleteCard()''>Ta bort</button>   <button id='changeCardBtn' onclick='changecardText()'>Ändra kort</button>";
        newDiv.className = 'kanbanCard'
        newDiv.setAttribute('draggable', true);
        global.kanbanboardTest.appendChild(newDiv);
      });
      Object.values(listallDoneCards).forEach(card => {
        var newDiv = document.createElement("div");
        newDiv.id = card.cardId
        newDiv.innerHTML = card.cardText +
        "<br><button id='removeCardBtn' onclick='deleteCard()''>Ta bort</button>   <button id='changeCardBtn' onclick='changecardText()'>Ändra kort</button>";
        newDiv.className = 'kanbanCard'
        newDiv.setAttribute('draggable', true);
        global.kanbanboardDone.appendChild(newDiv);
      });
    DragAndDrop()    
}
/*Lösning av bugg med onClick-event på knappar. Allt som definieras i en modul omfattas av den modulen, 
så det kommer inte att vara tillgängligt för inline JS; en snabb och 'dirty' lösning skulle vara 
att uttryckligen exponera den funktionen för det globala omfånget. Vilket vi gör nedan.
Som gör att det fungerar med inline onClick-event */
window.deleteCard = deleteCard
window.changecardText = changecardText