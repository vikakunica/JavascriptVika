var N = new Array();
var M = new Array();
N = ["Maksim", "Sasha", "Andrey", "Denis", "Oleg", "Anna", "Dasha","Vika","Masha", "Liza"];
M = ["Minsk", "Brest", "Kobrin", "Sevastopol", "Kiev", "Odessa", "Moscow", "Saint Petersburg", "Kazan", "New York"];
var people = new Array();
for (var i = 0; i<=9; i++){
people[i] = new Object();
people[i].Name = N[Math.floor(Math.random()*10)];
people[i].City = M[Math.floor(Math.random()*10)];
people[i].Age  =  Math.floor(Math.random()*55) + 5;
people[i].ShowMen =  function(){
			console.log("Name:" + this.Name);
			console.log("City:" + this.City);
			console.log("Age:"  + this.Age);
			console.log(" ");
		}
}
var Ages
function PeopleAge(Men1,Men2){
	return Men1.Age<Men2.Age?1:-1;
}
people.sort(PeopleAge);
for (var i = 0; i<=9; i++){
people[i].ShowMen();
}