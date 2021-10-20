import { loginTrue } from './checkLoginStaus.mjs';
import { global } from '../main.js';

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
                else {
                        global.wrongCredentials.style.display= "block";
                }
            })
        })
};