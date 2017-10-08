var Accounting = new Object();
Accounting.Employee = new Array();
var Names = new Array();
var Employees = new Array;
Names = ["Maksim", "Sasha", "Andrey", "Denis", "Oleg","Artem","Gleb", "Anna", "Dasha","Vika","Masha", "Liza", "Valentina", "Oksana","Margarita","Tania"]
var Departments = new Array();
Departments = ["Department of income and expenses", "Operations department", "Settlement department", "Material department","Department of operational analysis and forecast"];
Accounting.Employee = new Array();
Accounting.EnrDis = function(par){
     if(typeof(par) == "object"){
            var k = Accounting.Employee.length;
            Accounting.Employee[k] = new Object();
           Accounting.Employee[k] = par;
        }else{
        for (var i = 0; i<=Accounting.Employee.length-1; i++){
        if(par == Accounting.Employee[i].Name){
            Accounting.Employee.splice(i,1);
        }
        }
    }
}
var objj = new Array();
for (var i = 0; i<=15; i++){
    objj[i] = new Object();
    objj[i].Name = Names[i];
    objj[i].Age = Math.floor(Math.random()*55) + 5;
    objj[i].Department = Departments[Math.floor(Math.random()*5)];
    objj[i].Salary = Math.floor(Math.random()*480)+120;
    objj[i].Experience = Math.floor(Math.random()*120);
    objj[i].ShowEmployee = function(){
                console.log("Name:" + this.Name);
                console.log("Age:" + this.Age);
                console.log("Department:"  + this.Department);
                console.log("Salary:"  + this.Salary + " rubles");
                console.log("Experience:"  + this.Experience + " months");
                console.log(" ");

}
}
for (var i = 0; i<=15; i++){
   Accounting.EnrDis(objj[i]);
}
for (var i = 0; i<=Accounting.Employee.length-1; i++){
   Accounting.Employee[i].ShowEmployee();
}

Accounting.EnrDis("Tania");
for (var i = 0; i<=Accounting.Employee.length-1; i++){
   Accounting.Employee[i].ShowEmployee();
}111

for (var i = 0; i<=Accounting.Employee.length-1; i++){
  Accounting.Employee[i].ShowEmployee();}

function PeopleSalary(Men1,Men2){
	return Men1.Salary<Men2.Salary?1:-1;}

(function SumSalary(Men1,Men2){
	return Men1.Salary+Men2.Salary},0)

Accounting.SortSalary = function(){
	Accounting.Employee.sort(PeopleSalary);
	for (var i = 0; i<=Accounting.Employee.length-1; i++){
       Accounting.Employee[i].ShowEmployee();
    }
    var arr = Array();
    for (var i = 0; i<=Accounting.Employee.length-1; i++){
    	arr[i] = Accounting.Employee[i].Salary;
    }
    var sum = arr.reduce(function(prev,curr){
	return prev + curr;
    },0)
    console.log("Total salary " + sum + " rubles");
}
Accounting.SortSalary();

Accounting.ComparisonsSalary = function(){
	 var arr = Array();
    for (var i = 0; i<=Accounting.Employee.length-1; i++){
    	arr[i] = Accounting.Employee[i].Salary;
    }
     var k;
     var l;
   var max = -Infinity
   var min = +Infinity;
  for (var i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    k = i;
  }
  if (arr[i] < min) {
    min = arr[i];
    l = i;
  }
}
    var sum = arr.reduce(function(prev,curr){
	return prev + curr;
    },0)
    var mid = Math.round(sum/arr.length);
    console.log(" ");
    console.log("This employee receives the maximum salary");
    Accounting.Employee[k].ShowEmployee();
    console.log("This employee receives the minimum salary");
    Accounting.Employee[l].ShowEmployee();
    console.log("The average salary " + mid + " rubles");
}
Accounting.ComparisonsSalary();

Accounting.ComparisonDepartments = function(){
      var arr1 = Array(), arr2 = Array(), arr3 = Array(), arr4 = Array(), arr5 = Array();
      for (var i = 0; i<=Accounting.Employee.length-1; i++){
        if (Departments[0] == Accounting.Employee[i].Department){
         arr1.unshift(Accounting.Employee[i])
        }
        if(Departments[1]==Accounting.Employee[i].Department){
         arr2.unshift(Accounting.Employee[i])
        }
        if(Departments[2]==Accounting.Employee[i].Department){
         arr3.unshift(Accounting.Employee[i])
        }
        if(Departments[3]==Accounting.Employee[i].Department){
         arr4.unshift(Accounting.Employee[i])
        }
        if(Departments[4]==Accounting.Employee[i].Department){
         arr5.unshift(Accounting.Employee[i])
        }
    }  Array.prototype.sum = function (prop) {
       var total = 0
       for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
       }
       return total
       }
      var Nam = Array();
      Nam = [arr1,arr2,arr3,arr4,arr5];
      var sum = Array(), avsum = Array(), agsum = Array(), max = -Infinity, exp = Array(), k = Array();
      for (var i = 0; i<=Nam.length - 1; i++){
      sum[i] = Nam[i].sum("Salary");
      avsum[i] = sum[i]/Nam[i].length;
      agsum[i] = Nam[i].sum("Age")/Nam[i].length;
      
      
      for (var j = 0; j < Nam[i].length; j++) {
      if (Nam[i][j].Experience > max) {
      max = Nam[i][j].Experience;
      k[i] = j;
      }
     }
     max = - Infinity;
     }
      
      for (var i = 0; i<=Nam.length - 1; i++){
      for (var j = 0; j<=Nam[i].length - 1; j++)
       console.log(Nam[i][j].Department);
       console.log("Total salary: " + sum[i]);
       console.log("Average salary: " + avsum[i]);
       console.log("Number of employees: " + Nam[i].length);
       console.log("Average age: " + agsum[i]); 
       console.log("Employee with max Experience: " );
       Nam[i][k[i]].ShowEmployee();     
      }
      
}
Accounting.ComparisonDepartments();


