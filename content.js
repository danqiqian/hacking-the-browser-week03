console.log("hello");

document.body.style.color="white";
document.body.style.backgroundColor = "white";
document.body.style.fontSize = "2px";
document.title = "Hacking the Browser Rulez";

var elts = document.getElementsByTagName('h');
for (var i = 0; i < elts.length; i++) {
  elts[i].style['background-color'] = 'white'; 
}


function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo").innerHTML = coords;
}