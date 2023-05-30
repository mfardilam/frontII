/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
datosPersona.nombre = prompt("Ingresa tu nombre");
datosPersona.edad = 2023 - parseInt(prompt("Ingresa el año en que naciste"));
datosPersona.ciudad = prompt("Ingresa la ciudad en la que vives");
datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?") ? "Sí" : "No";

};

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const cardDatos = document.querySelectorAll(".card-header span");
  cardDatos[0].innerHTML = datosPersona.nombre;
  cardDatos[1].innerHTML = datosPersona.edad;
  cardDatos[2].innerHTML = datosPersona.ciudad;
  cardDatos[3].innerHTML = datosPersona.interesPorJs;  
  
};


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const filaMaterias = document.getElementById("fila");
  filaMaterias.innerHTML = "";

  listado.forEach(materia =>{
    filaMaterias.innerHTML +=`
    <div class="caja">
      <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
      <p class="lenguajes">Lenguajes: ${materia.lenguajes}</p>
      <p class="bimestre">Bimestre: ${materia.bimestre}</p>
    </div>
    `;
  });

};

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  
  const contenedorPrincipal = document.querySelector("#sitio");
  contenedorPrincipal.classList.toggle("dark");

};

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener("keydown",(e)=>{
    const textoSobreMi = document.getElementById("sobre-mi");
    e.key == "F" || e.key == "f" ? textoSobreMi.removeAttribute("class") : "";
} );