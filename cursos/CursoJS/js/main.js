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
    videoFrente.src = "https://www.youtube-nocookie.com/embed/2SetvwBV-SU";
});


//Video 2

const ItemList2 = document.getElementById('ItemList2');

ItemList2.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/C5FXZ2ki13k";
});


//Video 3

const ItemList3 = document.getElementById('ItemList3');

ItemList3.addEventListener('click',()=>{
    videoFrente.src='https://www.youtube-nocookie.com/embed/tmRa0_EvMoc';
});


//Video 4

const ItemList4 = document.getElementById('ItemList4');

ItemList4.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/PIHZRj99nHU";
});


//Video 5

const ItemList5 = document.getElementById('ItemList5');

ItemList5.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/s-C8OpALC6E";
});


//Video 6

const ItemList6 = document.getElementById('ItemList6');

ItemList6.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/arOXcy7K4XQ";
});


//Video 7

const ItemList7 = document.getElementById('ItemList7');

ItemList7.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/o4p6p1z2P5A";
});


//Video 8

const ItemList8 = document.getElementById('ItemList8');

ItemList8.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/Csu9tRuuX0M";
});


//Video 9

const ItemList9 = document.getElementById('ItemList9');

ItemList9.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/dux1Uv2eLfw";
});


//Video 10

const ItemList10 = document.getElementById('ItemList10');

ItemList10.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/H6U1Pm7x60E";
});


//Video 11

const ItemList11 = document.getElementById('ItemList11');

ItemList11.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/o3c8cW73weQ";
});


//Video 12

const ItemList12 = document.getElementById('ItemList12');

ItemList12.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/4xig5UPRC00";
});

//Video 13

const ItemList13 = document.getElementById('ItemList13');

ItemList13.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/_8Z5AeGVIXE";
});

//Video 14

const ItemList14 = document.getElementById('ItemList14');

ItemList14.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/9h5hyh_wDjo";
});

//Video 15

const ItemList15 = document.getElementById('ItemList15');

ItemList15.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/AapgtR0Rwk0";
});

//Video 16

const ItemList16 = document.getElementById('ItemList16');

ItemList16.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/SPVL8uAezaw";
});

//Video 17

const ItemList17 = document.getElementById('ItemList17');

ItemList17.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/PIZf5MSe8_I";
});




