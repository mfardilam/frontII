// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.

//Hacemos el control de seguridad
//si se loggean con otro usuario se pisa el token, es decir se sobre ecribe, en el caso de esta API

if(!localStorage.jwt){
  location.replace("/.index.html")
}

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
  const endpointTareas = "https://todo-api.ctd.academy/v1/tasks";
  const endpointInfoUser = "https://todo-api.ctd.academy/v1/users/getMe";
  const token = JSON.parse(localStorage.jwt);

  const formCrearTarea = document.querySelector('.nueva-tarea');
  const nuevaTarea = document.getElementById("nuevaTarea");
  const btnCerrarSesion = document.querySelector("#closeApp");
  const tareasPendientes = document.querySelector('.tareas-pendientes');

  obtenerNombreUsuario();
  consultarTareas();


  //Clase 20
  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {
    const cerrarSesion = confirm("¿Está seguro de que desea cerrar sesión?");
    if(cerrarSesion){
      localStorage.clear();
      location.replace("./index.html");
    };

  });


  //Clase 20
  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    const settings = {
      method: 'GET',
      headers:{
        authorization:token
      }
    };

    fetch(endpointInfoUser, settings)
      .then(response =>response.json())
      .then(datos =>{
        console.log("Nombre de usuario");
        console.log(datos.firstName);

        const nombreUsuario = document.querySelector(".user-info p");
        nombreUsuario.innerText = datos.firstName;
      })
      .catch(error =>console.log(error));


  };


  //Clase 20
  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    const settings = {
      method: 'GET',
      headers:{
        authorization:token
      }
    };
    
    console.log("Consultando tareas -----------------");
    fetch(endpointTareas, settings)
      .then(response => response.json())
      .then(tareas =>{
        console.log("Tareas del usuario");
        console.table(tareas);

        renderizarTareas(tareas);
        botonBorrarTarea();
        botonesCambioEstado();
      })

  };

//Una vez se crea la tarea se debe llamar la función consultarTareas, para que todo se actualice
  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */
  //Mesa de trabajo clase 20 ---------------------------------------------------
  formCrearTarea.addEventListener('submit', function (event) {
    event.preventDefault();
    const payLoad = {
      description: nuevaTarea.value,
      completed: false
    }
    const settings = {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: {
        authorization:token,
        'Content-type': 'application/json'
      }
    }

    fetch(endpointTareas, settings)
      .then(response => response.json())
      .then(datosTarea =>{
        console.log("Nueva tarea: ");
        console.table(datosTarea);

        consultarTareas();
      })



  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {
    tareasPendientes.innerHTML ="";
    listado.forEach(tarea =>{
      tareasPendientes.innerHTML +=`
      <li class="tarea aos-init aos-animate" data-aos="flip-up">
        <button class="change" id="175"><i class="fa-regular fa-circle"></i></button>
        <div class="descripcion">
          <p class="nombre">${tarea.description}</p>
          <p class="timestamp">${new Date(tarea.createdAt).toLocaleDateString()}</p>
        </div>
      </li>
      `;
    });


/**<li class="tarea aos-init aos-animate" data-aos="flip-up">
            <button class="change" id="175"><i class="fa-regular fa-circle"></i></button>
            <div class="descripcion">
              <p class="nombre">Comerr</p>
              <p class="timestamp">22/6/2023</p>
            </div>
          </li> */





  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
      

    

  };

});