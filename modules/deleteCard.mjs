export function deleteCard(){
    var elements = document.getElementsByClassName("kanbanCard");

var myFunction = function() {
    //Ta bort aktuella diven ur DOMen.
    this.remove();

    let parsed = JSON.parse(localStorage.getItem("allCards"));

    for (i=0; i<parsed.length; i++){
        if(this.id == parsed[i].cardId){
        delete parsed[i];
        }
    }
    // Skapar en ny array med alla element som inte är tomma. delte parsed tömmer men tar inte bort själva elementet
    // därför behövde jag såhär
    let newArray = parsed.filter(value => Object.keys(value).length !== 0);
    localStorage.removeItem("allCards");
    localStorage.setItem('allCards', JSON.stringify(newArray));
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}
}