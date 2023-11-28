function show() {
	alert("hola");
	}



function active_canvas  (ide) {
    // alert("hola");
    var padre = document.getElementById("contnt");
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < elementosHijosDiv.length; i++) {
           elementosHijosDiv[i].style.display = "none";
           
    }
    var elemento = document.getElementById(ide);
    elemento.style.display="block"
    
}