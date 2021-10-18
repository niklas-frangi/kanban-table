// Hämtar alla element med klassen canbanCard och kör en forEach-loop som tar bort varje element.
export function removeCards(){
  document.querySelectorAll('.kanbanCard').forEach(card => card.remove());}