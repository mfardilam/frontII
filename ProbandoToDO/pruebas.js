window.addEventListener("load", ()=>{
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", (e)=>{
        e.preventDefault();

        const nombre = document.querySelector("#nom");
        const apellido = document.querySelector("#apellido");
        const email = document.querySelector("#email");
        const password = document.querySelector("#pass");


        let objeto = {
            firstName: nombre.value,
            lastName: apellido.value,
            email: email.value,
            password: password.value
        }

        const configuraciones = {
            method: 'POST',
            body: JSON.stringify(objeto),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }
        console.log(objeto);
        fetch('https://todo-api.ctd.academy/v1/users', configuraciones)
            .then(repuesta => repuesta.json())
            .then(datosRecibidos =>{
                console.log(datosRecibidos);
            })

    })

    

});

