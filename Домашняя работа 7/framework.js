	var MyFW = new Object();
	MyFW.append = function(el1,el2){
		return el1.appendChild(el2);
	}
	MyFW.prehend = function(el1,el2){
		var elp = el2.parentNode;
		return elp.insertBefore(el1,el2);
	}
	MyFW.remove = function(el){
		return el.parentNode.removeChild(el)
	}
    MyFW.create = function(name){
    	return document.createElement(name)
    }

    MyFW.Get = new Object();

    MyFW.Get.byId = function(id){
    	return document.getElementById(id)
    }
    MyFW.Get.byName = function(name,i){
    	return document.getElementsByName(name)[i];
    }
    MyFW.Get.byTagName = function(name,i){
    	return document.getElementsByTagName(name)[i];
    }
    MyFW.Get.byClassName = function(name,i){
    	return document.getElementsByClassName(name)[i];
    }
    MyFW.Get.BySelector = function(sel){
    	return document.querySelector(sel);
    }
    MyFW.Get.BySelecrotAll = function(sel,i){
    	document.querySelectorAll(sel)[i];
    }
	MyFW.Event = new Object();
	MyFW.Event.add = function(type,elem,f){
	   if(typeof(elem.addEventListener) == "function"){
	   		elem.addEventListener(type,f)
	   }else{
	   		elem.attachEvent('on' + type, f)
	   	}
	   }
    MyFW.Event.remove = function(type,elem,f){
	   	if(typeof(elem.removeEventListener) == "function"){
	   		elem.removeEventListener(type,f)
	   	}else{
	   		elem.detachEvent('on' + type, f)
	   	}
	   }
    MyFW.Event.dispatch = function(elem,type){
    	elem.dispatchEvent(type)
    }