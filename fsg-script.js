
// prompt user for variable inputs
var d1 = prompt("Enter first number");
var d2 = prompt("Enter second number");
var j = prompt("Enter iterations");

// calculate inputs given to generate iterative outputs
var text = " "
var i = 2;

do{
  var d3 = Number(d1) + Number(d2);
  text +=" " + i + " - ";
  text += d2;
  text +="<br>";
  i++;
  d1 = d2;
  d2 = d3;
}
 while (i <= j);

document.getElementById("text").innerHTML = text;