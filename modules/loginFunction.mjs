import { loginTrue } from './checkLoginStaus.mjs';


export function loginFunction() {
    var getUser = document.getElementById("username").value;
    var getPass = document.getElementById("password").value;

    
    fetch("inloggningsuppgifter.json")

        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            let newarray = json;
            newarray.forEach((data) => {
                if (data.username === getUser && data.password === getPass) {
                    localStorage.setItem("currentUser", getUser);
                    loginTrue();
                }
                else if (data.username !== getUser && data.password !== getPass){
                    alert('Felaktigt användarnamn eller lösenord');
                    for (let i = 0; i < array.length; i++) {
                        if (array[i] === 2) 
                          continue;
                      }
                }
            })
        })
};