import { global } from '../main.js'
import { saveCard } from './saveCard.mjs'


export function newCard(status) {

    //build new card
    const card = document.createElement("div");
    card.setAttribute("id", "tempCardId"); //id will be changed if card is saved using saveCard()
    card.setAttribute("class", "kanbanCard");

    let cardText = document.createElement("textarea");
    cardText.setAttribute("maxlength", "150");
    cardText.setAttribute("rows", "5");
    cardText.setAttribute("columns", "30");
    cardText.setAttribute("placeholder", "Text här..");

    const cardForm = document.createElement("form");
    cardForm.appendChild(cardText);

    card.insertAdjacentElement('beforeend', cardForm);

    //add discard button
    const discardButton = document.createElement("button");
    discardButton.setAttribute("class", "discardButton");
    discardButton.innerText = "x";
    const discardButtonContainer = document.createElement("div");
    discardButtonContainer.setAttribute("class", "discardButtonContainer");
    discardButtonContainer.appendChild(discardButton);
    discardButton.addEventListener('click', function () {
        card.remove();
    })
    card.insertAdjacentElement("afterbegin", discardButtonContainer);

    //add save button
    const saveCardBtn = document.createElement("button");
    saveCardBtn.setAttribute("id", "saveCardBtn");
    saveCardBtn.innerText = "Spara";
    saveCardBtn.addEventListener('click', function () {
        if (cardText.value) {
            saveCard(status, cardText.value);
        }
    })
    card.appendChild(saveCardBtn);

    //add new card to DOM
    switch (status) {
        case ("todo"):
            global.kanbanboardTodo.appendChild(card);
            break;
        case ("doing"):
            global.kanbanboardDoing.appendChild(card);
            break;
        case ("test"):
            global.kanbanboardTest.appendChild(card);
            break;
        case ("done"):
            global.kanbanboardDone.appendChild(card);
            break;
    }

}