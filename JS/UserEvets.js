function registrar() {
    iduser = document.getElementById("idUser").value;
    idpass = document.getElementById("idPass").value;
    if(chequearExistencia(iduser) == false){
        var nuevo = new NuevoUsuario(iduser,idpass)
        guardarUsuario(nuevo)
    }
    else{
        console.log("Usuario ya logueado, por favor verificar usuarios registrados en sessionStorage.")
    }
}

function crearTorneo() {
    var idJuego = $('#idJuego').val();
    var idNombre = $('#idNombre').val();
    var idPremio = $('#idPremio').val();
    var idInscriptos = $('#idInscriptos').val();
    var idOrganizador = $('#idOrganizador').val();
    var idRegistro = $('#idRegistro').val();
    var idRegistrofin = $('#idRegistrofin').val();
    var idDia = $('#idDia').val();
    var idHora = $('#idHora').val();
    if(chequearExistenciaTN(idNombre) == false){
        var nuevo = new NuevoTorneo(idJuego,idNombre,idPremio,idInscriptos,idOrganizador,idRegistro,idRegistrofin,idDia,idHora); 
        registrarTorneo(nuevo);
        AplicarDatosTorneoAlDOM(nuevo)
    }
    else{
        alert("Un torneo con este nombre ya se encuentra resgistrado, por favor verificar en localStorage.")
    }
}