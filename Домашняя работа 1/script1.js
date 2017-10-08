alert('Hi');
var str = prompt("Enter the string");
var p = str.split('');
var t = 0;
var i;
for (i=0; i < str.length; i++) {
 if (p[i] == '(') {
 	t=t+1
 } 
 if(p[i] == ')'){
 	t=t-1
 }
 if (t<0){
 	console.log('False');
 	break;
 }
}
if (t>0){
	console.log('False');
}if(t==0){
	console.log('True');
}