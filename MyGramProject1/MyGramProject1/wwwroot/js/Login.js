var myDiv = document.getElementById("maindiv");

var newForm = document.createElement("form");
var newTable = document.createElement("table");
var tBody = document.createElement("tBody");

var tr = document.createElement("tr");
var td = document.createElement("td");
td.innerHTML = "User:";
tr.appendChild(td);

var td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "user");
input.setAttribute("placeholder", "Type User Name");
td.appendChild(input);
tr.appendChild(td);
tBody.appendChild(tr);

var tr = document.createElement("tr");
var td = document.createElement("td");
td.innerHTML = "Password:";
tr.appendChild(td);

var td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "password");
input.setAttribute("placeholder", "Type Password");
td.appendChild(input);
tr.appendChild(td);
tBody.appendChild(tr);

//

var tr = document.createElement("tr");
var td = document.createElement("td");
var button = document.createElement("button");
button.innerHTML = "Log In";
td.appendChild(button);
tr.appendChild(td);



tBody.appendChild(tr);
newTable.appendChild(tBody);
newForm.appendChild(newTable);
myDiv.appendChild(newForm);