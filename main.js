let cantidad_caracteres = document.getElementById("cantidad");
let boton = document.getElementById("generar");
const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let contrasena = document.getElementById("contrasena");

function generarContrasena() {
    let numeroDigitado = parseInt(cantidad_caracteres.value);
    if (numeroDigitado<8) {
        alert("La contraseña debe tener al menos 8 caracteres");
    }
    else{
        let password = "";
        for (let i = 0; i < numeroDigitado; i++) {
            let caracterAleatorio = caracteres[Math.floor( Math.random() * caracteres.length)];
            password += caracterAleatorio;
        }
        contrasena.value = password;
    }
    
    

}