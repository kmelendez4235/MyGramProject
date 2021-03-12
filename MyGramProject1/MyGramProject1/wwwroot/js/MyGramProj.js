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


//M9

"use strict";

var image1 = new Image("Image1");
var image2 = new Image("Image2");
var image3 = new Image("Image3");
var image4 = new Image("Image4");
var image5 = new Image("Image5");
var image6 = new Image("Image6");
var image7 = new Image("Image7");
var image8 = new Image("Image8");
var image9 = new Image("Image9");
var image10 = new Image("Image10");
var image11 = new Image("Image11");
var image12 = new Image("Image12");
var image13 = new Image("Image13");
var image14 = new Image("Image14");
var image15 = new Image("Image15");
var image16 = new Image("Image16");
var image17 = new Image("Image17");
var image18 = new Image("Image18");
var image19 = new Image("Image19");
var image20 = new Image("Image20");
var image21 = new Image("Image21");
var image22 = new Image("Image22");
var image23 = new Image("Image23");
var image24 = new Image("Image24");
var image25 = new Image("Image25");

var cart = [];
cart.push(image1);
cart.push(image2);
cart.push(image3);
cart.push(image4);
cart.push(image5);
cart.push(image6);
cart.push(image7);
cart.push(image8);
cart.push(image9);
cart.push(image10);
cart.push(image11);
cart.push(image12);
cart.push(image13);
cart.push(image14);
cart.push(image15);
cart.push(image16);
cart.push(image17);
cart.push(image18);
cart.push(image19);
cart.push(image20);
cart.push(image21);
cart.push(image22);
cart.push(image23);
cart.push(image24);
cart.push(image25);

var image;

var tBody = document.getElementById("Image");
var tr = document.createElement("tr"); 
var td = null;
var span = null;
var counter = 1; 

for (var i = 0; i <= cart.length; i++) {
    image = cart[i];


    if (counter == 6) {

        tBody.appendChild(tr); 
        tr = document.createElement("tr"); 
        counter = 1;

    }

    td = document.createElement("td");
    span = document.createElement("span");
    span.innerHTML = image.imageName.toString();
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










    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
