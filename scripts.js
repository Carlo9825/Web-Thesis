
// Definition where stuff is stored .

// 1 bibliografy

// 1.a documents

let path_biblio ="img/bibliografia/"
const biblio_pdf = ["3 SCHEDA CENSIMENTO O'DONNELL.pdf","5 SCHEDA CENSIMENTO RISCHIO FRANE-IDRAULICO.pdf"]

// 1.b photos

const biblio_img = ["foto1.png","foto2.png"]


//2. Cloudpoints


// 2.a documents

let path_cloud ="img/cloud/"
const cloud_pdf = ["Piano di manutenzione We BRIDGE.pdf"]

// 2.b photos
const cloud_img = ["foto1.jpg","foto2.jpg","foto3.jpg","foto4.png"]



//3. Inspection


// 3.a documents

let path_ispezioni ="img/ISPEZIONI/"
const ispezioni_pdf = ['schede di difettosità.pdf']

// 3.b.1  photos appoggi
const appoggi_img = ["Appoggi/foto1.png","Appoggi/foto2.png","Appoggi/foto3.png","Appoggi/foto4.png"]

// 3.b.2  photos Giuti
const giuti_img = ["Giuti/Foto giuto.png","Giuti/foto giunto 2.png"]

// 3.b.3  photos solleta
const solleta_img = ["Soletta-Pavimentazione stradale/foto1.png",
    "Soletta-Pavimentazione stradale/foto2.png",
    "Soletta-Pavimentazione stradale/foto3.png",
    "Soletta-Pavimentazione stradale/foto4.png",
    "Soletta-Pavimentazione stradale/foto5.png",
    "Soletta-Pavimentazione stradale/foto6.png",
    "Soletta-Pavimentazione stradale/foto7.png",
    "Soletta-Pavimentazione stradale/Rattoppo stradale.jpg",
    "Soletta-Pavimentazione stradale/Tracce di scolo- Armatura Ossidata.jpg",
    "Soletta-Pavimentazione stradale/Usura Pavimentazione.jpg",
    ]

// 3.b.4  photos Spalle
const spalle_img = ["Spalle/foto1.png",
    "Spalle/foto2.png",
    "Spalle/foto3.png",
    "Spalle/foto4.png",
    "Spalle/foto5.png",
    "Spalle/foto6.png",
    "Spalle/foto7.png",
    "Spalle/Vespai dx.png",
    "Spalle/Vespai sx.jpg",
    ]

// 3.b.5  photos Traversi
const traversi_img = ["Traversi/foto1.png",
    "Traversi/foto2.png",
    "Traversi/foto3.jpg",
    ]

// 3.b.6  photos Travi
const travi_img = ["Travi/foto1.jpg",
    "Travi/foto2.jpg",
    "Travi/foto3.jpg",
    "Travi/Tracce_di_scolo.jpg",
    "Travi/Cls_Dilavato.jpg",
    "Travi/Fuoriuscita_Barre_di_ancoraggio.png",
    "Travi/foto1.jpg",
    "Travi/foto2.jpg",
    "Travi/foto3.jpg",
    "Travi/foto1.jpg",
    ]








function active_canvas  (ide) {
    
    // first we remove the image as background
    const content = document.getElementById("contnt");
    content.style.background ="white"

    // second we ensure we hide all childrens of #contnt father
    var padre = document.getElementById("contnt");
    var elementosHijosDiv = padre.children;

    


    for (var i = 0; i < elementosHijosDiv.length; i++) {
           elementosHijosDiv[i].style.display = "none";
        }

    // also we ensure al elements with class bodythird are hidden
    // const elementos_bodythird = document.querySelectorAll(".body_third");

    // for (var j = 0; j < elementos_bodythird.length; j++) {
    //        elementos_bodythird[j].style.display = "none";
           
    // }   


    // fourth we show the #content's child we want to show (given by ide)

    var elemento = document.getElementById(ide);
    elemento.style.display="grid"
//end of function    
}

