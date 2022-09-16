var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");
var rectangle = document.getElementById("rectangle");


function redColor(){
  yellow.style.backgroundColor = "grey";
  red.style.backgroundColor = "red";
  green.style.backgroundColor = "grey";
}

function yellowColor(){
  red.style.backgroundColor = "grey";
  yellow.style.backgroundColor = "yellow";
  green.style.backgroundColor = "grey";
}

function greenColor(){
  red.style.backgroundColor = "grey";
  green.style.backgroundColor = "green";
  yellow.style.backgroundColor = "grey";
}