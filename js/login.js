
function logIn(){
    var user_type = document.getElementById("user-type").value;
    var user_name = document.getElementById("user-name").value;
    var password = document.getElementById("password").value;
    if(user_type == "" || user_type == undefined){
        alert("Please select the USER TYPE.");
        return false;
    }else if(user_name == "" || user_name == undefined){
        alert("Please select the USER NAME.");
        return false;
    }else if(password == "" || password == undefined){
        alert("Please select the PASSWORD.");
        return false;
    }else{
        var user_exists = users.filter(user => {
            return user["user-type"] === user_type.trim()
                && user["user-name"] === user_name.trim()
                && user.password === password.trim();
        })
        if(user_exists.length > 0){
            sessionStorage.setItem("user-type", user_type.trim());
            sessionStorage.setItem("user-name", user_name.trim());
            document.getElementsByClassName("login-container")[0].style.display = "none";
            document.getElementsByClassName("overlay")[0].style.display = "none";
        }else{
            alert("Invalid USER NAME or PASSWORD.");
            return false;
        }
    }
}

function close(){
    document.getElementsByClassName("login-container")[0].style.display = "none";
    document.getElementsByClassName("overlay")[0].style.display = "none";
}

function logout(){    
    sessionStorage.removeItem("user-type");
    sessionStorage.removeItem("user-name");
    document.getElementsByClassName("login-container")[0].style.display = "block";
    document.getElementsByClassName("overlay")[0].style.display = "block";
}