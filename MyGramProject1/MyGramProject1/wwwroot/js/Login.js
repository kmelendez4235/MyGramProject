var form = document.getElementById("MainForm");
form.onsubmit = function (event) {
    event.preventDefault();
}

var loginButton = document.getElementById("LogUser");
loginButton.onclick = function () {
    var userInput = document.getElementById("UserName");
    var passwordInput = document.getElementById("Password");
    var user = {
        UserName: userInput.value,
        Password: passwordInput.value
    };


    fetch("/Home/LogUser", {
        method: "POST",
        cache: "no-cache",
        headers: {
            'Content-Type': "application/json; charset=UTF-8"
        },
        body: JSON.stringify(user)

    }).then(response => response.text())
      .then(data => alert(data));

}