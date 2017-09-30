var x = prompt("Enter X in the range from -1 to 1");
var N = prompt("Enter N");
function factorial(n) {
	if (n==0 || n==1) return 1;
	else return n*factorial(n-1);
}
var asin = 0;
var i;
if (x>=-1 && x<=1){
   for (i=0; i<=N; i++) {
   asin = asin + ((factorial(2*i))/(Math.pow(2,2*i)*Math.pow(factorial(i),2)))*(Math.pow(Number(x),2*i+1)/(2*i+1))
    }
   console.log(asin); 
 }else{
 	console.log('x is not in the range');
 }
console.log(Number(x));