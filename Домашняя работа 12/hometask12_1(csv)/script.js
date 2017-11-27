var xhr = new XMLHttpRequest();
var div = document.getElementById('main');
var ul = document.getElementsByTagName('ul')[0];
// xhr.open("GET","Products.json",true);
xhr.open("GET","Products.csv",true);

  xhr.onload = function(){
    var data = this.responseText;
    var allTextLines = data.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];
    for (var i=1; i<allTextLines.length; i++) {
        var data1 = allTextLines[i].split(',');
        if (data1.length == headers.length) {

            var tarr = new Object();
            for (var j=0; j<headers.length; j++) {
                headers[j] = headers[j].replace(" ", "");
                data1[j] = data1[j].trimLeft();
                tarr[headers[j]] = data1[j]
            }
            lines.push(tarr);
        }
    }
    for (var j = 0; j < lines.length; j++){
        lines[j].price = Number(lines[j].price);
    }
    data = lines;
    console.log(data);
	var ul = document.getElementsByTagName('ul')[0];
	ul.innerHTML = " "
    data.forEach(function(item){
    	var li = document.createElement('li');
    	var bt1 = document.createElement('button');
    	bt1.type = 'button';
    	bt1.innerText = '+'
    	var bt2 = document.createElement('button');
    	bt1.type = 'button';
    	bt2.innerText = '-'
    	var bt3 = document.createElement('button');
    	bt1.type = 'button';
    	bt3.innerText = 'Добавит в корзину'
    	var i = 0;
    	var div = document.createElement('div')
    	var b = document.createElement('b');
        b.innerText = i;
        ul.appendChild(li);
        li.innerHTML =item.name + "<br>" + item.price +  "<br>" + item.country + "<br>";
        li.appendChild(div);
        div.appendChild(bt1);
        div.appendChild(b);
        div.appendChild(bt2);
        div.appendChild(bt3);
        bt1.addEventListener('click',function(){
        	i+=1;
        	b.innerText = i;
        })
        bt2.addEventListener('click',function(){
        	if(i!=0) i-=1;
        	else i = 0;
        	b.innerText = i;
        })
        bt3.addEventListener('click',function(){
        	alert('Товар в корзине');
        	sum+=item.price*i;
            k = k + i;
             div2.innerText = sum + " " + k;
        })
    })
    var div2 = document.createElement('div');
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div2);
    var sum = 0;
    var k = 0;
    div2.innerText = sum + " " + k;

}

xhr.send(null);