var bt = document.getElementById("bt");
var i = 0;
var k = Array()
bt.addEventListener("click",function(){
	var div = document.createElement("div");
	var div1 = document.getElementsByClassName("bl1")[0]
	div1.appendChild(div);
	div.innerHTML = "a<sub>" + i + " </sub><input type = 'text' class = 'tx'> x<sup>" + i + "</sup>" + "<button type='button' id = 'bt2'><p> x </p> </button>"
	var bt2 = div.children["bt2"];
	bt2.addEventListener("click",function(){
		k[this.parentNode.textContent[1]] = Number(this.parentNode.textContent[1]);
		this.parentNode.remove()
	})
	i++
})
var bt3 = document.getElementById("bt3");
bt3.addEventListener("click",function(){
	var arr = Array();
	for (var j = 0; j < document.getElementsByClassName('tx').length; j++){
		arr[j] = Number(document.getElementsByClassName('tx')[j].value)
	}
	var n = 0;
for(var j = 0; j < k.length; j++){
	if(k[j]!= undefined){
		n+=1
	}
}
n = n + arr.length
var i = 0;
for(var j = 0; j < n; j++){
  if(k[j]== undefined){
  	k[j] = arr[i]
  	i++;
  } else {k[j] = 0}
};
var x = Number(document.getElementById('tx2').value);
var result = 0;
for (var j = 0; j < k.length; j++){
        result = result + Math.pow(x,j)*k[j];
	}
alert(Math.round(result));
})
