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
    videoFrente.src = "https://www.youtube-nocookie.com/embed/3xlUAMXui2c";
});


//Video 2

const ItemList2 = document.getElementById('ItemList2');

ItemList2.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/97hHnlnxpPQ";
});


//Video 3

const ItemList3 = document.getElementById('ItemList3');

ItemList3.addEventListener('click',()=>{
    videoFrente.src='https://www.youtube-nocookie.com/embed/MwVfIP3vuw0';
});


//Video 4

const ItemList4 = document.getElementById('ItemList4');

ItemList4.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/sfTBUHR9pyA";
});


//Video 5

const ItemList5 = document.getElementById('ItemList5');

ItemList5.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/16fc0YSn4o8";
});


//Video 6

const ItemList6 = document.getElementById('ItemList6');

ItemList6.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/o9DjWGp9HiE";
});

//Video 7
const ItemList7 = document.getElementById('ItemList7');

ItemList7.addEventListener('click',()=>{
    videoFrente.src = "https://www.youtube-nocookie.com/embed/N3AEAC7wZdo";
});




