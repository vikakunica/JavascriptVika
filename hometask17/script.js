var canvas = document.getElementById('canv');
var context = canvas.getContext("2d");
var div = document.getElementsByTagName('div')[0];
window.x1 = 0;
window.y1 = 0;
window.x2 = 0;
window.y2 = 0;
var clrscr = document.getElementsByTagName('button')[0];
clrscr.addEventListener('click',function(){
	context.fillStyle =  '#FFFFFF';
	context.fillRect(0,0,1000,500);
		localStorage.movetoX =' '
		localStorage.movetoY =' '
		localStorage.linetoX =' ' 
		localStorage.linetoY =' ' 
})
var draw = function(e){
	context.beginPath();
	x = x1;
	y = y1;		
	localStorage.movetoX +=' ' + x;
	localStorage.movetoY +=' ' + y;
    context.moveTo(x,y);
	context.lineTo(e.clientX,e.clientY);
	context.stroke();
	x1 = e.clientX;
	y1 = e.clientY;
	localStorage.linetoX +=' ' + x1;
	localStorage.linetoY +=' ' + y1;
	console.log(e)
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
var mtX = localStorage.movetoX.trim().split(' ');
var mtY = localStorage.movetoY.trim().split(' ');
var ltX = localStorage.linetoX.trim().split(' ');
var ltY = localStorage.linetoY.trim().split(' ');
for (var i = 0; i<mtX.length; i++){
	mtX[i] = Number(mtX[i]);
	mtY[i] = Number(mtY[i]);
	ltX[i] = Number(ltX[i]);
	ltY[i] = Number(ltY[i]);
}
console.log(mtX);
console.log(mtY);
console.log(ltX);
console.log(ltY);
context.beginPath();
for (var i = 0; i < mtX.length; i++) {
	context.moveTo(mtX[i],mtY[i]);
	context.lineTo(ltX[i],ltY[i]);
}
context.stroke();


