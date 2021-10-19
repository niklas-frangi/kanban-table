

//import { printExistingCard } from '/printCards.mjs'

export function saveCard(cardStatus, cardText) {

    //function variables
    let cardId = 1;
    let pullAllCards = [];
    let cardObject = {}; //{"cardId": "", "cardText": "", "cardColumn": "todo"}


    if (localStorage.getItem("allCards") !== null) {
        pullAllCards = JSON.parse(localStorage.getItem("allCards"));
        cardId = pullAllCards.length + 1;
        console.log(cardId);
    }

    //build card object, push to array and then local storage
    cardObject = {"cardId": cardId, "cardText": cardText, "cardColumn": cardStatus};
    pullAllCards.push(cardObject);    
    localStorage.setItem("allCards", JSON.stringify(pullAllCards));
  
}