export function checkLoginStatus() {

    let localStorageCurrentUser = localStorage.getItem("currentUser");
    console.log(localStorageCurrentUser);
    const getData = async () => {
        const response = await fetch ("inloggningsuppgifter.json");
        const users = await response.json();
        console.log(users);
        let filterUsername = users.map((users) => users.username);

        for (let i = 0; i < filterUsername.length; ++i){
            if (localStorageCurrentUser === filterUsername[i]){
                console.log("Logga in!");
                // loginTrue();
                // printExistingCard();
            }
            else{
                console.log("Loggar inte in!");
            }
        }
    }
    getData()
}