function active_aux (father,ide) {
    // First we select the father element (those with class body_secondary)
    // and we ensure all the children are hidden
    var padre = document.getElementById(father);
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < elementosHijosDiv.length; i++) {
           elementosHijosDiv[i].style.display = "none";
        }
    // also we ensure all elements with class body_third are also hidden    
    const elementos_bodythird = document.querySelectorAll(".body_third");

    for (var j = 0; j < elementos_bodythird.length; j++) {
           elementos_bodythird[j].style.display = "none";
        }
    // now we show the element with #id = ide (argument of function)
    var elemento = document.getElementById(ide);
    elemento.style.display="grid"

//end of function   
}




function active_aux1  (ide) {
    var padre = document.getElementById("body3");
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < elementosHijosDiv.length; i++) {
           elementosHijosDiv[i].style.display = "none";
           
    }
    const elementos_bodythird = document.querySelectorAll(".body_third");

    for (var j = 0; j < elementos_bodythird.length; j++) {
           elementos_bodythird[j].style.display = "none";
           
    }
    var elemento = document.getElementById(ide);
    elemento.style.display="grid"
    
}


function active_aux2  (ide) {
    var padre = document.getElementById("body4");
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < elementosHijosDiv.length; i++) {
           elementosHijosDiv[i].style.display = "none";
           
    }

    const elementos_bodythird = document.querySelectorAll(".body_third");

    for (var j = 0; j < elementos_bodythird.length; j++) {
           elementos_bodythird[j].style.display = "none";
           
    }
    var elemento = document.getElementById(ide);
    elemento.style.display="grid"
    
}



function aprirePDF(id1,id2,path,vector,cont){
    // Firstly we close all elements that have class .body_third
    const elementos_bodythird = document.querySelectorAll(".body_third");
    for (var j = 0; j < elementos_bodythird.length; j++) {
           elementos_bodythird[j].style.display = "none";
           
    }
    // next we open the element with the path
    const lector = document.getElementById(id1);
    lector.style.display = "grid"

    
    const embed = document.getElementById(id2)
    let path1 = path+vector[cont];
   
    
    embed.src = path1;
    const anchor =embed.querySelector("a");
    anchor.href = path1;
    console.log(vector[cont]);
    console.log(embed.src)
    
}






document.addEventListener('DOMContentLoaded', function() {
    // Obtener el objeto del visor de PDF

    // var pdfViewer = document.querySelector('#contenedor object');
    var closeButton = document.querySelector('.cerrarDocumento');
    const elementos = document.querySelectorAll(".lector");
    // Verificar si el visor de PDF está presente
    // if (pdfViewer) {
    //     // Agregar eventos o funcionalidad adicional aquí
    //     console.log('Visor de PDF cargado correctamente.');
    // }


    if (closeButton) {
        // Agregar eventos o funcionalidad adicional aquí
        
        // Cerrar el documento PDF al hacer clic en el botón
        closeButton.addEventListener('click', function() {
            // pdfViewer.style.display = 'none'; // Oculta el visor de PDF
        
        for (var j = 0; j < elementos.length; j++) {
           elementos[j].style.display = "none";

        }
        console.log(elementos.length)
        });
    }
});



 let contatore =0;
function forward(id,path,vector){

    const imagen = document.getElementById(id);
    contatore +=1;

    if (contatore >= vector.length) {
        contatore = 0;  // Reinicia el contador si alcanza el final del array
    }
    let path1 = path+vector[contatore];
    imagen.src = path1;

}



function back(id,path,vector){
    const imagen = document.getElementById(id);
    
    contatore -=1;
    if (contatore <  0) {
        contatore = vector.length-1;  // Reinicia el contador si alcanza el final del array
    }
    let path1 = path+vector[contatore];
    imagen.src = path1;

   

}