var canvas = document.getElementById('canv');
var context = canvas.getContext("2d");
var div = document.getElementsByTagName('div')[0];
window.x1 = 0;
window.y1 = 0;
window.x2 = 0;
window.y2 = 0;
var draw = function(e){
	context.beginPath();
	x = x1;
	y = y1;
    context.moveTo(x,y);
	context.lineTo(e.clientX,e.clientY);
	context.stroke();
	x1 = e.clientX;
	y1 = e.clientY;
}
div.onmousedown = function(e){
	 x1 = e.clientX;
	 y1 = e.clientY;
	console.log(e)
	div.addEventListener('mousemove', draw)
}
div.onmouseup = function(){
	div.removeEventListener('mousemove', draw)
}