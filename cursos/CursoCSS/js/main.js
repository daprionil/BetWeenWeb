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
    videoFrente.src = "https://www.youtube-nocookie.com/embed/24gNhTcy6pw";
});


//Video 2

const ItemList2 = document.getElementById('ItemList2');

ItemList2.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/uqkj7HQ7ids";
});


//Video 3

const ItemList3 = document.getElementById('ItemList3');

ItemList3.addEventListener('click',()=>{
    videoFrente.src='https://www.youtube-nocookie.com/embed/BTv5Etachw0';
});


//Video 4

const ItemList4 = document.getElementById('ItemList4');

ItemList4.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/XHkcNr93xoE";
});


//Video 5

const ItemList5 = document.getElementById('ItemList5');

ItemList5.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/SKkKLi1wAos";
});


//Video 6

const ItemList6 = document.getElementById('ItemList6');

ItemList6.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/hBR43vXWIpE";
});


//Video 7

const ItemList7 = document.getElementById('ItemList7');

ItemList7.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/JwyjHyGOgmg";
});


//Video 8

const ItemList8 = document.getElementById('ItemList8');

ItemList8.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/maHYUmtnals";
});


//Video 9

const ItemList9 = document.getElementById('ItemList9');

ItemList9.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/yc1bCB689bE";
});


//Video 10

const ItemList10 = document.getElementById('ItemList10');

ItemList10.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/L1b7xyupCcg";
});


//Video 11

const ItemList11 = document.getElementById('ItemList11');

ItemList11.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/4CM-wa7abtI";
});


//Video 12

const ItemList12 = document.getElementById('ItemList12');

ItemList12.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/tg2HC4HXB_4";
});

//Video 13

const ItemList13 = document.getElementById('ItemList13');

ItemList13.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/fevd1G4FY-c";
});

//Video 14

const ItemList14 = document.getElementById('ItemList14');

ItemList14.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/HDqJS5puXs4";
});




