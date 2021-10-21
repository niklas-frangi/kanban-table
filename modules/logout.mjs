import { global } from "../main.js";
import { removeCards } from './removeCards.mjs';

// Tar bort currentUser från localStorage.
// Gömmer utloggningsknappen.
// Visar inloggningsformuläret.
// Kör removeCards-funktionen.
export function logout() {
    localStorage.removeItem("currentUser");
    global.logoutForm.style.display = "none";
    global.loginForm.style.display= "inherit";
    document.getElementById('loggedInAsName').remove();
    document.getElementById('loggedInAs').remove();
    removeCards();
}