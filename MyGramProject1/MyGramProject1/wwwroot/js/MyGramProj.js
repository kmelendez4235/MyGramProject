var myDiv = document.getElementById("maindiv");
var newSpan = document.createElement("span");
newSpan.innerHTML = "My Gram ";
myDiv.appendChild(newSpan);

var myDiv = document.getElementById("maindiv");
var newSpan = document.createElement("button");
newSpan.innerHTML = "Log In";
myDiv.appendChild(newSpan);

var myDiv = document.getElementById("maindiv");
var newSpan = document.createElement("button");
newSpan.innerHTML = "Sign Up";
myDiv.appendChild(newSpan);




"use strict";

var tBody = document.getElementById("Image");
var tr = document.createElement("tr"); 
var td = null;
var span = null;
var counter = 1; 

for (var i = 1; i <= 25; i++) {


    if (counter == 6) {

        tBody.appendChild(tr); 
        tr = document.createElement("tr"); 
        counter = 1;

    }

    td = document.createElement("td");
    span = document.createElement("span");
    span.innerHTML = "Image " + i;
    td.appendChild(span);
    tr.appendChild(td);

    counter++;
}




var myDiv = document.getElementById("div3");
var newSpan = document.createElement("span");
newSpan.innerHTML = "About ";
myDiv.appendChild(newSpan);

var newSpan = document.createElement("span");
newSpan.innerHTML = "Blog ";
myDiv.appendChild(newSpan);

var newSpan = document.createElement("span");
newSpan.innerHTML = "Jobs ";
myDiv.appendChild(newSpan);

var newSpan = document.createElement("span");
newSpan.innerHTML = "Help";
myDiv.appendChild(newSpan);

var myDiv = document.getElementById("div4");
var newSpan = document.createElement("span");
newSpan.innerHTML = "English ";
myDiv.appendChild(newSpan);

var newSpan = document.createElement("span");
newSpan.innerHTML = "2021 ";
myDiv.appendChild(newSpan);

var newSpan = document.createElement("span");
newSpan.innerHTML = "MyGram";
myDiv.appendChild(newSpan);










    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
