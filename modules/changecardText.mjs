import { printExistingCard } from './printCards.mjs';

export function changecardText(parameterCardID) {
    

    let localStorageCard = JSON.parse(localStorage.getItem('allCards'));
    let selectedCard = localStorageCard.findIndex(a => a.cardId === parameterCardID);
    let activeText = localStorageCard[selectedCard].cardText;
    



    function popUp() {

        let body = document.querySelector("body");
        body.insertAdjacentHTML('afterbegin', `<div id='popUpContainer'><div id="popUpBox"><textarea type="text" id="changeText">${activeText}</textarea><button id="saveBtn">Spara</button></div></div>`);
        let saveButton = document.getElementById('saveBtn');
        let changeText = document.getElementById('changeText');
        saveButton.addEventListener('click', function () {

            localStorageCard[selectedCard].cardText = changeText.value;
            localStorage.setItem('allCards', JSON.stringify(localStorageCard));
            let removeObject = document.getElementById('popUpContainer');
            removeObject.remove();
            printExistingCard();
        });



    };
    popUp();





}



