var div = document.getElementById('id1');
var settings =  {
	"#Hello":{
		path: 'port1.html'
	},
	"#allert":{
		path: 'port2.html',

		handler: function(){
			div.innerHTML = this.responseText;
			var input = document.getElementsByTagName('input')[0];
		    var bt = document.getElementsByTagName('button')[0];
		    bt.addEventListener('click',function(){
			alert(input.value);
			})
		}
	},
	"#Picture":{
		path: 'port3.html'
	},
	"#Smile":{
		path: 'port4.html'
	},
	"#Calculate":{
		path: 'port5.html',
		handler: function(){
			div.innerHTML = this.responseText;
			var input = document.getElementsByTagName('input')[0];
		    var bt = document.getElementsByTagName('button')[0];
		    bt.addEventListener('click',function(){
		    var t = eval(input.value)
			alert(t);
			})
		}
	}
}

var change = function(){
	if(settings[location.hash].handler == null){
		var path = settings[location.hash].path;
		var xhr = new XMLHttpRequest();
		xhr.open("GET",path,true);
		xhr.onload = function(){
			div.innerHTML = this.responseText;
    }
    }
    else{
     var path = settings[location.hash].path;
	  var xhr = new XMLHttpRequest();
	  xhr.open("GET",path,true);
	  xhr.onload = settings[location.hash].handler;

    }
	xhr.send(null);
}
window.onhashchange = function(){
	change();
}