/**
 * SideBar
 */
const sidebar = document.getElementById('sidebar');
const boton = document.getElementById('boton-sidebar');
boton.addEventListener('click',sidebarDespliegue);
function sidebarDespliegue() {
    sidebar.classList.toggle('active');
}
/**
 * Menu Responsive
 */
const botonResponsive = document.getElementById('boton-responsive');
const menuHeader = document.getElementById('menuHeader');
//Eventos
botonResponsive.addEventListener('click',despliegueMenu);
//Funciones
function despliegueMenu() {
    menuHeader.classList.toggle('menuResponsive');   
}

//==========================================================
//================= app video Completa =====================
//==========================================================

//Video en pantalla --Constante Global

const videoFrente = document.getElementById('VideoCursoFrente');



//Video 1

const ItemList1 = document.getElementById('ItemList1');

ItemList1.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/K6N8oFPIVB4";
});


//Video 2

const ItemList2 = document.getElementById('ItemList2');

ItemList2.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/2Qr1EYSlhbE";
});


//Video 3

const ItemList3 = document.getElementById('ItemList3');

ItemList3.addEventListener('click',()=>{
    videoFrente.src='https://www.youtube-nocookie.com/embed/HjZua4wNo1s';
});


//Video 4

const ItemList4 = document.getElementById('ItemList4');

ItemList4.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/5CJA-U1Rwso";
});


//Video 5

const ItemList5 = document.getElementById('ItemList5');

ItemList5.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/UPbmTWOSFFs";
});


//Video 6

const ItemList6 = document.getElementById('ItemList6');

ItemList6.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/09F4R4PrIRE";
});


//Video 7

const ItemList7 = document.getElementById('ItemList7');

ItemList7.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/FTjE7DT8IIM";
});


//Video 8

const ItemList8 = document.getElementById('ItemList8');

ItemList8.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/cu2fE7GzDqo";
});


//Video 9

const ItemList9 = document.getElementById('ItemList9');

ItemList9.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/8Ug1ymBEklc";
});


//Video 10

const ItemList10 = document.getElementById('ItemList10');

ItemList10.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/sC4c3Hjpar8";
});


//Video 11

const ItemList11 = document.getElementById('ItemList11');

ItemList11.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/sRuU9_5-sHs";
});


//Video 12

const ItemList12 = document.getElementById('ItemList12');

ItemList12.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/jvZ7XLK1fy0";
});

//Video 13

const ItemList13 = document.getElementById('ItemList13');

ItemList13.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/L54srEmsv-E";
});

//Video 14

const ItemList14 = document.getElementById('ItemList14');

ItemList14.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/fvAs3Vlp4vc";
});
//Video 15

const ItemList15 = document.getElementById('ItemList15');

ItemList15.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/W_GaJmsbOmk";
});

//Video 16

const ItemList16 = document.getElementById('ItemList16');

ItemList16.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/mjjPcwYit7U";
});

//Video 17

const ItemList17 = document.getElementById('ItemList17');

ItemList17.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/_c6TKou3huE";
});

//Video 18

const ItemList18 = document.getElementById('ItemList18');

ItemList18.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/L002Q79hsnw";
});




