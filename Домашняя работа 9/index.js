var i=0;
function Product(n,t,p,rd){
	this.identifier = i += 1;
	this.name = n;
	this.type = t;
	this.price = p;
	this.Rdate = rd;
}
// var scissors = new Product('Scissors','Chancery','5$','2015-05-15 00:00:00');
// console.log(scissors);
// var scissors1 = new Product('Scissors','Chancery','5$','2015-05-15 00:00:00');
// console.log(scissors1);

function FoodProduct(n,t,p,rd,bb){
	Product.apply(this,arguments);
    this.bestbefore = bb;
    Object.defineProperty(this,'ShelfLife', {
    	get: function(){
    		var d1 = new Date(this.bestbefore);
	        var d2 = new Date(this.Rdate);
	        var d = (d1.getTime() - d2.getTime())/86400000;
            return d
    	}
    })
}
FoodProduct.prototype = Object.create(Product.prototype);
FoodProduct.prototype = {
	constructor: FoodProduct,
}
var pr = new Array();
for (var k = 0; k < 3; k++){
     pr[k] = new Array()
for (var j = 0; j < 3; j++){
	n = 'Product ' + (j + 1);
	t = 'Type ' + (j + 1);
	p = Math.round(Math.random()*50);
	rd = '2017-05-01 00:00:00' 
	bb = '2017-05-'+ i + '5 00:00:00';
	pr[k][j] = new FoodProduct(n,t,p,rd,bb);
}
}

console.log(pr);
function store(na,ad,prs,ex,inc){
	this.name = na;
	this.adress = ad;
	this.products = prs;
	this.extracharge = ex;
	this.income = inc;
	Object.defineProperty(this,'sumprice',{
		get: function(){
		var prices = new Array();
		for (var j = 0; j < prs.length; j++){
			prices[j] = Number(prs[j].price)
		}
		var sum = prices.reduce(function(prev,curr){
	        return prev + curr;
        },0)
        return sum
	}
  })  
}
var stores = new Array()
for (var j = 0; j < 3; j++){
	na = 'Store ' + (j + 1);
	ad = 'Adress ' + (j + 1);
    prs = pr[j]
	ex = Math.round(Math.random()*15) + '%';
	inc = Math.round(Math.random()*500);
	stores[j] = new store(na,ad,prs,ex,inc);
}
console.log(stores)

store.prototype.addprs = function(t,n){
	for (var j = 0; j < n; j++){
		this.products.push(t)
	}
}
store.prototype.delprs = function(t,n){
	var k = 0;
	var n1 = 0;
	for (var j = 0; j < this.products.length;j++){
		if(t == this.products[j]) k++
	}
    var j = 0;
    if (k < n) console.log('Недостаточно товара для удаления');
    else{
       while (n1!=n&&j!=this.products.length){
       	if(t == this.products[j]){
       		this.products.splice(j,1)
       		n1++
       	}
       	j++
       }
    }
  }
 store.prototype.stlprs = function(t,n){
	var k = 0;
	var n1 = 0;
	for (var j = 0; j < this.products.length;j++){
		if(t == this.products[j]) k++
	}
    var j = 0;
    if (k < n) console.log('Недостаточно товара для продажи');
    else{
       while (n1!=n&&j!=this.products.length){
       	if(t == this.products[j]){
       		this.income = Number(this.income) + Number(this.products[j].price) + ''
       		this.products.splice(j,1)
       		n1++
       	}
       	j++
       }
    }
  }
// store.prototype.print = function(){
// 	console.log('Название: ' + this.name);
// 	console.log('Адрес: ' + this.adress);
//     console.log('Товары:  ');
//     for(var j = 0; j < this.products.length; j++){
//     	console.log(this.products[j].name);
//     }
// 	console.log('Наценка: ' + this.extracharge);
// 	console.log('Доход: ' + this.income);
// }
var body = document.getElementsByTagName('body')[0]
store.prototype.print = function(){
	var divmp = document.getElementById('divm');
	var divm = document.createElement('div');
	if(divmp!=null) body.replaceChild(divm,divmp);
	else body.appendChild(divm);
	divm.id = 'divm';
	var divn  = document.createElement('div');
	divm.appendChild(divn)
	divn.innerText = 'Название: ' + this.name;
	var diva  = document.createElement('div');
	divm.appendChild(diva)
	diva.innerText ='Адрес: ' + this.adress;
	var divp  = document.createElement('div');
	divm.appendChild(divp)
    divp.innerText ='Товары:  ';
    var sel1 = document.createElement('select');
    divp.appendChild(sel1);
     for (var j = 0; j < 3; j++){
	 var option = document.createElement('option');
      sel1.appendChild(option);
      option.innerText = this.products[j].name;
      option.value = j;
  }
    sel1.addEventListener('change',function(){
	console.log("i'm here");
	var div1p = document.getElementById('id');
	var div1 = document.createElement('div');
	if (div1p!=null){divp.replaceChild(div1,div1p);}
	else divp.appendChild(div1);
      div1.class = 'pr';
      div1.id = 'id'
	  var bt = document.createElement('button');
      div1.appendChild(bt);
	  bt.innerText = 'Продать'
	var div2p = document.getElementById('id1');
	var div2 = document.createElement('div');
	if (div2p!=null){divp.replaceChild(div2,div2p);}
	else divp.appendChild(div2);
      div2.class = 'pr';
      div2.id = 'id1'
	  var bt1 = document.createElement('button');
      div2.appendChild(bt1);
	  bt1.innerText = 'Списать'
    var div3p = document.getElementById('id2');
	var div3 = document.createElement('div');
	if (div3p!=null){divp.replaceChild(div3,div3p);}
	else divp.appendChild(div3);
      div3.class = 'pr';
      div3.id = 'id2'
	  var bt2 = document.createElement('button');
      div3.appendChild(bt2);
	  bt2.innerText = 'Добавить'
	 div3.innerText = ' Все остальные задания есть в коде, но нет для них интерфейса, простите(';
    })


    var divex  = document.createElement('div');
	divm.appendChild(divex)
	divex.innerText = 'Наценка: ' + this.extracharge;
	var divin  = document.createElement('div');
	divm.appendChild(divin)
	divin.innerText = 'Доход: ' + this.income;
}
function market(sts){
	this.stores = sts
}
var market1 = new market(stores);

// market.prototype.print =  function(){
// 	for (var j = 0; j < this.stores.length; j++){
// 		console.log('Название: ' + this.stores[j].name);
// 		console.log('Статистика: ' + this.stores[j].income);
// 	}
// }
market.prototype.print =  function(obj,j){
	     obj.innerText = this.stores[j].name +  ' ' + 'Статистика: ' + this.stores[j].income;
}
var sel = document.getElementsByTagName('select')[0]
for (var j = 0; j < 3; j++){
	var option = document.createElement('option');
    market1.print(option,j);
    sel.appendChild(option);
    option.value = j;
}
sel.addEventListener('change',function(){
    market1.stores[sel.value].print();
    })

// tov = new FoodProduct('Scissors3','Chancery','10','2015-05-15 00:00:00','2015-05-27 00:00:00');
// var st1 = new store('FunnyStore','Baker Street 221B', pr,'5%','550')
// var st2 = new store('FunnyStore2','Baker Street 225B', pr,'10%','550')
// var st = new Array();
// st = [st1,st2];
// console.log(st1);
// st1.addprs(tov,3);
// console.log(st1);
// st1.delprs(tov,5);
// console.log(st1);
// st1.stlprs(tov,2);
// console.log(st1);
// st1.print();
// mrt = new market(st);
// mrt.print();