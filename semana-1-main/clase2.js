/* -------------------------------------------------------------------------- */
/*                                  FUNCION 2                                 */
/* -------------------------------------------------------------------------- */
// 👇 Esta funcion nos devuelve 1, 2 o 3 según la elección del usuario.
// Hasta que el usuario ingrese un dato válido le seguimos pidiendo que elija.

function pedirJugada() {
    // empezamos con la variable eleccion en 0
    let eleccion = 0;

    do {
        //como el prompt guarda siemopre un String, lo debemos parsear a Int
        eleccion = parseInt(prompt("Ingrese para jugar: 1- Piedra, 2 - Papel o 3 - Tijera"));

        // Validamos los casos en los que el dato no es válido
    } while (eleccion == null||  isNaN(eleccion) || eleccion < 1 || eleccion > 3);

    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("La eleccion del jugador es:")
    console.log(eleccion);
    console.log("----------------------------");

    // finalmente devolvemos el valor de la eleccion
    return eleccion;
}

/* -------------------------------------------------------------------------- */
/*                                  FUNCION 3                                 */
/* -------------------------------------------------------------------------- */
function jugadaRandom() {
    //Math.random genera numeros aleatorios mayores o = que 0 y menores que 1
    let numero = parseInt(Math.random() * 3 + 1);

    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("La computadora saca:")
    console.log(numero);
    console.log("----------------------------");

    // finalmente devolvemos el valor de la eleccion aleatoria
    return numero;
}



/* -------------------------------------------------------------------------- */
/*                                  FUNCION 4                                 */
/* -------------------------------------------------------------------------- */
// 👇 Esta funcion nos devuelve el resultado de la partida según las elecciones.
// Comparamos la eleccion de cada uno para saber quien pierde y quien gana.

function compararJugadas() {
    const RESULTADOS_POSIBLES = ['¡Genial, ganaste!', 'Esto fue un empate.', 'Una lástima, perdiste.'];

    const eleccionJugador = pedirJugada();
    const eleccionComputadora = jugadaRandom();

    // 👇 Por defecto el jugador gana
    let resultadoRonda = RESULTADOS_POSIBLES[0];

    // 👇 Chequeamos el caso en que empata
    if (eleccionJugador === eleccionComputadora) {
        resultadoRonda = RESULTADOS_POSIBLES[1];

        // 👇 Chequeamos los posibles casos en que pierde, sino ya sabemos que ganó
    } else if ((eleccionJugador === 1 && eleccionComputadora === 2) || (eleccionJugador === 2 && eleccionComputadora === 3) || (eleccionJugador === 3 && eleccionComputadora === 1)) {
        resultadoRonda = RESULTADOS_POSIBLES[2];
    }

    // devolvemos la frase con el resultado de la partida
    return resultadoRonda;
}

//const resultadoDePartida = compararJugadas()
/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).
// 2- La función debe mostrar por consola el resultado de la partida.
// 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.
// 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.

function mostrarResultado(resultado){
    console.log(resultado);
    alert(resultado);
    resultado === "Una lástima, perdiste." ? alert("Mejor suerte la próxima!"): "";
}

//mostrarResultado(resultadoDePartida);

