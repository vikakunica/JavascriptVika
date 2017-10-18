var calc = document.getElementById("calculator");
var one = document.getElementById("one");
var input = document.getElementById("input");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
one.onclick = function(){
	calc.input.value += '1'}
two.onclick = function(){
	calc.input.value += '2'}
three.onclick = function(){
	calc.input.value += '3'}
four.onclick = function(){
	calc.input.value += '4'}
five.onclick = function(){
	calc.input.value += '5'}
six.onclick = function(){
	calc.input.value += '6'}
seven.onclick = function(){
	calc.input.value += '7'}
eight.onclick = function(){
	calc.input.value += '8'}
nine.onclick = function(){
	calc.input.value += '9'}
zero.onclick = function(){
	calc.input.value += '0'}
var add = document.getElementById("add");
var mul = document.getElementById("mul");
var div = document.getElementById("div");
var sub = document.getElementById("sub");
var equal = document.getElementById("equal");
add.onclick = function(){
	calc.input.value += '+'}
mul.onclick = function(){
	calc.input.value += '*'}
div.onclick = function(){
	calc.input.value += '/'}
sub.onclick = function(){
	calc.input.value += '-'}
equal.onclick = function(){
	calc.input.value = eval(calc.input.value);}
var m = 0;
var memp = document.getElementById("mem+");
var memm = document.getElementById("mem-");
var mem = document.getElementById("mem");
memp.onclick = function(){
	m += Number(calc.input.value);
}
memm.onclick = function(){
	m = m - Number(calc.input.value);
}
mem.onclick = function(){
	if(m!=0){
	calc.input.value += m;
}
}
mem.ondblclick = function(){
	m=0;
}
var clear = document.getElementById("clear");
clear.onclick = function(){
	calc.input.value = " ";
}








