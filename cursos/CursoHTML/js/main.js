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
    videoFrente.src = "https://www.youtube-nocookie.com/embed/Qla90rIkOFc";
});


//Video 2

const ItemList2 = document.getElementById('ItemList2');

ItemList2.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/a4w7TCWV-dU";
});


//Video 3

const ItemList3 = document.getElementById('ItemList3');

ItemList3.addEventListener('click',()=>{
    videoFrente.src='https://www.youtube-nocookie.com/embed/U5Y5bIXMFGQ';
});


//Video 4

const ItemList4 = document.getElementById('ItemList4');

ItemList4.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/bYBoVAeCZL8";
});


//Video 5

const ItemList5 = document.getElementById('ItemList5');

ItemList5.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/rVv9RCT1XS4";
});


//Video 6

const ItemList6 = document.getElementById('ItemList6');

ItemList6.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/mFK2rXJuawE";
});


//Video 7

const ItemList7 = document.getElementById('ItemList7');

ItemList7.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/esPkvtfVCaI";
});


//Video 8

const ItemList8 = document.getElementById('ItemList8');

ItemList8.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/6TewE1BCZ_M";
});


//Video 9

const ItemList9 = document.getElementById('ItemList9');

ItemList9.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/_TXLZT5u7bI";
});


//Video 11

const ItemList10 = document.getElementById('ItemList10');

ItemList10.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/b2ABHDbfDe8";
});


//Video 11

const ItemList11 = document.getElementById('ItemList11');

ItemList11.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/Ioo5phcT13w";
});


//Video 12

const ItemList12 = document.getElementById('ItemList12');

ItemList12.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/oBmrloY-NBU";
});




