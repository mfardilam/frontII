const h1 = document.querySelector("h1");

//Agregamos el 'escuchador'
h1.addEventListener("click", (e)=>{
    console.log(e); //PointerEvent
    h1.style.color = "red";
    e.target.innerText = "Soy rojo";
})

h1.addEventListener("mouseover", ()=>{
    h1.style.color = "green";
})