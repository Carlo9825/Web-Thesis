
<<<<<<< Updated upstream



function active_canvas  (ide) {
    // alert("hola");
=======
// Definition where stuff is stored .

// 1 bibliografy

// 1.a documents

let path_biblio ="img/bibliografia/"
const biblio_pdf = ["3 SCHEDA CENSIMENTO O'DONNELL.pdf","5 SCHEDA CENSIMENTO RISCHIO FRANE-IDRAULICO.pdf"]

// 1.b photos

const biblio_img = ["foto1.png","foto2.png"]


//2. Cloudpoints

// 2.a documents



// 2.b photos
const cloud_img = ["foto1.webp","foto2.jpg","foto3.jpg","foto4.jpg"]



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
//4 sfondo
let path_sfondo ="img/sfondo/"
const sfondo_img = ["foto1.jpg", "foto2.png", "foto3.png"]
let lugar = path_sfondo+sfondo_img[0];


function mostrare_sfondo(container){
   const elementi = document.getElementById(container);
   elementi.style.background = 'url(lugar)'+lugar+  ')';;

    }





function active_canvas  (ide,container) {
    
    // first we remove the image as background
    const content = document.getElementById("contnt");
    content.style.background ="white"

    // second we ensure we hide all childrens of #contnt father
>>>>>>> Stashed changes
    var padre = document.getElementById("contnt");
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < elementosHijosDiv.length; i++) {
           elementosHijosDiv[i].style.display = "none";
           
    }

    




    var elemento = document.getElementById(ide);
    elemento.style.display="grid"
    
<<<<<<< Updated upstream
=======
    if (container !== "niente"){
    mostrare_sfondo(container);
    }



//end of function    
>>>>>>> Stashed changes
}

function active_aux (ide) {
    var padre = document.getElementById("body2");
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < elementosHijosDiv.length; i++) {
           elementosHijosDiv[i].style.display = "none";
           
    }
    var elemento = document.getElementById(ide);
    elemento.style.display="grid"
    
}

function active_aux1  (ide) {
    var padre = document.getElementById("body3");
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < elementosHijosDiv.length; i++) {
           elementosHijosDiv[i].style.display = "none";
           
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
    var elemento = document.getElementById(ide);
    elemento.style.display="grid"
    
}