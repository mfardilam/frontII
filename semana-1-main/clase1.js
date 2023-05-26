/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {
    // saludamos al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");
    let nombre = null;
    do {
        // guardamos en una variable en nombre ingresado
        nombre = prompt("Ingese su nombre por favor: ");
    } while (nombre == null || nombre.length < 3 || !isNaN(nombre));

        //condición del profe while(nombre.length < 3 || !isNaN(nombre))
        nombre = nombre.toUpperCase(); //Pra aque se vea en el console log y en el alert
        alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");
        // mostramos los datos por consola
        console.log("----------------------------");
        console.log("El jugador es:")
        console.log(nombre);
        console.log("----------------------------");
        console.log(nombre);
        return nombre;
    
}

//Ignacio
/*
function iniciarJuego() {
    let nombre = "";
    do {
        nombre = prompt("Ingresa tu nombre:");
        if (nombre === null || !nombre.match(/[a-zA-Z]+/) || nombre.length < 3) {
        alert("Por favor, ingresa un nombre válido con al menos 3 caracteres.");
        }
    } while (nombre === null || !nombre.match(/[a-zA-Z]+/) || nombre.length < 3);
    
    nombre = nombre.toUpperCase();
    return nombre;
    }*/

// creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función


/*let nombreJugador = iniciarJuego();
console.log(nombreJugador);*/

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.




