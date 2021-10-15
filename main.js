//Placeholders för import av modulfiler (exempel nedan)
import { checkLoginStatus } from './modules/checkLoginStaus.mjs';
//import { funktionsnamn } from './modules/filnamn.mjs';
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
  kanbanboardClass: document.getElementById('kanbanBoard'),
  kanbanboardTodo: document.getElementById('Todo'),
  kanbanboardDoing: document.getElementById('Doing'),
  kanbanboardTest: document.getElementById('Test'),
  kanbanboardDone: document.getElementById('Done'),
  todoBtn: document.getElementById('todoBtn'),
  doingBtn: document.getElementById('doingBtn'),
  testBtn: document.getElementById('testBtn'),
  doneBtn: document.getElementById('doneBtn'),
  kanbanNewCardBtn: document.getElementById('kanbanNewCardBtn'),
  wrongCredentials: document.getElementById('wrongCredentials')
}
export { global };

// Cards cointainer
let allCards = [];
export { allCards };

checkLoginStatus();


addCurrentUser();

function addCurrentUser(){
  localStorage.setItem("currentUser", "niklas");
  console.log(localStorage);
}


logOut();
function logOut(){
  localStorage.removeItem("currentUser");
  console.log(localStorage);
/*   global.kanbanboardClass.style.visibility = "hidden"; */
/*   global.kanbanboardTodo.style.visibility = "hidden";
  global.kanbanboardDoing.style.visibility = "hidden";
  global.kanbanboardTest.style.visibility = "hidden";
  global.kanbanboardDone.style.visibility = "hidden"; */
/*   global.loginForm.style.visibility = "hidden" */
  global.loginForm.style.visibility = "visible"
/*   global.loginForm.style.display = "none" */
/*   global.loginForm.style.display = "block" */
}