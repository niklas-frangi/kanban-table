import { printExistingCard } from './printCards.mjs'

export function saveCard(cardStatus, cardText) {

    //function variables
    let cardId = 1;
    let storedCards = [];
    let cardObject = {}; //{"cardId": "", "cardText": "", "cardColumn": "todo"}


    if (localStorage.getItem("allCards") !== null) {
        storedCards = JSON.parse(localStorage.getItem("allCards"));
        cardId = storedCards.length + 1;
    }

    //build card object, push to array and then local storage
    cardObject = {"cardId": cardId, "cardText": cardText, "cardColumn": cardStatus};
    storedCards.push(cardObject);   
    localStorage.setItem("allCards", JSON.stringify(storedCards));

    //Print cards to DOM
    printExistingCard();
    
}