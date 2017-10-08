var Home = new Object();
var Apartment = new Array();
Names = ["Maksim", "Sasha", "Andrey", "Denis", "Anna", "Dasha","Vika", "Masha", "Liza","Margarita","Anton"];

for (var i = 0; i<= 4; i++){
	Apartment[i] = new Object();
	Apartment[i].Number = i+1;
    Apartment[i].Area = Math.floor(Math.random()*60)+25;
    Apartment[i].Floor = Math.round(Math.random()*2)+1;
    Apartment[i].Humans = new Array();
    for (j = 2*i; j < 2*i + 2; j++){
     Apartment[i].Humans[j-2*i]  = new Object();
     Apartment[i].Humans[j-2*i].Name = Names[j];
     Apartment[i].Humans[j-2*i].Age = Math.floor(Math.random()*55) + 5;
    }
    Apartment[i].ShowApartment = function(){
    	console.log("Area " + this.Area);
    	console.log("Floor " + this.Floor);
    	console.log("Number: " + this.Number);
        console.log(Apartment[i].Humans);
}
}
Home.Apartments = new Array();
Home.Apartments = Apartment;
for (var i = 0; i<=4; i++){
	Home.Apartments[i].ShowApartment();
}
Home.checkInOut = function(par){
     if(typeof(par) == "object"){
     k = par.Number;
	 if (k >= Home.Apartments.length || k<=0){
		console.error("In the house there are no such apartments");
	}else{
    for (var i = 0; i < Home.Apartments.length; i++){
    	if (k == i){
    		var t = Home.Apartments[k].Humans.length;
    		Home.Apartments[k].Humans[t] = new Object();
    		Home.Apartments[k].Humans[t].Name = par.Name;
    		Home.Apartments[k].Humans[t].Age = par.Age;
    	}
     }
    }
}else{ for (var j = 0; j < Home.Apartments.length; j++)
      for (var i = 0; i<=Home.Apartments[j].Humans.length-1; i++){
        if(par == Home.Apartments[j].Humans[i].Name){
            Home.Apartments[j].Humans.splice(i,1);
        }
}
}
}
var obj = new Object();
obj.Name = "Tasha";
obj.Number = 2;
obj.Age = 7;
Home.checkInOut(obj);
for (var i = 0; i<=4; i++){
	Home.Apartments[i].ShowApartment();
}
var obj1 = new Object();
obj1.Name = "Tasha";
obj1.Number = 10;
obj1.Age = 7;
Home.checkInOut(obj1);
Home.checkInOut("Sasha");
for (var i = 0; i<=4; i++){
    Home.Apartments[i].ShowApartment();
}
Home.cclear = function(k){
    for (var i = 0; i < Home.Apartments.length; i++)
    if(k == Home.Apartments[i].Number){
        Home.Apartments[i].Humans.splice(0, Home.Apartments[i].Humans.length)
    }
}
Home.cclear(1);
for (var i = 0; i<=4; i++){
    Home.Apartments[i].ShowApartment();
}