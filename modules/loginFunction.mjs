import { loginTrue } from './checkLoginStaus.mjs';
import { global } from '../main.js';
import { printExistingCard } from './printCards.mjs';




export function loginFunction(){
    var getUser = document.getElementById("username").value;
    var getPass = document.getElementById("password").value;


    fetch("inloggningsuppgifter.json")

        .then(function(response){
            return response.json();
        })
        .then(function(json){
            for (i=0; i<JSON.lenght; i++) {  
                if (getUser == json[i].username && getPass == json[i].password){
                    localStorage.setItem("currentUser", getUser);
                    loginTrue();
                }else{
                    global.wrongCredentials.style.display = "block";
                }
            }
      
        }) 
       
};


