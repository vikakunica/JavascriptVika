var div = document.getElementById('id1');
var settings =  {
	"#Hello":{
		path: 'port1.html'
	}
	// },
	// "#allert":{
	// 	path: 'port2.html',
	// 	handler: function(){

	// 	}
	// },
	// "#Picture":{
	// 	path: 'port3.html'
	// },
	// "#Smile":{
	// 	path: 'port4.html'
	// },
	// "#Calculate"{
	// 	path: 'port5.html',
	// 	handler: function(){

	// 	}
	// }
}

var change = function(){
	if(settings[location.hash].handler == null){
		var path = settings[location.hash].path;
		console.log(settings[location.hash].path)
		var xhr = new XMLHttpRequest();
		xhr.open("GET",path,true);
		xhr.onload = function(){
			div.innerHTML = this.responseText;
    }
    else{

    }
	xhr.send(null);
}
window.onhashchange = function(){
	change();
}