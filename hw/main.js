window.onload = function() {
    var drawingCanvas = document.getElementById('smile');
    if(drawingCanvas && drawingCanvas.getContext) {
     var context = drawingCanvas.getContext('2d');

     context.strokeStyle = "orange";
     context.fillStyle = "#fc0";
     context.beginPath();
     context.arc(100,100,50,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();

     context.fillStyle = "black";
     context.beginPath();
     context.arc(84,90,8,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();

     context.beginPath();
     context.arc(116,90,8,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();

     context.beginPath();
     context.moveTo(70,115);
     context.quadraticCurveTo(100,130,130,115);
     context.quadraticCurveTo(100,150,70,115); 
     context.closePath();
     context.stroke();
     context.fill();
    }
   }