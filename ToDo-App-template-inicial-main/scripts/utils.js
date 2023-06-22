/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    let regexText = new RegExp('^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$');  
    return texto.lenght >2 && regexText.test(texto);
}

function normalizarTexto(texto) {

}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
    let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regexEmail.test(email);
}

function normalizarEmail(email) {
    
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
    /**La contraseña debe tener al entre 8 y 16 caracteres, 
     * al menos un dígito, al menos una minúscula y al menos una mayúscula */

    let regexPass = new RegExp("^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$");
    return regexPass.test(contrasenia);
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    return contrasenia_1 === contrasenia_2;
}

