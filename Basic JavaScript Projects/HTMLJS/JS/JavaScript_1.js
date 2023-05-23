function Hello_World_Function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "White");

ctx.fillStyle = grd;
ctx.fillRect(20,20,150,100);

ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();