
// Definition where stuff is stored .

// 1 bibliografy

// 1.a documents

let path_biblio ="img/bibliografia/"
const biblio_pdf = ["3 SCHEDA CENSIMENTO O'DONNELL.pdf","5 SCHEDA CENSIMENTO RISCHIO FRANE-IDRAULICO.pdf"]

// 1.b photos

const biblio_img = ["foto1.png","foto2.png","foto4.png","foto5.png","foto6.png","foto7.png","foto3.png"]

const biblio_text_array =[
    "Cross Section of the Deck",
    "North Elevation Original Drawing",
    "Hazard Class",
    "Vulnerability Class",
    "Exposure Class",
    "Attention Class",
    "Multilevel approach and relationships between levels of analysis"
    
    ]


//2. Cloudpoints


// 2.a documents

let path_cloud ="img/cloud/"
const cloud_pdf = ["Piano di manutenzione We BRIDGE.pdf"]

// 2.b photos
const cloud_img = ["foto1.webp","foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg","foto6.png"]




//3. Inspection


// 3.a documents

let path_ispezioni ="img/ISPEZIONI/"
const ispezioni_pdf = ['schede di difettosità.pdf']

// 3.b.1  photos appoggi
const appoggi_img = ["Appoggi/foto1.png","Appoggi/foto2.png","Appoggi/foto3.png","Appoggi/foto4.png"]

const supports_text_array =[
    "a",
    "b",
    "Hazard Class",
    "Vulnerability Class",
    
    ]



// 3.b.2  photos Giuti
const giuti_img = ["Giuti/Foto giuto.png","Giuti/foto giunto 2.png"]

const movement_text_array =[
    "a",
    "b",
        ]




// 3.b.3  photos solleta
const solleta_img = ["Soletta-Pavimentazione stradale/foto1.png",
    "Soletta-Pavimentazione stradale/foto2.png",
    "Soletta-Pavimentazione stradale/foto3.png",
    "Soletta-Pavimentazione stradale/foto4.png",
    "Soletta-Pavimentazione stradale/foto5.png",
    "Soletta-Pavimentazione stradale/foto6.png",
    "Soletta-Pavimentazione stradale/foto7.png",
    "Soletta-Pavimentazione stradale/foto8.jpg"
   
    ]


const slab_text_array =[
    "I",
    "II",
    "III",  
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",

    
    ]



// 3.b.4  photos Spalle
const spalle_img = ["Spalle/foto1.png",
    "Spalle/foto2.png",
    "Spalle/foto3.png",
    "Spalle/foto4.png",
    "Spalle/foto5.png",
    "Spalle/foto6.png",
    "Spalle/foto7.png",
   
    ]


const abutments_text_array =[
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",   
    ]

// 3.b.5  photos Traversi
const traversi_img = ["Traversi/foto1.png",
    "Traversi/foto2.png",
    "Traversi/foto3.jpg",
    ]

const traversi_text_array =[
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",

    
    ]



// 3.b.6  photos Travi
const travi_img = ["Travi/foto1.jpg",
    "Travi/foto2.jpg",
    "Travi/foto3.jpg",
    "Travi/foto4.png",
    "Travi/foto5.png",
    "Travi/foto6.png",
    "Travi/foto7.png",
    "Travi/foto9.png",
    
    ]

const beams_text_array =[
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",   
    ]


// 4 sfondo

let path_sfondo ="img/sfondo/"



const sfondo_img = ["foto4.png","foto1.jpg","foto3.png"]



function cambiar_sfondo_body_secondary(arg ){
    let aux;

    if (arg === 'body2') {
        aux = sfondo_img[0];
    } else if (arg === 'body3') {
        aux = sfondo_img[1];
    } else if (arg === 'body4') {
        aux = sfondo_img[2];
    }

    let path_sfondo1 = path_sfondo + aux;
    const elemento = document.getElementById(arg);
     
    elemento.style.backgroundImage = 'url('+path_sfondo1+')';
    elemento.style.backgroundSize = 'cover';
}

function quitar_sfondo_body_secondary(arg ){
     
    const content = document.getElementById(arg);
     
    content.style.background = 'white';
     
}

function apagar_body_third(){
    const body_Third_Elements =document.getElementsByClassName('body_third');
      for (var i = 0; i < body_Third_Elements.length; i++) {
           body_Third_Elements[i].style.display = "none";
        }
}



function active_canvas  (ide,arg ) {
    
// first we remove the image as background
    const content = document.getElementById("contnt");
    content.style.background ="white"
    apagar_body_third()





   

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
    cambiar_sfondo_body_secondary(arg)
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

    quitar_sfondo_body_secondary(father )

//end of function   
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
function forward(id,path,vector,id2,vector2){

    const imagen = document.getElementById(id);
    const p_text = document.getElementById(id2);
    contatore +=1;

    if (contatore >= vector.length) {
        contatore = 0;  // Reinicia el contador si alcanza el final del array
    }
    let path1 = path+vector[contatore];
    imagen.src = path1;
    p_text.innerText=vector2[contatore];

}



function back(id,path,vector,id2,vector2){
    const imagen = document.getElementById(id);
    const p_text = document.getElementById(id2);
    
    contatore -=1;
    if (contatore <  0) {
        contatore = vector.length-1;  // Reinicia el contador si alcanza el final del array
    }
    let path1 = path+vector[contatore];
    imagen.src = path1;
    p_text.innerText=vector2[contatore];

   

}