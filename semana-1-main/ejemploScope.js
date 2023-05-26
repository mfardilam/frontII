/*
//Var ya no se usa más, puede ser sobreasignada

var nombre = "Juan";
console.log(nombre);
var nombre = "Pedro";
console.log(nombre);

//Con let no la puedo re-declarar, es más seguro
let nombreLet = "Pepe";
console.log(nombreLet);
nombreLet = "Pepa";
console.log(nombreLet);

//Const no se puede re-declarra ni re-asignar. 
//Por BUENAS PRÁCTICAS, siempre que pueda usar Const, lo debo usar
//para variables que sé que no voy a pisar
const name = "Maff";
console.log(name);
name = "Cambio";
console.log(name);

//lanza error: TypeError: Assignment to constant variable.
*/

/*Las variables existen en el ámbito en donde son creadas */
let nombre = "Pepe";
if(nombre == "Pepe"){
    let nombre = "Carlos";
    console.log(nombre);
}

console.log(nombre);