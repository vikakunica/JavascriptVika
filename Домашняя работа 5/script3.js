var table = document.getElementById("myTable");
var n = prompt("Enter n");
var row = Array(), cell = Array();
for(var i = 0; i <= n-1; i++){
	row[i] = table.insertRow(i);
	 for (var j = 0; j<=n-1; j++){
	 	cell[j] = row[i].insertCell(j)
	 	cell[j].innerText = (i+1)*(j+1)
	   if(i==j){
	   	cell[j].style.backgroundColor = 'green';
	   }
	 }
}
