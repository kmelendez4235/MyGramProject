var form = document.getElementById("MainForm");
form.onsubmit = function (event) {
    event.preventDefault();
}

var loginButton = document.getElementById("Login");
loginButton.onclick = function () {
    var userInput = document.getElementById("UserName");
    var passwordInput = document.getElementById("Password");
    alert(userInput.value);
    alert(passwordInput.value);

    var user = {
        UserName: userInput,
        Password: passwordInput
    };

    console.log(user);

    fetch("/Home/Login", {
        method: "POST",
        cache: "no-cache"
    });
}