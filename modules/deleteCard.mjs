export function deleteCard() {
    var elements = document.getElementsByClassName("kanbanCard");

    var myFunction = function () {
        //Ta bort aktuella diven ur DOMen.
        this.remove();

        // Hämtar allCards från localStorage och lägger in dem i parsed.
        let parsed = JSON.parse(localStorage.getItem("allCards"));

        // Loopar igenom parsed och kollar om idt matchar med någon id från korten.
        // Om idt matchar så sätts cardColumn till "archived".
        for (i = 0; i < parsed.length; i++) {
            if (this.id == parsed[i].cardId) {
                parsed[i].cardColumn = "archived";
            }
        }
        
        // Uppdaterar localStorage genom att ta bort hela allCards och sedan lägga till en ny allCards med columnvärdet ändrat till "archived".
        localStorage.removeItem("allCards");
        localStorage.setItem('allCards', JSON.stringify(parsed));
    };

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }
}