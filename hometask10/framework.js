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
    	return elem.dispatchEvent(type)
    }
    MyFW.width = function(elem){
        var rect = elem.getBoundingClientRect();
        return rect.width
    }
    MyFW.height = function(elem){
        var rect = elem.getBoundingClientRect();
        return rect.height
    }
    MyFW.pageTop = function(elem){
        return elem.clientTop
    }
    MyFW.pageLeft = function(elem){
        return elem.clientLeft
    }
    MyFW.css = function(elem,property,value){
    var vl = property + ': ' + value
    return elem.style.cssText = vl;
}
    MyFW.ajax = function(m,p,f){
        var xhr = new XMLHttpRequest();
        xhr.open(m,p,true);
        xhr.onload = f;
        xhr.send(null)
    }