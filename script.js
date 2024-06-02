var loggedIn;
var passW;
var userN;
var getUserN;
var getPassW;
var login;
var signUp;

function displayWelcome(){
    document.getElementById("welcome").innerHTML = "Welcome " + userN + "!"; 
}



function loginMenu() {
    menus();
    login.classList.toggle("show");
}

function loginMenuTwo() {
    menus();
    login.classList.toggle("show");
    signUp.classList.toggle("show");
}

function signUpMenu() {
    menus();
    signUp.classList.toggle("show");
    login.classList.toggle("show");
}

function signUpEnter(){

    getInputs();
    menus();

    login.classList.toggle("show");
    signUp.classList.toggle("show");
    
   
    passW = getPassW.value;
    userN = getUserN.value;

    localStorage.setItem(userN, passW);

}

function loginEnter() {

    getInputs();
    menus();

    let thisUserN = getUserN.value;
    let thisPassW = getPassW.value;

    for(let i = 0; i < localStorage.length; i++){
        let currentKey = localStorage.key(i)
        if(currentKey == thisUserN){
            if(localStorage.getItem(currentKey) == thisPassW){
                loggedIn = true;
                if(loggedIn){
                    console.log("yep!" + thisUserN + thisPassW);
                    displayWelcome();
                    login.classList.toggle("show");
                }
            } else {
                console.log("wrong passw sorry buddy");
            }
        }
    }
    
}

function getInputs(){
    getPassW = document.getElementById("passW");
    getUserN = document.getElementById("userN");
}

function menus(){
    login = document.getElementById("login");
    signUp = document.getElementById("signUp");
}


