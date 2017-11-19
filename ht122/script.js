var xhr = new XMLHttpRequest();
xhr.open("GET","catalog.json",true);
var div = document.getElementsByTagName('div')[0];
var body = document.getElementsByTagName('body')[0];
xhr.onload = function(){
	var data = JSON.parse(this.responseText);
	var divv = document.createElement('div');
	body.appendChild(divv);
	add(data,divv);

	window.onscroll = function(e){
		if(isVisible(divv)) add(data,divv);
	}
}
var add = function(data,divv){
		for (var i = 0; i<data.length; i++){
		for(var j=0; j<data.length;j++){
			var div2 = document.createElement('div');
			div.appendChild(div2);
			div2.innerHTML = "<p><h1>" + data[i].category + "</h1></p><p>" + data[i].products[j].name + "</p><p>" + "<p>" + data[i].products[j].price + "</p><p>" +
			"<p>" + data[i].products[j].country + "</p><p>"
		}
	}
	divv=div2;
	console.log(divv); 
	return divv;
}
function isVisible(elem) {
 console.log('hi')
  var coords = elem.getBoundingClientRect();

  var windowHeight = document.documentElement.clientHeight;

  var bottomVisible = coords.bottom <= (windowHeight + 1)
  console.log(coords.bottom);
  console.log(windowHeight + 1)
  return bottomVisible;
}
xhr.send(null);

