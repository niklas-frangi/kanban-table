export function loginFunction(){

var loginButton = document.getElementById("loginBtn");



loginButton.addEventListener("click", function(){
    var getUser = document.getElementById("username").value;
    var getPass = document.getElementById("password").value;


    fetch("inloggningsuppgifter.json")

        .then(function(response){
            return response.json();
        })
        .then(function(json){
            for (i=0; i<json.length; i++) {  
                if (getUser == json[i].username && getPass == json[i].password){
                    localStorage.setItem("currentUser", getUser);
                    loginTrue();
                }else{
                    document.getElementById("wrongCredentials").style.display = "block";
                }
            }
      
        }) 
       
});

}


