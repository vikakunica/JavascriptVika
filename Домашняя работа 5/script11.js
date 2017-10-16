var div = document.getElementById("myDiv");
document.body.style.backgroundColor = "#EACF80";
div.style.fontSize = "300px";
div.style.fontFamily = "Impact, fantasy";
var time = setInterval(function(){
var d1 = new Date();
var hours;
if (d1.getMinutes() == 0  & d1.getSeconds() == 0){
  hours = 24 - d1.getHours()}
else{
  hours = 23 - d1.getHours();
}
if(hours < 10){ hours = "0" + hours}
var minutes;
if (d1.getSeconds() == 0){
	minutes = 60 - d1.getMinutes();}
else{
	minutes = 59 - d1.getMinutes();
}
if  (minutes < 10){minutes = "0" + minutes}
var seconds = 60 - d1.getSeconds();
if (seconds < 10) { seconds = "0" + seconds}
  div.innerText = hours + " " + minutes + " " + seconds;
  setTimeout(function(){
  div.innerText = hours + ":" + minutes + ":" + seconds;
},500)
 },1000)
