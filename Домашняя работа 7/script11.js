var input = document.getElementById("one");
input.addEventListener('keypress', function(e){
	if (e.ctrlKey || e.altKey || e.metaKey||(e.keyKode>=47&&e.keyKode<=57)){
		this.value+=e.key
	}
	e.preventDefault();
})
