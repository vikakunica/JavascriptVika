var canvas = document.getElementById('canv');
var context = canvas.getContext("2d");
var img = document.getElementById('source');
var bt1 = document.getElementsByTagName('button')[0];
var bt2 = document.getElementsByTagName('button')[1];
var bt3 = document.getElementsByTagName('button')[2]
var bt4 = document.getElementsByTagName('button')[3]
var bw1=0;
console.log(bw1);
context.drawImage(img,10,10,700,500)
var datagl = context.getImageData(10,10,700,500);
canvas.addEventListener("dragover", function(e){
	e.preventDefault();
})
	
canvas.addEventListener("drop", function(e){
	e.preventDefault();
	var dT = e.dataTransfer;
	var fileReader = new FileReader();
	fileReader.onload = function(){
		img.src = this.result;
	}
	fileReader.readAsDataURL(dT.files[0]);
})
img.onload = function(){
	context.drawImage(img,10,10,700,500);
	datagl = context.getImageData(10,10,700,500);
	if (bw1==1) bt1.click();
	if (bw1==2) bt2.click();
	if (bw1==3) bt3.click();
}
bt1.addEventListener('click',function(){
	bw1 = 1;
    context.drawImage(img,10,10,700,500) 
    var data = context.getImageData(10,10,700,500);
	for (var i = 0 ; i < data.data.length; i++){
		var r = data.data[4*i];
		var g = data.data[4*i+1];
		var b = data.data[4*i+2];
		var a = data.data[4*i+3];
		var bw = (r+g+b)/3;
		data.data[4*i] = bw;
		data.data[4*i + 1] = bw;
		data.data[4*i + 2] = bw;
		data.data[4*i + 3] = a;
	}
	context.putImageData(data,10,10);
})
bt2.addEventListener('click',function(){
		bw1 = 2;
   		context.drawImage(img,10,10,700,500)
   		var data = context.getImageData(10,10,700,500);
		for (var i = 0 ; i < data.data.length; i++){
		var r = data.data[4*i];
		var g = data.data[4*i+1];
		var b = data.data[4*i+2];
		var a = data.data[4*i+3];
		r = 255-r;
		g = 255-g;
		b = 255-b;
		data.data[4*i] = r;
		data.data[4*i + 1] = g;
		data.data[4*i + 2] = b;
		data.data[4*i + 3] = a;
	}
	context.putImageData(data,10,10);
})
bt3.addEventListener('click',function(){
	bw1 = 3;
	context.drawImage(img,10,10,700,500)
	var data = context.getImageData(10,10,700,500);
	for (var i = 0 ; i < data.data.length; i++){
		var r = data.data[4*i];
		var g = data.data[4*i+1];
		var b = data.data[4*i+2];
		var a = data.data[4*i+3];
		r = r*0.393 + g*0.769 + b*0.189;
		g = r*0.349 + g*0.686 + b*0.168;
		b = r*0.272 + g*0.534 + b*0.131;
		data.data[4*i] = r;
		data.data[4*i + 1] = g;
		data.data[4*i + 2] = b;
		data.data[4*i + 3] = a;
	}
	context.putImageData(data,10,10);
})
bt4.addEventListener('click',function(){
	bw1 = 0;
	context.putImageData(datagl,10,10);
})