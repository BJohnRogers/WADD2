var loggedIn;

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
    var passW;
    var userN;
   
    passW = getPassW.value;
    userN = getUserN.value;

    let userDetails = {
        userN,
        passW
    }



}

function loginEnter() {

    if(userN, passW = userDetails){
        loggedIn = true;
    }

    var loginMenu = document.getElementById("login");
    loginMenu.classList.toggle("show");

}



