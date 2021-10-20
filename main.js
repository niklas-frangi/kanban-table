//Import modules
import { checkLoginStatus } from './modules/checkLoginStaus.mjs';
import { loginFunction } from './modules/loginFunction.mjs';
import { logout } from './modules/logout.mjs';
import { removeCards } from './modules/removeCards.mjs';
import { DragAndDrop } from './modules/DragAndDrop.mjs';
//import { funktionsnamn } from './modules/filnamn.mjs';
import { newCard } from './modules/newCard.mjs';

// Global
const global = {
  loginForm: document.getElementById('loginform'),
  userName: document.getElementById('username'),
  passWord: document.getElementById('password'),
  loginBtn: document.getElementById('loginBtn'),
  logoutBtn: document.getElementById('logoutBtn'),
  kanbanboardClass: document.querySelector('.kanbanBoard'),
  kanbanboardTodo: document.getElementById('Todo'),
  kanbanboardDoing: document.getElementById('Doing'),
  kanbanboardTest: document.getElementById('Test'),
  kanbanboardDone: document.getElementById('Done'),
  todoBtn: document.getElementById('todoBtn'),
  doingBtn: document.getElementById('doingBtn'),
  testBtn: document.getElementById('testBtn'),
  doneBtn: document.getElementById('doneBtn'),
  kanbanCard: document.querySelector('.kanbanCard'),
  kanbanNewCardBtn: document.querySelectorAll('.kanbanNewCardBtn'),
  wrongCredentials: document.getElementById('wrongCredentials')
}
export { global };

// Cards cointainer
let allCards = [];
export { allCards };

// Loggar in om användaren finns i LocalStorage.
// Kör då loginTrue() som döljer div:ar och som i sin tur kör funktion printExistingCard() som skriver ut korten.
checkLoginStatus();

// Kör drag and drop funktionen.
DragAndDrop();

// Lägger till ett klickevent på knappen för utloggning som kör utloggningsfunktionen.
global.logoutBtn.addEventListener("click", logout);

// Event listener for new card buttons
global.todoBtn.addEventListener("click", function() {
  newCard("Todo");
});
global.doingBtn.addEventListener("click", function() {
  newCard("Doing");
});
global.testBtn.addEventListener("click", function(){
  newCard("Test");
});
global.doneBtn.addEventListener("click", function(){
  newCard("Done");
});

// Event listener for login
global.loginBtn.addEventListener("click", loginFunction);