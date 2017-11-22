var xhr = new XMLHttpRequest();
var tabs = document.getElementsByClassName('tab');
var tabc = document.getElementsByClassName('tabcontent')[0];
var tabc2 = document.getElementsByClassName('tabcontent2')[0];
xhr.open("GET","catalog.json",true);
xhr.onload = function(){
	var data = JSON.parse(this.responseText);
	for (var i = 0; i<tabs.length; i++){
		tabs[i].innerText = data[i].category;
	
	tabs[i].onclick = function(e){
		var target = e.target;
			for (var j=0; j<tabs.length;j++){
				if(target==tabs[j]){
					tabc.innerHTML = " ";
					tabc2.innerHTML = " ";
					var obj = Array();	
					data[j].products.forEach(function(item){
					tabc.innerHTML += "<p>"+ item.name + "</p>";
					var p  = document.getElementsByTagName('p');
					obj.unshift(item);
					tabc.onclick = function(e){
						var target = e.target;
						tabc2.innerHTML = " ";
						console.log(obj);
						for (var k=0; k<p.length;k++){
						if(target==p[k]){
							console.log(p[k].outerText);
							for (var t = 0; t < obj.length; t++){
								if(p[k].outerText == obj[t].name) tabc2.innerHTML += "<p>" + "Цена: " + obj[t].price + " Страна: " + obj[t].country + "</p>";
							}
							}
						}
					}
					})
				}
				}
			}

	}
	}
xhr.send(null);