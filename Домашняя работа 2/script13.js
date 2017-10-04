function timenow(){
var d1 = new Date();
var y = d1.getFullYear();
var m = d1.getMonth();
var d = d1.getDate()+1;
var d2= new Date(y,m,d,0,0,0);
var d3=Math.round((d2.getTime()-d1.getTime())/60000);
return d3;
}
console.log(timenow(),"left till the end of the day");