var body = document.getElementsByTagName('body')[0];
var divmain = document.createElement('div')
body.appendChild(divmain);
divmain.id = 'main';
var n = 10;
for (var i=0; i<=n; i++){
	var div = document.createElement('div')
	divmain.appendChild(div);
	div.id = i;
	div.className = 'st';
	for (var j=0; j<=n; j++){
    var div1 = document.createElement('div')
    div.appendChild(div1);
    div1.className = 'kletka';
    div1.id = i +'_' + j;

}
}
var a = ['0_1','0_2','0_3'];
for (var i = 0; i < a.length - 1; i++) document.getElementById(a[i]).className = 'snake';
	document.getElementById(a[a.length - 1]).className = 'golova'
var eat = function(a){
   var X = new Array();
   var Y = new Array();
   for (var i = 0; i < a.length; i++){
    X[i] = Number(a[i].split('_')[0]);
    Y[i] = Number(a[i].split('_')[1]);
   }
    var x;
    var y;
    x = Math.floor(Math.random()*10);
    y = Math.floor(Math.random()*10);
     for (var i = 0; i < a.length; i++){
     	if(x == X[i]&&y == Y[i]) {
     	 x = Math.floor(Math.random()*10);
         y = Math.floor(Math.random()*10);
     	}
     	else var id3 = x + '_' + y;
}
  
     document.getElementById(id3).className = 'eda';
     return id3;

}
var id3 = eat(a);
var move = function(Xh,Yh,id1,intId,str){
	if (str == 'up'){
	 Yh-= 1;
	 if(Yh!=-1) id1 = Xh + '_' + Yh;
     else {
			clearInterval(intId);
			document.onkeydown = null;
			alert('You lose!Your score: ' + Number(a.length - 3))
			alert('To start new game press f5')
		}	
	}
	else if (str == 'down'){
		Yh+= 1;
	      if(Yh!=n+1) id1 = Xh + '_' + Yh;
	      else {
	        clearInterval(intId);
	        document.onkeydown = null;
	        alert('You lose! Your score: ' + Number(a.length - 3))
	        alert('To start new game press f5')
	      }
		
	}
	else if (str == 'left'){
	    Xh-= 1;
		if(Xh!=-1) id1 = Xh + '_' + Yh;
		else {
			clearInterval(intId);
			document.onkeydown = null;
			alert('You lose! Your score: ' + Number(a.length - 3))
			alert('To start new game press f5')
		}		
	}
	else if (str == 'right'){
		   Xh+=1;
	  if(Xh!=n+1) id1 = Xh + '_' + Yh;
	  else {
			clearInterval(intId);
			document.onkeydown = null;
			alert('You lose! Your score: ' + Number(a.length - 3))
			alert('To start new game press f5')
		}		
	}
			for(var i = 0; i < a.length; i++){
		    if(id1==a[i]){
		    clearInterval(intId);
		    document.onkeydown = null;
			alert('You lose! Your score: ' + Number(a.length - 3))
			alert('To start new game press f5')
		}
	}
    if(id1 == id3){
	    document.getElementById(id1).className = 'golova';    	
		a.push(id1);
		document.getElementById(id).className = 'snake'; 
		id3 = eat(a);
	}
	else{
		document.getElementById(id1).className = 'golova';    	
		a.push(id1);
		document.getElementById(id).className = 'snake'; 
		document.getElementById(a[0]).className = 'kletka';
	    a.shift();
	}
}
var intId;
var p = new Array();
document.onkeydown = function(e){
code = e.keyCode;
p.unshift(code);
clearInterval(intId);
intId = setInterval(function(){
	Xh = Number(a[a.length - 1].split('_')[0]);
    Yh = Number(a[a.length - 1].split('_')[1]);
    Xh1 = Number(a[a.length - 2].split('_')[0]);
    Yh1 = Number(a[a.length - 2].split('_')[1]);
    id = Xh + '_' + Yh;
    var id1;
    switch(code){
      case 40:
      case 83:
	      if(Yh<Yh1&&p[1]=='undefind'&&Yh!=0) break;
	      if(p[1]==38||p[1]==67) move(Xh,Yh,id1,intId,'up');
	      else move(Xh,Yh,id1,intId,'down')
	  break;

	  case 65:
      case 37: 
        if(Xh>Xh1&&p[1]=='undefind'&&Xh!=10) break;
        if(p[1]==39||p[1]==68) move(Xh,Yh,id1,intId,'right');
        else move(Xh,Yh,id1,intId,'left')
	  break;

     case 39:
     case 68:
	     if(Xh<Xh1&&Xh!=0&&p[1]=='undefind') break;
	     if(p[1]==65||p[1]==37) move(Xh,Yh,id1,intId,'left');
	     else move(Xh,Yh,id1,intId,'right')
     break;

     case 38:
     case 87:
	     if(Yh>Yh1&&Yh!=10&&p[1]=='undefind') break;
	     if(p[1]==40||p[1]==83) move(Xh,Yh,id1,intId,'down');
	     else move(Xh,Yh,id1,intId,'up')
     break;  
	}
	    },250)
	    }