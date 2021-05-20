canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="";
var last_position_of_x,last_position_of_y;
color="black";
width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").Value;
width_of_line=document.getElementById("width_of_line").value;
mouseEvent="mousedown";    
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseup";    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="my_mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
ctx.beginpath();
ctx.strokestyle=color;
ctx.linewidth=width_of_line;
ctx.moveTo(last_postiton_of_x,last_position_of_y);
ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
ctx.stroke(); 
}
last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;    
}