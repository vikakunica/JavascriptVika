function RandomNumbers(N,s,p,arr){
	for(var i=0; i<=N; i++ ){
	arr[i]=Math.random()*(s*p/50)+Number(s)-Number(s*p/100);
}
}
var N1=prompt("Enter N");
var s1=prompt("Enter s");
var p1=prompt("Enter p%");
var arr1 = Array(N1);
console.log("Our Array");
console.log(arr1);
RandomNumbers(N1-1,s1,p1,arr1);

function increment(a,b){
	return b-a;
}
arr1.sort();
console.log("Sorted Array");
console.log(arr1);
var s=0;
for(var i=0; i<=N1-1; i++) {
	s=s+arr1[i];

}
s=s/arr1.length;
console.log("Middle value");
console.log(s);