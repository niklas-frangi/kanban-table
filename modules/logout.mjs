import { global } from "../main.js";
import { removeCards } from './removeCards.mjs';

// Tar bort currentUser från localStorage.
// Gömmer utloggningsknappen.
// Visar inloggningsformuläret.
// Kör removeCards-funktionen.
export function logout() {
    localStorage.removeItem("currentUser");
    global.logoutBtn.style.display = "none";
    global.loginForm.style.visibility = "visible";    
    removeCards();
}