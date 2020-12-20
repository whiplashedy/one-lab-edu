var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var x = document.getElementById("demo");
function getLocation() {  
    if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(showPosition);  } 
    else { x.innerHTML = "Geolocation is not supported by this browser.";  }}
    function showPosition(position) { 
        x.innerHTML = "Latitude: " + position.coords.latitude +  "<br>Longitude: " + position.coords.longitude;}

//console.log(getLocation());




document.getElementById("name").value = JSON.parse(localStorage.getItem("namesurname"))["name"];
console.log(JSON.parse(localStorage.getItem("namesurname")));
document.getElementById("surname").value = JSON.parse(localStorage.getItem("namesurname"))["surname"];
document.getElementById("birthday").value = localStorage.getItem("birthday");
var checked = localStorage.getItem('gender');
console.log(checked);
if (checked === "true") {
    document.getElementById("f").checked = true;
    console.log("blin");
}
else{
    document.getElementById("m").checked = true;
}
document.getElementById("telephone").value = localStorage.getItem("telephone");
document.getElementById("edu").value = localStorage.getItem("education");
document.getElementById("address").value = localStorage.getItem("address");