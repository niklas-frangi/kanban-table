//Placeholders för import av modulfiler (exempel nedan)
import { checkLoginStatus } from './modules/checkLoginStaus.mjs';
import { loginFunction } from './modules/loginFunction.mjs';
//import { funktionsnamn } from './modules/filnamn.mjs';
//import { funktionsnamn } from './modules/filnamn.mjs';
//import { funktionsnamn } from './modules/filnamn.mjs';
//import { funktionsnamn } from './modules/filnamn.mjs';

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
