var xhr = new XMLHttpRequest();
xhr.open("GET","music.json",true);
xhr.onload = function(){
	var data = JSON.parse(this.responseText);
	var body = document.getElementsByTagName('body')[0];
	song = document.createElement('audio');
	song.src = data[0].record;
	body.appendChild(song);
	var div2 = document.createElement('div');
			body.appendChild(div2);
	var progress = document.createElement('progress');
			div2.appendChild(progress);
		var span2 = document.createElement('span');
			div2.appendChild(span2);
		var span3 = document.createElement('span');
			div2.appendChild(span3)
		var div3 = document.createElement('div');
			body.appendChild(div3);
		var play = document.createElement('button');
			play.type = 'button';
			play.innerHTML = "<img src = 'play.png' height='20' width='20' style='vertical-align:middle'>"
			div3.appendChild(play);
		var stop = document.createElement('button');
			stop.type = 'button';
			stop.innerHTML = "<img src = 'stop.png' height='20' width='20' style='vertical-align:middle'>"
			div3.appendChild(stop);
		var volume = document.createElement('input');
			volume.type = 'range';
			volume.min = 0;
			volume.max = 1;
			volume.step = 0.1;
			div3.appendChild(volume);
		var rewind1 = document.createElement('button');
			rewind1.type= 'button';
			rewind1.innerHTML = "<img src = 'rewind1.png' height='20' width='20' style='vertical-align:middle'>";
			div3.appendChild(rewind1);
		var rewind2 = document.createElement('button');
			rewind2.type= 'button';
			rewind2.innerHTML = "<img src = 'rewind2.png' height='20' width='20' style='vertical-align:middle'>";
			div3.appendChild(rewind2);
		var loop = document.createElement('button');
			loop.type= 'button';
			loop.innerHTML = "<img src = 'loop.png' height='20' width='20' style='vertical-align:middle'>";
			div3.appendChild(loop);

	songValue = 1;
	song.addEventListener('loadedmetadata',function(){
		progress.max = song.duration;
		progress.value = song.currentTime;	
	})
		
	play.addEventListener('click',function() {			
		if(songValue == 1){
		song.play();
		song.addEventListener('loadedmetadata',function(){progress.max = song.duration;})
		var interval = setInterval(function(){
		progress.value = song.currentTime;	
		},100)
	
		play.innerHTML = "<img src = 'pause.png' height='20' width='20' style='vertical-align:middle'>"
		songValue = 2;
	}
	else {
		song.pause();
		play.innerHTML = "<img src = 'play.png' height='20' width='20' style='vertical-align:middle'>"
		songValue = 1
	}
})
progress.addEventListener('click',function(e){
	var b = progress.getBoundingClientRect().width;
	var a = e.offsetX;
	song.currentTime = (a*song.duration)/b;
	progress.max = song.duration;
	progress.value = song.currentTime;	

})

volume.addEventListener('change',function(){
	song.volume = volume.value;
})
stop.addEventListener('click',function(){
	song.pause();
	song.currentTime = 0;
})

rewind1.addEventListener('click',function(){
	song.playbackRate = song.playbackRate*0.8
})	
rewind2.addEventListener('click',function(){
	song.playbackRate = song.playbackRate*1.25
})	


loop.addEventListener('click',function(){
	song.loop = !song.loop
})

song.addEventListener('loadedmetadata',function(){
	var time2m;
	var time2s;
	time1m = Math.floor(song.currentTime/60);
		if (Math.round(song.currentTime%60)<10)	{var time1s ="0"+Math.round(song.currentTime%60)}
		else {var time1s = Math.round(song.currentTime%60)}
	time2m = Math.floor(song.duration/60);
		if (Math.round(song.duration%60)<10)	{time2s ="0"+Math.round(song.duration%60)}
		else {time2s = Math.round(song.duration%60)}
		span2.innerHTML = time1m + ":" + time1s 
		span3.innerHTML =  "/" + time2m +  ":" + time2s
})
var interval = setInterval(function(){
	var time1m = Math.floor(song.currentTime/60);
	if (Math.round(song.currentTime%60)<10)	{var time1s ="0"+Math.round(song.currentTime%60)}
	else {var time1s = Math.round(song.currentTime%60)}
	var time2m = Math.floor(song.duration/60);
	if (Math.round(song.duration%60)<10)	{time2s ="0"+Math.round(song.duration%60)}
	else {time2s = Math.round(song.duration%60)}
	span2.innerHTML = time1m + ":" + time1s 
},100)

	data.forEach(function(item){
		var div1 = document.createElement('div');
			div1.style = "margin: 7px;";
			div1.innerText = item.name;
			body.appendChild(div1);
		var div2 = document.createElement('div');
			body.appendChild(div2);
		var span1 = document.createElement('span');
			span1.innerHTML = "<img src= ' "+ item.cover +" ' " + "height='20' width='20'>"
			div2.appendChild(span1);
		var play1 = document.createElement('button');
			play1.type = 'button';
			play1.innerHTML = "<img src = 'play.png' height='20' width='20' style='vertical-align:middle'>"
			div2.appendChild(play1);
		play1.addEventListener('click',function(){
			song.src = item.record;
			songValue = 1;
			play.click();
		})

	})
}
xhr.send(null);