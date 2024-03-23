function login(){

    var loginMenu = document.getElementById("login");
    loginMenu.classList.toggle("show");

}

function signUp(){

    var signUpMenu = document.getElementById("signUp");
    signUpMenu.classList.toggle("show");

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



