var question = ['2+2:','3*tg(pi/4)','Столица Беларуси?','Масса в Си измеряется', 'Сколько гласных в слове "ананас"?', 'Формула воды:',
'Год октябрьской революции:','Какие есть цвета в радуге: ']
var answer = [['3','4','5','6'],['3*sqrt(2)/2','3','0'],['Минск','Гродно','Могилев'],['Килограммы','Граммы','Центнеры'],[ '3','4','5','6'],
['H2O','H2','H3'],['1971','1985','1917'],['Красный','Синий', 'Черный','Оранжевый','Бирюзовый']]
var ra = [['4'],['3'],['Минск'],['Килограммы'],['3'],['H2O'],['1917'],['Красный','Синий', 'Оранжевый']];
var bal = [1,3,1,2,3,2,3,2]
var pos = ['Вам нужно повторить школьную программу, вы совсем ничего не помните!', 'Не плохо, но стоит иногда заглядывать в книги', 
'Еще чуть-чуть и вы все вспомните','Да у Вас фундаментальная память, вы помните всю школьную программу!']
var pr = [30,60,90,100]
var Questions = new Array();
var Analys = new Array();
for(var j = 0; j < question.length; j++){
	Questions[j] = new Object();
	Questions[j].qu = question[j];
	Questions[j].ans = new Array();
	Questions[j].rans = new Array();
		for (var i=0; i<answer[j].length; i++){
		 Questions[j].ans[i] = answer[j][i];
	    }
	    for (var i=0; i<ra[j].length;i++){
		 Questions[j].rans[i] = ra[j][i];
	    }
		 Questions[j].ball = bal[j];
}
for(var i = 0; i < pos.length; i++) {
	Analys[i] = new Object();
	Analys[i].pras = pos[i];
	Analys[i].pr = pr[i];
}

var body = document.getElementsByTagName('body')[0];
var quest = function(Qu){
	for (var i = 0; i < Qu.length; i++){
		var div = document.createElement('div');
        body.appendChild(div);
        var p = document.createElement('p');
	        div.appendChild(p);
	        p.className = 'qe';
	        p.innerText = Qu[i].qu;
	for (var j = 0; j < Qu[i].ans.length; j++){
		var input = document.createElement('input');
		var p = document.createElement('p');
			div.appendChild(p);
			p.innerText = Qu[i].ans[j];
			p.appendChild(input);
			input.type = 'checkbox';
			input.value = Qu[i].ans[j];
			input.name = 'q' + (i+1)
}
}
}
quest(Questions);
var sum = 0;
for (var i = 0; i < Questions.length;i++){
   sum += Questions[i].ball;
}
var ans = function(n,a){
	var numb = 'q' + n;
	var chek = document.getElementsByName(numb);
	 a[n-1] = new Array();
    for(var j = 0; j < chek.length; j++){
    	if(chek[j].checked) a[n-1][j] = chek[j].value
    }
}
var div = document.createElement('div');
 body.appendChild(div);
 div.className = 'nqe';
 var p = document.createElement('p');
 var bt = document.createElement('button');
 div.appendChild(bt);
 bt.type = 'button';
 bt.appendChild(p);
 p.innerText = 'Ответить';
 bt.addEventListener("click", function(){
	var a = new Array();
	for (var i = 1; i<=question.length; i++){
	ans(i,a);
    }
    var a2 = a.filter(function(arr){
    	return arr.length!=0;
    })
    if (a2.length < Questions.length) alert('Вы ответили не на все вопросы!')
    	else{
    for (var i = 0; i < question.length; i++) a[i] = a[i].filter(element => element !== null)	
    console.log(a);
    var k = 0;
	var t = 0;
	for (var i = 0; i < a.length; i++){
		for(var j = 0; j<a[i].length; j++){
			if((a[i].length==Questions[i].rans.length)&&(a[i][j]==Questions[i].rans[j])){
				t+=1;
				if(Questions[i].rans.length>1){
					var t1 = Questions[i].ball
				}
				else k+=Questions[i].ball;
			}
		}
    }
    k+=t1;
    var div1 = document.createElement('div');
    body.appendChild(div1);
    var p = Math.round((k/sum)*100);
    var prr;
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    var p4 = document.createElement('p');
    div1.appendChild(p1);
    div1.appendChild(p2);
    div1.appendChild(p3);
    div1.appendChild(p4);
    p1.innerText = 'Правильных ответов: ' + t;
    p2.innerText = 'Количество набранных баллов: ' + k;
    p3.innerText = 'От всех баллов: ' + p + '%';
      var i = 0
      while (i<Analys.length){
      if(p<=Analys[i].pr) {prr = Analys[i].pras; break}
      else i = i+1;
      }
    p4.innerText = prr;
    div1.scrollIntoView();
}
})