
import { global } from '../main.js';
import { printExistingCard } from '../printCards.mjs';

export function checkLoginStatus() {

    let localStorageCurrentUser = localStorage.getItem("currentUser");
    
    const getData = async () => {
        const response = await fetch ("inloggningsuppgifter.json");
        const users = await response.json();
        
        let filterUsername = users.map((users) => users.username);

        for (let i = 0; i < filterUsername.length; ++i){
            if (localStorageCurrentUser === filterUsername[i]){
                loginTrue();
            }
        }
    }
    getData()
}

export function loginTrue() {
    global.kanbanNewCardBtn.forEach(a=>a.style.display = 'inherit');
    global.loginForm.style.display = "none";
    global.logoutBtn.style.display = "inherit";
    printExistingCard();
}