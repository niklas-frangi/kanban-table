export function removeCards() {
    let elems = document.querySelectorAll(".kanbanCard");
    elems.forEach.call(elems, function(el) {
      el.remove("kanbanCard");
    });
  }