var loggedIn;
var passW;
var userN;
var getUserN;
var getPassW;
var login;
var signUp;
var file;

let profilePic = document.getElementById("profilePic");
let uploadImage = document.getElementById("uploadImage");

uploadImage.onchange = function(){
    profilePic.src = URL.createObjectURL(uploadImage.files[0]);
}

function loginMenu() {
    menus();
    login.classList.toggle("show");
}

function loginMenuTwo() {
    menus();
    login.classList.toggle("show");
    signUp.classList.toggle("show");
    welcome.classList.togggle("show");
    document.getElementById("welcome").innerHTML = "Welcome " + userN + "!"; 
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
                    login.classList.toggle("show");
                }
            } else {
                displayError();
            }
        }
    }
    
}

function displayError(){
    document.getElementById("error").innerHTML = "Incorrect username or password";
}

function getInputs(){
    getPassW = document.getElementById("passW");
    getUserN = document.getElementById("userN");
}

function menus(){
    login = document.getElementById("login");
    signUp = document.getElementById("signUp");
    welcome = document.getElementById("welcome");
}


