import { printExistingCard } from './printCards.mjs';

export function changecardText(parameterCardID) {
    

    let localStorageCard = JSON.parse(localStorage.getItem('allCards'));
    console.log(localStorageCard)
    console.log(parameterCardID)
    let selectedCard = localStorageCard.findIndex(a => a.cardId === parameterCardID);
    console.log(selectedCard)
    let activeText = localStorageCard[selectedCard].cardText;
    console.log(activeText)
    
    

    function popUp() {

        let body = document.querySelector("body");
        console.log(body);
        body.insertAdjacentHTML('afterbegin', `<div id='popUpContainer'><div id="popUpBox"><textarea type="text" id="changeText">${activeText}</textarea><button id="saveBtn">Spara</button></div></div>`);
        let saveButton = document.getElementById('saveBtn');
        let changeText = document.getElementById('changeText');
        saveButton.addEventListener('click', function () {
            console.log(changeText.value)
            console.log(selectedCard)
            localStorageCard[selectedCard].cardText = changeText.value;
            console.log(localStorageCard)
            localStorage.setItem('allCards', JSON.stringify(localStorageCard));
            let removeObject = document.getElementById('popUpContainer');
            console.log(removeObject)
            removeObject.remove();
            printExistingCard();
        });

        

    };
    popUp();
    



    
}



// knappen måste skicka med idet på just det kortet man klickar på.