canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
color2 = "black";
color3 = "blue";
color4 = "green";
color5 = "yellow";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(300, 300, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color2;
ctx.lineWidth = 4;
ctx.arc(200, 300, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color3;
ctx.lineWidth = 4;
ctx.arc(100, 300, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color4;
ctx.lineWidth = 4;
ctx.arc(250, 350, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color5;
ctx.lineWidth = 4;
ctx.arc(150, 350, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mouseDown);
function my_mouseDown (e) {
   mouse_x = e.clientX - canvas.offsetLeft;
   mouse_y = e.clientY - canvas.offsetTop;
   console.log("X = " + mouse_x + " and Y = " + mouse_y);
   circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}