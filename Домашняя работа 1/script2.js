var str1 = prompt('Enter the first number');
var str3 = prompt('Enter the second number');
var str2 = prompt('Enter the arithmetic operation');
var p;
switch(str2){
	case '+' :
		p=Number(str1)+Number(str3);
	    console.log(p);
    break;
	case '-':
		p=Number(str1)-Number(str3);
	    console.log(p);
	break;
		case '*':
		p=Number(str1)*Number(str3);
	    console.log(p);
	break;
	
	case '/':
	    if(Number(str2)==true){
		p=Number(str1)/Number(str3);
	    console.log(p);
	}else{
		console.warn('Division by zero');
	}
	break;

	case '^':
	p=Math.pow(Number(str1),Number(str3));
	console.log(p);
}