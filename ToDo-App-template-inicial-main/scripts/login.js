//Poniendo todo dentro de esta se asegura que haya cargado tooodo el html y ahí si ejecuta
window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.querySelector('form');
    const email = document.querySelector('#inputEmail');
    const pass = document.querySelector('#inputPassword');
    const endpoint = "https://todo-api.ctd.academy/v1";
    



    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
    
        event.preventDefault();

        //La carga, lo que se le va a enviar
        const payLoad = {
            email: email.value,
            password: pass.value
        };

        const settings = {
            method: "POST",
            body: JSON.stringify(payLoad),
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            }
        };

        realizarLogin(settings);
        form.reset();

    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
        console.log("Lanzando la consulta a la API");

        fetch(`${endpoint}/users/login`, settings)
            .then(response =>{
                //Se hace una validación
                console.log(response);
                if(!response.ok){
                    alert("Alguno de los datos es incorrecto")
                }
                return response.json();
            })
            .then(datos =>{
                console.log("Promesa cumplida :)");
                console.log(datos);
                //preguntamos si tiene el token, que es la propiedad jwt
                if(datos.jwt){
                    localStorage.setItem("jwt", JSON.stringify(datos.jwt));
                    location.replace("./mis-tareas.html");
                }
            })//vamos a manejar errores con el servidor con el catch 
            .catch(err =>{
                console.log("Promesa rechazada");
                console.log(err);
            })


        
    };


});