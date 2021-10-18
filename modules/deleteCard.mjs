export function deleteCard(){
    var elements = document.getElementsByClassName("kanbanCard");

var myFunction = function() {
    //Ta bort aktuella diven ur DOMen.
    this.remove();

    //Ta bort item ur localStorage (in progress)
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}
}