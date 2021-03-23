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
input.setAttribute("id", "Firstname");
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
input.setAttribute("id", "Lastname");
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
input.setAttribute("name", "gender");
var myTextNode = document.createTextNode("Male");
td.appendChild(input);
td.appendChild(myTextNode);
tr.appendChild(td);

var input = document.createElement("input");
var td = document.createElement("td");
input.setAttribute("type", "radio");
input.setAttribute("name", "gender");
var myTextNode = document.createTextNode("Female");
td.appendChild(input);
td.appendChild(myTextNode);
tr.appendChild(td);


var input = document.createElement("input");
var td = document.createElement("td");
input.setAttribute("type", "radio");
input.setAttribute("name", "gender");
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
input.setAttribute("id", "Emailaddress");
td.appendChild(input);
tr.appendChild(td);
tBody.appendChild(tr);


//country

var tr = document.createElement("tr");
var td = document.createElement("td");
td.innerHTML = "Country:";
tr.appendChild(td);

var td = document.createElement("td");
var select = document.createElement("select");

var option = document.createElement("option");
option.innerHTML = "USA";
select.appendChild(option);

td.appendChild(select);
tr.appendChild(td);
tBody.appendChild(tr);

//button

var tr = document.createElement("tr");
var td = document.createElement("td");
var button = document.createElement("button");
button.innerHTML = "Update user Information";
button.onclick = function () {
    var firstname = document.getElementById("Firstname").value;
    var lastname = document.getElementById("Lastname").value;
    var emailaddress = document.getElementById("Emailaddress").value;
    var radios = document.getElementsByName("gender");

    var user = {
        firstname: firstname, lastname: lastname, emailaddress: emailaddress, gender: gender, country: country
    }

    fetch("/Home/Saveregister", {
        method: "POST",
        cache: "no-cache",
        headers: {
            'Content-Type': "application/json; charset=UTF-8"
        },
        body: JSON.stringify(user)

    }).then(response => response.text())
        .then(data => alert(data));


}
  
td.appendChild(button);
tr.appendChild(td);



tBody.appendChild(tr);
newTable.appendChild(tBody);
newForm.appendChild(newTable);
myDiv.appendChild(newForm);
