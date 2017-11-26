var div = document.getElementById('main');
var bold = document.getElementById('bold');
var italic = document.getElementById('italic');
var underline = document.getElementById('underline');
var font = document.getElementById('font');
var size = document.getElementById('size');
var list = document.getElementById('list');
var list1 = document.getElementById('list1');
var line = document.getElementById('line');
var colort = document.getElementById('clt');
var colorb = document.getElementById('clb');
var tab = document.getElementById('tab');
var tab1 = document.getElementById('tab1');
var alt = document.getElementById('alt');
var link = document.getElementById('href');
var del = document.getElementById('delete');
div.contentEditable = true;
div.addEventListener('click',function(e){
    var bold1  = document.queryCommandState('bold');
    if (bold1) bold.classList.add('onn');
    else bold.classList.remove('onn');
    var italic1  = document.queryCommandState('italic');
    if (italic1) italic.classList.add('onn');
    else italic.classList.remove('onn');
    var underline1  = document.queryCommandState('underline');
    if (underline1) underline.classList.add('onn');
    else underline.classList.remove('onn');
	console.log(e)
})
bold.addEventListener('click',function(){
	if(document.getSelection().toString()!='') bold.classList.toggle('onn');
	document.execCommand('bold',false,null);
})
italic.addEventListener('click',function(){
	document.execCommand('italic',false,null);
	if(document.getSelection().toString()!='') italic.classList.toggle('onn');
})
underline.addEventListener('click',function(){
	document.execCommand('underline',false,null);
	if(document.getSelection().toString()!='') underline.classList.toggle('onn');
})
font.addEventListener('change',function(){
	document.execCommand('fontname',false,font.value)
})
size.addEventListener('change',function(){
	document.execCommand('fontsize',false, size.value)
})
list.addEventListener('click',function(){
	document.execCommand('insertunorderedlist',false,null);
})
list1.addEventListener('click',function(){
	document.execCommand('insertorderedlist',false,null);
})
line.addEventListener('click', function(){
	document.execCommand('inserthorizontalrule',false,null);
})
colorb.addEventListener('change',function(){
	document.execCommand('backcolor',false,colorb.value);
})
colort.addEventListener('change',function(){
	document.execCommand('forecolor',false,colort.value);
})
tab.addEventListener('click',function(){
	document.execCommand('indent',false,null);
})
tab1.addEventListener('click',function(){
	document.execCommand('outdent',false,null);
})
alt.addEventListener('change',function(){
	document.execCommand('justify' + alt.value,false,null);
})
link.addEventListener('click',function(){
	var l = prompt('Введите ссылку');
	document.execCommand('createlink',false,l);
})
del.addEventListener('click',function(){
	document.execCommand('removeformat',false,null)
	bold.classList.remove('onn');
	italic.classList.remove('onn');
	underline.classList.remove('onn');
})