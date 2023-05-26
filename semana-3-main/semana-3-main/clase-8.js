//Clase 8 - 24 Mayo

//Inicio esta en /eventos

function marcarFavorito(){
    const botonesLike = document.querySelectorAll(".fa-heart");

    botonesLike.forEach(boton => {
        boton.addEventListener("click", ()=>{
            console.log(boton.id);

            albumesFamosos.forEach(album =>{
                if(album.id === boton.id){
                    //Acá lo invierto
                    album.like = !album.like;
                    //acá podría de una vez cambiar el color del corazón, 
                    //pero es mejor hacerlo como está planteado
                }
            })

        //para que se actualice
        renderizarAlbumes(albumesFamosos)
        //Si no lo hago sólo funciona una vez
        marcarFavorito();

        } )
        
    });
}

marcarFavorito();

//Github --------------------------------------------------------------------------------
/* -------------------------------------------------------------------------- */
/*                        [4] FUNCION: marcar favorito                        */
/* -------------------------------------------------------------------------- */
// - buscar el album por id en el array 
// - cambiar el estado del like
// - volver a renderizar
// function marcarFavorito() {
//     // seleccionamos todos lo botones de like
//     const botonesLike = document.querySelectorAll('.fa-heart');

//     botonesLike.forEach(boton => {
//         // 👇 por cada boton escuchamos su click
//         boton.addEventListener('click', function () {
//             console.log(boton.id);

//             // recorreremos el listado de albumes
//             albumesFamosos.forEach(album => {
//                 // si encontramos al que coincide con el boton apretado,
//                 // le cambiamos la propiedad like por lo contrario
//                 if (album.id === boton.id) {
//                     album.like = !album.like;
//                 }
//             })

//             //👇 post click debemos renderizar nuevamente las tarjetas
//             renderizarAlbumes(albumesFamosos);
//             //👇 post click debemos agregar el listener a cada nuevo boton otra vez ya que el renderizado eliminó lo anterior
//             marcarFavorito();
//         })
//     })

// }
// marcarFavorito()



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a 
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
// presiona la tecla f
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
// para que ingrese el nombre del album que desea eliminar
// 3- Podemos buscar la posicion del almbum buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.
//Puedo usar splice

function eliminarAlbum() {
    // desarrollar la función 👇
    window.addEventListener("keydown", (e)=>{
        if(e.key === "f" || e.key === "F"){
            let albumEliminar = prompt("Ingrese el nombre del album que desea eliminar").toLocaleLowerCase();
            let rdo = albumesFamosos.findIndex((album)=> album.nombre.toLocaleLowerCase() == albumEliminar);
            if(rdo >= 0){
                albumesFamosos.splice(rdo, 1);
                renderizarAlbumes(albumesFamosos);
                marcarFavorito();
            }else{
                alert("Album no encontrado");
            }
        }
    })

}
eliminarAlbum();