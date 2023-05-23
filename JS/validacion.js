function validacionFormulario() {
    //Obtener datos ingresados por el usuario y eliminar espacios en blanco en ambos extremos.
    var nombre = document.getElementById ("name").value.trim();
    var email = document.getElementById ("email").value.trim();

    // Verificar si hay campos en blanco
    if (nombre === "" || email === "") {
    alert("Por favor, complete todos sus datos.");
    return false;
}

//Verificar que el nombre contenga solo caracteres alfabéticos y espacios
for (var i = 0; i < nombre.length; i++) {
    var charCode = nombre.charCodeAt(i);
    if (!((charCode >= 65 && charCode <=90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert ("El nombre debe contener únicamente caracteres alfabéticos y espacios.");
        return false;
    }
}

alert("Forumulario enviado exitosamente.");
return true;
}




