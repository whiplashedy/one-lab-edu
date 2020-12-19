var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var demo = document.getElementById("demo");

ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

function getLocation() {  
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        demo.innerHTML = "Geolocation is not supported by this browser.";
    }
    demo.style.border = "1px solid black";
}

function showPosition(position) {
    demo.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

let form  = document.getElementById('form_submit');

if (typeof (form) && form) {
    let data = JSON.parse(sessionStorage.getItem("form_data"));

    if (typeof (data) !== undefined && data) {
        form.elements['first_name'].value   = data["first_name"];
        form.elements['last_name'].value    = data["last_name"];
        form.elements['email'].value        = data["email"];
        form.elements['course_name'].value  = data["course_name"];
        form.elements['mentor_name'].value  = data["mentor_name"];
        form.elements['university'].value   = data["university"];
        form.elements['hobby'].value        = data["hobby"];
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let data = {
            "first_name":   form.elements['first_name'].value,
            "last_name":    form.elements['last_name'].value,
            "email":        form.elements['email'].value,
            "course_name":  form.elements['course_name'].value,
            "mentor_name":  form.elements['mentor_name'].value,
            "university":   form.elements['university'].value,
            "hobby":        form.elements['hobby'].value
        };
        sessionStorage.setItem("form_data", JSON.stringify(data));
        alert("Reloading!");
        location.reload();
    });
}
