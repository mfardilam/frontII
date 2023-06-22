window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.querySelector('form');
    const name = document.querySelector('#inputNombre');
    const lastName = document.getElementById("inputApellido");
    const email = document.querySelector('#inputEmail');
    const pass = document.querySelector('#inputPassword');
    const endpoint = "https://todo-api.ctd.academy/v1";


    

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const payLoad = {
            firstName: name.value,
            lastName: lastName.value,
            email: email.value,
            password: pass.value
        };
        //Charsert indica el tipo de caracteres a usar, no es necesario en esta API
        const settings = {
            method: 'POST',
            body: JSON.stringify(payLoad),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        };

        //Validando
        //if(validarTexto(name.value)&&validarTexto(lastName.value)&&validarEmail(email.value)&&validarContrasenia(pass.value))
        realizarRegister(settings);
        form.reset();

    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(settings) {
        console.log("Se envia la consulta a la API");

        fetch(`${endpoint}/users`, settings)
            .then( response =>{
                console.log(response);
                !response.ok? alert("Alguno de los datos ingresado es inválido") : "";
                return response.json();
            })
            .then(datos =>{
                console.log("Se cumplió la promesa c:");
                console.log(datos);
                if(datos.jwt){
                    localStorage.setItem("jwt", JSON.stringify(datos.jwt));
                    location.replace("./mis-tareas.html");
                }
            })
            .catch(error =>{
                console.log("Promesa rechazada");
                console.log(error);
            })

    };


});