// Vamos a trabajar pasando información al Storage.
// De esta manera vamos a poder consumir en un html algo que haya guardado otro.
// 👉 Para eso debemos agregar al principio de la función [5] en script 'Clase-13' la siguiente línea:
//     localStorage.setItem('user', JSON.stringify(estadoUsuario));
chequearUsuarioValido();
/* -------------------------------------------------------------------------- */
/*           [6] FUNCION: Escuchamos el evento de carga de la página          */
/* -------------------------------------------------------------------------- */
window.addEventListener('load', function () {
    //Para que una vez haya cargado la página, levante lo que está en el storage
    const user = recuperarDataStorage();
    //La info que del storage se renderice, se muestre en pantalla
    renderizarElementos(user);


    // // 👇 Todo lo que desarrollamos dentro, se ejecuta una vez que se carga la página

    // // nos traemos la info del storage
    // const user = recuperarDataStorage();

    // // utilizamos la funcion para el renderizado
    // renderizarElementos(user);

})

/* -------------------------------------------------------------------------- */
/*                 [7] FUNCION: Recuperar la info del storage                 */
/* -------------------------------------------------------------------------- */
function recuperarDataStorage() {

    //Traigo lo que había guardado
    const datosJSON = localStorage.getItem('usuario');

    //como esto es string hay que parsearlo a JSON
    const datosParseados = JSON.parse(datosJSON);
    console.log(datosParseados);
    console.log(datosJSON);

    return datosParseados;


    // const datosEnJSON = localStorage.getItem('user');

    // const datosParseados = JSON.parse(datosEnJSON);

    // return datosParseados;
}


/* -------------------------------------------------------------------------- */
/*                [8] FUNCION: Renderizamos la info en pantalla               */
/* -------------------------------------------------------------------------- */
function renderizarElementos(objeto) {
    const email = document.querySelector('#email');
    const perfil = document.querySelector('#perfil');

    email.innerHTML = objeto.email;
    perfil.innerHTML = objeto.rol;

    // // capturamos los nodos
    // const email = document.querySelector('#email');
    // const perfil = document.querySelector('#perfil');

    // // pintamos las propiedades del objeto en pantalla
    // email.innerText = objeto.email;
    // perfil.innerText = objeto.rol;
}


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                     [9] FUNCION: Boton de cerrar sesion                    */
/* -------------------------------------------------------------------------- */
// Ahora vamos a crear elementos en el DOM dinamicamente y le asignaremos a esos elementos la escucha de eventos.
// ☝ La funcion debe ser ejecutada al final del evento Load.
// La idea es crear un boton para cerrar sesión. Entonce necesitamos cumplir los siguientes puntos:
// 1- Crear un elemento <button>
// 2- Que ese botón tenga el texto "Cerrar sesión"
// 3- El boton tiene que tener ciertos estilos:
//     - padding arriba y abajo de 5px y a los costados 20px
//     - color de fondo rojo con transparencia: rgba(255,0,0,0.2)
//     - color de letra rojo
//     - margenes a todos los lados de 20px
//     - ningún borde
//     - cursor de tipo pointer
// 4- Tenemos que agregar el botón en pantalla, adentro del div con la clase 'user', al final del mismo
// 5- El botón debe reaccionar cuando se le hace click
// 6- Mediante el click debe aparecer un cuadro de confirmación que pregunte: "¿Seguro desea cerrar sesión?"
// 7- Si el usuario acepta debe borrar todo el storage y redirigirlo a la pantalla de Login. //RemoveItem o clear

function botonCerrarSesion() {
    //    👇 desarrollar la función
    const divUser = document.querySelector(".user");
    const btnLogout = document.createElement("button");
    btnLogout.setAttribute("class", "btn-logout");
    btnLogout.innerText = "Cerrar sesión";
    divUser.appendChild(btnLogout);    

    btnLogout.addEventListener("click", ()=>{
        if(confirm("¿Seguro desea cerrar sesión?")){
            localStorage.removeItem('usuario');
            location.replace('./index.html');
        }
    })

}

botonCerrarSesion();

function chequearUsuarioValido() {

    // 👇 objeto que obtenemos del storage
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    // chequeamos las propiedades del objeto
    
    
    if(usuario !== null){
        // 👇utilizamos destructuring para separar las variables
        const { email, password, rol, terminos } = usuario;
        console.log(usuario);
        console.log(`-> ${email}\n-> ${password}\n-> ${rol}\n-> ${terminos}`);
    }else{
        alert("Debes iniciar sesión")
        location.replace('./')
        localStorage.clear();
    }

}