import { loginTrue } from './checkLoginStaus.mjs';
import { global } from '../main.js';

    export const checkUserAndAddToLocalStorade = () =>{

        let user = global.userName.value;
        let password = global.passWord.value;

        const getData = async () => {
            const response = await fetch ("inloggningsuppgifter.json");
            const users = await response.json();

            for (let i = 0; i < users.length; ++i){
                if (user === users[i].username && password === users[i].password){
                    localStorage.setItem("currentUser", users[i].username);
                }
            }

            if (localStorage.getItem("currentUser") != null){
                loginTrue()
              }
                else
                    global.wrongCredentials.style.display= "inherit";
            
        }
        getData()
    }