var loggedIn;
var passW;
var userN;

function loginMenu() {
    var loginMenu = document.getElementById("login");
    loginMenu.classList.toggle("show");
}

function loginMenuTwo() {
    var loginMenu = document.getElementById("login");
    var signUpMenu = document.getElementById("signUp");
    loginMenu.classList.toggle("show");
    signUpMenu.classList.toggle("show");
}

function signUpMenu() {
    var signUpMenu = document.getElementById("signUp");
    var loginMenu = document.getElementById("login");
    signUpMenu.classList.toggle("show");
    loginMenu.classList.toggle("show");
}

function signUpEnter(){

    var getPassW = document.getElementById("passW");
    var getUserN = document.getElementById("userN");
    var signUpMenu = document.getElementById("signUp");
    var loginMenu = document.getElementById("login");
    loginMenu.classList.toggle("show");
    signUpMenu.classList.toggle("show");
    
   
    passW = getPassW.value;
    userN = getUserN.value;

    localStorage.setItem(userN, passW);

}

function loginEnter() {

    userN = getUserN.value;
    passW = getPassW.value;

    for(let i = 0; i < localStorage.length; i++){
        let currentKey = localStorage.key(i)
        if(currentKey = userN){
            if(localStorage.getItem(currentKey) == passW){
                loggedIn = true;
                if(loggedIn){
                    console.log("yep!" + userN + passW);
                }
            } else {
                console.log("wrong passw sorry buddy");
            }
        }
    }
    
    var loginMenu = document.getElementById("login");
    loginMenu.classList.toggle("show");

}



