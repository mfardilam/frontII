
//Clase 5 - 17/Mayo
//Primero seleccionamos los elementos con los que vamos a trabajar
const sitio = document.querySelector("body");
const btnTema = document.querySelector(".tema button");
const menuItems = document.querySelectorAll("nav li");
const contenedorNoticias = document.querySelector("main");
const articulos = document.querySelectorAll("article");
const titulos = document.querySelectorAll("article h2");

//Editando esilos ------------------------------------------------
console.log(menuItems[0].style);
//Como se puede editar el estilo sólo de elementos HTML, 
//accedemos a cada elemento del nodelist y editamos sus propiedades
menuItems.forEach(item =>{
    item.style.textTransform = "uppercase";
    item.style.color = "aqua";
    item.style.backgroundColor = "rgba(255,255,255,0.2)";
    item.style.borderRadius = "50vh";
})

/*
//Para hacerlo más fácil y rapido, me creo una clase en js y se la asigno a lo que quiero que cambie

//Agregando clases -----------------------------------------------------------------------------
//sitio.classList.add("dark");

//Removiendo clases ----------------------------------------------------------------------------
//sitio.classList.remove("dark");

//console.log(sitio.classList.contains("dark")); //devuelve boolean

// if(sitio.classList.contains("dark")){
//     sitio.classList.remove("dark");
// }else{
//     sitio.classList.add("dark")
// }

//Usamos el toggle para pasar de una posicion a otra, podemos hacer lo anterior en una linea
sitio.classList.toggle("dark");
*/


// 🚩 Antes de empezar, vinculemos el HTML solo con el script de clase 5.

// Vamos a interactuar con el DOM para agregarle mas estilos a nuestro sitio.
// 👇 Primero capturemos todos los elementos que vamos a modificar.
/*
const sitio = document.querySelector('body');
const btnTema = document.querySelector('.tema button')
const menuItems =  document.querySelectorAll('nav li');
const contenedorNoticias = document.querySelector('main');
const articulos = document.querySelectorAll('article');
const titulos = document.querySelectorAll('article h2');
*/
/* ---------------------------- Editado los ITEMS --------------------------- */
// 👇acá podemos ver todas las propiedades CSS que podemos modificar con JS
/*console.log(menuItems[0].style)
// agregamos manualmente nuevos estilos en el menú
menuItems.forEach( item => {
    item.style.textTransform = "uppercase";
    item.style.color = "aqua";
    item.style.backgroundColor = "rgba(255,255,255,0.2";
    item.style.borderRadius = "50vh";
})

console.log(contenedorNoticias)*/

/* ----------------------------- Editando clases ---------------------------- */

// vamos probando uno a uno los métodos
/*console.log(sitio.classList)

console.log(sitio.classList.contains('dark'))
console.log(sitio.classList)

console.log(sitio.classList.add('dark'))
console.log(sitio.classList)

console.log(sitio.classList.add('remove'))
console.log(sitio.classList)

console.log(sitio.classList.toggle('remove'))
console.log(sitio.classList)*/



/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Primero debemos comentar o eliminar las líneas que modifican las clases de "sitio"
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo oscuro, el texto del boton debe decir "Cambiar a modo claro 🌞". 
//De lo contrario, si está en modo claro debeb decir "Cambiar a modo oscuro 🌛"
function elegirTema() {
    if(confirm("¿Desea usar el modo oscuro?")){
        sitio.classList.toggle("dark");
    }
    if(sitio.classList.contains("dark")){
        btnTema.innerHTML = "Cambiar a modo claro 🌞";
    }else{
        btnTema.innerHTML = "Cambiar a modo oscuro 🌛";
    }
    
}
elegirTema();