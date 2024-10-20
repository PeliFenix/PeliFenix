function VerificarContraseña () {
    var contraseña = document.getElementById ("contraseña").value;
    var ContraseñaIncorrecta = "2024";
    
    if (contraseña === ContraseñaIncorrecta){
        window.location.href = "menu.html";
    } else {
        alert("Contraseña incorrecta");
    }
}