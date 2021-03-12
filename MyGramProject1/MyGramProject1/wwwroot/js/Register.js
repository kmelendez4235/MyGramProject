var myDiv = document.getElementById("maindiv");
var newh3 = document.createElement("h3");
newh3.innerHTML = "User personal Information ";
myDiv.appendChild(newh3);


var newForm = document.createElement("form");
var newTable = document.createElement("table");
var tBody = document.createElement("tBody");

var tr = document.createElement("tr");
var td = document.createElement("td");
td.innerHTML = "First Name:";
tr.appendChild(td);

var td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "firstname");
input.setAttribute("placeholder", "Add your first Name");
td.appendChild(input);
tr.appendChild(td);

var td = document.createElement("td");
td.innerHTML = "Last Name:";
tr.appendChild(td);

var td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "lastname");
input.setAttribute("placeholder", "Add your Last Name");
td.appendChild(input);
tr.appendChild(td);
tBody.appendChild(tr);

//gender

var tr = document.createElement("tr");
var td = document.createElement("td");
td.innerHTML = "Gender:";
tr.appendChild(td);

var input = document.createElement("input");
var td = document.createElement("td");
input.setAttribute("type", "radio");
var myTextNode = document.createTextNode("Male");
td.appendChild(input);
td.appendChild(myTextNode);
tr.appendChild(td);

var input = document.createElement("input");
var td = document.createElement("td");
input.setAttribute("type", "radio");
var myTextNode = document.createTextNode("Female");
td.appendChild(input);
td.appendChild(myTextNode);
tr.appendChild(td);


var input = document.createElement("input");
var td = document.createElement("td");
input.setAttribute("type", "radio");
var myTextNode = document.createTextNode("Prefer not to Respond");
td.appendChild(input);
td.appendChild(myTextNode);
tr.appendChild(td);
tBody.appendChild(tr);



//email

var tr = document.createElement("tr");
var td = document.createElement("td");
td.innerHTML = "Email Address:";
tr.appendChild(td);

var td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "email");
input.setAttribute("placeholder", "Add your Email Address");
td.appendChild(input);
tr.appendChild(td);
tBody.appendChild(tr);


//country

var tr = document.createElement("tr");
var td = document.createElement("td");
td.innerHTML = "Country:";
tr.appendChild(td);

var td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "country");
input.setAttribute("placeholder", "Select");
td.appendChild(input);
tr.appendChild(td);
tBody.appendChild(tr);

//button

var tr = document.createElement("tr");
var td = document.createElement("td");
var button = document.createElement("button");
button.innerHTML = "Update user Information";
td.appendChild(button);
tr.appendChild(td);



tBody.appendChild(tr);
newTable.appendChild(tBody);
newForm.appendChild(newTable);
myDiv.appendChild(newForm);
