export function changecardText(){
    var elements = document.getElementsByClassName("kanbanCard");

var myFunction = function() {
    //skrivit ut som placeholder för att underlätta för Nermin (för att fånga aktuellt element)
    console.log(this)
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}
}