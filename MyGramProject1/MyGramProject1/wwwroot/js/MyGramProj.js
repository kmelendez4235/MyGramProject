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

var myDiv = document.getElementById("div2");
var newSpan = document.createElement("span");
newSpan.innerHTML = "Image 1 ";
myDiv.appendChild(newSpan);


var newSpan = document.createElement("span");
newSpan.innerHTML = "Image 2 ";
myDiv.appendChild(newSpan);


var newSpan = document.createElement("span");
newSpan.innerHTML = "Image 3 ";
myDiv.appendChild(newSpan);


var newSpan = document.createElement("span");
newSpan.innerHTML = "Image 4 ";
myDiv.appendChild(newSpan);

var newSpan = document.createElement("span");
newSpan.innerHTML = "Image 5";
myDiv.appendChild(newSpan);

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

var x = 5; //Number
var y = "May the Force be with you"; //String
var z = 'Second string line'; //String

console.log(x);
console.log(y);
console.log(z);

var a = 22;
var b = 7;
var c = a > b;



function firstFunction() {
    console.log(c);
}

firstFunction();


var f = '"A long time ago in a galaxy far, far away."'; //String

console.log(f);

var g = '"\t   A long time ago in a galaxy far, far away.\t   "'; //tabstring

console.log(g);

var h = '"  A long time ago in a galaxy far, far away."';  //sub
var j = h.substring(0, 4);

console.log(j);

var k = '     "A long time ago in a galaxy far, far away."    '; //Trimstring
var l = k.trim();

console.log(l);




"use strict";

var date = new Date(2017, 10, 7);

document.write(date.getMonth() +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear()); //10/7/2017

document.write("<br>");



var date = new Date(2022, 3, 7);

document.write((date.getMonth() + 1).toString()
    .padStart(2, "0")
    +
    "/" +
    date.getDate().toString().padStart(2, "0") +
    "/" +
    date.getFullYear());

document.write("<br>");


document.write(date.toLocaleString("ta-IN"));

document.write("<br>");



var m = moment().format("MM/DD/yyyy h:mm:ss");

document.write(m);

document.write("<br>");


var q = new Date(1999, 12, 11);
var r = new Date(1995, 11, 12);
var s = q > r;

switch (s) {
    case false:
        document.write("Second date is greater");
        break;
        case true:
        document.write("First date is greater");
        break;
    default:
        document.write("I don't recognixe this option");
        break;
}

    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
