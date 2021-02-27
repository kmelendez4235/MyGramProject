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

var date = new Date("June 13,2018 11:11:01");

document.write(date);

var date = new Date("June 9,2018 11:11:01");

document.write(date.getTime());






