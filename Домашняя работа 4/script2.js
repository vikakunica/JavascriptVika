var str = prompt("Enter a string");
var number;
var regex1 = (/[\+]?375[\(]?[\s]?(33|44|29|25)[\)]?[\s]?[0-9]{3}[\-]?[\s]?[0-9]{2}[\-]?[\s]?[0-9]{2}/);
if (regex1.test(str)){
	number = str
	console.log(number)
	}
	else{
		console.log("It's not a number!")
	}
	

