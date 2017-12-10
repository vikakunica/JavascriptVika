var div = document.getElementsByTagName('div')[0];
var xhr = new XMLHttpRequest();
xhr.open("GET","coordinates.json",true);
var coords = {lat:52.86, lng:12.37}
var settings = {
	zoom: 4,
	center:coords,
	mapTypeId: google.maps.MapTypeId.ROADMAP 
}
var map = new google.maps.Map(div,settings);
xhr.onload = function(){
	var data = JSON.parse(this.responseText);
	console.log(data);
	var coords = new Array();
	data.forEach(function(item,i){
		coords[i] = {lat: item.lat, lng: item.lng};
		var marker = new google.maps.Marker({
		position:coords[i],
		title: item.title,
		map: map
	})

		var infowindow = new google.maps.InfoWindow({
   			 content: item.content
 			 });
		marker.addListener('click',function(){
			infowindow.open(map, marker);
		})

	})
	console.log(coords);
	   var flightPath = new google.maps.Polyline({
          path: coords,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);
	}
xhr.send(null);

