/* -------------------------- estado por defecto ------------------------- */

//Toda variable que pueda cambiar tendra estados para validarlo, en objeto estadoErroresOK
const estadoUsuario = {
    email: "",
    password: "",
    rol: "",
    terminos: false
};

// ponemos en true solo cuando estén correctos
//sería más claro si se llamar estadoValidacion={}
const estadoErroresOK = {
    email: false,
    password: false,
    rol: false,
    terminos: false
};

/* ---------------------------------- nodos --------------------------------- */

// capturamos todos los elementos que necesitamos
const formulario = document.forms[0];


//Seleccionamos los inputs
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputRol = document.querySelector('#rol');
const inputTerminos = document.querySelector('#terminos');


//Seleccionamos los errores
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const rolError = document.querySelector('#rolError');
const terminosError = document.querySelector('#terminosError');


/* -------------------------------------------------------------------------- */
/*                   [1] FUNCION: mostrar errores al usuario                  */
/* -------------------------------------------------------------------------- */
function mostrarErrores() {
    //Los errores ya están escritos en el HTML

    /*Acá verificvamos el estado de los errores, si es true remueve el atributo visible para que se vea */
    
    // por cada small mostramos u ocultamos el error
    estadoErroresOK.email ? emailError.classList.remove('visible') : emailError.classList.add('visible');

    estadoErroresOK.password ? passwordError.classList.remove('visible') : passwordError.classList.add('visible');

    estadoErroresOK.rol ? rolError.classList.remove('visible') : rolError.classList.add('visible');

    estadoErroresOK.terminos ? terminosError.classList.remove('visible') : terminosError.classList.add('visible');
}

/* -------------------------------------------------------------------------- */
/*               [2] FUNCION: actulizamos los estados de la app               */
/* -------------------------------------------------------------------------- */

// 👇 por cada cambio en el formulario actualizamos
formulario.addEventListener('change', function () {
    //Cuando se detecta que haga algo en el campo, evento Change


    //Actualizando los datos ingresados en el objeto dispuesto para guardarlos
    estadoUsuario.email = inputEmail.value;
    estadoUsuario.password = inputPassword.value;
    estadoUsuario.rol = inputRol.value;
    estadoUsuario.terminos = inputTerminos.checked;


    //Una vez capturados, se validan y cargamos el rdo al objeto de errores
    estadoErroresOK.email = validarEmail(estadoUsuario.email);
    estadoErroresOK.password = validarPassword(estadoUsuario.password);
    estadoErroresOK.rol = validarRol(estadoUsuario.rol);
    estadoErroresOK.terminos = validarTerminos(estadoUsuario.terminos);

    //ahora se muestran
    mostrarErrores();


    /*
    // 👇 actualizo el estado de la pantalla con los datos
    estadoUsuario.email = inputEmail.value;
    estadoUsuario.password = inputPassword.value;
    estadoUsuario.rol = inputRol.value;
    estadoUsuario.terminos = inputTerminos.checked;

    // 👇 actualizo el estado del error segun el estado del usuario
    estadoErroresOK.email = validarEmail(estadoUsuario.email);
    estadoErroresOK.password = validarPassword(estadoUsuario.password);
    estadoErroresOK.rol = validarRol(estadoUsuario.rol);
    estadoErroresOK.terminos = validarTerminos(estadoUsuario.terminos);

    // finalmente muestro los errores presentes
    mostrarErrores();*/
});


/* -------------------------------------------------------------------------- */
/*                        [3] FUNCIONES: validar campos                       */
/* -------------------------------------------------------------------------- */

//Funciones de validación -------------------------------------------------------------
function validarEmail(email) {

    
    let resultado = false;

    // // EJEMPLO VALIDACIÓN A MANO 👇
    // if (email.includes('@') && email.includes('.') && !email.includes(' ') && email.length > 5) {
    //     resultado = true;
    // } 

    // EJEMPLO CON EXPRESION REGULAR 👇
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if (regex.test(email)) {
        resultado = true;
    }

    return resultado;
}

function validarPassword(password) {
    let resultado = false;

    if(password.length > 5 && !password.includes(' '))resultado = true;

    // si pasa las pruebas lo damos por válido 👇
    // if (password.length > 5 && !password.includes(' ')) {
    //     resultado = true;
    // }

    return resultado;
}

function validarRol(rol) {
    let resultado = false;

    if(rol === "frontend" || rol === "backend")resultado = true;
    /*
    let resultado = false;

    // si pasa las pruebas lo damos por válido 👇
    if (rol === "frontend" || rol === "backend") {
        resultado = true;
    }*/

    return resultado;
}

function validarTerminos(verificacion) {
    let resultado = false;

    if(verificacion) resultado = true;
    /*
    let resultado = false;

    // si pasa las pruebas lo damos por válido 👇
    if (verificacion) {
        resultado = true;
    }

    return resultado;*/
    //Todo esto sobra, porque es directamente un booleano la entrada, es terminos
    return resultado;
}


/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: escuchamos el submit                     */
/* -------------------------------------------------------------------------- */

// en el evento submit nos remitimos a chequear nuestro estado de errores
formulario.addEventListener('submit', function (evento) {

    // prevenimos el default para manejar nososotro el comportamiento
    evento.preventDefault();

    console.log(estadoUsuario);
    console.log(estadoErroresOK);

    if (estadoErroresOK.email && estadoErroresOK.password && estadoErroresOK.rol && estadoErroresOK.terminos) {
        //alert("Pasó todas las validaciones!");
        // ☝ luego reemplazar esto por la funcion de éxito
        navegarPaginaExito();
    }

});




/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */

//Location,replace(URL)
// Esta funcion se va a encargar de realizar la redirección cuando el formulario se complete correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Deshabilitar el boton del formulario.
// 2 - Esperar 3 segundos para redireccionar a la página de 
// 3 - Durante ese tiempo el boton deshabilitado debe mostrar el texto: "Cargando..."
// 4 - Cuando vaya a la página de 'usuario.html' NO se debe permitir que mediante el botón de "Atrás"(la flechita del navegador) el usuario vuelva a index.

function navegarPaginaExito() {
    //   desarrollar la funcion aqui

    //Guardeme la info de estado usuario en el storage, me apoyo en JSON para pasarlo a String
    localStorage.setItem('usuario', JSON.stringify(estadoUsuario));
    const boton = document.querySelector('form button');
    boton.disable = true;
    boton.textContent = "Cargando...";
    setTimeout(()=>{
        location.replace('./usuario.html');
    },3000);

}
