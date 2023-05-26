// 👇Acá vemos que el document nos dá acceso a todo el DOM, ese arbol que contiene todos los nodos de nuestro sitio
console.log(document);
console.log(window);

// Ahora vamos a utilizar 2 métodos propios de document que nos facilitan "pescar" elementos en el sitio:
// - querySelector()
// - querySelectorAll()

// le pasamos el selector que nos interesa, en este caso H1
const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('.info');
console.log(titulo);
console.log(titulo2);

//Para seleccionar varios, devuelve un NodeList, que es similar a un Array
const elementosLi = document.querySelectorAll('li')
console.log(elementosLi);

//Seleccionando de manera más específica
const infoExtra = document.querySelector('.info .clima') // aca le digo, seleccione el clima que sea hijo de info
//body > header > div.info > p.clima --> con esto es mucho más específico
console.log(infoExtra);


//seleccionando artículos - todos

const articulos = document.querySelectorAll('article');
for(let i=0; i< articulos.length; i++){
    console.log("Iteración "+(i+1));
    console.log(articulos[i]);
}
console.log("Lo mismo pero con for each");
articulos.forEach(articulo => { //Recibe como parámetro una función de callback
    //F. callback son funciones que se ejecutan dentro de otra, y que cuando se le pone parámetro, 
    //se llena con lo que retorna la función en donde la estoy invocacondo (el forEach en este caso)
    const titulo = articulo.querySelector("h2").innerText;
    //el querySelector será para almacenar todo el h2, y el innerText para que me guarde sólo el texto del h2
    console.log(titulo);
});



































/* --------------------------------------------------------------------------------------
// Ahora vayamos a la consola y despleguemos la flecha que nos muestra todas las propiedades del nodo
console.log(titulo);

// nos traemos ahora un listado de nodos 👇
const itemsMenu = document.querySelectorAll('li');
console.log(itemsMenu);

// hacemos un selector más específico👇
const infoExtra = document.querySelector('.info .clima')
console.log(infoExtra);

/* ------------------------------- Practicando ------------------------------ */
// Seleccionamos la lista de noticias y revisamos su informacion interna.
// Aprovechamos que la NodeList es un ITERABLE, entonces podemos recorrerla.
// 🚩 No es un Array.
/*
const articulos = document.querySelectorAll('article');

for (let i = 0; i < articulos.length; i++) {
    console.log(articulos[i]);
}

// Ahora hacemos la misma practica pero con ForEach, y accedemos a propiedades de los nodos.
articulos.forEach( articulo =>{
    const titulo = articulo.querySelector('h2').innerText;
    console.log(titulo);
    // 💡 si quisieramos,acá podemos mutar los nodos, o cambiar algunas de sus propiedades
});*/


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1 - Escribir un selector para cada elemento del sitio.
// 2 - Plasmarlo en un diagrama de árbol como la consigna: https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview


