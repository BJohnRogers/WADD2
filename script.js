function loginMenu() {
    var loginMenu = document.getElementById("login");
    var signUpMenu = document.getElementById("signUp");
    loginMenu.classList.toggle("show");
    signUpMenu.classList.remove("show");
}

function signUpMenu() {
    var signUpMenu = document.getElementById("signUp");
    var loginMenu = document.getElementById("login");
    signUpMenu.classList.toggle("show");
    loginMenu.classList.remove("show");
}

function loginEnter(){

}

function signUpEnter(){

    var getPassW = document.getElementById("passW");
    var getUserN = document.getElementById("userN");
    var passW;
    var userN;
   
    passW = getPassW.value;
    userN = getUserN.value;

    let userDetails = {
        userN,
        passW
    }

}



