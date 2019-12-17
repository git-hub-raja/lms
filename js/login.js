
function logIn(){
    document.getElementsByClassName("login-container")[0].style.display = "none";
    document.getElementsByClassName("overlay")[0].style.display = "none";
}

function close(){
    document.getElementsByClassName("login-container")[0].style.display = "none";
    document.getElementsByClassName("overlay")[0].style.display = "none";
}

function logout(){
    document.getElementsByClassName("login-container")[0].style.display = "block";
    document.getElementsByClassName("overlay")[0].style.display = "block";
}