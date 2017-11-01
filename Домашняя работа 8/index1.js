var id_menu = new Array('sub_menu_1','sub_menu_2','sub_menu_3');
var id_menu1 = new Array ('sub_menu_11','sub_menu_12','sub_menu_13');
var id_menu2 = new Array ('sub_menu_21','sub_menu_22','sub_menu_23');
var id_menu3 = new Array ('sub_menu_31','sub_menu_32','sub_menu_33')
startList = function allclose() {
	for (i=0; i < id_menu.length; i++){
		document.getElementById(id_menu[i]).style.display = "none";
		document.getElementById(id_menu1[i]).style.display = "none";
		document.getElementById(id_menu2[i]).style.display = "none";
		document.getElementById(id_menu3[i]).style.display = "none";
	}
	}
function openMenu(id){
	var id1 = id.split('_')[2];
	var id_menuu;
	if(id1.length == 2){
		if (id1[0]==1) id_menuu = id_menu1;
		else if(id1[0]==2) id_menuu = id_menu2;
		else if(id1[0]==3) id_menuu = id_menu3;
	}
	else id_menuu = id_menu;
	for (i=0; i < id_menuu.length; i++){
		if (id != id_menuu[i]){
			document.getElementById(id_menuu[i]).style.display = "none";
		}
	}
	if (document.getElementById(id).style.display == "block"){
		document.getElementById(id).style.display = "none";
	}else{
		document.getElementById(id).style.display = "block";
	}
 }

window.onload=startList;