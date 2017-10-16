var table = document.getElementById("myTable");
var n = prompt("Enter n");
var arr = Array();
var row = table.insertRow();
var cell = Array();
for(var i = 0; i <= n; i++){
  cell[i] = row.insertCell(i)
  arr[i] = true;
}
for(var i = 1; i <= n; i++){
  cell[i].innerText = i;
}
var p = 2;
var arr2 = Array();
do {
  for (i = 2 * p; i <= n; i += p) {
    arr[i] = false;
    arr2.push(i)
  }

  for (i = p + 1; i <= n; i++) {
    if (arr[i]) break;
  }

  p = i;
} while (p * p <= n);
var timeout = 0;
for(var i = 0; i < arr2.length; i++){
   setTimeout((function(n){
    return function(){ if(!arr[n]){   
   cell[n].style.backgroundColor = 'red';
   };
}
})(arr2[i]),timeout)
   timeout+=250;
}